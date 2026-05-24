"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blogSummaries";

export default function BlogPage() {
  const posts = [...blogPosts].sort((first, second) => new Date(second.date) - new Date(first.date));

  return (
    <BackgroundWrapper>
      <Navbar />
      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">Field Notes</span>
            <h1 className="mt-5 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-4xl font-black text-transparent md:text-6xl">Blog & Knowledge Base</h1>
            <p className="mt-4 text-slate-400">Long-form notes on React, backend architecture, CI/CD, AI product workflows, and practical engineering growth.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.12 }} className="group overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(56,189,248,0.12)]">
                {post.image && <img src={post.image} alt={post.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />}
                <div className="p-5">
                  <p className="text-xs text-cyan-300">{post.category} / {post.readTime}</p>
                  <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{post.tags.slice(0, 3).map((tag) => <span key={tag} className="text-xs text-slate-400">#{tag}</span>)}</div>
                  <Link href={`/blog/${post.id}`} className="mt-5 inline-flex items-center gap-2 text-cyan-300">Read more <ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </BackgroundWrapper>
  );
}
