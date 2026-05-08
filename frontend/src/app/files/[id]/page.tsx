// src/app/files/[id]/page.tsx

import {
  getFile,
} from "@/lib/api";

import FilesForm from "@/components/files/files-form";

export default async function EditFilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const file = await getFile(id);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Edit File
        </h1>

        <p className="text-slate-500 mt-2">
          Update resource file
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <FilesForm
          initialData={file}
          fileId={id}
        />
      </div>
    </div>
  );
}