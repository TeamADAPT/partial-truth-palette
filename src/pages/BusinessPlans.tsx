import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, FileText, Target, DollarSign, Users, CheckCircle } from "lucide-react";

const BusinessPlans = () => {
  const [marketOverview, setMarketOverview] = useState("");
  const [activeTab, setActiveTab] = useState("market-analysis");

  const completionItems = [
    { label: "Executive Summary", completed: true },
    { label: "Market Analysis", completed: true },
    { label: "Product Description", completed: false },
    { label: "Marketing Strategy", completed: false },
    { label: "Financial Projections", completed: false },
    { label: "Risk Assessment", completed: false },
  ];

  const completedCount = completionItems.filter(item => item.completed).length;
  const completionPercentage = (completedCount / completionItems.length) * 100;

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="flex h-full">
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-6">
              Business Plan for AI-Powered Tutoring Platform
            </h1>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="market-analysis">Market Analysis</TabsTrigger>
                <TabsTrigger value="financial">Financial Projections</TabsTrigger>
                <TabsTrigger value="operational">Operational Strategies</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Executive Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Provide a comprehensive overview of your business concept, mission, and key objectives..."
                      rows={8}
                      className="mb-4"
                    />
                    <div className="flex justify-end">
                      <Button>Generate Executive Summary</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="market-analysis" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Market Overview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          placeholder="Describe the current market landscape, including size, growth rate, and key trends..."
                          value={marketOverview}
                          onChange={(e) => setMarketOverview(e.target.value)}
                          rows={8}
                        />
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-yellow-500" />
                          AI Suggestions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="p-4 border border-dashed border-border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="h-4 w-4 text-yellow-500" />
                            <h4 className="font-semibold text-sm">Insight</h4>
                          </div>
                          <p className="text-muted-foreground text-sm mb-4">
                            The global e-learning market is projected to reach $375 billion by 2026. Consider highlighting the niche of personalized AI tutoring within this growing sector.
                          </p>
                          <Button variant="outline" size="sm">
                            Use this suggestion
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button>Generate Market Analysis</Button>
                </div>
              </TabsContent>

              <TabsContent value="financial" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Revenue Projections
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Year 1</span>
                          <span className="font-semibold">$120,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Year 2</span>
                          <span className="font-semibold">$350,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Year 3</span>
                          <span className="font-semibold">$750,000</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Key Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Break-even Point</span>
                          <Badge variant="secondary">Month 18</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>ROI (3 years)</span>
                          <Badge variant="secondary">325%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Market Share Target</span>
                          <Badge variant="secondary">2.5%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="operational" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Operational Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Outline your operational processes, team structure, and key partnerships..."
                      rows={8}
                      className="mb-4"
                    />
                    <div className="flex justify-end">
                      <Button>Generate Operational Plan</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-card border-l border-border p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Plan Progress</h3>
              <div className="flex items-center gap-4 mb-2">
                <Progress value={completionPercentage} className="flex-1" />
                <span className="text-sm font-medium">{Math.round(completionPercentage)}%</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Completion Checklist</h4>
              <div className="space-y-3">
                {completionItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className={`h-4 w-4 ${item.completed ? 'text-green-500' : 'text-muted-foreground'}`} />
                    <span className={`text-sm ${item.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Button className="w-full mb-4">
                New Plan
              </Button>
              <div className="text-center">
                <Button variant="ghost" size="sm">
                  Help and docs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlans;