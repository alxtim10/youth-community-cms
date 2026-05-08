import {
  Skeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton className="h-10 w-56 rounded-xl" />

        <Skeleton className="h-4 w-80 mt-3 rounded-xl" />
      </div>

      <Skeleton className="h-12 w-full max-w-md rounded-2xl" />

      <Skeleton className="h-[500px] rounded-2xl" />
    </div>
  );
}