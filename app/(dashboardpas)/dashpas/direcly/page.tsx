"use client";
import { useState } from "react";
import ProfileCardPasien from "../../component/profilecard";
import Sidebar from "../../navbar";
import Image from "next/image";
import Link from "next/link";
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Directly() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const [displayTime, setDisplayTime] = useState<string>("");

  const getDates = (date: Date): Date[] => {
    const startDate = new Date(date);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Start from Sunday
    return Array.from({ length: 7 }, (_, i) => {
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + i);
      return newDate;
    });
  };
  

  const dates = getDates(selectedDate);

  const handleDateChange = (increment: number): void => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + increment);
    setSelectedDate(newDate);
  };

  const handleTimeSelect = (time: string): void => {
    if (selectedTime.includes(time)) {
      setSelectedTime(selectedTime.filter(t => t !== time));
    } else {
      if (selectedTime.length < 2) {
        setSelectedTime([...selectedTime, time]);
      }
    }
  };

  


  const handleApply = () => {
    if (selectedTime.length === 2) {
      const startTime = selectedTime[0];
      const endTime = selectedTime[1];
      const formattedTimeRange = `${startTime} - ${endTime}`;
      setDisplayTime(
        `${selectedDate.toLocaleString("default", { weekday: "long" })} ${selectedDate.toLocaleDateString()}, ${formattedTimeRange}`
      );
    } else {
      setDisplayTime("Please select two time slots.");
    }
  };

  return (
    <section
  className="min-h-screen flex flex-col lg:flex-row p-5 gap-7"
  style={{ background: "linear-gradient(to top, #ffffff 60%, #003A7C 100%)" }}
>
  <Sidebar />

  <main className="flex-1 p-4 md:p-6 lg:p-7">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section */}
      <div className="lg:col-span-2 space-y-6">
        {/* Back Button */}
        <div className="flex items-center mb-4">
          <Link href="/dashpas" className="flex items-center">
            <Image src="/icons/back.png" alt="Back" width={30} height={30} />
            <p className="ml-2 text-white">Back</p>
          </Link>
        </div>

        <h1 className="text-2xl lg:text-3xl font-bold text-white">
          Make an appointment directly
        </h1>
        <p className="text-white">Set your location</p>

        {/* Location Radio Buttons */}
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
          <label className="flex items-center space-x-2">
            <input type="radio" name="location" />
            <span className="text-white">Nearest location</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="location" />
            <span className="text-white">All locations</span>
          </label>
        </div>

        {/* Psychologist Info */}
        <div className="p-6 bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] text-white rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Left Section - Profile Image */}
          <div className="flex items-center">
            <Image
              src="/images/cewe.png"
              alt="Isey S.Psi, M.Psi. Psikolog"
              width={80}
              height={80}
              className="rounded-full border-2 border-white"
            />
            <div className="ml-4">
              <h3 className="font-bold text-lg">Isey S.Psi, M.Psi. Psikolog</h3>
              <p className="text-sm">Psikolog Klinis Dewasa</p>
              <p className="text-sm font-semibold">RS Mayapada Bandung</p>
              <p className="text-xs text-gray-300">0777-0009-885777</p>

              {/* Specialization Badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["Stress", "Trauma", "Anxiety"].map((item, i) => (
                  <span
                    key={i}
                    className="bg-[#4C82CB] text-white px-3 py-1 rounded-full text-xs shadow-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Availability and Experience */}
              <div className="flex items-center mt-3 space-x-3">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      true ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span className="bg-[#4C82CB] px-3 py-1 rounded-full text-xs shadow-lg">
                    Available
                  </span>
                </div>
                <span className="bg-[#4C82CB] flex items-center px-3 py-1 rounded-full text-xs shadow-lg">
                  <Image
                    src="/icons/suitcase.png"
                    alt="Experience"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                  6 Years
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Appointment Time and Button */}
          <div className="flex flex-col items-end">
            <div className="flex items-center bg-[#4C82CB] text-white px-4 py-2 rounded-full space-x-2">
              <Image
                src="/icons/calendar.png"
                alt="Calendar"
                width={20}
                height={20}
              />
              <p className="text-xs md:text-sm">9:00 AM - 11:30 PM</p>
            </div>
            <button className="mt-2 px-4 py-2 bg-[#4C82CB] text-white rounded-full shadow-lg">
              Booking Appointment
            </button>
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => handleDateChange(-7)}
              className="text-blue-500"
            >
              {"<"}
            </button>
            <span className="font-bold">
              {selectedDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              onClick={() => handleDateChange(7)}
              className="text-blue-500"
            >
              {">"}
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center mb-4">
            {dates.map((date) => (
              <button
                key={date.toString()}
                onClick={() => setSelectedDate(date)}
                className={`p-2 rounded-lg ${
                  date.toDateString() === selectedDate.toDateString()
                    ? "bg-blue-200"
                    : ""
                }`}
              >
                <div className="text-sm font-bold">
                  {daysOfWeek[date.getDay()]}
                </div>
                <div>{date.getDate()}</div>
              </button>
            ))}
          </div>

          <h4 className="font-semibold mb-2">Select Time</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "09:00AM",
              "10:00AM",
              "11:00AM",
              "12:00PM",
              "01:00PM",
              "02:00PM",
              "03:00PM",
              "04:00PM",
              "05:00PM",
              "06:00PM",
            ].map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`border rounded-lg px-4 py-2 ${
                  selectedTime.includes(time)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center border-t pl-5 bg-blue-100 rounded-full border-[#4C82CB] border-[1px]">
            <span className="font-semibold text-gray-800">
              {displayTime || "Select a time"}
            </span>
            <button
              onClick={handleApply}
              className="bg-[#27374D] text-white px-4 py-2 rounded-full hover:bg-[#1f2c3d] transition"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-6">
        <ProfileCardPasien />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Your Appointment</h2>
          <div className="bg-[#DBE5F2] p-4 rounded-xl flex items-start space-x-4">
            <img
              src="/images/cewe.png"
              alt="Psychologist"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-bold text-[#27374D]">
                Isey S.Psi, M.Psi. Psychologists
              </h3>
              <p className="text-sm text-gray-600">Bandung, Jawa Barat</p>
              <p className="text-sm text-gray-600">12 Okt | 9:00AM - 12:00PM</p>
              <Link href="/dashpas/chat">
                <button className="mt-2 bg-[#4D9CE1] text-white px-6 py-2 rounded-lg">
                    Chat Now!
                </button>
              </Link>
            </div>
          </div>
          <h2 className="text-xl font-bold mt-5">Your Appointment History</h2>
          <p className="text-gray-500 mt-4">There is no Appointment History</p>
        </div>
      </div>
    </div>
  </main>
</section>

  );
}
