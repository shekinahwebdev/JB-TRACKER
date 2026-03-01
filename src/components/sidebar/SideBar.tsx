import {
  ChevronFirstIcon,
  ChevronLastIcon,
  PowerOff,
  Settings,
  Upload,
} from "lucide-react";
import { Button } from "../ui/button";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext, type ReactNode } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ children }: { children: ReactNode }) => {
  const { expanded, handleExpand } = useContext(SidebarContext);
  return (
    <aside className="border-r border-white/25 shadow-md">
      <nav className="h-full flex flex-col justify-between bg-white px-5">
        <div className="p-6 flex items-center justify-between gap-10">
          <p
            className={`font-bold text-xl text-orange-600 transition-all ${
              expanded ? "flex" : "hidden"
            }`}
          >
            JB TRACKER
          </p>
          <Button
            variant="secondary"
            onClick={handleExpand}
            className="hover:bg-orange-100  hover:cursor-pointer"
            size="sm"
          >
            {expanded ? (
              <ChevronFirstIcon size={20} />
            ) : (
              <ChevronLastIcon size={20} />
            )}
          </Button>
        </div>

        <ul className="flex flex-col gap-10 flex-1">{children}</ul>

        {expanded ? (
          <div className="relative h-[20vh] overflow-hidden border  border-gray-300 rounded-xl flex flex-col justify-between p-4">
            <div className="absolute inset-0 bg-[url(/assets/logo.png)] bg-center bg-cover bg-no-repeat"></div>
            <div className="absolute inset-0 bg-black/5 backdrop-blur-lg"></div>
            <h2 className="relative z-10 text-xl font-semibold">
              Upgrade to <br /> Pro
            </h2>
            <Link to="">
              <Button className="relative z-10 w-full bg-black text-white py-7 hover:text-[rgb(var(--primary))]">
                Upgrade Today
              </Button>
            </Link>
          </div>
        ) : (
          <div className="relative h-[9vh] overflow-hidden flex flex-col rounded-xl">
            <div className="absolute inset-0 bg-[url(/assets/logo.png)] bg-center bg-cover bg-no-repeat"></div>
            <div className="absolute inset-0 bg-black/5 backdrop-blur-md"></div>
            <div className="relative flex flex-col justify-center px-2">
              <span className="text-center"> Pro</span>
              <Link to="">
                <Button className="bg-black text-white w-full px-2">
                  <Upload className="absolute w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}

        <div
          className={`border border-gray-400 rounded-2xl my-4 py-2 px-2 flex ${expanded ? "flex-row" : "flex-col items-center"} gap-3`}
        >
          <Link to="/mainboard/settings">
            <Button className="bg-[rgb(var(--primary))] rounded-xl text-[rgb(var(--background))]">
              <Settings className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/logout">
            <Button className="bg-black rounded-xl text-[rgb(var(--background))]">
              <PowerOff className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
