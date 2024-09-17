import ParticlesBg from "particles-bg";
import React from "react";
import { FaCloudArrowDown } from "react-icons/fa6";
import profile from "../assets/Pathum Karunasinghe.jpg";

function Main() {
  return (
    <div id="main">
      <ParticlesBg
        type="cobweb"
        bg={true}
        className="w-full h-screen object-cover"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center ">
          <div>
            <h1 className="text-4xl font-primary font-bold">
              Hello, I'm <span className="text-yellow-500">Pathum</span>
            </h1>
            <p className="mt-[1.5rem] text-[20px] ">
              Motivated software engineering student with a strong foundation in
              web and software development. Passionate about learning through
              fixing bugs and solving complex problems. Dedicated to mastering
              new technologies and contributing to innovative projects.
            </p>
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 gap-16  ">
              <button
                onClick={() =>{}}
                className="flex px-[2rem] hover:bg-orange-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-yellow-400 text-black items-center space-x-2 rounded-3xl"
              >
                <p>Download CV</p>
                <FaCloudArrowDown className="w-[1.6rem] h-[1.7rem] text-black"/>
              </button>
              {/* </a> */}
            </div>
          </div>
          <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
            <img
              src={profile}
              alt="user"
              layout="fill"
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
