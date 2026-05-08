// src/app/fellowships/create/page.tsx

import FellowshipForm from "@/components/fellowships/fellowships-form";

export default function CreateFellowshipPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Create Fellowship
        </h1>

        <p className="text-slate-500 mt-2">
          Add new fellowship event
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <FellowshipForm />
      </div>
    </div>
  );
}