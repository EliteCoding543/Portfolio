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
      <h1 className="text-4xl font-bold">About</h1>
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
          <div className="flex items-center gap-3">
            <SiLeetcode className="text-3xl text-yellow-500" />
            <span>LeetCode</span>
          </div>

          <div className="flex items-center gap-3">
            <SiCodeforces className="text-3xl text-blue-500" />
            <span>Codeforces</span>
          </div>

          <div className="flex items-center gap-3">
            <SiCodechef className="text-3xl text-amber-700" />
            <span>CodeChef</span>
          </div>

          <div className="flex items-center gap-3">
            <SiGithub className="text-3xl" />
            <span>GitHub</span>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="w-16 h-1 bg-amber-500 rounded-full mt-2 mb-6"></div>

        <div className="space-y-6">

          <div className="flex gap-4">
            <FaGraduationCap className="text-2xl text-amber-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">
                Bachelor's Degree
              </h3>
              <p className="text-sm text-gray-400">
                2023 — Present
              </p>
              <p className="text-gray-300 mt-2">
                Currently pursuing my Bachelor's degree while learning React.js,
                JavaScript, Java, and Data Structures & Algorithms.
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
                Senior Secondary (Class XII)
              </h3>
              <p className="text-sm text-gray-400">
                CBSE Board
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <FaGraduationCap className="text-2xl text-amber-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">
                Secondary (Class X)
              </h3>
              <p className="text-sm text-gray-400">
                CBSE Board
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;