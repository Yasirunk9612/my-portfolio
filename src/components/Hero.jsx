"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

const signals = [
  { label: "React", position: "left-[7%] top-[29%]", delay: 0 },
  { label: ".NET", position: "right-[10%] top-[26%]", delay: 0.35 },
  { label: "AI / ML", position: "left-[14%] bottom-[32%]", delay: 0.65 },
  { label: "Next.js", position: "right-[16%] bottom-[34%]", delay: 0.2 },
  { label: "C#", position: "left-[31%] top-[20%]", delay: 0.5 },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Yasirunk9612", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yasiru-nisal/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/yasiru_nisal__/", icon: Instagram },
  { label: "Email", href: "mailto:yasirunisal.dev@gmail.com", icon: Mail },
];

function Signal({ label, position, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay: 0.6 + delay, duration: 0.4 },
        scale: { delay: 0.6 + delay, duration: 0.4 },
        y: { delay, duration: 4.5 + delay, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute z-20 hidden items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-900/55 px-3 py-2 backdrop-blur-xl lg:inline-flex ${position}`}
    >
      <motion.span
        animate={{ scale: [1, 1.7, 1], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 2.1, repeat: Infinity, delay }}
        className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(56,189,248,1)]"
      />
      <span className="font-mono text-[11px] tracking-wider text-cyan-200">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const cvPath = "https://github.com/Yasirunk9612/my-portfolio/releases/download/cv/Yasiru_s_resume.pdf";
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const parallax = reduceMotion ? { x: 0, y: 0 } : mouse;

  const onPointerMove = (event) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 28,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 28,
    });
  };
  return (
    <section
      id="home"
      onMouseMove={onPointerMove}
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-slate-950 px-4 pb-16 pt-24 text-slate-100 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_46%_at_50%_44%,rgba(37,99,235,0.2),transparent_70%),radial-gradient(circle_at_22%_16%,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_84%_76%,rgba(168,85,247,0.16),transparent_30%),linear-gradient(128deg,#020617_18%,#030b21_50%,#020617_82%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(rgba(148,163,184,0.35)_1px,transparent_1px)] [background-size:30px_30px]" />
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : { x: parallax.x * 1.1, y: parallax.y * 1.1, scale: [1, 1.05, 1] }
        }
        transition={{ x: { type: "spring", stiffness: 38, damping: 18 }, y: { type: "spring", stiffness: 38, damping: 18 }, scale: { duration: 7, repeat: Infinity } }}
        className="pointer-events-none absolute left-1/2 top-[43%] -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl sm:h-[40rem] sm:w-[40rem]"
      />

      <motion.div
        animate={reduceMotion ? undefined : { x: parallax.x * 0.35, y: parallax.y * 0.35 }}
        transition={{ type: "spring", stiffness: 34, damping: 20 }}
        className="pointer-events-none absolute inset-0 z-[1] hidden md:block"
      >
        <div className="absolute left-[15%] top-[31%] h-px w-[70%] -rotate-[8deg] bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />
        <div className="absolute left-[15%] top-[64%] h-px w-[70%] rotate-[7deg] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
        {["<Yasiru.dev />", "build()", "ship ->"].map((code, index) => (
          <motion.span
            key={code}
            animate={{ opacity: [0.15, 0.38, 0.15], y: [0, -8, 0] }}
            transition={{ duration: 5 + index, delay: index * 0.4, repeat: Infinity }}
            className={`absolute font-mono text-xs text-cyan-200/40 ${
              ["left-[22%] top-[26%]", "right-[18%] top-[36%]", "left-[28%] bottom-[31%]", "right-[24%] bottom-[23%]"][index]
            }`}
          >
            {code}
          </motion.span>
        ))}
      </motion.div>

      {signals.map((signal) => (
        <Signal key={signal.label} {...signal} />
      ))}

      <motion.img
        src="/img/header-img.svg"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={
          reduceMotion
            ? { opacity: 0.84, scale: 1 }
            : {
                opacity: [0.55, 0.9, 0.7, 0.88, 0.55],
                x: ["-28vw", "20vw", "28vw", "-16vw", "-28vw"],
                y: ["-18vh", "-30vh", "12vh", "20vh", "-18vh"],
                rotate: [-12, 5, 16, -6, -12],
                scale: [0.72, 0.9, 0.76, 0.88, 0.72],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0.5 }
            : { duration: 26, repeat: Infinity, ease: "easeInOut" }
        }
        className="pointer-events-none absolute left-1/2 top-1/2 z-[6] hidden w-56 -translate-x-1/2 -translate-y-1/2 opacity-80 drop-shadow-[0_0_46px_rgba(99,102,241,0.55)] md:block lg:w-80"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/55 px-4 py-2 backdrop-blur-xl"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_15px_rgba(110,231,183,0.9)]" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-cyan-100/80 sm:text-xs">
            SRI LANKA / AVAILABLE FOR BUILDING
          </span>
        </motion.div>

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.7em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ delay: 0.12, duration: 0.8 }}
            className="text-xs uppercase text-slate-400 sm:text-sm"
          >
            Full-Stack Developer / AI Enthusiast
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.85, ease: "easeOut" }}
            className="relative mt-5 text-[clamp(3.3rem,14vw,11.6rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]"
          >
            <span className="absolute inset-0 text-cyan-300/10 blur-xl">YASIRU</span>
            <span className="relative bg-gradient-to-b from-white via-cyan-100 to-blue-400 bg-clip-text text-transparent">
              YASIRU
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.32, duration: 0.8 }}
            className="mt-1 text-[clamp(2.4rem,9.5vw,7.8rem)] font-black uppercase leading-none tracking-[0.14em] text-slate-100/90"
          >
            NISAL
          </motion.h2>

        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.65 }}
          className="mx-auto mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base"
        >
          I engineer web products, intelligent interfaces, and scalable software
          with React, Next.js, Node.js, C# and emerging AI technology.
        </motion.p>

        <motion.img
          src="/img/header-img.svg"
          alt="Developer astronaut illustration"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: [0.94, 1, 0.96], x: [-28, 24, -20, -28], y: [0, -14, 6, 0], rotate: [-4, 4, -2, -4] }}
          transition={{ opacity: { delay: 0.45, duration: 0.6 }, scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }, x: { duration: 12, repeat: Infinity, ease: "easeInOut" }, y: { duration: 12, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" } }}
          className="mx-auto mt-8 w-52 drop-shadow-[0_0_38px_rgba(99,102,241,0.5)] md:hidden"
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.65 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-7 py-3.5 font-semibold text-white shadow-[0_0_36px_rgba(56,189,248,0.32)]"
          >
            View My Builds <ArrowUpRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-slate-900/55 px-7 py-3.5 font-semibold text-slate-100 backdrop-blur-xl hover:border-purple-300 hover:text-purple-200"
          >
            <Download className="h-4 w-4" /> CV
          </motion.a>
          <motion.a
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/55 px-7 py-3.5 font-semibold text-slate-100 backdrop-blur-xl hover:border-cyan-300 hover:text-cyan-200"
          >
            <Send className="h-4 w-4" /> Connect
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.6 }}
          className="mx-auto mt-9 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 p-2 backdrop-blur-xl"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              whileHover={{ scale: 1.12, rotate: 5 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.4 }, y: { duration: 2.2, repeat: Infinity } }}
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-slate-500 lg:inline-flex"
      >
        SCROLL TO EXPLORE <ArrowDown className="h-3.5 w-3.5 text-cyan-300" />
      </motion.a>
    </section>
  );
}
