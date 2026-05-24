"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import TechBadge from "./TechBadge";
import { projects } from "@/lib/portfolioData";

const filters = ["All", "Full Stack", "Frontend", "Backend", "DevOps", "Desktop", "Mobile"];
const hasLink = (url) => url && url !== "#" && !url.includes("YOUR_GITHUB_USERNAME");

export default function Projects() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => (active === "All" ? projects : projects.filter((project) => project.category === active)), [active]);

  return (
    <section id="projects" className="relative scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Portfolio" title="Project Showcase" description="Hands-on builds across full-stack applications, frontend experiences, desktop systems, and delivery workflows." />
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActive(filter)} className={`rounded-full border px-4 py-2 text-sm transition ${active === filter ? "border-cyan-300 bg-cyan-400/15 text-cyan-300" : "border-cyan-400/20 bg-slate-900/70 text-slate-300 hover:border-cyan-300/40"}`}>{filter}</button>
          ))}
        </div>
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <motion.article layout key={project.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.12 }} className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(56,189,248,0.12)]">
              {project.imgUrl ? (
                <img src={project.imgUrl} alt={project.title} className="mb-4 h-40 w-full rounded-2xl border border-cyan-400/20 object-cover" loading="lazy" />
              ) : (
                <div className="mb-4 h-40 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20" />
              )}
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300"><span>Full-Stack Developer</span><span>/</span><span>{project.type}</span><span>/</span><span>{project.status}</span></div>
              <ul className="mt-3 space-y-1 text-sm text-slate-400">{project.features.map((feature) => <li key={feature}>+ {feature}</li>)}</ul>
              <div className="mt-4 flex flex-wrap gap-2">{project.stack.map((stack) => <TechBadge key={stack}>{stack}</TechBadge>)}</div>
              <div className="mt-5 flex gap-3 border-t border-cyan-400/20 pt-4">
                {hasLink(project.github) && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-4 py-2 text-sm hover:text-cyan-300"><Github className="h-4 w-4" />GitHub</a>}
                {hasLink(project.live) && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white"><ExternalLink className="h-4 w-4" />Live</a>}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
