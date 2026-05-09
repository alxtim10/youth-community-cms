"use client";
import DataTable from "@/components/shared/data-table";
import EmptyState from "@/components/shared/empty-state";
import MembersAction from "./members-action";
import { useRouter } from "next/navigation";
import { Member } from "@/types";
interface Props {
  members: Member[];
}

export default function MembersTable({ members }: Props) {
  const router = useRouter();
  return (
    <DataTable
      onRowClick={(row) => router.push(`/members/${row.id}`)}
      data={members}
      emptyState={
        <EmptyState
          title="No Members Found"
          description="Start adding community members to manage your youth fellowship."
          buttonText="Add Member"
          href="/members/create"
        />
      }
      columns={[
        {
          key: "name",
          label: "Name",
        },
        {
          key: "address",
          label: "Address",
        },
        {
          key: "gender",
          label: "Gender",
        },
        {
          key: "phone",
          label: "Phone",
        },
        {
          key: "actions",
          label: "Actions",
          render: (_:any, row: any) => <MembersAction memberId={row.id} />,
        },
      ]}
    />
  );
}
