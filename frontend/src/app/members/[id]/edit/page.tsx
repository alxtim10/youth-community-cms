import { getMember } from "@/lib/api";

import MembersForm from "@/components/members/members-form";

export default async function EditMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const member = await getMember(id);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Edit Member
        </h1>

        <p className="text-slate-500 mt-2">
          Update member information
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <MembersForm
          initialData={member}
          memberId={id}
        />
      </div>
    </div>
  );
}