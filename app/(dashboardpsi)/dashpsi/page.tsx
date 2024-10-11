'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "../navbar";
import ProfileCard from "../uii/profilcol";

export default function Dashboardpsi() {
  const [currentTime, setCurrentTime] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateTimeAndGreeting = () => {
      const now = new Date();
      const hour = now.getHours();

      // Dynamic greeting logic
      const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}`;

      // Update greeting
      setGreeting(wish);

      // Date and time formatting
      const optionsw = {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formattedTime = now.toLocaleDateString("en-GB", optionsw);
      setCurrentTime(formattedTime);
    };

    updateTimeAndGreeting();
    const timer = setInterval(updateTimeAndGreeting, 1000); // Update time every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <section className="flex min-h-screen bg-[#d2e2f0] p-5">
      {/* Sidebar */}
      <div className="sm:block w-20 md:w-24 lg:w-20 h-full">
        {/* Hide sidebar on small screens */}
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="w-full sm:flex-1 p-5 h-full mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="py-4 px-4 md:px-10 lg:px-20 lg:col-span-2 bg-[#27374D] text-white p-5 rounded-lg flex flex-col lg:flex-row items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{greeting} 👋</h1>
              <p className="mt-2 md:mt-4">Welcome Isey S.Psi, M.Psi, Psychologist</p>
              <div className="mt-4 md:mt-6 text-black text-sm bg-[#B6CBE5] rounded-[5px] p-2 inline-flex items-center">
                <Image src="/icons/calendar.png" alt="Calendar" width={24} height={24} className="inline-block mr-2" />
                {currentTime}
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <Image src="/images/user.png" alt="Profile Avatar" width={150} height={150} className="rounded-full lg:w-[250px] lg:h-[250px]" />
            </div>
          </div>
          <ProfileCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
          <div className="lg:col-span-2 mt-8">
            <div className="bg-white shadow-lg rounded-lg">
              <div className="bg-[#27374D] text-white p-4 rounded-[10px]">
                <h3 className="text-lg md:text-xl font-bold">Your Appointment</h3>
              </div>
              <div className="flex flex-col md:flex-row justify-between p-5 space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col items-center">
                  <div className="p-2 inline-flex">
                    <Image src="/icons/pep.png" alt="Patient Icon" width={50} height={50} className="md:w-[65px] md:h-[65px]" />
                    <span className="font-semibold text-[16px] md:text-[20px] ml-2 md:ml-3">
                      Patient
                      <p>0</p>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 inline-flex">
                    <Image src="/icons/ti.png" alt="Scheduled Icon" width={50} height={50} className="md:w-[65px] md:h-[65px]" />
                    <span className="font-semibold text-[16px] md:text-[20px] ml-2 md:ml-3">
                      Scheduled
                      <p>0</p>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 inline-flex">
                    <Image src="/icons/cek.png" alt="Completed Icon" width={50} height={50} className="md:w-[65px] md:h-[65px]" />
                    <span className="font-semibold text-[16px] md:text-[20px] ml-2 md:ml-3">
                      Completed
                      <p>0</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
