import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, Send, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
}

export default function AIAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content: "Hello! I'm your AI Business Assistant. How can I help you optimize your operations today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const responses = [
        "I've analyzed the market trends and suggest focusing on Q3 growth strategies.",
        "That's a great idea! I can draft a preliminary plan for that.",
        "Based on your current project velocity, we might need to adjust the timeline.",
        "I've updated the team's task list accordingly.",
        "Here's a summary of the competitive landscape for that sector."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: randomResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newAiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] max-w-5xl mx-auto p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Bot className="h-8 w-8 text-primary" />
          AI Agent Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">Interact with your autonomous business agents.</p>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden border-primary/20 shadow-lg bg-card/50 backdrop-blur-sm">
        <CardHeader className="border-b bg-muted/30">
          <CardTitle className="text-lg flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-500" />
            Strategic Advisor Agent
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 overflow-hidden p-0">
          <ScrollArea className="h-full p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="h-8 w-8 mt-1">
                    {message.role === "ai" ? (
                      <>
                        <AvatarImage src="/bot-avatar.png" />
                        <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>ME</AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <span className="text-[10px] opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 bg-foreground/30 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="h-2 w-2 bg-foreground/30 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="h-2 w-2 bg-foreground/30 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter className="p-4 border-t bg-background/50">
          <form
            className="flex w-full gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <Input
              placeholder="Ask me anything about your business..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-background"
            />
            <Button type="submit" size="icon" disabled={!inputValue.trim() || isTyping}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
