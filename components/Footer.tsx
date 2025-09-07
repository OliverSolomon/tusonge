import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 dark:border-white/15 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-semibold text-lg">Tusonge</div>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">
            Empowering independence through innovative wheelchair mobility solutions.
          </p>
          <p className="mt-2 text-xs text-black/60 dark:text-white/60">Nairobi, Kenya</p>
        </div>
        <div>
          <div className="font-medium">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:underline" href="/about">About</Link></li>
            <li><Link className="hover:underline" href="/support">Support</Link></li>
            <li><Link className="hover:underline" href="/challenge">Why It Matters</Link></li>
            <li><Link className="hover:underline" href="/news">News</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:underline" href="mailto:info@tusonge.org">info@tusonge.org</a></li>
            <li><a className="hover:underline" href="mailto:partnerships@tusonge.org">partnerships@tusonge.org</a></li>
            <li><a className="hover:underline" href="mailto:volunteers@tusonge.org">volunteers@tusonge.org</a></li>
            <li><a className="hover:underline" href="mailto:media@tusonge.org">media@tusonge.org</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Legal</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:underline" href="/legal/privacy">Privacy Policy</Link></li>
            <li><Link className="hover:underline" href="/legal/terms">Terms of Use</Link></li>
            <li><Link className="hover:underline" href="/legal/accessibility">Accessibility Statement</Link></li>
            <li><Link className="hover:underline" href="/legal/transparency">Financial Transparency</Link></li>
            <li><Link className="hover:underline" href="/legal/conduct">Code of Conduct</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/15 py-4 text-center text-xs text-black/60 dark:text-white/60">
        © {new Date().getFullYear()} Tusonge. All rights reserved.
      </div>
    </footer>
  );
}

