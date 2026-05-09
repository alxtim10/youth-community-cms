// src/app/fellowships/page.tsx

import { getFellowships } from "@/lib/api";
import FellowshipsTable from "@/components/fellowships/fellowships-table";
import FellowshipsSearch from "@/components/fellowships/fellowships-search";
import FellowshipsPagination from "@/components/fellowships/fellowships-pagination";
import Link from "next/link";

export default async function FellowshipsPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
}) {

  const params =
    await searchParams;

  const page =
    Number(params.page || "1");

    const search = params.search || "";

  const data =
    await getFellowships(search, page);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Fellowships</h1>

          <p className="text-slate-500 mt-2">Manage fellowships</p>
        </div>

        <Link
          href="/fellowships/create"
          className="px-5 py-3 rounded-2xl bg-slate-900 text-white"
        >
          Add
        </Link>
      </div>

      <FellowshipsSearch />

      <FellowshipsTable fellowships={data.results} />

      <FellowshipsPagination next={data.next} previous={data.previous} />
    </div>
  );
}
