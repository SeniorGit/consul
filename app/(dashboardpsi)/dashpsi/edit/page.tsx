'use client'
import React, { useState } from 'react';
import Sidebar from '../../navbar';
import { Switch } from '@/components/ui/switch';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';

export default function Edit() {
  // State to manage form data
  const [profile, setProfile] = useState({
    name: 'Iseey',
    strNumber: '11223344-556677',
    phone: '0813899776543',
    email: 'iseey123@gmail.com',
    address: 'Bandung, Jawa Barat',
    specializations: ['Stress', 'Trauma', 'Anxiety'],
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const [isAvailable, setIsAvailable] = useState(true); // Available is true by default

  return (
    <section className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-b from-[#DBE5F2] from-10% p-5 gap-7">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-5 flex-1">
        {/* Profile Section */}
        <div className="flex-1 flex flex-col gap-5 lg:h-[600px]">
          <div className="text-black rounded-t-lg p-5">
            <h2 className="text-2xl font-semibold">My Profile</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-5 p-10">
            {/* Profile Picture */}
            <div className="relative flex flex-col items-center justify-center w-full sm:w-auto"> {/* Centered on small screens */}
              <img
                src="/images/cewe.png"
                alt="Profile"
                className="rounded-full w-32 h-32 object-cover border border-gray-300"
              />
              <button className="mt-4 bg-[#27374D] text-sm text-white rounded-[5px] px-3 py-1">
                Change Photo
              </button>
            </div>

            {/* Profile Info */}
            <form className="w-full lg:w-2/3 space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <label className={`block ${profile.name ? 'text-black' : 'text-gray-600'}`} htmlFor="name">
                    Name
                  </label>
                  <div className="flex items-center gap-3 bg-[#27374D] rounded px-4 py-2 mt-1">
                    <input
                      type="text"
                      id="name"
                      className="bg-transparent flex-1 text-white"
                      value={profile.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className={`block ${profile.strNumber ? 'text-black' : 'text-gray-600'}`} htmlFor="strNumber">
                    Number of STR
                  </label>
                  <div className="flex items-center gap-3 bg-[#27374D] rounded px-4 py-2 mt-1">
                    <input
                      type="text"
                      id="strNumber"
                      className="bg-transparent flex-1 text-white"
                      value={profile.strNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <label className={`block ${profile.phone ? 'text-black' : 'text-gray-600'}`} htmlFor="phone">
                    Phone Number
                  </label>
                  <div className="flex items-center gap-3 bg-[#27374D] rounded px-4 py-2 mt-1">
                    <input
                      type="text"
                      id="phone"
                      className="bg-transparent flex-1 text-white"
                      value={profile.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className={`block ${profile.email ? 'text-black' : 'text-gray-600'}`} htmlFor="email">
                    Email
                  </label>
                  <div className="flex items-center gap-3 bg-[#27374D] rounded px-4 py-2 mt-1">
                    <input
                      type="email"
                      id="email"
                      className="bg-transparent flex-1 text-white"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={`block ${profile.address ? 'text-black' : 'text-gray-600'}`} htmlFor="address">
                  Address
                </label>
                <div className="flex items-center gap-3 bg-[#27374D] rounded px-4 py-2 mt-1">
                  <input
                    type="text"
                    id="address"
                    className="bg-transparent flex-1 text-white"
                    value={profile.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-black">Specializations</label>
                <div className="flex items-center gap-3 bg-[#27374D] rounded px-4 py-2 mt-1">
                  <input
                    type="text"
                    className="bg-transparent flex-1 text-white"
                    value={profile.specializations.join(', ')}
                    readOnly
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profile.specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-500 px-2 py-1 rounded text-xs"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-[#1e2a39] text-white rounded px-4 py-2 mt-5">
                    Save Changes
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Changes successfully saved</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>Close</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </form>
          </div>
        </div>

        {/* Availability Section */}
        <div className="bg-white rounded-lg shadow-md w-auto lg:w-[400px] lg:h-[200px]">
          <div className="bg-[#27374D] p-4 rounded-t-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Set Availability</h2>
          </div>
          <div className="flex flex-col gap-4 p-5">
            <div className="flex items-center justify-between">
              <span className="text-black">Available</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-black">Busy</span>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
