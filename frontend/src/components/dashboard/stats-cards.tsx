import {
  TrendingUp,
  Activity,
  Users,
  CalendarDays,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const items = [
  {
    label: "Total Members",
    key: "total_members",
    icon: Users,
  },
  {
    label: "Total Events",
    key: "total_fellowships",
    icon: CalendarDays,
  },
  {
    label: "Average Attendance",
    key: "average_attendance",
    icon: TrendingUp,
  },
  {
    label: "Highest Attendance",
    key: "highest_attendance",
    icon: Activity,
  },
];

export default function StatsCards({
  data,
}: any) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        let value = 0;

        if (item.key === "highest_attendance") {
          value =
            data.highest_attendance_event
              ?.attendance_count || 0;
        } else {
          value = Math.round(data[item.key]);
        }

        return (
          <Card
            key={item.key}
            className="rounded-2xl border-0 shadow-sm"
          >
            <CardContent className="p-6 flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {item.label}
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  {value}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                <Icon size={22} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}