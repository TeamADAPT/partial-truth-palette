import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { TasksChart } from "@/components/charts/TasksChart";
import { StatsCard } from "@/components/StatsCard";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  DollarSign,
  Target,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { useState } from "react";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("30d");
  const [exportFormat, setExportFormat] = useState("pdf");

  const stats = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+15.2%",
      trend: "up" as const,
      icon: DollarSign
    },
    {
      title: "Active Projects", 
      value: "23",
      change: "+8",
      trend: "up" as const,
      icon: Target
    },
    {
      title: "Team Efficiency",
      value: "94%",
      change: "+3.1%",
      trend: "up" as const,
      icon: Activity
    },
    {
      title: "Client Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up" as const,
      icon: Users
    }
  ];

  const keyMetrics = [
    {
      title: "Conversion Rate",
      value: "12.5%",
      change: "+2.1%",
      isPositive: true,
      description: "From leads to closed deals"
    },
    {
      title: "Average Deal Size",
      value: "$45K",
      change: "+8.3%", 
      isPositive: true,
      description: "Per project completion"
    },
    {
      title: "Time to Delivery",
      value: "28 days",
      change: "-5 days",
      isPositive: true,
      description: "Average project completion"
    },
    {
      title: "Customer Retention",
      value: "89%",
      change: "-1.2%",
      isPositive: false,
      description: "Repeat business rate"
    }
  ];

  const projectsByCategory = [
    { category: "AI/ML Development", count: 8, percentage: 35 },
    { category: "E-commerce", count: 5, percentage: 22 },
    { category: "FinTech", count: 4, percentage: 17 },
    { category: "HealthTech", count: 3, percentage: 13 },
    { category: "EdTech", count: 3, percentage: 13 }
  ];

  const handleExport = () => {
    console.log(`Exporting analytics report as ${exportFormat.toUpperCase()}`);
    // Export logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Analytics & Reports</h1>
            <p className="text-muted-foreground">
              Comprehensive insights into your business performance and growth metrics
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32 bg-background/80 backdrop-blur-sm border-border/50">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={exportFormat} onValueChange={setExportFormat}>
              <SelectTrigger className="w-24 bg-background/80 backdrop-blur-sm border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="xlsx">Excel</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              onClick={handleExport}
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shadow-primary transition-all duration-300 hover:shadow-glow"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={stat.title} {...stat} index={index} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Revenue Analytics
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Monthly revenue trends and forecasting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <RevenueChart />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-chart-1" />
                Task Performance
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Project completion and efficiency metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <TasksChart />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics & Project Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Key Performance Metrics */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Key Performance Metrics
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Critical business indicators and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {keyMetrics.map((metric, index) => (
                  <div 
                    key={metric.title} 
                    className="flex items-center justify-between p-4 rounded-lg bg-background/30 hover:bg-background/40 transition-colors"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{metric.title}</p>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <div className={`flex items-center gap-1 text-sm ${
                        metric.isPositive ? 'text-success' : 'text-destructive'
                      }`}>
                        {metric.isPositive ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        {metric.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Categories */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-chart-2" />
                Projects by Category
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Distribution of active projects across industries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectsByCategory.map((item, index) => (
                  <div key={item.category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.category}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {item.count}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {item.percentage}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${item.percentage}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;