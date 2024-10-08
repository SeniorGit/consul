
import Image from "next/image";
import Link from "next/link";
export default function Dashboardpsi() {

  return (
    <section className="">
      <div className="flex min-h-screen bg-[#27374D] p-5">
        <div className="w-20 bg-[#B6CBE5] text-black flex flex-col justify-between py-6 rounded-[10px]">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[15px] font-semibold">Consulin <br/>Patient</div>

            <div className="space-y-12 items-center pt-[125px]">
              <div className="cursor-pointer">
                <Image src="/icons/home.png" alt="Home" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image src="/icons/people.png" alt="Users" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image src="/icons/activity.png" alt="Users" width={24} height={24} />
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
          <Link href='/'>
            <div  className="cursor-pointer flex flex-col items-center">
                  <Image src="/icons/exit.png" alt="Exit Icon" width={24} height={24} />
            </div>
          </Link>
        </div>
        <main className="flex-1 p-7">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="md:px-10 lg:px-24 z-10 py-7 px-20 lg:col-span-2 bg-[#B6CBE5] text-[#27374D] p-5 rounded-lg flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold">Good Morning 👋</h1>
                <p className="mt-4">Welcome Alfito!</p>
              </div>
              <div>
                <Image src="/images/user.png" alt="Profile Avatar" width={150} height={150} className="rounded-full" />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg ">
              <div className="bg-[#B6CBE5] text-[#27374D] flex justify-between items-center p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold">My Profile</h3>
                <button className="p-2">
                  <Image src="/icons/edit.png" alt="Edit Icon" width={16} height={16} />
                </button>
              </div>
              <div className="flex items-center space-x-4 mt-4 p-2">
                <Image src="/images/cewe.png" alt="Profile Image" width={70} height={70} className="rounded-full" />
                <div>
                  <h2 className="text-[15px] font-bold">Alvito</h2>
                  <p className="text-gray-500">Bandung, Jawa Barat</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-lg">
                <div className="bg-[#B6CBE5] text-[#27374D] p-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Your Appointment</h3>
                </div>
                <div className="p-5 text-center text-gray-500">
                  There is no meeting schedule.
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg mt-8">
                <div className="bg-[#B6CBE5] text-[#27374D] p-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Completed Appointment History</h3>
                </div>
                <div className="p-5 text-center text-gray-500">
                  There is no meeting schedule.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
