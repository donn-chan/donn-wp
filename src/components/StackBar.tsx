import { stack } from "@/lib/content";

export default function StackBar() {
  return (
    <section className="border-b border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <p className="font-display max-w-xl text-xl leading-snug tracking-tight sm:text-2xl">
          7+ years full-stack, currently leading web development at{" "}
          <span className="text-rust">BrandStromX</span>.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {stack.map((item) => (
            <div key={item.name} className="flex items-baseline gap-2">
              <span className="font-display text-lg tracking-tight text-ink">
                {item.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
                {item.category}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-ink-faint">
          Infra work stays to what holds up in production — Docker,
          GitHub Actions, and core AWS services. If a project needs deeper
          Kubernetes or Terraform ownership, I&rsquo;ll say so up front rather
          than learn it on your invoice.
        </p>
      </div>
    </section>
  );
}
