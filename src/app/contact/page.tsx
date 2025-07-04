"use client";
import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Link from "next/link";
interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}
// 🔹 Reusable Contact Item Component
const ContactItem = ({ icon, title, value, href }:ContactItemProps) => (
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
      <p className="text-md font-semibold text-white group-hover:text-white">{value}</p>
    </div>
  </Link>
);

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex mt-6 md:mt-0 flex-col gap-12 px-6 py-10 bg-[#0a0a0a] text-white w-full max-w-7xl mx-auto rounded-3xl shadow-2xl relative overflow-hidden"
    >
      {/* 🎨 Background Glow Effects */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-[#9f70fd]/20 rounded-full blur-[150px] top-[-80px] left-[-100px]" />
      <div className="absolute -z-10 w-[400px] h-[400px] bg-[#ff6ec7]/20 rounded-full blur-[120px] bottom-[-80px] right-[-100px]" />


      {/* 🧩 Section Header */}
      <div className="text-center relative">
        <p className="text-[40px] md:text-[60px] font-extrabold text-[#9f70fd] relative z-10">
          Contact Me
        </p>
        <span className="absolute text-[85px] md:text-[120px] font-extrabold opacity-5 text-white top-[-10px] left-1/2 -translate-x-1/2 select-none">
          Contact
        </span>
      </div>

      {/* 📨 Contact Info Cards */}
      <div className="w-full max-w-2xl mx-auto space-y-5 mt-12">
        <ContactItem
          icon={<Mail className="w-6 h-6 text-[#9f70fd] group-hover:text-black" />}
          title="Email"
          value="rohamamajeed4@gmail.com"
          href="mailto:rohamamajeed4@gmail.com"
        />
        <ContactItem
          icon={<Phone className="w-6 h-6 text-[#9f70fd] group-hover:text-black" />}
          title="Phone"
          value="+923250336309"
          href="tel:+923250336309"
        />
        <ContactItem
          icon={<Github className="w-6 h-6 text-[#9f70fd] group-hover:text-black" />}
          title="GitHub"
          value="github.com/Rohama-Majeed7"
          href="https://github.com/Rohama-Majeed7"
        />
        <ContactItem
          icon={<Linkedin className="w-6 h-6 text-[#9f70fd] group-hover:text-black" />}
          title="LinkedIn"
          value="linkedin.com/in/rohama-majeed-213124282"
          href="https://linkedin.com/in/rohama-majeed-213124282"
        />
      </div>
    </section>
  );
};

export default Contact;
