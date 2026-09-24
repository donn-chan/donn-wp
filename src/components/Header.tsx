"use client";

const navLinks = [
  { href: "/#how-i-help", label: "How I help" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="/#top"
          aria-label="Donn Regalado, home"
          className="flex items-center gap-2.5"
        >
          <img src="/logo.svg" alt="" width="32" height="32" className="size-8" />
          <span className="flex items-baseline gap-2">
            <span className="font-display text-lg tracking-tight">Donn Regalado</span>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint sm:inline">
              headless wp + next.js
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="relative flex size-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-rust hover:text-rust"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="absolute [html[data-theme=dark]_&]:hidden"
            >
              <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="absolute hidden [html[data-theme=dark]_&]:block"
            >
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          </button>
          <a
            href="/#contact"
            className="hidden rounded-full bg-ink px-4 py-2 font-mono text-[12px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-rust sm:inline-block"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}
