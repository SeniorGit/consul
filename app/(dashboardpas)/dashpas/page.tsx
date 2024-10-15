import Image from "next/image";
import Sidebar from "../navbar";
export default function Dashboardpas() {

  return (
    <section className="">
      <div className="flex min-h-screen bg-[#F1F5FB] p-5">
        <Sidebar />
        
        <main className="flex-1 p-7">
          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* Welcome Banner */}
            <div className="md:px-10 lg:px-24 z-10 py-7 px-10 lg:col-span-2 bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] text-white p-5 rounded-lg flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold">Good Morning 👋</h1>
                <p className="mt-2">How is it going today?</p>
                <p className="text-sm">Bandung, Jawa Barat</p>
              </div>
              <div>
                <Image src="/images/user.png" alt="Profile Avatar" width={90} height={90} className="rounded-full" />
              </div>
            </div>
            
            {/* Profile Section */}
            <div className="bg-white shadow-lg rounded-lg">
              <div className="bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] text-white flex justify-between items-center p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold">My Profile</h3>
                <button className="p-2">
                  <Image src="/icons/edit.png" alt="Edit Icon" width={16} height={16} />
                </button>
              </div>
              <div className="flex items-center space-x-4 mt-4 p-4">
                <Image src="/images/cewe.png" alt="Profile Image" width={70} height={70} className="rounded-full" />
                <div>
                  <h2 className="text-[15px] font-bold">Alvito</h2>
                  <p className="text-gray-500">Bandung, Jawa Barat</p>
                  <p className="text-sm mt-2">20 Tahun - Kilogram</p>
                </div>
              </div>
            </div>
            
            {/* Appointments */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upcoming Appointments */}
              <div className="bg-white shadow-lg rounded-lg">
                <div className="bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] text-white p-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Appointment</h3>
                </div>
                <div className="p-5 space-y-4">
                  {/* Appointment Card 1 */}
                  <div className="flex items-center justify-between bg-[#EAF1FA] p-4 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                      <div className="text-center bg-white rounded-full p-2 shadow-md">
                        <p className="text-[#4D9CE1] font-bold">12 Okt</p>
                      </div>
                      <div>
                        <h4 className="font-bold">Isey S.Psi, M.Psi. Psikolog</h4>
                        <p className="text-gray-500 text-sm">Bandung, Jawa Barat</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">9:00 AM - 12:00 PM</p>
                      <button className="mt-2 bg-[#003A7C] text-white py-2 px-4 rounded-lg">Chat Sekarang!</button>
                    </div>
                  </div>

                  {/* Appointment Card 2 */}
                  <div className="flex items-center justify-between bg-[#EAF1FA] p-4 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                      <div className="text-center bg-white rounded-full p-2 shadow-md">
                        <p className="text-[#4D9CE1] font-bold">20 Okt</p>
                      </div>
                      <div>
                        <h4 className="font-bold">Pito S.Psi, M.Psi. Psikolog</h4>
                        <p className="text-gray-500 text-sm">Bandung, Jawa Barat</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">8:00 AM - 10:00 PM</p>
                      <button className="mt-2 bg-[#003A7C] text-white py-2 px-4 rounded-lg">Chat Sekarang!</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Completed Appointments */}
              <div className="bg-white shadow-lg rounded-lg">
                <div className="bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] text-white p-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Appointment History</h3>
                </div>
                <div className="p-5 space-y-4">
                  {/* Appointment Card 3 */}
                  <div className="flex items-center justify-between bg-[#EAF1FA] p-4 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                      <div className="text-center bg-white rounded-full p-2 shadow-md">
                        <p className="text-[#4D9CE1] font-bold">1 Okt</p>
                      </div>
                      <div>
                        <h4 className="font-bold">Shevira S.Psi, M.Psi. Psikolog</h4>
                        <p className="text-gray-500 text-sm">Bandung, Jawa Barat</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">9:00 AM - 12:00 PM</p>
                      <button className="mt-2 bg-gray-400 text-white py-2 px-4 rounded-lg">Selesai</button>
                    </div>
                  </div>

                  {/* Appointment Card 4 */}
                  <div className="flex items-center justify-between bg-[#EAF1FA] p-4 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                      <div className="text-center bg-white rounded-full p-2 shadow-md">
                        <p className="text-[#4D9CE1] font-bold">25 Sep</p>
                      </div>
                      <div>
                        <h4 className="font-bold">Moya S.Psi, M.Psi. Psikolog</h4>
                        <p className="text-gray-500 text-sm">Bandung, Jawa Barat</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">8:00 AM - 10:00 PM</p>
                      <button className="mt-2 bg-gray-400 text-white py-2 px-4 rounded-lg">Selesai</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Articles Section */}
            <div className="bg-white shadow-lg rounded-lg">
              <div className="bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">New Articles</h3>
              </div>
              <div className="p-5 space-y-4">
                {/* Article 1 */}
                <div className="flex items-center space-x-4">
                  <Image src="/images/article1.png" alt="Article" width={60} height={60} className="rounded-lg" />
                  <div>
                    <h4 className="font-bold">5 Cara Meredakan Gangguan Kecemasan dengan Cepat</h4>
                    <p className="text-sm text-gray-500">Mental health | Kecemasan</p>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="flex items-center space-x-4">
                  <Image src="/images/article2.png" alt="Article" width={60} height={60} className="rounded-lg" />
                  <div>
                    <h4 className="font-bold">10 Oktober Diperingati Hari Kesehatan Mental</h4>
                    <p className="text-sm text-gray-500">Mental health | Kesehatan</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </section>
  );
}
