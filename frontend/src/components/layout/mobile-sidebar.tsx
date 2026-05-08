"use client";

import Link from "next/link";
import {
  Menu,
  LayoutDashboard,
  Users,
  CalendarDays,
  Folder,
  BarChart3,
  Calendar
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

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

export default function MobileSidebar() {
  const pathname = usePathname();
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
          className="w-80 bg-white border-r border-slate-200 p-0"
        >
          <div className="px-6 pt-8 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>

              <div>
                <h1 className="font-bold text-xl tracking-tight">Youth CMS</h1>

                <p className="text-sm text-slate-500 mt-0.5">
                  Community Dashboard
                </p>
              </div>
            </div>
          </div>

          <nav className="mt-10 space-y-2">
            {menus.map((menu) => {
              const Icon = menu.icon;

              const isActive =
                pathname === menu.href ||
                (menu.href !== "/" && pathname.startsWith(menu.href));

              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
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
