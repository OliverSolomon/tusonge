import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Tusonge",
  description: "How to reach Tusonge: email, locations, and social channels.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <section className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-medium">Contact Information</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:underline" href="mailto:info@tusonge.org">info@tusonge.org</a> — General inquiries</li>
            <li><a className="hover:underline" href="mailto:partnerships@tusonge.org">partnerships@tusonge.org</a> — Partnerships</li>
            <li><a className="hover:underline" href="mailto:volunteers@tusonge.org">volunteers@tusonge.org</a> — Volunteering</li>
            <li><a className="hover:underline" href="mailto:media@tusonge.org">media@tusonge.org</a> — Media</li>
            <li><a className="hover:underline" href="mailto:tech@tusonge.org">tech@tusonge.org</a> — Technical</li>
            <li><a className="hover:underline" href="mailto:donations@tusonge.org">donations@tusonge.org</a> — Donations</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-medium">Locations</h2>
          <ul className="mt-3 space-y-2 text-sm text-black/80 dark:text-white/80">
            <li>Headquarters: Nairobi, Kenya (TBC)</li>
            <li>Manufacturing Hub: Nairobi Industrial Area (Partnership-dependent)</li>
            <li>Community Centers: To be established across counties</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-medium">Follow Our Journey</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>Twitter: <Link className="hover:underline" href="https://twitter.com/TusongeKenya">@TusongeKenya</Link></li>
          <li>LinkedIn: <Link className="hover:underline" href="#">Tusonge Organization</Link></li>
          <li>Facebook: <Link className="hover:underline" href="#">Tusonge Kenya</Link></li>
          <li>Instagram: <Link className="hover:underline" href="#">@tusonge_kenya</Link></li>
        </ul>
      </section>
    </div>
  );
}

