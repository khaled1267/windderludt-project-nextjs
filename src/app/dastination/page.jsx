import TravelCard from '@/components/Dastinationcard';
import React from 'react';

const Destination = async() => {
  // Data fetch
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/dastinations`, {
    cache: 'no-store' // Next.js server component-e fresh data-r jonno
  });
  const data = await res.json();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8">All Destinations</h1>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          data?.map(destination => (
            // Extra div-ti bad deya hoyeche, key direct TravelCard-e boshano hoyeche
            <TravelCard 
              key={destination._id} 
              destination={destination} 
            />
          ))
        }
      </div>

      {/* Jodi database khali thake tar jonno check */}
      {data.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No destinations found.</p>
      )}
    </div>
  );
};

export default Destination;