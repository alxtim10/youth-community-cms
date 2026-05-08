"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import {
  Pencil,
  Trash2,
} from "lucide-react";

import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { deleteFile } from "@/lib/api";

export default function FilesAction({
  fileId,
}: {
  fileId: number;
}) {
  const router = useRouter();

  async function handleDelete() {
    try {
      await deleteFile(fileId);

      toast.success(
        "File deleted"
      );

      router.refresh();
    } catch (err) {
      toast.error(
        "Failed to delete file"
      );

      console.error(err);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/files/${fileId}`}
        className="p-2 rounded-xl border hover:bg-slate-100 transition-all"
      >
        <Pencil size={16} />
      </Link>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="p-2 rounded-xl border text-red-500 hover:bg-red-50 transition-all">
            <Trash2 size={16} />
          </button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete File
            </AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={handleDelete}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}