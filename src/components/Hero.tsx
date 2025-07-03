"use client";

import React, { useEffect, useState } from "react";
import BlinkText from "@/components/BlinkText";
import myImg from "@/my-img.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSpin(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative md:mt-[10px] mt-[20px] px-6  py-10 max-w-[1150px] rounded-lg mx-auto flex flex-col gap-8 text-[#f1f1f1] overflow-hidden"
    >
      {/* 🔮 Background Glows */}
      <div className="absolute -z-10 w-[600px] h-[600px] bg-[#9f70fd]/20 rounded-full blur-[160px] top-[-150px] left-[-150px]" />
      <div className="absolute -z-10 w-[500px] h-[500px] bg-[#ff6ec7]/20 rounded-full blur-[120px] bottom-[-150px] right-[-100px]" />

      {/* 🧑‍💻 Name + Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] bg-clip-text text-transparent">
          Rohama Majeed
        </h1>
        <p className="text-lg md:text-xl text-[#a1a1aa] mt-2">Software Engineer</p>
      </motion.div>

      {/* 👇 Hero Content Row */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#0a0a0a] rounded-3xl shadow-2xl p-4 mb-2 max-w-[1050px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {/* 💬 Text Section */}
        <motion.article
          className="flex flex-col gap-6 md:w-[500px] text-center md:text-left"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <BlinkText />
          <p className="text-lg leading-relaxed text-[#a1a1aa]">
            I'm a{" "}
            <span className="text-[#c084fc] font-semibold">creative developer</span> crafting sleek,
            responsive, and user-centered digital experiences with a passion for visual polish.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] text-white font-semibold rounded-full shadow-xl hover:shadow-[#ff6ec7]/40 transition duration-300 w-fit mx-auto md:mx-0"
          >
            🚀 Hire Me
          </motion.button>
        </motion.article>

        {/* 🖼️ Image Section */}
        <motion.article
          className="md:w-[320px] w-full flex justify-center"
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src={myImg}
            alt="Rohama Majeed"
            className={`max-w-[320px] w-full rounded-2xl border-2 border-[#9f70fd] shadow-[0_0_40px_5px_rgba(159,112,253,0.5)] object-cover transition-transform duration-500 ${
              spin ? "animate-spin-slow" : "hover:scale-105"
            }`}
          />
        </motion.article>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
