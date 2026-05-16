import { Bookingdelete } from "@/components/Bookingdelete";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const Bookingpage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  // fetch এ cache: 'no-store' যোগ করা হয়েছে যাতে ডিলিট করার পর ডাটা আপডেট হয়
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`, {
    cache: 'no-store' 
  });

  const data = await res.json();

  return (
    <div className="p-4">
      {data && data.length > 0 ? (
        data.map((booking) => (
          <div
            key={booking._id}
            className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden mb-6 flex flex-col md:flex-row"
          >
            {/* ইমেজ সেকশন */}
            <div className="md:w-1/3 h-48 md:h-auto relative">
              <img
                src={booking.bookingdata?.imageUrl || "https://via.placeholder.com/300"}
                alt="Destination"
                className="w-full h-full object-cover"
              />
            </div>

            {/* কন্টেন্ট সেকশন */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Confirmed
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {booking.bookingdata?.destinationName || "Unknown Destination"}
                </h2>

                <div className="space-y-1 text-gray-500 text-sm">
                  <p className="flex items-center gap-2">
                    <span>📅</span> Departure: {new Date(booking.bookingdata?.departureDate).toLocaleDateString()}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📍</span> Booking ID: {booking._id.slice(-6)}
                  </p>
                </div>

                <div className="mt-4">
                  <span className="text-2xl font-bold text-cyan-600">
                    ${booking.bookingdata?.price || "0"}
                  </span>
                </div>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="flex justify-end gap-3 mt-4">
                {/* এখানে booking._id পাঠানো হচ্ছে */}
                <Bookingdelete bookingId={booking._id} />
                
                <button className="flex items-center gap-2 px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors">
                  <span>👁️</span> View
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No bookings found.</p>
      )}
    </div>
  );
};

export default Bookingpage;