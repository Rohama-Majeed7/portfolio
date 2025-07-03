"use client";
import React from "react";
import { motion } from "framer-motion";

const resumeData = [
  {
    year: "2019 - 2020",
    title: "Matriculation",
    desc: "Muslim Green Public School, M.Garh",
  },
  {
    year: "2020 - 2022",
    title: "Intermediate",
    desc: "Govt Degree College, M.Garh",
  },
  {
    year: "2022 - 2026",
    title: "Software Engineering, Graduation",
    desc: "UET, Taxila",
  },
];

const ResumePage = () => {
  return (
    <section
      id="resume"
      className="flex flex-col gap-10 md:mt-[80px] px-6 py-16 text-white w-full max-w-7xl mx-auto bg-[#0a0a0a] rounded-3xl shadow-2xl relative overflow-hidden"
    >
      {/* 🌟 Glows */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-[#9f70fd]/20 rounded-full blur-[150px] top-[-100px] left-[-100px]" />
      <div className="absolute -z-10 w-[400px] h-[400px] bg-[#ff6ec7]/20 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

      {/* 🎓 Heading */}
      <div className="text-center relative">
        <p className="text-[40px] md:text-[60px] font-extrabold text-[#9f70fd] relative z-10">Resume</p>
        <span className="absolute text-[90px] md:text-[120px]  font-extrabold opacity-5 text-white top-[-10px] left-1/2 -translate-x-1/2 select-none">Resume</span>
      </div>

      {/* 🗂️ Resume Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-12">
        {resumeData.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-[#9f70fd]/30 border border-[#2e2e2e] transition-all duration-300"
          >
            <h2 className="text-[#9f70fd] font-bold text-xl mb-2">{item.year}</h2>
            <p className="text-lg text-white font-semibold mb-1">{item.title}</p>
            <p className="text-[#a1a1aa]">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 📥 Download CV */}
      <a
        href="/cv.pdf"
        download
        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] text-white font-bold shadow-md hover:scale-105 hover:shadow-[#ff6ec7]/40 transition-all duration-300 w-fit mx-auto"
      >
        📄 Download CV
      </a>
    </section>
  );
};

export default ResumePage;
