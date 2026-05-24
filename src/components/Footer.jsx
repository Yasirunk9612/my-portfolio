"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const isHome = usePathname() === "/";

  return (
    <footer className="border-t border-cyan-400/20 bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">Yasiru.dev</h3>
          <p className="mt-3 text-slate-400">Building modern digital experiences with code, creativity, and technology.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-200">Quick Links</p>
          <div className="mt-3 flex flex-wrap gap-4 text-slate-400">
            {quickLinks.map((item) => (
              <a key={item.label} href={isHome ? item.href : `/${item.href}`} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-start justify-between md:justify-end">
          <div className="flex gap-3 text-slate-300">
            <a href="https://github.com/Yasirunk9612" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5 hover:text-cyan-300" /></a>
            <a href="https://www.linkedin.com/in/yasiru-nisal/" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5 hover:text-cyan-300" /></a>
            <a href="https://www.instagram.com/yasiru_nisal__/" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5 hover:text-cyan-300" /></a>
          </div>
          <a href={isHome ? "#home" : "/#home"} className="rounded-full border border-cyan-400/30 p-2 text-cyan-300 transition hover:-translate-y-1 hover:border-cyan-300"><ArrowUp className="h-4 w-4" /></a>
        </div>
      </motion.div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">© 2026 Yasiru Nisal. All rights reserved.</p>
    </footer>
  );
}
