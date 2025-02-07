import SideBar from "@/components/sidebar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SideBar />
      <main className="pl-[256px] h-full">
        <div className="bg-red-500 h-full">{children}</div>
      </main>
    </>
  );
}

export default MainLayout;
