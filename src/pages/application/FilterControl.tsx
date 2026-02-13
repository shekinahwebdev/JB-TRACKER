import { useState } from "react";
import FilterDropDown from "./FilterDropDown";
import { initialfilters } from "@/data/constant";

const FilterControl = () => {
  const [filters, setFilters] = useState(initialfilters);
  return (
    <section className="">
      <div>
        <FilterDropDown
          label="Status"
          options={
            Object.keys(filters.status) as (keyof typeof filters.status)[]
          }
          state={filters.status}
          setState={(newState) => setFilters({ ...filters, status: newState })}
        />
      </div>
    </section>
  );
};

export default FilterControl;
