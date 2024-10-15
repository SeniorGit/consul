import Sidebar from "../navbar";
import ProfileCard from "../uii/profilcol";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Jadwal() {
  return (
    <>
      {/* Original Layout for lg Screens */}
      <section className="hidden lg:flex flex-col lg:flex-row min-h-screen bg-[#d2e2f0] p-5 gap-7 mb-30">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-1 gap-5 p-1">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Scheduled Appointments Table */}
            <div className="bg-white shadow-lg rounded-lg flex-1">
              <div className="bg-[#27374D] text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">Scheduled Appointments</h3>
              </div>
              <div className="p-2 overflow-auto">
                <Table className="min-w-[600px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-bold text-black">No</TableHead>
                      <TableHead className="text-bold text-black">Nama</TableHead>
                      <TableHead className="text-bold text-black">Email</TableHead>
                      <TableHead className="text-bold text-black">Phone</TableHead>
                      <TableHead className="text-bold text-black">Date</TableHead>
                      <TableHead className="text-bold text-black">Time</TableHead>
                      <TableHead className="text-bold text-black">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableHead className="text-bold text-black">2001221</TableHead>
                      <TableHead className="text-bold text-black">Windah Batubara</TableHead>
                      <TableHead className="text-bold text-black">batubara@gmailcom</TableHead>
                      <TableHead className="text-bold text-black">085156927865</TableHead>
                      <TableHead className="text-bold text-black">10/10/2010</TableHead>
                      <TableHead className="text-bold text-black">12:30 WIB</TableHead>
                      <TableHead className="text-bold text-black">Action</TableHead>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Profile Card */}
            <div className="lg:w-[450px]">
              <ProfileCard />
            </div>
          </div>

          {/* Appointment History */}
          <div className="bg-white shadow-lg rounded-lg flex-1 lg:w-[900px]">
            <div className="bg-[#27374D] text-white p-4 rounded-t-lg">
              <h3 className="text-xl font-bold">Appointment Histories</h3>
            </div>
            <div className="p-5 overflow-auto">
              <Table className="min-w-[600px]">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-bold text-black">No</TableHead>
                    <TableHead className="text-bold text-black">Nama</TableHead>
                    <TableHead className="text-bold text-black">Email</TableHead>
                    <TableHead className="text-bold text-black">Phone</TableHead>
                    <TableHead className="text-bold text-black">Date</TableHead>
                    <TableHead className="text-bold text-black">Time</TableHead>
                    <TableHead className="text-bold text-black">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableHead className="text-bold text-black">2001221</TableHead>
                    <TableHead className="text-bold text-black">Windah Batubara</TableHead>
                    <TableHead className="text-bold text-black">batubara@gmailcom</TableHead>
                    <TableHead className="text-bold text-black">085156927865</TableHead>
                    <TableHead className="text-bold text-black">10/10/2010</TableHead>
                    <TableHead className="text-bold text-black">12:30 WIB</TableHead>
                    <TableHead className="text-bold text-black">Action</TableHead>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </section>

      {/* New Layout for md and sm Screens */}
      <section className="flex lg:hidden flex-row min-h-screen bg-[#d2e2f0] p-5 gap-7">
        {/* Sidebar */}
        <div className="w-20 md:w-24 h-full flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-1 gap-5 p-1">
          <div className="flex flex-col gap-5">
            {/* Scheduled Appointments Table */}
            <div className="bg-white shadow-lg rounded-lg flex-1">
              <div className="bg-[#27374D] text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">Scheduled Appointments</h3>
              </div>
              <div className="p-2 overflow-auto">
                <Table className="min-w-[600px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-bold text-black">No</TableHead>
                      <TableHead className="text-bold text-black">Nama</TableHead>
                      <TableHead className="text-bold text-black">Email</TableHead>
                      <TableHead className="text-bold text-black">Phone</TableHead>
                      <TableHead className="text-bold text-black">Date</TableHead>
                      <TableHead className="text-bold text-black">Time</TableHead>
                      <TableHead className="text-bold text-black">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableHead className="text-bold text-black">2001221</TableHead>
                      <TableHead className="text-bold text-black">Windah Batubara</TableHead>
                      <TableHead className="text-bold text-black">batubara@gmailcom</TableHead>
                      <TableHead className="text-bold text-black">085156927865</TableHead>
                      <TableHead className="text-bold text-black">10/10/2010</TableHead>
                      <TableHead className="text-bold text-black">12:30 WIB</TableHead>
                      <TableHead className="text-bold text-black">Action</TableHead>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Profile Card */}
            <div className="">
              <ProfileCard />
            </div>
          </div>

          {/* Appointment History */}
          <div className="bg-white shadow-lg rounded-lg flex-1">
            <div className="bg-[#27374D] text-white p-4 rounded-t-lg">
              <h3 className="text-xl font-bold">Appointment Histories</h3>
            </div>
            <div className="p-5 overflow-auto">
              <Table className="min-w-[600px]">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-bold text-black">No</TableHead>
                    <TableHead className="text-bold text-black">Nama</TableHead>
                    <TableHead className="text-bold text-black">Email</TableHead>
                    <TableHead className="text-bold text-black">Phone</TableHead>
                    <TableHead className="text-bold text-black">Date</TableHead>
                    <TableHead className="text-bold text-black">Time</TableHead>
                    <TableHead className="text-bold text-black">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableHead className="text-bold text-black">2001221</TableHead>
                    <TableHead className="text-bold text-black">Windah Batubara</TableHead>
                    <TableHead className="text-bold text-black">batubara@gmailcom</TableHead>
                    <TableHead className="text-bold text-black">085156927865</TableHead>
                    <TableHead className="text-bold text-black">10/10/2010</TableHead>
                    <TableHead className="text-bold text-black">12:30 WIB</TableHead>
                    <TableHead className="text-bold text-black">Action</TableHead>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
