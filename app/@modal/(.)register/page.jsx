"use client";
import React from "react";
import Button from "./Button";
import { useSearchParams } from "next/navigation";

function RegisterModal() {
  //  If source=modal, show the modal view (intercepted route).
  // If not, return null so the intercepted route does not render and instead the original route (full page) is shown.
  // This pattern is commonly used when implementing intercepting routes in Next.js, especially with modals.
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  // Only render the intercepted version if source is 'modal'
  if (source !== "modal") {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center h-40 w-fit z-50 p-4 ">
      <div className="shadow-lg rounded-xl p-6 w-full max-w-md bg-white relative left-[98rem] top-56">
        <Button />
        <h1 className="text-2xl font-semibold text-center mb-6">Sign up</h1>
        <form className="flex flex-col space-y-4">
          <label  className="font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <label  className="font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <label className="font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition duration-200 my-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
