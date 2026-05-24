"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const cvPath = "https://github.com/Yasirunk9612/my-portfolio/releases/download/cv/Yasiru_s_resume.pdf";

  useEffect(() => {
    if (!isHome) return undefined;
    const sections = navLinks
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.05 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const hrefFor = (href) => (isHome ? href : `/${href}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-400/20 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={isHome ? "#home" : "/#home"} onClick={() => setOpen(false)} className="text-xl font-bold">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">Yasiru.dev</span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={hrefFor(item.href)}
              onClick={() => setOpen(false)}
              className={`text-sm transition ${
                isHome && active === item.href.slice(1)
                  ? "text-cyan-300 drop-shadow-[0_0_9px_rgba(56,189,248,0.9)]"
                  : "text-slate-300 hover:text-cyan-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={cvPath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] transition hover:scale-105">
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>
        <button type="button" aria-label="Toggle navigation menu" onClick={() => setOpen((state) => !state)} className="text-slate-100 lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-cyan-400/20 bg-slate-950/95 px-4 pb-5 lg:hidden"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((item) => (
                <Link key={item.label} onClick={() => setOpen(false)} href={hrefFor(item.href)} className={isHome && active === item.href.slice(1) ? "text-cyan-300" : "text-slate-300 hover:text-cyan-300"}>
                  {item.label}
                </Link>
              ))}
              <a href={cvPath} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-5 py-2 font-semibold text-white">
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
