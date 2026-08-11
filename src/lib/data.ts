export const business = {
  name: "Khalypha Smart Homes Limited",
  tagline: "Your Trusted House Agent",
  slogan: "Your Comfort Is Our Priority",
  rcNumber: "RC: 9247475",
  phone: "+234 812 270 7344",
  whatsapp: "2348122707344",
  email: "info@khalyphasmarthomes.com", // TODO: replace with real email
  address: "Abuja, Nigeria", // TODO: replace with real address
  whatsappGroupLink: "", // TODO: paste your WhatsApp group invite link here
};

export type Listing = {
  id: string;
  images: string[];
};

export const listings: Listing[] = [
  {
    id: "1",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "2",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "3",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "4",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    ],
  },
];
