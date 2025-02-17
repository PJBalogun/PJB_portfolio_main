"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"
import Image from "next/image";
import { routes } from "@/app/lib/links";
import { usePathname } from "next/navigation";

function Navbar() {
	const pathname = usePathname();
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	  }

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<nav className=" z-50 flex items-center justify-between mt-2">
			<div className="list-none font-bold text-lg cursor-pointer">
				<Link href="/">
					<span className="font-black text-xl flex items-center">
						<Image
							className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
							src="/logos/logo.svg"
							width={120}
							height={60}
							alt="logo"
						/>
					</span>
				</Link>
			</div>
			<div>
				<ul className="hidden items-center space-x-6  sm:flex">
					{routes.map((route, index) => {
						return (
							<li
								key={index}
								className={`list-none text-white ${pathname === route.path
									? "opacity-100"
									: "opacity-40 hover:opacity-100 transition-opacity"
									} text-lg`}
							>
								<Link href={route.path}>{route.title}</Link>
							</li>
						);
					})}				
				</ul>
				<div className="sm:hidden relative ">
					<motion.div onClick={toggleSidebar} className="cursor-pointer hover:scale-150 transition" variants={variants}>
						<Image
							className="text-fun-gray-light"
							src="/icons/hamburger.svg"
							width={40}
							height={40}
							alt="navigation menu"
						/>
					</motion.div>
					{
						isSidebarOpen && <ul className="absolute z-100 right-2 mt-4 h-[60vh] w-96 z-100 flex flex-col items-start justify-start gap-12 p-5 sm:flex rounded-md border-r-2  bg-fun-pink-darker">
							{routes.map((route, index) => {
								return (
									<li
										key={index}
										className={`list-none hover:px-5 px-3 ease-in-out delay-400 transition text-white ${pathname === route.path
											? "opacity-100"
											: "opacity-50 hover:opacity-100 transition-opacity "
											} text-lg`}
									>
										<Link href={route.path}>{route.title}</Link>
									</li>
								);
							})}
		
						</ul>
					}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
