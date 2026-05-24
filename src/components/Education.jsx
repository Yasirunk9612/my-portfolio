"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Layers, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    icon: GraduationCap,
    title: "University of Bedfordshire",
    subtitle: "BSc (Hons) Computer Science",
    logo: "/img/new/uni.png",
    text: "Focused on software development, algorithms, databases, web technologies, and modern computing concepts.",
  },
  {
    icon: BookOpen,
    title: "St. Thomas' College, Bandarawela",
    subtitle: "School Education",
    logo: "/img/new/school.jpg",
    text: "Completed school education with a strong foundation that supported progression into computer science.",
  },
  {
    icon: Award,
    title: "Certifications",
    subtitle: "Technical Credentials",
    points: [
      "AWS Certified Cloud Practitioner - In Progress",
      "Web Design for Beginners - University of Moratuwa",
      "Introduction to Cloud Computing - Simplilearn",
    ],
  },
  { icon: Layers, title: "Academic Projects", subtitle: "Practical Work", text: "Built practical academic projects in full-stack development and software architecture." },
  { icon: BookOpen, title: "Technical Learning Areas", subtitle: "Continuous Learning", text: "Full-stack development, AI, cloud platforms, databases, and UI/UX engineering." },
];

export default function Education() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Education" title="Learning & Credentials" />
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }} className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 p-2"><Icon className="h-5 w-5" /></div>
                  {card.logo ? (
                    <img
                      src={card.logo}
                      alt={`${card.title} logo`}
                      className="h-8 w-8 rounded-md bg-white object-contain p-1"
                      loading="lazy"
                    />
                  ) : null}
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-cyan-300">{card.subtitle}</p>
                {card.points ? (
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    {card.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-slate-400">{card.text}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
