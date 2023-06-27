import { motion } from "framer-motion";

import { styles } from "../styles";
import { MyLife } from "./canvas";

const Hero = () => {
	return (
		<section
			className={`relative w-full h-screen mx-auto bg-black
		`}
		>
			<div className={`${styles.paddingX} absolute inset-0 top-[440px] md:top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#686C45]" />
					<div className="w-1 sm:h-80 h-40 bg-[#686C45]" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						<span className="text-[#686C45]">Projects</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						My Work
						{/* My work <br className="sm:block hidden" /> interfaces and web applications */}
					</p>
				</div>
			</div>
			{/* <div className="w-full h-1/2 justify-end top-300"> */}
			<MyLife />
			{/* </div> */}
			<div className="absolute  bottom-20 w-full flex justify-center items-center">
				<div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
					<motion.div
						animate={{
							y: [0, 24, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: "loop",
						}}
						className="w-3 h-3 rounded-full bg-white mb-1"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
