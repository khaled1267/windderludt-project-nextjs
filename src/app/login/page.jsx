"use client";
import React from 'react';
import { Mail, Lock } from 'lucide-react';


import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
   const router = useRouter();
  
    // SIGNUP HANDLER
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      const user = Object.fromEntries(formData.entries());
  
      // PASSWORD MATCH CHECK
      if (user.password !== user.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      try {
        // CREATE ACCOUNT
        const { error } = await authClient.signUp.email({
          name: user.name,
          email: user.email,
          password: user.password,
          image: user.image,
          callbackURL: "/",
        });
  
        if (error) {
          alert(error.message || "Signup failed!");
          return;
        }
  
        // IMPORTANT FIX (session update)
        router.refresh();
        router.push("/");
  
      } catch (err) {
        console.log(err);
        alert("Something went wrong!");
      }
    };
  
    // GOOGLE LOGIN FIX
    const handleGoogleLogin = async () => {
      try {
        const { error } = await authClient.signIn.social({
          provider: "google",
          callbackURL: "/",
        });
  
        if (error) {
          alert(error.message || "Google login failed!");
          return;
        }
  
        // IMPORTANT FIX
        router.refresh();
        router.push("/");
  
      } catch (err) {
        console.log(err);
        alert("Google login failed!");
      }
    };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-500">Resume your adventure with Wanderlust</p>
      </div>

      {/* Sign In Card */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500" />
              Remember me
            </label>
            <a href="#" className="text-sm text-cyan-500 hover:underline">Forgot password?</a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#1da1f2] hover:bg-[#1a91da] text-white font-medium py-3 rounded transition duration-200 shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Sign In */}
        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 border border-gray-200 py-3 rounded hover:bg-gray-50 transition duration-200 text-gray-700 font-medium">
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="Google" 
            className="w-5 h-5"
          />
          Sign In With Google
        </button>

        {/* Footer Link */}
        <p className="mt-8 text-center text-gray-500 text-sm">
          Do not have an account? <a href="#" className="text-cyan-500 font-bold hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;