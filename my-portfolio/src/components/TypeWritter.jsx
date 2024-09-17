import React from "react";
import { TypeAnimation } from "react-type-animation";

function TypeWritter() {
  return (
    <TypeAnimation
      sequence={[
        "FREELANCER",
        2000,
        "TECH ENTHUSIAST",
        2000,
        "FULL STACK DEVELOPER",
        2000,
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: "2em" }}
      repeat={Infinity}
      className="text-[2rem] md:text-[2rem] font-primary font-bold text-orange-600"
    />
  );
}

export default TypeWritter;
