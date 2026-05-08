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

export default function MonthlyChart({
  data,
}: any) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border-0">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Monthly Attendance
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Attendance overview by month
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="attendance"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}