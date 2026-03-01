import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function StatusDemo() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-42.5  border border-black/30">
        <p className="text-gray-400 text-xs">Sort:</p>
        <SelectValue placeholder="Default" className="border" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="">Default</SelectLabel>
          <SelectItem value="apple">Applied</SelectItem>
          <SelectItem value="banana">Interview</SelectItem>
          <SelectItem value="blueberry">Accepted</SelectItem>
          <SelectItem value="grapes">Rejected</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
