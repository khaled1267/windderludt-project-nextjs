import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { HiOutlineCalendar } from 'react-icons/hi2';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const TravelCard = ({ destination}) => {
  return (
    <div className="max-w-[400px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 font-sans">
      
      {/* Image Section */}
      <div className="relative h-64">
        <Image src={destination.imageUrl} alt="Destination Image" fill className="object-cover" />
       
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        
        {/* Location */}
        <div className="flex items-center gap-1 text-gray-500">
          <HiLocationMarker className="text-xl" />
          <span className="text-lg font-medium italic">{destination.country}</span>
        </div>

        {/* Title and Price */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900 leading-tight">
           {destination.destinationName}
          </h2>
          <div className="text-right">
            <span className="text-2xl font-bold text-gray-900">${destination.price}</span>
            <span className="text-gray-500 text-sm italic">/Person</span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-600">
          <HiOutlineCalendar className="text-xl" />
          <span className="text-lg font-medium">{destination.departureDate}</span>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link href={`/dastination/${destination._id}`}>
          <button className="group flex items-center gap-2 text-cyan-500 font-bold text-lg border-b-2 border-cyan-500 pb-1 hover:text-cyan-600 hover:border-cyan-600 transition-all">
            BOOK NOW 
            <FiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          </Link> 
        </div>

      </div>
    </div>
  );
};

export default TravelCard;