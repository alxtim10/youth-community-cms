import Link from "next/link";

import {
  Plus,
  Users,
  Folder,
  CalendarDays,
} from "lucide-react";

const actions = [
  {
    title: "Create Fellowship",
    href: "/fellowships/create",
    icon: CalendarDays,
  },

  {
    title: "Add Member",
    href: "/members/create",
    icon: Users,
  },

  {
    title: "Add File",
    href: "/files/create",
    icon: Folder,
  },
];

export default function QuickActionsWidget() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
          <Plus size={20} />
        </div>

        <div>
          <h2 className="font-semibold text-lg tracking-tight">
            Quick Actions
          </h2>

          <p className="text-sm text-slate-500">
            Frequently used actions
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.href}
              href={action.href}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 px-4 py-4 hover:bg-slate-50 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Icon size={18} />
              </div>

              <span className="font-medium">
                {action.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}