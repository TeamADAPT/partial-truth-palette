import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";
import { Award, ArrowRight, RefreshCw } from "lucide-react";

export default function Academy() {
  const featuredCourses = [
    {
      title: "Mastering MyBizAI: Idea to Execution",
      description: "Leverage MyBizAI to generate, validate, and execute your business ideas effectively.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
    },
    {
      title: "Business Fundamentals for Entrepreneurs", 
      description: "Build a strong foundation in market analysis, product development, and financial planning.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop"
    },
    {
      title: "Advanced Strategies for Growth Hacking",
      description: "Explore advanced techniques for scaling, optimizing marketing, and customer acquisition.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
    }
  ];

  const completedCourses = [
    {
      title: "Idea Generation and Validation",
      completedOn: "Oct 26, 2023"
    },
    {
      title: "Marketing and Sales Strategies",
      completedOn: "Oct 15, 2023"
    }
  ];

  const certifications = [
    {
      title: "MyBizAI Certified Professional",
      description: "Awarded for completing the core curriculum."
    },
    {
      title: "Growth Hacking Specialist", 
      description: "Earned for mastering advanced growth strategies."
    }
  ];

  const allCourses = [
    {
      title: "Idea Generation and Validation",
      description: "Brainstorm, refine, and validate business ideas with MyBizAI's tools."
    },
    {
      title: "Market Research and Analysis",
      description: "Conduct thorough market research and analyze your target audience."
    },
    {
      title: "Product Development and Launch",
      description: "Master developing and launching your product from concept to market."
    },
    {
      title: "Marketing and Sales Strategies",
      description: "Explore effective marketing and sales strategies to drive revenue growth."
    },
    {
      title: "Financial Planning and Management",
      description: "Gain insights into financial planning, budgeting, and managing finances."
    },
    {
      title: "Legal and Compliance Basics",
      description: "Understand foundational legal and compliance requirements for your business."
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">MyBizAI Academy</h1>
          <p className="text-muted-foreground text-lg">
            Unlock your entrepreneurial potential with our comprehensive learning resources. 
            Master the MyBizAI platform and gain essential business skills.
          </p>
        </div>
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="all-courses" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all-courses">All Courses</TabsTrigger>
          <TabsTrigger value="my-courses">My Courses</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="all-courses" className="space-y-8">
          {/* Featured Courses */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Featured Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Featured Course</p>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                    </div>
                    <Button className="w-full gap-2 group-hover:bg-primary/90">
                      Start Learning
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* All Courses */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">All Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="completed" className="space-y-8">
          {/* Recently Completed */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Recently Completed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-green-500/10 to-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto text-green-500 mb-2" />
                      <Badge variant="outline" className="text-green-500 border-green-500">Completed</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">Completed on: {course.completedOn}</p>
                    </div>
                    <Button variant="outline" className="w-full gap-2">
                      Review Course
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* My Certifications */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">My Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-6xl text-amber-500 mb-4">
                      <Award className="h-16 w-16 mx-auto" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                    <Button className="w-full">View Certificate</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="my-courses">
          <div className="text-center py-8">
            <p className="text-muted-foreground">You haven't enrolled in any courses yet.</p>
            <Button className="mt-4">Browse All Courses</Button>
          </div>
        </TabsContent>

        <TabsContent value="in-progress">
          <div className="text-center py-8">
            <p className="text-muted-foreground">No courses in progress.</p>
            <Button className="mt-4">Start Learning</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}