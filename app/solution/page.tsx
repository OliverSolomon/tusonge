import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Solution — Tusonge",
  description: "Three-phase innovation roadmap and sustainability approach.",
};

export default function SolutionPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Our Solution</h1>

      <section className="mt-6">
        <h2 className="text-xl font-medium">Three-Phase Development Strategy</h2>
        <p className="mt-2 text-black/80 dark:text-white/80">
          Each phase builds on the last, creating a comprehensive ecosystem of mobility solutions for different needs and environments.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h3 className="text-lg font-medium">Phase 1: Front-Attachment System (2025)</h3>
        <p>
          A powerful motorized front wheel that clamps onto most manual wheelchairs — enabling all-terrain mobility.
        </p>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>36V 350W geared brushed DC hub motor</li>
          <li>36V 12Ah LiFePO4 battery (recycled cells), 15–25km range</li>
          <li>8–12 km/h, climbs 15cm steps, compatible with ~95% frames</li>
          <li>Smart features: Bluetooth app, GPS tracking, emergency contact</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h3 className="text-lg font-medium">Phase 2: Rear-Attachment System (2026)</h3>
        <p>
          Discrete, quiet power assist designed for urban mobility and professional environments.
        </p>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>24V 250W motor, 7kg device, 12–20km range</li>
          <li>Push-assist capability and compact profile</li>
          <li>Optimized for smooth surfaces and indoor use</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h3 className="text-lg font-medium">Phase 3: AI Stairs-Climbing System (2027)</h3>
        <p>
          AI-powered system using LiDAR, stereo cameras, and reinforcement learning to safely navigate stairs.
        </p>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>Perception: LiDAR + stereo cameras; IMU and pressure sensors</li>
          <li>Adaptive control and dynamic stability for safety</li>
          <li>Modular actuation compatible with existing wheelchairs</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-medium">Sustainability Innovation</h2>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>E-waste to Energy: battery packs built from recycled cells — reducing cost by ~35%</li>
          <li>Local Manufacturing: partnerships in Nairobi Industrial Area for jobs and rapid support</li>
          <li>Modular Design: easy repair/upgrade to minimize lifetime cost and waste</li>
        </ul>
      </section>
    </div>
  );
}

