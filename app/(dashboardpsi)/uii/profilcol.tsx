'use client';
import Image from "next/image";
import { useState } from "react";

export default function ProfileCard() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={` rounded-lg ${isExpanded ? "bg-white" : ""}`}>
      <div className="bg-[#27374D] text-white flex justify-between items-center p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold">My Profile</h3>
        <div className="flex items-center space-x-2">
          <button className="p-2" onClick={toggleExpand}>
            <Image
              src={isExpanded ? "/icons/chevron-up.png" : "/icons/chevron-down.png"}
              alt="Chevron Icon"
              width={26}
              height={16}
            />
          </button>
          <button className="p-2">
            <Image src="/icons/edit.png" alt="Edit Icon" width={16} height={16} />
          </button>
        </div>
      </div>
      {/* Konten yang dikontrol oleh isExpanded */}
      {isExpanded && (
        <div className="flex items-center space-x-4 mt-4 p-4">
          <Image
            src="/images/cewe.png"
            alt="Profile Image"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div>
            <h2 className="text-[18px] font-bold">Isey S.Psi, M.Psi, Psychologist</h2>
            <div className="flex items-center space-x-2 mt-2">
              <Image src="/icons/location.png" alt="location" width={20} height={16} />
              <span className="text-gray-500">Bandung, Jawa Barat</span>
            </div>
            <div className="mt-2 flex items-center space-x-2 bg-[#B6CBE5] rounded-full px-5 py-2 w-[130px]">
              <Image src="/icons/suitcase.png" alt="Experience Icon" width={20} height={16} />
              <span className="text-sm font-medium">8 Tahun</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
