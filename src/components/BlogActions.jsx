"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Copy, Heart, Share2 } from "lucide-react";

export default function BlogActions({ postId, title }) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const storageKey = useMemo(() => `yasiru-blog-like-${postId}`, [postId]);

  useEffect(() => {
    setLiked(window.localStorage.getItem(storageKey) === "true");
  }, [storageKey]);

  const toggleLike = () => {
    const next = !liked;
    setLiked(next);
    window.localStorage.setItem(storageKey, String(next));
  };

  const sharePost = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Closing the native share sheet should not surface an error in the UI.
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={toggleLike}
        className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
          liked
            ? "border-pink-400/40 bg-pink-400/15 text-pink-200 shadow-[0_0_24px_rgba(244,114,182,0.18)]"
            : "border-cyan-400/20 bg-slate-950/60 text-slate-200 hover:border-pink-300/40 hover:text-pink-200"
        }`}
      >
        <Heart className={`h-4 w-4 ${liked ? "fill-pink-300 text-pink-300" : ""}`} />
        {liked ? "Liked" : "Like Article"}
      </button>
      <button
        type="button"
        onClick={sharePost}
        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-950/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
      >
        <Share2 className="h-4 w-4" />
        Share
      </button>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-slate-950/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-purple-300/50 hover:text-purple-200"
      >
        {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied" : "Copy Link"}
      </button>
    </div>
  );
}
