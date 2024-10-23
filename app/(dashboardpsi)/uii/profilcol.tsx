'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function ProfileCard() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-[10px] shadow-md max-w-[95%] mx-auto sm:max-w-md">
      {/* Header Section */}
      <div className="bg-[#27374D] text-white flex justify-between items-center p-4 sm:p-6 rounded-[10px]">
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
          <Link href="/dashpsi/edit">
            <button className="p-2">
              <Image src="/icons/edit.png" alt="Edit Icon" width={16} height={16} />
            </button>
          </Link>
        </div>
      </div>

      {/* Profile Content Section with smooth CSS transition */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <div className="p-4 sm:p-6">
          <div className="flex flex-col items-center">
            {/* Profile Image with Green Circle */}
            <div className="relative">
              <Image
                src="/images/cewe.png"
                alt="Profile Image"
                width={80}
                height={80}
                className="rounded-full"
              />
              {/* Green circle indicating availability */}
              <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-white border-2 rounded-full"></span>
            </div>

            {/* Name and Specialization */}
            <h2 className="text-[18px] sm:text-[20px] font-bold mt-4 text-center">Isey S.Psi, M.Psi, Psychologist</h2>
            <p className="text-gray-500 text-sm sm:text-base">Psikolog Klinis Dewasa</p>

            {/* Location */}
            <div className="flex items-center space-x-2 mt-2">
              <Image src="/icons/location.png" alt="Location Icon" width={20} height={16} />
              <span className="text-gray-500 text-sm sm:text-base">Bandung, Jawa Barat</span>
            </div>
            <p className="text-gray-500 text-sm sm:text-base mt-1">17776555-903765</p>
          </div>

          {/* Bidang Ahli */}
          <div className="mt-4 text-left sm:ml-[60px]">
            <p className="text-gray-500">Bidang Ahli</p>
            <div className="flex flex-wrap items-center space-x-6 px-4 py-2 mt-2">
              <p className="font-bold text-sm sm:text-base">Stress</p>
              <p className="font-bold text-sm sm:text-base">Anxiety</p>
              <p className="font-bold text-sm sm:text-base">Depresi</p>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-4 sm:ml-[60px]">
            <p className="text-sm sm:text-base text-gray-500">Pengalaman</p>
            <div className="flex items-center space-x-2 px-4 py-2 mt-2">
              <Image src="/icons/suitcaseb.png" alt="Experience Icon" width={20} height={16} />
              <span className="text-sm sm:text-base font-medium">8 Tahun</span>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-4 sm:ml-[60px]">
            <p className="text-sm sm:text-base font-medium text-gray-500">Set Available</p>
            <div className="flex items-center space-x-2 px-4 py-2 mt-2">
            <Image src="/icons/calendarb.png" alt="Experience Icon" width={20} height={16} />
              <p className="text-sm sm:text-base font-medium">9:00 AM - 12:00 AM</p>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <p className="text-sm sm:text-base font-medium">Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
