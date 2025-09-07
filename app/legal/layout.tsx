import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal — Tusonge",
  description: "Legal and policy documents for Tusonge.",
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Legal</h1>
      <div className="mt-6 space-y-8">{children}</div>
    </div>
  );
}

