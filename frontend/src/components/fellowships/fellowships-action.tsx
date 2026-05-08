"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Pencil, Trash2 } from "lucide-react";
import { deleteFellowship } from "@/lib/api";
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

export default function FellowshipsActions({
  fellowshipId,
}: {
  fellowshipId: number;
}) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm("Delete this fellowship?");

    if (!confirmed) return;

    try {
      await deleteFellowship(fellowshipId);
      toast.success("Fellowship deleted");
      router.refresh();
    } catch (err) {
      toast.error("Failed to delete fellowship");
      console.error(err);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        onClick={(e) => e.stopPropagation()}
        href={`/fellowships/${fellowshipId}/edit`}
        className="p-2 rounded-xl border hover:bg-slate-100 transition-all"
      >
        <Pencil size={16} />
      </Link>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-xl border text-red-500 hover:bg-red-50 transition-all"
          >
            <Trash2 size={16} />
          </button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Fellowship</AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
