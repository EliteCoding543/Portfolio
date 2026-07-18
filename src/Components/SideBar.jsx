import React from "react";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser, FaCode, FaInstagram } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import SelfPhoto from "../assets/PNG/Self Photo.jpeg";

const navItem = [
  {
    icon: <MdOutlineEmail />,
    SocialName: "EMAIL",
    SocialIdName: "shubhamkashyap5432@gmail.com",
    IconColor: "text-amber-500",
    bgColor: "bg-gradient-to-br from-slate-800 to-slate-900",
    link: "mailto:shubhamkashyap5432@gmail.com",
  },
  {
    icon: <FaRegUser />,
    SocialName: "LinkedIn",
    SocialIdName: "shubhamKumar51",
    IconColor: "text-amber-500",
    bgColor: "bg-gradient-to-br from-slate-800 to-slate-900",
    link: "https://www.linkedin.com/in/shubhamKumar51",
  },
  {
    icon: <FaCode />,
    SocialName: "GITHUB",
    SocialIdName: "EliteCoding543",
    IconColor: "text-amber-500",
    bgColor: "bg-gradient-to-br from-slate-800 to-slate-900",
    link: "https://github.com/EliteCoding543",
  },
  {
    icon: <FaInstagram />,
    SocialName: "Instagram",
    SocialIdName: "shivam_mehra5",
    IconColor: "text-amber-500",
    bgColor: "bg-gradient-to-br from-slate-800 to-slate-900",
    link: "https://www.instagram.com/shivam_mehra5",
  },
];

const SideBar = ({ closeMenu }) => {
  return (
    <div className="relative h-full lg:h-[calc(100vh-2rem)] bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-xl overflow-y-auto border border-slate-700">

      {/* Close Button (Mobile Only) */}
      <button
        onClick={closeMenu}
        className="absolute top-5 right-5 text-white text-3xl lg:hidden"
      >
        <IoClose />
      </button>

      {/* Profile */}

      <div className="text-white px-5 py-8 border-b border-slate-700 flex flex-col items-center gap-5">

        <img
          src={SelfPhoto}
          alt="Profile"
          className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl object-cover border"
        />

        <h1 className="text-xl sm:text-2xl font-semibold text-center">
          Shubham Kashyap
        </h1>

        <a
          href="/Shubham_Kumar_Resume.pdf"
          download
          className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl transition-all duration-300"
        >
          <HiOutlineArrowDownTray className="text-amber-500 text-2xl" />

          <span className="text-white font-medium">
            Download Resume
          </span>
        </a>

      </div>

      {/* Social Links */}

      <div className="text-white p-5 flex flex-col gap-4">

        {navItem.map((item, index) => (

          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300 group"
          >

            <span
              className={`text-2xl h-11 w-11 rounded-xl flex items-center justify-center ${item.IconColor} ${item.bgColor}`}
            >
              {item.icon}
            </span>

            <div className="flex-1 min-w-0">

              <p className="text-xs uppercase tracking-wider text-gray-400">
                {item.SocialName}
              </p>

              <h6 className="text-sm sm:text-base truncate font-medium group-hover:text-amber-500 transition">
                {item.SocialIdName}
              </h6>

            </div>

          </a>

        ))}

      </div>

    </div>
  );
};

export default SideBar;