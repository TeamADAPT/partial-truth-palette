import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, Gift, Users, Trophy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Referral() {
  const [referralLink] = useState("https://mybizai.com/ref/johndoe123");

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied to clipboard!");
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Invite Friends, Earn Rewards</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Share MyBizAI with your network and earn 1 month of Pro access for every friend who subscribes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="text-center p-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>1. Send Invitation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Share your unique referral link with friends and colleagues.</p>
          </CardContent>
        </Card>

        <Card className="text-center p-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>2. They Join</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">They sign up and upgrade to a Pro plan using your link.</p>
          </CardContent>
        </Card>

        <Card className="text-center p-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>3. You Earn</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Get 1 month of free Pro access for every successful referral.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="max-w-2xl mx-auto mb-12">
        <CardHeader>
          <CardTitle>Your Referral Link</CardTitle>
          <CardDescription>Share this link to start earning rewards.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input value={referralLink} readOnly className="bg-muted font-mono" />
            <Button onClick={copyLink}>
              <Copy className="mr-2 h-4 w-4" /> Copy
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t p-4">
           <div className="flex gap-4">
             <Button variant="outline" className="w-32">Facebook</Button>
             <Button variant="outline" className="w-32">Twitter</Button>
             <Button variant="outline" className="w-32">LinkedIn</Button>
           </div>
        </CardFooter>
      </Card>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Referral Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground mt-1">Clicks</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground mt-1">Signups</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-primary">2</p>
              <p className="text-sm text-muted-foreground mt-1">Upgrades</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-primary">2</p>
              <p className="text-sm text-muted-foreground mt-1">Free Months</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
