import type { Metadata } from "next";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balogun Oluwapelumi Portfolio",
  description: "Check Out my information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[70%] sm:text-[75%] md:text-[100%] overflow-x-hidden">
      <body className="overflow-x-hidden w-full">
        <main className="w-full flex flex-col items-center justify-center md:min-h-screen text-white overflow-hidden"
          style={{ maxWidth: "1200px" }}>
          <div className="p-5 w-full flex-1 text-center bg-bg overflow-hidden">
            <div className="relative">
              <Navbar />
            </div>
            <div className="m-5 block sm:hidden z-100">
              {/* <MobileNavbar /> */}
            </div>
            <div className="max-w-full w-full">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
