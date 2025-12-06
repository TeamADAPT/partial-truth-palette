import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Filter, 
  Plus, 
  Users, 
  Bot,
  Crown,
  Shield,
  User,
  Mail,
  Calendar,
  Activity,
  MoreHorizontal,
  Edit,
  Settings,
  Key
} from "lucide-react";
import { toast } from "sonner";
import { useTeams } from "@/hooks/use-teams";

const Teams = () => {
  const { data: teamMembers = [], isLoading } = useTeams();
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || member.type === typeFilter;
    const matchesStatus = statusFilter === "all" || member.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return "🟢";
      case "away": return "🟡";
      case "busy": return "🔴";
      case "offline": return "⚫";
      default: return "⚫";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success/10 text-success border-success/20";
      case "away": return "bg-warning/10 text-warning border-warning/20";
      case "busy": return "bg-destructive/10 text-destructive border-destructive/20";
      case "offline": return "bg-muted/10 text-muted-foreground border-muted/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getRoleIcon = (role: string, type: string) => {
    if (type === "ai") return <Bot className="h-4 w-4" />;
    if (role.toLowerCase().includes("manager")) return <Crown className="h-4 w-4" />;
    if (role.toLowerCase().includes("senior")) return <Shield className="h-4 w-4" />;
    return <User className="h-4 w-4" />;
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Team Management</h1>
            <p className="text-muted-foreground">
              Manage your human team members and AI agents across all projects
            </p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shadow-primary transition-all duration-300 hover:shadow-glow">
            <Plus className="h-4 w-4 mr-2" />
            Add Team Member
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-card/50 border-border/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search team members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/50"
                />
              </div>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-48 bg-background/50">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="human">Human</SelectItem>
                  <SelectItem value="ai">AI Agent</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48 bg-background/50">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="away">Away</SelectItem>
                  <SelectItem value="busy">Busy</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, index) => (
            <Card 
              key={member.id} 
              className="tech-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-float"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationDuration: `${5 + index * 0.3}s`
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {member.type === "ai" ? (
                            <Bot className="h-6 w-6" />
                          ) : (
                            member.name.split(" ").map(n => n[0]).join("")
                          )}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-background rounded-full flex items-center justify-center text-xs">
                        {getStatusIcon(member.status)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        {getRoleIcon(member.role, member.type)}
                        <span>{member.role}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(member.status)}>
                    {member.status}
                  </Badge>
                  <Badge variant="outline" className={member.type === "ai" ? "bg-primary/10 text-primary border-primary/20" : ""}>
                    {member.type === "ai" ? "AI Agent" : "Human"}
                  </Badge>
                </div>

                {member.specialty && (
                  <p className="text-sm text-muted-foreground">
                    <strong>Specialty:</strong> {member.specialty}
                  </p>
                )}

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Efficiency</span>
                    <span className="font-medium">{member.efficiency}%</span>
                  </div>
                  <Progress value={member.efficiency} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Tasks Done</p>
                    <p className="font-semibold">{member.tasksCompleted}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Projects</p>
                    <p className="font-semibold">{member.currentProjects.length}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Current Projects:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.currentProjects.slice(0, 2).map((project) => (
                      <Badge key={project} variant="secondary" className="text-xs">
                        {project}
                      </Badge>
                    ))}
                    {member.currentProjects.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{member.currentProjects.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span className="truncate">{member.email}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => toast("Permissions management not implemented yet")}>
                    <Key className="h-4 w-4 mr-1" />
                    Perms
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="text-center space-y-4">
                <div className="text-6xl opacity-20">👥</div>
                <h3 className="text-xl font-semibold">No team members found</h3>
                <p className="text-muted-foreground max-w-md">
                  No team members match your current filters. Try adjusting your search criteria or add new team members.
                </p>
                <Button className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Team Member
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Teams;