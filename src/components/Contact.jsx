"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const cvPath = "/Yasiru_Nisal_CV.pdf";
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, access_key: "7ffb9733-4d1c-4093-a3eb-7fc774d322c9" }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully.");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Contact" title="Let’s Build Something Modern Together" description="Have a project idea, collaboration opportunity, internship opening, or freelance work?" />
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.18 }} className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl">
            <p className="text-slate-300">Feel free to reach out directly via email or social platforms.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-300" /> yasirunisal.dev@gmail.com</p>
              <p className="flex items-center gap-2"><Linkedin className="h-4 w-4 text-cyan-300" /> yasiru-nisal</p>
              <p className="flex items-center gap-2"><Github className="h-4 w-4 text-cyan-300" /> Yasirunk9612</p>
              <p className="flex items-center gap-2"><Instagram className="h-4 w-4 text-cyan-300" /> yasiru_nisal__</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> Sri Lanka</p>
            </div>
            <a href={cvPath} download className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-6 py-3 font-semibold text-white"><Download className="h-4 w-4" />Download CV</a>
          </motion.div>
          <motion.form onSubmit={submit} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.18 }} className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl">
            <div className="grid gap-4 md:grid-cols-2">
              <input name="firstName" value={form.firstName} onChange={onChange} placeholder="First Name" required className="rounded-xl border border-cyan-400/20 bg-slate-950/70 px-4 py-3 outline-none focus:border-cyan-300" />
              <input name="lastName" value={form.lastName} onChange={onChange} placeholder="Last Name" required className="rounded-xl border border-cyan-400/20 bg-slate-950/70 px-4 py-3 outline-none focus:border-cyan-300" />
              <input name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" required className="rounded-xl border border-cyan-400/20 bg-slate-950/70 px-4 py-3 outline-none focus:border-cyan-300" />
              <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="rounded-xl border border-cyan-400/20 bg-slate-950/70 px-4 py-3 outline-none focus:border-cyan-300" />
              <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows={5} required className="md:col-span-2 rounded-xl border border-cyan-400/20 bg-slate-950/70 px-4 py-3 outline-none focus:border-cyan-300" />
            </div>
            <button disabled={loading} className="mt-4 inline-flex rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-6 py-3 font-semibold text-white disabled:opacity-60">{loading ? "Sending..." : "Send Message"}</button>
            {status && <p className="mt-3 text-sm text-cyan-300">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
