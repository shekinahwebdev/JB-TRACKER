import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import KanbanCard from "./KanbanCard";

export const KanbanColumn = () => {
  return (
    // <div
    //   //   ref={drop}
    //   className="flex min-w-[300px] bg-gray-100 p-4 flex flex-col gap-3 h-full border border-gray-100 rounded-t-xl"
    // >
    //   <div className="flex flex-row justify-between items-center pb-1">
    //     <div className="flex flex-row items-center gap-2">
    //       <Button
    //         size="sm"
    //         className="hover:shadow-md hover:border-[rgb(var(--primary))] border rounded border-gray-100"
    //       >
    //         <Plus size={12} />
    //       </Button>
    //       <span className="text-sm">Applied</span>
    //     </div>

    //     <div className="px-2 rounded bg-orange-500">
    //       <span className="text-sm">2</span>
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-3 overflow-y-auto flex-1 pr-1">
    //     <KanbanCard />
    //     <KanbanCard />
    //     <KanbanCard />
    //     <KanbanCard />
    //   </div>
    // </div>
    <div className="flex flex-col min-w-[300px] flex-shrink-0 bg-gray-100 rounded-xl border border-gray-100">
      <div className="sticky top-0 z-10 bg-gray-100 p-4 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button size="sm" className="hover:shadow-md border border-gray-200">
            <Plus size={12} />
          </Button>

          <span className="text-sm font-medium">Applied</span>
        </div>

        <div className="px-2 rounded bg-orange-500 text-white text-sm">2</div>
      </div>

      <div className="flex flex-col gap-3 p-4 overflow-y-auto max-h-[500px]">
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
      </div>
    </div>
  );
};
