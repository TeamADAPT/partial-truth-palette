import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IdeaCard } from "@/components/IdeaCard";
import { StatsCard } from "@/components/StatsCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { TasksChart } from "@/components/charts/TasksChart";
import { 
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

const Index = () => {

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
    <div className="bg-gradient-to-br from-background via-background to-muted/20 p-6">
      {/* Main Content */}
      <div className="space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={stat.title} {...stat} index={index} />
          ))}
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Revenue Analytics
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                AI-driven revenue optimization and forecasting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <RevenueChart />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-chart-1" />
                Task Performance
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Autonomous task completion metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <TasksChart />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 bg-card/50 border-primary/20 backdrop-blur-sm">
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
              <Badge variant="secondary" className="bg-primary/10 text-primary">
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
                <Card key={idea.id} className="bg-card/50 border-warning/20 hover:border-warning/40 transition-smooth backdrop-blur-sm">
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
      </div>
    </div>
  );
};

export default Index;