import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Donate & Support — Tusonge",
  description: "Equipment, financial, and sponsorship support opportunities.",
};

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Donate & Support</h1>

      <section className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        <div className="relative rounded-lg overflow-hidden border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 aspect-[4/3]">
          <Image
            src="/sample-wheelchair-attached.png"
            alt="Manual wheelchair with Tusonge attachment"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
            priority={false}
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-xl font-medium">Back bold ideas that move people</h2>
          <p className="text-black/75 dark:text-white/75">
            Your support powers recycled battery packs, local manufacturing, and user testing — accelerating independence for wheelchair users across Kenya.
          </p>
          <div className="grid gap-3">
            <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
              <div className="font-medium">Battery & Electronics</div>
              <div className="text-sm text-black/70 dark:text-white/70">Recycled Li-ion/LiFePO4 cells, BMS, charging, controllers</div>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
              <div className="font-medium">Mechanical & Fabrication</div>
              <div className="text-sm text-black/70 dark:text-white/70">Clamp systems, frames, motor assemblies, quality testing</div>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
              <div className="font-medium">User Testing & Training</div>
              <div className="text-sm text-black/70 dark:text-white/70">Transportation, accessibility accommodations, instructor time</div>
            </div>
          </div>
          <div className="flex gap-3 pt-1">
            <Link href="mailto:donations@tusonge.org" className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">Donate</Link>
            <Link href="mailto:partnerships@tusonge.org" className="inline-flex items-center rounded-md border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Sponsor components</Link>
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

