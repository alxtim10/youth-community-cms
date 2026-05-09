import Link from "next/link";

import {
  Phone,
  MapPin,
  Pencil,
  User,
} from "lucide-react";

import { getMember } from "@/lib/api";

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const member = await getMember(id);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            {member.name}
          </h1>

          <p className="text-slate-500 mt-2">
            Member Details
          </p>
        </div>

        <Link
          href={`/members/${id}/edit`}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white"
        >
          <Pencil size={18} />
          Edit
        </Link>
      </div>

      {/* Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <InfoCard
          icon={<User size={20} />}
          title="Gender"
          value={
            member.gender === "M"
              ? "Male"
              : "Female"
          }
        />

        <InfoCard
          icon={<Phone size={20} />}
          title="Phone"
          value={member.phone}
        />

        <InfoCard
          icon={<MapPin size={20} />}
          title="Address"
          value={member.address}
        />
      </div>

      {/* Details */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h2 className="text-xl font-semibold mb-6">
          Member Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <InfoRow
            label="Name"
            value={member.name}
          />

          <InfoRow
            label="Gender"
            value={
              member.gender === "M"
                ? "Male"
                : "Female"
            }
          />

          <InfoRow
            label="Phone"
            value={member.phone}
          />

          <InfoRow
            label="Address"
            value={member.address}
          />

          <InfoRow
            label="Created At"
            value={new Date(
              member.created_at
            ).toLocaleDateString()}
          />
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: any) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex items-start justify-between">
      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h2 className="mt-3 text-xl font-bold">
          {value}
        </h2>
      </div>

      <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: any) {
  return (
    <div>
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="font-medium mt-1">
        {value}
      </p>
    </div>
  );
}