"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/challenge", label: "The Challenge" },
    { href: "/solution", label: "Our Solution" },
    { href: "/impact", label: "Impact" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/donate", label: "Donate" },
    { href: "/news", label: "News" },
    { href: "/technical-specs", label: "Technical" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/10 dark:border-white/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/favicon.ico" alt="Tusonge logo" width={28} height={28} className="rounded" />
          <div className="leading-tight">
            <span className="font-semibold tracking-tight text-lg">Tusonge</span>
            <div className="text-xs text-black/60 dark:text-white/60">Let's Move Forward</div>
          </div>
        </Link>
        <nav aria-label="Main" className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm hover:underline underline-offset-4">
              {n.label}
            </Link>
          ))}
          <Link href="/get-involved" className="inline-flex items-center rounded-md bg-foreground text-background px-3 py-1.5 text-sm font-medium hover:opacity-90">
            Join Our Mission
          </Link>
        </nav>
        <button aria-label="Open menu" className="md:hidden rounded p-2 border border-black/10 dark:border-white/15" onClick={() => setOpen((v) => !v)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.5 12a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13Zm0-4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13Zm0-4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13Z"/>
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/15">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-3 grid grid-cols-2 gap-3" aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm hover:underline underline-offset-4 py-1">
                {n.label}
              </Link>
            ))}
            <Link href="/get-involved" className="col-span-2 inline-flex items-center justify-center rounded-md bg-foreground text-background px-3 py-2 text-sm font-medium hover:opacity-90">
              Join Our Mission
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

