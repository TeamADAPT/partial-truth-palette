import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  MoreVertical,
  Clock,
  Target,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Idea {
  id: string;
  title: string;
  description: string;
  stage: string;
  progress: number;
  assignedTeam: string;
  priority: string;
  dueDate: string;
}

interface IdeaCardProps {
  idea: Idea;
  index: number;
}

export const IdeaCard = ({ idea, index }: IdeaCardProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium": return "bg-warning/10 text-warning border-warning/20"; 
      case "low": return "bg-success/10 text-success border-success/20";
      default: return "bg-muted";
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Business Planning": return "bg-primary/10 text-primary border-primary/20";
      case "Market Analysis": return "bg-accent/10 text-accent border-accent/20";
      case "Team Building": return "bg-warning/10 text-warning border-warning/20";
      default: return "bg-muted";
    }
  };

  return (
    <Card 
      className={cn(
        "tech-card hover:shadow-tech transition-all duration-300 hover:-translate-y-1 cursor-pointer",
        "animate-float",
        index > 0 && "animation-delay-300"
      )}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationDuration: `${6 + index * 0.5}s`
      }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {idea.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
              {idea.description}
            </p>
            
            <div className="flex items-center gap-2 mb-3">
              <Badge className={getStageColor(idea.stage)}>
                <Target className="h-3 w-3 mr-1" />
                {idea.stage}
              </Badge>
              <Badge className={getPriorityColor(idea.priority)}>
                {idea.priority} priority
              </Badge>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{idea.progress}%</span>
            </div>
            <Progress value={idea.progress} className="h-2" />
          </div>

          {/* Details */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{idea.assignedTeam}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{new Date(idea.dueDate).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Clock className="h-4 w-4 mr-1" />
              View Timeline
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              View Details
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};