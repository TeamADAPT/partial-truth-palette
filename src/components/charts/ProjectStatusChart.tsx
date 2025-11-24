import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// TODO: Replace with real data from the API
const data = [
  { name: "Completed", value: 400, color: "hsl(var(--chart-1))" },
  { name: "In Progress", value: 300, color: "hsl(var(--chart-2))" },
  { name: "On Hold", value: 300, color: "hsl(var(--chart-3))" },
  { name: "Not Started", value: 200, color: "hsl(var(--muted))" },
];

const chartConfig = {
  projects: {
    label: "Projects",
  },
};

export function ProjectStatusChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
