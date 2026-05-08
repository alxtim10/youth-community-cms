// src/components/fellowships/fellowships-search.tsx

"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function FellowshipsSearch() {
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
      `/fellowships?${params.toString()}`
    );
  }

  return (
    <input
      type="text"
      placeholder="Search fellowship..."
      className="border rounded-lg px-4 py-2 w-full bg-white"
      onChange={handleSearch}
      defaultValue={
        searchParams.get("search") || ""
      }
    />
  );
}