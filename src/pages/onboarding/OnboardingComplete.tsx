import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function OnboardingComplete() {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  return (
    <div className="flex-1 flex justify-center items-center py-16 px-4 bg-background relative overflow-hidden">
      <Confetti width={width} height={height} recycle={false} numberOfPieces={200} />

      <Card className="w-full max-w-lg shadow-2xl border-border/50 bg-card/95 backdrop-blur-sm relative z-10">
        <CardHeader className="text-center">
          <div className="mx-auto bg-green-500/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <CardTitle className="text-3xl font-bold">You're All Set!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-lg text-muted-foreground">
            Your workspace has been prepared. Your AI agents are ready to help you build your business.
          </p>

          <div className="bg-secondary/50 p-4 rounded-lg text-left space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm">Profile configured</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm">Workspace created</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm">AI Agents initialized</span>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full text-lg h-14"
            onClick={() => navigate("/")}
          >
            Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
