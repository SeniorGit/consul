import Sidebar from "../navbar";
import ProfileCard from "../uii/profilcol";

export default function Jadwal() {
  return (
    <section className=""> 
      <div className="flex min-h-screen bg-[#d2e2f0] p-5 gap-7">
        <Sidebar />
        
        <main className="flex-1 grid lg:grid-rows-2 gap-5 p-1">
          {/* Row 1: Scheduled Appointments and Profile Card */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Scheduled Appointments Section */}
            <div className="bg-white shadow-lg rounded-lg flex-1">
              <div className="bg-[#27374D] text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">Scheduled Appointments</h3>
              </div>
              <div className="p-5">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Add Appointment Rows here */}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* ProfileCard Component */}
            <div className="lg:w-[450px]">
              <ProfileCard />
            </div>
          </div>

          {/* Row 2: Appointment Histories Section */}
          <div className="bg-white shadow-lg rounded-lg flex-1 lg:w-[900px]">
            <div className="bg-[#27374D] text-white p-4 rounded-t-lg">
              <h3 className="text-xl font-bold">Appointment Histories</h3>
            </div>
            <div className="p-5">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add History Rows here */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
