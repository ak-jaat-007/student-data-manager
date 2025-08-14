import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import SearchSortFilters from "./components/SearchSortFilters";
import Tests from "./components/Tests";
import { isFuzzyMatch } from "./utils/fuzzySearch";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const saveStudent = (student) => {
    if (editingStudent) {
      setStudents(students.map(s => s.roll === editingStudent.roll ? student : s));
    } else {
      setStudents([...students, student]);
    }
    setEditingStudent(null);
  };

  const deleteStudent = (roll) => {
    setStudents(students.filter(s => s.roll !== roll));
  };

  const filtered = students
    .filter(s => {
      if (search) {
        return isFuzzyMatch(search, s.roll) || isFuzzyMatch(search, s.name);
      }
      return true;
    })
    .filter(s => deptFilter ? s.dept === deptFilter : true)
    .filter(s => yearFilter ? s.year === yearFilter : true)
    .sort((a, b) => {
      if (!sortBy) return 0;
      const valA = sortBy === "name" ? a.name.toLowerCase() : a.cgpa;
      const valB = sortBy === "name" ? b.name.toLowerCase() : b.cgpa;
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  const resetFilters = () => {
    setSearch("");
    setDeptFilter("");
    setYearFilter("");
    setSortBy("");
    setSortOrder("asc");
  };

  return (
    <div className="App">
      <h1>Student Data Manager — Temporary Data</h1>
      <Tests />
      <SearchSortFilters
        search={search} setSearch={setSearch}
        deptFilter={deptFilter} setDeptFilter={setDeptFilter}
        yearFilter={yearFilter} setYearFilter={setYearFilter}
        sortBy={sortBy} setSortBy={setSortBy}
        sortOrder={sortOrder} setSortOrder={setSortOrder}
        onReset={resetFilters}
      />
      <StudentForm
        onSave={saveStudent}
        editingStudent={editingStudent}
        onClear={() => setEditingStudent(null)}
        students={students}
      />
      <StudentTable
        students={filtered}
        onEdit={(s) => setEditingStudent(s)}
        onDelete={deleteStudent}
      />
    </div>
  );
}

export default App;
