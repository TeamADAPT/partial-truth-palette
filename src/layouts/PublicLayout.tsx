import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="flex items-center justify-between border-b border-border/50 px-6 py-4 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Brain className="h-8 w-8 text-primary animate-pulse-glow" />
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur animate-pulse"></div>
            </div>
            <h2 className="text-xl font-bold gradient-text">MyBizAI</h2>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
          <Link to="/help-support" className="text-sm font-medium hover:text-primary transition-colors">Support</Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <Toaster />
      <Sonner />
    </div>
  );
};
