"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMaterialdesign,
  SiTypescript,
} from "react-icons/si";
import Image from "next/image";

const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: <Image src="/next-icon.svg" alt="Next.js" width={30} height={30} />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  {
    name: "Material UI",
    icon: <SiMaterialdesign className="text-indigo-400" />,
  },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

const SkillCard = ({
  name,
  icon,
  delay,
}: {
  name: string;
  icon: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    whileInView={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    className="flex flex-col border-2 border-[#9f70fd] items-center justify-center gap-2 bg-[#1a1a1a] text-center rounded-xl p-5 shadow-md hover:shadow-[#9f70fd]/40 hover:scale-105 transition-all duration-300"
  >
    <div className="text-4xl">{icon}</div>
    <p className="text-sm font-medium text-white">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col ">
      {/* Heading */}
      <div className="text-center">
        <p className="text-5xl font-extrabold text-[#9f70fd] mt-5">My Skills</p>
        {/* <p className="text-[40px] md:text-[60px] font-extrabold text-[#9f70fd] relative z-10">
          My Skills
        </p>
        <span className="absolute text-[90px] md:text-[120px] font-extrabold opacity-5 text-white top-[-10px] left-1/2 -translate-x-1/2 select-none">
          Skills
        </span> */}
      </div>
      <main className="flex flex-col w-full max-w-[1050px] mx-auto">
        {/* Side-by-side Skills Section */}
        <div className="grid grid-cols-1 w-full">
          {/* Frontend */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-white text-center lg:text-left">
              Frontend
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 ">
              {frontendSkills.map((skill, idx) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-white text-center lg:text-left mt-5">
              Backend
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6">
              {backendSkills.map((skill, idx) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Skills;
