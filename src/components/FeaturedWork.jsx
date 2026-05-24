"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import TechBadge from "./TechBadge";
import { featuredWork } from "@/lib/portfolioData";

const hasLink = (url) => url && url !== "#" && !url.includes("YOUR_GITHUB_USERNAME");

export default function FeaturedWork() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Highlights" title="Featured Work" description="Selected products with clear outcomes and technical depth." />
        <div className="space-y-6">
          {featuredWork.map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.16 }} className="grid gap-6 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-slate-900/80 to-slate-900/50 p-6 backdrop-blur-xl lg:grid-cols-[1.2fr_2fr]">
              <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-5">
                {item.imgUrl && <img src={item.imgUrl} alt={item.title} loading="lazy" className="mb-5 h-36 w-full rounded-xl border border-cyan-400/15 object-cover object-top" />}
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">{item.badge}</span>
                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{item.problem}</p>
              </div>
              <div>
                <p className="text-slate-300">{item.impact}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">{item.features.map((f) => <li key={f}>• {f}</li>)}</ul>
                <div className="mt-4 flex flex-wrap gap-2">{item.stack.map((t) => <TechBadge key={t}>{t}</TechBadge>)}</div>
                <div className="mt-5 flex gap-3">
                  {hasLink(item.github) && <a href={item.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-4 py-2 text-sm hover:text-cyan-300"><Github className="h-4 w-4" />GitHub</a>}
                  {hasLink(item.live) && <a href={item.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white"><ExternalLink className="h-4 w-4" />Live Demo</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
