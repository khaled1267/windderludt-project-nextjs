import Dastinationdetails from '@/components/Dastinationdetails';
import { DeleteModel } from '@/components/deletemodel';
import Editmodal from '@/components/Editmodal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';



const Dastinationditail = async({params}) => {
    const { id } =await params

    const token = await auth.api.getToken({
      headers :await headers()
    });
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/dastinations/${id}`,{
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
    const data = await res.json();

    return (
         <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto space-y-5">
 <Editmodal item={data}></Editmodal>
        {/* Top Nav */}
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2    text-sm text-gray-600 hover:text-gray-900">
         ← Back to Destinations
          </button>
          <div className="flex gap-2">
           {/* এভাবে পরিবর্তন করুন */}
<div className="flex gap-2">
  <div className="flex items-center gap-1 px-4 py-2 text-sm border border-red-400 text-red-500 rounded-lg hover:bg-red-50">
      <DeleteModel destination={data} />
  </div>
</div>
          </div>
        </div>
 
        {/* Hero Image */}
        <div className="border-2 border-dashed border-cyan-400 rounded-xl overflow-hidden">
          <Image
  src={data.imageUrl && data.imageUrl.trim() !== "" ? data.imageUrl : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000"} 
  alt="Destination Image"
  width={1000}
  height={500}
  className="w-full h-80 object-cover"
/>
        </div>
 
        {/* Details Card */}
        <div className="border-2 border-dashed border-cyan-400 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 
            {/* Left Side */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">📍 {data.country}</p>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.destinationName}</h1>
                <div className="flex items-center gap-5 text-sm text-gray-600">
                  <span>⭐ <strong>4.9</strong> (234 reviews)</span>
                  <span>📅 {data.departureDate}</span>
                </div>
              </div>
 
              {/* Overview */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Overview</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              </div>
 
              {/* Highlights */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Highlights</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Luxury beachfront accommodation",
                    "Visit Uluwatu Temple at sunset",
                    "Traditional Balinese spa treatment",
                    "Private beach dinner experience",
                    "Sunrise trek to Mount Batur",
                  ].map((item, i) => (
                    <p key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold">✓</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
 
            {/* Right - Booking Card */}
           <Dastinationdetails data={data} />
 
          </div>
        </div>
      </div>
    </div>
    );
};

export default Dastinationditail;