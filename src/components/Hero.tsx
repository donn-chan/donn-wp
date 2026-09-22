export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-[0.55] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--rust-soft), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          opacity: 0.25,
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div
          className="rise mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft"
          style={{ animationDelay: "0ms" }}
        >
          <span className="size-1.5 rounded-full bg-moss" />
          Available for new projects — SEA &amp; remote
        </div>

        <h1
          className="rise font-display max-w-4xl text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Senior Full Stack Developer specializing in{" "}
          <span className="italic text-rust">headless WordPress</span> +{" "}
          <span className="italic text-rust">Next.js</span>
        </h1>

        <p
          className="rise mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          I take WordPress past its theme-and-plugin ceiling — decoupling the
          CMS from a fast, modern React/Next.js frontend, without disrupting
          your editors&rsquo; workflow.
        </p>

        <div
          className="rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-[13px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-rust"
          >
            Start a project
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#work"
            className="font-mono text-[13px] uppercase tracking-[0.1em] text-ink-soft underline decoration-line decoration-1 underline-offset-8 transition-colors hover:text-ink hover:decoration-rust"
          >
            See the work
          </a>
        </div>

        <dl
          className="rise mt-20 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {[
            ["7+", "years full-stack"],
            ["96", "Lighthouse, this site"],
            ["SSR/SSG", "rendering, not client dumps"],
            ["TH-based", "SEA & remote clients"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-2xl text-ink md:text-3xl">
                {value}
              </dt>
              <dd className="mt-1 text-sm text-ink-faint">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
