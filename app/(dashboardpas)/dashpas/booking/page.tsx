import Image from "next/image";
import Sidebar from "../../navbar";
import ProfileCardPasien from "../../component/profilecard";
import Link from "next/link";
export default function Booking() {
  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row p-5 gap-7"
      style={{ background: 'linear-gradient(to top, #ffffff 60%, #003A7C 100%)' }}
    >
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-7">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Psychologists List Section */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              Psychologists
            </h1>
            <p className="text-white mb-6 text-sm md:text-base">
              Results for Psychologists near you via chat
            </p>

            <div className="space-y-4 lg:space-y-6">
              {[
                {
                  name: "Isey S.Psi, M.Psi. Psikolog",
                  specialization: ["Stress", "Trauma", "Anxiety"],
                  availability: "Available",
                  years: 6,
                  time: "9:00 AM - 15:00 PM",
                  image: "/images/cewe.png",
                  isAvailable: true,
                },
                {
                  name: "Pito S.Psi, M.Psi. Psikolog",
                  specialization: ["Depression", "Mood", "Emotions"],
                  availability: "Available",
                  years: 5,
                  time: "8:00 AM - 15:00 PM",
                  image: "/images/cowosem.png",
                  isAvailable: true,
                },
                {
                  name: "Shevira S.Psi, M.Psi. Psikolog",
                  specialization: ["Family", "Emotions", "Stress"],
                  availability: "Busy",
                  years: 3,
                  time: "9:00 AM - 15:00 PM",
                  image: "/images/cewe2.png",
                  isAvailable: false,
                },
                {
                  name: "Moya S.Psi, M.Psi. Psikolog",
                  specialization: ["Panic", "Stress", "Anxiety"],
                  availability: "Busy",
                  years: 7,
                  time: "8:00 AM - 15:00 PM",
                  image: "/images/cewe1.png",
                  isAvailable: false,
                },
              ].map((psychologist, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] text-white"
                >
                  <div className="flex items-center">
                    <Image
                      src={psychologist.image}
                      alt={psychologist.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-base md:text-lg">
                        {psychologist.name}
                      </h3>
                      <div className="flex space-x-2 mt-2 ">
                        {psychologist.specialization.map((item, i) => (
                          <span
                            key={i}
                            className="bg-[#4C82CB] text-white px-3 py-1 rounded-full text-xs md:text-sm shadow-lg"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center mt-2 space-x-3">
                        {/* Availability Badge with Circle */}
                        <div className="flex items-center space-x-2">
                          
                          <p
                            className={`px-2 py-1 flex rounded-full text-xs md:text-sm font-semibold bg-[#4C82CB] text-white shadow-lg`}
                          >
                            <div
                            className={`w-3 h-3 rounded-full ${
                              psychologist.isAvailable
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          ></div>
                            {psychologist.isAvailable ? "Available" : "Busy"}
                          </p>
                        </div>
                        <span className="bg-[#4C82CB] flex text-white px-3 py-1 rounded-full text-xs md:text-sm shadow-lg">
                        <Image
                        src="/icons/suitcase.png"
                        alt="Calendar"
                        width={20}
                        height={20}
                      />
                          {psychologist.years} Years
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <div className="flex items-center bg-[#4C82CB] text-white px-3 py-1 rounded-full space-x-2">
                      <Image
                        src="/icons/calendar.png"
                        alt="Calendar"
                        width={20}
                        height={20}
                      />
                      <p className="text-xs md:text-sm">{psychologist.time}</p>
                    </div>
                    <button
                      
                      className={`mt-2 px-2 py-1 rounded-full shadow-lg ${
                        psychologist.isAvailable ? "bg-[#4C82CB]" : "bg-gray-500"
                      } text-white`}
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
          </div>

          {/* Profile Section */}
          <div className="flex flex-col justify-between">
            <div className="flex-1 min-h-[280px] lg:min-h-full">
              <ProfileCardPasien />
              <div className="space-y-4 mt-8">
                <h3 className="text-xl font-bold text-black">
                  Communication with your Way
                </h3>
                <p className="text-sm text-gray-400 font-semibold">
                  Effective counseling starts with feeling comfortable.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg flex flex-col items-center shadow">
                    <div className="w-full rounded-[10px] overflow-hidden bg-gradient-to-t from-[#4D9CE1] to-[#003A7C] flex justify-center p-4">
                      <Image
                        src="/images/dash2.png"
                        alt="Counseling via Chat"
                        width={70}
                        height={70}
                      />
                    </div>
                    <h4 className="text-center mt-4 text-sm md:text-base">
                      Counseling appointment via Chat
                    </h4>
                  </div>
                  <Link href="/dashpas/direcly">
                    <div className="bg-white rounded-lg flex flex-col items-center shadow">
                      <div className="w-full rounded-[10px] overflow-hidden bg-gradient-to-t from-[#4D9CE1] to-[#003A7C] flex justify-center p-4">
                        <Image
                          src="/images/dash1.png"
                          alt="Direct appointment"
                          width={50}
                          height={50}
                        />
                      </div>
                      <h4 className="text-center mt-4 text-sm md:text-base">
                        Make an appointment directly
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Communication Section */}
          </div>
        </div>
      </main>
    </section>
  );
}
