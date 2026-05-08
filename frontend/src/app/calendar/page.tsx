import {
  getAllFellowships,
} from "@/lib/api";

import FellowshipsCalendar from "@/components/calendar/fellowships-calendar";

export default async function CalendarPage() {
  const data =
    await getAllFellowships();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Calendar
        </h1>

        <p className="text-slate-500 mt-2">
          Fellowship schedule overview
        </p>
      </div>

      <FellowshipsCalendar
        fellowships={
          data.results || data
        }
      />
    </div>
  );
}