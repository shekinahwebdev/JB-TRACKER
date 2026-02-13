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
      <DropdownMenuTrigger>
        <Button className="">{label}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
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
