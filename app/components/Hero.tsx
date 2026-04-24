"use client"
import Image from "next/image";
import Navbar from "./Navbar";
import HeroCard from "./HeroCard";
import {motion} from 'framer-motion'
const Hero = () => {
  return (
<div id="hero" className="relative max-sm:h-[70vh]  md:h-[50vh] lg:h-[50vh] w-full ">
      <div className="absolute inset-0 -z-10">
        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 2 }}
         className="absolute inset-0 -z-10">
        <Image
          src="/Background.png"
          alt="hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"/>
         </motion.div> 
      </div>
   <div className="z-50"><Navbar/></div>
   <motion.div 
        initial = {{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
       className="flex flex-col items-center justify-center text-center text-white flex-1 px-4 sm:pt-5">
       <div className="bg-[#FAB326] flex items-center gap-2 rounded-full px-4 py-2 mb-4 max-sm:mt-10">
          <Image src="/earth-logo.png" width={20} height={20} alt="earth" />
          <span>Explore the world</span>
        </div>
        <h2 className="text-2xl md:text-5xl font mb-4 max-sm:mt-">Your Gateway to Extraordinary Adventures</h2>
        <p className="text-sm md:text-base max-w-xl">Pack your bags and let Travila redefine your travel experience.</p>
     </motion.div>
     <div className="relative z-50 -mt-16 px-4"><HeroCard/></div>
    </div>
  );
};
export default Hero;
