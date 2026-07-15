import React from "react";

const NavLinks = ["Home", "Projects", "Skills", "Contact"];

const Navbar = () => {
  return (
    <nav className="fixed top-6 right-10 z-50">
      <ul className="flex items-center  gap-8 bg-slate-900/70 backdrop-blur-md px-8 py-4 rounded-2xl border border-slate-700 shadow-lg">
        {NavLinks.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer text-gray-300 hover:text-orange-400 transition duration-300 font-bold"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;