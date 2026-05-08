"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function MembersPagination({
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
      `/members?${params.toString()}`
    );
  }

  return (
    <div className="flex items-center gap-3">
      <button
        disabled={!previous}
        onClick={() =>
          changePage(currentPage - 1)
        }
        className="px-5 py-2.5 rounded-xl bg-slate-900 text-white disabled:opacity-40"
      >
        Previous
      </button>

      <div className="px-4 py-2 rounded-xl bg-white shadow-sm">
        Page {currentPage}
      </div>

      <button
        disabled={!next}
        onClick={() =>
          changePage(currentPage + 1)
        }
        className="px-5 py-2.5 rounded-xl bg-slate-900 text-white disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}