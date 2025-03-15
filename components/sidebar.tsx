import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SideBarItem from "./sidebar-item";

interface SideBarProps {
  className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <div className="w-fit">
        <Link href="/learn" className="flex items-center py-6">
          <Image
            src="/assets/images/logo.svg"
            alt="Duolingo Icon"
            width={180}
            height={42}
            className="prevent-copy"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <SideBarItem
          name="Learn"
          imageSrc="/assets/images/learn.svg"
          path="/learn"
        />
        <SideBarItem
          name="LEADERBOARD"
          imageSrc="/assets/images/leaderboard.svg"
          path="/leaderboard"
        />
        <SideBarItem
          name="QUESTS"
          imageSrc="/assets/images/quests.svg"
          path="/quests"
        />
        <SideBarItem
          name="SHOP"
          imageSrc="/assets/images/shop.svg"
          path="/shop"
        />
      </div>
    </div>
  );
};

export default SideBar;
