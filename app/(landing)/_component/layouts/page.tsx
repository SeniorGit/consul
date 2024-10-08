import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[50px] bg-white" id="page">
      <div className="container mx-auto px-5 md:px-10 lg:px-24 z-10">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start">
          {/* Image Section */}
          <div className="flex-1 lg:flex lg:justify-center lg:items-center">
            <div className="overflow-hidden w-full sm:w-[450px] lg:w-[550px] md:rounded-[100px] rounded-[50px] bg-white">
              <div className="flex pt-[50px]">
                <Image
                  src="/images/awal.png"
                  sizes="100vw"
                  width={0}
                  height={0}
                  alt="awal"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-left lg:pt-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
              <span className="text-blue-500">Welcome</span>{" "}
              <span className="text-black">to Consulin</span>
            </h1>
            <div className="mt-4">
              <span className="inline-block bg-red-500 text-white text-sm sm:text-base font-semibold px-3 py-1 rounded-full">
                AI-Powered
              </span>
              <span className="text-gray-700 text-sm sm:text-lg ml-3">
                Mental Health Consultation
              </span>
            </div>
            <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
              Your mental well-being is our priority. Consulin connects you with
              professional psychologists and utilizes AI to provide an initial
              assessment of your mental health. Understand your stress, anxiety,
              and depression levels with our state-of-the-art AI technology.
            </p>
            <div className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md inline-block">
              We help to deal with
            </div>

            {/* Icons Section */}
            <div className="flex space-x-4 mt-6">
              <div className="overflow-hidden w-[100px] sm:w-[120px] lg:w-[150px] bg-white p-2 rounded-md">
                <Image
                  src="/icons/Group 14.png"
                  sizes="100vw"
                  width={0}
                  height={0}
                  alt="Anxiety"
                  className="w-full h-auto"
                />
              </div>
              {/* Add more icons here as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
