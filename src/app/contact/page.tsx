"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const ContactItem = ({ icon, title, value, href }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 bg-[#1a1a1a] hover:bg-gradient-to-r from-[#9f70fd] to-[#ff6ec7] border border-[#9f70fd]/30 rounded-2xl p-4 transition-all duration-300 shadow-md hover:shadow-[#ff6ec7]/30"
  >
    <div className="w-10 h-10 flex items-center justify-center bg-[#292929] rounded-full group-hover:bg-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400 group-hover:text-white">{title}</p>
      <p className="text-md font-semibold text-white group-hover:text-white">
        {value}
      </p>
    </div>
  </Link>
);

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-[100vh] flex justify-center items-center"
    >
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[95vw] max-w-[1050px] mx-auto sm:mb-[38px]"
      >
        <div className="text-center">
          <p className="sm:text-5xl text-4xl font-extrabold text-[#9f70fd] ">
            Contact Me
          </p>
        </div>
        <div className="w-full max-w-2xl mx-auto space-y-5 mt-12">
          <motion.div whileHover={{ scale: 1.05 }}>
            <ContactItem
              icon={<Mail className="w-6 h-6 text-[#9f70fd] group-hover:text-black" />}
              title="Email"
              value="rohamamajeed4@gmail.com"
              href="mailto:rohamamajeed4@gmail.com"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <ContactItem
              icon={<Phone className="w-6 h-6 text-[#9f70fd] group-hover:text-black" />}
              title="Phone"
              value="+923250336309"
              href="tel:+923250336309"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <ContactItem
              icon={<Github className="w-6 h-6 text-[#9f70fd] group-hover:text-black" />}
              title="GitHub"
              value="github.com/Rohama-Majeed7"
              href="https://github.com/Rohama-Majeed7"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <ContactItem
              icon={<Linkedin className="w-6 h-6 text-[#9f70fd] group-hover:text-black" />}
              title="LinkedIn"
              value="linkedin.com/in/rohama-majeed-213124282"
              href="https://linkedin.com/in/rohama-majeed-213124282"
            />
          </motion.div>
        </div>
      </motion.main>
    </section>
  );
};

export default Contact;
