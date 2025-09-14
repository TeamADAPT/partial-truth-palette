import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Users, Calendar, TrendingUp, Clock } from 'lucide-react';

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
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted/10 text-muted-foreground border-border/20';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-warning';
    return 'bg-primary';
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">{idea.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              {idea.description}
            </p>
          </div>
          <Badge className={getPriorityColor(idea.priority)}>
            {idea.priority} priority
          </Badge>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">{idea.progress}%</span>
          </div>
          
          <Progress 
            value={idea.progress} 
            className="h-2"
          />
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <div>
                <div className="text-muted-foreground">Team</div>
                <div className="font-medium text-foreground">{idea.assignedTeam}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-success" />
              <div>
                <div className="text-muted-foreground">Due Date</div>
                <div className="font-medium text-foreground">{idea.dueDate}</div>
              </div>
            </div>
          </div>
          
          <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">
            <Clock className="h-3 w-3 mr-1" />
            {idea.stage}
          </Badge>
          
          <div className="flex gap-2 pt-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 group-hover:border-primary/50 transition-colors"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              View Details
            </Button>
            <Button 
              size="sm" 
              className="flex-1 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
            >
              Manage Project
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};