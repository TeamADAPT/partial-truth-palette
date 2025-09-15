import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  Search,
  BarChart3,
  PieChart,
  Activity,
  Sparkles
} from "lucide-react";
import { RevenueChart } from "@/components/charts/RevenueChart";

const MarketResearch = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const marketMetrics = [
    { label: "Total Market Size", value: "$500M", change: "+12%", icon: DollarSign },
    { label: "Growth Rate (YoY)", value: "15%", change: "+3%", icon: TrendingUp },
    { label: "Customer Base", value: "2M", change: "+18%", icon: Users },
    { label: "Market Share", value: "2.5%", change: "+0.8%", icon: Target }
  ];

  const competitors = [
    { name: "CompetitorA", marketShare: 35, revenue: "$175M", growth: "+8%" },
    { name: "CompetitorB", marketShare: 28, revenue: "$140M", growth: "+12%" },
    { name: "CompetitorC", marketShare: 20, revenue: "$100M", growth: "+15%" },
    { name: "Others", marketShare: 17, revenue: "$85M", growth: "+5%" }
  ];

  const trends = [
    { trend: "AI Integration", impact: "High", adoption: 78 },
    { trend: "Mobile-First Approach", impact: "High", adoption: 85 },
    { trend: "Sustainability Focus", impact: "Medium", adoption: 62 },
    { trend: "Personalization", impact: "High", adoption: 71 }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Market Research Insights</h1>
            <p className="text-muted-foreground">Comprehensive market analysis powered by AI</p>
          </div>
          <Button className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Generate AI Summary
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="competitors">Competitors</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            {/* Market Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {marketMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                        <p className="text-3xl font-bold">{metric.value}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <TrendingUp className="h-3 w-3 text-green-500" />
                          <span className="text-xs text-green-500">{metric.change}</span>
                        </div>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <metric.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Market Trends Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Market Size Over Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <RevenueChart />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Customer Segments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Enterprise (B2B)</span>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="w-24" />
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>SMB (Small-Medium)</span>
                      <div className="flex items-center gap-2">
                        <Progress value={35} className="w-24" />
                        <span className="text-sm font-medium">35%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Individual (B2C)</span>
                      <div className="flex items-center gap-2">
                        <Progress value={20} className="w-24" />
                        <span className="text-sm font-medium">20%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Key Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Growth Opportunity</h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        The market is experiencing rapid growth with emerging technologies driving adoption.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Competitive Advantage</h4>
                      <p className="text-sm text-green-800 dark:text-green-200">
                        AI-powered solutions are becoming the key differentiator in the market.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Market Challenge</h4>
                      <p className="text-sm text-orange-800 dark:text-orange-200">
                        Increasing competition requires innovative approaches to customer acquisition.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Trend Alert</h4>
                      <p className="text-sm text-purple-800 dark:text-purple-200">
                        Mobile-first solutions are driving the next wave of market expansion.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitive Landscape</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitors.map((competitor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-foreground rounded-lg flex items-center justify-center text-white font-semibold">
                          {competitor.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold">{competitor.name}</h4>
                          <p className="text-sm text-muted-foreground">Market Share: {competitor.marketShare}%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="font-semibold">{competitor.revenue}</p>
                          <p className="text-sm text-muted-foreground">Revenue</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">{competitor.growth}</Badge>
                          <p className="text-sm text-muted-foreground mt-1">Growth</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Analysis
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Market Trends & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trends.map((trend, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold">{trend.trend}</h4>
                          <Badge variant={trend.impact === 'High' ? 'default' : 'secondary'} className="mt-1">
                            {trend.impact} Impact
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{trend.adoption}%</p>
                          <p className="text-sm text-muted-foreground">Adoption</p>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Market Adoption</span>
                          <span>{trend.adoption}%</span>
                        </div>
                        <Progress value={trend.adoption} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Emerging Markets</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Untapped potential in Southeast Asian markets with growing digital adoption.
                      </p>
                      <Badge variant="outline">High Potential</Badge>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">AI Integration</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        First-mover advantage in AI-powered business automation solutions.
                      </p>
                      <Badge variant="outline">Innovation Opportunity</Badge>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Partnership Channels</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Strategic partnerships with existing market leaders for rapid expansion.
                      </p>
                      <Badge variant="outline">Strategic Alliance</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold">Immediate Action</h4>
                      </div>
                      <p className="text-sm mb-2">
                        Develop AI-powered features to capture the growing demand for automation.
                      </p>
                      <Button size="sm" variant="outline">
                        Start Planning
                      </Button>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Search className="h-4 w-4 text-orange-600" />
                        <h4 className="font-semibold">Market Entry</h4>
                      </div>
                      <p className="text-sm mb-2">
                        Research regulatory requirements for expansion into new geographical markets.
                      </p>
                      <Button size="sm" variant="outline">
                        Research Markets
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MarketResearch;