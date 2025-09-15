import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Eye, 
  MousePointerClick, 
  DollarSign, 
  TrendingUp,
  Download,
  Calendar,
  Target,
  Users,
  BarChart3
} from "lucide-react";
import { RevenueChart } from "@/components/charts/RevenueChart";

const MarketingPlanner = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const campaigns = [
    {
      name: "Q2 Product Launch",
      status: "active",
      reach: "2.4M",
      clicks: "45.2K",
      conversions: "3.2K",
      roi: "320%",
      budget: "$15,000",
      spent: "$12,300"
    },
    {
      name: "Summer Sale Campaign",
      status: "planned",
      reach: "1.8M",
      clicks: "32.1K",
      conversions: "2.1K",
      roi: "280%",
      budget: "$10,000",
      spent: "$0"
    }
  ];

  const metrics = [
    { label: "Reach", value: "2.4M", icon: Eye, color: "text-blue-500" },
    { label: "Clicks", value: "45.2K", icon: MousePointerClick, color: "text-green-500" },
    { label: "Conversions", value: "3.2K", icon: Target, color: "text-purple-500" },
    { label: "ROI", value: "320%", icon: TrendingUp, color: "text-orange-500" }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Marketing Campaign Planner</h1>
            <p className="text-muted-foreground">Leverage AI to suggest optimal strategies and content for your campaigns.</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Campaign
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="content">Content Builder</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            {/* Performance Card */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Campaign Performance: Q2 Product Launch</CardTitle>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Last updated: Just now
                    </span>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Export Report
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {metrics.map((metric, index) => (
                    <div key={index} className="bg-card/50 p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-md">
                          <metric.icon className={`h-5 w-5 ${metric.color}`} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                          <p className="text-2xl font-bold">{metric.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="h-64">
                  <RevenueChart />
                </div>
              </CardContent>
            </Card>

            {/* Active Campaigns */}
            <Card>
              <CardHeader>
                <CardTitle>Active Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.map((campaign, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-md">
                          <BarChart3 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{campaign.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                              {campaign.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              Budget: {campaign.budget} | Spent: {campaign.spent}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <p className="font-semibold">{campaign.reach}</p>
                          <p className="text-muted-foreground">Reach</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold">{campaign.clicks}</p>
                          <p className="text-muted-foreground">Clicks</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold">{campaign.roi}</p>
                          <p className="text-muted-foreground">ROI</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="mt-6">
            <div className="grid gap-6">
              {campaigns.map((campaign, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>{campaign.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                            {campaign.status}
                          </Badge>
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">March 15 - June 15, 2024</span>
                        </div>
                      </div>
                      <Button variant="outline">
                        Edit Campaign
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="font-semibold">{campaign.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Spent</p>
                        <p className="font-semibold">{campaign.spent}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Conversions</p>
                        <p className="font-semibold">{campaign.conversions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">ROI</p>
                        <p className="font-semibold text-green-600">{campaign.roi}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Budget Usage</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <RevenueChart />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audience Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Age 25-34</span>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="w-24" />
                        <span className="text-sm">45%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Age 35-44</span>
                      <div className="flex items-center gap-2">
                        <Progress value={32} className="w-24" />
                        <span className="text-sm">32%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Age 18-24</span>
                      <div className="flex items-center gap-2">
                        <Progress value={23} className="w-24" />
                        <span className="text-sm">23%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Content Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Content Builder Coming Soon</h3>
                  <p className="text-muted-foreground">
                    Generate compelling marketing content with AI assistance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MarketingPlanner;