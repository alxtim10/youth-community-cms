import Link from "next/link";

import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Folder,
  BarChart3,
  Calendar,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
  {
    name: "Members",
    href: "/members",
    icon: Users,
  },
  {
    name: "Fellowships",
    href: "/fellowships",
    icon: CalendarDays,
  },
  {
    name: "Files",
    href: "/files",
    icon: Folder,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-72 min-h-screen bg-slate-950 text-white border-r border-slate-800">
      <div className="px-6 py-8 border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-tight">Youth CMS</h1>

        <p className="text-sm text-slate-400 mt-1">Community Dashboard</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <Icon size={18} />
              <span>{menu.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
