import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Brain, Rocket, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Welcome() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="flex-1 flex justify-center items-center py-16 px-4 bg-background">
      <Card className="w-full max-w-2xl shadow-2xl border-border/50 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <CardTitle className="text-3xl font-bold">Welcome to MyBizAI</CardTitle>
          <CardDescription className="text-lg mt-2">
            Let's customize your experience to build your dream business.
          </CardDescription>
        </CardHeader>
        <CardContent className="py-8">
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div
                className="p-6 border rounded-lg hover:border-primary/50 cursor-pointer transition-all bg-card/50 hover:bg-card"
                onClick={() => setStep(2)}
              >
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">New Founder</h3>
                <p className="text-muted-foreground text-sm">I have an idea but need help executing it.</p>
              </div>
              <div
                className="p-6 border rounded-lg hover:border-primary/50 cursor-pointer transition-all bg-card/50 hover:bg-card"
                onClick={() => setStep(2)}
              >
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Existing Business</h3>
                <p className="text-muted-foreground text-sm">I want to optimize and scale my current business.</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-border/50 pt-6">
          <Button variant="ghost" onClick={() => navigate("/")}>Skip for now</Button>
          <Button onClick={() => navigate("/onboarding/complete")}>Continue</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
