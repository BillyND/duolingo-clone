import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
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
            className="prevent-copy"
          />
        </Link>
        <div>
          <ClerkLoading>
            <Skeleton className="h-8 w-8 rounded-full" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl={"/learn"}>
                <Button variant={"secondaryOutline"}>Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
