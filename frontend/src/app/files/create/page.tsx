// src/app/files/create/page.tsx

import FilesForm from "@/components/files/files-form";

export default function CreateFilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Create File
        </h1>

        <p className="text-slate-500 mt-2">
          Add new resource file
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <FilesForm />
      </div>
    </div>
  );
}