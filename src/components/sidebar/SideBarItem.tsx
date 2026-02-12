import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";

interface SideBarItemProps {
  icon: React.ReactNode;
  text: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ icon, text }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className="flex flex-row px-4 py-3 gap-2 justify-center items-center rounded-md my-2 cursor-pointer 
                   hover:bg-black"
    >
      {icon}
      <span
        className={`text-[rgb(var(--primary))] hover:text-[rgb(var(--primary-foreground))] ${
          expanded ? "w-50 flex" : "w-0 hidden"
        }`}
      >
        {text}
      </span>
    </li>
  );
};

export default SideBarItem;
