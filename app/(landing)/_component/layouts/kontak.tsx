import Image from "next/image";
import Link from "next/link";
export default function ContactSection() {
  return (
    <>
      <section className="relative bg-white text-center pt-10 pb-22" id="kontak">
        <div className="relative">
          <div className="absolute inset-0 top-auto h-8 bg-[#27374D] w-full z-0"></div> 
          <div className="relative flex justify-center items-center z-10">
            <div className="flex flex-row items-center justify-between bg-[#4C82CB] px-10 py-4 rounded-full shadow-lg w-[900px] max-w-[90%] gap-5">
              <h2 className="text-white text-xl sm:text-3xl font-semibold">Ready To Get Started?</h2>
              <button className="bg-[#4C82CB] text-white px-6 py-2 rounded-md transition-all duration-300 shadow-lg border-[1px] border-black font-semibold">
                Contact us!
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#27374D] text-white py-16 relative">
      <div className="relative">
        <div className="absolute top-0 left-0 w-[120px] h-[120px] block lg:hidden">
          <Image src="/icons/kiri.png" alt="Left Decorative Curve" width={500} height={500} />
        </div>
        <div className="absolute top-0 right-0 w-[120px] h-[120px] block lg:hidden">
          <Image src="/icons/kanan.png" alt="Right Decorative Curve" width={500} height={500} />
        </div>
        
        <div className="absolute top-0 left-0 w-[360px] h-[120px] hidden lg:block">
          <Image src="/icons/kiri.png" alt="Left Decorative Curve" width={500} height={500} />
        </div>
        <div className="absolute top-0 right-0 w-[360px] h-[120px] hidden lg:block">
          <Image src="/icons/kanan.png" alt="Right Decorative Curve" width={500} height={500} />
        </div>
      </div>

        <div className="container mx-auto flex flex-col lg:flex-row justify-between px-5 lg:px-24">
          <div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0">
            <div className="flex items-center">
              <Image src="/images/logo2.png" alt="Consulin Logo" width={80} height={80} />
              <h3 className="text-xl font-semibold ml-4">Consulin</h3>
            </div>
            <p className="text-white text-sm mt-2 text-center lg:text-left">
              AI-Powered Mental Health Consultation
            </p>
          </div>
          <div className="mb-10 lg:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-white text-sm">
              Address:
              <br />
              Gedung F (Kultubai Selatan), Universitas Telkom,
              <br />
              Jl. Telekomunikasi, Terusan Buah Batu, Bandung,
              <br />
              Indonesia, 40257
            </p>
            <p className="text-white mt-4 text-sm">
              Call:<br/> +62 851-3766-0625
              <br />
              <br />
              Mail:<br/> humic@telkomuniversity.ac.id
              <br />
              <br />
              Instagram:<br/> @humicengineering
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="text-white text-sm space-y-2">
              <li>Home</li>
              <li>Our Services</li>
              <li>Top Psikologist</li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#27374D] text-white py-4">
        <div className="flex justify-center">
          <hr className="border-whiter mb-4 w-[800px]" />
        </div>
        <p className="text-center text-white text-sm font-semibold">
          © 2024 Consulin. All rights reserved.
        </p>
      </div>
    </>
  );
}
