import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contextapi/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useAuth } from "../customeHook/useAuth";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useAuth();

  return (
    <nav className="bg-slate-900 text-white shadow-xl shadow-slate-100">
      <ul className="w-full flex items-center justify-around px-6 py-4">
        <Link to="/dashboard" className="text-2xl font-bold">
          Logo
        </Link>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex gap-2 items-center">
          {!user ? (
            <Link
              to="/login"
              className="px-4 py-2 rounded bg-rose-500 hover:bg-rose-600 transition"
            >
              Login
            </Link>
          ) : (
            <div className="relative group flex flex-col items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center font-bold uppercase">
                {user.name.charAt(0)}
              </div>

              <span className="absolute top-9 text-xs font-bold uppercase text-slate-300 opacity-0 group-hover:opacity-100 transition">
                {user.name}
              </span>
            </div>
          )}

          <button
            onClick={toggleTheme}
            className="px-3 py-3 rounded bg-slate-700 hover:bg-slate-600 transition"
          >
            {theme === "light" ? <MdOutlineDarkMode /> : <CiLight />}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
