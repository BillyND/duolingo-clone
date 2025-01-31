import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="h-20 border-b-2 flex justify-between items-center p-4">
      <div className="flex justify-between mx-auto items-center w-full max-w-screen-lg">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.svg"
            alt="Duolingo Icon"
            width={180}
            height={42}
            className="mr-2"
          />
          {/* <span className="text-green-600 font-bold">Duolingo</span> */}
        </Link>
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
      </div>
    </header>
  );
}

export default Header;
