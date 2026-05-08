// src/components/analytics/analytics-summary-cards.tsx

import {
  TrendingUp,
  Activity,
  CalendarDays,
} from "lucide-react";

const cards = [
  {
    title: "Attendance Growth",
    value: "+12%",
    icon: TrendingUp,
  },
  {
    title: "Average Attendance",
    value: "48",
    icon: Activity,
  },
  {
    title: "Monthly Events",
    value: "4",
    icon: CalendarDays,
  },
];

export default function AnalyticsSummaryCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-sm p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                <Icon size={22} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}