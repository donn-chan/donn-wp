import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "../posts";

const post = posts.find(
  (p) => p.slug === "wordpress-to-nextjs-migration-guide"
)!;

export const metadata: Metadata = {
  title: `${post.title} — Donn Lester Regalado`,
  description: post.description,
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
  },
};

function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="font-display mt-14 text-2xl tracking-tight text-ink sm:text-3xl"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display mt-9 text-xl tracking-tight text-ink">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
      {children}
    </p>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="mt-5 overflow-x-auto rounded-lg border border-line bg-paper-raised p-4 font-mono text-[13px] leading-relaxed text-ink">
      <code>{children}</code>
    </pre>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-paper-raised px-1.5 py-0.5 font-mono text-[0.85em] text-rust">
      {children}
    </code>
  );
}

export default function Post() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="border-b border-line">
          <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
            <a
              href="/blog"  
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint transition-colors hover:text-rust"
            >
              ← Blog
            </a>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
              {post.date} · {post.readingTime}
            </p>
            <h1 className="font-display mt-3 text-4xl tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {post.description}
            </p>

            <div className="mt-14 border-t border-line pt-2">
              <P>
                &ldquo;Should we go headless&rdquo; usually gets asked at the
                wrong altitude — as a technology preference instead of a
                response to a specific, felt problem. This guide skips the
                pitch. It&rsquo;s the actual sequence I use when a WordPress
                site has outgrown what a theme and a stack of plugins can do
                for it, and needs to become WordPress-as-backend with a
                Next.js frontend in front.
              </P>

              <H2 id="what-headless-means">
                What &ldquo;headless WordPress&rdquo; actually means
              </H2>
              <P>
                WordPress keeps doing what it&rsquo;s good at: the admin,
                the editor, the content model, the people on your team who
                already know how to use it. What changes is the frontend.
                Instead of PHP templates rendering HTML on request, WordPress
                becomes a content API — usually via{" "}
                <InlineCode>WPGraphQL</InlineCode> or the built-in REST API —
                and a separate Next.js application queries that API and
                renders the site your visitors actually see.
              </P>
              <P>
                Two systems, one content source. Editors keep their
                workflow. Visitors get a modern rendering layer that isn&rsquo;t
                constrained by what a PHP theme can reasonably do.
              </P>

              <H2 id="when-it-is-worth-it">When this is actually worth it</H2>
              <P>
                Headless isn&rsquo;t a default upgrade — it&rsquo;s a trade.
                You gain frontend performance and flexibility; you take on
                the cost of running (and paying for) two systems instead of
                one. It&rsquo;s worth that trade when one or more of these is
                true:
              </P>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-soft">
                <li>
                  Core Web Vitals or Lighthouse scores are actively costing
                  you — in rankings, in conversion, or in a client
                  relationship where &ldquo;the site feels slow&rdquo; keeps
                  coming up.
                </li>
                <li>
                  The design or interaction requirements have outgrown what
                  a page builder or theme customizer can produce without
                  turning into plugin soup.
                </li>
                <li>
                  You need the frontend to live somewhere PHP hosting
                  doesn&rsquo;t reach well — an app shell, a highly
                  interactive experience, or deployment on edge
                  infrastructure like Vercel.
                </li>
                <li>
                  Editorial output and frontend engineering need to move on
                  separate release cadences without stepping on each other.
                </li>
              </ul>
              <P>
                And it&rsquo;s <em>not</em> worth it for a five-page brochure
                site, a WooCommerce store leaning on checkout plugins that
                don&rsquo;t have a headless-friendly equivalent, or a team
                with no capacity to maintain a second codebase. Say that
                plainly to a client before you say anything else — it&rsquo;s
                the fastest way to earn trust in this conversation.
              </P>

              <H2 id="architecture">The architecture, at a glance</H2>
              <P>A working setup looks like this:</P>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-soft">
                <li>
                  <strong className="text-ink">WordPress</strong> stays on
                  managed hosting (WP Engine, Kinsta, or self-hosted) —
                  content, media, and the editor experience live here,
                  unchanged.
                </li>
                <li>
                  <strong className="text-ink">WPGraphQL</strong> (plus{" "}
                  <InlineCode>WPGraphQL for ACF</InlineCode> if you use
                  Advanced Custom Fields) exposes content as a typed API.
                </li>
                <li>
                  <strong className="text-ink">Next.js</strong>, deployed on
                  Vercel, fetches from that API at build time (SSG), on
                  request (SSR), or on a revalidation interval (ISR) —
                  usually a mix, depending on how often content changes.
                </li>
              </ul>
              <P>A minimal query looks like this:</P>
              <Code>{`const QUERY = \`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      featuredImage { node { sourceUrl altText } }
      seo { title metaDesc }
    }
  }
\`;

export async function getPost(slug: string) {
  const res = await fetch(process.env.WORDPRESS_API_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: QUERY, variables: { slug } }),
    next: { revalidate: 60 },
  });
  const { data } = await res.json();
  return data.post;
}`}</Code>

              <H2 id="the-migration-sequence">The migration sequence</H2>

              <H3>1. Audit before you touch code</H3>
              <P>
                List every post type, custom field group, and template the
                current site uses — not just pages and posts. This is where
                surprises live: a custom post type built for one landing
                page three years ago, an ACF repeater no one remembers, a
                plugin quietly injecting markup into every template via a
                hook. Missing one of these doesn&rsquo;t fail loudly; it
                fails as a blank section on launch day that nobody notices
                until a client does.
              </P>

              <H3>2. Stand up the content API</H3>
              <P>
                Install WPGraphQL, map any ACF field groups, and query the
                schema directly (WPGraphQL ships a built-in GraphiQL IDE)
                before writing a single line of Next.js. Confirm every field
                the frontend will need is actually exposed — some ACF field
                types and third-party plugin data need explicit
                registration to appear in the schema.
              </P>

              <H3>3. Build the Next.js data layer first, templates second</H3>
              <P>
                Write typed fetch functions for each content type before
                building the pages that use them. It&rsquo;s tempting to
                build page-by-page and query as you go — resist it. A
                content layer built once and reused is also the reusable
                asset that pays off if you ever add a second frontend
                (native app, partner site) against the same WordPress
                backend.
              </P>

              <H3>4. Solve previews before launch, not after</H3>
              <P>
                This is the step teams skip and regret. Editors expect to
                hit &ldquo;Preview&rdquo; in WordPress and see a real draft,
                not a 404 or a stale cached page. Next.js{" "}
                <InlineCode>Draft Mode</InlineCode> plus a preview route that
                authenticates the request against WordPress solves this —
                but it has to be built and tested with actual editors before
                launch, or you&rsquo;ll get the &ldquo;we can&rsquo;t see
                drafts anymore&rdquo; complaint in week one, which undermines
                the entire migration in the client&rsquo;s eyes regardless of
                how fast the site is.
              </P>

              <H3>5. Protect SEO — this is the highest-risk step</H3>
              <P>
                Ranking loss is the single biggest risk in this whole
                migration, and it&rsquo;s avoidable with process, not luck:
              </P>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-soft">
                <li>
                  Export the full URL list from the current site (Screaming
                  Frog or the XML sitemap) before touching anything.
                </li>
                <li>
                  Match every old URL to its new URL 1:1. Any URL structure
                  change needs a 301, not a &ldquo;the homepage still
                  exists so it&rsquo;s fine.&rdquo;
                </li>
                <li>
                  Migrate Yoast/RankMath meta titles, descriptions, and
                  Open Graph data through the GraphQL SEO fields — don&rsquo;t
                  let the frontend regenerate them from scratch.
                </li>
                <li>
                  Regenerate structured data (Article, Product, Breadcrumb
                  schema) in the new frontend — headless setups lose this by
                  default since the plugin-generated JSON-LD doesn&rsquo;t
                  travel through the API automatically.
                </li>
                <li>
                  Submit the new sitemap in Search Console on launch day and
                  watch Coverage and Core Web Vitals reports for the
                  following two weeks, not just the first 48 hours.
                </li>
              </ul>

              <H3>6. Images, forms, and the last-mile plugins</H3>
              <P>
                Route WordPress media through <InlineCode>next/image</InlineCode>{" "}
                for responsive sizing instead of serving WordPress&rsquo;s
                native srcset output as-is. Rebuild forms as real Next.js
                components posting to a route handler (or a service like
                Resend) instead of relying on a WordPress form plugin, which
                won&rsquo;t function outside the WordPress render path. Audit
                any other plugin that injects frontend behavior — most
                won&rsquo;t survive the migration and need a native
                replacement.
              </P>

              <H3>7. QA against the old site, not just the new one</H3>
              <P>
                Crawl both sites and diff them: page count, title tags,
                meta descriptions, canonical tags, redirect status codes.
                This step catches the ten quiet regressions that a visual
                review of the new site alone will never surface.
              </P>

              <H2 id="checklist">Launch checklist</H2>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-soft">
                <li>Every content type and ACF field audited and mapped</li>
                <li>Content API (WPGraphQL) exposing every field the frontend needs</li>
                <li>Draft preview tested by an actual editor, not just you</li>
                <li>Full old-URL → new-URL redirect map, 301s in place</li>
                <li>SEO meta migrated through the API, not regenerated</li>
                <li>Structured data (JSON-LD) rebuilt natively in the frontend</li>
                <li>Images served through next/image with real responsive sizes</li>
                <li>Forms rebuilt and tested end-to-end, including notification emails</li>
                <li>New sitemap submitted in Search Console on launch day</li>
                <li>Old vs. new site crawled and diffed before DNS cutover</li>
              </ul>

              <H2 id="closing">Where this usually goes wrong</H2>
              <P>
                Almost never in the Next.js code. It goes wrong in the
                handoff — a redirect map that&rsquo;s 90% complete, a preview
                flow that works for the developer but not the editor, a
                structured data type that quietly stops being generated.
                None of these show up in a demo. All of them show up in
                Search Console three weeks later. That&rsquo;s the part
                worth getting right, and it&rsquo;s the part a generic
                &ldquo;convert my site to Next.js&rdquo; brief usually
                misses.
              </P>
              <P>
                If you&rsquo;re an agency scoping this for a client, or
                weighing whether it&rsquo;s worth it at all —{" "}
                <a
                  href="/#contact"
                  className="text-rust underline decoration-rust/40 underline-offset-4 hover:decoration-rust"
                >
                  I&rsquo;m happy to look at the specific site
                </a>{" "}
                and give a straight answer, including when the answer is
                &ldquo;don&rsquo;t.&rdquo;
              </P>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
