import React from 'react';
import { 
  Camera, 
  MapPin, 
  SquarePen, 
  PlaneTakeoff, 
  Globe2, 
  TrendingUp, 
  DollarSign 
} from 'lucide-react';

const MyProfile = () => {
  return (
    <section className="bg-white min-h-screen py-12 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* হেডার সেকশন */}
        <div className="mb-10">
          <h1 className="text-4xl font-normal text-gray-900 mb-2 tracking-tight">
            My Profile
          </h1>
          <p className="text-sm md:text-base text-gray-500">
            Manage your account settings and travel preferences
          </p>
        </div>

        {/* মেইন কন্টেন্ট লেআউট (ফ্লেক্স/গ্রিড) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* বাম পাশের প্রোফাইল কার্ড */}
          <div className="w-full lg:w-[340px] bg-white border border-gray-100 shadow-md p-6 flex flex-col items-center rounded-sm">
            
            {/* প্রোফাইল ইমেজ ও ক্যামেরা আইকন */}
            <div className="relative w-32 h-32 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" 
                alt="Sarah Mitchell" 
                className="w-full h-full object-cover rounded-full shadow-inner"
              />
              <button className="absolute bottom-1 right-1 bg-[#10a3c2] hover:bg-[#0e8ea9] text-white p-2 rounded-full border-2 border-white transition-colors shadow-sm">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* নাম ও লোকেশন */}
            <h2 className="text-xl font-medium text-gray-900 mb-1">
              Sarah Mitchell
            </h2>
            <div className="flex items-center gap-1 text-gray-400 mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">San Francisco, CA</span>
            </div>

            {/* ইউজার ডিটেইলস ইনফো */}
            <div className="w-full border-t border-gray-100 pt-5 space-y-3 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Member since</span>
                <span className="font-medium text-gray-900">Mar 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Nationality</span>
                <span className="font-medium text-gray-900">United States</span>
              </div>
            </div>

            {/* এডিট প্রোফাইল বাটন */}
            <button className="w-full bg-[#10a3c2] hover:bg-[#0e8ea9] text-white py-3 px-4 flex items-center justify-center gap-2 rounded-sm text-sm font-medium transition-colors">
              <SquarePen className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          {/* ডান পাশের স্ট্যাটিস্টিকস সেকশন */}
          <div className="flex-1 w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4 tracking-tight">
              Travel Statistics
            </h3>
            
            {/* ২*২ গ্রিড কার্ডস */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* স্ট্যাট ১: Total Bookings */}
              <div className="bg-white border border-gray-100 p-6 flex justify-between items-center shadow-sm rounded-sm">
                <div>
                  <span className="text-xs font-normal text-gray-400 block mb-1">Total Bookings</span>
                  <span className="text-2xl font-medium text-gray-900">12</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                  <PlaneTakeoff className="w-5 h-5" strokeWidth={1.5} />
                </div>
              </div>

              {/* স্ট্যাট ২: Countries Visited */}
              <div className="bg-white border border-gray-100 p-6 flex justify-between items-center shadow-sm rounded-sm">
                <div>
                  <span className="text-xs font-normal text-gray-400 block mb-1">Countries Visited</span>
                  <span className="text-2xl font-medium text-gray-900">18</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <Globe2 className="w-5 h-5" strokeWidth={1.5} />
                </div>
              </div>

              {/* স্ট্যাট ৩: Upcoming Trips */}
              <div className="bg-white border border-gray-100 p-6 flex justify-between items-center shadow-sm rounded-sm">
                <div>
                  <span className="text-xs font-normal text-gray-400 block mb-1">Upcoming Trips</span>
                  <span className="text-2xl font-medium text-gray-900">2</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-400">
                  <TrendingUp className="w-5 h-5" strokeWidth={1.5} />
                </div>
              </div>

              {/* স্ট্যাট ৪: Total Spent */}
              <div className="bg-white border border-gray-100 p-6 flex justify-between items-center shadow-sm rounded-sm">
                <div>
                  <span className="text-xs font-normal text-gray-400 block mb-1">Total Spent</span>
                  <span className="text-2xl font-medium text-gray-900">$15,750</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-fuchsia-50 flex items-center justify-center text-fuchsia-400">
                  <DollarSign className="w-5 h-5" strokeWidth={1.5} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyProfile;