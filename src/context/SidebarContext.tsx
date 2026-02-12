import { createContext, useState, type ReactNode } from "react";

export const SidebarContext = createContext({
  expanded: true,
  handleExpand: () => {},
});

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true);

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ expanded, handleExpand }}>
      {children}
    </SidebarContext.Provider>
  );
}
