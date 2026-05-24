"use client";
import { motion } from "framer-motion";
import { Brain, Code2, Sparkles, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";
import GradientCard from "./GradientCard";

const items = [
  { icon: Code2, title: "Full-Stack Development", description: "Building complete web applications from frontend interfaces to backend APIs." },
  { icon: Brain, title: "AI & Data Science", description: "Exploring intelligent systems, data analysis, and AI-powered application features." },
  { icon: Sparkles, title: "Modern UI/UX", description: "Designing clean, responsive, and user-friendly digital experiences." },
  { icon: Wrench, title: "Problem Solving", description: "Creating practical software solutions for real-world needs." },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About Me" title="Engineering Useful Digital Products" description="Founder of Cypex Technologies and a Software Engineer Intern building practical, scalable digital products." />
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }} className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl">
            <p className="leading-8 text-slate-300">With more than two years of hands-on development experience and 50+ completed projects, I build full-stack applications, automation-focused platforms, modern business websites, and desktop solutions. My work combines clean UI/UX, reliable backend development, practical AI exploration, and real client delivery.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-4"><p className="text-cyan-300">50+ Projects</p><p className="mt-1 text-xs text-slate-400">Built and delivered</p></div>
              <div className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-4"><p className="text-cyan-300">28+ Technologies</p><p className="mt-1 text-xs text-slate-400">Across 5 skill areas</p></div>
              <div className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-4"><p className="text-cyan-300">2+ Years</p><p className="mt-1 text-xs text-slate-400">Learning and building</p></div>
              <div className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-4"><p className="text-cyan-300">Founder</p><p className="mt-1 text-xs text-slate-400">Cypex Technologies</p></div>
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }}>
                  <GradientCard className="h-full">
                    <div className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 p-2"><Icon className="h-5 w-5" /></div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                  </GradientCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
