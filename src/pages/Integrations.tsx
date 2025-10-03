import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Check,
  Plus,
  Settings,
  Plug,
  Zap,
  Mail,
  MessageSquare,
  Database,
  CreditCard,
  Calendar,
  FileText
} from "lucide-react";

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [connectedIntegrations, setConnectedIntegrations] = useState<number[]>([1, 3, 5]);

  const categories = ["All", "Connected", "Productivity", "Communication", "Finance", "Analytics"];

  const integrations = [
    {
      id: 1,
      name: "Stripe",
      description: "Accept payments and manage subscriptions",
      icon: CreditCard,
      category: "Finance",
      color: "text-purple-500",
      popular: true
    },
    {
      id: 2,
      name: "Slack",
      description: "Team communication and collaboration",
      icon: MessageSquare,
      category: "Communication",
      color: "text-pink-500",
      popular: true
    },
    {
      id: 3,
      name: "Google Calendar",
      description: "Sync deadlines and meetings",
      icon: Calendar,
      category: "Productivity",
      color: "text-blue-500",
      popular: true
    },
    {
      id: 4,
      name: "Mailchimp",
      description: "Email marketing automation",
      icon: Mail,
      category: "Communication",
      color: "text-yellow-500",
      popular: false
    },
    {
      id: 5,
      name: "Zapier",
      description: "Connect your apps and automate workflows",
      icon: Zap,
      category: "Productivity",
      color: "text-orange-500",
      popular: true
    },
    {
      id: 6,
      name: "Airtable",
      description: "Flexible database and spreadsheet hybrid",
      icon: Database,
      category: "Productivity",
      color: "text-red-500",
      popular: false
    },
    {
      id: 7,
      name: "Google Drive",
      description: "Cloud storage and file sharing",
      icon: FileText,
      category: "Productivity",
      color: "text-green-500",
      popular: true
    },
    {
      id: 8,
      name: "QuickBooks",
      description: "Accounting and financial management",
      icon: CreditCard,
      category: "Finance",
      color: "text-emerald-500",
      popular: false
    }
  ];

  const toggleIntegration = (id: number) => {
    setConnectedIntegrations(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredIntegrations = integrations.filter(integration =>
    integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    integration.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Integrations</h1>
            <p className="text-muted-foreground">
              Connect your favorite tools and automate your workflow
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Request Integration
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Plug className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{connectedIntegrations.length}</p>
                  <p className="text-sm text-muted-foreground">Connected</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{integrations.length}</p>
                  <p className="text-sm text-muted-foreground">Available</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Active</p>
                  <p className="text-sm text-muted-foreground">All systems operational</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Integrations Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Available Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration) => {
              const isConnected = connectedIntegrations.includes(integration.id);
              
              return (
                <Card key={integration.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-muted`}>
                          <integration.icon className={`h-6 w-6 ${integration.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{integration.name}</h3>
                          {integration.popular && (
                            <Badge variant="secondary" className="text-xs mt-1">Popular</Badge>
                          )}
                        </div>
                      </div>
                      {isConnected && (
                        <Button variant="ghost" size="icon">
                          <Settings className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {integration.description}
                    </p>

                    <Button
                      onClick={() => toggleIntegration(integration.id)}
                      variant={isConnected ? "secondary" : "default"}
                      className="w-full"
                    >
                      {isConnected ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Connected
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4 mr-2" />
                          Connect
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-lg text-muted-foreground">No integrations found</p>
              <p className="text-sm text-muted-foreground">Try a different search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Integrations;