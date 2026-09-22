export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-rust">
            About
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-tight">
            Donn Lester Regalado
          </h2>
          <p className="mt-2 text-sm text-ink-faint">
            Senior Full Stack Developer · Based in Thailand
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <p className="font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl">
            Seven-plus years building full-stack products across Next.js,
            React, Node, and AWS — now focused on bridging WordPress into
            modern frontend architecture.
          </p>

          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink-soft">
            <p>
              Most of that time has been spent on the same problem in
              different clothes: a business has content or commerce that
              needs to move fast, and the tooling around it is either too
              rigid for the team or too slow for the users. WordPress solves
              the first half well. It usually loses the second.
            </p>
            <p>
              I currently lead web development at{" "}
              <span className="text-ink">BrandStromX</span>, where the same
              pattern shows up constantly — and where headless WordPress
              paired with a Next.js frontend has become the default answer
              when a client wants both a CMS their team can actually use and
              a site that performs the way modern users expect.
            </p>
            <p>
              I work with agencies, startups, and SMEs across Southeast Asia
              and internationally, usually async and remote-first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
