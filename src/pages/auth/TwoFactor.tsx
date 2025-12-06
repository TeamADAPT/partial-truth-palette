import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function TwoFactor() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 6) return;

    setLoading(true);
    // Simulate verification
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex-1 flex justify-center items-center py-16 px-4 bg-background">
      <Card className="w-full max-w-md shadow-2xl border-border/50 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Two-Factor Authentication</CardTitle>
          <CardDescription className="text-base mt-2">
            Enter the 6-digit code from your authenticator app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">
            <div className="space-y-2 w-full flex flex-col items-center">
              <InputOTP maxLength={6} value={code} onChange={setCode}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button className="w-full h-12" type="submit" disabled={loading || code.length < 6}>
              {loading ? "Verifying..." : "Verify"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center flex-col gap-2">
          <Button variant="link" className="text-sm text-muted-foreground">
            Use recovery code
          </Button>
          <Button variant="link" className="text-sm text-muted-foreground" onClick={() => navigate("/login")}>
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
