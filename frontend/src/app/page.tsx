import {
  getDashboard,
  getMonthlyAttendance,
  getUpcomingFellowship,
} from "@/lib/api";

import StatsCards from "@/components/dashboard/stats-cards";
import MonthlyChart from "@/components/charts/monthly-chart";
import UpcomingFellowshipWidget from "@/components/dashboard/upcoming-fellowship-widget";
import SpeakerStatusWidget from "@/components/dashboard/speaker-status-widget";
import WorshipTeamWidget from "@/components/dashboard/worship-team-widget";
import QuickActionsWidget from "@/components/dashboard/quick-actions-widget";
export const dynamic = "force-dynamic";
async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function DashboardPage() {
  await sleep(3000);
  const dashboard = await getDashboard();
  const upcomingData = await getUpcomingFellowship();
  const upcoming = upcomingData.results?.[0];
  const chartData = await getMonthlyAttendance();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>

        <p className="text-slate-500 mt-2">
          Youth community overview and analytics
        </p>
      </div>
      <StatsCards data={dashboard} />
      <MonthlyChart data={chartData} />
      {upcoming && (
        <div className="grid gap-6 xl:grid-cols-2">
          <UpcomingFellowshipWidget fellowship={upcoming} />

          <QuickActionsWidget />
        </div>
      )}
      {upcoming && (
        <div className="grid gap-6 xl:grid-cols-2">
          <SpeakerStatusWidget fellowship={upcoming} />

          <WorshipTeamWidget fellowship={upcoming} />
        </div>
      )}
    </div>
  );
}
