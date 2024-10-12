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
  const appointments = [
    {
      id: "2001221",
      name: "Windah Batubara",
      email: "batubara@gmail.com",
      phone: "085156927865",
      date: "10/10/2010",
      time: "12:30 WIB",
    },
  ];
  return (
    <>
      <section className="flex flex-col lg:flex-row min-h-screen bg-[#d2e2f0] p-5 gap-7">
        <Sidebar />
        <div className="lg:hidden mt-[50px]">
          <Sidebar />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 flex-1">
        
          <div className="flex-1 flex flex-col gap-5 lg:flex-cols">
            <div className="bg-white shadow-lg rounded-lg">
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
                    {appointments.map((appointment, index) => (
                      <TableRow key={appointment.id}>
                        <TableHead className="text-bold text-black">{index + 1}</TableHead>
                        <TableHead className="text-bold text-black">{appointment.name}</TableHead>
                        <TableHead className="text-bold text-black">{appointment.email}</TableHead>
                        <TableHead className="text-bold text-black">{appointment.phone}</TableHead>
                        <TableHead className="text-bold text-black">{appointment.date}</TableHead>
                        <TableHead className="text-bold text-black">{appointment.time}</TableHead>
                        <TableHead className="text-bold text-black">Action</TableHead>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          <div className="bg-white shadow-lg rounded-lg">
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
                  {appointments.map((appointment, index) => (
                    <TableRow key={appointment.id}>
                      <TableHead className="text-bold text-black">{index + 1}</TableHead>
                      <TableHead className="text-bold text-black">{appointment.name}</TableHead>
                      <TableHead className="text-bold text-black">{appointment.email}</TableHead>
                      <TableHead className="text-bold text-black">{appointment.phone}</TableHead>
                      <TableHead className="text-bold text-black">{appointment.date}</TableHead>
                      <TableHead className="text-bold text-black">{appointment.time}</TableHead>
                      <TableHead className="text-bold text-black">Action</TableHead>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          </div>
        <div className="order-1 lg:order-none lg:w-[450px]">
            <ProfileCard />
          </div>
        </div>
      </section>
    </>
  );
}
