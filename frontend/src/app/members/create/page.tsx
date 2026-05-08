// src/app/members/create/page.tsx

import MembersForm from "@/components/members/members-form";

export default function CreateMemberPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Add
        </h1>

        <p className="text-slate-500 mt-2">
          Add new community member
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <MembersForm />
      </div>
    </div>
  );
}