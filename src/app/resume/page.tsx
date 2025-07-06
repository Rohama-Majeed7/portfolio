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
      className="h-[100vh] flex justify-center items-center w-full  text-white mb-[120px] sm:mb-0"
    >
      <main className="flex sm:mt-0 mt-[90px] flex-col bg-[#0a0a0a] gap-2 md:px-6 px-2 md:py-4 py-2 rounded-xl shadow-2xl  max-w-[1050px] w-full mx-auto">
        {/* 🎓 Heading */}
        <div className="text-center">
          <p className="sm:text-5xl text-4xl font-extrabold text-[#9f70fd] mt-8 md:mt-3">Resume</p>

          {/* <p className="text-[40px] md:text-[60px] font-extrabold text-[#9f70fd] relative z-10">
            Resume
          </p>
          <span className="absolute text-[90px] md:text-[120px]  font-extrabold opacity-5 text-white top-[-10px] left-1/2 -translate-x-1/2 select-none">
            Resume
          </span> */}
        </div>

        {/* 🗂️ Resume Cards */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-full md:mt-12 mt-5">
          {resumeData.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-[#9f70fd]/30 border-2 border-[#9f70fd] transition-all duration-300"
            >
              <h2 className="text-[#9f70fd] font-bold text-xl mb-2">
                {item.year}
              </h2>
              <p className="text-lg text-white font-semibold mb-1">
                {item.title}
              </p>
              <p className="text-[#a1a1aa]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 📥 Download CV */}
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] text-white font-bold shadow-md hover:scale-105 hover:shadow-[#ff6ec7]/40 transition-all duration-300 w-fit mx-auto mt-6"
        >
          📄 Download CV
        </a>
      </main>
    </section>
  );
};

export default ResumePage;
