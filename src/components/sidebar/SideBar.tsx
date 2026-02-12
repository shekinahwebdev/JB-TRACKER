import { ChevronFirstIcon, ChevronLastIcon } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext, type ReactNode } from "react";

const SideBar = ({ children }: { children: ReactNode }) => {
  const { expanded, handleExpand } = useContext(SidebarContext);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col border-r border-white/25 bg-white shadow-md p-5 rounded-l-xl">
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

        <ul className="flex flex-col gap-10">{children}</ul>
      </nav>
    </aside>
  );
};

export default SideBar;
