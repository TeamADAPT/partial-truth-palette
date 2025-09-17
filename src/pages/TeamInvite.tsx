import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Shield, Send } from "lucide-react";

export default function TeamInvite() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex w-full max-w-xl mx-auto flex-col gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Invite Team Members</h1>
          <p className="text-muted-foreground text-lg">
            Expand your team by sending out invitations
          </p>
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email-input" className="text-sm font-medium">
                Email Addresses
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email-input"
                  placeholder="Enter email addresses separated by commas"
                  type="email"
                  className="pl-10 bg-background/80"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role-select" className="text-sm font-medium">
                Default Role
              </Label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                <Select defaultValue="viewer">
                  <SelectTrigger className="pl-10 bg-background/80">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="administrator">Administrator</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message-input" className="text-sm font-medium">
                Invitation Message
              </Label>
              <Textarea
                id="message-input"
                placeholder="Optional: Add a personal message to your invitation..."
                className="min-h-32 resize-none bg-background/80"
              />
            </div>

            <Button className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6">
              <Send className="h-4 w-4" />
              Send Invitations
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}