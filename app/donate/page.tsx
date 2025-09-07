import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate & Support — Tusonge",
  description: "Equipment, financial, and sponsorship support opportunities.",
};

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Donate & Support</h1>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-medium">Critical Equipment Needs</h2>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>Electric drivetrains: motors, controllers, BMS, testing equipment</li>
          <li>Standard wheelchairs: various frames, sizes, pediatric included</li>
          <li>Battery components: recycled Li-ion, LiFePO4 cells, assembly equipment</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-medium">Support Categories</h2>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>Equipment donations (tax-deductible)</li>
          <li>Financial contributions (fully tax-deductible)</li>
          <li>Corporate sponsorship and skills-based volunteering</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-medium">Transparency Commitment</h2>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>Impact tracking for devices produced and outcomes achieved</li>
          <li>User stories (with consent), quarterly financial statements</li>
          <li>Open development: specs, testing, and design iterations</li>
        </ul>
      </section>

      <div className="mt-8 flex gap-3">
        <Link href="mailto:donations@tusonge.org" className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">Donate</Link>
        <Link href="mailto:partnerships@tusonge.org" className="inline-flex items-center rounded-md border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Sponsor</Link>
      </div>
    </div>
  );
}

