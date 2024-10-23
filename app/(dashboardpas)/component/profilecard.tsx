'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ProfileCardPasien() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-[10px] shadow-md max-w-[95%] mx-auto sm:max-w-md">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] text-white flex justify-between items-center p-4 sm:p-6 rounded-[10px]">
        <h3 className="text-lg sm:text-xl font-semibold">My Profile</h3>
        <div className="flex items-center space-x-2">
          <button className="p-2" onClick={toggleExpand}>
            <Image
              src={isExpanded ? "/icons/chevron-up.png" : "/icons/chevron-down.png"}
              alt="Chevron Icon"
              width={26}
              height={16}
            />
          </button>
          <Link href="/dashpas/edit">
            <button className="p-2">
              <Image src="/icons/edit.png" alt="Edit Icon" width={16} height={16} />
            </button>
          </Link>
        </div>
      </div>

      {/* Profile Content Section with smooth CSS transition */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        <div className="p-4 sm:p-6">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="relative">
              <Image
                src="/images/cowomono.png"
                alt="Profile Image"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>

            {/* Name and Information */}
            <h2 className="text-[18px] sm:text-[20px] font-bold mt-4 text-center">Alvito</h2>
            
            {/* Phone */}
            <div className="flex items-center space-x-2 mt-2">
              <Image src="/icons/phone.png" alt="Phone Icon" width={20} height={16} />
              <span className="text-gray-500 text-sm sm:text-base">081381776555</span>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 mt-2">
              <Image src="/icons/location.png" alt="Location Icon" width={20} height={16} />
              <span className="text-gray-500 text-sm sm:text-base">Bandung, Jawa Barat</span>
            </div>

            {/* Age and Weight Section */}
            <div className="flex justify-center items-center mt-4 w-full">
              <div className="text-center">
                <h4 className="text-[18px] font-bold">20</h4>
                <p className="text-sm text-gray-500">Tahun</p>
              </div>

              {/* Vertical Line */}
              <div className="mx-4 h-10 border-l border-gray-300"></div>

              <div className="text-center">
                <h4 className="text-[18px] font-bold">-</h4>
                <p className="text-sm text-gray-500">Kilogram</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
