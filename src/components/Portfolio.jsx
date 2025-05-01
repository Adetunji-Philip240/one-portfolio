import React, { useEffect } from "react";
import captains from "../mypic/captains.jpg";
import apacalc from "../mypic/apacalc.jpg";
import mamaade from "../mypic/mamaade.jpg";
import mc from "../mypic/mc.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: captains,
      link: "https://captainscafeteria.netlify.app/",
    },
    {
      id: 2,
      src: apacalc,
      link: "https://apacalculator.netlify.app/",
    },
    {
      id: 3,
      src: mamaade,
      link: "https://mamaadenoodles.netlify.app/",
    },
    {
      id: 4,
      src: mc,
      link: "https://murphycomputershop.netlify.app/",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div name="portfolio" className="w-full text-white md:h-screen ">
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full "
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        <div id="portfolio" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>
        <div
          id="portfolio-grid"
          className="grid sm:grid-col-2 md:grid-col-3 gap-8 px-12 sm:px-0"
        >
          {portfolio.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="py-3 m-4 duration-200 hover:scale-105">
                    Check the Website
                  </button>
                </a>
                {/* <button className="w-1/2 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
