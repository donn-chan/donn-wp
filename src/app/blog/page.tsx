import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog — Donn Lester Regalado",
  description:
    "Notes on headless WordPress, Next.js, and taking WordPress past its theme-and-plugin ceiling.",
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-rust">
              Blog
            </p>
            <h1 className="font-display mt-4 max-w-2xl text-4xl tracking-tight sm:text-5xl">
              Notes on headless WordPress and Next.js
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Practical write-ups from actually doing this work — not
              theory.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl divide-y divide-line px-6 md:px-10">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block py-10"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                  {post.date} · {post.readingTime}
                </p>
                <h2 className="font-display mt-3 text-2xl tracking-tight text-ink transition-colors group-hover:text-rust sm:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                  {post.description}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
