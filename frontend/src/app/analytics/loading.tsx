import {
  Skeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton className="h-10 w-64 rounded-xl" />

        <Skeleton className="h-4 w-80 mt-3 rounded-xl" />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {Array.from({ length: 3 }).map(
          (_, i) => (
            <Skeleton
              key={i}
              className="h-36 rounded-2xl"
            />
          )
        )}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Skeleton className="h-[420px] rounded-2xl" />

        <Skeleton className="h-[420px] rounded-2xl" />
      </div>

      <Skeleton className="h-[420px] rounded-2xl" />
    </div>
  );
}