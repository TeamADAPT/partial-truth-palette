import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  TrendingUp, 
  Users, 
  DollarSign,
  Globe,
  BarChart3,
  PieChart,
  Target,
  Sparkles
} from "lucide-react";

const MarketResearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const marketInsights = [
    {
      title: "Global AI Market Size",
      value: "$136.55B",
      growth: "+37.3%",
      icon: Globe,
      color: "text-blue-500"
    },
    {
      title: "Target Audience Size",
      value: "45M",
      growth: "+12.5%",
      icon: Users,
      color: "text-purple-500"
    },
    {
      title: "Market Growth Rate",
      value: "37.3%",
      growth: "CAGR 2023-2030",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "Revenue Potential",
      value: "$1.5B",
      growth: "By 2030",
      icon: DollarSign,
      color: "text-orange-500"
    }
  ];

  const competitors = [
    {
      name: "CompetitorAI Pro",
      marketShare: "28%",
      strengths: ["Enterprise focus", "Strong brand"],
      weaknesses: ["High pricing", "Complex UI"],
      pricing: "$499/mo"
    },
    {
      name: "BizAutomator",
      marketShare: "22%",
      strengths: ["Easy to use", "Good support"],
      weaknesses: ["Limited features", "Slow updates"],
      pricing: "$199/mo"
    },
    {
      name: "SmartBusiness AI",
      marketShare: "18%",
      strengths: ["Affordable", "Fast deployment"],
      weaknesses: ["Basic analytics", "No mobile app"],
      pricing: "$149/mo"
    }
  ];

  const trends = [
    {
      title: "AI-Powered Automation",
      impact: "High",
      description: "Businesses are increasingly adopting AI for operational efficiency",
      growth: "+45%"
    },
    {
      title: "Remote Work Solutions",
      impact: "Medium",
      description: "Demand for tools supporting distributed teams",
      growth: "+32%"
    },
    {
      title: "No-Code Platforms",
      impact: "High",
      description: "Growing preference for user-friendly, no-code solutions",
      growth: "+38%"
    },
    {
      title: "Subscription Models",
      impact: "Medium",
      description: "SaaS subscription models dominating the market",
      growth: "+28%"
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Market Research</h1>
            <p className="text-muted-foreground">Comprehensive market analysis and competitive insights</p>
          </div>
          <Button className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Generate Report
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search markets, competitors, or trends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketInsights.map((insight, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-muted`}>
                    <insight.icon className={`h-5 w-5 ${insight.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{insight.value}</h3>
                <p className="text-sm text-muted-foreground mb-2">{insight.title}</p>
                <Badge variant="default">{insight.growth}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Competitive Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Competitive Landscape
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitors.map((competitor, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{competitor.name}</h4>
                        <p className="text-sm text-muted-foreground">Market Share: {competitor.marketShare}</p>
                      </div>
                      <Badge>{competitor.pricing}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-medium text-green-600 mb-1">Strengths</p>
                        <ul className="space-y-1">
                          {competitor.strengths.map((strength, i) => (
                            <li key={i} className="text-muted-foreground">• {strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-red-600 mb-1">Weaknesses</p>
                        <ul className="space-y-1">
                          {competitor.weaknesses.map((weakness, i) => (
                            <li key={i} className="text-muted-foreground">• {weakness}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Market Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Market Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trends.map((trend, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{trend.title}</h4>
                      <Badge variant={trend.impact === 'High' ? 'default' : 'secondary'}>
                        {trend.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{trend.description}</p>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium text-green-600">{trend.growth} growth</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <BarChart3 className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Industry Analysis</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Deep dive into industry dynamics and opportunities
              </p>
              <Button variant="outline" className="w-full">View Analysis</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <PieChart className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Customer Segments</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed breakdown of target customer groups
              </p>
              <Button variant="outline" className="w-full">View Segments</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Globe className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Geographic Analysis</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Market opportunities across different regions
              </p>
              <Button variant="outline" className="w-full">View Regions</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketResearch;