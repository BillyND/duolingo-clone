"use client";

import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useIsMobile } from "@/hooks/use-mobile";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

function MarketingLayout({ children }: MarketingLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        {children}
      </main>
      {!isMobile && <Footer />}
    </div>
  );
}

export default MarketingLayout;
