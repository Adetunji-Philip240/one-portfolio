import React, { useEffect } from "react";
import html from "../mypic/html.png";
import css from "../mypic/css.png";
import javascript from "../mypic/javascript.png";
import react from "../mypic/react.png";
import tailwind from "../mypic/tailwind.png";
import java from "../mypic/java.webp";
import python from "../mypic/python.webp";
import c from "../mypic/c.png";
import kotlin from "../mypic/kotlin.png";
import nextjs from "../mypic/nextjs-react.png";
import php from "../mypic/php.png";
import mysql from "../mypic/mysql.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
    },
    {
      id: 4,
      src: react,
      title: "React",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      src: java,
      title: "JAVA",
    },
    {
      id: 7,
      src: python,
      title: "Python",
    },
    {
      id: 8,
      src: c,
      title: "C",
    },
    {
      id: 9,
      src: kotlin,
      title: "Kotlin",
    },
    {
      id: 10,
      src: nextjs,
      title: "Next.js",
    },
    {
      id: 11,
      src: php,
      title: "PHP",
    },
    {
      id: 12,
      src: mysql,
      title: "MySQL",
    },
  ];

  return (
    <div name="experience" className="w-full h-screen ">
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div id="experience">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className="shadow-md shadow-blue-300 hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
