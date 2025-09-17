import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Search, Archive, Trash2 } from "lucide-react";
import { useState } from "react";

export default function ArchivedProjects() {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPeriod, setFilterPeriod] = useState("all");

  const archivedProjects = [
    {
      id: "1",
      name: "Project Alpha",
      dateArchived: "2024-01-15",
      status: "Archived"
    },
    {
      id: "2", 
      name: "Project Beta",
      dateArchived: "2024-02-20",
      status: "Archived"
    },
    {
      id: "3",
      name: "Project Gamma", 
      dateArchived: "2024-03-05",
      status: "Archived"
    },
    {
      id: "4",
      name: "Project Delta",
      dateArchived: "2024-04-10", 
      status: "Archived"
    },
    {
      id: "5",
      name: "Project Epsilon",
      dateArchived: "2024-05-15",
      status: "Archived"
    }
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProjects(archivedProjects.map(p => p.id));
    } else {
      setSelectedProjects([]);
    }
  };

  const handleSelectProject = (projectId: string, checked: boolean) => {
    if (checked) {
      setSelectedProjects([...selectedProjects, projectId]);
    } else {
      setSelectedProjects(selectedProjects.filter(id => id !== projectId));
    }
  };

  const filteredProjects = archivedProjects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold gradient-text">Archived Projects</h1>
        <p className="text-muted-foreground">
          Manage your archived projects. Restore or permanently delete projects as needed.
        </p>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2">
            <Archive className="h-4 w-4" />
            Restore All
          </Button>
          <Button 
            variant="outline" 
            className="gap-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
            disabled={selectedProjects.length === 0}
          >
            <Trash2 className="h-4 w-4" />
            Delete Selected
          </Button>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search archived projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-80 bg-background/80"
            />
          </div>

          {/* Filter */}
          <div className="flex gap-1 p-1 rounded-md bg-muted">
            <Button
              variant={filterPeriod === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilterPeriod("all")}
            >
              All
            </Button>
            <Button
              variant={filterPeriod === "30days" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilterPeriod("30days")}
            >
              Last 30 Days
            </Button>
            <Button
              variant={filterPeriod === "90days" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilterPeriod("90days")}
            >
              Last 90 Days
            </Button>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-hidden rounded-md">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <Checkbox
                      checked={selectedProjects.length === archivedProjects.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Project Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Date Archived
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="border-b hover:bg-muted/30">
                    <td className="px-4 py-4">
                      <Checkbox
                        checked={selectedProjects.includes(project.id)}
                        onCheckedChange={(checked) => 
                          handleSelectProject(project.id, checked as boolean)
                        }
                      />
                    </td>
                    <td className="px-4 py-4 font-medium">
                      {project.name}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground text-sm">
                      {project.dateArchived}
                    </td>
                    <td className="px-4 py-4">
                      <Badge variant="secondary">
                        {project.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4">
                        <Button 
                          variant="link" 
                          size="sm"
                          className="p-0 text-primary hover:underline"
                        >
                          Restore
                        </Button>
                        <Button 
                          variant="link" 
                          size="sm"
                          className="p-0 text-red-500 hover:underline"
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {filteredProjects.length === 0 && (
        <div className="text-center py-8">
          <Archive className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">
            {searchQuery ? "No projects found matching your search." : "No archived projects found."}
          </p>
        </div>
      )}
    </div>
  );
}