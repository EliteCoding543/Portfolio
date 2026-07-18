import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-6 right-10 z-50">
      <ul className="flex items-center gap-8 bg-slate-900/70 backdrop-blur-md px-8 py-4 rounded-2xl border border-slate-700 shadow-lg">
        {NavLinks.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `font-bold transition duration-300 ${
                  isActive
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-orange-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;