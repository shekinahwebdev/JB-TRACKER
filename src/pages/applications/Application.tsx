import KanbanBoard from "@/components/kanban/KanbanBoard";
import { SortOptionDemo } from "@/components/SelectDemo";
import { StatusDemo } from "@/components/StatusDemo";
import ApplicationTable from "@/components/table/ApplicationTable";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ChevronDown,
  LayoutGrid,
  List,
  PlusIcon,
  RefreshCcw,
  Trash,
} from "lucide-react";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <div className="h-screen py-5 flex flex-col">
      <div className="text-xs px-4 text-gray-500">
        <Link to="/mainboard/dashboard">
          <span>Dashbaord</span>
          <span>/</span>
        </Link>
        <Link to="/mainboard">
          <span>Application</span>
        </Link>
      </div>
      <header className="flex flex-row justify-between items-center pt-4 pb-3 border-b border-[rgb(var(--primary))] px-4">
        <div>
          <h1 className="text-xl pb-2">Job Applications</h1>
          <p className="text-[rgb(var(--primary))] text-sm">
            Track, manage and analyze your job hunt
          </p>
        </div>
        <Button
          size="lg"
          className="bg-[rgb(var(--black))] text-[rgb(var(--background))] hover:bg-[rgb(var(--primary))] cursor-pointer"
        >
          <PlusIcon size={15} />
          <span>Add Application</span>
        </Button>
      </header>

      <div className="border-b border-gray-100  py-5 px-4 mb-5">
        <section className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center justify-between gap-3 border border-black/30 rounded-sm px-4 py-2 w-48 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span className="text-xs">Select Date</span>
              </div>
              <ChevronDown size={16} />
            </div>
            <SortOptionDemo />
          </div>
          <div className="flex flex-row items-center gap-1">
            <StatusDemo />
            <div className="flex items-center gap-3 p-1">
              <Button className="border border-gray-100 rounded-sm text-sm hover:bg-white hover:shadow-sm inline-flex items-center gap-1">
                <List size={15} />
                <span className="leading-none">List</span>
              </Button>
              <Button className="border border-gray-100 rounded-sm text-sm hover:bg-white hover:shadow-sm inline-flex items-center gap-1">
                <LayoutGrid size={15} />
                <span className="leading-none">Grid</span>
              </Button>
            </div>
          </div>
        </section>
        <div className="mt-3 flex items-center justify-between text-sm text-red-500">
          <p className="text-xs text-[rgb(var(--primary))]">2 items removed</p>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="border border-gray-100 rounded-sm text-xs hover:bg-white hover:shadow-sm"
            >
              <Trash size={12} />
              Delete
            </Button>

            <Button
              size="sm"
              className="border text-black border-gray-100 rounded-sm text-xs hover:bg-white hover:shadow-sm"
            >
              <RefreshCcw size={12} />
            </Button>
          </div>
        </div>
      </div>
      <ApplicationTable />
      {/* <KanbanBoard /> */}
    </div>
  );
};

export default Application;
