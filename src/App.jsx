import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Route, Routes } from "react-router-dom";

import SideBar from "./Components/SideBar";
import Navbar from "./Components/Navbar";

import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen text-white">

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-2 left-5 z-50 bg-slate-900 p-3 rounded-xl shadow-lg min-[721px]:hidden"
      >
        <HiOutlineBars3 className="text-2xl text-white" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 min-[721px]:hidden"
        />
      )}

      <div className="flex gap-10 px-4 sm:px-6 lg:px-10 py-6 lg:py-10">

        {/* Sidebar */}
        <aside
          className={` fixed top-0 left-0 h-screen w-75 z-50 bg-[#0f172a] transition-transform duration-300

            ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }

            min-[721px]:translate-x-0  min-[721px]:h-auto min-[721px]:w-[320px] min-[721px]:bg-transparent min-[721px]:z-auto min-[721px]:sticky min-[721px]:top-8 min-[721px]:self-start
          `}
        >
          <SideBar closeMenu={() => setIsOpen(false)} />
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">

          <Navbar />

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </main>

      </div>
    </div>
  );
};

export default App;