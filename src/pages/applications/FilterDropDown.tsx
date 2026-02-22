import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterDropDownProps<T> {
  label: string;
  options: (keyof T)[];
  state: T;
  setState: (newState: T) => void;
}

const FilterDropDown = <T extends Record<string, boolean>>({
  label,
  options,
  state,
  setState,
}: FilterDropDownProps<T>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-orange-600">{label}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 min-w-[160px] rounded-md border bg-amber-800 p-1 text-white shadow-md">
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option as string}
            checked={state[option]}
            onCheckedChange={(checked) =>
              setState({ ...state, [option]: checked } as T)
            }
          >
            {String(option)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropDown;
