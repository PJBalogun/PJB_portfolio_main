"use client"

import React from "react";
import {motion} from "framer-motion";
import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/app/lib/homePageData";
import Image from "next/image";


function Testimonials() {
	return (
		<div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto ">
			<SectionTitle title="Why people love my work!" />
			<div className="max-w-5xl m-auto  grid grid-cols-1 gap-16 md:gap-14 md:grid-cols-3 items-start mt-20 md:mt-24 ">
				{testimonials.map((item, index) => {
					return (
						<motion.div
							key={index}
							className="relative bg-fun-pink-darker border border-fun-pink-light p-5 h-[200px] rounded-lg  flex flex-col justify-between"
							initial={{ opacity: 0, scale: 0.5,  }}
							whileInView={{ opacity: 1, scale: 1,}}
							transition={{ duration: 1.5 }}
						>
							{index === 0 && (
								<>
									<Image
										className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
										src="#"
										alt="image"
										width={}
										height={}
										
									/>
								</>
							)}
							<p className="text-base italic relative testimonialQuote">
								"{item.quote}"
							</p>
							<p className="mt-4 text-xs text-fun-gray">
								<b className="text-fun-pink font-monospace">{item.name}</b> -{" "}
								{item.job}
							</p>
							{index === 2 && (
								<Image
									className="sqD top-[-30px] right-[-15px] w-11"
									src="#"
									alt="image"
									width={}
									height={}
								/>
							)}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

export default Testimonials;
