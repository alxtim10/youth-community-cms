"use client";
import DataTable from "@/components/shared/data-table";
import EmptyState from "@/components/shared/empty-state";
import FellowshipsAction from "./fellowships-action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fellowship } from "@/types";

interface Props {
  fellowships: Fellowship[];
}

export default function FellowshipsTable({ fellowships }: Props) {
  const router = useRouter();

  return (
    <DataTable
      onRowClick={(row) => router.push(`/fellowships/${row.id}`)}
      data={fellowships}
      emptyState={
        <EmptyState
          title="No Fellowships Found"
          description="Add your first fellowship event to start managing schedules and attendance."
          buttonText="Add Fellowship"
          href="/fellowships/create"
        />
      }
      columns={[
        {
          key: "date",
          label: "Date",
        },
        {
          key: "theme",
          label: "Theme",
          render: (value: string, row: any) => (
            <Link
              href={`/fellowships/${row.id}`}
              className="font-medium hover:underline"
            >
              {value}
            </Link>
          ),
        },
        {
          key: "speaker",
          label: "Speaker",
        },
        {
          key: "mc",
          label: "MC",
        },
        {
          key: "attendance_count",
          label: "Attendance",
        },
        {
          key: "speaker_status",
          label: "Speaker Status",

          render: (value: string) => (
            <span
              className={`px-2 py-1 rounded text-xs ${
                value === "DONE"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {value}
            </span>
          ),
        },
        {
          key: "worship_team_status",
          label: "Worship Status",

          render: (value: string) => (
            <span
              className={`px-2 py-1 rounded text-xs ${
                value === "DONE"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {value}
            </span>
          ),
        },
        {
          key: "actions",
          label: "Actions",

          render: (row: Fellowship) => (
            <FellowshipsAction fellowshipId={row.id} />
          ),
        },
      ]}
    />
  );
}
