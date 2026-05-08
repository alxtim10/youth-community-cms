import {
  getDashboard,
  getMonthlyAttendance,
} from "@/lib/api";

import StatsCards from "@/components/dashboard/stats-cards";

import MonthlyChart from "@/components/charts/monthly-chart";

export default async function DashboardPage() {
  const dashboard = await getDashboard();

  const chartData =
    await getMonthlyAttendance();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Youth community overview and analytics
        </p>
      </div>
      <StatsCards data={dashboard} />
      <MonthlyChart data={chartData} />
    </div>
  );
}