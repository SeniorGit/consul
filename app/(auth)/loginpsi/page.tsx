import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Registerpsi() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50" id="regispsi">
      {/* Back Button and Logo */}
      <div className="absolute top-0 left-0 m-6 flex items-center space-x-4 z-10">
        <Image src="/images/logo.png" alt="Logo" width={60} height={60} className="mr-2" />
        <Link href="/rolelog">
          <Button className="bg-transparent text-black font-bold hover:bg-blue-100 rounded-3xl text-sm flex items-center">
            <Image src="/icons/arrow-down.png" alt="Back arrow" width={24} height={24} className="mr-2" />
            Back
          </Button>
        </Link>
      </div>

      {/* Form and Image Container */}
      <div className="flex flex-col lg:flex-row items-center w-full lg:max-w-7xl p-6 md:p-10 lg:px-24 mx-auto min-h-screen mt-24 lg:mt-0"> {/* Add margin-top for mobile */}
        {/* Form Section */}
        <div className="lg:w-1/2 flex flex-col space-y-4 lg:space-y-6 bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-center">Welcome Back 👋🏼</h1>
          <p className="text-center mb-4 font-semibold">
            Don't have an account? <a href="/regispsi" className="text-[#E11C1C]">Register!</a>
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="str" className="block text-sm font-semibold">Number of STR</label>
              <input
                type="number"
                id="str"
                placeholder="Enter your STR Number"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                min="0"
                pattern="[0-9]*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Updated Login Button */}
            <div className="flex justify-end">
              <Link href="/dashpsi">
                <button type="submit" className="w-[200px] bg-[#E8F0FE] text-[#4C82CB] py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>

        {/* Illustration Section */}
        <div className="hidden lg:flex lg:w-[500px] justify-center items-center relative bg-[#27374D] px-20 md:px-10 lg:px-20 z-10 mt-25">
          <div className="relative flex justify-center items-center h-full">
            <Image src="/images/log.png" alt="Illustration" width={500} height={500} className="max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
