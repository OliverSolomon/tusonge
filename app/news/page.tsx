import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates — Tusonge",
  description: "Milestones, stories, and technical updates.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">News & Updates</h1>
      <p className="mt-4 text-black/80 dark:text-white/80">
        Dynamic content to feature project milestones, community impact stories, and technical innovation updates.
      </p>

      <div className="mt-8 grid gap-4">
        <article className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          <h2 className="font-medium">Prototype design milestone</h2>
          <p className="text-sm text-black/70 dark:text-white/70">Coming soon: updates on prototype testing and validation.</p>
        </article>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-medium">Media Resources</h2>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80 mt-2">
          <li>Press kit: product images, team photos, stats, spec sheets</li>
          <li>Speaking engagements: conferences on assistive tech and inclusion</li>
        </ul>
      </section>
    </div>
  );
}

