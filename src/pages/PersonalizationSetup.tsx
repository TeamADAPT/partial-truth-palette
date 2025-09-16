import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight, 
  Search, 
  Sparkles,
  ChevronLeft,
  Save
} from "lucide-react";

const PersonalizationSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const industries = [
    "Healthcare",
    "Technology", 
    "Retail",
    "Finance",
    "Education",
    "Manufacturing",
    "Consulting",
    "Entertainment"
  ];

  const filteredIndustries = industries.filter(industry =>
    industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries(prev => 
      prev.includes(industry) 
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Industry Focus</h2>
              <p className="text-muted-foreground">
                Select the industry or industries you're most interested in. This helps us tailor your experience and provide relevant business ideas.
              </p>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-12"
                placeholder="Search for industries"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suggested Industries</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredIndustries.map((industry) => (
                  <div key={industry} className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                    <Checkbox
                      id={industry}
                      checked={selectedIndustries.includes(industry)}
                      onCheckedChange={() => toggleIndustry(industry)}
                    />
                    <Label htmlFor={industry} className="cursor-pointer flex-1">{industry}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-8">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Setup Complete!</h2>
            <p className="text-muted-foreground">Your personalization preferences have been saved.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Personalization Setup</h1>
            <p className="text-muted-foreground">Customize your experience for better business insights.</p>
          </div>

          <Card>
            <CardContent className="p-8">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Step {currentStep}/{totalSteps}</span>
                  <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Step Content */}
              {renderStepContent()}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>

                <div className="flex gap-3">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save for Later
                  </Button>
                  
                  {currentStep < totalSteps ? (
                    <Button 
                      onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                      className="flex items-center gap-2"
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Complete Setup
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationSetup;