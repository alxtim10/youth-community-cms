// src/app/analytics/page.tsx

import {
  getMonthlyAttendance,
  getAttendanceTrend,
  getFellowshipCount,
} from "@/lib/api";

import AnalyticsSummaryCards from "@/components/analytics/analytics-summary-cards";
import MonthlyAttendanceChart from "@/components/analytics/monthly-attendance-chart";
import AttendanceTrendChart from "@/components/analytics/attendance-trend-chart";
import FellowshipCountChart from "@/components/analytics/fellowship-count-chart";
import AnalyticsFilters from "@/components/analytics/analytics-filters";

export default async function AnalyticsPage({ searchParams }: any) {
  const year = searchParams.year;
  const month = searchParams.month;
  const monthlyAttendance = await getMonthlyAttendance(year, month);

  const attendanceTrend = await getAttendanceTrend();

  const fellowshipCount = await getFellowshipCount();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Analytics</h1>

        <p className="text-slate-500 mt-2">Community insights and trends</p>
      </div>
      <AnalyticsFilters />
      <AnalyticsSummaryCards />
      <div className="grid gap-6 xl:grid-cols-2">
        <MonthlyAttendanceChart data={monthlyAttendance} />
        <AttendanceTrendChart data={attendanceTrend} />
      </div>
      <FellowshipCountChart data={fellowshipCount} />
    </div>
  );
}
