import Image from "next/image";
import Sidebar from "../navbar";
import ProfileCardPasien from "../component/profilecard";

export default function Dashboardpas() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#4C82CB] from-5% flex flex-col lg:flex-row p-5 gap-7">
      
      <Sidebar />

      <main className="flex-1 p-7">
        <h1 className="text-4xl font-bold text-white">Dashboard Patient</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-6">

            <div className="py-7 px-10 bg-gradient-to-r from-[#4D9CE1] to-[#003A7C] text-white rounded-lg flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold">Good Morning 👋</h1>
                <p className="mt-2">How is it going today?</p>
                <p className="text-sm">Bandung, Jawa Barat</p>
              </div>
              <div>
                <Image src="/images/user.png" alt="Profile Avatar" width={90} height={90} className="rounded-full" />
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
                    {/* <Image src="/images/cewe.png" alt="Faiz" className="object-cover w-full h-full" /> */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Isey S.Psi, M.Psi. Psikolog</h3>
                    <p>Bandung, Jawa Barat</p>
                  </div>
                </div>
                <div>
                  <p>8:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">Chat Now!</button>
                </div>
              </div>

              <div className="mt-4 bg-white text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#4C82CB] text-white rounded-l-full p-2 px-4">
                    <p className="font-semibold">12 Okt</p>
                  </div>
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    {/* <Image src="/images/cewe.png" alt="Faiz" className="object-cover w-full h-full" /> */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Pito S.Psi, M.Psi. Psikolog</h3>
                    <p>Bandung, Jawa Barat</p>
                  </div>
                </div>
                <div>
                  <p>8:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">Chat Now!</button>
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
                    <p className="font-semibold">12 Okt</p>
                  </div>
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    {/* <img src="/images/cewe.png" alt="Faiz" className="object-cover w-full h-full" /> */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Isey S.Psi, M.Psi. Psikolog</h3>
                    <p>Bandung, Jawa Barat</p>
                  </div>
                </div>
                <div>
                  <p>8:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <button className="bg-[#264065] text-white px-4 py-2 rounded-lg">completed</button>
                </div>
              </div>

              <div className="mt-4 bg-white text-black shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#4C82CB] text-white rounded-l-full p-2 px-4">
                    <p className="font-semibold">12 Okt</p>
                  </div>
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    {/* <img src="/images/cewe.png" alt="Faiz" className="object-cover w-full h-full" /> */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Pito S.Psi, M.Psi. Psikolog</h3>
                    <p>Bandung, Jawa Barat</p>
                  </div>
                </div>
                <div>
                  <p>8:00 AM - 9:00 PM</p>
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
  <p className="text-sm">Effective counseling starts with feeling comfortable.</p>
  
  <div className="grid grid-cols-2 gap-4">
    
    {/* Counseling appointment via Chat */}
    <div className="bg-white rounded-lg flex flex-col items-center shadow">
      <div className="w-full rounded-[10px] overflow-hidden bg-gradient-to-t from-[#4D9CE1] to-[#003A7C] flex justify-center p-4">
        <Image src="/images/dash2.png" alt="Counseling via Chat" width={70} height={70} />
      </div>
      <h4 className="font-bold text-center mt-4">Counseling appointment via Chat</h4>
    </div>

    {/* Make an appointment directly */}
    <div className="bg-white rounded-lg flex flex-col items-center shadow">
      <div className="w-full rounded-[10px] overflow-hidden bg-gradient-to-t from-[#4D9CE1] to-[#003A7C] flex justify-center p-4">
        <Image src="/images/dash1.png" alt="Direct appointment" width={50} height={50} />
      </div>
      <h4 className="font-bold text-center mt-4">Make an appointment directly</h4>
    </div>
    
  </div>
</div>


          </div>
        </div>
      </main>
    </section>
  );
}
