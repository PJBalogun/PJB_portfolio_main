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
    <html lang="en">
      <body className={``}>
						<main
							className="w-full mx-auto flex flex-col items-center justify-center md:min-h-screen opening-box-animate-padding text-white  md:overflow-visible"
							style={{ maxWidth: "1440px" }}
						>
							<div className="p-5 w-full flex-1 text-center bg-bg">
								<div className="z-100">
									<Navbar />
								</div>
								<div className="m-5 block sm:hidden z-100">
									{/* <MobileNavbar /> */}
								</div>
								{children}
							</div>
						</main>
						{/* <Footer /> */}
					</body>
    </html>
  );
}
