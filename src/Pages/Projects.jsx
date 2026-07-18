import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import Img1 from '../assets/Card-Img/1.webp'
import Img2 from '../assets/Card-Img/2.webp'

const categories = [
  "All",
  "Web Development",
  "App Development",
  "Machine Learning",
];

const projects = [
  {
    id: 1,
    title: "AlumniNest",
    category: "App Development",
    image: Img1,
  },
  {
    id: 2,
    title: "E-Commerce",
    category: "Web Development",
    image: Img2,
  },
  {
    id: 3,
    title: "Restaurant App",
    category: "App Development",
    image: "https://picsum.photos/600/400?3",
  },
  {
    id: 4,
    title: "Weather App",
    category: "App Development",
    image: "https://picsum.photos/600/400?4",
  },
  {
    id: 5,
    title: "Face Detection",
    category: "Machine Learning",
    image: "https://picsum.photos/600/400?5",
  },
  {
    id: 6,
    title: "Chat Application",
    category: "Web Development",
    image: "https://picsum.photos/600/400?6",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((item) => item.category === activeTab);

  return (
    <section className="min-h-screen text-white bg-slate-900/40 backdrop-blur-md border border-slate-700 rounded-2xl p-8 mt-10">

      {/* Heading */}
      <h1 className="text-5xl font-bold text-white mb-10">
        Work
        <div className="w-20 h-1 bg-amber-500 rounded-full mt-3 mb-6"></div>
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-10 border-b border-slate-700 pb-4 mb-10">

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`relative pb-3 text-sm font-semibold transition-all duration-300
            ${
              activeTab === item
                ? "text-orange-400"
                : "text-gray-300 hover:text-orange-300"
            }`}
          >
            {item}

            {/* Animated Underline */}
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-full bg-orange-400 transition-all duration-300
              ${
                activeTab === item
                  ? "w-full"
                  : "w-0"
              }`}
            />
          </button>
        ))}

      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProjects.map((project) => (
          <div
            key={project.id}
          >

            <div className="flex flex-col">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl group cursor-pointer">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">

                  {/* Eye Icon */}
                  <div className="bg-gray-800 backdrop-blur-md p-3 scale-75 group-hover:scale-100  transition-all duration-300 rounded-xl">
                    <FiEye className="text-yellow-600 text-2xl" />
                  </div>

                </div>
              </div>

              {/* Content */}
              <h6 className="text-white px-4 mt-3 text-sm font-semibold">
                {project.title}
              </h6>

              <p className="text-slate-400 px-4">
                {project.category}
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;