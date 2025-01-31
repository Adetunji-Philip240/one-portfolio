import React, {useEffect} from "react";
import html from "../mypic/html.png";
import css from "../mypic/css.png";
import javascript from "../mypic/javascript.png";
import react from "../mypic/react.png";
import tailwind from "../mypic/tailwind.png";
import java from "../mypic/java.webp";
import python from "../mypic/python.webp";
import c from "../mypic/c.png";
import kotlin from "../mypic/kotlin.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: java,
      title: "JAVA",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: c,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
      data-aos="fade-up" data-aos-duration="2000"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
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
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg "
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
