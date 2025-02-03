"use client";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis } from "recharts";

interface OverviewProps {
  data: {
    month: string;
    revenue: number;
  }[];
}

export function Overview({ data }: OverviewProps) {
  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Revenue",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[200px]">
      <AreaChart
        accessibilityLayer
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A7A7FF" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#A7A7FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#525252"
          fontSize={12}
          label={{ fill: "red" }}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
        <Area type="monotone" dataKey="revenue" stroke="#A7A7FF" strokeWidth={2} fill="url(#gradient)" />
      </AreaChart>
    </ChartContainer>
  );
}
