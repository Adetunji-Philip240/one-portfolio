import React, {useEffect} from "react";
import Wale from "../mypic/Wale.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md-flex-row">
        <div id="intro" className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-6" data-aos="zoom-in" data-aos-duration="2000">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500  max-w-md" data-aos="fade-down" data-aos-duration="2000">
            I am a passionate and results-driven Web Developer, Computer
            Engineer, and Programmer with a deep love for turning innovative
            ideas into reality through code. My Journey in the tech world has
            been marked by a relentless pursuit of excellence and a commitment
            to pushing the boundaries of what's possible.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Porfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />{" "}
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Wale}
            alt="My profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
