// React component for page not found
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 text-lg">
        The page you are looking for might have been removed or does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg text-lg hover:bg-red-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
