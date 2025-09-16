import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  Star,
  Users,
  Zap,
  Shield,
  Headphones
} from "lucide-react";

const PlanComparison = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      period: "/mo",
      description: "Perfect for individuals getting started",
      featured: false,
      features: {
        ideas: "5",
        speed: "Standard",
        execution: false,
        customization: "Basic",
        users: "1 User",
        analytics: false,
        support: "Standard"
      }
    },
    {
      name: "Pro",
      price: "$299", 
      period: "/mo",
      description: "Best for growing businesses",
      featured: true,
      features: {
        ideas: "20",
        speed: "Fast",
        execution: "Standard",
        customization: "Advanced",
        users: "5 Users",
        analytics: "Basic",
        support: "Priority"
      }
    },
    {
      name: "Premium",
      price: "$499",
      period: "/mo", 
      description: "For established businesses",
      featured: false,
      features: {
        ideas: "50",
        speed: "Fastest",
        execution: "Premium",
        customization: "Advanced",
        users: "10 Users",
        analytics: "Advanced", 
        support: "Priority"
      }
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/mo",
      description: "Custom solutions for large organizations",
      featured: false,
      features: {
        ideas: "Unlimited",
        speed: "Fastest", 
        execution: "Premium",
        customization: "Full",
        users: "Unlimited",
        analytics: "Full",
        support: "Dedicated"
      }
    }
  ];

  const featureCategories = [
    { key: "ideas", label: "Number of Ideas", icon: Zap },
    { key: "speed", label: "Idea Generation Speed", icon: Zap },
    { key: "execution", label: "Execution Support", icon: Shield },
    { key: "customization", label: "AI Agent Customization", icon: Star },
    { key: "users", label: "Team Collaboration", icon: Users },
    { key: "analytics", label: "Data Insights & Analytics", icon: Star },
    { key: "support", label: "Customer Support", icon: Headphones }
  ];

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find the perfect plan for your business</h1>
          <p className="text-lg text-muted-foreground">Start for free, then upgrade as you grow.</p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.featured ? 'border-primary shadow-lg' : ''}`}>
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Recommended
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-lg ${plan.featured ? 'text-primary' : ''}`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  className="w-full" 
                  variant={plan.name === "Enterprise" ? "outline" : "default"}
                >
                  {plan.name === "Enterprise" ? "Contact Us" : "Select Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Features</th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="text-center py-3 px-4 font-medium">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.map((category) => (
                    <tr key={category.key} className="border-b hover:bg-muted/50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <category.icon className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{category.label}</span>
                        </div>
                      </td>
                      {plans.map((plan) => (
                        <td key={plan.name} className="py-4 px-4 text-center">
                          {renderFeatureValue(plan.features[category.key as keyof typeof plan.features])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of entrepreneurs who are already building their future with MyBizAI.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;