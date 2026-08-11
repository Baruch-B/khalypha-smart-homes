import Image from "next/image";
import Link from "next/link";
import ListingCard from "@/components/ListingCard";
import { business, listings } from "@/lib/data";

export default function Home() {
  const featured = listings.slice(0, 3);

  return (
    <div>
      <section className="bg-gradient-to-b from-maroon-800 to-maroon-700 text-cream">
        <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-6">
          <Image
            src="/logo.png"
            alt={`${business.name} logo`}
            width={110}
            height={110}
            className="rounded-full shadow-lg"
            priority
          />
          <h1 className="font-serif text-3xl sm:text-5xl font-bold max-w-2xl">
            {business.name}
          </h1>
          <p className="text-gold-200 text-lg">{business.tagline}</p>
          <p className="text-gold-100 max-w-xl">{business.slogan} 🤝</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              href="/listings"
              className="bg-gold-400 hover:bg-gold-500 text-maroon-900 font-semibold px-6 py-3 rounded-full transition"
            >
              View Listings
            </Link>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold-300 hover:bg-maroon-600 text-cream font-semibold px-6 py-3 rounded-full transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid sm:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "Trusted Agency",
            desc: "Registered and verified house agency serving hundreds of satisfied clients.",
          },
          {
            title: "Wide Range of Properties",
            desc: "From flats to luxury duplexes and shortlets, we have options for every budget.",
          },
          {
            title: "Responsive Support",
            desc: "Reach us directly on WhatsApp for quick answers and property tours.",
          },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-2xl bg-white shadow-sm border border-gold-100">
            <h3 className="font-serif font-bold text-maroon-800 text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl font-bold text-maroon-800">
            Featured Listings
          </h2>
          <Link href="/listings" className="text-gold-600 font-semibold text-sm hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </div>
  );
}
