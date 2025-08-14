# 📚 Student Data Manager — Temporary Data

A small React application to **add, view, edit, delete, search, and sort student records**.  
All data is stored only in React state (temporary) and will be lost on page refresh.

---

## 📌 Features

### 1️⃣ Add / Edit Student
- Fields:
  - Roll Number (must be unique)
  - Name
  - Department (CSE, ECE, ME, CE, EE)
  - Year (1–4)
  - CGPA (0–10)
- Validation:
  - All fields required
  - CGPA must be between 0 and 10
  - Roll Number must be unique (except when editing)

### 2️⃣ Student Table
- Columns: Roll, Name, Department, Year, CGPA, Actions
- Edit: Loads selected student into the form
- Delete: Removes student

### 3️⃣ Search & Sort
- Search by Roll or Name (case-insensitive, accent-insensitive, typo-tolerant up to 1 edit)
- Sort by:
  - CGPA (ascending/descending)
  - Name (A–Z / Z–A)
- Filters:
  - Department
  - Year
- All filters work together

### 4️⃣ Built-in Tests
- `normalizeName(s)` → lowercase + remove accents
- `isFuzzyMatch(a, b)` → allows 1 insertion, deletion, or replacement
- "Tests" button runs checks and shows **All tests passed ✅** if correct

### 5️⃣ Accessibility & UX
- All inputs have labels
- Buttons have clear text
- Keyboard navigation works (Tab order correct)

---

## 🛠 Tech Stack
- **React** (Functional Components + Hooks)
- **JavaScript (ES6+)**
- **CSS** (basic styling)

---

## 📂 Folder Structure

student-data-manager/
├── src/

│ ├── App.js

│ ├── App.css

│ ├── index.js

│ ├── components/


│ │ ├── StudentForm.js

│ │ ├── StudentTable.js

│ │ ├── SearchSortFilters.js

│ │ ├── Tests.js

│ ├── utils/

│ │ ├── fuzzySearch.js

├── package.json

└── ...



---

## 🚀 Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/ak-jaat-007/student-data-manager.git
   
2. Navigate to the project folder:
   cd student-data-manager
   
3. Install dependencies:
   npm install

4. Start development server:
    npm start
5. Open in browser:
    http://localhost:3000

   
📜 Notes
Data is temporary — refreshing the page clears all students.

Optional: You can enable localStorage to persist data if desired.

👨‍💻 Author
Aman Kaliramna

GitHub: ak-jaat-007



