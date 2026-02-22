import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import FilterControl from "./FilterControl";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <div className="rounded-r-xl h-screen py-6 flex flex-col">
      <div className="text-xs px-4 text-gray-500">
        <Link to="/mainboard/dashboard">
          <span>Dashbaord</span>
          <span>/</span>
        </Link>
        <Link to="/mainboard">
          <span>Application</span>
        </Link>
      </div>
      <header className="flex flex-row justify-between items-center pt-4 pb-5 border-b border-[rgb(var(--primary))] px-4">
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
    </div>
  );
};

export default Application;
