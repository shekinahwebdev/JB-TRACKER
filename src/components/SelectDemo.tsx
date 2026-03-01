import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SortOptionDemo() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-42.5  border border-black/30">
        <p className="text-gray-400 text-xs">Sort:</p>
        <SelectValue placeholder="Default" className="border" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="">Default</SelectLabel>
          <SelectItem value="apple">Last Added</SelectItem>
          <SelectItem value="banana">Recent Added</SelectItem>
          <SelectItem value="blueberry">Newest Action</SelectItem>
          <SelectItem value="grapes">Oldest Action</SelectItem>
          {/* <SelectItem value="pineapple">Pineapple</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
