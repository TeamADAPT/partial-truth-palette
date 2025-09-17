import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Play, FileText, CheckCircle, Clock } from "lucide-react";

export default function HelpSupport() {
  const gettingStarted = [
    {
      title: "Welcome to MyBizAI",
      description: "A quick overview of MyBizAI's core features and benefits.",
      type: "video",
      duration: "5:12",
      completed: false
    },
    {
      title: "Navigating the Dashboard", 
      description: "Learn how to efficiently use the dashboard to manage your projects.",
      type: "guide",
      duration: "Guide",
      completed: true
    },
    {
      title: "Setting Up Your First Project",
      description: "Step-by-step instructions to create and configure your initial project.",
      type: "video", 
      duration: "8:45",
      completed: false
    }
  ];

  const advancedFeatures = [
    {
      title: "Market Research Tools",
      description: "Leverage our market research tools to identify trends and opportunities.",
      type: "article",
      duration: "Article",
      completed: false
    },
    {
      title: "AI-Powered Idea Generation",
      description: "Explore the power of AI to generate innovative business ideas.",
      type: "video",
      duration: "12:30",
      completed: true
    },
    {
      title: "Collaboration and Sharing",
      description: "Learn how to collaborate with team members and share your progress.",
      type: "guide",
      duration: "Guide", 
      completed: false
    }
  ];

  const troubleshooting = [
    {
      title: "Common Issues and Solutions",
      description: "Find solutions to common problems and frequently asked questions.",
      type: "article",
      duration: "Article",
      completed: false
    },
    {
      title: "Contacting Support",
      description: "Learn how to reach our support team for personalized assistance.",
      type: "article",
      duration: "Article",
      completed: false
    },
    {
      title: "Feedback and Suggestions",
      description: "Share your feedback and suggestions to help us improve MyBizAI.",
      type: "article", 
      duration: "Article",
      completed: false
    }
  ];

  const TutorialCard = ({ tutorial, index }: { tutorial: any; index: number }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
        <div className="relative z-10 text-center">
          {tutorial.type === "video" ? (
            <Play className="h-12 w-12 text-white mb-2 mx-auto" />
          ) : (
            <FileText className="h-12 w-12 text-white mb-2 mx-auto" />
          )}
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
          {tutorial.type === "video" && <Play className="h-3 w-3" />}
          {tutorial.type === "article" && <FileText className="h-3 w-3" />}
          {tutorial.type === "guide" && <FileText className="h-3 w-3" />}
          <span>{tutorial.duration}</span>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-4">
        <div>
          <h4 className="font-semibold text-lg">{tutorial.title}</h4>
          <p className="text-sm text-muted-foreground">{tutorial.description}</p>
        </div>
        
        {tutorial.completed ? (
          <div className="flex items-center gap-3">
            <Progress value={100} className="flex-1 h-2" />
            <span className="text-sm font-medium text-muted-foreground">Completed</span>
          </div>
        ) : (
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full gap-2"
          >
            <Clock className="h-4 w-4" />
            Mark as Complete
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-6 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text">Tutorials & Guides</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our comprehensive library of tutorials, guides, and articles to master 
          MyBizAI and achieve your business goals.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tutorials and guides"
            className="pl-10 bg-background/80"
          />
        </div>
      </div>

      {/* Getting Started */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gettingStarted.map((tutorial, index) => (
            <TutorialCard key={index} tutorial={tutorial} index={index} />
          ))}
        </div>
      </section>

      {/* Advanced Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Advanced Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedFeatures.map((tutorial, index) => (
            <TutorialCard key={index} tutorial={tutorial} index={index} />
          ))}
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Troubleshooting</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {troubleshooting.map((tutorial, index) => (
            <TutorialCard key={index} tutorial={tutorial} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}