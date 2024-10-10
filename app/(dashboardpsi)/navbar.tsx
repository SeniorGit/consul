import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-20 bg-[#27374D] text-white flex flex-col justify-between items-center py-6 rounded-[10px]">
      <div className="flex flex-col items-center">
        <div className="text-[15px] font-semibold mb-6">Consulin</div>
        <div className="space-y-10 flex flex-col items-center">
          <Link href='/dashpsi'>
            <div className="cursor-pointer flex items-center justify-center mt-20">
              <Image src="/icons/home.png" alt="Home" width={30} height={30} />
            </div>
          </Link>
          <Link href='/jadwal'>
            <div className="cursor-pointer flex items-center justify-center">
              <Image src="/icons/people.png" alt="Users" width={24} height={24} />
            </div>
          </Link>
          <Link href='/ketersediaan'>
            <div className="cursor-pointer flex items-center justify-center">
              <Image src="/icons/calendar.png" alt="Calendar" width={24} height={24} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
          </Link>
          <Link href='/chat'>
            <div className="cursor-pointer flex items-center justify-center">
              <Image src="/icons/chat-alt.png" alt="Messages" width={24} height={24} />
            </div>
          </Link>
          <Link href='/edit'>
            <div className="cursor-pointer flex items-center justify-center">
              <Image src="/icons/user.png" alt="Settings" width={24} height={24} />
            </div>
          </Link>
          <Link href='/'>
            <div className="cursor-pointer flex items-center justify-center">
              <Image src="/icons/sun.png" alt="Settings" width={24} height={24} />
            </div>
          </Link>
        </div>
      </div>
      <Link href="/">
        <div className="cursor-pointer flex items-center justify-center mt-6">
          <Image src="/icons/exit.png" alt="Exit Icon" width={24} height={24} />
        </div>
      </Link>
    </div>
  );
}
