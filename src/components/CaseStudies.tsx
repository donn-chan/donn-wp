import { caseStudies } from "@/lib/content";

export default function CaseStudies() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-rust">
              Selected work
            </p>
            <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
              Representative projects
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-faint">
            Illustrative case studies based on the kind of work this
            positioning covers — real client names and numbers shared on
            request.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {caseStudies.map((cs, i) => (
            <article
              key={cs.id}
              className="group grid grid-cols-1 gap-8 rounded-2xl border border-line bg-paper-raised p-8 transition-colors duration-300 hover:border-rust/40 md:grid-cols-12 md:p-10"
            >
              <div className="md:col-span-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                  {String(i + 1).padStart(2, "0")} — {cs.industry}
                </span>
                <h3 className="font-display mt-3 text-2xl tracking-tight">
                  {cs.client}
                </h3>

                <dl className="mt-8 space-y-4">
                  {cs.results.map((r) => (
                    <div key={r.label} className="flex items-baseline justify-between gap-4 border-t border-line pt-3">
                      <dt className="text-sm text-ink-soft">{r.label}</dt>
                      <dd className="font-mono text-sm text-rust">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="space-y-6 md:col-span-8">
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                    Problem
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {cs.problem}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                    Approach
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {cs.approach}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
