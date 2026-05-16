"use client";
import { authClient } from "@/lib/auth-client";
import { DateField, Description, FieldError, Label } from "@heroui/react";
import React, { useState } from "react";

const Dastinationdetails = ({ data }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);

  // ✅ সমাধান ১: data যদি undefined হয়, তবে খালি অবজেক্ট {} ধরবে যাতে ক্র্যাশ না করে
  const { price, _id, destinationName, imageUrl, country } = data || {};

  const handeleboking = async () => {
    // ✅ সমাধান ২: ইউজার লগইন না থাকলে হ্যান্ডেল করা
    if (!user) {
      alert("Please login to book!");
      return;
    }

    if (!departureDate) {
      alert("Please select a departure date!");
      return;
    }

    const bookingdata = {
      userId: user?.id,
      destinationId: _id,
      userName: user?.name,
      userimage: user?.image, // ✅ এখানে '?' মিস ছিল, ঠিক করে দিলাম
      destinationName,
      price,
      departureDate: new Date(departureDate),
      imageUrl,
      country
    };

    const {data:tokendata}= await authClient.token();
    console.log(tokendata);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokendata?.token}`,
      },
      body: JSON.stringify({ bookingdata  }),
    });
    const data = await res.json();
    console.log(data);

    
  };

  // ✅ সমাধান ৩: ডেটা না আসা পর্যন্ত একটা লোডিং বা সেফটি চেক
  if (!data) return <div className="p-5 text-gray-500">Loading details...</div>;

  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 space-y-4 h-fit">
        <div>
          <p className="text-sm text-gray-400">Starting from</p>
          {/* ✅ হার্ডকোডেড $1299 এর বদলে ডাইনামিক প্রাইস */}
          <p className="text-4xl font-bold text-cyan-500">${price || "0"}</p>
          <p className="text-sm text-gray-400">per person</p>
        </div>

        <DateField value={departureDate} onChange={setDepartureDate}>
          <Label className="text-sm font-medium text-gray-700">Departure Date</Label>
          <DateField.Group className="mt-1">
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
          <Description />
          <FieldError />
        </DateField>

        <button 
          onClick={handeleboking} 
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl text-sm transition"
        >
          Book Now →
        </button>

        <div className="space-y-2 pt-1">
          {[
            "Free cancellation up to 7 days",
            "Travel insurance included",
            "24/7 customer support",
          ].map((item, i) => (
            <p
              key={i}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span className="text-green-500">✓</span> {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dastinationdetails;