"use client";
import React from "react";
import myImg from "@/1718159743761-removebg-preview.png";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="h-[85vh] sm:h-[95vh] flex justify-center items-center w-full  mb-[120px] sm:mb-0"
    >
      {/* 🌟 Inner Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col w-full max-w-[1050px] mx-auto md:flex-row sm:mt-0 mt-[90px] justify-between items-center gap-10 bg-[#0a0a0a] py-5 px-8 rounded-lg"
      >
        {/* 🖼️ Image */}
        <motion.article
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-[400px] "
        >
          <Image
            src={myImg}
            alt="About"
            className="w-full object-cover rounded-2xl border-2 border-[#9f70fd] shadow-[0_0_40px_6px_rgba(159,112,253,0.4)] hover:scale-105 transition-transform duration-300"
          />
        </motion.article>

        {/* 📄 Text Content */}
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-[520px] flex flex-col gap-6 text-center md:text-left"
        >
          <div className="relative">
            <span className="md:text-[60px] text-[40px] font-bold text-[#9f70fd] z-10 relative">
              About Me
            </span>
          </div>

          <p className="text-[15px] text-[#a1a1aa] leading-7">
            Passionate Web Developer with a knack for building beautiful,
            interactive, and user-first digital products. I specialize in
            full-stack web development using{" "}
            <span className="text-[#c084fc] font-semibold">HTML</span>,{" "}
            <span className="text-[#c084fc] font-semibold">CSS</span>,{" "}
            <span className="text-[#c084fc] font-semibold">JavaScript</span>,{" "}
            <span className="text-[#c084fc] font-semibold">React</span>, and{" "}
            <span className="text-[#c084fc] font-semibold">Node.js</span>.
          </p>

          <h2 className="text-2xl font-bold text-[#f1f1f1]">
            <span className="text-[#ff6ec7]">15+</span> Projects Completed
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] text-white font-bold shadow-md hover:scale-105 hover:shadow-[#ff6ec7]/40 transition-all duration-300 w-fit mx-auto md:mx-0"
          >
            📄 Download CV
          </motion.button>
        </motion.article>
      </motion.div>
    </section>
  );
};

export default AboutPage;
