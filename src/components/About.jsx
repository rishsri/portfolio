import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a versatilist and easily adapt to different hats (Full Stack Web
          Developer š and beginner level Designer šØ) depending on what the
          project requires. I love exploring new tech stack š» and leveraging
          them to build cool stuffs š ļø.
        </p>

        <br />

        <p className="text-xl">
          š­ Mostly working on JavaScript, React and Node.js š± Iām currently
          learning Typescript; ā” Loves sharing knowledge through technical
          articles šØš»āš» Most of my projects are available on Github
        </p>
      </div>
    </div>
  );
};

export default About;
