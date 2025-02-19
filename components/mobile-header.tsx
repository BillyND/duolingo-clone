import React from "react";
import MobileSideBar from "./mobile-sidebar";

const MobileHeader = () => {
  return (
    <div className="lg:hidden h-[50px] px-6 fixed top-0 flex items-center justify-between bg-green-500 w-full z-50">
      <MobileSideBar />
    </div>
  );
};

export default MobileHeader;
