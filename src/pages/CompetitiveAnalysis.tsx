import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Database, Globe, FileText, CheckCircle, X, TrendingUp, AlertTriangle } from "lucide-react";

export default function CompetitiveAnalysis() {
  const swotData = {
    strengths: { value: 75, label: "Strong", color: "text-green-500" },
    weaknesses: { value: 45, label: "Moderate", color: "text-red-500" },
    opportunities: { value: 85, label: "High", color: "text-blue-500" },
    threats: { value: 60, label: "Significant", color: "text-amber-500" }
  };

  const insights = [
    {
      icon: CheckCircle,
      color: "text-green-500",
      text: "Strong brand recognition and loyal customer base."
    },
    {
      icon: X,
      color: "text-red-500", 
      text: "Outdated technology stack may hinder innovation."
    },
    {
      icon: TrendingUp,
      color: "text-blue-500",
      text: "Growing market for sustainable products presents expansion opportunities."
    },
    {
      icon: AlertTriangle,
      color: "text-amber-500",
      text: "New market entrants with aggressive pricing strategies pose a threat."
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gradient-text">Competitive Analysis Tool</h1>
        <p className="text-muted-foreground">
          Leverage AI to generate insights on your competitors
        </p>
      </div>

      {/* Analysis Input */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-end gap-4">
            <div className="flex-1 w-full space-y-2">
              <Label htmlFor="competitor-name">Competitor Name or Website</Label>
              <Input 
                id="competitor-name"
                placeholder="e.g., Competitor Inc. or competitor.com"
                className="bg-background"
              />
            </div>
            <Button className="w-full sm:w-auto gap-2">
              <Sparkles className="h-4 w-4" />
              Analyze with AI
            </Button>
          </div>
          
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Or import data from external sources:
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Database className="h-4 w-4" />
                  Public Databases
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  Web Scraper
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Industry Reports
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Results */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">
          Analysis Results for{" "}
          <span className="gradient-text">Innovate Co.</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SWOT Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>SWOT Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-green-500">Strengths</p>
                    <span className="text-xs font-semibold text-green-500">
                      {swotData.strengths.label}
                    </span>
                  </div>
                  <Progress value={swotData.strengths.value} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-red-500">Weaknesses</p>
                    <span className="text-xs font-semibold text-red-500">
                      {swotData.weaknesses.label}
                    </span>
                  </div>
                  <Progress value={swotData.weaknesses.value} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-blue-500">Opportunities</p>
                    <span className="text-xs font-semibold text-blue-500">
                      {swotData.opportunities.label}
                    </span>
                  </div>
                  <Progress value={swotData.opportunities.value} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-amber-500">Threats</p>
                    <span className="text-xs font-semibold text-amber-500">
                      {swotData.threats.label}
                    </span>
                  </div>
                  <Progress value={swotData.threats.value} className="h-3" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Key Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <insight.icon className={`h-5 w-5 ${insight.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {insight.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Strategic Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-4">
            Based on the analysis, we recommend the following strategic actions:
          </p>
          <ol className="space-y-4">
            <li>
              <strong>Capitalize on Strengths:</strong> Launch a marketing campaign highlighting 
              your brand's heritage and customer loyalty to reinforce your market position.
            </li>
            <li>
              <strong>Address Weaknesses:</strong> Allocate budget for a phased modernization 
              of your technology infrastructure to improve efficiency and enable future growth.
            </li>
            <li>
              <strong>Seize Opportunities:</strong> Develop and launch a new line of eco-friendly 
              products to capture the growing demand for sustainability.
            </li>
            <li>
              <strong>Mitigate Threats:</strong> Introduce a tiered pricing model or a 
              value-focused product line to compete with new low-cost alternatives without 
              devaluing your core offerings.
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}