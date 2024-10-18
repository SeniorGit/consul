"use client";
import { useState } from "react";
import Sidebar from "../../navbar";
import ProfileCard from "../../uii/profilcol";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Ketersediaan() {
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

  const handleApply = (): void => {
    if (selectedTime.length === 2) {
      const startTime = selectedTime[0];
      const endTime = selectedTime[1];

      // Format the time range (e.g., "09:00 - 10:00")
      const formattedTimeRange = `${startTime} - ${endTime}`;

      // Display the selected date and time range
      setDisplayTime(`${selectedDate.toLocaleString("default", { weekday: 'long' })} ${selectedDate.toLocaleDateString()}, ${formattedTimeRange}`);
    } else {
      setDisplayTime("Please select two time slots.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DBE5F2] from-10% flex flex-col lg:flex-row p-5 gap-7">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex gap-5 flex-col lg:flex-row">
        {/* Left Column: Set Availability and Your Availability */}
        <div className="flex-1">
          <div className="text-black p-4">
            <h3 className="text-xl font-bold">Set Availability</h3>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            {/* Date Picker */}
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => handleDateChange(-7)} className="text-blue-500">
                {"<"} {/* Previous week */}
              </button>
              <span className="font-bold">
                {selectedDate.toLocaleString("default", { month: "long", year: "numeric" })}
              </span>
              <button onClick={() => handleDateChange(7)} className="text-blue-500">
                {">"} {/* Next week */}
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {dates.map((date) => (
                <button
                  onClick={() => setSelectedDate(date)}
                  className={`mt-1 p-1 rounded-lg ${date.toDateString() === selectedDate.toDateString() ? 'bg-blue-200' : ''}`}
                  key={date.toString()}
                >
                  <div className="p-2 border rounded-lg">
                    <div className="text-sm font-bold">{daysOfWeek[date.getDay()]}</div>
                    <div>{date.getDate()}</div>
                    
                  </div>
                </button>
              ))}
            </div>

            {/* Time Selection */}
            <h4 className="font-semibold mb-2">Select Time</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {["09:00AM", "10:00AM", "11:00AM", "12:00PM", "01:00PM", "02:00PM", "03:00PM", "04:00PM", "05:00PM", "06:00PM"].map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`border rounded-lg px-4 py-2 ${selectedTime.includes(time) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* Display Selected Date and Time */}
            <div className="flex justify-between items-center p-2 border-t mt-4 bg-blue-100 rounded-lg">
              <span className="block font-semibold text-gray-800">{displayTime || "Select a time"}</span>
              <button onClick={handleApply} className="bg-[#27374D] text-white px-4 py-2 rounded hover:bg-[#1f2c3d] transition">
                Apply
              </button>
            </div>
          </div>

          {/* Your Availability Section */}
          <h3 className="text-lg font-bold mt-5">Your Availability</h3>
          <div className="flex justify-start mb-4">
              <button className="text-blue-600 font-semibold">Show more</button>
            </div>
          <div className="mt-4 bg-white text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              {/* Date Tag */}
              <div className="flex items-center space-x-2">
                <div className="bg-[#4C82CB] text-white rounded-l-full p-2 px-4">
                  <p className="font-semibold">12 Okt</p>
                </div>

                {/* Profile Picture */}
                <div className="rounded-full overflow-hidden w-12 h-12">
                  <img src="/images/cewe.png" alt="Faiz" className="object-cover w-full h-full" />
                </div>

                {/* Patient Information */}
                <div>
                  <h3 className="text-lg font-semibold">Faiz</h3>
                  <p>Bandung, Jawa Barat</p>
                </div>
              </div>

              

              {/* Appointment Time */}
              <div>
                <p>8:00 AM - 9:00 PM</p>
              </div>

              {/* View Details Button */}
              <div>
                <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">History</button>
              </div>
            </div>
          
        </div>

        {/* Right Column: Profile Card */}
        <div className="w-full lg:w-1/3 mt-5 lg:mt-0">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}
