import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section: Welcome Message */}
      <div className="hidden lg:flex w-1/2 bg-black text-white items-center justify-center px-12">
        <div className="max-w-md text-center space-y-6">
          <h2 className="text-4xl font-extrabold">
            Welcome to Physics Tuition
          </h2>
          <p className="text-lg">
            Learn Physics with expert tutors. Improve your grades and knowledge
            with interactive lessons.
          </p>
        </div>
      </div>

      {/* Right Section: Form Content */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
