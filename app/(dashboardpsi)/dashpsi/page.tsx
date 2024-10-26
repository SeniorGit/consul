'use client';
import Image from 'next/image';
import Sidebar from '../navbar'; // Assuming you have a sidebar component already
import { Availability } from '../uii/avai';
import React from 'react';
import DonutChart from '../uii/dunutchart';
import ProfileCard from '../uii/profilcol';
import Link from 'next/link';
export default function Dashboardpsi() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#DBE5F2] from-10% flex flex-col lg:flex-row p-5 pt-[50px] gap-7">
      <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 p-6 flex flex-col lg:flex-row lg:gap-6 gap-6">
        {/* Left Side: Good Morning Section and Appointments */}
        <div className="lg:w-2/3 w-full space-y-6">
          {/* Good Morning Section */}
          <h2 className="text-xl font-bold mb-4">Dashboard Psychologist</h2>
          <div className="bg-gradient-to-r from-[#264065] to-[#B6CBE5] text-white p-6 rounded-lg flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-3xl font-bold">Good Morning 👋</h1>
              <p className="mt-2">
                Have a nice day and don't forget to take care of your health!
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Image src="/icons/location.png" alt="Location Icon" width={20} height={16} />
                <span className="text-white text-sm">Bandung, Jawa Barat</span>
              </div>
            </div>
            <div>
              <Image
                src="/images/cewe.png"
                alt="Profile"
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Your Appointment Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Your Appointment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Patient Card */}
              <Link href="/dashpsi/jadwal">
                <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center border-[2px] border-blue-200">
                  <div>
                    <h3 className="font-semibold text-lg text-center">Patient</h3>
                    <div className="flex items-center justify-center">
                      <DonutChart />
                    </div>
                    <p className="text-blue-500 text-center mt-2">20 Patients</p>
                  </div>
                </div>
              </Link>

             <Link href="/dashpsi/jadwal">
                <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center border-[2px] border-blue-200">
                  <div>
                    <h3 className="font-semibold text-lg text-center">Scheduled</h3>
                    <div className="flex items-center justify-center mt-2">
                      <Image src="/icons/jam.png" alt="Scheduled" width={80} height={80} />
                    </div>
                    <p className="text-blue-500 text-center mt-2">18 Patients</p>
                  </div>
                </div>
             </Link>

              <Link href="/dashpsi/jadwal">
                <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center border-[2px] border-blue-200">
                  <div>
                    <h3 className="font-semibold text-lg text-center">Completed</h3>
                    <div className="flex items-center justify-center mt-2">
                      <Image src="/icons/cek.png" alt="Completed" width={80} height={80} />
                    </div>
                    <p className="text-blue-500 text-center mt-2">2 Patients</p>
                  </div>
                </div>
             </Link>
            </div>
          </div>

          {/* Patient Cards Section */}
          <div>
            {/* Show More Section */}
            <div className="flex justify-start mb-4">
              <button className="text-blue-600 font-semibold">Show more</button>
            </div>

            {/* First Appointment - Alvito */}
            <div className="bg-[#D9E3F3] text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              {/* Date Tag */}
              <div className="flex items-center space-x-2">
                <div className="bg-white text-[#264065] rounded-l-full p-2 px-4">
                  <p className="font-semibold">12 Okt</p>
                </div>

                {/* Profile Picture */}
                <div className="rounded-full overflow-hidden w-12 h-12">
                  <img src="/images/cowomono.png" alt="Alvito" className="object-cover w-full h-full" />
                </div>

                {/* Patient Information */}
                <div>
                  <h3 className="text-lg font-semibold">Alvito</h3>
                  <p>Bandung, Jawa Barat</p>
                </div>
              </div>

              {/* Accept/Reject Buttons */}
              <div className="flex space-x-2">
                <button className="bg-green-500 rounded-full p-2 text-white w-[40px]">✔</button>
              </div>

              {/* Appointment Time */}
              <div>
                <p>9:00 AM - 12:00 PM</p>
              </div>

              {/* View Details Button */}
              <div>
                <Link href="/dashpsi/chat">
                  <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">Chat Now!</button>
                </Link>
              </div>
            </div>

            {/* Second Appointment - Faiz */}
            <div className="mt-4 bg-white text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              {/* Date Tag */}
              <div className="flex items-center space-x-2">
                <div className="bg-[#4C82CB] text-white rounded-l-full p-2 px-4">
                  <p className="font-semibold">12 Okt</p>
                </div>

                {/* Profile Picture */}
                <div className="rounded-full overflow-hidden w-12 h-12">
                  <img src="/images/faiz.png" alt="Faiz" className="object-cover w-full h-full" />
                </div>

                {/* Patient Information */}
                <div>
                  <h3 className="text-lg font-semibold">Faiz</h3>
                  <p>Bandung, Jawa Barat</p>
                </div>
              </div>

              {/* Accept/Reject Buttons */}
              <div className="flex space-x-2">
                <button className="bg-green-500 rounded-full p-2 text-white w-[40px]">✔</button>
                <button className="bg-red-500 rounded-full p-2 text-white w-[40px]">✖</button>
              </div>

              {/* Appointment Time */}
              <div>
                <p>8:00 AM - 9:00 PM</p>
              </div>

              {/* View Details Button */}
              <div>
                <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">View Details!</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Profile and Set Availability */}
        <div className="lg:w-1/3 w-full space-y-6">
          <ProfileCard />
          <Availability />
        </div>
      </main>
    </section>
  );
}
