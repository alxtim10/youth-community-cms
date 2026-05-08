import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";
import { Toaster } from "sonner";
import MobileSidebar from "@/components/layout/mobile-sidebar";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIMUDA Dashboard",
  description: "SIMUDA Dashboard",
};

const poppins = Poppins({
  subsets: ["latin"],

  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <div className="md:hidden flex items-center justify-between p-4 border-b bg-white sticky top-0 z-40">
              <MobileSidebar />

              <h1 className="font-semibold">SIMUDA Dashboard</h1>
            </div>

            <div className=" mx-auto p-5 lg:p-8 xl:p-10">
              {children}
            </div>
          </main>
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
