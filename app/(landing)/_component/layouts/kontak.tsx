import Image from "next/image";
export default function ContactSection() {
  return (
    <>
      <section className="relative bg-white text-center pt-10 pb-22" id="kontak">
        <div className="relative">
          <div className="absolute inset-0 top-auto h-8 bg-[#27374D] w-full z-0"></div> 
          <div className="relative flex justify-center items-center z-10">
            <div className="flex flex-row items-center justify-between bg-blue-600 px-10 py-4 rounded-full shadow-lg w-[900px] max-w-[90%] gap-5">
              <h2 className="text-white text-xl sm:text-3xl font-semibold">Ready To Get Started?</h2>
              <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-2 rounded-md transition-all duration-300 shadow-lg">
                Contact us!
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#27374D] text-white py-16 relative">
        <div className="absolute top-0 left-0 w-[120px] h-[120px]">
          <Image src="/images/curve-left.png" alt="Left Decorative Curve" width={120} height={120} />
        </div>
        <div className="absolute top-0 right-0 w-[120px] h-[120px]">
          <Image src="/images/curve-right.png" alt="Right Decorative Curve" width={120} height={120} />
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between px-5 lg:px-24">
          <div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0">
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="Consulin Logo" width={80} height={80} />
              <h3 className="text-xl font-semibold ml-4">Consulin</h3>
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center lg:text-left">
              AI-Powered Mental Health Consultation
            </p>
          </div>
          <div className="mb-10 lg:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400 text-sm">
              Address:
              <br />
              Gedung F (Kultubai Selatan), Universitas Telkom,
              <br />
              Jl. Telekomunikasi, Terusan Buah Batu, Bandung,
              <br />
              Indonesia, 40257
            </p>
            <p className="text-gray-400 mt-4 text-sm">
              Call: +62 851-3766-0625
              <br />
              Mail: humic@telkomuniversity.ac.id
              <br />
              Instagram: @humicengineering
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Home</li>
              <li>Our Services</li>
              <li>Top Psikologist</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#27374D] text-white py-4">
        <div className="flex justify-center">
          <hr className="border-gray-400 mb-4 w-[700px]" />
        </div>
        <p className="text-center text-gray-400 text-sm">
          © 2024 Consulin. All rights reserved.
        </p>
      </div>
    </>
  );
}