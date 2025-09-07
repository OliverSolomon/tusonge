import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates — Tusonge",
  description: "Milestones, stories, and technical updates.",
};

import { redirect } from "next/navigation";

export default function NewsRedirect() {
  redirect("/");
}

