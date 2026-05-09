import { Fellowship } from "@/types";
import {
  CalendarDays,
  BookOpen,
  Mic2,
} from "lucide-react";

interface Props {
  fellowship: Fellowship;
}

export default function UpcomingFellowshipWidget({
  fellowship,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
          <CalendarDays size={20} />
        </div>

        <div>
          <h2 className="font-semibold text-lg tracking-tight">
            Upcoming Fellowship
          </h2>

          <p className="text-sm text-slate-500">
            Next scheduled fellowship
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-sm text-slate-500">
            Date
          </p>

          <h3 className="mt-1 text-xl font-bold">
            {new Date(
              fellowship.date
            ).toLocaleDateString()}
          </h3>
        </div>

        <div className="flex items-start gap-3">
          <BookOpen
            size={18}
            className="mt-1 text-slate-400"
          />

          <div>
            <p className="text-sm text-slate-500">
              Theme
            </p>

            <p className="font-semibold mt-1 leading-relaxed">
              {fellowship.theme}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mic2
            size={18}
            className="mt-1 text-slate-400"
          />

          <div>
            <p className="text-sm text-slate-500">
              Speaker
            </p>

            <p className="font-semibold mt-1">
              {fellowship.speaker}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}