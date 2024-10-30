import { Availability } from "../../uii/avai";
import Sidebar from "../../navbar";
import ProfileCard from "../../uii/profilcol";
import Link from "next/link";

export default function Jadwal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DBE5F2] from-10% flex flex-col lg:flex-row p-5 pt-[50px] gap-7">
      <Sidebar />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
        <div className="space-y-5">
          <div className="p-5">
            <h3 className="text-2xl font-bold mb-4">Scheduled Appointments</h3>
            <div className="flex justify-start mb-4">
              <button className="text-blue-600 font-semibold">Show more</button>
            </div>
            <div className="bg-[#D9E3F3] text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <div className="bg-[#264065] text-white rounded-l-full p-2 px-4">
                  <p className="font-semibold">12 Okt</p>
                </div>
                <div className="rounded-full overflow-hidden w-12 h-12">
                  <img src="/images/cewe.png" alt="Alvito" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Alvito</h3>
                  <p>Bandung, Jawa Barat</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-500 rounded-full p-2 text-white w-[40px]">✔</button>
              </div>
              <div>
                <p>9:00 AM - 12:00 PM</p>
              </div>
              <div>
                <Link href="/dashpsi/chatpsi">
                  <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">Chat Now!</button>
                </Link>
              </div>
            </div>
            <div className="mt-4 bg-white text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <div className="bg-[#4C82CB] text-white rounded-l-full p-2 px-4">
                  <p className="font-semibold">12 Okt</p>
                </div>
                <div className="rounded-full overflow-hidden w-12 h-12">
                  <img src="/images/cewe.png" alt="Faiz" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Faiz</h3>
                  <p>Bandung, Jawa Barat</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-red-500 rounded-full p-2 text-white w-[40px]">✖</button>
              </div>
              <div>
                <p>8:00 AM - 9:00 PM</p>
              </div>
              <div>
                <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">View Details!</button>
              </div>
            </div>
          </div>
          <div className="bg-[#D9E3F3] text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[#264065] text-white rounded-l-full p-2 px-4">
                <p className="font-semibold">12 Okt</p>
              </div>
              <div className="rounded-full overflow-hidden w-12 h-12">
                <img src="/images/cewe.png" alt="Alvito" className="object-cover w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Rijal</h3>
                <p>Bandung, Jawa Barat</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-500 rounded-full p-2 text-white w-[40px]">✔</button>
              <button className="bg-red-500 rounded-full p-2 text-white w-[40px]">✖</button>
            </div>
            <div>
              <p>9:00 AM - 12:00 PM</p>
            </div>
            <div>
              <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">View Detail!</button>
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-bold mb-4">Appointment Histories</h3>
            <div className="flex justify-start mb-4">
              <button className="text-blue-600 font-semibold">Show more</button>
            </div>
            <div className="bg-[#D9E3F3] text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <div className="bg-[#264065] text-white rounded-l-full p-2 px-4">
                  <p className="font-semibold">12 Okt</p>
                </div>
                <div className="rounded-full overflow-hidden w-12 h-12">
                  <img src="/images/cewe.png" alt="Alvito" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Alvito</h3>
                  <p>Bandung, Jawa Barat</p>
                </div>
              </div>
              <div>
                <p>9:00 AM - 12:00 PM</p>
              </div>
              <div>
                <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">View Details!</button>
              </div>
            </div>
            <div className="mt-4 bg-white text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <div className="bg-[#4C82CB] text-white rounded-l-full p-2 px-4">
                  <p className="font-semibold">12 Okt</p>
                </div>
                <div className="rounded-full overflow-hidden w-12 h-12">
                  <img src="/images/cewe.png" alt="Faiz" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Faiz</h3>
                  <p>Bandung, Jawa Barat</p>
                </div>
              </div>
              <div>
                <p>8:00 AM - 9:00 PM</p>
              </div>
              <div>
                <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">View Details!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <ProfileCard />
          <Availability />
        </div>
      </main>
    </div>
  );
}
