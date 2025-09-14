import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  index?: number;
}

export const StatsCard = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon,
  index = 0
}: StatsCardProps) => {
  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-success bg-success/10 border-success/20';
      case 'down': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'neutral': return 'text-muted-foreground bg-muted/10 border-border/20';
      default: return 'text-muted-foreground bg-muted/10 border-border/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return TrendingUp;
      case 'down': return TrendingDown;
      default: return null;
    }
  };

  const TrendIcon = getTrendIcon(trend);

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-foreground">{value}</div>
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className={`${getTrendColor(trend)} border text-xs px-2 py-1 flex items-center gap-1`}
            >
              {TrendIcon && <TrendIcon className="h-3 w-3" />}
              {change}
            </Badge>
            <span className="text-xs text-muted-foreground">from last period</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};