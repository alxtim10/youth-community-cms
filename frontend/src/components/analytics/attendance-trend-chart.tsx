// src/components/analytics/attendance-trend-chart.tsx

"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import EmptyState from "../shared/empty-state";

export default function AttendanceTrendChart({ data }: any) {
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
        <h2 className="text-lg font-semibold">Attendance Trend</h2>

        <p className="text-sm text-slate-500 mt-1">Last 10 fellowship events</p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line type="monotone" dataKey="attendance" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
