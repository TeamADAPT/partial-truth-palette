import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-surface to-surface-accent">
      <div className="text-center max-w-md px-6">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Brain className="h-16 w-16 text-primary animate-pulse-glow" />
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="mb-4 text-6xl font-bold gradient-text">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist in the MybizAI ecosystem.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-primary hover:opacity-90 shadow-glow transition-all duration-300 hover:shadow-tech flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
