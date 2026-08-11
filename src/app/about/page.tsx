import Image from "next/image";
import { business } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <Image
          src="/logo.png"
          alt={`${business.name} logo`}
          width={90}
          height={90}
          className="rounded-full"
        />
        <h1 className="font-serif text-3xl font-bold text-maroon-800">
          About {business.name}
        </h1>
        <p className="text-gold-600 font-medium">{business.tagline}</p>
      </div>

      <div className="prose max-w-none text-gray-700 space-y-4">
        <p>
          {business.name} is a registered house agency ({business.rcNumber})
          dedicated to helping individuals and families find homes they can
          truly be comfortable in. Whether you are looking to buy, rent, or
          book a shortlet apartment, our team works hands-on to match you
          with the right property.
        </p>
        <p>
          Our motto, &ldquo;{business.slogan},&rdquo; guides everything we do —
          from the first inquiry to handing over the keys. We pride ourselves
          on transparency, responsiveness, and a genuine commitment to our
          clients&apos; satisfaction.
        </p>
        <p>
          Beyond individual property deals, we run an active community of
          clients and partners who stay updated on new listings and market
          opportunities.
        </p>
      </div>
    </div>
  );
}
