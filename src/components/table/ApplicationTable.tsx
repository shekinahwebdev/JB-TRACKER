import { Edit, Mail, PhoneCall, Search } from "lucide-react";
import { Button } from "../ui/button";

const headers = [
  { label: "Company" },
  { label: "Role" },
  { label: "Industry" },
  { label: "Status" },
  { label: "Source" },
  { label: "Contact" },
  { label: "Date Added" },
  { label: "Quick Action" },
];

const ApplicationTable = () => {
  return (
    <section className="px-4 py-2">
      <div className="border border-gray-100 py-4 bg-white rounded-xl">
        {/* Header */}
        <div className="flex flex-row justify-between pb-3 px-3">
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
            <input
              placeholder="Search"
              className="w-full max-w-4xl text-sm pl-10 pr-4 py-2 border border-gray-100 rounded bg-gray-100 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-500">Showing</span>
            <Button
              size="sm"
              className="bg-black border-2 border-[rgb(var(--primary))] rounded-sm text-xs hover:bg-[rgb(var(--primary))] hover:shadow-sm hover:border-[rgb(var(--black))]"
            >
              <span className="text-[rgb(var(--primary))]  hover:text-black">
                26
              </span>
            </Button>
            <span className="text-[13px] text-gray-500">of 56 results</span>
          </div>
        </div>

        <table className="w-full border border-gray-200 table-auto">
          <thead>
            <tr className="border-b border-gray-100 w-full">
              {headers.map((h) => (
                <th
                  key={h.label}
                  //   colSpan={h.colSpan || 1}
                  className="px-4 py-3.5 text-center text-xs font-600 border border-gray-100 uppercase tracking-wider whitespace-nowrap"
                >
                  <span className="">{h.label}</span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="border border-gray-100 hover:bg-orange-100 hover:cursor-pointer">
              <td className="py-3 pl-4">
                <div className="flex items-center gap-3 h-full">
                  <input
                    type="checkbox"
                    className="checkbox-custom accent-orange-500 hover:cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="text-xs">Vercel</span>
                </div>
              </td>
              {/* Role */}
              <td className="py-3 text-center text-xs">Frontend</td>

              <td className="py-3 text-center text-xs">Technology</td>

              <td className="py-3 text-center text-xs">
                <span className="bg-gray-100 p-2 rounded-xl">Accepted</span>
              </td>

              <td className="py-3 text-center text-xs">LinkedIn</td>

              <td className=" flex flex-col  items-center px-3 py-3 ">
                <div className="flex flex-row items-center justify-center gap-1 text-sm">
                  <Mail size={13} />
                  <span className="text-xs">patricia@gmail.com</span>
                </div>
                <div className="flex flex-row items-center justify-center gap-1 text-sm">
                  <PhoneCall size={13} />
                  <span className="text-xs">+233245124218</span>
                </div>
              </td>

              <td className="py-3 text-center text-xs">Today at 12:40PM</td>

              <td className="py-3 pl-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xs">Edit</span>
                  <Button
                    size="sm"
                    className="rounded-sm text-xs hover:bg-white hover:shadow-sm border border-gray-100"
                  >
                    <Edit size={13} />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>

          {/* Table */}
          <tbody>
            <tr className="border border-gray-100">
              <td className="py-3 pl-4">
                <div className="flex items-center gap-3 h-full">
                  <input
                    type="checkbox"
                    className="checkbox-custom  accent-orange-500"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="text-sm">Vercel</span>
                </div>
              </td>
              {/* Role */}
              <td className="py-3 text-center text-xs">Frontend</td>

              <td className="py-3 text-center text-xs">Technology</td>

              <td className="py-3 text-center text-xs">Accepted</td>

              <td className="py-3 text-center text-xs">LinkedIn</td>

              <td className=" flex flex-col  items-center px-3 py-3">
                <div className="flex flex-row items-center justify-center gap-1 text-sm">
                  <Mail size={13} />
                  <span className="text-xs">patricia@gmail.com</span>
                </div>
                <div className="flex flex-row items-center justify-center gap-1 text-sm">
                  <PhoneCall size={13} />
                  <span className="text-xs">+233245124218</span>
                </div>
              </td>

              <td className="py-3 text-center text-xs">Today at 12:40PM</td>

              <td className="py-3 pl-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xs">Edit</span>
                  <Button
                    size="sm"
                    className="rounded-sm text-xs hover:bg-white hover:shadow-sm border border-gray-100"
                  >
                    <Edit size={13} />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="px-5 pt-3 flex items-center justify-between border-t border-gray-100">
          <span className="text-sm">2 rows selected</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, "...", 8].map((p, i) => (
              <Button
                key={i}
                className={`w-7 h-7 rounded text-xs font-medium transition-colors ${p === 1 ? "bg-[rgb(var(--primary))] text-white" : "hover:bg-gray-100"}`}
              >
                {p}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationTable;
