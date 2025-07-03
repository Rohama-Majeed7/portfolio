"use client";
import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { motion } from "framer-motion";

const serviceList = [
  {
    icon: <FaReact />,
    title: "Frontend Development",
  },
  {
    icon: <FaNodeJs />,
    title: "Backend Development",
  },
  {
    icon: <GiMagnifyingGlass />,
    title: "Web Design",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col gap-10 md:mt-[80px] px-6 py-16 text-white w-full max-w-7xl mx-auto bg-[#0a0a0a] rounded-3xl shadow-2xl relative overflow-hidden"
    >
      {/* 💡 Background Glow */}
      <div className="absolute -z-10 w-[600px] h-[600px] bg-[#9f70fd]/20 rounded-full blur-[160px] top-[-100px] left-[-100px]" />
      <div className="absolute -z-10 w-[400px] h-[400px] bg-[#ff6ec7]/20 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

      {/* 🔖 Heading */}
      <div className="text-center relative">
        <p className="text-[40px] md:text-[60px] font-extrabold text-[#9f70fd] relative z-10">
          Services
        </p>
        <span className="absolute text-[90px] md:text-[120px] font-extrabold opacity-5 text-white top-[-10px] left-1/2 -translate-x-1/2 select-none">
          Services
        </span>
      </div>

      {/* 🛠️ Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {serviceList.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.06 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] p-6 flex flex-col items-center justify-center gap-4 rounded-2xl shadow-md border border-[#2e2e2e] hover:bg-gradient-to-tr from-[#9f70fd] to-[#ff6ec7] group transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl text-[#9f70fd] group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <p className="text-lg font-semibold text-white group-hover:text-black transition-all duration-300">
              {service.title}
            </p>
            <span className="w-10 h-0.5 bg-[#9f70fd] rounded-sm group-hover:bg-black"></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
