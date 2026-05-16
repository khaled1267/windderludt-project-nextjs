import React from 'react';
import TravelCard from './Dastinationcard';
import { Button } from '@heroui/react';
import { ArrowRight } from 'lucide-react';

const Featuredcard = async() => {
    const featured = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const data = await featured.json()
    console.log(data);
    return (
        
         <div>
         <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4 font-sans bg-white">
      
      {/* বাম পাশের হেডিং এবং সাবটাইটেল */}
      <div>
        <h2 className="text-4xl md:text-5xl font-normal text-gray-950 tracking-tight mb-2">
          Featured Destinations
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-normal">
          Handpicked travel experiences for the adventure seekers
        </p>
      </div>

      {/* ডান পাশের "ALL DESTINATIONS" বাটন */}
      {/* নোট: আপনার ইমেজের সিলেকশন আউটলাইন লুক ধরে রাখার জন্য border-sky-400 এবং p-3 ব্যবহার করা হয়েছে */}
      <div className="border border-sky-400 p-3 inline-block rounded-sm self-start md:self-auto">
        <button className="flex items-center gap-2 border border-blue-500 bg-blue-50/50 px-2 py-1 text-[#00a8cc] hover:text-[#0e8ea9] transition-colors text-xs font-medium tracking-wider uppercase">
          All Destinations
          <ArrowRight className="w-4 h-4 text-[#00a8cc]" strokeWidth={2} />
        </button>
      </div>

    </div>
         <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map(destination => (
            
            <TravelCard 
              key={destination._id} 
              destination={destination} 
            />
          ))}
         </div>
        </div>
    );
};

export default Featuredcard;