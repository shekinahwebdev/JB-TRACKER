import { Mail, MoreHorizontalIcon, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";

const KanbanCard = () => {
  return (
    <div className="border-2  border-[rgb(var(--primary))] bg-black text-orange-500 rounded px-4 py-2 w-full text-sm flex flex-col justify-center gap-1 transition hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm">Vercel</h2>
        <Button
          size="sm"
          className="hover:shadow-md hover:border-[rgb(var(--primary))] border rounded border-gray-100"
        >
          <MoreHorizontalIcon size={12} />
        </Button>
      </div>
      <p className="text-[13px] text-gray-600">Frontend Intern</p>
      <div className="flex flex-row items-center justify-start gap-1 text-sm mt-1">
        <Mail size={13} className="text-gray-400" />
        <span className="text-xs">patricia@gmail.com</span>
      </div>
      <div className="flex flex-row items-center justify-start gap-1 text-sm mb-2">
        <PhoneCall size={13} className="text-gray-400" />
        <span className="text-xs">+233245124218</span>
      </div>

      <div className="flex flex-row justify-between items-center border-t pt-2">
        <div className="text-xs text-orange-500 bg-slate-100 px-2 py-1 rounded">
          LinkedIn
        </div>
        <span className="text-xs">2 March</span>
      </div>
    </div>
  );
};

export default KanbanCard;
