import Image from "next/image";

export default function Consulin() {
  return (
    <section className="pt-[50px] bg-white" id="consulin">
      <div className="container mx-auto px-5 md:px-10 lg:px-24 z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
          {/* Text Section */}
          <div className="flex-1 text-left lg:pt-16 order-1 lg:order-1"> {/* Set order to 1 for large screens */}
            <h1 className="leading-snug flex flex-col sm:flex-row items-start sm:items-center">
              <span className="bg-[#27374D] text-white text-[20px] sm:text-[25px] font-semibold px-6 py-4 rounded-[20px]">
                CONSULIN
              </span>
              <span className="text-[#4C82CB] text-[18px] sm:text-[22px] lg:text-[25px] ml-3 mt-2 sm:mt-0 font-semibold">
                Therapy that fits your life
              </span>
            </h1>
            <p className="mt-6 text-white bg-[#4C82CB] px-4 py-2 rounded-[30px] inline-block text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
              Consulin brings professional mental health support to your fingertips.
              Our online platform connects you with licensed psychologists, offering
              flexible, secure consultations that fit your schedule. No matter where
              you are, expert help is just a click away. With Consulin, quality
              therapy adapts to your lifestyle, making mental wellness accessible and
              convenient for everyone.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 lg:flex lg:justify-center lg:items-center order-2 lg:order-2"> {/* Set order to 2 for large screens */}
            <div className="overflow-hidden w-full sm:w-[400px] lg:w-[350px] md:rounded-[100px] rounded-[50px] bg-white">
              <div className="flex pt-[50px] justify-center">
                <Image
                  src="/images/cansul.png"
                  alt="awal"
                  width={400} // Adjusted width for smaller size
                  height={225} // Adjusted height to maintain aspect ratio
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
