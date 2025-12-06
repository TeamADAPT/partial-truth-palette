import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Video, Download, Star, Search, Filter, PlayCircle } from "lucide-react";
import { useState } from "react";

// Mock data
const mockResources = [
  {
    id: 1,
    title: "Complete Business Plan Template",
    type: "template",
    category: "Planning",
    format: "DOCX",
    rating: 4.8,
    downloads: "2.5k",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 2,
    title: "Startup Financial Model",
    type: "template",
    category: "Finance",
    format: "XLSX",
    rating: 4.9,
    downloads: "1.8k",
    image: "https://images.unsplash.com/photo-1554224155-9726b3028d77?w=800&q=80"
  },
  {
    id: 3,
    title: "Mastering Market Research",
    type: "guide",
    category: "Research",
    format: "PDF",
    rating: 4.7,
    downloads: "3.2k",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 4,
    title: "Pitch Deck Masterclass",
    type: "video",
    category: "Funding",
    format: "MP4",
    rating: 4.9,
    downloads: "5.1k",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
  },
  {
    id: 5,
    title: "Marketing Strategy 101",
    type: "guide",
    category: "Marketing",
    format: "PDF",
    rating: 4.6,
    downloads: "1.5k",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80"
  },
  {
    id: 6,
    title: "Legal Agreements Pack",
    type: "template",
    category: "Legal",
    format: "ZIP",
    rating: 4.8,
    downloads: "900",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80"
  }
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredResources = mockResources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || res.type === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Resource Library</h1>
          <p className="text-muted-foreground mt-1">Curated templates, guides, and tools for your business.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter
           </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="template">Templates</TabsTrigger>
            <TabsTrigger value="guide">Guides</TabsTrigger>
            <TabsTrigger value="video">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map(resource => (
                <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="backdrop-blur-md bg-black/50 text-white">
                        {resource.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg line-clamp-1">{resource.title}</CardTitle>
                    </div>
                    <CardDescription className="flex items-center gap-2 mt-1">
                       {resource.type === 'video' ? <Video className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
                       {resource.format}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        {resource.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {resource.downloads}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" variant="secondary">
                      {resource.type === 'video' ? (
                        <><PlayCircle className="mr-2 h-4 w-4" /> Watch Now</>
                      ) : (
                        <><Download className="mr-2 h-4 w-4" /> Download</>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
