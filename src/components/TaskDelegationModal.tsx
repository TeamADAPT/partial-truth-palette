import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Bot, 
  CalendarIcon, 
  Flag, 
  Clock,
  Sparkles,
  CheckCircle,
  AlertCircle,
  TrendingUp
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface TaskDelegationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TaskDelegationModal = ({ open, onOpenChange }: TaskDelegationModalProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [assigneeType, setAssigneeType] = useState<"human" | "ai">("human");
  const [dueDate, setDueDate] = useState<Date>();
  const [priority, setPriority] = useState("medium");
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringFrequency, setRecurringFrequency] = useState("weekly");
  const [saveForLater, setSaveForLater] = useState(false);
  
  const { toast } = useToast();

  const teamMembers = [
    { id: "1", name: "Sarah Johnson", role: "Project Manager", status: "available" },
    { id: "2", name: "Mike Chen", role: "Developer", status: "busy" },
    { id: "3", name: "Emily Davis", role: "Designer", status: "available" },
    { id: "4", name: "Alex Rodriguez", role: "Business Analyst", status: "available" },
  ];

  const aiAgents = [
    { id: "ai-1", name: "Research Assistant", specialty: "Market Analysis", efficiency: "95%" },
    { id: "ai-2", name: "Content Creator", specialty: "Marketing Content", efficiency: "92%" },
    { id: "ai-3", name: "Data Analyst", specialty: "Financial Modeling", efficiency: "98%" },
    { id: "ai-4", name: "Strategy Bot", specialty: "Business Planning", efficiency: "90%" },
  ];

  const getPriorityIcon = (level: string) => {
    switch (level) {
      case "low": return <Flag className="h-4 w-4 text-success" />;
      case "medium": return <Flag className="h-4 w-4 text-warning" />;
      case "high": return <AlertCircle className="h-4 w-4 text-destructive" />;
      default: return <Flag className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const handleSubmit = () => {
    if (!taskTitle.trim() || !assignee) {
      toast({
        title: "Missing Information",
        description: "Please fill in the task title and select an assignee.",
        variant: "destructive",
      });
      return;
    }

    // Handle task delegation logic here
    const taskData = {
      taskTitle,
      description,
      assignee,
      assigneeType,
      dueDate,
      priority,
      isRecurring,
      recurringFrequency,
      saveForLater
    };

    console.log("Task delegated:", taskData);
    
    toast({
      title: "Task Delegated Successfully",
      description: `Task "${taskTitle}" has been assigned to ${assigneeType === "human" 
        ? teamMembers.find(m => m.id === assignee)?.name 
        : aiAgents.find(a => a.id === assignee)?.name}.`,
    });

    // Reset form
    setTaskTitle("");
    setDescription("");
    setAssignee("");
    setDueDate(undefined);
    setPriority("medium");
    setIsRecurring(false);
    setSaveForLater(false);
    
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              <span className="gradient-text">Delegate Task</span>
            </div>
            <Sparkles className="h-5 w-5 text-primary animate-pulse-glow" />
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Task Title */}
          <div className="space-y-2">
            <Label htmlFor="task-title" className="text-base font-medium">Task Title</Label>
            <Input
              id="task-title"
              placeholder="Enter a clear, concise task title..."
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="bg-surface/50 border-border/50 focus:border-primary/50"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-base font-medium">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide detailed task requirements, objectives, and any specific instructions..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="bg-surface/50 border-border/50 focus:border-primary/50 resize-none"
            />
          </div>

          {/* Assignee Type Selection */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Assign To</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant={assigneeType === "human" ? "default" : "outline"}
                onClick={() => {
                  setAssigneeType("human");
                  setAssignee("");
                }}
                className={cn(
                  "h-auto p-4 flex flex-col items-center gap-2 transition-smooth",
                  assigneeType === "human" 
                    ? "bg-gradient-primary shadow-glow" 
                    : "hover:border-primary/50"
                )}
              >
                <Users className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-medium">Team Member</div>
                  <div className="text-xs opacity-80">Human expertise</div>
                </div>
              </Button>
              <Button
                type="button"
                variant={assigneeType === "ai" ? "default" : "outline"}
                onClick={() => {
                  setAssigneeType("ai");
                  setAssignee("");
                }}
                className={cn(
                  "h-auto p-4 flex flex-col items-center gap-2 transition-smooth",
                  assigneeType === "ai" 
                    ? "bg-gradient-primary shadow-glow" 
                    : "hover:border-primary/50"
                )}
              >
                <Bot className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-medium">AI Agent</div>
                  <div className="text-xs opacity-80">Autonomous execution</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Assignee Selection */}
          <div className="space-y-2">
            <Label className="text-base font-medium">
              {assigneeType === "human" ? "Select Team Member" : "Select AI Agent"}
            </Label>
            <Select value={assignee} onValueChange={setAssignee}>
              <SelectTrigger className="bg-surface/50 border-border/50">
                <SelectValue placeholder={`Choose ${assigneeType === "human" ? "team member" : "AI agent"}...`} />
              </SelectTrigger>
              <SelectContent>
                {assigneeType === "human" 
                  ? teamMembers.map((member) => (
                      <SelectItem key={member.id} value={member.id} disabled={member.status === "busy"}>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex flex-col">
                            <span className="font-medium">{member.name}</span>
                            <span className="text-xs text-muted-foreground">{member.role}</span>
                          </div>
                          <Badge 
                            variant={member.status === "available" ? "default" : "secondary"}
                            className={cn(
                              "ml-2 text-xs",
                              member.status === "available" ? "bg-success/10 text-success" : "bg-muted"
                            )}
                          >
                            {member.status}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))
                  : aiAgents.map((agent) => (
                      <SelectItem key={agent.id} value={agent.id}>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex flex-col">
                            <span className="font-medium">{agent.name}</span>
                            <span className="text-xs text-muted-foreground">{agent.specialty}</span>
                          </div>
                          <div className="flex items-center gap-1 ml-2">
                            <TrendingUp className="h-3 w-3 text-success" />
                            <span className="text-xs text-success font-medium">{agent.efficiency}</span>
                          </div>
                        </div>
                      </SelectItem>
                    ))
                }
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Due Date */}
            <div className="space-y-2">
              <Label className="text-base font-medium">Due Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-surface/50 border-border/50",
                      !dueDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dueDate ? format(dueDate, "PPP") : "Select due date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dueDate}
                    onSelect={setDueDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Priority */}
            <div className="space-y-2">
              <Label className="text-base font-medium">Priority Level</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger className="bg-surface/50 border-border/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">
                    <div className="flex items-center gap-2">
                      <Flag className="h-4 w-4 text-success" />
                      <span>Low Priority</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="medium">
                    <div className="flex items-center gap-2">
                      <Flag className="h-4 w-4 text-warning" />
                      <span>Medium Priority</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="high">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-destructive" />
                      <span>High Priority</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Recurring Task */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="recurring"
                checked={isRecurring}
                onCheckedChange={(checked) => setIsRecurring(checked === true)}
              />
              <Label htmlFor="recurring" className="flex items-center gap-2 text-base font-medium">
                <Clock className="h-4 w-4 text-primary" />
                Make this a recurring task
              </Label>
            </div>

            {isRecurring && (
              <div className="ml-6 space-y-2">
                <Label className="text-sm">Frequency</Label>
                <Select value={recurringFrequency} onValueChange={setRecurringFrequency}>
                  <SelectTrigger className="w-48 bg-surface/50 border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {/* Save for Later */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="save-for-later"
              checked={saveForLater}
              onCheckedChange={(checked) => setSaveForLater(checked === true)}
            />
            <Label htmlFor="save-for-later" className="flex items-center gap-2 text-base font-medium">
              <CheckCircle className="h-4 w-4 text-success" />
              Save as template for future use
            </Label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-6 border-t">
            <Button 
              onClick={handleSubmit} 
              className="flex-1 bg-gradient-primary hover:opacity-90 shadow-glow transition-all duration-300 hover:shadow-tech"
              disabled={!taskTitle.trim() || !assignee}
            >
              <Users className="h-4 w-4 mr-2" />
              Delegate Task
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)} className="px-6">
              Cancel
            </Button>
            {saveForLater && (
              <Button variant="ghost" className="px-6">
                <CheckCircle className="h-4 w-4 mr-2" />
                Save Template
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};