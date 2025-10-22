# 🧩 PLP Task Manager

A **React + Vite** powered **Task Management Application** built with **Tailwind CSS**, featuring dark/light theme support, reusable components, and persistent local storage.

---

## 🚀 Features

- ✅ Add, complete, and delete tasks easily
- 🌓 Theme toggle (Light/Dark mode) using Context API
- 💾 Tasks are saved automatically in `localStorage`
- 🧱 Reusable UI components (Button, Card, Navbar, Footer)
- ⚡ Built with **Vite** for fast development
- 🎨 Styled with **Tailwind CSS** for responsive design

---

## 🛠️ Tech Stack

| Category | Tools |
|-----------|--------|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| State Management | React Hooks (`useState`, `useEffect`, `useContext`) |
| Persistence | Local Storage |
| Code Quality | ESLint + PropTypes |

---

## 📁 Folder Structure

```
src/
 ┣ components/
 ┃ ┣ Button.jsx
 ┃ ┣ Card.jsx
 ┃ ┣ Navbar.jsx
 ┃ ┣ Footer.jsx
 ┃ ┗ TaskManager.jsx
 ┣ context/
 ┃ ┗ ThemeContext.jsx
 ┣ App.jsx
 ┣ main.jsx
 ┗ index.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Ajoke752.git
   cd plp-task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173/
   ```

---

## 🌗 Theme Switching

The app uses a **Theme Context** to manage light/dark mode.  
The selected theme is automatically stored in `localStorage` and applied globally.

---

## 📦 Reusable Components

| Component | Description |
|------------|--------------|
| **Button** | Multiple variants (primary, secondary, danger) |
| **Card** | Displays boxed content layouts |
| **Navbar** | Top navigation with theme toggle |
| **Footer** | Contains links & copyright info |
| **TaskManager** | Core task CRUD and filters |

---

## 🧠 Learning Objectives

- Understand component-based architecture in React  
- Practice state management with hooks  
- Implement context for global state  
- Style UI with Tailwind CSS  
- Manage persistent data with localStorage

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to modify and distribute it.

---
Deployment Link
https://68f8e41914d26677aefcc0d1--spectacular-sherbet-6c9295.netlify.app/
