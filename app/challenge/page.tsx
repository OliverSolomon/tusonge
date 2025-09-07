import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Challenge — Tusonge",
  description: "Kenya's mobility crisis, infrastructure barriers, and intersectional vulnerabilities.",
};

export default function ChallengePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">The Challenge</h1>

      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-medium">Kenya's Mobility Crisis</h2>
        <p>
          4.44 million Kenyans live with disabilities (10% of the population). 1.16 million face mobility challenges that limit access to education, employment, healthcare, and social participation.
        </p>
        <p>
          66% of disabled people live in rural areas where infrastructure barriers are most severe: unpaved roads, absent ramps, inaccessible buildings.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-medium">Infrastructure Barriers</h2>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>Public buildings lack accessible entrances and facilities</li>
          <li>Public transport and stations remain largely inaccessible</li>
          <li>Rough roads and absent sidewalks make manual navigation exhausting</li>
          <li>Schools and workplaces lack basic accessibility modifications</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-medium">Intersectional Vulnerabilities</h2>
        <p>
          Women with disabilities face compounded risks: 83% lifetime sexual abuse risk, 40–68% of girls face abuse before 18, and 59% of incidents go unreported due to access barriers.
        </p>
        <p>
          Economic dependency, limited mobility, and inaccessible services increase vulnerability and reduce reporting.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-medium">Environmental Challenge</h2>
        <p>
          Kenya generated 53,559 tonnes of e-waste in 2024; only 5–15% is formally recycled. Valuable lithium, cobalt, and rare earths end up in landfills, contaminating soil and water.
        </p>
        <p>
          This is also an opportunity: recycled components can power affordable, sustainable mobility.
        </p>
      </section>
    </div>
  );
}

