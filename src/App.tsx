import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AppSidebar } from "@/components/AppSidebar";
import { TaskDelegationModal } from "@/components/TaskDelegationModal";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import Teams from "./pages/Teams";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const queryClient = new QueryClient();

const AppLayout = () => {
  const [isDelegationModalOpen, setIsDelegationModalOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar onNewTask={() => setIsDelegationModalOpen(true)} />
        
        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b border-border/50 bg-card/80 backdrop-blur-sm px-4">
            <SidebarTrigger />
            <div className="ml-4">
              <h2 className="text-lg font-semibold gradient-text">MyBizAI Dashboard</h2>
            </div>
          </header>
          
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        
        <TaskDelegationModal 
          open={isDelegationModalOpen}
          onOpenChange={setIsDelegationModalOpen}
        />
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
