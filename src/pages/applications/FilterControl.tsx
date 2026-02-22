import { useState } from "react";
import { initialfilters } from "@/data/constant";
import FilterDropDown from "./FilterDropDown";

const FilterControl = () => {
  const [filters, setFilters] = useState(initialfilters);
  return (
    <section className="flex flex-row px-4 py-5 relative">
      <div className="flex gap-4 justify-evenly overflow-visible">
        <FilterDropDown
          label="Status"
          options={
            Object.keys(filters.status) as (keyof typeof filters.status)[]
          }
          state={filters.status}
          setState={(newState) => setFilters({ ...filters, status: newState })}
        />
        <FilterDropDown
          label="Status"
          options={
            Object.keys(filters.status) as (keyof typeof filters.status)[]
          }
          state={filters.status}
          setState={(newState) => setFilters({ ...filters, status: newState })}
        />
        <FilterDropDown
          label="Status"
          options={
            Object.keys(filters.status) as (keyof typeof filters.status)[]
          }
          state={filters.status}
          setState={(newState) => setFilters({ ...filters, status: newState })}
        />{" "}
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
