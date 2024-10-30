import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Registerpsi() {
  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-cover bg-center"
      id="regispsi"
      style={{
        backgroundImage: `url(/images/bgpas.png)`, 
      }}
    >
      <div className="absolute top-0 left-0 m-6 flex items-center space-x-4 z-10">
        <Image src="/images/logo2.png" alt="Logo" width={60} height={60} className="mr-2" />
        <Link href="/Role">
          <Button className="bg-transparent font-bold hover:bg-blue-100 rounded-3xl text-sm flex items-center text-white">
            <Image src="/icons/arrow-down.png" alt="Back arrow" width={24} height={24} className="mr-2 filter-white" />
            Back
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-left justify-center w-full lg:w-1/2 p-6 md:p-10 lg:px-20 mt-24 lg:mt-0 text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold text-white leading-snug lg:leading-normal">
        Need someone to talk to? We are here to listen.
        </h1>
        <p className="text-lg lg:text-xl text-white mt-4 lg:mt-2">
        Start your new story here
        </p>

        <Link href="/loginpas">
          <button className="mt-6 w-[200px] bg-[#4C82CB] text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row items-center w-full lg:w-1/2 p-6 md:p-10 lg:px-16 mx-auto min-h-screen lg:mt-0">
        <div className="w-full flex flex-col space-y-6 shadow-lg rounded-lg p-8 relative z-10">
          <h1 className="text-2xl lg:text-3xl font-semibold text-left text-white">Create new account</h1>
          <p className="text-left text-white">
            Already have an account? <a href="/loginpas" className="text-[#E11C1C]">Login!</a>
          </p>
          <form className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-semibold text-white">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-full mt-4 lg:mt-0">
                <label htmlFor="phone" className="block text-sm font-semibold text-white">Phone Number</label>
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter your Phone Number"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  pattern="[0-9]*"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-white">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-semibold text-white">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-[200px] bg-[#4C82CB] text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
