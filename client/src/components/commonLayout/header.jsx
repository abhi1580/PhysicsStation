import { commonHeaderLinks } from "@/config";
import React from "react";
import { Link } from "react-router-dom";

const CommonHeader = () => {
  // Navigation links for the header component
  const link = commonHeaderLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link to={link.path} className="hover:text-blue-300">
          {link.label}
        </Link>
      </li>
    );
  });
  return (
    <header className="bg-gray-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold">Physics Tuition Classes</h1>
        <nav>
          <ul className="flex space-x-6">{link}</ul>
        </nav>
      </div>
    </header>
  );
};

export default CommonHeader;
