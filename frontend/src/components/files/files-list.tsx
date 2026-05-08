// src/components/files/files-list.tsx

import FileCard from "./files-card";
import EmptyState from "@/components/shared/empty-state";

export default function FilesList({
  files,
}: any) {
  if (!files.length) {
  return (
    <EmptyState
      title="No Files Found"
      description="Add Google Drive or Sheets links to organize your community resources."
      buttonText="Create File"
      href="/files/create"
    />
  );
}

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {files.map((file: any) => (
        <FileCard
          key={file.id}
          file={file}
        />
      ))}
    </div>
  );
}