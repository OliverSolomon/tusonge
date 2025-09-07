import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact & Theory of Change — Tusonge",
  description: "Environmental, economic, gender, and household resilience outcomes.",
};

export default function ImpactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Impact & Theory of Change</h1>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-medium">Core Belief</h2>
        <p>Mobility is fundamental to dignity and social participation. Removing physical barriers unlocks human potential across life dimensions.</p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-medium">Four Interconnected Nexuses</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Nexus 1: Environmental Conservation</h3>
            <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>500–1,000 tonnes e-waste recycled</li>
              <li>0.5–1 ton CO2 saved per wheelchair retained</li>
              <li>Green jobs in recycling and assembly</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Nexus 2: Economic Empowerment</h3>
            <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Target 40% employment increase among users</li>
              <li>Access to training and entrepreneurship opportunities</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Nexus 3: Gender Equality & GBV Prevention</h3>
            <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Independent mobility as protection</li>
              <li>Reduced dependency via economic independence</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Nexus 4: Household Resilience</h3>
            <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Multipurpose batteries for home energy</li>
              <li>KES 5,000–10,000 annual savings per household</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-medium">Measurable Outcomes (3-Year Targets)</h2>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>6,000 users with enhanced mobility; 60% reporting increased independence</li>
          <li>25% reduction in mobility-related safety incidents</li>
          <li>1,000+ tonnes e-waste recycled</li>
          <li>Policy and accessibility improvements across sectors</li>
        </ul>
      </section>
    </div>
  );
}

