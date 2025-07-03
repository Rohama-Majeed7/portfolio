"use client";
import React from "react";
import myImg from "@/1718159743761-removebg-preview.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="relative md:mt-[60px] mt-[70px] w-[98vw] max-w-[1150px] mx-auto px-6 py-16 text-white bg-[#0a0a0a] rounded-3xl shadow-2xl overflow-hidden border border-[#9f70fd]/30"
    >
      {/* 🔮 Background Glow Effects */}
      <div className="absolute -z-10 w-[600px] h-[600px] bg-[#9f70fd]/20 rounded-full blur-[160px] top-[-100px] left-[-100px]" />
      <div className="absolute -z-10 w-[400px] h-[400px] bg-[#ff6ec7]/20 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

      {/* 💡 Glowing Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent z-[-1] animate-borderGlow bg-[conic-gradient(at_top_left,_#9f70fd,_#ff6ec7,_#9f70fd)] opacity-40" />

      {/* 🌟 Inner Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* 🖼️ Image */}
        <article className="md:w-[400px] ">
          <Image
            src={myImg}
            alt="About"
            className="w-full object-cover rounded-2xl border-2 border-[#9f70fd] shadow-[0_0_40px_6px_rgba(159,112,253,0.4)] hover:scale-105 transition-transform duration-300"
          />
        </article>

        {/* 📄 Text Content */}
        <article className="md:w-[520px] flex flex-col gap-6 text-center md:text-left">
          <div className="relative">
            <span className="md:text-[60px] text-[40px] font-bold text-[#9f70fd] z-10 relative">
              About Me
            </span>
            <span className="absolute text-[100px] md:text-[120px] font-extrabold opacity-5 text-white top-[-20px] left-0 select-none">
              About
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

          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] text-white font-bold shadow-md hover:scale-105 hover:shadow-[#ff6ec7]/40 transition-all duration-300 w-fit mx-auto md:mx-0">
            📄 Download CV
          </button>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
