"use client";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
const hotels = [
  {
    name: "California Sunset/Twilight Boat Cruise",
    image: "/Hotels-image/image-1.png",
    location: "Manchester, England",
    price: "$48.25",
    rating: 4.8,
  },
  {
    name: "NYC: Food Tastings and Culture Tour",
    image: "/Hotels-image/image-2.png",
    location: "Manchester, England",
    price: "$17.32",
    rating: 4.7,
  },
  {
    name: "Grand Canyon Horseshoe Bend 2 days",
    image: "/Hotels-image/image-3.png",
    location: "Manchester, England",
    price: "$15.63",
    rating: 4.9,
  },
];
const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
};
export default function Hotels() {
  return (
    <section className="w-full py-5 px-4 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#DDF2F7] bg-cover bg-center opacity-30" />
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Top Rated Hotels
        </h2>
        <p className="text-gray-500 mt-2">
          Quality as judged by customers. Book at the ideal price!
        </p>
      </div>
      <div className="flex md:hidden gap-4 overflow-x-auto pb-4">
        {hotels.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white rounded-2xl shadow p-4 hover:scale-105 transition">
            <div className="relative w-full h-42 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"/>
            </div>
            <div className="mt-3 space-y-2">
              <h3 className="font-semibold text-md">{item.name}</h3>
              <div className="flex items-center justify-between text-gray-500 text-sm gap-1">
                <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{item.location}</span>
                </div>
                <Stars rating={item.rating} />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold">{item.price} <span className="text-xs text-gray-400">/ person</span></span>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-3 gap-8">
        {hotels.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-5 w-full hover:scale-105 hover:shadow-lg transition">
            <div className="relative w-full h-56 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"/>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <div className="flex items-center justify-between text-gray-500 text-sm gap-0">
                <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{item.location}</span>
                </div>
                <Stars rating={item.rating} />
              </div>
            <div className="flex justify-between items-center mt-4">
                <span className="font-bold">
                  {item.price}{" "}
                  <span className="text-xs text-gray-400">/ person</span>
                </span>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}