import Sidebar from "../navbar";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function Ketersediaan() {
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
                <h3 className="text-xl font-bold">Availables</h3>
              </div>
              <div className="p-2 overflow-auto">
                <Table className="min-w-[600px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-bold text-black">No</TableHead>
                      <TableHead className="text-bold text-black">Date</TableHead>
                      <TableHead className="text-bold text-black">Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableHead className="text-bold text-black">1</TableHead>
                      <TableHead className="text-bold text-black">12/12/2024</TableHead>
                      <TableHead className="text-bold text-black">14:00</TableHead>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg">
              <div className="bg-[#27374D] text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">Availables</h3>
              </div>
              <div className="p-2 overflow-auto">
                <Table className="min-w-[600px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-bold text-black">No</TableHead>
                      <TableHead className="text-bold text-black">Patient</TableHead>
                      <TableHead className="text-bold text-black">Time</TableHead>
                      <TableHead className="text-bold text-black">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableHead className="text-bold text-black">1</TableHead>
                      <TableHead className="text-bold text-black">John Doe</TableHead>
                      <TableHead className="text-bold text-black">10:00</TableHead>
                      <TableHead className="text-bold text-black">Reschedule</TableHead>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col gap-5">
            <div className="bg-white shadow-lg rounded-lg">
              <div className="bg-[#27374D] text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">Set Availability</h3>
              </div>
              <div className="p-4">
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      Pick Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      Start Time
                    </label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      End Time
                    </label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white p-2 rounded">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
