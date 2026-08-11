import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-gold-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${business.name} logo`}
            width={52}
            height={52}
            className="rounded-full"
            priority
          />
          <div className="leading-tight">
            <p className="font-serif font-bold text-maroon-700 text-sm sm:text-base">
              {business.name}
            </p>
            <p className="text-[11px] sm:text-xs text-gold-600 tracking-wide">
              {business.tagline}
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-maroon-800">
          <Link href="/" className="hover:text-gold-600 transition">
            Home
          </Link>
          <Link href="/listings" className="hover:text-gold-600 transition">
            Listings
          </Link>
          <Link href="/about" className="hover:text-gold-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-gold-600 transition">
            Contact
          </Link>
        </div>

        <a
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-maroon-600 hover:bg-maroon-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
        >
          WhatsApp Us
        </a>
      </nav>

      <div className="md:hidden flex justify-center gap-6 pb-3 text-sm font-medium text-maroon-800">
        <Link href="/">Home</Link>
        <Link href="/listings">Listings</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  );
}
