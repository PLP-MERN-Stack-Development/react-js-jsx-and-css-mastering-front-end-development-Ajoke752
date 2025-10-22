import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ brand = "MyApp", links = [] }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow">
      <Link to="/" className="font-bold text-lg">
        {brand}
      </Link>

      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="hover:underline hover:text-gray-200"
          >
            {link.label}
          </Link>
        ))}

        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-blue-500 hover:bg-blue-700 transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
