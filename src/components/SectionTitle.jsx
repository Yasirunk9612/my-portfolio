"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      {eyebrow && (
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-slate-400">{description}</p>}
    </motion.div>
  );
}
