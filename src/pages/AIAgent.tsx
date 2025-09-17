import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lightbulb, Users, BarChart3, TrendingUp, Plus, HourglassIcon, CheckCircle } from "lucide-react";

export default function AIAgent() {
  const activeIdeas = [
    {
      name: "Eco-Friendly Packaging Solutions",
      stage: "Development",
      team: "Team Alpha",
      progress: 75,
      lastUpdated: "2024-07-26"
    },
    {
      name: "AI-Powered Personal Finance App", 
      stage: "Planning",
      team: "Team Beta",
      progress: 40,
      lastUpdated: "2024-07-25"
    },
    {
      name: "Sustainable Energy Consulting",
      stage: "Concept", 
      team: "Team Gamma",
      progress: 20,
      lastUpdated: "2024-07-24"
    }
  ];

  const reviewIdeas = [
    {
      name: "Drone-based Delivery Service",
      stage: "Evaluation",
      submittedBy: "Alex Chen",
      status: "Pending",
      submittedOn: "2024-07-27"
    },
    {
      name: "Gamified Language Learning Platform",
      stage: "Evaluation", 
      submittedBy: "Maria Garcia",
      status: "Approved",
      submittedOn: "2024-07-26"
    }
  ];

  const recentActivity = [
    {
      type: "add",
      message: 'New idea "Quantum Computing for Pharma" submitted.',
      author: "David Kim",
      time: "2 hours ago",
      color: "text-green-400"
    },
    {
      type: "chart",
      message: 'Progress on "AI-Powered Personal Finance App" updated to 45%.',
      author: "Team Beta", 
      time: "5 hours ago",
      color: "text-blue-400"
    },
    {
      type: "user",
      message: "Sarah Jones joined Team Alpha.",
      author: "Project Admin",
      time: "1 day ago",
      color: "text-purple-400"
    }
  ];

  const getStageVariant = (stage: string) => {
    switch (stage) {
      case "Development": return "default";
      case "Planning": return "secondary"; 
      case "Concept": return "outline";
      case "Evaluation": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold gradient-text">AI Agent Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Overview of your business ideas and progress
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Idea
        </Button>
      </div>

      {/* Active Ideas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Active Ideas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Idea Name</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Stage</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Team</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Progress</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {activeIdeas.map((idea, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-4 px-4 font-medium">{idea.name}</td>
                    <td className="py-4 px-4">
                      <Badge variant={getStageVariant(idea.stage)}>
                        {idea.stage}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{idea.team}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Progress value={idea.progress} className="w-24" />
                        <span className="text-sm font-medium">{idea.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{idea.lastUpdated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Ideas in Review */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HourglassIcon className="h-5 w-5" />
            Ideas in Review
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Idea Name</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Stage</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Submitted By</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Submitted On</th>
                </tr>
              </thead>
              <tbody>
                {reviewIdeas.map((idea, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-4 px-4 font-medium">{idea.name}</td>
                    <td className="py-4 px-4">
                      <Badge variant="secondary">{idea.stage}</Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{idea.submittedBy}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {idea.status === "Pending" ? (
                          <>
                            <HourglassIcon className="h-4 w-4 text-amber-500" />
                            <span className="text-amber-500">{idea.status}</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-green-500">{idea.status}</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{idea.submittedOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Performance
            </CardTitle>
            <CardDescription>Last 30 Days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm font-semibold text-green-500">+10%</span>
            </div>
            <div className="flex items-end justify-between h-32 gap-4">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-muted rounded-md h-12 flex items-end">
                  <div className="w-full bg-gradient-to-t from-primary to-blue-400 rounded-md h-3/4"></div>
                </div>
                <span className="text-xs font-medium text-muted-foreground">Team Alpha</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-muted rounded-md h-12 flex items-end">
                  <div className="w-full bg-gradient-to-t from-primary to-blue-400 rounded-md h-full"></div>
                </div>
                <span className="text-xs font-medium text-muted-foreground">Team Beta</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-muted rounded-md h-12 flex items-end">
                  <div className="w-full bg-gradient-to-t from-primary to-blue-400 rounded-md h-5/6"></div>
                </div>
                <span className="text-xs font-medium text-muted-foreground">Team Gamma</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${activity.color} bg-current/10`}>
                    {activity.type === "add" && <Plus className="h-4 w-4" />}
                    {activity.type === "chart" && <BarChart3 className="h-4 w-4" />}
                    {activity.type === "user" && <Users className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      by {activity.author} - {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}