import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  index: number;
}

export const StatsCard = ({ title, value, change, trend, icon: Icon, index }: StatsCardProps) => {
  return (
    <Card 
      className={cn(
        "tech-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer",
        "animate-float"
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationDuration: `${5 + index * 0.3}s`
      }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold gradient-text">{value}</p>
              <Badge 
                variant="secondary" 
                className={cn(
                  "flex items-center gap-1 text-xs",
                  trend === "up" ? "bg-success/10 text-success border-success/20" : "bg-destructive/10 text-destructive border-destructive/20"
                )}
              >
                {trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {change}
              </Badge>
            </div>
          </div>
          <div className="relative">
            <Icon className="h-8 w-8 text-primary opacity-80" />
            <div className="absolute -inset-2 bg-primary/10 rounded-full blur animate-pulse"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};