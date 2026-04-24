"use client";
import  {motion} from 'framer-motion';
import Image from "next/image";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "California Sunset",
    image: "/Hotels-image/image-1.png",
    location: "Manchester, England",
  },
  {
    name: "NYC Food Tour",
    image: "/Hotels-image/image-2.png",
    location: "Manchester, England",
  },
  {
    name: "Grand Canyon",
    image: "/Hotels-image/image-3.png",
    location: "Manchester, England",
  },
];
export default function FeatureTour() {
  return (
    <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
     id="tour" className="w-full py-0 px-4 md:px-12 bg-white">  
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Featured Tours
        </h2>
        <p className="text-gray-500 mt-2">
          Favorite destinations based on customer reviews
        </p>
      </div>
      <div className="flex md:hidden gap-4 overflow-x-auto pb-4">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white rounded-2xl shadow p-5 hover:scale-105 transition">
            <div className="relative w-full h-44 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <div className="flex items-center text-gray-500 text-sm mt-1 gap-1">
                <MapPin size={14} />
                <span>{item.location}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                3 days · 4–6 guests
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold">$48.25</span>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-3 gap-8">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-5 w-full hover:scale-105 hover:shadow-lg transition">
            <div className="relative w-full h-56 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                3 days · 4–6 guests
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold">$48.25</span>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}