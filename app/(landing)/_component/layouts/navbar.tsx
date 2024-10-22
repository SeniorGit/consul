"use client";
import { useState } from "react";
import { Button } from "@/components/button";
import Link from "next/link";
import Image from "next/image";

export interface LinkProps {
  href: string;
  title: string;
  id: string;
}

const links: LinkProps[] = [
  {
    href: "#hero",
    title: "Dashboard",
    id: "hero",
  },
  {
    href: "#discover",
    title: "Our Service",
    id: "discover",
  },
  {
    href: "#kontak",
    title: "Contact Us",
    id: "kontak",
  },
];

export default function Navbar() {
  const [selectedLink, setSelectedLink] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state

  const handleClick = (id: string) => {
    setSelectedLink(id);
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-white fixed top-0 right-0 left-0 z-50">
      <div className="flex items-center p-2 container mx-auto px-5 md:px-24 justify-between z-50">
        <div className="flex items-center gap-3">
          <div className="overflow-hidden w-[40px] md:w-[80px] z-50 mr-[50px]">
            <Image
              src="/images/logo.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              alt="logo consulin"
            />
          </div>
          <div className="hidden lg:flex gap-3 items-center ml-4">
            {links.map((link) => (
              <Link key={link.id} href={link.href}>
                <Button
                  onClick={() => handleClick(link.id)}
                  className={`text-sm rounded-3xl ${
                    selectedLink === link.id
                      ? "bg-[#27374D] text-white hover:bg-[#27374D]"
                      : "bg-transparent text-gray-800 hover:bg-transparent"
                  }`}
                >
                  {link.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex gap-3 items-center">
          <Link href="/Role">
            <Button
              onClick={() => handleClick("register")}
              className={`text-sm rounded-3xl ${
                selectedLink === "register"
                  ? "bg-[#27374D] text-white hover:bg-[#27374D]"
                  : "bg-transparent text-gray-800 hover:bg-transparent"
              }`}
            >
              Register
            </Button>
          </Link>
          <Link href="/rolelog">
            <Button
              onClick={() => handleClick("login")}
              className={`text-sm rounded-3xl ${
                selectedLink === "login"
                  ? "bg-[#27374D] text-white hover:bg-[#27374D]"
                  : "bg-transparent text-gray-800 hover:bg-transparent"
              }`}
            >
              Login
            </Button>
          </Link>
        </div>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            {links.map((link) => (
              <Link key={link.id} href={link.href}>
                <Button
                  onClick={() => handleClick(link.id)}
                  className={`text-sm rounded-3xl ${
                    selectedLink === link.id
                      ? "bg-[#27374D] text-white hover:bg-[#27374D]"
                      : "bg-transparent text-gray-800 hover:bg-transparent"
                  }`}
                >
                  {link.title}
                </Button>
              </Link>
            ))}
            <Link href="/Role">
              <Button
                onClick={() => handleClick("register")}
                className={`text-sm rounded-3xl ${
                  selectedLink === "register"
                    ? "bg-[#27374D] text-white hover:bg-[#27374D]"
                  : "bg-transparent text-gray-800 hover:bg-transparent"
                }`}
              >
                Register
              </Button>
            </Link>
            <Link href="/rolelog">
              <Button
                onClick={() => handleClick("login")}
                className={`text-sm rounded-3xl ${
                  selectedLink === "login"
                    ? "bg-[#27374D] text-white hover:bg-[#27374D]"
                    : "bg-transparent text-gray-800 hover:bg-transparent"
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
