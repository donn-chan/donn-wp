export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
          © {new Date().getFullYear()} Donn Lester Regalado — built headless, naturally.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
          Next.js · TypeScript · Tailwind
        </p>
      </div>
    </footer>
  );
}
