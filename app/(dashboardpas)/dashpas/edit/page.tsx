"use client";
import Sidebar from "../../navbar";
import Image from "next/image";
import { useState } from "react";

export default function Edit() {
  const [firstName, setFirstName] = useState("Alvito");
  const [lastName, setLastName] = useState("rahaja");
  const [phoneNumber, setPhoneNumber] = useState("0813899776543");
  const [email, setEmail] = useState("alvitoo@gmail.com");
  const [alamat, setAlamat] = useState("Bandung, Jawa Barat");
  const [berat, setBerat] = useState("80kg");
  const [tinggi, setTinggi] = useState("180 Cm");

  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row p-5 pt-[50px] gap-7"
      style={{
        background: "linear-gradient(to top, #ffffff 60%, #003A7C 100%)",
      }}
    >
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 lg:p-7">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-white mb-5">Profile</h1>
            <p className="text-white mb-5">Complete your profile</p>
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/cowomono.png"
                    alt="Profile Picture"
                    width={170}
                    height={170}
                    className="rounded-full"
                  />
                  <button className="text-blue-500 mt-2">Change photo</button>
                </div>
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600">First Name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full border rounded-lg p-2 mt-1 bg-[#4C82CB] text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600">Last Name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full border rounded-lg p-2 mt-1 bg-[#4C82CB] text-white"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-gray-600">Phone Number</label>
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full border rounded-lg p-2 mt-1 bg-[#4C82CB] text-white"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-gray-600">Email</label>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded-lg p-2 mt-1 bg-[#4C82CB] text-white"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-gray-600">Alamat</label>
                      <input
                        type="text"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        className="w-full border rounded-lg p-2 mt-1 bg-[#4C82CB] text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600">Berat</label>
                      <input
                        type="text"
                        value={berat}
                        onChange={(e) => setBerat(e.target.value)}
                        className="w-full border rounded-lg p-2 mt-1 bg-[#4C82CB] text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600">Tinggi</label>
                      <input
                        type="text"
                        value={tinggi}
                        onChange={(e) => setTinggi(e.target.value)}
                        className="w-full border rounded-lg p-2 mt-1 bg-[#4C82CB] text-white"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="bg-black text-white px-4 py-2 rounded-lg">
                      Log out
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              Your Treatment
              <span className="ml-2">
                <Image
                  src="/icons/bell.png"
                  alt="bell icon"
                  width={20}
                  height={20}
                />
              </span>
            </h2>
            <div className="space-y-4">
              <div className="bg-[#DBE5F2] p-4 rounded-xl shadow-md flex items-start space-x-4">
                <Image
                  src="/images/cewe.png"
                  alt="Psychologist"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-[#27374D]">
                    Isey S.Psi, M.Psi. Psychologists
                  </h3>
                  <p className="text-sm text-gray-600">Bandung, Jawa Barat</p>
                  <div className="mt-2 space-y-2 text-sm text-gray-600">
                    <div>
                      <span className="font-bold">Date</span>
                      <p>12 Okt</p>
                    </div>
                    <div>
                      <span className="font-bold">Time</span>
                      <p>9:00AM - 12:00PM</p>
                    </div>
                  </div>
                  <button className="bg-[#4D9CE1] text-white px-6 py-2 rounded-lg mt-4 w-full sm:w-auto">
                    Chat Now!
                  </button>
                </div>
              </div>
              <div className="bg-[#DBE5F2] p-4 rounded-xl shadow-md flex items-start space-x-4">
                <Image
                  src="/images/cowosem.png"
                  alt="Psychologist"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-[#27374D]">
                    Pito S.Psi, M.Psi. Psychologists
                  </h3>
                  <p className="text-sm text-gray-600">Bandung, Jawa Barat</p>
                  <div className="mt-2 space-y-2 text-sm text-gray-600">
                    <div>
                      <span className="font-bold">Date</span>
                      <p>20 Okt</p>
                    </div>
                    <div>
                      <span className="font-bold">Time</span>
                      <p>8:00AM - 10:00AM</p>
                    </div>
                  </div>
                  <button className="bg-gray-400 text-white px-6 py-2 rounded-lg mt-4 w-full sm:w-auto">
                    Chat Soon!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
