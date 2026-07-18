import React from "react";
import SideBar from "./Components/SideBar";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen  text-white">
      <div className="flex items-start gap-10 px-10 py-10">

        {/* Left Sidebar */}
        <aside className="w-[320px] sticky top-8 self-start">
          <SideBar />
        </aside>

        {/* Right Section */}
        <main className="flex-1">
          {/* Top Navbar */}
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