"use client";
import React, { useState } from "react";
import projectsData, { Project } from "@/project";
import { FaAngleDown } from "react-icons/fa";
import SingleProject from "@/components/SingleProject";
import Image from "next/image";

const ProjectsPage: React.FC = () => {
  const [project, setProject] = useState<Project[]>(projectsData);
  const [showProject, setShowProject] = useState<boolean>(false);
  const [singleProject, setSingleProject] = useState<Project | null>(null);
  const [scale, setScale] = useState<boolean>(false);

  const allProjects = () => setProject(projectsData);

  const filterProjects = (type: "practical" | "frontend") => {
    const newArray = projectsData.filter((pro) => pro.projectType === type);
    setProject(newArray);
  };

  return (
    <section
      id="projects"
      className="flex flex-col gap-10 px-6 py-16 bg-[#0a0a0a] text-white w-full max-w-7xl mx-auto rounded-3xl shadow-2xl relative overflow-hidden"
    >
      {/* 🎨 Background Glow */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-[#9f70fd]/20 rounded-full blur-[150px] top-[-80px] left-[-100px]" />
      <div className="absolute -z-10 w-[400px] h-[400px] bg-[#ff6ec7]/20 rounded-full blur-[120px] bottom-[-80px] right-[-100px]" />

      {/* 🧩 Section Title */}
      <div className="text-center relative">
        <p className="text-[40px] md:text-[60px] font-extrabold text-[#9f70fd] relative z-10">
          My Projects
        </p>
        <span className="absolute text-[85px] md:text-[120px] font-extrabold opacity-5 text-white top-[-10px] left-1/2 -translate-x-1/2 select-none">
          Projects
        </span>
      </div>

      {/* 🔘 Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-14">
        <button
          onClick={allProjects}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9f70fd] to-[#ff6ec7] text-white font-semibold hover:scale-105 transition-all duration-300"
        >
          All
        </button>
        <button
          onClick={() => filterProjects("frontend")}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9f70fd] to-[#ff6ec7] text-white font-semibold hover:scale-105 transition-all duration-300"
        >
          Frontend Projects
        </button>
        <button
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9f70fd] to-[#ff6ec7] text-white font-semibold opacity-60 cursor-not-allowed"
        >
          Backend Projects
        </button>
        <button
          onClick={() => filterProjects("practical")}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9f70fd] to-[#ff6ec7] text-white font-semibold hover:scale-105 transition-all duration-300"
        >
          Practical Projects
        </button>
      </div>

      {/* 🖼️ Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {project.map((pro, index) => (
          <div
            key={index}
            className="group relative h-[300px] rounded-xl overflow-hidden shadow-md hover:shadow-[#ff6ec7]/30 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={pro.proImg}
              alt="project-img"
              fill
              className="object-cover rounded-xl group-hover:opacity-10 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white font-bold text-lg mb-1">My Project</p>
              <p className="text-sm text-white mb-4">Click for more details</p>
              <FaAngleDown className="text-xl text-[#1a1a1a] animate-bounce mb-2" />
              <button
                onClick={() => {
                  setShowProject(true);
                  setScale(true);
                  setSingleProject(pro);
                }}
                className="py-2 px-4 bg-[#1a1a1a] rounded-full text-white hover:bg-white hover:text-black transition-all"
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🧩 Modal for Project Details */}
      {showProject && singleProject && (
        <SingleProject
          onClose={setShowProject}
          singleProject={singleProject}
          scale={scale}
          setScale={setScale}
        />
      )}
    </section>
  );
};

export default ProjectsPage;
