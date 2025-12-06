import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Github, Mail, Lock, User, ArrowRight } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate signup
    setTimeout(() => {
      setLoading(false);
      navigate("/welcome");
    }, 1000);
  };

  return (
    <div className="flex-1 flex justify-center items-center py-16 px-4 bg-background">
      <Card className="w-full max-w-md shadow-2xl border-border/50 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
          <CardDescription className="text-base mt-2">
            Start your AI-powered business journey today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="pl-10 bg-background/50"
                    required
                  />
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
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
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="pl-10 bg-background/50"
                    required
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </div>

            <Button className="w-full h-12 text-base" type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="mt-6 flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">Or sign up with</span>
            <Separator className="flex-1" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-12" onClick={() => navigate("/welcome")}>
              <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Google
            </Button>
            <Button variant="outline" className="h-12" onClick={() => navigate("/welcome")}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
