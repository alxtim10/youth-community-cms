"use client";

import Link from "next/link";

import {
  Menu,
  LayoutDashboard,
  Users,
  CalendarDays,
  Folder,
  BarChart3,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export default function MobileSidebar() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 rounded-xl border bg-white shadow-sm">
            <Menu size={20} />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-72 bg-slate-950 text-white border-slate-800"
        >
          <div className="mt-8">
            <h1 className="text-2xl font-bold">
              Youth CMS
            </h1>

            <p className="text-sm text-slate-400 mt-1">
              Community Dashboard
            </p>
          </div>

          <nav className="mt-10 space-y-2">
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
        </SheetContent>
      </Sheet>
    </div>
  );
}