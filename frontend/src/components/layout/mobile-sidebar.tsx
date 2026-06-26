"use client";

import Link from "next/link";
import {
  Menu,
  LayoutDashboard,
  Users,
  CalendarDays,
  Folder,
  BarChart3,
  Calendar,
} from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
          <SheetTitle></SheetTitle>
          <div className="px-8 pt-8 pb-4 flex flex-col items-center">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
            <h1 className="font-bold text-xl tracking-tight text-slate-900 mt-5">
              SIMUDA Dashboard
            </h1>
          </div>

          <nav className="space-y-2 px-4">
            {menus.map((menu) => {
              const Icon = menu.icon;

              const isActive =
                pathname === menu.href ||
                (menu.href !== "/" && pathname.startsWith(menu.href));

              return (
                <SheetClose asChild key={menu.href}>
                  <Link
                    key={menu.href}
                    href={menu.href}
                    className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all ${isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                      }`}
                  >
                    <Icon size={18} />

                    <span>{menu.name}</span>
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
