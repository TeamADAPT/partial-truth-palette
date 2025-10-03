import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Calendar,
  DollarSign,
  Users,
  Target,
  BarChart3,
  PieChart,
  LineChart
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Reports = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,500",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      title: "Active Projects",
      value: "24",
      change: "+3",
      trend: "up",
      icon: Target,
      color: "text-blue-500"
    },
    {
      title: "Team Members",
      value: "12",
      change: "+2",
      trend: "up",
      icon: Users,
      color: "text-purple-500"
    },
    {
      title: "Ideas Generated",
      value: "156",
      change: "-5",
      trend: "down",
      icon: TrendingUp,
      color: "text-orange-500"
    }
  ];

  const reports = [
    {
      id: 1,
      title: "Monthly Performance Report",
      description: "Comprehensive overview of your business metrics for December 2025",
      date: "Dec 30, 2025",
      type: "Performance",
      size: "2.4 MB",
      icon: BarChart3
    },
    {
      id: 2,
      title: "Quarterly Financial Summary",
      description: "Financial analysis and projections for Q4 2025",
      date: "Dec 28, 2025",
      type: "Financial",
      size: "1.8 MB",
      icon: DollarSign
    },
    {
      id: 3,
      title: "Market Analysis Report",
      description: "Detailed market research and competitive analysis",
      date: "Dec 25, 2025",
      type: "Market Research",
      size: "3.2 MB",
      icon: PieChart
    },
    {
      id: 4,
      title: "Team Productivity Report",
      description: "Team performance metrics and insights",
      date: "Dec 20, 2025",
      type: "Team",
      size: "1.5 MB",
      icon: Users
    },
    {
      id: 5,
      title: "Growth Analytics",
      description: "Year-over-year growth analysis and forecasts",
      date: "Dec 15, 2025",
      type: "Analytics",
      size: "2.1 MB",
      icon: LineChart
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Reports & Analytics</h1>
            <p className="text-muted-foreground">Track your business performance and insights</p>
          </div>
          <div className="flex gap-3">
            <Select defaultValue="30">
              <SelectTrigger className="w-[180px]">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
                <SelectItem value="365">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button>Generate Report</Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-muted`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'}>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report) => (
                <div 
                  key={report.id} 
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <report.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{report.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {report.date}
                        </span>
                        <Badge variant="outline">{report.type}</Badge>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View</Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="p-6">
              <BarChart3 className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Custom Report</h3>
              <p className="text-sm text-muted-foreground mb-4">Create a custom report with specific metrics</p>
              <Button variant="outline" className="w-full">Create Report</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Schedule Report</h3>
              <p className="text-sm text-muted-foreground mb-4">Set up automated report generation</p>
              <Button variant="outline" className="w-full">Schedule</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Download className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Export Data</h3>
              <p className="text-sm text-muted-foreground mb-4">Download all your data in various formats</p>
              <Button variant="outline" className="w-full">Export</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;