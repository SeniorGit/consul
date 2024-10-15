import Image from "next/image";
import Link from "next/link"; 
import Navimg from "@/app/(landing)/_component/layouts/navimg";
import ContactSection from "@/app/(landing)/_component/layouts/kontak";
export default function Role() {
  return (
    <section className="pt-[50px]" id="Role">
      <Navimg />
      <div className="container mx-auto px-5 md:px-10 lg:px-24 z-10 mt-20"> 
        <div className="flex flex-col items-center justify-center">
          <div className="px-10 py-10 bg-[#27374D] text-center rounded-[20px]">
            <h1 className="sm:text-4xl leading-snug mb-4">
              <span className="block font-bold text-white text-[50px]">Register</span> 
              <span className="block text-white text-[15px]">Pick Your Role!</span> 
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-8">
              <Link href="/regispsi" className="bg-[#27374D] w-[200px] sm:w-[250px] lg:w-[300px] p-5 rounded-[20px] shadow-lg cursor-pointer transition-transform transform duration-300">
                <div className="overflow-hidden rounded-md bg-[#1F2A3D] p-2">
                  <Image
                    src="/images/psi.png" 
                    alt="Psychologist"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center mt-4 text-lg text-white font-semibold">Psychologist</p>
              </Link>
              <Link href="/regispas" className="bg-[#27374D] w-[200px] sm:w-[250px] lg:w-[300px] p-5 rounded-[20px] shadow-lg cursor-pointer transition-transform transform duration-300">
                <div className="overflow-hidden rounded-md bg-[#1F2A3D] p-2">
                  <Image
                    src="/images/pas.png" 
                    alt="Patient"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center mt-4 text-lg text-white font-semibold">Patient</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </section>
  );
}
