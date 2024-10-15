import Image from "next/image";
import Sidebar from "../navbar";

export default function Booking() {
  return (
    <section className="min-h-screen flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 bg-[#F1F5FB]">
        <h1 className="text-3xl font-bold mb-5">Psychologists</h1>
        <p className="text-gray-600 mb-8">Results for Psychologists near you</p>

        {/* Psychologists List */}
        <div className="grid grid-cols-1 gap-6">
          {/* Psychologist Card */}
          {[
            {
              name: "Isey S.Psi, M.Psi. Psikolog",
              specialization: "Stress, Trauma, Anxiety",
              availability: "Available",
              time: "9:00 AM - 15:00 PM",
              image: "/images/psychologist1.png",
              isAvailable: true,
            },
            {
              name: "Pito S.Psi, M.Psi. Psikolog",
              specialization: "Depression, Mood, Emotions",
              availability: "Available",
              time: "8:00 AM - 15:00 PM",
              image: "/images/psychologist2.png",
              isAvailable: true,
            },
            {
              name: "Shevira S.Psi, M.Psi. Psikolog",
              specialization: "Family, Emotions, Stress",
              availability: "Busy",
              time: "9:00 AM - 15:00 PM",
              image: "/images/psychologist3.png",
              isAvailable: false,
            },
            {
              name: "Moya S.Psi, M.Psi. Psikolog",
              specialization: "Panic, Stress, Anxiety",
              availability: "Busy",
              time: "8:00 AM - 15:00 PM",
              image: "/images/psychologist4.png",
              isAvailable: false,
            },
          ].map((psychologist, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-6 rounded-lg shadow-lg ${
                psychologist.isAvailable ? "bg-[#EAF1FA]" : "bg-gray-300"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={psychologist.image}
                  alt={psychologist.name}
                  width={70}
                  height={70}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{psychologist.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {psychologist.specialization}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      psychologist.isAvailable ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {psychologist.availability}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-700">{psychologist.time}</p>
                <button
                  className={`mt-2 px-4 py-2 rounded-lg text-white ${
                    psychologist.isAvailable ? "bg-[#003A7C]" : "bg-gray-500"
                  }`}
                  disabled={!psychologist.isAvailable}
                >
                  {psychologist.isAvailable
                    ? "Booking Appointment"
                    : "Unavailable"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Profile and Appointment Selection */}
        <div className="flex mt-10">
          {/* Profile Section */}
          <div className="w-1/3 bg-white rounded-lg shadow-lg p-6 mr-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">My Profile</h3>
              <button className="p-2">
                <Image
                  src="/icons/edit.png"
                  alt="Edit Icon"
                  width={16}
                  height={16}
                />
              </button>
            </div>
            <div className="flex items-center">
              <Image
                src="/images/cewe.png"
                alt="Profile Picture"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="ml-4">
                <h2 className="font-bold text-lg">Alvito</h2>
                <p className="text-gray-500">Bandung, Jawa Barat</p>
                <p className="text-sm">20 Tahun - Kilogram</p>
              </div>
            </div>
          </div>

          {/* Time and Date Selection */}
          <div className="w-2/3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Select the date and time of visit</h3>
            <div className="flex items-center space-x-4">
              <select className="bg-gray-200 p-2 rounded-lg">
                <option>9:00 AM - 10:00 PM</option>
                <option>11:00 PM - 12:00 PM</option>
                <option>1:00 PM - 2:00 PM</option>
              </select>
              <input
                type="date"
                className="bg-gray-200 p-2 rounded-lg"
                defaultValue="2024-10-10"
              />
              <button className="px-4 py-2 bg-[#003A7C] text-white rounded-lg">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
