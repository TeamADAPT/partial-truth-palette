-- MyBizAI Supabase Schema with RLS
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enum Types
CREATE TYPE task_status AS ENUM ('todo', 'in_progress', 'done');
CREATE TYPE task_priority AS ENUM ('low', 'medium', 'high');
CREATE TYPE team_role AS ENUM ('admin', 'member');
CREATE TYPE app_role AS ENUM ('admin', 'moderator', 'user');

-- Profiles Table
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Teams Table
CREATE TABLE teams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects Table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tasks Table
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    status task_status NOT NULL DEFAULT 'todo',
    priority task_priority NOT NULL DEFAULT 'medium',
    due_date DATE,
    assignee_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Team Members Table
CREATE TABLE team_members (
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    role team_role NOT NULL DEFAULT 'member',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (team_id, user_id)
);

-- Roles Table
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Permissions Table
CREATE TABLE permissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Role Permissions Table
CREATE TABLE role_permissions (
    role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
    permission_id UUID REFERENCES permissions(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (role_id, permission_id)
);

-- User Roles Table
CREATE TABLE user_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- Function to create a profile for a new user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (new.id, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to execute the function when a new user is created
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Enable RLS for all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE role_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON profiles 
FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles 
FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON profiles 
FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for projects
CREATE POLICY "Team members can view projects" ON projects 
FOR SELECT USING (
  team_id IN (
    SELECT team_id FROM team_members WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Admins can create projects" ON projects 
FOR INSERT WITH CHECK (
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins can update projects" ON projects 
FOR UPDATE USING (
  public.has_role(auth.uid(), 'admin')
);

-- RLS Policies for tasks
CREATE POLICY "Team members can view tasks" ON tasks 
FOR SELECT USING (
  project_id IN (
    SELECT id FROM projects 
    WHERE team_id IN (
      SELECT team_id FROM team_members WHERE user_id = auth.uid()
    )
  )
);

CREATE POLICY "Team members can create tasks" ON tasks 
FOR INSERT WITH CHECK (
  project_id IN (
    SELECT id FROM projects 
    WHERE team_id IN (
      SELECT team_id FROM team_members WHERE user_id = auth.uid()
    )
  )
);

CREATE POLICY "Assignees can update tasks" ON tasks 
FOR UPDATE USING (assignee_id = auth.uid());

-- RLS Policies for teams
CREATE POLICY "Team members can view their own teams" ON teams 
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM team_members 
    WHERE team_id = id AND user_id = auth.uid()
  )
);

CREATE POLICY "Admins can create teams" ON teams 
FOR INSERT WITH CHECK (
  public.has_role(auth.uid(), 'admin')
);

-- RLS Policies for team_members
CREATE POLICY "Team members can view other members of their own teams" ON team_members 
FOR SELECT USING (
  team_id IN (
    SELECT team_id FROM team_members WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Admins can manage team members" ON team_members 
FOR ALL USING (
  public.has_role(auth.uid(), 'admin')
);

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles" ON user_roles 
FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all roles" ON user_roles 
FOR ALL USING (
  public.has_role(auth.uid(), 'admin')
);

-- RLS Policies for roles table
CREATE POLICY "Everyone can view roles" ON roles 
FOR SELECT USING (true);

CREATE POLICY "Admins can manage roles" ON roles 
FOR ALL USING (
  public.has_role(auth.uid(), 'admin')
);

-- RLS Policies for permissions table
CREATE POLICY "Everyone can view permissions" ON permissions 
FOR SELECT USING (true);

CREATE POLICY "Admins can manage permissions" ON permissions 
FOR ALL USING (
  public.has_role(auth.uid(), 'admin')
);

-- RLS Policies for role_permissions table
CREATE POLICY "Everyone can view role permissions" ON role_permissions 
FOR SELECT USING (true);

CREATE POLICY "Admins can manage role permissions" ON role_permissions 
FOR ALL USING (
  public.has_role(auth.uid(), 'admin')
);