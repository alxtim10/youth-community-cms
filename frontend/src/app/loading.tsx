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

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map(
          (_, i) => (
            <Skeleton
              key={i}
              className="h-36 rounded-2xl"
            />
          )
        )}
      </div>

      <Skeleton className="h-[400px] rounded-2xl" />
    </div>
  );
}