"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface SideBarItemProps {
  name: string;
  imageSrc: string;
  path: string;
}

function SideBarItem({ name, imageSrc, path }: SideBarItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === path;

  console.log("===>pathname", pathname);

  return (
    <div>
      <Button
        className="w-full flex items-center justify-start gap-2"
        variant={isActive ? "primaryOutline" : "default"}
        onClick={() => {
          router.push(path);
        }}
      >
        <Image src={imageSrc} alt={name} width={32} height={32} />
        <span>{name}</span>
      </Button>
    </div>
  );
}

export default SideBarItem;
