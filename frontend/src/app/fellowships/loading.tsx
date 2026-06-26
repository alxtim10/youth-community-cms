import {
  Skeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton className="h-10 w-64 rounded-xl" />

        <Skeleton className="h-4 w-96 mt-3 rounded-xl" />
      </div>

      <div className="flex justify-between gap-2">
        <Skeleton className="h-12 w-80 rounded-2xl" />

        <Skeleton className="h-12 w-48 rounded-2xl" />
      </div>

      <Skeleton className="h-[600px] rounded-2xl" />
    </div>
  );
}