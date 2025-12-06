import { Brain, Home, Briefcase, BarChart3, Users, Settings, Plus, Palette, FileText, Megaphone, TrendingUp, Calendar, BookOpen, Lightbulb, CreditCard, Bot, Target, Scale, HelpCircle, GraduationCap, Upload, Archive, User, Bell, Activity as ActivityIcon, Plug, Search as SearchIcon, MessageSquare, Library, Gift } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAppStore } from "@/lib/store";

const navItems = [
  { path: "/", label: "Dashboard", icon: Home },
  { path: "/projects", label: "Projects", icon: Briefcase },
  { path: "/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/teams", label: "Teams", icon: Users },
  { path: "/brand-identity", label: "Brand Identity", icon: Palette },
  { path: "/business-plans", label: "Business Plans", icon: FileText },
  { path: "/marketing-planner", label: "Marketing", icon: Megaphone },
  { path: "/market-research", label: "Market Research", icon: TrendingUp },
  { path: "/calendar", label: "Calendar", icon: Calendar },
];

const toolsItems = [
  { path: "/templates", label: "Templates", icon: BookOpen },
  { path: "/brainstorming", label: "Brainstorming", icon: Lightbulb },
  { path: "/personalization", label: "Personalization", icon: Settings },
  { path: "/plans", label: "Plans", icon: CreditCard },
  { path: "/community", label: "Community", icon: MessageSquare },
  { path: "/resources", label: "Resources", icon: Library },
  { path: "/referral", label: "Referral Program", icon: Gift },
];

const aiToolsItems = [
  { path: "/ai-agent", label: "AI Agent Dashboard", icon: Bot },
  { path: "/competitive-analysis", label: "Competitive Analysis", icon: Target },
  { path: "/financial-projections", label: "Financial Projections", icon: TrendingUp },
  { path: "/team-invite", label: "Team Invitations", icon: Users },
];

const resourcesItems = [
  { path: "/legal-compliance", label: "Legal & Compliance", icon: Scale },
  { path: "/help-support", label: "Help & Support", icon: HelpCircle },
  { path: "/academy", label: "Academy", icon: GraduationCap },
  { path: "/data-import", label: "Data Import", icon: Upload },
  { path: "/archived-projects", label: "Archived Projects", icon: Archive },
];

const businessToolsItems = [
  { path: "/reports", label: "Reports", icon: BarChart3 },
  { path: "/business-plan", label: "Business Plan", icon: FileText },
  { path: "/market-research", label: "Market Research", icon: SearchIcon },
  { path: "/integrations", label: "Integrations", icon: Plug },
];

const accountItems = [
  { path: "/profile", label: "Profile", icon: User },
  { path: "/notifications", label: "Notifications", icon: Bell },
  { path: "/activity", label: "Activity Feed", icon: ActivityIcon },
  { path: "/settings", label: "Settings", icon: Settings },
];

interface AppSidebarProps {
  onNewTask: () => void;
}

export function AppSidebar({ onNewTask }: AppSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const { userProfile } = useAppStore();
  const collapsed = state === "collapsed";

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className="border-r border-border/50 bg-card/50 backdrop-blur-sm">
      <SidebarHeader className="border-b border-border/50 p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Brain className="h-8 w-8 text-primary animate-pulse-glow" />
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur animate-pulse"></div>
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold gradient-text">MybizAI</h1>
              <p className="text-xs text-muted-foreground">Hello, {userProfile.name.split(' ')[0]}</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">
            {!collapsed ? "Navigation" : "Nav"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          active
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {!collapsed && <span className="font-medium">{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">
            {!collapsed ? "Tools & Setup" : "Tools"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          active
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {!collapsed && <span className="font-medium">{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">
            {!collapsed ? "AI Tools" : "AI"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiToolsItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          active
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {!collapsed && <span className="font-medium">{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">
            {!collapsed ? "Resources" : "Res"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourcesItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          active
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {!collapsed && <span className="font-medium">{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">
            {!collapsed ? "Business Tools" : "Biz"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {businessToolsItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          active
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {!collapsed && <span className="font-medium">{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">
            {!collapsed ? "Account" : "Acc"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          active
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {!collapsed && <span className="font-medium">{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70">
            {!collapsed ? "Actions" : "Act"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Button
                  onClick={onNewTask}
                  className="w-full justify-start bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shadow-primary transition-all duration-300 hover:shadow-glow"
                  size={collapsed ? "icon" : "sm"}
                >
                  <Plus className="h-4 w-4" />
                  {!collapsed && <span className="ml-2">New Task</span>}
                </Button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 p-4">
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-background/80 backdrop-blur-sm border-border/50"
            asChild
          >
            <NavLink to="/settings">
              <Settings className="h-4 w-4" />
            </NavLink>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
