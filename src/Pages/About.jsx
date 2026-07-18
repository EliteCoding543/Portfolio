import React from "react";
import {
  SiGithub,
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";

import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section className="text-white bg-slate-900/40 backdrop-blur-md border border-slate-700 rounded-2xl p-8 mt-10">
      {/* About */}
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="w-20 h-1 bg-amber-500 rounded-full mt-3 mb-6"></div>

      <p className="text-gray-400 leading-8">
        I'm <span className="text-white font-semibold">Shubham Kashyap</span>,
        a passionate Frontend Developer specializing in React.js, JavaScript,
        Tailwind CSS, HTML, and CSS. I enjoy building responsive, modern, and
        user-friendly web applications with clean and efficient code. Alongside
        web development, I continuously strengthen my problem-solving skills
        through Java and DSA. I'm always eager to learn new technologies, take
        on challenging projects, and grow as a software developer.
      </p>

      {/* Coding Profiles */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Coding Profiles</h2>
        <div className="w-16 h-1 bg-amber-500 rounded-full mt-2 mb-6"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="flex items-center gap-3 group">
            <SiLeetcode className="text-9xl text-yellow-500 grayscale group-hover:grayscale-0 transition duration-300 cursor-pointer" />
            <span className="group-hover:text-yellow-700 transition-colors duration-300">LeetCode</span>
          </div>

          <div className="flex items-center gap-3 group">
            <SiCodeforces className="text-7xl text-blue-500 grayscale group-hover:grayscale-0 transition duration-300 cursor-pointer" />
            <span className="group-hover:text-yellow-700 transition-colors duration-300">Codeforces</span>
          </div>

          <div className="flex items-center gap-3 group">
            <SiCodechef className="text-5xl text-amber-700 grayscale group-hover:grayscale-0 transition duration-300 cursor-pointer" />
            <span className="group-hover:text-yellow-700 transition-colors duration-300">CodeChef</span>
          </div>

          <div className="flex items-center gap-3 group cursor-pointer">
              <SiGithub className="text-5xl grayscale group-hover:grayscale-0 group-hover:text-yellow-400 transition-all duration-300" />
              <span className="group-hover:text-yellow-700 transition-colors duration-300">
                GitHub
              </span>
        </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="w-16 h-1 bg-amber-500 rounded-full mt-2 mb-6"></div>

        <div className="space-y-6">

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
                 <FaGraduationCap className="text-2xl text-amber-500 mt-1" />
                 <div className="w-1 h-18 bg-amber-500 rounded-full  flex"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Master's Degree (MCA)
              </h3>
              <p className="text-sm text-gray-400">
                2026 — Pursuing
              </p>
              <p className="text-gray-400 text-sm mt-2">
              Pursuing my Master's degree while enhancing my expertise in
              React.js, JavaScript, Java, Redux, and Data Structures &
              Algorithms. Continuously building real-world projects to
              strengthen my full-stack development skills.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center">
                <FaGraduationCap className="text-2xl text-amber-500 mt-1" />
                <div className="w-1 h-18 bg-amber-500 rounded-full  flex"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
              Bacholr's Degree (BCA)
              </h3>
              <p className="text-sm text-gray-400">
                2022 — 2025
              </p>
              <p className="text-sm text-gray-400">
                Completed  my Bachelor's degree while learning React.js,
                JavaScript, Java, and Data Structures & Algorithms.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <FaGraduationCap className="text-2xl text-amber-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">
                Senior Secondary (Class XII)
              </h3>
              <p className="text-sm text-gray-400">
                UP Board
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;