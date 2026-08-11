import Image from "next/image";
import { Listing, business } from "@/lib/data";

export default function ListingCard({ listing }: { listing: Listing }) {
  const message = encodeURIComponent(
    `Hello, I'm interested in "${listing.title}" (${listing.location}) listed on your website.`
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-gold-100">
      <div className="relative h-52 w-full">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-maroon-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {listing.type}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif font-bold text-lg text-maroon-800">
          {listing.title}
        </h3>
        
      
        <div className="flex gap-4 text-sm text-gray-600 mb-3">
          <span>{listing.beds} Beds</span>
          <span>{listing.baths} Baths</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{listing.description}</p>
        <a
          href={`https://wa.me/${business.whatsapp}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-maroon-600 hover:bg-maroon-700 text-white text-sm font-semibold py-2 rounded-full transition"
        >
          Inquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
