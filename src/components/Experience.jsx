"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Radio,
  Rocket,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import TechBadge from "./TechBadge";

const experiences = [
  {
    number: "01",
    role: "Founder",
    company: "Cypex Technologies",
    duration: "Present",
    status: "Building digital products",
    icon: Rocket,
    website: "https://cypex-website.vercel.app",
    description:
      "Founded Cypex Technologies to create modern digital products, automation-driven web platforms, and reliable technology solutions for clients and online audiences.",
    responsibilities: [
      "Direct product vision and technology-focused brand development",
      "Built and launched the official Cypex Technologies website",
      "Developed Cypex CloudBook with scheduled publishing automation",
      "Deliver modern web solutions and digital product experiences",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Automation",
      "GitHub Workflows",
      "Deployment",
      "Product Strategy",
      "Leadership",
    ],
  },
  {
    number: "02",
    role: "Software Engineer Intern",
    company: "D P Infotech (Pvt) Limited",
    duration: "Since Jan 2026",
    status: "Engineering experience",
    icon: BriefcaseBusiness,
    description:
      "Working on application development, feature implementation, and team-based delivery across backend and frontend software workflows.",
    responsibilities: [
      "Build and maintain application features using C# and .NET",
      "Develop and improve responsive user interfaces",
      "Integrate REST APIs and database-driven modules",
      "Test API and application flows using Postman",
      "Collaborate through Git, GitHub, communication, and sprint delivery",
    ],
    technologies: [
      "C#",
      ".NET",
      "React",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "Git",
      "GitHub",
      "Postman",
      "Problem Solving",
      "Teamwork",
    ],
  },
];

const journeySignals = [
  { value: "2+", label: "Years Building" },
  { value: "Founder", label: "Cypex Technologies" },
  { value: "SE Intern", label: "Industry Experience" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const reveal = {
  hidden: { opacity: 0, y: 38, rotateX: 4 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function ExperienceCard({ experience, index }) {
  const Icon = experience.icon;

  return (
    <motion.article
      variants={reveal}
      className={`relative ml-12 lg:ml-0 lg:w-[calc(50%-2.75rem)] ${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}`}
    >
      <div className={`absolute top-10 hidden h-px w-11 lg:block ${index % 2 === 0 ? "-right-11 bg-gradient-to-r from-cyan-300/70 to-cyan-300/10" : "-left-11 bg-gradient-to-l from-purple-300/70 to-purple-300/10"}`} />
      <div className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/65 p-6 shadow-[0_0_45px_rgba(56,189,248,0.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_0_55px_rgba(56,189,248,0.16)] sm:p-7">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-70 transition duration-500 group-hover:via-purple-300" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/[0.07] blur-3xl transition duration-500 group-hover:bg-purple-500/[0.12]" />

        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-purple-500/20 text-cyan-200 shadow-[0_0_26px_rgba(56,189,248,0.18)]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-300/80">Node {experience.number}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">{experience.role}</h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 text-[11px] uppercase tracking-wider text-emerald-300">
              <Radio className="h-3 w-3" />
              {experience.status}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-slate-200">
              <Building2 className="h-4 w-4 text-cyan-300" />
              {experience.company}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-slate-400">
              <CalendarDays className="h-4 w-4 text-purple-300" />
              {experience.duration}
            </span>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-400">{experience.description}</p>

          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-slate-950/40 p-4">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Contribution stream</p>
            <ul className="space-y-3">
              {experience.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>

          {experience.website && (
            <motion.a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Visit Company Website <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(56,189,248,0.09),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(168,85,247,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.035)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Journey"
          title="Career Transmission"
          description="From founding digital products to building production software in an engineering team, each step strengthens how I design, build, and deliver technology."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="mb-12 grid gap-3 sm:grid-cols-3"
        >
          {journeySignals.map((signal) => (
            <motion.div key={signal.label} variants={reveal} className="rounded-2xl border border-cyan-400/15 bg-slate-900/50 p-5 backdrop-blur-xl">
              <p className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-xl font-bold text-transparent">{signal.value}</p>
              <p className="mt-1 text-sm text-slate-400">{signal.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.08 }}
          className="relative space-y-8 lg:space-y-10"
        >
          <div className="absolute bottom-5 left-4 top-5 w-px bg-gradient-to-b from-cyan-300/80 via-blue-500/50 to-purple-500/70 shadow-[0_0_18px_rgba(56,189,248,0.65)] lg:left-1/2 lg:-translate-x-1/2" />
          <motion.div
            animate={{ y: [0, 580, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-[13px] top-5 h-8 w-[7px] rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(56,189,248,0.95)] lg:left-1/2 lg:-translate-x-1/2"
          />
          {experiences.map((experience, index) => (
            <div key={experience.role} className="relative">
              <div className="absolute left-[9px] top-10 z-10 h-4 w-4 rounded-full border border-cyan-200/60 bg-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.8)] lg:left-1/2 lg:-translate-x-1/2" />
              <ExperienceCard experience={experience} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
