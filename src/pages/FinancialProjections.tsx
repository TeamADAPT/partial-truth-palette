import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Lightbulb, Plus } from "lucide-react";

export default function FinancialProjections() {
  const financialData = [
    { year: "2024", revenue: "$620,000", expenses: "$350,000", profit: "$270,000" },
    { year: "2025", revenue: "$694,400", expenses: "$392,000", profit: "$302,400" },
    { year: "2026", revenue: "$777,728", expenses: "$439,040", profit: "$338,688" },
    { year: "2027", revenue: "$871,055", expenses: "$491,725", profit: "$379,330" },
    { year: "2028", revenue: "$975,582", expenses: "$550,732", profit: "$424,850" }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gradient-text">Financial Projections</h1>
        <p className="text-muted-foreground">
          Create, analyze, and visualize financial forecasts for your business ideas
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Scenario Analysis & Inputs */}
        <div className="space-y-6">
          {/* Scenario Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Scenario Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Current Scenario:</span>
                <Badge variant="default">Most Likely</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">Best Case</Button>
                <Button variant="outline" size="sm" className="flex-1">Worst Case</Button>
                <Button variant="default" size="sm" className="flex-1">Most Likely</Button>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <Plus className="h-4 w-4" />
                Create New Scenario
              </Button>
            </CardContent>
          </Card>

          {/* Input Assumptions */}
          <Card>
            <CardHeader>
              <CardTitle>Input Assumptions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="revenue1">Revenue Stream 1 ($)</Label>
                <Input 
                  id="revenue1" 
                  placeholder="e.g., 50000" 
                  defaultValue="75000"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="revenue2">Revenue Stream 2 ($)</Label>
                <Input 
                  id="revenue2" 
                  placeholder="e.g., 25000" 
                  defaultValue="30000"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expense1">Expense Category 1 ($)</Label>
                <Input 
                  id="expense1" 
                  placeholder="e.g., 15000" 
                  defaultValue="20000"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expense2">Expense Category 2 ($)</Label>
                <Input 
                  id="expense2" 
                  placeholder="e.g., 10000" 
                  defaultValue="12000"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="growth">Annual Growth Rate (%)</Label>
                <Input 
                  id="growth" 
                  placeholder="e.g., 10" 
                  defaultValue="12"
                  className="bg-background"
                />
              </div>
              <Button className="w-full gap-2">
                <Lightbulb className="h-4 w-4" />
                Update Projections
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Financial Statements & Visualizations */}
        <div className="lg:col-span-2 space-y-6">
          {/* Financial Statements */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Statements</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="profit-loss" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="profit-loss">Profit & Loss</TabsTrigger>
                  <TabsTrigger value="cash-flow">Cash Flow</TabsTrigger>
                  <TabsTrigger value="balance-sheet">Balance Sheet</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profit-loss">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Year</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Revenue</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Expenses</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Net Profit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {financialData.map((row, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="py-4 px-4 font-medium">{row.year}</td>
                            <td className="py-4 px-4 text-muted-foreground">{row.revenue}</td>
                            <td className="py-4 px-4 text-muted-foreground">{row.expenses}</td>
                            <td className="py-4 px-4 text-green-500 font-semibold">{row.profit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="cash-flow">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Cash flow projections coming soon...</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="balance-sheet">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Balance sheet projections coming soon...</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Visualizations */}
          <Card>
            <CardHeader>
              <CardTitle>Visualizations</CardTitle>
              <CardDescription>Revenue and Profit Over Time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold">$424,850</div>
                <div className="flex items-center gap-1 text-green-500">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">+12% YoY</span>
                </div>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center border border-border/50">
                <div className="text-center space-y-2">
                  <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Interactive chart visualization</p>
                  <p className="text-sm text-muted-foreground/60">Revenue and profit trends over time</p>
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground mt-4">
                <span>2024</span>
                <span>2025</span>
                <span>2026</span>
                <span>2027</span>
                <span>2028</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}