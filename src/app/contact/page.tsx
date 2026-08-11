import { business } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="font-serif text-3xl font-bold text-maroon-800 mb-3">
        Contact Us
      </h1>
      <p className="text-gray-600 mb-10">
        Reach out to {business.name} — we&apos;re happy to help you find your
        next home.
      </p>

      <div className="grid gap-4 text-left bg-white border border-gold-100 rounded-2xl p-6 shadow-sm">
        <div>
          <p className="text-xs uppercase tracking-wide text-gold-600 font-semibold">
            Phone
          </p>
          <p className="text-maroon-800 font-medium">{business.phone}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gold-600 font-semibold">
            Email
          </p>
          <p className="text-maroon-800 font-medium">{business.email}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gold-600 font-semibold">
            Address
          </p>
          <p className="text-maroon-800 font-medium">{business.address}</p>
        </div>
      </div>

      <a
        href={`https://wa.me/${business.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-maroon-600 hover:bg-maroon-700 text-white font-semibold px-8 py-3 rounded-full transition"
      >
        Chat With Us on WhatsApp
      </a>

      {business.whatsappGroupLink && (
        <p className="mt-6 text-sm text-gray-600">
          Or{" "}
          <a
            href={business.whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-600 font-semibold hover:underline"
          >
            join our WhatsApp community
          </a>{" "}
          for the latest listings.
        </p>
      )}
    </div>
  );
}
