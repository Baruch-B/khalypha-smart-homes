import ListingCard from "@/components/ListingCard";
import { listings } from "@/lib/data";

export default function ListingsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-3xl font-bold text-maroon-800 mb-2">
          Our Listings
        </h1>
        <p className="text-gray-600">
          Browse available properties for sale, rent, and shortlet.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
