import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  Plus, 
  Search, 
  TrendingUp, 
  Users, 
  Bot, 
  Target,
  Clock,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Briefcase,
  BarChart3
} from "lucide-react";
import { TaskDelegationModal } from "@/components/TaskDelegationModal";
import { IdeaCard } from "@/components/IdeaCard";
import { StatsCard } from "@/components/StatsCard";

const Index = () => {
  const [isDelegationModalOpen, setIsDelegationModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - replace with real data later
  const activeIdeas = [
    {
      id: "1",
      title: "AI-Powered E-commerce Platform",
      description: "Autonomous platform for personalized shopping experiences",
      stage: "Business Planning",
      progress: 65,
      assignedTeam: "AI Team Alpha",
      priority: "high",
      dueDate: "2024-01-15",
    },
    {
      id: "2", 
      title: "Sustainable Food Delivery",
      description: "Carbon-neutral delivery service with local partnerships",
      stage: "Market Analysis",
      progress: 40,
      assignedTeam: "Research Division",
      priority: "medium",
      dueDate: "2024-01-20",
    },
    {
      id: "3",
      title: "Smart Home Automation Hub", 
      description: "Unified control system for all IoT devices",
      stage: "Team Building",
      progress: 25,
      assignedTeam: "Hardware Team",
      priority: "low",
      dueDate: "2024-02-01",
    }
  ];

  const ideasInReview = [
    {
      id: "r1",
      title: "Virtual Reality Training Platform",
      description: "VR-based corporate training solutions",
      reviewer: "Sarah Johnson",
      status: "pending"
    },
    {
      id: "r2", 
      title: "Blockchain Supply Chain Tracker",
      description: "Transparent supply chain monitoring system",
      reviewer: "Mike Chen",
      status: "approved"
    }
  ];

  const stats = [
    {
      title: "Active Projects",
      value: "12",
      change: "+3",
      trend: "up" as const,
      icon: Briefcase
    },
    {
      title: "Ideas Generated", 
      value: "47",
      change: "+12",
      trend: "up" as const, 
      icon: Lightbulb
    },
    {
      title: "Completion Rate",
      value: "85%",
      change: "+5%",
      trend: "up" as const,
      icon: CheckCircle
    },
    {
      title: "Revenue Generated",
      value: "$2.4M",
      change: "+$340K",
      trend: "up" as const,
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-surface-accent">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-primary animate-pulse-glow" />
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">MybizAI</h1>
                <p className="text-sm text-muted-foreground">Autonomous Business Ecosystem</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search projects, ideas..." 
                  className="w-64 pl-10 bg-surface/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                onClick={() => setIsDelegationModalOpen(true)}
                className="bg-gradient-primary hover:opacity-90 shadow-glow transition-all duration-300 hover:shadow-tech"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Task
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={stat.title} {...stat} index={index} />
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 tech-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
            <CardDescription>Launch new initiatives or manage existing projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2 hover:border-primary/50 transition-smooth">
                <Lightbulb className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Generate New Idea</div>
                  <div className="text-sm text-muted-foreground">AI-powered brainstorming session</div>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto text-primary" />
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2 hover:border-primary/50 transition-smooth">
                <BarChart3 className="h-6 w-6 text-success" />
                <div className="text-left">
                  <div className="font-medium">View Analytics</div>
                  <div className="text-sm text-muted-foreground">Performance insights & reports</div>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto text-success" />
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2 hover:border-primary/50 transition-smooth">
                <Users className="h-6 w-6 text-accent" />
                <div className="text-left">
                  <div className="font-medium">Manage Teams</div>
                  <div className="text-sm text-muted-foreground">AI agents & human resources</div>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto text-accent" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Ideas */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Active Business Ideas
              </h2>
              <Badge variant="secondary" className="bg-primary-subtle text-primary">
                {activeIdeas.length} Active
              </Badge>
            </div>
            
            <div className="space-y-4">
              {activeIdeas.map((idea, index) => (
                <IdeaCard key={idea.id} idea={idea} index={index} />
              ))}
            </div>
          </div>

          {/* Ideas in Review */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5 text-warning" />
                Ideas in Review
              </h2>
              <Badge variant="secondary" className="bg-warning/10 text-warning">
                {ideasInReview.length} Pending
              </Badge>
            </div>
            
            <div className="space-y-4">
              {ideasInReview.map((idea) => (
                <Card key={idea.id} className="tech-card border-warning/20 hover:border-warning/40 transition-smooth">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">{idea.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{idea.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{idea.reviewer}</span>
                      </div>
                      <Badge 
                        variant={idea.status === "approved" ? "default" : "secondary"}
                        className={idea.status === "approved" 
                          ? "bg-success text-success-foreground" 
                          : "bg-warning/10 text-warning"}
                      >
                        {idea.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Task Delegation Modal */}
      <TaskDelegationModal 
        open={isDelegationModalOpen}
        onOpenChange={setIsDelegationModalOpen}
      />
    </div>
  );
};

export default Index;