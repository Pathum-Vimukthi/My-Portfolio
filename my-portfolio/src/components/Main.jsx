import ParticlesBg from "particles-bg";
import React from "react";
import { FaCloudArrowDown } from "react-icons/fa6";
import { SocialIcon } from "react-social-icons";
import profile from "../assets/Pathum Karunasinghe.jpg";
import TypeWritter from "./TypeWritter";

function Main() {
  const handleDownload = () => {
    const url = "../public/Pathum_Karunasinghe.pdf";
    const fileName = "Pathum_Karunasinghe.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="main">
      <ParticlesBg
        type="cobweb"
        bg={true}
        className="w-full h-screen object-cover"
      />
      <div className="w-full h-screen  top-0 left-0 bg-white/65">
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center ">
          <div>
            <h1 className="text-4xl font-primary font-bold">
              Hello, I'm <span className="text-yellow-700">Pathum</span>
            </h1>
            <TypeWritter />
            <p className="mt-[1.5rem] text-[18px] text-justify">
              Motivated software engineering student with a strong foundation in
              web and software development. Passionate about learning through
              fixing bugs and solving complex problems. Dedicated to mastering
              new technologies and contributing to innovative projects.
            </p>
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 gap-16  ">
              <button
                onClick={handleDownload}
                className="flex px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-orange-500/60 text-black items-center space-x-2 rounded-3xl"
              >
                <p>Download CV</p>
                <FaCloudArrowDown className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
              <div className="flex flex-row gap-8 justify-center items-center">
                <div className=" transform hover:scale-120  bg-[#e9ecef] rounded-full p-1 ">
                  <SocialIcon
                    network="github"
                    bgColor="#e9ecef"
                    fgColor="black"
                    url="https://github.com/Pathum-Vimukthi"
                    target="_blank"
                    style={{ height: 40, width: 40 }}
                    className="transform transition-transform duration-500 hover:scale-150"
                  />
                </div>
                <div className="transform  hover:scale-120 bg-[#e9ecef] rounded-full p-1">
                  <SocialIcon
                    network="linkedin"
                    bgColor="#e9ecef"
                    fgColor="black"
                    url="https://www.linkedin.com/in/pathum-karunasinghe-433a03218/"
                    target="_blank"
                    style={{ height: 40, width: 40 }}
                    className="transform transition-transform duration-500 hover:scale-150  "
                  />
                </div>
                <div className=" transform hover:scale-120  bg-[#e9ecef] rounded-full p-1 ">
                  <SocialIcon
                    network="facebook"
                    bgColor="#e9ecef"
                    fgColor="black"
                    url="https://web.facebook.com/pathum.wimukthi.1"
                    target="_blank"
                    style={{ height: 40, width: 40 }}
                    className="transform transition-transform duration-500 hover:scale-150"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[500px] hidden relative lg:flex items-center rounded-full h-[500px]">
            <img
              src={profile}
              alt="profile"
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
