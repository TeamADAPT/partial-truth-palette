import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Palette, Type, MessageSquare } from "lucide-react";

const BrandIdentity = () => {
  const [selectedColor, setSelectedColor] = useState("#1173d4");
  const [brandName, setBrandName] = useState("");
  const [brandDescription, setBrandDescription] = useState("");

  const colorOptions = [
    "#1173d4", "#ff5733", "#33ff57", "#f333ff", "#ff33a8", "#33ffa8"
  ];

  const fontOptions = [
    "Inter", "Roboto", "Open Sans", "Montserrat", "Lato", "Source Sans Pro"
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Brand Identity Kit</h1>
          <p className="text-muted-foreground text-lg">
            Craft a unique brand identity for your business. Define your colors, fonts, logo style, and brand voice to create a cohesive and memorable brand.
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1: Brand Basics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Step 1: Brand Basics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="brand-name">Brand Name</Label>
                  <Input
                    id="brand-name"
                    placeholder="Enter your brand name"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="food">Food & Beverage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand-description">Brand Description</Label>
                <Textarea
                  id="brand-description"
                  placeholder="Describe your brand's mission, values, and what makes it unique..."
                  value={brandDescription}
                  onChange={(e) => setBrandDescription(e.target.value)}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Brand Colors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Step 2: Define Your Brand Colors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Choose a primary color that reflects your brand's personality. We'll generate a palette based on your selection.
              </p>
              <div className="flex flex-wrap gap-4">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-16 h-16 rounded-full border-4 transition-all transform hover:scale-110 ${
                      selectedColor === color 
                        ? 'border-primary scale-110' 
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
                <button className="w-16 h-16 rounded-full border-4 border-transparent bg-muted flex items-center justify-center hover:scale-110 transition-transform">
                  <Plus className="h-6 w-6 text-muted-foreground" />
                </button>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-muted">
                <h4 className="font-semibold mb-3">Generated Color Palette</h4>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-lg"
                      style={{ backgroundColor: selectedColor }}
                    />
                    <span className="text-xs mt-1">Primary</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-lg"
                      style={{ backgroundColor: selectedColor + "80" }}
                    />
                    <span className="text-xs mt-1">Secondary</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-lg"
                      style={{ backgroundColor: selectedColor + "40" }}
                    />
                    <span className="text-xs mt-1">Accent</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Typography */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5" />
                Step 3: Choose Your Brand Fonts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="heading-font">Heading Font</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select heading font" />
                    </SelectTrigger>
                    <SelectContent>
                      {fontOptions.map((font) => (
                        <SelectItem key={font} value={font.toLowerCase()}>
                          {font}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="body-font">Body Font</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select body font" />
                    </SelectTrigger>
                    <SelectContent>
                      {fontOptions.map((font) => (
                        <SelectItem key={font} value={font.toLowerCase()}>
                          {font}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-muted">
                <h4 className="font-semibold mb-3">Typography Preview</h4>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Your Brand Heading</h2>
                  <p className="text-muted-foreground">This is how your body text will look with the selected typography choices.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brand Voice */}
          <Card>
            <CardHeader>
              <CardTitle>Step 4: Define Your Brand Voice</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="space-y-2">
                  <Label>Tone</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Professional</Badge>
                    <Badge variant="outline">Friendly</Badge>
                    <Badge variant="outline">Casual</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Style</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Authoritative</Badge>
                    <Badge variant="secondary">Conversational</Badge>
                    <Badge variant="outline">Playful</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Personality</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Innovative</Badge>
                    <Badge variant="outline">Trustworthy</Badge>
                    <Badge variant="outline">Bold</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Values</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Quality</Badge>
                    <Badge variant="outline">Sustainability</Badge>
                    <Badge variant="outline">Innovation</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <Button variant="outline">Save as Draft</Button>
            <div className="space-x-4">
              <Button variant="outline">Preview Brand Kit</Button>
              <Button>Generate Brand Kit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIdentity;