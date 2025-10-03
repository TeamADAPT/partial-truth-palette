import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  FileText, 
  Download, 
  Edit, 
  Eye,
  Sparkles,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  CheckCircle2,
  Circle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BusinessPlan = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const sections = [
    { id: 1, title: "Executive Summary", completed: true, icon: FileText },
    { id: 2, title: "Company Description", completed: true, icon: Users },
    { id: 3, title: "Market Analysis", completed: true, icon: TrendingUp },
    { id: 4, title: "Organization & Management", completed: false, icon: Users },
    { id: 5, title: "Products & Services", completed: false, icon: Target },
    { id: 6, title: "Marketing Strategy", completed: false, icon: TrendingUp },
    { id: 7, title: "Financial Projections", completed: false, icon: DollarSign },
    { id: 8, title: "Funding Requirements", completed: false, icon: DollarSign }
  ];

  const completedSections = sections.filter(s => s.completed).length;
  const progress = (completedSections / sections.length) * 100;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Business plan generated",
        description: "Your AI-powered business plan is ready for review.",
      });
    }, 3000);
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Business Plan Generator</h1>
            <p className="text-muted-foreground">Create a comprehensive business plan with AI assistance</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Plan Completion</h3>
                <p className="text-sm text-muted-foreground">
                  {completedSections} of {sections.length} sections completed
                </p>
              </div>
              <Badge variant="default" className="text-lg px-4 py-2">
                {Math.round(progress)}%
              </Badge>
            </div>
            <Progress value={progress} className="h-3" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Sections */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Plan Sections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant={section.completed ? "default" : "outline"}
                      className="w-full justify-start"
                    >
                      {section.completed ? (
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                      ) : (
                        <Circle className="h-4 w-4 mr-2" />
                      )}
                      {section.title}
                    </Button>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button 
                    className="w-full flex items-center gap-2"
                    onClick={handleGenerate}
                    disabled={isGenerating}
                  >
                    <Sparkles className="h-4 w-4" />
                    {isGenerating ? "Generating..." : "Generate with AI"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Executive Summary
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground">
                    MyBizAI is an innovative platform that empowers entrepreneurs with fully autonomous 
                    business ecosystems. Our cutting-edge AI technology enables hands-free management 
                    and maximized income generation through intelligent automation and strategic insights.
                  </p>
                </div>
                
                <div className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="mission">Mission Statement</Label>
                    <Textarea 
                      id="mission"
                      rows={3}
                      placeholder="Enter your mission statement..."
                      defaultValue="To revolutionize entrepreneurship by providing AI-powered tools that automate and optimize business operations."
                    />
                  </div>

                  <div>
                    <Label htmlFor="vision">Vision Statement</Label>
                    <Textarea 
                      id="vision"
                      rows={3}
                      placeholder="Enter your vision statement..."
                      defaultValue="Become the leading platform for autonomous business management, enabling entrepreneurs worldwide to achieve their goals with minimal manual intervention."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="founded">Founded</Label>
                      <Input id="founded" defaultValue="2025" />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button>Save Section</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Company Description
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="description">Company Overview</Label>
                  <Textarea 
                    id="description"
                    rows={6}
                    placeholder="Describe your company..."
                    defaultValue="MyBizAI provides entrepreneurs with a comprehensive suite of AI-powered tools designed to automate business operations, generate innovative ideas, and maximize profitability. Our platform combines advanced machine learning algorithms with intuitive interfaces to create an autonomous business ecosystem that adapts and grows with your needs."
                  />
                </div>

                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input id="industry" defaultValue="AI Technology / SaaS" />
                </div>

                <div>
                  <Label htmlFor="target">Target Market</Label>
                  <Input id="target" defaultValue="Entrepreneurs, Small Business Owners, Startups" />
                </div>

                <div className="flex justify-end pt-4">
                  <Button>Save Section</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Market Analysis
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="market-size">Market Size</Label>
                  <Input id="market-size" defaultValue="$50B global AI automation market" />
                </div>

                <div>
                  <Label htmlFor="growth">Growth Rate</Label>
                  <Input id="growth" defaultValue="25% annual growth projected through 2030" />
                </div>

                <div>
                  <Label htmlFor="trends">Key Trends</Label>
                  <Textarea 
                    id="trends"
                    rows={4}
                    defaultValue="- Increased demand for automation in small businesses&#10;- Growing acceptance of AI-powered decision making&#10;- Rising need for scalable business solutions&#10;- Shift towards autonomous operations"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button>Save Section</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;