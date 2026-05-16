"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/dastination" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/add-destination" },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // session ডেটা ফেচ করা
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Hydration এরর হ্যান্ডেল করার জন্য
  

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  
  

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        
        {/* LEFT NAV (Desktop) */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium px-3 py-2 rounded-md text-gray-600 hover:text-sky-500 hover:bg-sky-50"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* LOGO */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold text-sky-500"
        >
          Wanderlast
        </Link>

        {/* RIGHT (Auth Logic) */}
        <div className="hidden md:flex items-center gap-3">
          {isPending ? (
            <p className="text-sm text-gray-400">Checking...</p>
          ) : user ? (
            /* ✅ ইউজার লগইন থাকলে প্রোফাইল ও সাইন-আউট দেখাবে */
            <div className="flex items-center gap-4">
              <Link href="/profile" className="flex items-center gap-2">
                <Avatar className="w-9 h-9 border border-gray-100">
                  <AvatarImage src={user?.image || ""} alt={user?.name} />
                  <AvatarFallback className="bg-sky-100 text-sky-600 text-xs">
                    {user?.name?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700">
                  {user?.name}
                </span>
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition text-xs font-semibold"
              >
                Sign Out
              </button>
            </div>
          ) : (
            /* ✅ ইউজার লগইন না থাকলে লগইন ও সাইন-আপ দেখাবে */
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm text-gray-600 hover:text-sky-500 font-medium">
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition text-sm font-semibold"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-5 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 font-semibold"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="h-px bg-gray-100 my-1" />

          {user ? (
            <div className="flex flex-col gap-3">
               <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8"><AvatarImage src={user?.image} /></Avatar>
                  <span className="text-sm font-medium">{user?.name}</span>
               </div>
               <button onClick={handleLogout} className="text-left text-red-500 text-sm font-bold">
                 Sign Out
               </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
               <Link href="/login" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 font-semibold">Login</Link>
               <Link href="/signup" onClick={() => setMenuOpen(false)} className="text-sm text-sky-500 font-bold">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}