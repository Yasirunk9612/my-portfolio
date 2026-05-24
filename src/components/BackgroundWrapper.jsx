"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundWrapper({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(168,85,247,0.16),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <motion.div
        animate={reduceMotion ? undefined : { x: [0, 42, -12, 0], y: [0, -35, 12, 0], scale: [1, 1.16, 0.94, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed -left-24 top-28 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        animate={reduceMotion ? undefined : { x: [0, -40, 16, 0], y: [0, 30, -14, 0], scale: [1, 1.1, 0.96, 1] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed -right-24 bottom-12 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
