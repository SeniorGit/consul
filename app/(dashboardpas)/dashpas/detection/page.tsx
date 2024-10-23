"use client";
import Sidebar from "../../navbar";
import ProfileCardPasien from "../../component/profilecard";
import DonutChart from "../../component/donut";

export default function Detection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row p-5 gap-7" style={{ background: 'linear-gradient(to top, #ffffff 60%, #003A7C 100%)' }}>
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-7">
        {/* Detection Data Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <h1 className="text-xl font-bold text-[#27374D]">Detection Data</h1>

          {/* Complaint Input */}
          <div>
            <h2 className="text-md font-semibold mb-2">
              Ceritakan keluhanmu hari ini!
            </h2>
            <div className="flex items-start space-x-4">
              <textarea
                className="w-full h-[200px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Hari ini aku cape banget, temen temenku semua bully aku. belum lagi tugas yang numpuk"
              ></textarea>
              <button className="px-4 py-2 bg-[#4D9CE1] text-white rounded-lg">
                Submit
              </button>
            </div>
          </div>


          {/* Results Section */}
          <div className="mt-6">
            <h3 className="text-md font-bold mb-4">Hasil</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-[#CDD7E3] p-4 text-center rounded-lg shadow">
                <p className="text-gray-700 font-semibold">Kemungkinan<br/> Stress</p>
                <DonutChart percentage={10} /> {/* Pass the percentage */}
              </div>

              <div className="flex flex-col items-center bg-[#CDD7E3] p-4 text-center rounded-lg shadow">
                <p className="text-gray-700 font-semibold">Kemungkinan<br/> Anxiety</p>
                <DonutChart percentage={20} /> {/* Pass the percentage */}
              </div>

              <div className="flex flex-col items-center bg-[#CDD7E3] p-4 text-center rounded-lg shadow">
                <p className="text-gray-700 font-semibold">Kemungkinan<br/> Depresi</p>
                <DonutChart percentage={30} /> {/* Pass the percentage */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Profile Section */}
      <aside className="w-full lg:w-1/3">
        <ProfileCardPasien />
      </aside>
    </section>
  );
}
