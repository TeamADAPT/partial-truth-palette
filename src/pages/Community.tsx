import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, ThumbsUp, Eye, Search, Plus } from "lucide-react";
import { useState } from "react";

// Mock data
const mockPosts = [
  {
    id: 1,
    title: "Best practices for AI-powered market research?",
    author: "Sarah Johnson",
    avatar: "",
    category: "Market Research",
    likes: 18,
    replies: 12,
    views: 234,
    time: "2 hours ago",
    content: "I'm looking for advice on how to effectively use AI tools for market research. What are your go-to strategies and tools?"
  },
  {
    id: 2,
    title: "How to validate a SaaS idea quickly?",
    author: "Mike Chen",
    avatar: "",
    category: "Startup Advice",
    likes: 24,
    replies: 8,
    views: 189,
    time: "5 hours ago",
    content: "I have a SaaS idea but want to validate it before investing too much time. What's the fastest way to test market demand?"
  },
  {
    id: 3,
    title: "AI-Generated Business Plan Templates",
    author: "Business AI Assistant",
    avatar: "",
    category: "Resources",
    likes: 67,
    replies: 23,
    views: 456,
    time: "1 day ago",
    content: "I've created a comprehensive collection of AI-generated business plan templates. Here are the key sections you should include..."
  }
];

export default function Community() {
  const [posts, setPosts] = useState(mockPosts);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Community Forum</h1>
          <p className="text-muted-foreground mt-1">Connect with other entrepreneurs and experts.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Post
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search discussions..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Discussions</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6 space-y-4">
              {filteredPosts.map(post => (
                <Card key={post.id} className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center gap-1 min-w-[3rem]">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-green-500">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-medium">{post.likes}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <span className="text-xs text-muted-foreground">• Posted by {post.author} {post.time}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 hover:text-primary">{post.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{post.content}</p>

                        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {post.replies} replies
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {post.views} views
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-between">
                Market Research <Badge variant="secondary">12</Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-between">
                Startup Advice <Badge variant="secondary">8</Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-between">
                Funding <Badge variant="secondary">5</Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-between">
                Tech & Tools <Badge variant="secondary">15</Badge>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">User Name {i}</p>
                    <p className="text-xs text-muted-foreground">1{i}0 contributions</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
