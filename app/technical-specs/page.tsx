import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Specifications — Tusonge",
  description: "Detailed specs for front-attachment system and performance metrics.",
};

export default function TechnicalSpecsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Technical Specifications</h1>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-medium">Front-Attachment System</h2>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>Motor: 36V 350W geared brushed DC hub, &gt;85% efficiency</li>
          <li>Battery: LiFePO4 36V 12Ah (12S), 2000+ cycles, BMS safety</li>
          <li>Range: 15–25km; Speed: 8–12 km/h; Load: up to 120kg</li>
          <li>Wheel: 18" diameter; Materials: Aluminum/steel; IP65</li>
          <li>Control: ESP32, Bluetooth app, GPS, emergency stop</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-medium">Performance</h2>
        <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>Max slope: 15°; Step climbing: 15cm</li>
          <li>Range testing: 25km smooth, 15km rough terrain</li>
          <li>Safety certifications: in development</li>
          <li>Compatibility: fits ~95% wheelchair frames</li>
        </ul>
      </section>
    </div>
  );
}

