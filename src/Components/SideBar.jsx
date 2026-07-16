import React from "react";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import SelfPhoto from "../assets/PNG/Self Photo.jpeg";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser, FaCode, FaInstagram } from "react-icons/fa6";

const navItem = [
  {
    icon: <MdOutlineEmail />,
    SocialName: "EMAIL",
    SocialIdName: "shubhamkashyap5432@gmail.com",
    IconColor: "text-amber-500",
    bgColor: "bg-linear-to-br from-slate-800 to-slate-900",
    link: "mailto:shubhamkashyap5432@gmail.com",
  },
  {
    icon: <FaRegUser />,
    SocialName: "LinkedIn",
    SocialIdName: "shubhamKumar51",
    IconColor: "text-amber-500",
    bgColor: "bg-linear-to-br from-slate-800 to-slate-900",
    link: "https://www.linkedin.com/in/shubhamKumar51",
  },
  {
    icon: <FaCode />,
    SocialName: "GITHUB",
    SocialIdName: "EliteCoding543",
    IconColor: "text-amber-500",
    bgColor: "bg-linear-to-br from-slate-800 to-slate-900",
    link: "https://github.com/EliteCoding543",
  },
  {
    icon: <FaInstagram />,
    SocialName: "Instagram",
    SocialIdName: "shivam_mehra5",
    IconColor: "text-amber-500",
    bgColor: "bg-linear-to-br from-slate-800 to-slate-900",
    link: "https://www.instagram.com/shivam_mehra5",
  },
];

const Navbar = () => {
  return (
    <div className="sticky top-8 h-[calc(100vh-2rem)] bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-xl overflow-y-auto">
      {/* Profile */}
      <div className="text-white px-5 py-5 border-b border-slate-700 flex items-center justify-center flex-col gap-4">
        <img
          className="w-30 h-30 object-cover rounded-2xl"
          src={SelfPhoto}
          alt="Profile-img"
        />

        <h1 className="text-2xl font-semibold">Shubham Kashyap</h1>

        <a
          href='./src/assets/PNG/Shubham_Kumar_Resume.pdf'
          download
          className="flex items-center gap-3 cursor-pointer"
        >
          <HiOutlineArrowDownTray className="bg-linear-to-br from-slate-800 to-slate-900 h-10 w-10 text-amber-500 p-2 rounded-xl" />
          <span className="hover:text-amber-500 transition duration-300">
            Resume
          </span>
        </a>
      </div>

      {/* Social Links */}
      <div className="text-white p-5 flex flex-col gap-5">
        {navItem.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800 transition duration-300 group"
          >
            <span
              className={`text-2xl h-10 w-10 p-2 rounded-xl flex items-center justify-center ${item.IconColor} ${item.bgColor}`}
            >
              {item.icon}
            </span>

            <div>
              <p className="text-sm text-gray-400">{item.SocialName}</p>
              <h6 className="font-medium group-hover:text-amber-500 transition duration-300">
                {item.SocialIdName.length > 20
                  ? item.SocialIdName.slice(0, 15) + "..."
                  : item.SocialIdName}
              </h6>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;