//common layout for all pages using tailwind css
import React from "react";
import { Outlet } from "react-router-dom";
import CommonHeader from "./header.jsx";
import CommonFooter from "./footer.jsx";

const CommonLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Common header */}
      <CommonHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <CommonFooter />
    </div>
  );
};

export default CommonLayout;
