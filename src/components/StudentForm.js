import React, { useState, useEffect } from "react";

export default function StudentForm({ onSave, editingStudent, onClear, students }) {
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [dept, setDept] = useState("CSE");
  const [year, setYear] = useState("1");
  const [cgpa, setCgpa] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setRoll(editingStudent.roll);
      setName(editingStudent.name);
      setDept(editingStudent.dept);
      setYear(editingStudent.year);
      setCgpa(editingStudent.cgpa);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roll || !name || !dept || !year || cgpa === "") {
      alert("All fields are required");
      return;
    }
    if (cgpa < 0 || cgpa > 10) {
      alert("CGPA must be between 0 and 10");
      return;
    }
    const duplicate = students.find(s => s.roll === roll);
    if (!editingStudent && duplicate) {
      alert("Roll number must be unique");
      return;
    }
    onSave({ roll, name, dept, year, cgpa: parseFloat(cgpa) });
    handleClear();
  };

  const handleClear = () => {
    setRoll("");
    setName("");
    setDept("CSE");
    setYear("1");
    setCgpa("");
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <label>
        Roll Number:
        <input value={roll} onChange={(e) => setRoll(e.target.value)} />
      </label>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Department:
        <select value={dept} onChange={(e) => setDept(e.target.value)}>
          <option>CSE</option>
          <option>ECE</option>
          <option>ME</option>
          <option>CE</option>
          <option>EE</option>
        </select>
      </label>
      <label>
        Year:
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </label>
      <label>
        CGPA:
        <input type="number" step="0.01" value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
      </label>
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </div>
    </form>
  );
}
