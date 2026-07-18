import React from "react";

import HTMLImg from "../assets/Skills-Card/html.webp";
import CSSImg from "../assets/Skills-Card/css.webp";
import FigmaImg from "../assets/Skills-Card/figma.webp";
import GithubImg from "../assets/Skills-Card/github.webp";
import JavaImg from "../assets/Skills-Card/java.webp";
import JavaScriptImg from "../assets/Skills-Card/js.webp";
import MongoImg from "../assets/Skills-Card/mongo.webp";
import MySqlImg from "../assets/Skills-Card/mysql.webp";
import NextImg from "../assets/Skills-Card/nextjs.webp";
import ReactImg from "../assets/Skills-Card/react.webp";
import TailwindImg from "../assets/Skills-Card/tailwind.webp";
import NodeImg from "../assets/Skills-Card/nodejs.webp";
import JQueryImg from "../assets/Skills-Card/jquery.png";
import ReduxImg from "../assets/Skills-Card/Redux.webp";
import AngularImg from "../assets/Skills-Card/angular.png";

const SkillsCardImg = [
  { name: "HTML", img: HTMLImg },
  { name: "CSS", img: CSSImg },
  { name: "Tailwind", img: TailwindImg },
  { name: "JavaScript", img: JavaScriptImg },
  { name: "ReactJS", img: ReactImg },
  { name: "NextJS", img: NextImg },
  { name: "JQuery", img: JQueryImg },
  { name: "NodeJS", img: NodeImg },
  { name: "Github", img: GithubImg },
  { name: "Java", img: JavaImg },
  { name: "Redux", img: ReduxImg },
  { name: "Angular", img: AngularImg },
  { name: "MySQL", img: MySqlImg },
  { name: "MongoDB", img: MongoImg },
  { name: "Figma", img: FigmaImg },
];

const SkillsCard = () => {
  return (
  <section className="mt-10 bg-[#1d1d1d] rounded-2xl p-5 sm:p-6 md:p-8">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
      {SkillsCardImg.map((skill, index) => (
        <div
          key={index}
          className="group flex flex-col items-center justify-center rounded-2xl bg-[#242424] p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(249,115,22,0.25)]"
        >
          <img
            src={skill.img}
            alt={skill.name}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          <h3
            className="mt-4 text-center text-white text-sm sm:text-base lg:text-lg font-semibold"
          >
            {skill.name}
          </h3>
        </div>
      ))}
    </div>
  </section>
);
};

export default SkillsCard;