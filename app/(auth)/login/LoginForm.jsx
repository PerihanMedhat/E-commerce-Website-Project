"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const email = formData.get("email");
      const password = formData.get("password");

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        toast.error('Invalid Email or Password');
      } else if (res?.ok) {
        toast.success("Login successfully");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err) {
      toast.error(err?.message || "An error occurred");
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-base  font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-3"
        >
          Login
        </button>
        <p className="text-center text-gray-500">or</p>
        <button
          onClick={() => {
            signIn("google", { redirect: true, callbackUrl: "/" });
          }}
          type="button"
          className="w-full cursor-pointer flex items-center justify-center gap-2 bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M533.5 278.4c0-17.4-1.6-34-4.6-50.1H272v95h146.9c-6.4 34.8-25.2 64.3-53.8 84.1v69.8h86.9c50.9-46.9 81.5-116 81.5-198.8z"
              fill="#4285F4"
            />
            <path
              d="M272 544.3c72.9 0 134.1-24.2 178.8-65.7l-86.9-69.8c-24.2 16.2-55.2 25.8-91.9 25.8-70.7 0-130.5-47.8-151.9-111.8H29v70.3C73.3 475.4 165.5 544.3 272 544.3z"
              fill="#34A853"
            />
            <path
              d="M120.1 322.8c-10.4-30.8-10.4-64.2 0-95l-91.1-70.4C-8.7 225.6-8.7 318.7 29 392.8l91.1-70z"
              fill="#FBBC05"
            />
            <path
              d="M272 107.7c39.6 0 75.3 13.6 103.5 40.3l77.6-77.6C406 24.2 344.9 0 272 0 165.5 0 73.3 68.9 29 172.5l91.1 70.4C141.5 155.5 201.3 107.7 272 107.7z"
              fill="#EA4335"
            />
          </svg>
          <span>Sign in with Google</span>
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
