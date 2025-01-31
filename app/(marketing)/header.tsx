import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

function Header() {
  return (
    <header className="h-20 border-b-2 flex justify-between items-center p-4">
      <div className="flex items-center">
        <Image
          src="/assets/images/web-icon.png"
          alt="Duolingo Icon"
          width={32}
          height={32}
          className="mr-2"
        />
        <span className="text-green-600 font-bold">Duolingo</span>
      </div>
      <div>
        <SignedOut>
          <SignInButton>
            <Button variant={"secondary"}>Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
