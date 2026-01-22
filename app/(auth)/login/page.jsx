import React from "react";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="shadow-xl rounded-xl p-6 mt-14 max-w-md mx-5 md:mx-auto bg-white ">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Login
      </h1>
      <LoginForm />
      <p className="mt-4 text-sm text-center text-gray-500">
        Don't have an account?
        <a
          href="/register"
          className="text-blue-600 mx-2 hover:underline cursor-pointer"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}

export default Login;
