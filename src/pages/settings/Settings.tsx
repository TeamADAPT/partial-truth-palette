import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, CreditCard, Globe, Lock, User, Shield, Plug } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Settings saved successfully");
    }, 1000);
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="w-full flex flex-col md:flex-row gap-8">
        <TabsList className="flex flex-col h-auto w-full md:w-64 justify-start p-2 gap-2 bg-muted/50">
          <TabsTrigger value="profile" className="w-full justify-start px-4 py-2">
            <User className="mr-2 h-4 w-4" /> Profile
          </TabsTrigger>
          <TabsTrigger value="account" className="w-full justify-start px-4 py-2">
            <Shield className="mr-2 h-4 w-4" /> Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="w-full justify-start px-4 py-2">
            <Bell className="mr-2 h-4 w-4" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="integrations" className="w-full justify-start px-4 py-2">
            <Plug className="mr-2 h-4 w-4" /> Integrations
          </TabsTrigger>
          <TabsTrigger value="billing" className="w-full justify-start px-4 py-2">
            <CreditCard className="mr-2 h-4 w-4" /> Billing
          </TabsTrigger>
        </TabsList>

        <div className="flex-1">
          <TabsContent value="profile" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your photo and personal details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Change Avatar</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" defaultValue="Product Manager at Tech Corp" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} disabled={loading}>{loading ? "Saving..." : "Save Changes"}</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your password and 2FA settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Password</h3>
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Two-factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} disabled={loading}>{loading ? "Saving..." : "Update Security"}</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose what you want to be notified about.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive daily digests and important updates.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Project Updates</Label>
                      <p className="text-sm text-muted-foreground">Get notified when a task is completed.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Team Mentions</Label>
                      <p className="text-sm text-muted-foreground">Get notified when someone mentions you.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">Receive news about new features and offers.</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} disabled={loading}>{loading ? "Saving..." : "Save Preferences"}</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Connected Apps</CardTitle>
                <CardDescription>Manage your connections to external services.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center">
                       <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">GitHub</h4>
                      <p className="text-sm text-muted-foreground">Connected as johndoe</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-[#4A154B] text-white rounded-full flex items-center justify-center p-2">
                       <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.52 2.52 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52 2.521v-6.313A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Slack</h4>
                      <p className="text-sm text-muted-foreground">Not connected</p>
                    </div>
                  </div>
                  <Button size="sm">Connect</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Plan & Billing</CardTitle>
                <CardDescription>Manage your subscription and billing details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-primary">Pro Plan</h4>
                    <p className="text-sm text-muted-foreground">$29/month • Renews on July 1, 2024</p>
                  </div>
                  <Badge>Active</Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Payment Method</h4>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5" />
                      <span>•••• •••• •••• 4242</span>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Billing History</h4>
                  <div className="border rounded-lg divide-y">
                    <div className="flex justify-between p-3 text-sm">
                      <span>June 1, 2024</span>
                      <span>$29.00</span>
                      <span className="text-green-500">Paid</span>
                    </div>
                    <div className="flex justify-between p-3 text-sm">
                      <span>May 1, 2024</span>
                      <span>$29.00</span>
                      <span className="text-green-500">Paid</span>
                    </div>
                    <div className="flex justify-between p-3 text-sm">
                      <span>April 1, 2024</span>
                      <span>$29.00</span>
                      <span className="text-green-500">Paid</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline" className="text-red-500 hover:text-red-600">Cancel Subscription</Button>
                <Button variant="outline">Update Payment Method</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
