// src/app/fellowships/[id]/page.tsx

import { getFellowship } from "@/lib/api";

import FellowshipForm from "@/components/fellowships/fellowships-form";

export default async function EditFellowshipPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const fellowship = await getFellowship(id);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Edit Fellowship</h1>

        <p className="text-slate-500 mt-2">Update fellowship event</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <FellowshipForm initialData={fellowship} fellowshipId={id} />
      </div>
    </div>
  );
}
