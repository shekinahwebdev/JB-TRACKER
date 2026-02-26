import { SelectDemo } from "@/components/SelectDemo";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ChevronDown,
  LayoutGrid,
  List,
  PlusIcon,
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
          <h1 className="text-2xl pb-2">Job Applications</h1>
          <p className="text-[rgb(var(--primary))]">
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

      <section className="flex flex-row justify-between items-center py-5 px-4 border-b border-gray-100">
        <div className="flex flex-row items-center gap-2">
          <div className="flex items-center justify-between gap-3 border border-black/30 rounded-sm px-4 py-2 w-48 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span className="text-xs">Select Date</span>
            </div>
            <ChevronDown size={16} />
          </div>
          <SelectDemo />
        </div>

        <div className="flex flex-row items-center">
          <SelectDemo />
          <div className="flex items-center gap-2 p-1">
            <Button className="hover:bg-gray-100">
              <List size={19} />
              List
            </Button>
            <Button className="hover:bg-gray-100">
              <LayoutGrid size={19} />
              List
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Application;
