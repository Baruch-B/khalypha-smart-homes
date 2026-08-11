"use client";
import Image from "next/image";
import { useState } from "react";
import { Listing } from "@/lib/data";

export default function ListingCard({ listing }: { listing: Listing }) {
  const [index, setIndex] = useState(0);
  const total = listing.images.length;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-gold-100">
      <div className="relative h-64 w-full">
        <Image
          src={listing.images[index]}
          alt="Property photo"
          fill
          className="object-cover"
        />
        {total > 1 && (
          <>
            <button
              onClick={() => setIndex((index - 1 + total) % total)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              onClick={() => setIndex((index + 1) % total)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center"
              aria-label="Next photo"
            >
              ›
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {listing.images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
