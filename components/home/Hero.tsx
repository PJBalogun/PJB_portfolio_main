"use client";

import React from "react";
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {

	// react typewriter library
	// const [text] = useTypewriter({
	// 	words: ["Hey, I'm Pelumi.  ", "I'm a tech bro. "],
	// 	loop: true,
	// 	onLoopDone: () => console.log(`loop completed after 3 runs.`),
	// 	delaySpeed: 2000,
	// 	typeSpeed: 150,
	// });

	return (
		<>
			<div className="heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center ">
				<div>
					<span className="text-[2rem] mb-5">{"I'm a tech bro."}</span>
					{/* <Cursor cursorColor="text-fun-pink" /> */}
				</div>
				<h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto  text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
					I enjoy <span className="heroShiny1 text-fun-pink">building</span> and
					<span className="heroShiny2 text-fun-pink"> designing</span> for the
					web.
				</h1>
				<ScrollLink
					activeClass="active"
					to="learnmore"
					spy={true}
					offset={-30}
					smooth={true}
					duration={500}
				>
					<motion.div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink " whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}>
						Tell me more
					</motion.div>
				</ScrollLink>

			</div>
		</>
	);
}

export default Hero;
