import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Activity,
  FileText,
  Users,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Calendar,
  Settings
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: "project",
      user: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      action: "created a new project",
      target: "E-commerce Platform",
      time: "5 minutes ago",
      icon: FileText,
      color: "text-blue-500"
    },
    {
      id: 2,
      type: "team",
      user: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      action: "joined the team",
      target: "MyBizAI",
      time: "1 hour ago",
      icon: Users,
      color: "text-purple-500"
    },
    {
      id: 3,
      type: "task",
      user: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      action: "completed task",
      target: "Market Analysis Report",
      time: "2 hours ago",
      icon: CheckCircle2,
      color: "text-green-500"
    },
    {
      id: 4,
      type: "comment",
      user: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      action: "commented on",
      target: "Financial Projections Q1",
      time: "3 hours ago",
      icon: MessageSquare,
      color: "text-orange-500"
    },
    {
      id: 5,
      type: "milestone",
      user: "Alex Williams",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      action: "reached milestone",
      target: "50 Business Ideas Generated",
      time: "5 hours ago",
      icon: TrendingUp,
      color: "text-emerald-500"
    },
    {
      id: 6,
      type: "meeting",
      user: "Lisa Brown",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      action: "scheduled meeting",
      target: "Q1 Strategy Review",
      time: "1 day ago",
      icon: Calendar,
      color: "text-pink-500"
    },
    {
      id: 7,
      type: "settings",
      user: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      action: "updated settings for",
      target: "Project Notifications",
      time: "2 days ago",
      icon: Settings,
      color: "text-gray-500"
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Activity Feed</h1>
            <p className="text-muted-foreground">Stay updated with recent activities and updates</p>
          </div>
          <div className="flex gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Activities</SelectItem>
                <SelectItem value="projects">Projects</SelectItem>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="tasks">Tasks</SelectItem>
                <SelectItem value="comments">Comments</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <Card key={activity.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={activity.avatar} alt={activity.user} />
                      <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold">{activity.user}</span>
                          <span className="text-sm text-muted-foreground">{activity.action}</span>
                          <Badge variant="outline">{activity.target}</Badge>
                        </div>
                        <div className={`p-2 rounded-lg bg-muted`}>
                          <activity.icon className={`h-4 w-4 ${activity.color}`} />
                        </div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>

                  {/* Connection line to next item */}
                  {index < activities.length - 1 && (
                    <div className="ml-6 mt-4 mb-0 h-4 border-l-2 border-dashed border-muted" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline">Load More Activities</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;