import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved — Tusonge",
  description: "Volunteer and partnership opportunities to join our mission.",
};

export default function GetInvolvedPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Get Involved</h1>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-medium">Volunteer Opportunities</h2>
        <p>User testing & product development with transportation, accessibility, and compensation provided. Consent-first, dignity-centered processes.</p>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>Engineering (mechanical, electronics, software)</li>
          <li>Software (mobile app, IoT, analytics)</li>
          <li>Manufacturing (assembly, QA, supply chain)</li>
          <li>Healthcare (clinical testing, training, safety)</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-medium">Partnership Opportunities</h2>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>Manufacturing: components, fabrication, QC, logistics</li>
          <li>Technology: IoT/AI/ML, mobile, cloud, analytics</li>
          <li>Distribution: healthcare providers, NGOs, county health</li>
          <li>Financial: impact investors, grants, CSR, microfinance</li>
        </ul>
        <p className="text-sm text-black/70 dark:text-white/70">Pipeline (in development): Roam Motors, Microsoft Garage, Google Kenya, IBM, Safaricom; community partners: UDPK, NFDK, KAPD.</p>
      </section>

      <div className="mt-8 flex gap-3">
        <Link href="mailto:volunteers@tusonge.org" className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">Volunteer</Link>
        <Link href="mailto:partnerships@tusonge.org" className="inline-flex items-center rounded-md border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Partner with us</Link>
      </div>
    </div>
  );
}

