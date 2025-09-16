import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  Eye, 
  BookOpen,
  Code,
  Smartphone,
  Globe,
  Users,
  Briefcase
} from "lucide-react";

const ProjectTemplates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "My Templates", 
    "E-commerce",
    "SaaS",
    "Mobile Apps",
    "Content Creation",
    "Services"
  ];

  const templates = [
    {
      id: 1,
      title: "E-commerce Store for Handmade Crafts",
      description: "Launch an online store to sell unique, handcrafted items. This template includes pre-configured product categories, payment gateway integration, and marketing tools.",
      category: "E-commerce",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
      tags: ["Retail", "Handmade", "Payment Gateway"]
    },
    {
      id: 2,
      title: "SaaS Application for Project Management", 
      description: "Develop a project management tool with features like task tracking, team collaboration, and reporting. This template provides a basic structure for user authentication, project creation, and task management.",
      category: "SaaS",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
      tags: ["Project Management", "Team Collaboration", "Analytics"]
    },
    {
      id: 3,
      title: "Mobile App for Fitness Tracking",
      description: "Create a fitness tracking app with features like workout logging, progress tracking, and social sharing. This template includes user profiles, activity tracking, and basic analytics.",
      category: "Mobile Apps", 
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop",
      tags: ["Health", "Fitness", "Mobile", "Social"]
    },
    {
      id: 4,
      title: "Content Creation Platform for Bloggers",
      description: "Build a platform for bloggers to create, publish, and monetize their content. This template includes content management, user subscriptions, and basic analytics.",
      category: "Content Creation",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6161f?w=400&h=225&fit=crop",
      tags: ["Blogging", "Content Management", "Monetization"]
    },
    {
      id: 5,
      title: "Service Marketplace for Freelancers",
      description: "Develop a marketplace connecting freelancers with clients seeking various services. This template includes user profiles, service listings, and payment processing.",
      category: "Services",
      icon: Users,
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=225&fit=crop",
      tags: ["Marketplace", "Freelancing", "Services"]
    },
    {
      id: 6,
      title: "AI-Powered Customer Support Bot",
      description: "Create an intelligent customer support system with natural language processing and automated responses. Perfect for businesses looking to scale their support operations.",
      category: "SaaS",
      icon: Code,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=225&fit=crop",
      tags: ["AI", "Customer Support", "Automation"]
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === "All" || template.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Project Templates Library</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore a variety of project templates tailored for different business types and industries. 
              Select a template to kickstart your new venture with a pre-configured framework.
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Save Project as Template
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search templates"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "secondary"}
                onClick={() => setActiveCategory(category)}
                className="rounded-md"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <template.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{template.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {template.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {template.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1">
                      Apply Template
                    </Button>
                    <Button variant="outline" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No templates found</p>
                <p className="text-sm">Try adjusting your search or category filter</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplates;