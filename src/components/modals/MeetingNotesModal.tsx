import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Users, Sparkles, Download, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MeetingNote {
  id: string;
  title: string;
  date: Date;
  duration: string;
  attendees: string[];
  content: string;
  aiSummary?: string;
}

interface MeetingNotesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  note?: MeetingNote;
}

export function MeetingNotesModal({ open, onOpenChange, note }: MeetingNotesModalProps) {
  if (!note) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-xl mb-1">{note.title}</DialogTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {new Date(note.date).toLocaleDateString()} • {note.duration}
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Users className="h-4 w-4" /> Attendees
              </h4>
              <div className="flex flex-wrap gap-2">
                {note.attendees.map((attendee) => (
                  <Badge key={attendee} variant="secondary">
                    {attendee}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Discussion</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {note.content}
              </p>
            </div>

            {note.aiSummary ? (
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2 text-primary">
                  <Sparkles className="h-4 w-4" /> AI Summary & Action Items
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {note.aiSummary}
                </p>
              </div>
            ) : (
              <Button className="w-full" variant="outline">
                <Sparkles className="h-4 w-4 mr-2" /> Generate AI Summary
              </Button>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
