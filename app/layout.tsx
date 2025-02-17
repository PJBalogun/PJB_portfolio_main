import type { Metadata } from "next";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import "./globals.css";



export const metadata: Metadata = {
  title: "Balogun  OLuwapelumi Portfolio",
  description: "Check Out my information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[70%] sm:text-[75%] md:text-[100%]">
      <body className={``}>
						<main
  className="w-[500px] mx-auto max-w-[1440px] mx-auto  md:min-h-screen opening-box-animate-padding text-white"
>
							<div className="p-5 w-full flex-1 text-center bg-bg">
								<div className="relative">
									<Navbar />
								</div>
								<div className="m-5 block sm:hidden z-100">
									{/* <MobileNavbar /> */}
								</div>
								{children}
							</div>
						</main>
						<Footer />
					</body>
    </html>
  );
}
