import { scenarios } from "@/lib/content";

export default function HowICanHelp() {
  return (
    <section id="how-i-help" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-rust">
            How I can help
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
            Three ways this usually starts
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {scenarios.map((s) => (
            <div
              key={s.id}
              className="group relative flex flex-col bg-paper p-8 transition-colors duration-300 hover:bg-paper-raised"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                {s.tag}
              </span>
              <h3 className="font-display mt-4 text-xl leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                {s.description}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {s.approach.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-soft"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 shrink-0 text-rust"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-rust transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
