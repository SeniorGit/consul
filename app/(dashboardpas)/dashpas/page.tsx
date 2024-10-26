import Image from "next/image";
import Sidebar from "../navbar";
import ProfileCardPasien from "../component/profilecard";
import Link from "next/link";

export default function Dashboardpas() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row p-5 pt-[50px]  gap-7" style={{ background: 'linear-gradient(to top, #ffffff 60%, #003A7C 100%)' }}>
      
      <Sidebar />

      <main className="flex-1 p-7">
        <h1 className="text-4xl font-bold text-white">Dashboard Patient</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-6">

            <div className="py-7 px-10 bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] text-white rounded-lg flex items-center justify-between space-y-5">
              <div>
                <h1 className="text-4xl font-bold">Good Morning 👋</h1>
                <p className="mt-2">Welcome alvito!, How is it going today?</p>
                <p className="text-sm">Bandung, Jawa Barat</p>
              </div>
              <div>
                <Image src="/images/cowomono.png" alt="Profile Avatar" width={120} height={120} className="rounded-full" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Appointment</h3>
              <p>make an appointment now!</p>
            </div>

            <div className="space-y-4">
              <div className="mt-4 bg-[#4C82CB] text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-white text-black rounded-l-full p-2 px-4">
                    <p className="font-semibold">12 Okt</p>
                  </div>
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <Image src="/images/cewe.png" alt="Faiz" width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Isey S.Psi, M.Psi. Psikolog</h3>
                    <p>Bandung, Jawa Barat</p>
                  </div>
                </div>
                <div className=" bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] rounded-full p-2 flex items-center space-x-2 shadow-md">
                  <Image src="/icons/calendar.png" alt="Calendar" width={20} height={20}/>
                  <p className="text-white">8:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <Link href="/dashpas/chat">
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
                    <Image src="/images/cowosem.png" alt="Faiz" width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Pito S.Psi, M.Psi. Psikolog</h3>
                    <p>Bandung, Jawa Barat</p>
                  </div>
                </div>
                <div className="bg-[#4C82CB] rounded-full p-2 flex items-center space-x-2 shadow-md">
                  <Image src="/icons/calendar.png" alt="Calendar" width={20} height={20}/>
                  <p className="text-white">8:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <Link href="/dashpas/booking">
                    <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">Appoitnment Now</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Appointment History</h3>
              <p>your appointment history</p>
            </div>

            <div className="space-y-6">
              <div className="mt-4 bg-[#4C82CB] text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-white text-black rounded-l-full p-2 px-4">
                    <p className="font-semibold">1 Sep</p>
                  </div>
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <Image src="/images/cewe1.png" alt="Faiz" width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Shevira S.Psi, M.Psi. Psikolog</h3>
                    <p>Bandung, Jawa Barat</p>
                  </div>
                </div>
                <div className=" bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] rounded-full p-2 flex items-center space-x-2 shadow-md">
                  <Image src="/icons/calendar.png" alt="Calendar" width={20} height={20}/>
                  <p className="text-white">8:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">completed</button>
                </div>
              </div>

              <div className="mt-4 bg-white text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#4C82CB] text-white rounded-l-full p-2 px-4">
                    <p className="font-semibold">25 Sep</p>
                  </div>
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <Image src="/images/cewe2.png" alt="Faiz" width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Moya S.Psi, M.Psi. Psikolog</h3>
                    <p>Bandung, Jawa Barat</p>
                  </div>
                </div>
                <div className="bg-[#4C82CB] rounded-full p-2 flex items-center space-x-2 shadow-md">
                  <Image src="/icons/calendar.png" alt="Calendar" width={20} height={20}/>
                  <p className="text-white">8:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">completed</button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ProfileCardPasien />

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Communication with your Way</h3>
              <p className="text-sm text-gray-400 font-semibold">Effective counseling starts with feeling comfortable.</p>
              
              <div className="grid grid-cols-2 gap-4">
                
                {/* Counseling appointment via Chat */}
                <Link href="/dashpas/booking">
                  <div className="bg-white rounded-lg flex flex-col items-center shadow-lg">
                    <div className="w-full rounded-[10px] overflow-hidden bg-gradient-to-t from-[#4D9CE1] to-[#003A7C] flex justify-center p-4">
                      <Image src="/images/dash2.png" alt="Counseling via Chat" width={70} height={70} />
                    </div>
                    <h4 className="font-semibold text-center mt-4">Counseling appointment via Chat</h4>
                  </div>
                
                </Link>

                {/* Make an appointment directly */}
                <Link href="/dashpas/direcly">
                  <div className="bg-white rounded-lg flex flex-col items-center shadow-lg">
                    <div className="w-full rounded-[10px] overflow-hidden bg-gradient-to-t from-[#4D9CE1] to-[#003A7C] flex justify-center p-4">
                      <Image src="/images/dash1.png" alt="Direct appointment" width={50} height={50} />
                    </div>
                    <h4 className="font-semibold text-center mt-4">Make an appointment directly</h4>
                  </div>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
