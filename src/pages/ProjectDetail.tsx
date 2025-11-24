import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, Clock, CheckCircle, AlertCircle, PlayCircle, PauseCircle } from "lucide-react";
import { format } from "date-fns";

// Mock data - replace with real data from API later
const mockProjects = [
  {
    id: "1",
    name: "AI-Powered E-commerce Platform",
    description: "Complete marketplace solution with intelligent product recommendations. This project aims to revolutionize online shopping by providing a personalized and seamless experience for every user.",
    status: "active",
    progress: 75,
    dueDate: new Date("2024-02-15"),
    team: ["Sarah Johnson", "Mike Chen", "AI Assistant", "John Doe", "Jane Smith"],
    category: "Development",
    priority: "high",
    createdDate: new Date("2024-01-01"),
    tasks: [
      { id: "t1", title: "Develop recommendation engine", status: "completed" },
      { id: "t2", title: "Design user interface", status: "in_progress" },
      { id: "t3", title: "Set up database schema", status: "completed" },
      { id: "t4", title: "Implement payment gateway", status: "todo" },
    ]
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <PlayCircle className="h-4 w-4" />;
      case "planning": return <Clock className="h-4 w-4" />;
      case "paused": return <PauseCircle className="h-4 w-4" />;
      case "completed": return <CheckCircle className="h-4 w-4" />;
      case "cancelled": return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success/10 text-success border-success/20";
      case "planning": return "bg-warning/10 text-warning border-warning/20";
      case "paused": return "bg-muted/10 text-muted-foreground border-muted/20";
      case "completed": return "bg-success/10 text-success border-success/20";
      case "cancelled": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">{project.name}</h1>
        <div className="flex items-center gap-4">
          <Badge className={getStatusColor(project.status)}>
            {getStatusIcon(project.status)}
            <span className="ml-1 capitalize">{project.status}</span>
          </Badge>
          <span className="text-sm text-muted-foreground">
            Created: {format(project.createdDate, "MMM dd, yyyy")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Project Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.tasks.map(task => (
                  <li key={task.id} className="flex items-center justify-between">
                    <span>{task.title}</span>
                    <Badge variant={task.status === 'completed' ? 'default' : 'secondary'}>
                      {task.status.replace('_', ' ')}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Due: {format(project.dueDate, "MMM dd, yyyy")}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Team</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.team.map((member, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs">
                      {member.charAt(0)}
                    </div>
                    <span>{member}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
