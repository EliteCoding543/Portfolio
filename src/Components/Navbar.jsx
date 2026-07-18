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
    <nav
      className="
        fixed z-50 bottom-5 left-1/2 -translate-x-1/2 min-[721px]:top-6 min-[721px]:right-10 min-[721px]:left-auto min-[721px]:bottom-auto min-[721px]:translate-x-0 "
    >
      <ul
        className="flex items-center justify-center gap-5 sm:gap-8 px-5 sm:px-7 py-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 "
      >
        {NavLinks.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                ` relative text-sm sm:text-base font-semibold transition-all duration-300
                ${
                  isActive
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-orange-400"
                }
                `
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  <span
                    className={`
                      absolute left-0 -bottom-1 h-0.5 bg-orange-400 rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;