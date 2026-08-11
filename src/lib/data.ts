export const business = {
  name: "Khalypha Smart Homes Limited",
  tagline: "Your Trusted House Agent",
  slogan: "Your Comfort Is Our Priority",
  rcNumber: "RC: 9247475",
  phone: "+234 800 000 0000", // TODO: replace with real number
  whatsapp: "2348000000000", // TODO: replace with real number, digits only
  email: "info@khalyphasmarthomes.com", // TODO: replace with real email
  address: "Abuja, Nigeria", // TODO: replace with real address
  whatsappGroupLink: "", // TODO: paste your WhatsApp group invite link here
};

export type Listing = {
  id: string;
  title: string;
  type: "For Sale" | "For Rent" | "Shortlet";
  price: string;
  location: string;
  beds: number;
  baths: number;
  description: string;
  image: string;
};

export const listings: Listing[] = [
  {
    id: "1",
    title: "3 Bedroom Terrace Duplex",
    type: "For Sale",
    price: "₦85,000,000",
    location: "Guzape, Abuja",
    beds: 3,
    baths: 4,
    description:
      "Modern terrace duplex in a serene, gated estate with 24/7 security, ample parking, and a fitted kitchen.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "2 Bedroom Flat",
    type: "For Rent",
    price: "₦2,500,000 / year",
    location: "Lokogoma, Abuja",
    beds: 2,
    baths: 2,
    description:
      "Newly built flat with constant water supply, tiled floors, and proximity to major roads and markets.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "5 Bedroom Fully Detached Duplex",
    type: "For Sale",
    price: "₦150,000,000",
    location: "Maitama, Abuja",
    beds: 5,
    baths: 6,
    description:
      "Luxury duplex with a boys' quarter, swimming pool, and elegant finishing throughout — ideal for a family home.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Self-Contained Studio Apartment",
    type: "Shortlet",
    price: "₦25,000 / night",
    location: "Jabi, Abuja",
    beds: 1,
    baths: 1,
    description:
      "Cozy, fully furnished shortlet apartment perfect for business travelers, with Wi-Fi and 24-hour power.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
];
