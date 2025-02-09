import { cn } from "@/lib/utils";
import React from "react";

interface SideBarProps {
  className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
  return (
    <div
      className={cn(
        "flex h-full bg-blue-500 lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      Sidebar
    </div>
  );
};

export default SideBar;
