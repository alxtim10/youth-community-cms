// src/components/analytics/monthly-attendance-chart.tsx

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import EmptyState from "../shared/empty-state";

export default function MonthlyAttendanceChart({ data }: any) {
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
        <h2 className="text-lg font-semibold">Monthly Attendance</h2>

        <p className="text-sm text-slate-500 mt-1">Attendance per month</p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="attendance" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
