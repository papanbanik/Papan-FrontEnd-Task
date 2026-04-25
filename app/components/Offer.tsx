import Image from "next/image";
import { ArrowRight  } from "lucide-react";
const Offer = () => {
  return (
    <div id="offer" className="w-full px-4 md:px-12 py-15">
      <div className="flex md:hidden gap-4 overflow-x-auto pb-4">
        <div className="relative flex">
        <img
          src="/Offer-image/image-1.png"
          className="w-[75vw] sm:w-[80vw]  h-44 flex-shrink-0 rounded-xl object-cover"
          alt="offer1"/>
          <h2 className="absolute top-15 left-28 text-white font-semibold text-xl">We Make Every<br/>
             Trips Special</h2>
           <button className="absolute top-30 left-30 rounded-full px-5 py-1 bg-[#FAB326] flex item-center gap-1 text-white">View More
           <ArrowRight className="w-4 h-4 mt-1"/></button>  
         </div> 
        <div className="relative flex">
        <img
          src="/Offer-image/image-2.png"
          className="w-[75vw] sm:w-[80vw] h-44 flex-shrink-0 rounded-xl object-cover"
          alt="offer2"/>
          <p className="absolute text-semibold text-xl left-5 top-12">Limited Offer</p>
           <p className="absolute font-bold text-xl left-5 top-20">Buy 1, Get 1 Free </p>
           <button className="absolute top-30 left-5 rounded-full px-4 py-1 bg-[#0640C3] flex item-center gap-1 text-white">View More
           <ArrowRight className="w-4 h-4 mt-1"/></button> 
         </div>  
         <div className="relative flex">
        <img
          src="/Offer-image/image-3.png"
          className="w-[75vw] sm:w-[80vw] h-44 flex-shrink-0 rounded-xl object-cover"
          alt="offer3"/> 
          <p className="absolute text-semibold text-xl left-5 top-12 bg-white p-1">Limited Offer</p>
           <p className="absolute font-bold text-xl left-5 top-22 bg-white p-1">Buy 1, Get 1 Free </p>
           <button className="absolute top-32 left-5 rounded-full px-4 py-1 bg-[#FAB326] flex item-center gap-1 text-white">View More
           <ArrowRight className="w-4 h-4 mt-1"/></button> 
          </div>
      </div>
      <div className="hidden md:grid grid-cols-3 gap-8">
        <div className="relative flex">
        <img
          src="/Offer-image/image-1.png"
          className="w-[75vw] sm:w-[80vw]  h-44 flex-shrink-0 rounded-xl object-cover"
          alt="offer1"/>
          <h2 className="absolute top-15 left-38 text-white font-semibold text-xl">We Make Every<br/>
             Trips Special</h2>
           <button className="absolute top-30 left-38 rounded-full px-5 py-1 bg-[#FAB326] hover:bg-[#c99120] flex item-center gap-1 text-white">View More
           <ArrowRight className="w-4 h-4 mt-1"/></button>  
         </div> 
        <div className="relative flex">
        <img
          src="/Offer-image/image-2.png"
          className="w-[75vw] sm:w-[80vw] h-44 flex-shrink-0 rounded-xl object-cover"
          alt="offer2"/>
          <p className="absolute text-semibold text-xl left-5 top-12">Limited Offer</p>
           <p className="absolute font-bold text-xl left-5 top-20">Buy 1, Get 1 Free </p>
           <button className="absolute top-30 left-5 rounded-full px-4 py-2 bg-[#0939a9] hover:bg-[#081c4b] flex item-center gap-1 text-white">View More
           <ArrowRight className="w-4 h-4 mt-1"/></button> 
         </div>  
         <div className="relative flex">
        <img
          src="/Offer-image/image-3.png"
          className="w-[75vw] sm:w-[80vw] h-44 flex-shrink-0 rounded-xl object-cover"
          alt="offer3"/> 
          <p className="absolute text-semibold text-xl left-5 top-12 bg-white p-1">Limited Offer</p>
           <p className="absolute font-bold text-xl left-5 top-22 bg-white p-1">Buy 1, Get 1 Free </p>
           <button className="absolute top-32 left-5 rounded-full px-4 py-1 bg-[#FAB326] hover:bg-[#c99120] flex item-center gap-1 text-white">View More
           <ArrowRight className="w-4 h-4 mt-1"/></button> 
          </div>
      </div>
    </div>
  );
};
export default Offer;