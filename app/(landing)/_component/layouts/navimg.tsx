"use client";
import { useState } from "react";
import { Button } from "@/components/button";
import Link from "next/link";
import Image from "next/image";

export default function Navimg() {
  const [selectedLink, setSelectedLink] = useState<string>(""); // State to track the active button
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const handleClick = (linkId: string) => {
    setSelectedLink(linkId); // Set the active link
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <nav className="bg-white fixed top-0 right-0 left-0 z-50">
      <div className="flex items-center p-2 container mx-auto px-5 md:px-24 justify-between">
        <div className="flex items-center gap-5">
          <Image
            src="/images/logo.png"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="logo consulin"
          />
          
          {/* Display Home Button only on large screens */}
          <div className="hidden lg:block">
            <Link href="/">
              <Button
                onClick={() => handleClick("home")} // Handle click to set the active link
                className={`bg-transparent hover:bg-blue-100 rounded-3xl text-sm ${
                  selectedLink === "home" ? "bg-blue-900 text-white" : "text-gray-800"
                }`}
              >
                Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Hamburger Button for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        <div className="hidden lg:flex gap-3 items-center">
          <Link href="/rolelog">
            <Button
              onClick={() => handleClick("login")} // Handle click to set the active link
              className={`bg-transparent hover:bg-blue-100 rounded-3xl text-sm ${
                selectedLink === "login" ? "bg-[#27374D] text-white hover:bg-[#27374D]"
                  : "bg-transparent text-gray-800 hover:bg-transparent"
              }`}
            >
              Login
            </Button>
          </Link>
          <Link href="/Role">
            <Button
              onClick={() => handleClick("register")} // Handle click to set the active link
              className={`bg-transparent hover:bg-blue-100 rounded-3xl text-sm ${
                selectedLink === "register" ? "bg-[#27374D] text-white hover:bg-[#27374D]"
                  : "bg-transparent text-gray-800 hover:bg-transparent"
              }`}
            >
              Register
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col">
          <div className="absolute top-5 right-5">
            <button onClick={() => setIsOpen(false)} className="text-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <Link href="/">
              <Button
                onClick={() => handleClick("home")}
                className={`bg-transparent hover:bg-blue-100 rounded-3xl text-sm ${
                  selectedLink === "home" ? "bg-[#27374D] text-white" : "text-gray-800"
                }`}
              >
                Home
              </Button>
            </Link>
            <Link href="/Role">
              <Button
                onClick={() => handleClick("register")}
                className={`bg-transparent hover:bg-blue-100 rounded-3xl text-sm ${
                  selectedLink === "register" ? "bg-[#27374D] text-white" : "text-gray-800"
                }`}
              >
                Register
              </Button>
            </Link>
            <Link href="/rolelog">
              <Button
                onClick={() => handleClick("login")}
                className={`bg-transparent hover:bg-blue-100 rounded-3xl text-sm ${
                  selectedLink === "login" ? "bg-[#27374D] text-white" : "text-gray-800"
                }`}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
