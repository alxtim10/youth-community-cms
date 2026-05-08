// src/components/fellowships/fellowships-pagination.tsx

"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function FellowshipsPagination({
  next,
  previous,
}: any) {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  const currentPage = Number(
    searchParams.get("page") || 1
  );

  function changePage(page: number) {
    const params =
      new URLSearchParams(searchParams);

    params.set("page", String(page));

    router.push(
      `/fellowships?${params.toString()}`
    );
  }

  return (
    <div className="flex gap-2">
      <button
        disabled={!previous}
        onClick={() =>
          changePage(currentPage - 1)
        }
        className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
      >
        Previous
      </button>

      <button
        disabled={!next}
        onClick={() =>
          changePage(currentPage + 1)
        }
        className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}