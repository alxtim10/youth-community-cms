// src/components/layout/sidebar.tsx

"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Folder,
  BarChart3,
  Calendar,
} from "lucide-react";
import Image from "next/image";

const menus = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
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
    name: "Calendar",
    href: "/calendar",
    icon: Calendar,
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
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-72 shrink-0 border-r border-slate-200/80 bg-white/80 backdrop-blur-xl sticky top-0 h-screen flex-col">
      {/* Logo */}
      <div className="px-8 pt-8 pb-4 flex flex-col items-center">
        <Image src="/logo.png" width={100} height={100} alt="logo" />
        <h1 className="font-bold text-xl tracking-tight text-slate-900 mt-5">
          SIMUDA Dashboard
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menus.map((menu) => {
          const Icon = menu.icon;

          const isActive =
            pathname === menu.href ||
            (menu.href !== "/" && pathname.startsWith(menu.href));

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`group relative flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-200 ${
                isActive
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-white" />
              )}

              {/* Icon */}
              <div
                className={`transition-transform duration-200 ${
                  !isActive && "group-hover:scale-110"
                }`}
              >
                <Icon size={20} />
              </div>

              {/* Label */}
              <span className="font-medium tracking-tight">{menu.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-slate-100">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-xl">
          <p className="text-sm text-slate-300">Youth Community</p>

          <h2 className="mt-2 text-lg font-semibold leading-snug">
            Manage your fellowship events and members easily.
          </h2>

          <div className="mt-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <span className="font-semibold">Y</span>
            </div>

            <div>
              <p className="text-sm font-medium">Admin</p>

              <p className="text-xs text-slate-400">Community Leader</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
