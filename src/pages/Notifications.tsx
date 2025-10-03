import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  CheckCheck, 
  Trash2,
  AlertCircle,
  TrendingUp,
  Users,
  Calendar,
  FileText,
  Settings
} from "lucide-react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "alert",
      title: "New Business Idea Generated",
      message: "AI Agent has created 3 new business ideas based on your preferences.",
      time: "5 minutes ago",
      read: false,
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      id: 2,
      type: "team",
      title: "Team Member Invitation",
      message: "Sarah Johnson accepted your team invitation.",
      time: "2 hours ago",
      read: false,
      icon: Users,
      color: "text-blue-500"
    },
    {
      id: 3,
      type: "reminder",
      title: "Upcoming Deadline",
      message: "Project 'E-commerce Platform' deadline is in 3 days.",
      time: "5 hours ago",
      read: true,
      icon: Calendar,
      color: "text-orange-500"
    },
    {
      id: 4,
      type: "update",
      title: "Report Ready",
      message: "Your competitive analysis report is ready for review.",
      time: "1 day ago",
      read: true,
      icon: FileText,
      color: "text-purple-500"
    },
    {
      id: 5,
      type: "alert",
      title: "System Update",
      message: "MyBizAI has been updated with new AI features.",
      time: "2 days ago",
      read: true,
      icon: AlertCircle,
      color: "text-red-500"
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadNotifications = notifications.filter(n => !n.read);
  const readNotifications = notifications.filter(n => n.read);

  const NotificationItem = ({ notification }: { notification: typeof notifications[0] }) => (
    <Card className={`${!notification.read ? 'border-primary/50 bg-muted/30' : ''} hover:shadow-md transition-shadow`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded-lg ${!notification.read ? 'bg-primary/10' : 'bg-muted'}`}>
            <notification.icon className={`h-5 w-5 ${notification.color}`} />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="font-semibold text-sm">{notification.title}</h4>
              {!notification.read && (
                <Badge variant="default" className="text-xs">New</Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
            <p className="text-xs text-muted-foreground">{notification.time}</p>
          </div>

          <div className="flex gap-1">
            {!notification.read && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => markAsRead(notification.id)}
              >
                <CheckCheck className="h-4 w-4" />
              </Button>
            )}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => deleteNotification(notification.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">
              Stay updated with your business activities
              {unreadCount > 0 && (
                <span className="ml-2 text-primary font-medium">
                  ({unreadCount} unread)
                </span>
              )}
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
              <CheckCheck className="h-4 w-4 mr-2" />
              Mark All Read
            </Button>
            <Button variant="outline" onClick={clearAll} disabled={notifications.length === 0}>
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

        {notifications.length === 0 ? (
          <Card>
            <CardContent className="py-12">
              <div className="text-center">
                <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No notifications</h3>
                <p className="text-sm text-muted-foreground">You're all caught up!</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">
                All ({notifications.length})
              </TabsTrigger>
              <TabsTrigger value="unread">
                Unread ({unreadCount})
              </TabsTrigger>
              <TabsTrigger value="read">
                Read ({readNotifications.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {notifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </TabsContent>

            <TabsContent value="unread" className="space-y-4">
              {unreadNotifications.length === 0 ? (
                <Card>
                  <CardContent className="py-12">
                    <div className="text-center">
                      <CheckCheck className="h-12 w-12 mx-auto mb-4 text-green-500 opacity-50" />
                      <h3 className="text-lg font-semibold mb-2">All caught up!</h3>
                      <p className="text-sm text-muted-foreground">No unread notifications</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                unreadNotifications.map((notification) => (
                  <NotificationItem key={notification.id} notification={notification} />
                ))
              )}
            </TabsContent>

            <TabsContent value="read" className="space-y-4">
              {readNotifications.length === 0 ? (
                <Card>
                  <CardContent className="py-12">
                    <div className="text-center">
                      <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <h3 className="text-lg font-semibold mb-2">No read notifications</h3>
                      <p className="text-sm text-muted-foreground">Read notifications will appear here</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                readNotifications.map((notification) => (
                  <NotificationItem key={notification.id} notification={notification} />
                ))
              )}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default Notifications;