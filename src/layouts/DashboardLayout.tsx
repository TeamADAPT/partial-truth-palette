import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TaskDelegationModal } from "@/components/TaskDelegationModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Settings, User, Bell } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { VoiceCommandOverlay } from "@/components/VoiceCommandOverlay";

export const DashboardLayout = () => {
  const [isDelegationModalOpen, setIsDelegationModalOpen] = useState(false);
  const location = useLocation();

  // Helper to get title from path
  const getPageTitle = (pathname: string) => {
    const path = pathname.split('/')[1] || 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar onNewTask={() => setIsDelegationModalOpen(true)} />

        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center justify-between border-b border-border/50 bg-card/80 backdrop-blur-sm px-4 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h2 className="text-lg font-semibold gradient-text">{getPageTitle(location.pathname)}</h2>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/notifications">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Link>
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="icon" asChild>
                <Link to="/profile">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Link>
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-4 md:p-6 fade-in">
            <Outlet />
          </main>
        </div>

        <TaskDelegationModal
          open={isDelegationModalOpen}
          onOpenChange={setIsDelegationModalOpen}
        />
        <VoiceCommandOverlay />
        <Toaster />
        <Sonner />
      </div>
    </SidebarProvider>
  );
};
