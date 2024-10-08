import { Button } from "@/components/button";
import Link from "next/link";
import Image from "next/image";
export default function Navimg() {
  return (
    <nav className="bg-white fixed top-0 right-0 left-0 z-50 shadow-md">
      <div className="flex items-center p-2 container mx-auto px-5 md:px-24 justify-between z-50">
        <div className="flex items-center gap-5">
                <Image
                src="/images/logo.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                alt="logo consulin"
                />
          <Link href="/">
            <Button className="bg-transparent text-[#] hover:bg-blue-100 rounded-3xl text-sm">
              Home
            </Button>
          </Link>
        </div>
        <div className="hidden lg:flex gap-3 text-[#] items-center">
          <Link href="/rolelog"> 
            <Button className="bg-transparent text-[#] hover:bg-blue-100 rounded-3xl text-sm">
              Login
            </Button>
          </Link>
          <Link href="/Role"> 
            <Button className="bg-transparent text-[#] hover:bg-blue-100 rounded-3xl text-sm">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
