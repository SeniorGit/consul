import Sidebar from "../navbar";
import { Switch } from "@/components/ui/switch";

export default function Edit() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen bg-[#d2e2f0] p-5 gap-7">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-5 flex-1">
        {/* Profile Section */}
        <div className="flex-1 flex flex-col gap-5 bg-white rounded-lg shadow-md lg:h-[600px]">
          <div className="bg-[#27374D] text-white rounded-t-lg p-5">
            <h2 className="text-2xl font-semibold">My Profile</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-5 p-10">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src="/images/cewe.png"
                alt="Profile"
                className="rounded-full w-32 h-32 object-cover border border-gray-300"
              />
              <button className="absolute bottom-[-20px] left-[15px] bg-[#27374D] text-sm text-white rounded-[5px]">
                change photo
              </button>
            </div>

            {/* Profile Info */}
            <div className="w-full lg:w-2/3 space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-600">Name</label>
                  <div className="flex items-center gap-3 bg-gray-100 rounded px-4 py-2 mt-1">
                    <input
                      type="text"
                      className="bg-transparent flex-1"
                      defaultValue="Iseey"
                      readOnly
                    />
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600">Number of STR</label>
                  <div className="flex items-center gap-3 bg-gray-100 rounded px-4 py-2 mt-1">
                    <input
                      type="text"
                      className="bg-transparent flex-1"
                      defaultValue="11223344-556677"
                      readOnly
                    />
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-600">Phone Number</label>
                  <div className="flex items-center gap-3 bg-gray-100 rounded px-4 py-2 mt-1">
                    <input
                      type="text"
                      className="bg-transparent flex-1"
                      defaultValue="0813899776543"
                      readOnly
                    />
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600">Email</label>
                  <div className="flex items-center gap-3 bg-gray-100 rounded px-4 py-2 mt-1">
                    <input
                      type="email"
                      className="bg-transparent flex-1"
                      defaultValue="iseey123@gmail.com"
                      readOnly
                    />
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-600">Alamat</label>
                <div className="flex items-center gap-3 bg-gray-100 rounded px-4 py-2 mt-1">
                  <input
                    type="text"
                    className="bg-transparent flex-1"
                    defaultValue="Bandung, Jawa Barat"
                    readOnly
                  />
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                </div>
              </div>

              <div>
                <label className="block text-gray-600">Spesialisasi</label>
                <div className="flex items-center gap-3 bg-gray-100 rounded px-4 py-2 mt-1">
                  <input
                    type="text"
                    className="bg-transparent flex-1"
                    defaultValue="Stress, Trauma, Anxiety"
                    readOnly
                  />
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded text-xs">Stress</span>
                  <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded text-xs">Trauma</span>
                  <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded text-xs">Anxiety</span>
                </div>
              </div>

              <button className="bg-[#1e2a39] text-white rounded px-4 py-2 mt-5">save changes</button>
            </div>
          </div>
          <p>halo</p>
        </div>

        {/* Availability Section */}
        {/* Availability Section */}
<div className="bg-white rounded-lg shadow-md w-auto lg:w-[400px] lg:h-[200px]">
  <div className="bg-[#27374D] p-4 rounded-t-lg">
    <h2 className="text-2xl font-semibold text-white mb-4">Set Availability</h2>
  </div>
  <div className="flex flex-col gap-4 p-5">
    <div className="flex items-center justify-between">
      <span className="text-black">Available</span>
      <Switch />
    </div>
    <div className="flex items-center justify-between">
      <span className="text-black">Busy</span>
      <Switch />
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
