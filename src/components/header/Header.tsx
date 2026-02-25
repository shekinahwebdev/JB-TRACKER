import { Bell, Calendar, Search } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex items-center py-6 px-4 shadow-xs justify-between">
      <div className="relative w-1/3">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
        <input
          placeholder="search"
          className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-xl placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="flex items-center gap-4 pr-8">
        <Button size="lg" className="bg-gray-200 rounded-xl">
          <Calendar size={18} />
        </Button>
        <div className="relative">
          <Button size="lg" className="bg-gray-200 rounded-xl">
            <Bell size={18} />
          </Button>
          <div
            className="bg-black rounded-full flex items-center justify-center text-white
             w-4 h-4 absolute -top-2 left-7 text-[10px]"
          >
            5
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button size="lg" className="bg-gray-200 rounded-xl">
            <Calendar size={18} />
          </Button>
          <p className="text-xs">Patrick K</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
