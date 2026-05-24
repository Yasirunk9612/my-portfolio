import Link from "next/link";
import { ArrowLeft, Clock, UserRound } from "lucide-react";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import BlogActions from "@/components/BlogActions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blogPosts";

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((item) => item.id === params.id);
  const related = blogPosts.filter((item) => item.id !== params.id).slice(0, 3);

  if (!post) {
    return (
      <BackgroundWrapper>
        <Navbar />
        <section className="px-4 py-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl">
            <h1 className="text-3xl font-bold">Post not found</h1>
            <Link href="/blog" className="mt-4 inline-flex text-cyan-300">Back to Blog</Link>
          </div>
        </section>
        <Footer />
      </BackgroundWrapper>
    );
  }

  return (
    <BackgroundWrapper>
      <Navbar />
      <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/65 shadow-[0_0_60px_rgba(56,189,248,0.09)] backdrop-blur-xl">
          {post.image && (
            <div className="relative h-72 overflow-hidden sm:h-96">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <Link href="/blog" className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-950/70 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl transition hover:border-cyan-300">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">{post.category}</p>
                <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white sm:text-5xl">{post.title}</h1>
              </div>
            </div>
          )}
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_260px]">
            <div>
              {!post.image && (
                <>
                  <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-300"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
                  <h1 className="mt-6 text-4xl font-bold">{post.title}</h1>
                </>
              )}
              <div className="flex flex-wrap items-center gap-4 border-b border-cyan-400/15 pb-6 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2"><UserRound className="h-4 w-4 text-cyan-300" /> {post.author}</span>
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-cyan-300" /> {post.readTime}</span>
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-300">{post.excerpt}</p>
              <div
                className="mt-8 max-w-none space-y-6 text-slate-300 [&_code]:rounded-lg [&_code]:bg-slate-950/80 [&_code]:px-2 [&_code]:py-1 [&_code]:text-cyan-200 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-50 [&_li]:mb-3 [&_li]:leading-8 [&_li]:marker:text-cyan-300 [&_p]:leading-8 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-cyan-400/20 [&_pre]:bg-slate-950/90 [&_pre]:p-5 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:font-semibold [&_strong]:text-slate-100 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Article Actions</p>
                <div className="mt-4">
                  <BlogActions postId={post.id} title={post.title} />
                </div>
              </div>
              <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Tags</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1 text-xs text-slate-300">#{tag}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-purple-400/20 bg-slate-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Read Next</p>
                <div className="mt-4 space-y-4">
                  {related.map((item) => (
                    <Link key={item.id} href={`/blog/${item.id}`} className="block rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </BackgroundWrapper>
  );
}
