import React from "react";
import SideBar from "./Components/SideBar";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

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

          {/* Hero */}
          <Hero />
        </main>

      </div>
    </div>
  );
};

export default App;