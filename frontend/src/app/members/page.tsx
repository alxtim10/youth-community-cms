import { getMembers } from "@/lib/api";

import MembersTable from "@/components/members/members-table";
import MembersSearch from "@/components/members/members-search";
import MembersPagination from "@/components/members/members-pagination";
import Link from "next/link";

export default async function MembersPage({ searchParams }: any) {
  const search = searchParams.search || "";

  const page = Number(searchParams.page) || 1;

  const data = await getMembers(search, page);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Members</h1>

          <p className="text-slate-500 mt-2">Manage youth community members</p>
        </div>

        <Link
          href="/members/create"
          className="px-5 py-3 rounded-2xl bg-slate-900 text-white"
        >
          Create Member
        </Link>
      </div>

      <MembersSearch />

      <MembersTable members={data.results} />

      <MembersPagination next={data.next} previous={data.previous} />
    </div>
  );
}
