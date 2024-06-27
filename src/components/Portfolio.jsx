import React from "react";
import myCalc from "../mypic/calculatorsite.png";
import inec from "../mypic/inec.png";
import lautech from "../mypic/lautech.png";
import mc from "../mypic/mc.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: myCalc,
    },
    {
      id: 2,
      src: inec,
    },
    {
      id: 3,
      src: lautech,
    },
    {
      id: 4,
      src: mc,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div id="portfolio" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some my work right here</p>
        </div>
        <div id="portfolio-grid" className="grid sm:grid-col-2 md:grid-col-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;