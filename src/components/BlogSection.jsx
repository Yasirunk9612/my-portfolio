"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { blogPosts } from "@/lib/blogSummaries";

const categories = ["All", "Web Development", "React", "Backend", "AI", "Career", "Projects"];

export default function BlogSection() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => blogPosts.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const term = query.toLowerCase();
    return matchesCategory && (post.title.toLowerCase().includes(term) || post.excerpt.toLowerCase().includes(term));
  }).sort((first, second) => new Date(second.date) - new Date(first.date)).slice(0, 6), [category, query]);

  return (
    <section id="blog" className="relative scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Insights" title="Latest Articles" description="The latest writing on React, backend systems, AI learning, and engineering growth." />
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm ${category === item ? "border-cyan-300 bg-cyan-400/15 text-cyan-300" : "border-cyan-400/20 bg-slate-900/70 text-slate-300"}`}>{item}</button>)}</div>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search blog posts..." className="rounded-full border border-cyan-400/20 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 outline-none focus:border-cyan-300" />
        </div>
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((post) => (
            <motion.article layout key={post.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.12 }} className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(56,189,248,0.12)]">
              {post.image ? <img src={post.image} alt={post.title} className="mb-4 h-36 w-full rounded-2xl border border-cyan-400/20 object-cover" loading="lazy" /> : <div className="mb-4 h-36 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20" />}
              <p className="text-xs text-cyan-300">{post.category} / {post.readTime}</p>
              <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{post.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="text-xs text-slate-400">#{tag}</span>)}</div>
              <Link href={`/blog/${post.id}`} className="mt-4 inline-flex items-center gap-2 text-cyan-300">Read more <ArrowUpRight className="h-4 w-4" /></Link>
            </motion.article>
          ))}
        </motion.div>
        {filtered.length === 0 && (
          <div className="mt-6 rounded-3xl border border-cyan-400/15 bg-slate-900/50 p-10 text-center text-slate-400">
            No articles match this category or search yet.
          </div>
        )}
        <div className="mt-10 text-center">
          <Link href="/blog" className="inline-flex rounded-full border border-cyan-400/30 bg-slate-900/60 px-6 py-3 text-cyan-300 transition hover:border-cyan-300">View all articles</Link>
        </div>
      </div>
    </section>
  );
}
