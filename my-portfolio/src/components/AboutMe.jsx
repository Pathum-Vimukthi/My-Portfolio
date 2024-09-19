import React from "react";
import profile from "../assets/Pathum Karunasinghe.jpg";

function AboutMe() {
  return (
    <div id="aboutme" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[001b5e] uppercase">
        About <span className="text-yellow-700">Me</span>
      </h1>
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] mt-[4rem] h-[100%] items-center">
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
