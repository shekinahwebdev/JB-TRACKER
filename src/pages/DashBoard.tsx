import SideBar from "@/components/sidebar/SideBar";
import SideBarItem from "@/components/sidebar/SideBarItem";
import { SidebarProvider } from "@/context/SidebarContext";
import { BarChart, FormIcon, LayoutDashboard, Settings } from "lucide-react";

const DashBoard = () => {
  return (
    <main className="flex">
      <SidebarProvider>
        <SideBar>
          <SideBarItem
            icon={
              <LayoutDashboard className="stroke-[rgb(var(--primary))] hover:stroke-[rgb(var(--primary-foreground))]" />
            }
            text="Dashboard"
          />
          <SideBarItem
            icon={
              <FormIcon className="stroke-[rgb(var(--primary))] hover:stroke-[rgb(var(--primary-foreground))]" />
            }
            text="Application"
          />
          <SideBarItem
            icon={
              <BarChart className="stroke-[rgb(var(--primary))] hover:stroke-[rgb(var(--primary-foreground))]" />
            }
            text="Insight"
          />
          <SideBarItem
            icon={
              <Settings className="stroke-[rgb(var(--primary))] hover:stroke-[rgb(var(--primary-foreground))]" />
            }
            text="Settings"
          />
        </SideBar>
      </SidebarProvider>
    </main>
  );
};

export default DashBoard;
