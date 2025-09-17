import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Briefcase, Shield, Gavel, Copyright, Users, Handshake } from "lucide-react";

export default function LegalCompliance() {
  const legalAreas = [
    {
      icon: Briefcase,
      title: "Business Registration",
      description: "Register your business legally"
    },
    {
      icon: Shield,
      title: "Data Privacy",
      description: "Protect user data and privacy"
    },
    {
      icon: Gavel,
      title: "Contract Law",
      description: "Understand contract obligations"
    },
    {
      icon: Copyright,
      title: "Intellectual Property",
      description: "Secure your intellectual assets"
    },
    {
      icon: Users,
      title: "Consumer Protection",
      description: "Comply with consumer laws"
    },
    {
      icon: Handshake,
      title: "Dispute Resolution",
      description: "Resolve disputes effectively"
    }
  ];

  const regulationSummaries = [
    {
      title: "Data Privacy Regulations",
      description: "AI-generated summary of key data privacy regulations relevant to your business idea, including GDPR and CCPA.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
    },
    {
      title: "Intellectual Property Protection",
      description: "AI-generated summary of intellectual property laws, including copyright, trademark, and patent protection.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
    }
  ];

  const legalTemplates = [
    {
      title: "Legal Templates",
      description: "Access a library of legal templates, including contracts, agreements, and policies, to help you comply with legal requirements.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop"
    },
    {
      title: "Expert Legal Advice",
      description: "Connect with legal experts for personalized advice and guidance on navigating complex legal and compliance issues.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gradient-text">Legal & Compliance Guidance</h1>
        <p className="text-muted-foreground text-lg">
          AI-powered assistance for your business's legal needs
        </p>
      </div>

      {/* Disclaimer */}
      <Alert className="border-amber-500/30 bg-amber-500/10">
        <AlertTriangle className="h-4 w-4 text-amber-500" />
        <AlertTitle className="text-amber-500">Disclaimer</AlertTitle>
        <AlertDescription className="text-amber-200">
          The information and resources provided by this tool are for guidance purposes only and do not 
          constitute legal advice. We strongly recommend consulting a qualified legal professional for 
          advice on your specific legal matters.
        </AlertDescription>
      </Alert>

      {/* Common Legal Areas */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Common Legal Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {legalAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* AI-Powered Regulation Summaries */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">AI-Powered Regulation Summaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regulationSummaries.map((summary, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Regulation Summary</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{summary.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{summary.description}</p>
                <Button size="sm">View Summary</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Legal Templates & Expert Advice */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Legal Templates & Expert Advice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legalTemplates.map((template, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  {index === 0 ? (
                    <Gavel className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                  ) : (
                    <Users className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                  )}
                  <p className="text-sm text-muted-foreground">
                    {index === 0 ? "Legal Templates" : "Expert Advice"}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{template.description}</p>
                <Button size="sm">
                  {index === 0 ? "Browse Templates" : "Find Experts"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}