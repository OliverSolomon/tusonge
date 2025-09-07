import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Solution — Tusonge",
  description: "Three-phase innovation roadmap and sustainability approach.",
};

import Image from "next/image";

export default function SolutionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Our Solution</h1>

      {/* Inspirational hero */}
      <section className="mt-6">
        <div className="relative rounded-lg overflow-hidden border border-black/10 dark:border-white/15 min-h-[60vh] sm:min-h-[70vh]">
          {/* Soft background */}
          <Image
            src="/sample-hero-oliver-tusonge.png"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover blur-lg scale-110 opacity-50"
            priority
          />
          {/* Foreground product in full view */}
          <Image
            src="/sample-wheelchair-attached.png"
            alt="Tusonge attachment connected — mobility with dignity"
            fill
            sizes="100vw"
            className="object-contain"
            priority={false}
          />
        </div>
        <p className="mt-4 text-black/80 dark:text-white/80">
          A refined front module connects seamlessly to a standard wheelchair —
          delivering confident movement across uneven ground, curbs, and
          everyday city life.
        </p>
      </section>

      {/* Key messages */}
      <section className="mt-10 grid md:grid-cols-3 gap-4">
        {[
          {
            t: "Designed for Real Terrain",
            d: "Navigate curbs, paths, and rough roads with poise.",
          },
          {
            t: "Everyday Confidence",
            d: "Quiet, composed assistance built for work, school, and community.",
          },
          {
            t: "Sustainable by Design",
            d: "Circular thinking guides everything — built to be repaired and reused.",
          },
        ].map((c) => (
          <div
            key={c.t}
            className="rounded-lg border border-black/10 dark:border-white/15 p-4"
          >
            <div className="font-medium">{c.t}</div>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              {c.d}
            </p>
          </div>
        ))}
      </section>

      {/* Additional visuals */}
      <section className="mt-10 grid md:grid-cols-3 gap-4">
        {[
          { src: "/sample-3rdwheel.png", alt: "Front module — compact power" },
          {
            src: "/sample-wheelchair-attached.png",
            alt: "Attached — poised and practical",
          },
        ].map((i) => (
          <div
            key={i.src}
            className="relative rounded-lg overflow-hidden border border-black/10 dark:border-white/15 h-[22rem]"
          >
            <Image
              src={i.src}
              alt={i.alt}
              fill
              sizes="33vw"
              className="object-contain"
            />
          </div>
        ))}
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="text-xl font-medium">Built with People, for People</h2>
        <p className="text-black/80 dark:text-white/80">
          We co-create with wheelchair users and community partners, focusing on
          dignity, reliability, and affordability. The result is a product that
          feels natural — not technical.
        </p>
      </section>
    </div>
  );
}
