"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  FileText,
  FolderKanban,
  Code,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", icon: <Home size={22} />, label: "Home" },
  { href: "/about", icon: <User size={22} />, label: "About" },
  { href: "/resume", icon: <FileText size={22} />, label: "Resume" },
  { href: "/projects", icon: <FolderKanban size={22} />, label: "Projects" },
  { href: "/skills", icon: <Code size={22} />, label: "Skills" },
  { href: "/contact", icon: <Mail size={22} />, label: "Contact" },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Vertical Icons */}
      <nav className="hidden md:flex flex-col gap-6 fixed right-1 top-[150px] z-50">
        {navItems.map(({ href, icon, label }, idx) => (
          <Link
            key={idx}
            href={href}
            className="group relative flex items-center gap-3 pr-3 "
          >
            <div className="p-3 rounded-full border-2 border-[#9f70fd]  bg-[#1a1a1a] text-white hover:bg-gradient-to-tr from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] shadow-lg transition-all duration-300 hover:scale-110">
              {icon}
            </div>
            <span className="absolute right-14 opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white bg-[#1a1a1a] px-3 py-1 text-sm rounded-md whitespace-nowrap shadow-lg">
              {label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Hamburger for Mobile */}
      <button
        onClick={() => setIsMobileOpen((prev) => !prev)}
        className="fixed top-5 right-5 z-[100] md:hidden text-white p-2 bg-[#1a1a1a] rounded-md"
      >
        {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[220px] bg-[#0a0a0a] text-white flex flex-col items-center pt-20 gap-8 z-50 shadow-xl"
          >
            {navItems.map(({ href, icon, label }, idx) => (
              <Link
                key={idx}
                href={href}
                onClick={() => setIsMobileOpen(false)}
                className="group relative flex items-center gap-3"
              >
                <div className="p-3 rounded-full bg-[#1a1a1a] text-white hover:bg-gradient-to-tr from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] shadow-lg transition-all duration-300 hover:scale-110">
                  {icon}
                </div>
                <span className="text-white group-hover:text-[#ff6ec7] text-md transition-all duration-200">
                  {label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
