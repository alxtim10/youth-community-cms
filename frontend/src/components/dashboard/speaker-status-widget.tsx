import { Fellowship } from "@/types";
import {
  Mic2,
} from "lucide-react";

interface Props {
  fellowship: Fellowship;
}

export default function SpeakerStatusWidget({
  fellowship,
}: Props) {
  const done =
    fellowship.speaker_status ===
    "DONE";

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
          <Mic2 size={20} />
        </div>

        <div>
          <h2 className="font-semibold text-lg tracking-tight">
            Speaker Status
          </h2>

          <p className="text-sm text-slate-500">
            Speaker preparation progress
          </p>
        </div>
      </div>

      <div>
        <p className="text-sm text-slate-500">
          PIC Speaker
        </p>

        <p className="font-semibold mt-1 text-lg">
          {fellowship.speaker_pic}
        </p>
      </div>

      <div className="mt-6">
        <span
          className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${
            done
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {done
            ? "DONE"
            : "NOT DONE"}
        </span>
      </div>
    </div>
  );
}