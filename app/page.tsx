import Link from "next/link";
import Image from "next/image";
import ScrollVideo from "../components/ScrollVideo";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center pt-14 pb-16 relative z-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Breaking Barriers, Building Independence
            </h1>
            <p className="mt-4 text-lg text-black/75 dark:text-white/75">
              Transforming manual wheelchairs into powered mobility solutions for Kenya's 1.16 million citizens with mobility disabilities.
            </p>
            <p className="mt-4 text-base text-black/70 dark:text-white/70">
              Through innovative engineering and sustainable design, Tusonge develops affordable wheelchair attachments that restore independence, create economic opportunities, and build safer communities across East Africa.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/get-involved" className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
                Join Our Mission
              </Link>
              <Link href="#impact" className="inline-flex items-center rounded-md border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
                See Our Impact
              </Link>
            </div>
          </div>
          <div className="relative h-80 sm:h-[30rem] rounded-lg overflow-hidden border border-black/10 dark:border-white/15">
            {/* Background blur for premium look */}
            <Image
              src="/sample-hero-oliver-tusonge.png"
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="object-cover blur-xl scale-110 opacity-50"
              priority
            />
            {/* Foreground image contained so full subject is visible */}
            <Image
              src="/sample-hero-oliver-tusonge.png"
              alt="Tusonge hero — wheelchair on Kenyan terrain"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background/60" />
      </section>

      {/* Problem Statement */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 border-t border-black/10 dark:border-white/15">
        <h2 className="text-2xl font-semibold">The Mobility Crisis in Kenya</h2>
        <p className="mt-3 text-black/75 dark:text-white/75">
          In Kenya, mobility shouldn't determine destiny. Yet for 1.16 million citizens with mobility disabilities, physical barriers become life-limiting obstacles to education, employment, and safety.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: "1.16 million", v: "Kenyans face daily mobility barriers" },
            { k: "66%", v: "live in rural areas with inadequate infrastructure" },
            { k: "10.45%", v: "PWD unemployment vs 5.2% national average" },
            { k: "83%", v: "lifetime sexual abuse risk for women with disabilities" },
          ].map((m) => (
            <div key={m.k} className="rounded-lg border border-black/10 dark:border-white/15 p-4">
              <div className="text-2xl font-semibold">{m.k}</div>
              <div className="text-sm text-black/70 dark:text-white/70">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Assembly experience (compact, premium) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 border-t border-black/10 dark:border-white/15">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-2xl font-semibold">Engineered to connect in seconds</h2>
            <ul className="list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Align the front module with the wheelchair frame</li>
              <li>Secure the universal clamps for a stable lock</li>
              <li>Engage power — roll forward with confidence</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <div className="max-w-sm ml-auto">
              <ScrollVideo src="/sample-attachmentStyle.mp4" poster="/sample-3rdwheel.png" autoplay playbackRate={0.6} loop />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 border-t border-black/10 dark:border-white/15">
        <h2 className="text-2xl font-semibold">Three Innovations, One Mission</h2>
        <p className="mt-3 text-black/75 dark:text-white/75">
          Tusonge develops three wheelchair attachments that transform standard manual wheelchairs into powered mobility solutions, designed for Kenya's terrain and social context.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            {
              t: "Phase 1: Front-Attachment (2025)",
              d: "All-terrain powered front wheel; 15–25km range; climbs 15cm steps; recycled battery power.",
            },
            {
              t: "Phase 2: Rear-Attachment (2026)",
              d: "Discrete urban power assist; 20km range; lightweight 7kg; silent operation.",
            },
            {
              t: "Phase 3: AI Stairs-Climbing (2027)",
              d: "AI-powered perception and control for safe, autonomous stair navigation.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-lg border border-black/10 dark:border-white/15 p-4">
              <div className="font-medium">{c.t}</div>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{c.d}</p>
              <Link href="/solution" className="mt-3 inline-block text-sm underline underline-offset-4 hover:opacity-80">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Impact metrics */}
      <section id="impact" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 border-t border-black/10 dark:border-white/15">
        <h2 className="text-2xl font-semibold">Building Measurable Change</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: "6,000", v: "users empowered (target)" },
            { k: "40%", v: "employment increase (target)" },
            { k: "25%", v: "reduction in GBV incidents (target)" },
            { k: "1,000+ t", v: "e-waste recycled (planned)" },
          ].map((m) => (
            <div key={m.k} className="rounded-lg border border-black/10 dark:border-white/15 p-4">
              <div className="text-3xl font-semibold">{m.k}</div>
              <div className="text-sm text-black/70 dark:text-white/70">{m.v}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
