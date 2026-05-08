import {
  Skeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton className="h-10 w-40 rounded-xl" />

        <Skeleton className="h-4 w-72 mt-3 rounded-xl" />
      </div>

      <Skeleton className="h-12 w-full max-w-md rounded-2xl" />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map(
          (_, i) => (
            <Skeleton
              key={i}
              className="h-44 rounded-2xl"
            />
          )
        )}
      </div>
    </div>
  );
}