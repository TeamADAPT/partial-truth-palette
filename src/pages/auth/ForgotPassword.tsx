import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="flex-1 flex justify-center items-center py-16 px-4 bg-background">
        <Card className="w-full max-w-md shadow-2xl border-border/50 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mx-auto bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
            <CardDescription className="text-base mt-2">
              We've sent password reset instructions to your email address.
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Button variant="outline" onClick={() => navigate("/login")}>
              Back to Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 flex justify-center items-center py-16 px-4 bg-background">
      <Card className="w-full max-w-md shadow-2xl border-border/50 bg-card/95 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
          <CardDescription className="text-base mt-2">
            Enter your email address and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10 bg-background/50"
                  required
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            <Button className="w-full h-12" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <Link to="/login" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
