import React from "react";

export default function SearchSortFilters({
  search, setSearch,
  deptFilter, setDeptFilter,
  yearFilter, setYearFilter,
  sortBy, setSortBy,
  sortOrder, setSortOrder,
  onReset
}) {
  return (
    <div className="filters">
      <input
        placeholder="Search by roll or name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)}>
        <option value="">All Departments</option>
        <option>CSE</option>
        <option>ECE</option>
        <option>ME</option>
        <option>CE</option>
        <option>EE</option>
      </select>
      <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
        <option value="">All Years</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <button onClick={() => {
        setSortBy("cgpa");
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      }}>
        Sort CGPA ({sortOrder})
      </button>
      <button onClick={() => {
        setSortBy("name");
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      }}>
        Sort Name ({sortOrder})
      </button>
      <button onClick={onReset}>Reset Filters</button>
    </div>
  );
}
