import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Tusonge",
  description: "Our mission, values, and leadership — why Tusonge matters.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">About Tusonge</h1>
      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-medium">Our Mission</h2>
        <p>
          Vision: A Kenya where mobility barriers don't limit human potential.
        </p>
        <p>
          Mission: We develop affordable, sustainable wheelchair mobility solutions through innovative engineering, community partnership, and environmental responsibility.
        </p>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>Innovation: Engineering solutions that didn't exist before</li>
          <li>Dignity: Respecting the autonomy and expertise of disabled communities</li>
          <li>Sustainability: Building circular economy solutions from e-waste</li>
          <li>Community: Co-creating with users, not for them</li>
          <li>Accessibility: Making independence affordable and available</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-medium">Why Tusonge Matters</h2>
        <p>
          Current wheelchair attachments cost $6,626-$7,000 — inaccessible to most Kenyans and not designed for our terrain.
          We manufacture locally, use recycled materials, and price for accessibility. Our $250–$400 target makes independence achievable.
        </p>
        <p>
          Beyond mobility, we address gender-based violence prevention, economic empowerment, environmental sustainability, and household energy access.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-medium">Leadership</h2>
        <p>
          Oliver Wainaina, Founder & CEO — Engineering background with a proven track record in social innovation (creator of Sauti Salama).
          Combines technical expertise with deep understanding of systemic barriers facing vulnerable communities.
        </p>
        <p className="text-sm text-black/70 dark:text-white/70">Advisory structure (in development): Disability rights advocates, technical experts, healthcare professionals, business/finance, and legal/regulatory experts.</p>
      </section>
    </div>
  );
}

