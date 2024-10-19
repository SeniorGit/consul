import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-cover bg-center"
      id="loginPage"
      style={{
        backgroundImage: `url(/images/bgpas.png)`, // Set your background image here
      }}
    >
      {/* Back Button and Logo */}
      <div className="absolute top-0 left-0 m-6 flex items-center space-x-4 z-10">
        <Image src="/images/logo2.png" alt="Logo" width={60} height={60} className="mr-2" />
        <Link href="/rolelog">
          <Button className="bg-transparent text-white font-bold hover:bg-blue-100 rounded-3xl text-sm flex items-center">
            <Image src="/icons/arrow-down.png" alt="Back arrow" width={24} height={24} className="mr-2 text-white" />
            Back
          </Button>
        </Link>
      </div>

      {/* Main content wrapper to ensure everything is stacked properly on small and medium screens */}
      <div className="flex flex-col items-center justify-center w-full lg:flex-row mt-20 lg:mt-0 p-6 md:p-10 lg:px-24">
        {/* Left Side - Welcome Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Welcome back. Enter your safe space and let your worries melt away.
          </h1>
          <Link href="/regispas">
            <button className="w-[200px] bg-[#4C82CB] text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
              Register
            </button>
          </Link>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 shadow-lg rounded-lg p-6 md:p-8 lg:p-10 z-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-left text-white">Welcome Back 👋</h1>
          <p className="text-left mb-4 font-semibold text-white">
            Don&apos;t have an account? <Link href="/regispas" className="text-[#E11C1C]">Register!</Link>
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-white">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Login Button */}
            <div className="flex justify-end">
              <Link href="/dashpas">
                <Button
                  type="submit"
                  className="w-[200px] bg-[#4C82CB] text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
                >
                  Login
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
