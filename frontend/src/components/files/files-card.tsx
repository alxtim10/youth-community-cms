// src/components/files/file-card.tsx

import { FileText, ExternalLink } from "lucide-react";
import FilesAction from "./files-action";

export default function FileCard({ file }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-200 hover:shadow-md transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
            <FileText size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-lg">{file.name}</h2>

            {file.description && (
              <p className="text-slate-500 text-sm mt-2">{file.description}</p>
            )}

            <p className="text-xs text-slate-400 mt-3">
              Created: {new Date(file.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <a
            href={file.url}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:opacity-90"
          >
            Open
            <ExternalLink size={16} />
          </a>

          <FilesAction fileId={file.id} />
        </div>
      </div>
    </div>
  );
}
