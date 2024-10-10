import Image from "next/image";
import Sidebar from "../navbar";
import ProfileCard from "../uii/profilcol";
export default function Dashboardpsi() {
  return (
    <section className="">
      <div className="flex min-h-screen bg-[#d2e2f0] p-5">
        <Sidebar /> {/* Use the Sidebar component here */}
        <main className="flex-1 p-5">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="py-1 px-20 lg:col-span-2 bg-[#27374D] text-white p-5 rounded-lg flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold">Good Morning 👋</h1>
                <p className="mt-4">Welcome Isey S.Psi, M.Psi, Psychologist</p>
                <div className="mt-10 text-black text-sm bg-[#B6CBE5] rounded-[5px] p-2 inline-flex items-center">
                  <Image src="/icons/calendar.png" alt="Calendar" width={24} height={24} className="inline-block mr-2"  />
                  Oct 04, 2024 10:01 PM
                </div>
              </div>
              <div>
                <Image src="/images/user.png" alt="Profile Avatar" width={250} height={250} className="rounded-full" />
              </div>
            </div>
            <ProfileCard />
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 mt-8">
                <div className="bg-white shadow-lg rounded-lg">
                <div className="bg-[#27374D] text-white p-4 rounded-[10px]">
                    <h3 className="text-xl font-bold">Your Appointment</h3>
                </div>
                <div className="flex justify-between p-5">
                    <div className="flex flex-col items-center">
                    <div className="p-2 inline-flex">
                        <Image src="/icons/pep.png" alt="Patient Icon" width={65} height={65} />
                        <span className="font-semibold text-[20px]">Patient
                        <p>0</p>
                        </span>
                    </div>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="p-2 inline-flex">
                        <Image src="/icons/ti.png" alt="Scheduled Icon" width={65} height={65} />
                        <span className="font-semibold text-[20px]">Scheduled
                        <p>0</p>
                        </span>
                    </div>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="p-2 inline-flex">
                        <Image src="/icons/cek.png" alt="Completed Icon" width={65} height={65} />
                        <span className="font-semibold text-[20px]">Completed
                        <p>0</p>
                        </span>
                    </div>
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
