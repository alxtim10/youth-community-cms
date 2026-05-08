// src/components/files/files-search.tsx

"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { Search } from "lucide-react";

export default function FilesSearch() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  function handleSearch(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const params =
      new URLSearchParams(searchParams);

    params.set("search", e.target.value);

    router.push(
      `/files?${params.toString()}`
    );
  }

  return (
    <div className="relative max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search files..."
        className="w-full pl-11 pr-4 py-3 rounded-2xl border bg-white shadow-sm focus:outline-none"
        onChange={handleSearch}
        defaultValue={
          searchParams.get("search") || ""
        }
      />
    </div>
  );
}