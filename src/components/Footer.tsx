import Image from "next/image";
import { business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-maroon-800 text-cream mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/logo.png"
              alt={`${business.name} logo`}
              width={44}
              height={44}
              className="rounded-full"
            />
            <p className="font-serif font-bold">{business.name}</p>
          </div>
          <p className="text-sm text-gold-200">{business.slogan}</p>
          <p className="text-xs text-gold-300 mt-2">{business.rcNumber}</p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-gold-200">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/listings" className="hover:text-gold-300">
                Listings
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gold-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gold-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3 text-gold-200">Get in Touch</p>
          <ul className="space-y-2 text-sm">
            <li>{business.phone}</li>
            <li>{business.email}</li>
            <li>{business.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-maroon-700 text-center text-xs text-gold-300 py-4">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
