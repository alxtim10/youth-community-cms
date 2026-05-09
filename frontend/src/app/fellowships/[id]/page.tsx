import Link from "next/link";

import {
  CalendarDays,
  Users,
  Mic2,
  Music,
  Pencil,
} from "lucide-react";

import {
  getFellowship,
} from "@/lib/api";

export default async function FellowshipDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const fellowship =
    await getFellowship(id);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            {fellowship.theme}
          </h1>

          <p className="text-slate-500 mt-2">
            Fellowship Event Details
          </p>
        </div>

        <Link
          href={`/fellowships/${id}/edit`}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white"
        >
          <Pencil size={18} />
          Edit
        </Link>
      </div>

      {/* Top Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <InfoCard
          icon={<CalendarDays size={20} />}
          title="Date"
          value={fellowship.date}
        />

        <InfoCard
          icon={<Users size={20} />}
          title="Attendance"
          value={
            fellowship.attendance_count
          }
        />

        <InfoCard
          icon={<Mic2 size={20} />}
          title="Speaker"
          value={fellowship.speaker}
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Left */}
        <div className="xl:col-span-2 space-y-6">
          <SectionCard
            title="Bible Verse"
          >
            <p className="text-lg font-medium">
              {
                fellowship.bible_verse
              }
            </p>
          </SectionCard>

          <SectionCard
            title="Objective"
          >
            <p className="text-slate-600 leading-7">
              {
                fellowship.objective
              }
            </p>
          </SectionCard>

          <SectionCard
            title="Theme Description"
          >
            <p className="text-slate-600 leading-7">
              {
                fellowship.theme_description
              }
            </p>
          </SectionCard>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <SectionCard
            title="Speaker Team"
          >
            <div className="space-y-4">
              <InfoRow
                label="Speaker"
                value={
                  fellowship.speaker
                }
              />

              <InfoRow
                label="PIC"
                value={
                  fellowship.speaker_pic
                }
              />

              <StatusBadge
                status={
                  fellowship.speaker_status
                }
              />
            </div>
          </SectionCard>

          <SectionCard
            title="Worship Team"
          >
            <div className="space-y-4">
              <InfoRow
                label="MC"
                value={
                  fellowship.mc
                }
              />

              <InfoRow
                label="Musician"
                value={
                  fellowship.musician
                }
              />

              <InfoRow
                label="PIC"
                value={
                  fellowship.worship_team_pic
                }
              />

              <StatusBadge
                status={
                  fellowship.worship_team_status
                }
              />
            </div>
          </SectionCard>
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

        <h2 className="mt-3 text-2xl font-bold">
          {value}
        </h2>
      </div>

      <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

function SectionCard({
  title,
  children,
}: any) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">
        {title}
      </h2>

      {children}
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

function StatusBadge({
  status,
}: {
  status: string;
}) {
  return (
    <span
      className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
        status === "DONE"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status}
    </span>
  );
}