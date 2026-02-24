import { Outlet } from "react-router-dom";
import SideBar from "@/components/sidebar/SideBar";
import SideBarItem from "@/components/sidebar/SideBarItem";
import { SidebarProvider } from "@/context/SidebarContext";
import { BarChart, FormIcon, LayoutDashboard, Settings } from "lucide-react";
import Header from "./components/header/Header";

const DashBoardLayout = () => {
  return (
    <SidebarProvider>
      <main className="flex rounded-xl overflow-hidden">
        <SideBar>
          <SideBarItem
            icon={
              <LayoutDashboard className="stroke-[rgb(var(--primary))] hover:stroke-[rgb(var(--primary-foreground))]" />
            }
            text="Dashboard"
            to="/mainboard/dashboard"
          />
          <SideBarItem
            icon={
              <FormIcon className="stroke-[rgb(var(--primary))] hover:stroke-[rgb(var(--primary-foreground))]" />
            }
            text="Application"
            to="/mainboard"
            end={true}
          />
          <SideBarItem
            icon={
              <BarChart className="stroke-[rgb(var(--primary))] hover:stroke-[rgb(var(--primary-foreground))]" />
            }
            text="Insight"
            to="/mainboard/insight"
          />
          <SideBarItem
            icon={
              <Settings className="stroke-[rgb(var(--primary))] hover:stroke-[rgb(var(--primary-foreground))]" />
            }
            text="Settings"
            to="/mainboard/settings"
          />
        </SideBar>
        <div className="w-full  min-h-screen bg-white">
          <Header />
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashBoardLayout;
