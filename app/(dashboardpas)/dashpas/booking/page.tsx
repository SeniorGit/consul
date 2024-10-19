import Image from "next/image";
import Sidebar from "../../navbar";
import ProfileCardPasien from "../../component/profilecard";

export default function Booking() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#4C82CB] from-5% flex flex-col lg:flex-row p-5 gap-7">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-7">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
          Psychologists
        </h1>
        <p className="text-white mb-6 text-sm md:text-base">
          Results for Psychologists near you via chat
        </p>

        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Image
              src="/images/search-icon.png"
              alt="Search Icon"
              width={20}
              height={20}
              className="absolute top-3 left-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Psychologists List */}
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            {[
              {
                name: "Isey S.Psi, M.Psi. Psikolog",
                specialization: "Stress, Trauma, Anxiety",
                availability: "Available",
                time: "9:00 AM - 15:00 PM",
                image: "/images/cewe.png",
                isAvailable: true,
              },
              {
                name: "Pito S.Psi, M.Psi. Psikolog",
                specialization: "Depression, Mood, Emotions",
                availability: "Available",
                time: "8:00 AM - 15:00 PM",
                image: "/images/cewe.png",
                isAvailable: true,
              },
              {
                name: "Shevira S.Psi, M.Psi. Psikolog",
                specialization: "Family, Emotions, Stress",
                availability: "Busy",
                time: "9:00 AM - 15:00 PM",
                image: "/images/cewe.png",
                isAvailable: false,
              },
              {
                name: "Moya S.Psi, M.Psi. Psikolog",
                specialization: "Panic, Stress, Anxiety",
                availability: "Busy",
                time: "8:00 AM - 15:00 PM",
                image: "/images/cewe.png",
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
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-base md:text-lg">
                      {psychologist.name}
                    </h3>
                    <p className="text-gray-200 text-xs md:text-sm">
                      {psychologist.specialization}
                    </p>
                    <p
                      className={`text-xs md:text-sm font-semibold ${
                        psychologist.isAvailable
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {psychologist.availability}
                    </p>
                  </div>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-xs md:text-sm text-gray-200">
                    {psychologist.time}
                  </p>
                  <button
                    className={`mt-2 px-4 py-2 rounded-full shadow text-white ${
                      psychologist.isAvailable
                        ? "bg-blue-500"
                        : "bg-gray-500"
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

          {/* Profile and Communication Section */}
          <div className="space-y-8">
            {/* Profile Section */}
            <ProfileCardPasien />

            {/* Communication Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Communication with your Way</h3>
              <p className="text-sm text-white">
                Effective counseling starts with feeling comfortable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* Counseling appointment via Chat */}
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

                {/* Make an appointment directly */}
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
