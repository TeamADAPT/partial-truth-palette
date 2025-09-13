import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  Search, 
  Settings,
  Plus,
  Home,
  Briefcase,
  BarChart3,
  Users
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface NavigationProps {
  onNewTask: () => void;
}

const Navigation = ({ onNewTask }: NavigationProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/projects", label: "Projects", icon: Briefcase },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/teams", label: "Teams", icon: Users },
  ];

  return (
    <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-primary animate-pulse-glow" />
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">MybizAI</h1>
                <p className="text-sm text-muted-foreground">Autonomous Business Ecosystem</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button 
                      variant={isActive ? "secondary" : "ghost"}
                      size="sm" 
                      className={`flex items-center gap-2 ${
                        isActive ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>
          
          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search projects, ideas..." 
                className="w-64 pl-10 bg-background/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <ThemeToggle />
            <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm border-border/50">
              <Settings className="h-4 w-4" />
            </Button>
            <Button 
              onClick={onNewTask}
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shadow-primary transition-all duration-300 hover:shadow-glow"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Task
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;