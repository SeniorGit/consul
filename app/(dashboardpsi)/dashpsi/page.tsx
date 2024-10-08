
import Image from "next/image"; 
import Link from "next/link";
export default function Dashboardpsi() {
  return (
    <section className="">
      <div className="flex min-h-screen bg-[#d2e2f0] p-5">
        <div className="w-20 bg-[#27374D] text-white flex flex-col justify-between py-6 rounded-[10px]">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[15px] font-semibold">Consulin</div>

            <div className="space-y-12 items-center pt-[125px]">
              <div className="cursor-pointer">
                <Image src="/icons/home.png" alt="Home" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image src="/icons/people.png" alt="Users" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image src="/icons/calendar.png" alt="Calendar" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image src="/icons/chat-alt.png" alt="Messages" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image src="/icons/user.png" alt="Settings" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image src="/icons/sun.png" alt="Settings" width={24} height={24} />
              </div>
            </div>
          </div>
            <Link href="/">
              <div className="cursor-pointer flex flex-col items-center">
                  <Image src="/icons/exit.png" alt="Exit Icon" width={24} height={24} />
              </div>
            </Link>
        </div>
        <main className="flex-1 p-5">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="py-1 px-20 lg:col-span-2 bg-[#27374D] text-white p-5 rounded-lg flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold">Good Morning 👋</h1>
                <p className="mt-4">Welcome Isey S.Psi, M.Psi, Psychologist</p>
                <div className="mt-4 text-black text-sm bg-[#B6CBE5] rounded-[5px] p-2 inline-flex items-center">
                  <Image src="/icons/calendar.png" alt="Calendar" width={16} height={16} className="inline-block mr-2" />
                  Oct 04, 2024 10:01 PM
                </div>
              </div>
              <div>
                <Image src="/images/user.png" alt="Profile Avatar" width={250} height={250} className="rounded-full" />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg">
              <div className="bg-[#27374D] text-white flex justify-between items-center p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold">My Profile</h3>
                <button className="p-2">
                  <Image src="/icons/edit.png" alt="Edit Icon" width={16} height={16} />
                </button>
              </div>
              <div className="flex items-center space-x-4 mt-4 p-4">
                <Image src="/images/cewe.png" alt="Profile Image" width={70} height={70} className="rounded-full" />
                <div>
                  <h2 className="text-[15px] font-bold">Isey S.Psi, M.Psi, Psychologist</h2>
                  <p className="text-gray-500">Bandung, Jawa Barat</p>
                  <div className="mt-2 bg-[#B6CBE5] rounded-md px-2 py-1 inline-flex items-center space-x-2">
                    <Image src="/icons/edit.png" alt="Experience Icon" width={16} height={16} />
                    <span className="text-sm">8 Tahun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 mt-8">
                <div className="bg-white shadow-lg rounded-lg">
                <div className="bg-[#27374D] text-white p-4 rounded-t-lg">
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
