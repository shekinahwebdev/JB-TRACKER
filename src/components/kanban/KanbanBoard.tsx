import { KanbanColumn } from "./KanbanColumn";

const KanbanBoard = () => {
  return (
    // <div className="flex gap-4 h-[calc(100vh-280px)] overflow-x-auto pb-4 items-start w-full">
    //   <KanbanColumn />
    //   <KanbanColumn />
    //   <KanbanColumn />
    //   <KanbanColumn />
    // </div>
    <div className="flex gap-4 overflow-x-auto pb-4 w-full scroll-smooth items-center">
      <KanbanColumn />
      <KanbanColumn />
      <KanbanColumn />
      <KanbanColumn />
    </div>
  );
};

export default KanbanBoard;
