# Student Data Manager — React App

A small React application to add, view, edit, delete, search, and sort student records.  
Data is stored temporarily in React state (no backend). Optional use of `localStorage`.

---

## 🚀 Live Demo
[Click here to view the live app](https://ak-jaat-007.github.io/student-data-manager/)

## 📂 GitHub Repository
[View on GitHub](https://github.com/ak-jaat-007/student-data-manager)

---

## 📋 Features
- **Add Student Form**
  - Roll Number (unique while app is open)
  - Name
  - Department (CSE, ECE, ME, CE, EE)
  - Year (1–4)
  - CGPA (0–10)
  - Validation: All fields required, CGPA range check, Roll number uniqueness

- **Student Table**
  - Edit: Load selected student into form
  - Delete: Remove student record

- **Search & Sort**
  - Search by Roll or Name (case-insensitive, fuzzy search with 1 edit tolerance)
  - Sort by CGPA or Name (ascending/descending)
  - Filter by Department & Year

- **Tests**
  - Built-in small test suite with `normalizeName` and `isFuzzyMatch` validation

- **Accessibility**
  - Labels for all inputs
  - Clear button text
  - Keyboard navigation support

---

## 🛠️ Tech Stack
- React (Functional Components + Hooks)
- JavaScript
- CSS

---

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/ak-jaat-007/student-data-manager.git

# Navigate into the folder
cd student-data-manager

# Install dependencies
npm install

# Start development server
npm start


🌐 Deployment
This project is deployed using GitHub Pages.
To deploy:


npm run deploy

📄 License
This project is for assignment/demo purposes.


📜 Notes
Data is temporary — refreshing the page clears all students.

Optional: You can enable localStorage to persist data if desired.

👨‍💻 Author
Aman Kaliramna

GitHub: ak-jaat-007



