"use client";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { SignedOut } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export default function MarketingPage() {
  const isMobile = useIsMobile();

  return (
    <div
      className={`p-4 w-full max-w-screen-lg items-center ${
        isMobile ? "flex flex-col" : "flex flex-row mx-auto"
      }`}
    >
      <div className="flex flex-1 w-full justify-center">
        <Image
          src="/assets/images/marketing-banner.png"
          alt="Duolingo Icon"
          width={424}
          height={424}
          className="prevent-copy"
        />
      </div>

      <div className="flex-1 w-full text-center">
        <h1 className="text-3xl font-bold mb-2">
          Free, fun, and effective way to learn a language!
        </h1>
        <div className="pt-5 flex flex-col items-center space-y-2">
          <Button variant={"secondary"}>Get Started</Button>
          <SignedOut>
            <SignInButton>
              <Button variant={"primaryOutline"}>
                I Already Have an Account
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
