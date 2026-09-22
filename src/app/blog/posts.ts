export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
};

export const posts: Post[] = [
  {
    slug: "wordpress-to-nextjs-migration-guide",
    title: "WordPress to Next.js Migration: A Practical Guide",
    description:
      "What headless WordPress actually is, when the migration is worth it, and the real steps — content API, previews, redirects, and the parts that break if you skip them.",
    date: "2026-09-22",
    readingTime: "14 min read",
  },
];
