import { create } from 'zustand';

// Types
export interface Project {
  id: string;
  name: string;
  description: string;
  status: "planning" | "active" | "paused" | "completed" | "cancelled";
  progress: number;
  dueDate: Date;
  team: string[];
  category: string;
  priority: "low" | "medium" | "high";
  createdDate: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar?: string;
  status: "active" | "away" | "busy" | "offline";
  type: "human" | "ai";
  specialty?: string;
  efficiency: number;
  tasksCompleted: number;
  currentProjects: string[];
  joinDate: Date;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  bio: string;
  role: string;
}

interface AppState {
  // Projects
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'createdDate'>) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;

  // Team
  teamMembers: TeamMember[];
  addTeamMember: (member: Omit<TeamMember, 'id' | 'joinDate'>) => void;
  updateTeamMember: (id: string, updates: Partial<TeamMember>) => void;

  // User Profile
  userProfile: UserProfile;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
}

// Initial Mock Data
const initialProjects: Project[] = [
  {
    id: "1",
    name: "AI-Powered E-commerce Platform",
    description: "Complete marketplace solution with intelligent product recommendations",
    status: "active",
    progress: 75,
    dueDate: new Date("2024-02-15"),
    team: ["Sarah Johnson", "Mike Chen", "AI Assistant"],
    category: "Development",
    priority: "high",
    createdDate: new Date("2024-01-01")
  },
  {
    id: "2",
    name: "Sustainable Food Delivery Service",
    description: "Carbon-neutral delivery platform with local restaurant partnerships",
    status: "planning",
    progress: 25,
    dueDate: new Date("2024-03-20"),
    team: ["Emily Davis", "Research AI"],
    category: "Business Planning",
    priority: "medium",
    createdDate: new Date("2024-01-10")
  },
  {
    id: "3",
    name: "Smart Home IoT Hub",
    description: "Unified control system for all smart home devices",
    status: "completed",
    progress: 100,
    dueDate: new Date("2024-01-30"),
    team: ["Hardware Team", "IoT AI"],
    category: "Development",
    priority: "high",
    createdDate: new Date("2023-12-01")
  }
];

const initialTeam: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Project Manager",
    email: "sarah@mybizai.com",
    status: "active",
    type: "human",
    efficiency: 95,
    tasksCompleted: 127,
    currentProjects: ["E-commerce Platform", "Mobile App"],
    joinDate: new Date("2023-06-15")
  },
  {
    id: "2",
    name: "Mike Chen",
    role: "Senior Developer",
    email: "mike@mybizai.com",
    status: "busy",
    type: "human",
    efficiency: 92,
    tasksCompleted: 143,
    currentProjects: ["E-commerce Platform", "IoT Hub"],
    joinDate: new Date("2023-04-20")
  },
  {
    id: "3",
    name: "Research Assistant AI",
    role: "Market Analyst",
    email: "research@ai.mybizai.com",
    status: "active",
    type: "ai",
    specialty: "Market Analysis & Research",
    efficiency: 99,
    tasksCompleted: 1247,
    currentProjects: ["Food Delivery", "FinTech Analysis"],
    joinDate: new Date("2023-01-01")
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "UX Designer",
    email: "emily@mybizai.com",
    status: "away",
    type: "human",
    efficiency: 88,
    tasksCompleted: 95,
    currentProjects: ["Mobile App", "Dashboard Redesign"],
    joinDate: new Date("2023-08-10")
  },
  {
    id: "5",
    name: "Content Creator AI",
    role: "Marketing Specialist",
    email: "content@ai.mybizai.com",
    status: "active",
    type: "ai",
    specialty: "Content Creation & Marketing",
    efficiency: 97,
    tasksCompleted: 892,
    currentProjects: ["Brand Campaign", "Social Media"],
    joinDate: new Date("2023-02-15")
  }
];

const initialProfile: UserProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://github.com/shadcn.png",
  bio: "Product Manager at Tech Corp",
  role: "Founder"
};

export const useAppStore = create<AppState>((set) => ({
  projects: initialProjects,
  addProject: (project) => set((state) => ({
    projects: [...state.projects, {
      ...project,
      id: Math.random().toString(36).substr(2, 9),
      createdDate: new Date()
    }]
  })),
  updateProject: (id, updates) => set((state) => ({
    projects: state.projects.map(p => p.id === id ? { ...p, ...updates } : p)
  })),
  deleteProject: (id) => set((state) => ({
    projects: state.projects.filter(p => p.id !== id)
  })),

  teamMembers: initialTeam,
  addTeamMember: (member) => set((state) => ({
    teamMembers: [...state.teamMembers, {
      ...member,
      id: Math.random().toString(36).substr(2, 9),
      joinDate: new Date()
    }]
  })),
  updateTeamMember: (id, updates) => set((state) => ({
    teamMembers: state.teamMembers.map(m => m.id === id ? { ...m, ...updates } : m)
  })),

  userProfile: initialProfile,
  updateUserProfile: (updates) => set((state) => ({
    userProfile: { ...state.userProfile, ...updates }
  }))
}));
