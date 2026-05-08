// src/app/files/page.tsx

import { getFiles } from "@/lib/api";
import FilesSearch from "@/components/files/files-search";
import FilesList from "@/components/files/files-list";
import Link from "next/link";

export default async function FilesPage({ searchParams }: any) {
  const search = searchParams.search || "";

  const data = await getFiles(search);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Files</h1>

          <p className="text-slate-500 mt-2">
            Community resources and documents
          </p>
        </div>

        <Link
          href="/files/create"
          className="px-5 py-3 rounded-2xl bg-slate-900 text-white"
        >
          Create File
        </Link>
      </div>

      <FilesSearch />

      <FilesList files={data.results || data} />
    </div>
  );
}
