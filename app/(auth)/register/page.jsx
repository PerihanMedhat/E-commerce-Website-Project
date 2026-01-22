import React from "react";
import RegisterForm from "./RegisterForm";
export const metadata = {
  title: "Register",
};

function Register() {
  return (
    <div className="shadow-xl rounded-xl p-6 mt-14 max-w-md mx-5 md:mx-auto bg-white">
      <h1 className="text-2xl font-semibold text-center mb-6">Sign up</h1>
      <RegisterForm />
      <p className=" text-sm text-center text-gray-500">
        Already have an account?
        <a
          href="/login"
          className="text-blue-600 mx-2 hover:underline cursor-pointer"
        >
          Login
        </a>
      </p>
    </div>
  );
}

export default Register;
