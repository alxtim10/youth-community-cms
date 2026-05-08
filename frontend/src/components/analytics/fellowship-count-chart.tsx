// src/components/analytics/fellowship-count-chart.tsx

"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import EmptyState from "../shared/empty-state";

export default function FellowshipCountChart({ data }: any) {
  if (!data.length) {
    return (
      <EmptyState
        title="No Analytics Yet"
        description="Analytics will appear after fellowship attendance data is added."
      />
    );
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Fellowship Count</h2>

        <p className="text-sm text-slate-500 mt-1">Events per month</p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area type="monotone" dataKey="total" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
