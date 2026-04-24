"use client";

import {useState} from "react";
import {FaSearch, FaMapMarkerAlt, FaUser} from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import {BsSearch} from 'react-icons/bs'

export default function HeroCard() {
  const [location, setLocation] = useState("Dhaka, BD");
  const today=new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [guests, setGuests] = useState("2 adults, 2 children");

  return (
    <div className="w-full max-w-md sm:max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-6 relative z-50 max-sm:mt-30 sm:mt-32">
      
      <div className="flex items-center gap-4 mb-6 pl-3">
        <button className="text-gray-500 font-medium flex gap-1">  
        <img src="/hero-card-logo-1.png" alt="Tours" className="w-5 h-5"/>
         Tours</button>
        <button className="flex gap-1 bg-yellow-400 text-white px-4 py-1 rounded-full font-medium">
         <img src="/frame-logo.png" alt="Tours" className="w-5 h-5"/>
          Hotels
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 border rounded-xl p-4">
        
        <div className="flex items-center gap-3 flex-1">
          <FaMapMarkerAlt className="text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Location</p>
            <select
              className="outline-none font-medium"
              value={location}
              onChange={(e) => setLocation(e.target.value)}>
              <option>Dhaka, BD</option>
              <option>London, UK</option>
              <option>Paris, France</option>
            </select>
          </div>
        </div>

      <div className="hidden md:block w-px h-10 bg-gray-200"></div>
        <div className="flex items-center gap-3 flex-1">
          <MdDateRange className="text-gray-400" />
          <div className="field">
            <p className="text-xs text-gray-400">Check in & Check out</p>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="outline-none font-medium"/>
          </div>
        </div>

      <div className="hidden md:block w-px h-10 bg-gray-200"></div>  
        <div className="flex items-center gap-3 flex-1">
          <FaUser className="text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Guest</p>
            <select
              className="outline-none font-medium"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}>
              <option>2 adults, 2 children</option>
              <option>1 adult</option>
              <option>3 adults</option>
            </select>
          </div>
        </div>

    <div className="relative">
      <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
       <input
       type="text"
       placeholder="Search"
       className="w-[120px] pl-9 pr-3 py-2 rounded-full text-white bg-[#0640C3] border text-sm outline-none focus:ring-2 placeholder:text-white focus:ring-blue-500"/>
       </div>
        
      </div>
    </div>
  );
}
