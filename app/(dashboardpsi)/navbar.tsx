'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { usePathname } from 'next/navigation'; 
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname(); 
  const isActive = (path: string) => pathname === path;
  return (
    <div>
      <div className="hidden lg:flex w-20 bg-gradient-to-b from-[#264065] to-[#B6CBE5] text-white flex-col justify-between items-center py-6 rounded-[10px] sticky top-0 ">
        <div className="flex flex-col items-center">
          <div className="text-[15px] font-semibold mb-6">Consulin</div>
          <div className="space-y-10 flex flex-col items-center">
            <Link href='/dashpsi'>
              <div className={`cursor-pointer flex items-center justify-center mt-10 w-12 h-12 ${isActive('/dashpsi') ? 'bg-[#DBE5F2]' : 'bg-transparent'} hover:bg-transparent transition rounded-lg`}>
                <Image src="/icons/home-alt.png" alt="Home" width={35} height={35} />
              </div>
            </Link>
            <Link href='/dashpsi/jadwal'>
              <div className={`cursor-pointer flex items-center justify-center w-12 h-12 ${isActive('/dashpsi/jadwal') ? 'bg-[#DBE5F2]' : 'bg-transparent'} hover:bg-transparent transition rounded-lg`}>
                <Image src="/icons/people.png" alt="Users" width={24} height={24} />
              </div>
            </Link>
            <Link href='/dashpsi/ketersediaan' prefetch={true}>
              <div className={`cursor-pointer flex items-center justify-center w-12 h-12 ${isActive('/dashpsi/ketersediaan') ? 'bg-[#DBE5F2]' : 'bg-transparent'} hover:bg-transparent transition rounded-lg`}>
                <Image src="/icons/calendar.png" alt="Calendar" width={24} height={24}/>
              </div>
            </Link>
            <Link href='/dashpsi/chat'>
              <div className={`cursor-pointer flex items-center justify-center w-12 h-12 ${isActive('/dashpsi/chat') ? 'bg-[#DBE5F2]' : 'bg-transparent'} hover:bg-transparent transition rounded-lg`}>
                <Image src="/icons/chat-alt.png" alt="Messages" width={24} height={24} />
              </div>
            </Link>
            <Link href='/dashpsi/edit'>
              <div className={`cursor-pointer flex items-center justify-center w-12 h-12 ${isActive('/dashpsi/edit') ? 'bg-[#DBE5F2]' : 'bg-transparent'} hover:bg-transparent transition rounded-lg mb-[100px]`}>
                <Image src="/icons/user.png" alt="Settings" width={24} height={24} />
              </div>
            </Link>
            
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="cursor-pointer flex items-center justify-center w-12 h-12 bg-transparent hover:bg-[#DBE5F2] transition ]">
                    <Image src="/icons/exit.png" alt="Exit Icon" width={24} height={24} />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to leave Consulin?</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex justify-between">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Link href="/">
                      <AlertDialogAction>Confirm</AlertDialogAction>
                    </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-[#27374D] text-white z-50 shadow-lg">
        <div className="text-[15px] font-semibold">Consulin</div>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#F5F5F7" />
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#27374D] flex flex-col items-center justify-center text-white gap-4 z-40">
          <Link href='/dashpsi' onClick={() => setOpen(false)}>
            <div className={`cursor-pointer flex items-center justify-center w-12 h-12 ${isActive('/dashpsi') ? 'bg-blue-500' : 'bg-transparent'}`}>
              <Image src="/icons/home-alt.png" alt="Home" width={35} height={35} />
            </div>
          </Link>
          <Link href='/dashpsi/jadwal' onClick={() => setOpen(false)}>
            <div className={`cursor-pointer flex items-center justify-center w-12 h-12 ${isActive('/dashpsi/jadwal') ? 'bg-blue-500' : 'bg-transparent'}`}>
              <Image src="/icons/people.png" alt="Users" width={24} height={24} />
            </div>
          </Link>
          <Link href='/dashpsi/ketersediaan' onClick={() => setOpen(false)}>
            <div className={`cursor-pointer flex items-center justify-center w-12 h-12 ${isActive('/dashpsi/ketersediaan') ? 'bg-blue-500' : 'bg-transparent'}`}>
              <Image src="/icons/calendar.png" alt="Calendar" width={24} height={24} />
            </div>
          </Link>
          <Link href='/dashpsi/chat' onClick={() => setOpen(false)}>
            <div className={`cursor-pointer flex items-center justify-center w-12 h-12 ${isActive('/dashpsi/chat') ? 'bg-blue-500' : 'bg-transparent'}`}>
              <Image src="/icons/chat-alt.png" alt="Messages" width={24} height={24} />
            </div>
          </Link>
          <Link href='/dashpsi/edit' onClick={() => setOpen(false)}>
            <div className={`cursor-pointer flex items-center justify-center w-12 h-12 ${isActive('/dashpsi/edit') ? 'bg-blue-500' : 'bg-transparent'}`}>
              <Image src="/icons/user.png" alt="Settings" width={24} height={24} />
            </div>
          </Link>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="cursor-pointer flex items-center justify-center w-12 h-12">
                <Image src="/icons/exit.png" alt="Exit Icon" width={24} height={24} />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to leave Consulin?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex justify-between">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Link href="/">
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          
        </div>
      )}
    </div>
  );
}
