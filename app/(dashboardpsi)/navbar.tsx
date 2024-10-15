'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {/* Sidebar for larger screens */}
      <div className="hidden md:flex w-20 bg-[#27374D] text-white flex-col justify-between items-center py-6 rounded-[10px]">
        <div className="flex flex-col items-center">
          <div className="text-[15px] font-semibold mb-6">Consulin</div>
          <div className="space-y-10 flex flex-col items-center">
            <Link href='/dashpsi'>
              <Button className="cursor-pointer flex items-center justify-center mt-10 w-12 h-12 bg-[#27374D] hover:bg-[#DBE5F2] transition">
                <Image src="/icons/home-alt.png" alt="Home" width={35} height={35} />
              </Button>
            </Link>
            <Link href='/jadwal'>
              <Button className="cursor-pointer flex items-center justify-center w-12 h-12 bg-[#27374D] hover:bg-[#DBE5F2] transition">
                <Image src="/icons/people.png" alt="Users" width={24} height={24} />
              </Button>
            </Link>
            <Button className="cursor-pointer flex items-center justify-center w-12 h-12 bg-[#27374D] hover:bg-[#DBE5F2] transition">
              <Link href='/ketersediaan'>
                <Image src="/icons/calendar.png" alt="Calendar" width={24} height={24}/>
<<<<<<< HEAD
<<<<<<< HEAD
              </Button>
            </Link>
            <Link href='/chat'>
              <Button className="cursor-pointer flex items-center justify-center w-12 h-12 bg-[#27374D] hover:bg-[#DBE5F2] transition">
=======
=======
>>>>>>> parent of 2db09c3 (tambah fitur)
              </Link>
            </Button>
            <Button className="cursor-pointer flex items-center justify-center w-12 h-12 bg-[#27374D] hover:bg-[#DBE5F2] transition">
              <Link href='/chat'>
<<<<<<< HEAD
>>>>>>> parent of 2db09c3 (tambah fitur)
=======
>>>>>>> parent of 2db09c3 (tambah fitur)
                <Image src="/icons/chat-alt.png" alt="Messages" width={24} height={24} />
              </Link>
            </Button>
            <Button className="cursor-pointer flex items-center justify-center w-12 h-12 bg-[#27374D] hover:bg-[#DBE5F2] transition">
              <Link href='/edit'>
                <Image src="/icons/user.png" alt="Settings" width={24} height={24} />
              </Link>
            </Button>
            <Button className="cursor-pointer flex items-center justify-center w-12 h-12 bg-[#27374D] hover:bg-[#DBE5F2] transition">
              <Link href='/'>
                <Image src="/icons/sun.png" alt="Settings" width={24} height={24} />
              </Link>
            </Button>
          </div>
        </div>
        <Link href="/">
          <div className="cursor-pointer flex items-center justify-center mt-6 w-12 h-12">
            <Image src="/icons/exit.png" alt="Exit Icon" width={24} height={24} />
          </div>
        </Link>
      </div>

      {/* Hamburger for smaller screens */}
      <div className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-[#27374D] text-white z-50 shadow-lg">
        <div className="text-[15px] font-semibold">Consulin</div>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#F5F5F7" />
      </div>

      {/* Hamburger Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#27374D] flex flex-col items-center justify-center text-white gap-4 z-40">
          <Link href='/dashpsi' onClick={() => setOpen(false)}>
            <Button className="cursor-pointer flex items-center justify-center w-12 h-12">
              <Image src="/icons/home-alt.png" alt="Home" width={35} height={35} />
            </Button>
          </Link>
          <Link href='/jadwal' onClick={() => setOpen(false)}>
            <Button className="cursor-pointer flex items-center justify-center w-12 h-12">
              <Image src="/icons/people.png" alt="Users" width={24} height={24} />
            </Button>
          </Link>
          <Link href='/ketersediaan' onClick={() => setOpen(false)}>
            <Button className="cursor-pointer flex items-center justify-center w-12 h-12">
              <Image src="/icons/calendar.png" alt="Calendar" width={24} height={24} />
            </Button>
          </Link>
          <Link href='/chat' onClick={() => setOpen(false)}>
            <Button className="cursor-pointer flex items-center justify-center w-12 h-12">
              <Image src="/icons/chat-alt.png" alt="Messages" width={24} height={24} />
            </Button>
          </Link>
          <Link href='/edit' onClick={() => setOpen(false)}>
            <Button className="cursor-pointer flex items-center justify-center w-12 h-12">
              <Image src="/icons/user.png" alt="Settings" width={24} height={24} />
            </Button>
          </Link>
          <Link href='/' onClick={() => setOpen(false)}>
            <Button className="cursor-pointer flex items-center justify-center w-12 h-12">
              <Image src="/icons/sun.png" alt="Settings" width={24} height={24} />
            </Button>
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            <div className="cursor-pointer flex items-center justify-center w-12 h-12">
              <Image src="/icons/exit.png" alt="Exit Icon" width={24} height={24} />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}