"use client";

import React from "react";
import { User, Mail, Lock, Image as ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignupPage = () => {
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

      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light text-gray-800 mb-2">
          Create Account
        </h1>
        <p className="text-gray-500">
          Start your adventure with Wanderlust
        </p>
      </div>

      {/* FORM BOX */}
      <div className="bg-white p-8 rounded-lg shadow-sm border w-full max-w-md">

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded"
          />

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded"
          />

          {/* IMAGE */}
          <input
            name="image"
            placeholder="Image URL"
            className="w-full p-3 border rounded"
          />

          {/* PASSWORD */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border rounded"
          />

          {/* CONFIRM PASSWORD */}
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            className="w-full p-3 border rounded"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
          >
            Create Account
          </button>

        </form>

        {/* DIVIDER */}
        <div className="my-5 text-center text-gray-400">
          OR
        </div>

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border py-3 rounded hover:bg-gray-50"
        >
          Sign Up With Google
        </button>

        {/* FOOTER */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 font-medium">
            Login
          </a>
        </p>

      </div>
    </div>
  );
};

export default SignupPage;