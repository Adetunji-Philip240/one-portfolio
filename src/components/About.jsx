import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div id="about">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-ml mt-20">
          As a Computer Engineer, I bring a strong foundation in the principles
          of computer science and engineering. My expertise extends to the world
          of web design/development, where I excel in crafting dynamic and
          responsive websites that not only meet but exceed expectations. I am
          well-versed in a variety of programming languages, frameworks, and
          technologies, making me versatile in tackling diverse challenges.
        </p>

        <br />

        <p className="text-ml">
          I specialize in creating seamless and visually stunning web
          experiences. From front-end development using HTML, CSS and JavaScript
          to back-end implementation with frameworks like Node.js, etc, my goal
          is to deliver user-centric solutions that leave a lasting impression.
          I understand the importance of creating websites that not only
          lookgreat but also fu
        </p>

        <br />

        <p className="text-ml">
          With a keen eye for detail and a knack fro problem-solving, I thrive
          in environments that demand creativity and precision. I enjoy
          unraveling complex problems and finding elegant solutions that elevate
          the user experience. My commitment to staying abreast of industry
          trends ensures that my skills are always at the forefont of
          technological advancements.
        </p>

        <br />

        <p className="text-ml">
          Programming is not just a job for me, it's a lifelong passion. Whether
          I'm diving into the intricacies of algorithms, exploring new
          programming languages, or contributing to open-source projects. I am
          driven by an insatiable curiosity and a genuine love for the craft.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
