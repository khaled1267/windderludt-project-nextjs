import React from 'react';
import { ArrowRight } from 'lucide-react'; // বাটনের ভেতরের অ্যারো আইকনটির জন্য

const CallToAction = () => {
  return (
    <section 
      className="relative h-[450px] md:h-[500px] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ 
        // আপনার ব্যাকগ্রাউন্ড ইমেজ লিঙ্কটি এখানে বসিয়ে দিতে পারেন
        backgroundImage: `url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=1200&q=80')` 
      }}
    >
      {/* ইমেজের দুই পাশে এবং নিচে ডার্ক বা উইনিয়েট (Vignette) ভাইব দেওয়ার জন্য ওভারলে গ্রাডিয়েন্ট */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
      
      {/* ভেতরের কন্টেন্ট সেকশন */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* মেইন টাইটেল */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-4 tracking-tight">
          Ready To Start Your Journey?
        </h2>
        
        {/* সাবটাইটেল */}
        <p className="text-gray-200/90 text-sm md:text-base font-light tracking-wide mb-8 max-w-xl">
          Join thousands of travelers who have discovered the world with us
        </p>
        
        {/* বুকিং বাটন */}
        <button className="bg-white text-gray-900 font-medium tracking-wider text-xs md:text-sm py-4 px-8 flex items-center gap-3 shadow-md hover:bg-gray-100 transition-all duration-300 uppercase">
          Book Your Trip Today
          <ArrowRight className="w-4 h-4 text-gray-900" strokeWidth={2} />
        </button>
        
      </div>
    </section>
  );
};

export default CallToAction;