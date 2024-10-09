import Image from "next/image";

export default function ContactSection() {
  return (
    <>
      <section className="bg-[#27374D] relative text-center pt-[30px]" id="kontak"> {/* Reduced top padding */}
        <div
          style={{
            height: '20vh', // Reduced height for the gradient section
            background: 'linear-gradient(to bottom, #27374D 20%, #FFFFFF 10%)',
          }}
          className="bg-[#27374D]"
        >
          <div className="flex justify-center">
            <div className="flex flex-row items-center justify-between bg-blue-600 px-10 py-4 rounded-full shadow-lg gap-3 w-[600px] max-w-[580px]"> {/* Reduced padding */}
              <h2 className="text-white text-lg sm:text-2xl font-semibold whitespace-nowrap text-center md:text-left">
                Ready To Get Started?
              </h2>
              <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-5 py-1 rounded-md transition-all duration-300 shadow-md w-full md:w-[300px]">
                Contact us!
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto flex flex-col items-center justify-center text-center bg-white">
        <div className="flex items-center mb-4"> {/* Added margin-bottom to create space */}
          <Image src="/images/logo.png" alt="Consulin Logo" width={80} height={80} />
          <h3 className="text-2xl font-semibold ml-4 text-black">Consulin</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Reduced gap */}
          <div className="flex items-center p-4">
            <Image src="/icons/call.png" alt="Phone" width={40} height={40} />
            <div className="ml-3">
              <h4 className="font-bold text-black text-sm sm:text-base text-left">Call</h4>
              <p className="text-blue-600 text-sm sm:text-base">+62 851-3766-0625</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <Image src="/icons/mail.png" alt="Mail" width={40} height={40} />
            <div className="ml-3">
              <h4 className="font-bold text-black text-sm sm:text-base text-left">Mail</h4>
              <p className="text-blue-600 text-sm sm:text-base">humic@telkomuniversity.ac.id</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <Image src="/icons/ig.png" alt="Instagram" width={40} height={40} />
            <div className="ml-3">
              <h4 className="font-bold text-black text-sm sm:text-base text-left">Instagram</h4>
              <p className="text-blue-600 text-sm sm:text-base">@humicengineering</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <Image src="/icons/locf.png" alt="Location" width={40} height={40} />
            <div className="ml-3">
              <h4 className="font-bold text-black text-sm sm:text-base text-left">Address</h4>
              <p className="text-blue-600 text-sm sm:text-base text-left">
                Gedung F (Kultubai Selatan), Universitas Telkom,
                <br />
                Jl. Telekomunikasi, Bandung, Indonesia, 40257
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center text-white relative z-10 bg-[#27374D] rounded-t-[150px] pt-5 flex items-center justify-center h-[100px]"> {/* Adjusted padding and margin */}
        <p className="text-sm sm:text-base">© 2024 Consulin. All rights reserved.</p>
      </div>
    </>
  );
}
