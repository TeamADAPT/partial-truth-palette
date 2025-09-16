import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase, 
  BarChart3, 
  Users, 
  Palette, 
  FileText, 
  Megaphone, 
  TrendingUp,
  Calendar,
  BookOpen,
  Lightbulb,
  CreditCard,
  Settings,
  Plus,
  ArrowRight,
  Zap,
  Target,
  CheckCircle
} from "lucide-react";

export function DashboardGrid() {
  const quickActions = [
    {
      title: "New Project",
      description: "Start a new business venture",
      icon: Plus,
      action: "Create",
      color: "bg-primary",
      path: "/projects"
    },
    {
      title: "AI Analysis", 
      description: "Get instant business insights",
      icon: Zap,
      action: "Analyze",
      color: "bg-chart-1",
      path: "/analytics"
    },
    {
      title: "Market Research",
      description: "Explore market opportunities", 
      icon: Target,
      action: "Research",
      color: "bg-chart-2",
      path: "/market-research"
    }
  ];

  const mainFeatures = [
    {
      title: "Projects",
      description: "Manage your business ventures",
      icon: Briefcase,
      path: "/projects",
      stats: "12 Active"
    },
    {
      title: "Analytics", 
      description: "Performance insights & metrics",
      icon: BarChart3,
      path: "/analytics",
      stats: "↑ 23% Growth"
    },
    {
      title: "Teams",
      description: "Collaborate with your team",
      icon: Users,
      path: "/teams", 
      stats: "8 Members"
    },
    {
      title: "Brand Identity",
      description: "Build your brand presence",
      icon: Palette,
      path: "/brand-identity",
      stats: "In Progress"
    },
    {
      title: "Business Plans",
      description: "Create comprehensive plans",
      icon: FileText,
      path: "/business-plans",
      stats: "3 Drafts"
    },
    {
      title: "Marketing",
      description: "Campaign planning & execution", 
      icon: Megaphone,
      path: "/marketing-planner",
      stats: "5 Campaigns"
    }
  ];

  const tools = [
    {
      title: "Templates",
      description: "Pre-built project templates",
      icon: BookOpen,
      path: "/templates",
      badge: "50+ Available"
    },
    {
      title: "Brainstorming",
      description: "AI-powered idea generation",
      icon: Lightbulb,
      path: "/brainstorming",
      badge: "New"
    },
    {
      title: "Calendar",
      description: "Schedule & sync deadlines",
      icon: Calendar,
      path: "/calendar",
      badge: "Connected"
    },
    {
      title: "Plans",
      description: "Upgrade your capabilities",
      icon: CreditCard,
      path: "/plans",
      badge: "Pro"
    }
  ];

  const recentActivity = [
    {
      title: "Market Research Report completed",
      time: "2 hours ago",
      type: "success"
    },
    {
      title: "New team member invited",
      time: "4 hours ago", 
      type: "info"
    },
    {
      title: "Marketing campaign launched",
      time: "1 day ago",
      type: "success"
    },
    {
      title: "Brand guidelines updated",
      time: "2 days ago",
      type: "info"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action) => (
          <Card key={action.title} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className={`absolute inset-0 ${action.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                  <Button asChild className="w-full">
                    <Link to={action.path}>
                      {action.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`p-3 rounded-lg ${action.color} text-white`}>
                  <action.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Features */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Core Features</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mainFeatures.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <Link to={feature.path} className="block">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                        <Badge variant="secondary" className="text-xs">
                          {feature.stats}
                        </Badge>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tools & Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Tools & Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {tools.map((tool) => (
                <Link key={tool.title} to={tool.path} className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <tool.icon className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm">{tool.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {tool.badge}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`mt-1 p-1 rounded-full ${
                    activity.type === 'success' ? 'bg-success/10' : 'bg-primary/10'
                  }`}>
                    <CheckCircle className={`h-3 w-3 ${
                      activity.type === 'success' ? 'text-success' : 'text-primary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Setup Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Account Setup</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Business Profile</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Team Integration</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}