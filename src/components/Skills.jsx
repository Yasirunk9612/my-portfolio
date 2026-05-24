"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, Code2, Cpu, Database, Server, Wrench } from "lucide-react";

const skillsData = {
  Frontend: [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "Next.js", level: 82 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Bootstrap", level: 85 },
  ],
  Backend: [
    { name: "C#", level: 80 },
    { name: ".NET", level: 78 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "REST APIs", level: 88 },
    { name: "JWT Authentication", level: 80 },
  ],
  "Database & Cloud": [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 78 },
    { name: "SQLite", level: 76 },
    { name: "Firebase", level: 78 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 88 },
    { name: "Postman", level: 84 },
    { name: "VS Code", level: 92 },
    { name: "Electron", level: 72 },
    { name: "Figma", level: 78 },
  ],
  "AI / Data": [
    { name: "Python", level: 78 },
    { name: "Machine Learning Basics", level: 72 },
    { name: "Data Analysis", level: 75 },
    { name: "Power BI", level: 76 },
  ],
};

const iconMap = {
  Frontend: Code2,
  Backend: Server,
  "Database & Cloud": Database,
  Tools: Wrench,
  "AI / Data": BrainCircuit,
};

const stats = [
  { value: "28+", title: "Technologies", desc: "Hands-on tools" },
  { value: "5", title: "Skill Areas", desc: "Organized expertise" },
  { value: "MERN", title: "Stack Focus", desc: "Core development" },
  { value: "AI", title: "Learning Path", desc: "Applied intelligence" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function levelLabel(level) {
  if (level >= 90) return "Advanced";
  if (level >= 80) return "Strong";
  if (level >= 70) return "Growing";
  return "Learning";
}

function CategoryButton({ name, active, onClick }) {
  const Icon = iconMap[name];
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
        active
          ? "border-cyan-400/40 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.2)]"
          : "border-white/10 bg-slate-900/50 text-slate-400 hover:border-cyan-400/30 hover:text-cyan-300"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-950/70">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs opacity-80">{skillsData[name].length} skills</p>
        </div>
      </div>
    </motion.button>
  );
}

function SkillCard({ skill }) {
  return (
    <motion.div variants={itemVariants} className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(56,189,248,0.18)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-medium text-slate-100">{skill.name}</p>
        <div className="text-right">
          <p className="text-sm font-semibold text-cyan-300">{skill.level}%</p>
          <p className="text-[11px] text-slate-400">{levelLabel(skill.level)}</p>
        </div>
      </div>
      <div className="h-2.5 rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const categories = useMemo(() => Object.keys(skillsData), []);
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section id="skills" className="relative scroll-mt-20 overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-48 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-32 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }} className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-300 backdrop-blur-xl sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
            My Developer Toolkit
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-100 sm:text-4xl md:text-5xl">Technical Skills</h2>
          <p className="mt-4 text-slate-400">
            A modern technology stack focused on building scalable web applications,
            intelligent systems, and clean digital experiences.
          </p>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.15 }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {categories.map((category) => (
              <motion.div key={category} variants={itemVariants}>
                <CategoryButton name={category} active={activeCategory === category} onClick={() => setActiveCategory(category)} />
              </motion.div>
            ))}
          </motion.div>
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} variants={containerVariants} initial="hidden" animate="show" exit={{ opacity: 0, y: 12 }} className="grid gap-4 sm:grid-cols-2">
                {skillsData[activeCategory].map((skill) => <SkillCard key={skill.name} skill={skill} />)}
              </motion.div>
            </AnimatePresence>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <motion.div key={stat.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }} className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-4 backdrop-blur-xl transition-all hover:shadow-[0_0_28px_rgba(56,189,248,0.16)]">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-slate-950/70">
                    <Cpu className="h-4 w-4 text-cyan-300" />
                  </div>
                  <p className="text-lg font-bold text-cyan-300">{stat.value}</p>
                  <p className="text-sm font-medium text-slate-100">{stat.title}</p>
                  <p className="text-xs text-slate-400">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
