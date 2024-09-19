import React from "react";
import EducationItem from "./EducationItem";

function Education() {
  const education = [
    {
      Institution: "University of Ruhuna",
      address: "Matara, Sri Lanka",
      description:
        "B. Information & Communication Technology ( Software Engineering )",
      duartion: "July 2021 – Present",
    },
  ];

  const skills = [
    {
      title: "Java Development",
      languages: "JAVA",
      description:
        "Knowledgeable in building applications using Java, leveraging tools like Intellij IDEA and Eclipse for development and debugging.",
    },
    {
      title: "Full Stack Development",
      languages: "JavaScript | TypeScript",
      description:
        "Proficient in JavaScript (Node.js, React) and experienced in building scalable web applications using the MERN stack. Skilled in frontend development with HTML/CSS and Tailwind CSS, and backend development with Node.js and Express.js.",
    },
    {
      title: "Python Development",
      languages: "Python",
      description:
        "Intermediate in scripting tasks and backend development, enhancing versatility in software solutions.",
    },
    {
      title: "UI/UX Design",
      languages: "Figma | Tailwind CSS",
      description:
        "Strong design skills using Figma and Photoshop, focusing on creating intuitive and visually appealing user interfaces. Experienced in rapid prototyping with Daisy UI and implementing UI components with Tailwind CSS.",
    },
  ];

  return (
    <div id="education" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1>Education & Skills</h1>
    </div>
  );
}

export default Education;
