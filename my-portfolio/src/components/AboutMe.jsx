import React from "react";
import aboutMe from "../assets/Pathum Karunasinghe AM.jpg";

function AboutMe() {
  return (
    <div id="aboutme" className="m-auto md:pl-20 p-4 py-16 bg-yellow-50">
      <h1 className="text-4xl font-bold text-center text-[001b5e] uppercase">
        About <span className="text-yellow-700">Me</span>
      </h1>
      <div className="grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] mt-[4rem] h-[100%] w-[80%] items-start">
        <div className="gap-[5rem]">
          <h1 className="text-[25px] md:text-[30px] lg:text-[40px] font-bold text-left text-[001b5e] uppercase">
            Solving <span className="text-orange-600"> Challenges </span> with{" "}
            <span className="text-orange-600"> Code </span>{" "}
          </h1>
          <p className="text-[20px] text-justify">
            I am passionate about using technology to create meaningful
            solutions. With experience in web and software development, I enjoy
            solving challenges and turning them into innovative results. I focus
            on fixing bugs, solving problems, and learning new technologies to
            contribute to impactful projects.
          </p>
        </div>
        <div className="lg:w-[450px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[450px] w-[300px] h-[300px] relative">
          <img
            src={aboutMe}
            alt="Pathum Karunasinghe AM"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-orange-300 top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
