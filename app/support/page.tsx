import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Support — Tusonge",
  description: "Join our mission: donate, sponsor components, or partner to expand mobility in Kenya.",
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Support Tusonge</h1>

      <section className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden border border-black/10 dark:border-white/15 min-h-[34rem]">
            <Image
              src="/sample-wheelchair-attached.png"
              alt="Manual wheelchair with Tusonge attachment"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: "/sample-3rdwheel.png", alt: "Front module detail" },
              { src: "/Sample-why-side-view-dreamy-man-wheelchair-african-american-man-casual-clothes-embankment-looking-water-city-background-portrait-beauty-happiness-concept.jpg", alt: "Young woman in wheelchair by the water" },
            ].map((i) => (
              <div key={i.src} className="relative rounded-lg overflow-hidden border border-black/10 dark:border-white/15 h-56">
                <Image src={i.src} alt={i.alt} fill sizes="50vw" className="object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-xl font-medium">Back bold ideas that move people</h2>
          <p className="text-black/75 dark:text-white/75">
            Your contribution accelerates independence — from recycled battery packs to local manufacturing and user-centered testing.
          </p>
          <div className="grid gap-3">
            <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
              <div className="font-medium">Donate</div>
              <div className="text-sm text-black/70 dark:text-white/70">Make a tax-deductible contribution to power the next production run.</div>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
              <div className="font-medium">Sponsor Components</div>
              <div className="text-sm text-black/70 dark:text-white/70">Fund key parts — batteries, controllers, clamps — and help scale responsibly.</div>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
              <div className="font-medium">Partner</div>
              <div className="text-sm text-black/70 dark:text-white/70">Manufacturers, distributors, and community orgs: let’s build mobility access together.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="mailto:donations@tusonge.org" className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">Donate</Link>
            <Link href="mailto:partnerships@tusonge.org" className="inline-flex items-center rounded-md border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Partner with us</Link>
            <Link href="mailto:volunteers@tusonge.org" className="inline-flex items-center rounded-md border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Volunteer</Link>
          </div>
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-4">
        <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          <div className="text-2xl font-semibold">6,000</div>
          <div className="text-sm text-black/70 dark:text-white/70">Users empowered (target)</div>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          <div className="text-2xl font-semibold">40%</div>
          <div className="text-sm text-black/70 dark:text-white/70">Employment increase (target)</div>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          <div className="text-2xl font-semibold">1,000+ t</div>
          <div className="text-sm text-black/70 dark:text-white/70">E-waste recycled (planned)</div>
        </div>
      </section>
    </div>
  );
}

