import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillAppstore } from "react-icons/ai";
import { IoHomeSharp, IoSchoolSharp } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

function SideNavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <GiHamburgerMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/80 flex flex-col justify-center items-center z-20">
          <a onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <IoHomeSharp size={20} />
            <span className="pl-4 font-primary font-bold">HOME</span>
          </a>

          <a
            href="#aboutme"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <BsFillPersonFill size={20} />
            <span className="pl-4 font-primary font-bold">ABOUT</span>
          </a>

          <a
            href="#myservices"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <MdOutlineMiscellaneousServices size={20} />
            <span className="pl-4 font-primary font-bold">SERVICES</span>
          </a>

          <a
            href="#education&skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <IoSchoolSharp size={20} />
            <span className="pl-4 font-primary font-bold">SKILL</span>
          </a>

          <a
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiFillAppstore size={20}/>
            <span className="pl-4 font-primary font-bold">PROJECTS</span>
          </a>

          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <FaEnvelope size={20} />
            <span className="pl-4 font-primary font-bold">CONTACT</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <IoHomeSharp size={20} />
          </a>
          <a
            href="#aboutme"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsFillPersonFill size={20} />
          </a>
          <a
            href="#myservices"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <MdOutlineMiscellaneousServices size={20} />
          </a>
          <a
            href="#education&skills"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <IoSchoolSharp size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiFillAppstore size={20}/>
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;
