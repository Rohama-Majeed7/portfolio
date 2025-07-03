"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 95 },
  { name: "JavaScript", value: 95 },
  { name: "React", value: 95 },
  { name: "Tailwind CSS", value: 95 },
  { name: "Bootstrap", value: 95 },
  { name: "Material UI", value: 95 },
  { name: "Node.js", value: 95 },
  { name: "Express.js", value: 95 },
  { name: "MongoDB", value: 95 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col gap-10 py-16 px-6 text-white w-full max-w-7xl mx-auto bg-[#0a0a0a] rounded-3xl shadow-2xl relative overflow-hidden"
    >
      {/* 🔮 Background Glow */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-[#9f70fd]/20 rounded-full blur-[150px] top-[-80px] left-[-100px]" />
      <div className="absolute -z-10 w-[400px] h-[400px] bg-[#ff6ec7]/20 rounded-full blur-[120px] bottom-[-80px] right-[-100px]" />

      {/* 🧠 Heading */}
      <div className="text-center relative">
        <p className="text-[40px] md:text-[60px] font-extrabold text-[#9f70fd] relative z-10">
          My Skills
        </p>
        <span className="absolute text-[90px] md:text-[120px] font-extrabold opacity-5 text-white top-[-10px] left-1/2 -translate-x-1/2 select-none">
          Skills
        </span>
      </div>

      {/* 🚀 Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 p-4 bg-[#1a1a1a] rounded-xl shadow-md hover:shadow-[#9f70fd]/30 transition-all duration-300"
          >
            <div className="flex justify-between font-medium text-sm sm:text-base">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="w-full bg-[#2a2a2a] h-3 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
