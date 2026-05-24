"use client";

import { motion } from "framer-motion";
import { AppWindow, BrainCircuit, LayoutDashboard, MonitorSmartphone } from "lucide-react";
import SectionTitle from "./SectionTitle";
import GradientCard from "./GradientCard";
import { services } from "@/lib/portfolioData";

const icons = [AppWindow, LayoutDashboard, BrainCircuit, MonitorSmartphone];

export default function Services() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Services" title="What I Can Build" description="Production-focused services for modern products and digital businesses." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }}>
                <GradientCard className="h-full">
                  <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-3 shadow-[0_0_25px_rgba(56,189,248,0.4)]"><Icon className="h-5 w-5" /></div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-xs text-cyan-300">{service.tech}</p>
                  <p className="mt-3 text-sm text-slate-400">{service.description}</p>
                </GradientCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
