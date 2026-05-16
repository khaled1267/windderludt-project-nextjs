import React from 'react';
import { ShieldCheck, Map, Headset } from 'lucide-react'; // আইকনগুলোর জন্য লুকেড রিঅ্যাক্ট ব্যবহার করা হয়েছে

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f0f9ff] py-16 px-4 md:px-8 lg:px-16 text-center font-sans">
      {/* হেডার সেকশন */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-3 tracking-tight">
          Why Choose Wanderlust
        </h2>
        {/* ডটেড বর্ডারসহ সাবটাইটেল (আপনার ইমেজের সিলেকশন বক্সটির মতো করে দেওয়া হলো) */}
        <div className="border border-dashed border-sky-400 py-1.5 px-4 inline-block rounded">
          <p className="text-sm md:text-base text-gray-600">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>
      </div>

      {/* কার্ড গ্রিড সেকশন */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* কার্ড ১: Safe & Secure */}
        <div className="bg-white p-8 rounded-sm shadow-sm text-left flex flex-col justify-between">
          <div>
            <ShieldCheck className="w-8 h-8 text-[#00a8cc] mb-5" strokeWidth={1.5} />
            <h3 className="text-2xl font-normal text-gray-900 mb-3">
              Safe & Secure
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your safety is our priority with comprehensive travel insurance and 24/7 support.
            </p>
          </div>
        </div>

        {/* কার্ড ২: Expert Guides */}
        <div className="bg-white p-8 rounded-sm shadow-sm text-left flex flex-col justify-between">
          <div>
            <Map className="w-8 h-8 text-[#00a8cc] mb-5" strokeWidth={1.5} />
            <h3 className="text-2xl font-normal text-gray-900 mb-3">
              Expert Guides
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Local experts who bring destinations to life with authentic cultural insights.
            </p>
          </div>
        </div>

        {/* কার্ড ৩: 24/7 Support */}
        <div className="bg-white p-8 rounded-sm shadow-sm text-left flex flex-col justify-between">
          <div>
            <Headset className="w-8 h-8 text-[#00a8cc] mb-5" strokeWidth={1.5} />
            <h3 className="text-2xl font-normal text-gray-900 mb-3">
              24/7 Support
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Round-the-clock customer service to assist you wherever your journey takes you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;