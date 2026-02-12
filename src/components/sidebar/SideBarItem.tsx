import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

interface SideBarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  end?: boolean;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ icon, text, to, end }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <li>
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          `flex flex-row px-4 py-3 gap-2 ${
            isActive ? "bg-black text-orange-500" : ""
          } justify-center items-center rounded-md hover:bg-black cursor-pointer `
        }
      >
        {icon}
        <span
          className={`text-[rgb(var(--primary))] hover:text-[rgb(var(--primary-foreground))] ${
            expanded ? "w-50 flex" : "w-0 hidden"
          }`}
        >
          {text}
        </span>
      </NavLink>
    </li>
  );
};

export default SideBarItem;
