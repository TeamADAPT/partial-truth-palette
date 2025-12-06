import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, GitCommit, User } from "lucide-react";

interface ProjectHistoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: { name: string };
}

export function ProjectHistoryModal({ open, onOpenChange, project }: ProjectHistoryModalProps) {
  const history = [
    {
      id: 1,
      action: "Project created",
      user: "Sarah Johnson",
      time: "2 days ago",
      details: "Initial project setup with basic requirements."
    },
    {
      id: 2,
      action: "Milestone added",
      user: "Mike Chen",
      time: "1 day ago",
      details: "Added 'MVP Development' milestone due Aug 15."
    },
    {
      id: 3,
      action: "Status updated",
      user: "AI Assistant",
      time: "5 hours ago",
      details: "Changed status from 'Planning' to 'In Progress' based on task completion."
    },
    {
      id: 4,
      action: "Document uploaded",
      user: "Emily Davis",
      time: "2 hours ago",
      details: "Uploaded 'UI Mockups v2.pdf'."
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Project History
          </DialogTitle>
          <DialogDescription>
            Recent activity and changes for {project?.name || "this project"}.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-8 p-4">
            {history.map((item, index) => (
              <div key={item.id} className="relative pl-8 pb-8 last:pb-0">
                {index !== history.length - 1 && (
                  <div className="absolute left-[11px] top-[24px] h-full w-px bg-border" />
                )}
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full border bg-background flex items-center justify-center">
                  <GitCommit className="h-3 w-3 text-muted-foreground" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{item.action}</span>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <User className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{item.user}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
