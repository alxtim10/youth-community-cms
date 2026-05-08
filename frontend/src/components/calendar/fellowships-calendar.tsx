"use client";

import { useRouter } from "next/navigation";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Fellowship } from "@/types";

interface Props {
  fellowships: Fellowship[];
}

interface LegendProps {
  color: string;
  label: string;
}

export default function FellowshipCalendar({ fellowships }: Props) {
  const router = useRouter();

  const events = fellowships.map(
  (item) => {
    const isDone =
      item.speaker_status ===
        "DONE" &&
      item.worship_team_status ===
        "DONE";

    return {
      id: String(item.id),

      title: item.theme,

      date: item.date,

      backgroundColor: isDone
        ? "#16a34a"
        : "#eab308",

      borderColor: "transparent",

      textColor: "#ffffff",
    };
  }
);

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">
      <div className="flex flex-wrap gap-4 mb-6">
        <LegendItem color="#22c55e" label="Completed" />
        <LegendItem color="#eab308" label="Pending" />
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="auto"
        events={events}
        eventClick={(info) => {
          router.push(`/fellowships/${info.event.id}`);
        }}
      />
    </div>
  );
}

function LegendItem({
  color,
  label,
}: LegendProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-3 h-3 rounded-full"
        style={{
          backgroundColor: color,
        }}
      />

      <span className="text-sm text-slate-600">
        {label}
      </span>
    </div>
  );
}