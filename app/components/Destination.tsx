"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import  {motion} from 'framer-motion';

const destinations = [
  { name: "Venice", image: "/destination-image/image-1.png" },
  { name: "Amsterdam", image: "/destination-image/image-1.png" },
  { name: "Budapest", image: "/destination-image/image-2.png" },
  { name: "Lisbon", image: "/destination-image/image-3.png" },
  { name: "London", image: "/destination-image/image-4.png" },
  { name: "Ottawa", image: "/destination-image/image-5.png" },
  { name: "Paris", image: "/destination-image/image-6.png" },
];
export default function FeatureTour() {
  return (
    <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full py-12 px-4 md:px-10 bg-white">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Popular Destinations
        </h2>
        <p className="text-gray-500 mt-2">
          Favorite destinations based on customer reviews
        </p>
      </div>
      <div className="flex md:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="min-w-[260px] snap-center bg-white rounded-2xl shadow-sm p-3 transition-transform duration-300 hover:scale-105">
            <div className="relative w-full h-40 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"/>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">356 Tours</p>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded-full border">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-4 gap-6">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-3 transition-transform duration-300 hover:scale-105">
            <div className="relative w-full h-44 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"/>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">356 Tours</p>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded-full border">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
        <div className="bg-blue-700 text-white rounded-2xl p-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold">
            Crafting Your Perfect Travel Experience
          </h3>
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 cursor-pointer text-black px-5 py-3 rounded-full flex items-center justify-between">
            Browse All destinations
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}