import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // অ্যারো আইকনের জন্য

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* হেডার এবং নেভিগেশন বাটন সেকশন */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-3 tracking-tight">
              What Travelers Say
            </h2>
            <p className="text-sm md:text-base text-gray-500">
              Real experiences from our happy travelers
            </p>
          </div>
          
          {/* স্লাইডার বাটন (গোল বৃত্তাকার অ্যারো) */}
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* টেস্টীমোনিয়াল কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* কার্ড ১: Michael Chen */}
          <div className="border border-gray-100 bg-white p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start justify-between shadow-sm">
            <div className="flex-1 flex flex-col justify-between h-full min-h-[200px]">
              <p className="text-gray-900 text-[17px] md:text-[18px] leading-relaxed font-normal tracking-tight">
                The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.
              </p>
              <div className="mt-6">
                <span className="block text-sm text-[#00a8cc] font-medium">
                  — Michael Chen
                </span>
                <span className="block text-xs text-gray-400 mt-0.5">
                  Singapore
                </span>
              </div>
            </div>
            {/* ট্রাভেলার ইমেজ */}
            <div className="w-full sm:w-40 h-48 sm:h-40 flex-shrink-0 bg-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" 
                alt="Michael Chen" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* কার্ড ২: Sarah Johnson */}
          <div className="border border-gray-100 bg-white p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start justify-between shadow-sm">
            <div className="flex-1 flex flex-col justify-between h-full min-h-[200px]">
              <p className="text-gray-900 text-[17px] md:text-[18px] leading-relaxed font-normal tracking-tight">
                Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!
              </p>
              <div className="mt-6">
                <span className="block text-sm text-[#00a8cc] font-medium">
                  — Sarah Johnson
                </span>
                <span className="block text-xs text-gray-400 mt-0.5">
                  New York, USA
                </span>
              </div>
            </div>
            {/* ট্রাভেলার ইমেজ */}
            <div className="w-full sm:w-40 h-48 sm:h-40 flex-shrink-0 bg-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" 
                alt="Sarah Johnson" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;