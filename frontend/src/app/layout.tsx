import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";
import { Toaster } from "sonner";
import MobileSidebar from "@/components/layout/mobile-sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex-1 overflow-y-auto">
            <div className="md:hidden flex items-center justify-between p-4 border-b bg-white sticky top-0 z-40">
              <MobileSidebar />

              <h1 className="font-semibold">Youth CMS</h1>
            </div>

            <div className="max-w-7xl mx-auto p-6 lg:p-10">{children}</div>
          </main>
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
