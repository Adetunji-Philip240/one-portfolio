import React from "react";


const About = () => {
  
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div id="about">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-ml mt-20">
        I'm a skilled full-stack developer with expertise in technologies such as JavaScript, PHP, Python, Java, C, Kotlin, React, MySQL, and more. I build dynamic and scalable web applications, combining strong problem-solving skills with a passion for creating seamless user experiences. Whether it's backend logic or frontend design, I enjoy bringing innovative ideas to life through clean, efficient code.  
        </p>  
      </div>
    </div>
  );
};

export default About;
