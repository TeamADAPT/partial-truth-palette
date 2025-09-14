import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Brain, Zap, Target, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TaskDelegationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TaskDelegationModal = ({ open, onOpenChange }: TaskDelegationModalProps) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [aiAgent, setAiAgent] = useState('');
  const { toast } = useToast();

  const aiAgents = [
    { id: 'content-creator', name: 'Content Creator AI', icon: Brain, specialty: 'Blog posts, social media, marketing copy' },
    { id: 'sales-optimizer', name: 'Sales Optimizer AI', icon: Target, specialty: 'Lead generation, sales funnels, conversions' },
    { id: 'automation-specialist', name: 'Automation Specialist AI', icon: Zap, specialty: 'Workflow automation, process optimization' },
    { id: 'research-analyst', name: 'Research Analyst AI', icon: Users, specialty: 'Market research, competitive analysis' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!taskTitle || !taskDescription || !priority || !aiAgent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const selectedAgent = aiAgents.find(agent => agent.id === aiAgent);
    
    toast({
      title: "Task Delegated Successfully",
      description: `Task "${taskTitle}" has been assigned to ${selectedAgent?.name}. The AI agent will begin processing immediately.`,
    });

    // Reset form
    setTaskTitle('');
    setTaskDescription('');
    setPriority('');
    setAiAgent('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-card/95 backdrop-blur-sm border-border/50">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <Plus className="h-5 w-5 text-primary" />
            Delegate New Task to AI Agent
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="task-title" className="text-foreground">Task Title *</Label>
            <Input
              id="task-title"
              placeholder="e.g., Create weekly social media content"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="bg-background/50 border-border/50 text-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="task-description" className="text-foreground">Task Description *</Label>
            <Textarea
              id="task-description"
              placeholder="Describe what you want the AI agent to accomplish..."
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows={4}
              className="bg-background/50 border-border/50 text-foreground"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="priority" className="text-foreground">Priority *</Label>
              <Select value={priority} onValueChange={setPriority} required>
                <SelectTrigger className="bg-background/50 border-border/50 text-foreground">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ai-agent" className="text-foreground">AI Agent *</Label>
              <Select value={aiAgent} onValueChange={setAiAgent} required>
                <SelectTrigger className="bg-background/50 border-border/50 text-foreground">
                  <SelectValue placeholder="Select AI agent" />
                </SelectTrigger>
                <SelectContent>
                  {aiAgents.map((agent) => (
                    <SelectItem key={agent.id} value={agent.id}>
                      {agent.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {aiAgent && (
            <div className="p-4 border border-border/50 rounded-lg bg-muted/30 backdrop-blur-sm">
              {(() => {
                const selectedAgent = aiAgents.find(agent => agent.id === aiAgent);
                const IconComponent = selectedAgent?.icon || Brain;
                return (
                  <div className="flex items-start gap-3">
                    <IconComponent className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">{selectedAgent?.name}</h4>
                      <p className="text-sm text-muted-foreground">{selectedAgent?.specialty}</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
              Delegate Task
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};