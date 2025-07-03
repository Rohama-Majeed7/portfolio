"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={handleToggle}
        className="fixed top-5 right-5 z-[100] md:hidden text-white bg-[#1a1a1a] p-2 rounded-full shadow-lg hover:shadow-[#9f70fd]/50 transition"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Slide-in Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-[#0a0a0acc] backdrop-blur-md z-50 shadow-2xl border-l border-[#9f70fd]/20 flex flex-col items-center justify-center gap-8 px-6 py-10"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={handleClose}
                className="text-2xl font-semibold text-white relative group"
              >
                <span className="bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] bg-clip-text text-transparent">
                  {label}
                </span>
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-[#9f70fd] to-[#ff6ec7] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
