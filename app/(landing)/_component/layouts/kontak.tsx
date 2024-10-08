import Image from "next/image";

export default function ContactSection() {
  return (
    <>
      {/* CTA Section */}
      <section className="relative z-10 text-center mb-16 pt-[50px]" id="kontak">
        <div className="inline-flex flex-col md:flex-row items-center justify-center bg-blue-600 px-6 py-3 rounded-full shadow-lg gap-5 md:gap-10">
          <h2 className="text-white text-2xl font-semibold whitespace-nowrap">
            Ready To Get Started?
          </h2>
          <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-md transition-all duration-300">
            Contact us!
          </button>
        </div>
      </section>

      {/* Contact Info Section with Blue Background */}
      <section className="relative z-10 bg-[#27374D] py-10">
        <div className="container mx-auto px-5 flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/logo.png" alt="Consulin Logo" width={60} height={60} />
            <h3 className="text-xl font-semibold mt-4 text-white">Consulin</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:flex md:flex-wrap justify-center items-center">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold text-white">Call</h4>
              <p className="text-white">+62 851-3766-0625</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold text-white">Mail</h4>
              <p className="text-white">humic@telkomuniversity.ac.id</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold text-white">Instagram</h4>
              <p className="text-white">@humicengineering</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold text-white">Address</h4>
              <p className="text-white text-center md:text-left">
                Gedung F (Kultubai Selatan), Universitas Telkom,
                <br />
                Jl. Telekomunikasi, Bandung, Indonesia, 40257
              </p>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center text-white">
          <p>© 2024 Consulin. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
