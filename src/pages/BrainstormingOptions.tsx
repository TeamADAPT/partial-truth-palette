import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookmarkPlus, 
  TrendingUp, 
  Target, 
  Users, 
  Lightbulb,
  ArrowRight,
  Bookmark
} from "lucide-react";

const BrainstormingOptions = () => {
  const [savedOptions, setSavedOptions] = useState<number[]>([]);

  const brainstormingOptions = [
    {
      id: 1,
      title: "Option 1: Market Gap Analysis",
      description: "Identify unmet needs and opportunities in the market. This approach focuses on finding gaps in existing products or services and developing innovative solutions to address them.",
      icon: Target,
      color: "text-blue-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop"
    },
    {
      id: 2,
      title: "Option 2: Trend Exploitation",
      description: "Leverage current trends to create a relevant and timely business. This method involves capitalizing on emerging trends and adapting them to your industry, ensuring your business remains current and competitive.",
      icon: TrendingUp,
      color: "text-green-500", 
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      title: "Option 3: Customer Pain Points",
      description: "Solve specific customer problems with targeted solutions. This strategy centers on identifying common customer pain points and developing products or services that directly address and alleviate these issues.",
      icon: Users,
      color: "text-purple-500",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=225&fit=crop"
    },
    {
      id: 4,
      title: "Option 4: Innovation and Disruption",
      description: "Challenge existing norms and introduce groundbreaking ideas. This approach encourages thinking outside the box, aiming to disrupt the market with innovative and transformative business concepts.",
      icon: Lightbulb,
      color: "text-orange-500",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=225&fit=crop"
    }
  ];

  const toggleSaveOption = (optionId: number) => {
    setSavedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const saveAllAndContinue = () => {
    const allIds = brainstormingOptions.map(option => option.id);
    setSavedOptions(allIds);
    // Here you would typically navigate to the next step
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span>MyBizAI</span>
          <span>/</span>
          <span>Personalization Setup</span>
          <span>/</span>
          <span className="text-foreground">Brainstorming Options</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Brainstorming Options</h1>
          <p className="text-muted-foreground max-w-4xl">
            Based on your industry and business model preferences, we've curated four distinct brainstorming options to kickstart your journey. 
            Each option is designed to help you explore different facets of your business idea, ensuring a comprehensive and innovative approach.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {brainstormingOptions.map((option) => (
            <Card key={option.id} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-muted rounded-lg">
                    <option.icon className={`h-6 w-6 ${option.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
                
                <Button
                  onClick={() => toggleSaveOption(option.id)}
                  variant={savedOptions.includes(option.id) ? "default" : "outline"}
                  className="w-fit flex items-center gap-2"
                >
                  {savedOptions.includes(option.id) ? (
                    <>
                      <Bookmark className="h-4 w-4" />
                      Saved
                    </>
                  ) : (
                    <>
                      <BookmarkPlus className="h-4 w-4" />
                      Save for Later
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Bar */}
        <div className="border-t pt-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {savedOptions.length} of {brainstormingOptions.length} options saved
            </div>
            
            <Button onClick={saveAllAndContinue} className="flex items-center gap-2">
              <BookmarkPlus className="h-4 w-4" />
              Save All For Later & Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Summary Section */}
        {savedOptions.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bookmark className="h-5 w-5" />
                Saved Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {brainstormingOptions
                  .filter(option => savedOptions.includes(option.id))
                  .map((option) => (
                    <div key={option.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <option.icon className={`h-5 w-5 ${option.color}`} />
                      <div>
                        <h4 className="font-medium">{option.title}</h4>
                        <p className="text-xs text-muted-foreground">Ready for brainstorming</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BrainstormingOptions;