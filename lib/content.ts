export type GalleryCategory =
  | "Food"
  | "The Room"
  | "The Team"
  | "Evenings"
  | "Drinks";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  ratio: "portrait" | "square" | "landscape";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/dining-room.jpg",
    alt: "The warm, softly lit Bella Vista dining room",
    caption: "The dining room, before service",
    category: "The Room",
    ratio: "landscape",
  },
  {
    src: "/images/ribeye.jpg",
    alt: "Sliced charcoal-grilled ribeye with a dark glaze",
    caption: "45-day dry-aged ribeye",
    category: "Food",
    ratio: "portrait",
  },
  {
    src: "/images/chef.jpg",
    alt: "A chef finishing a plate at the pass",
    caption: "Chef Daniel at the pass",
    category: "The Team",
    ratio: "portrait",
  },
  {
    src: "/images/guests.jpg",
    alt: "Guests sharing a long dinner around a candlelit table",
    caption: "Friday, 8.42pm",
    category: "Evenings",
    ratio: "landscape",
  },
  {
    src: "/images/terrace.jpg",
    alt: "The Bella Vista terrace surrounded by greenery",
    caption: "The terrace at golden hour",
    category: "The Room",
    ratio: "portrait",
  },
  {
    src: "/images/cheesecake.jpg",
    alt: "Burnt honey cheesecake with berries",
    caption: "Burnt honey cheesecake",
    category: "Food",
    ratio: "square",
  },
  {
    src: "/images/bar.jpg",
    alt: "The backlit bar with bottles and warm amber light",
    caption: "A seat at the bar",
    category: "Drinks",
    ratio: "portrait",
  },
  {
    src: "/images/kitchen.jpg",
    alt: "The kitchen team at work during service",
    caption: "Seven o'clock, all hands",
    category: "The Team",
    ratio: "landscape",
  },
  {
    src: "/images/salmon.jpg",
    alt: "Cedar-smoked salmon with delicate garnishes",
    caption: "Cedar-smoked salmon",
    category: "Food",
    ratio: "square",
  },
  {
    src: "/images/private-dining.jpg",
    alt: "An intimate private dining room set for dinner",
    caption: "The Acacia room",
    category: "Evenings",
    ratio: "portrait",
  },
  {
    src: "/images/bread.jpg",
    alt: "Freshly baked bread cooling on a wooden board",
    caption: "Baked at four, every afternoon",
    category: "Food",
    ratio: "square",
  },
  {
    src: "/images/garden.jpg",
    alt: "A leafy garden dining setting at Bella Vista",
    caption: "Dinner among the frangipani",
    category: "The Room",
    ratio: "landscape",
  },
  {
    src: "/images/pasta.jpg",
    alt: "Fresh hand-rolled pasta with a rich sauce",
    caption: "Pasta, rolled by hand",
    category: "Food",
    ratio: "portrait",
  },
  {
    src: "/images/wine.jpg",
    alt: "Two glasses of red wine on a linen tablecloth",
    caption: "Something from the cellar",
    category: "Drinks",
    ratio: "square",
  },
  {
    src: "/images/chef-portrait.jpg",
    alt: "Portrait of chef Daniel Ssemakula in the kitchen",
    caption: "Daniel Ssemakula, co-founder",
    category: "The Team",
    ratio: "portrait",
  },
  {
    src: "/images/cocktail.jpg",
    alt: "A citrus cocktail garnished with herbs",
    caption: "The Bella Vista Sunset",
    category: "Drinks",
    ratio: "square",
  },
  {
    src: "/images/room-evening.jpg",
    alt: "The dining room glowing with candlelight in the evening",
    caption: "The last table, 10.15pm",
    category: "Evenings",
    ratio: "landscape",
  },
  {
    src: "/images/dining-detail.jpg",
    alt: "A quiet corner table for two at Bella Vista",
    caption: "Table for two",
    category: "The Room",
    ratio: "portrait",
  },
];

export const homeGallery = [
  galleryImages[0],
  galleryImages[1],
  galleryImages[3],
  galleryImages[4],
  galleryImages[2],
  galleryImages[7],
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dinner at Bella Vista is the closest Kampala gets to a long Italian evening. The perch was flawless, the room was full of laughter, and nobody wanted to leave.",
    name: "Aisha Namuli",
    role: "Google review · July 2026",
    location: "Nakasero, Kampala",
    rating: 5,
    initials: "AN",
  },
  {
    quote:
      "We booked the terrace for our tenth anniversary. The team remembered our names, lit the candles at exactly the right moment, and sent us home with the recipe for that cheesecake.",
    name: "Brian & Sarah Ssekandi",
    role: "Anniversary dinner",
    location: "Muyenga, Kampala",
    rating: 5,
    initials: "BS",
  },
  {
    quote:
      "We hosted eighteen guests in the private room. Every course arrived together, every dietary note was handled quietly, and the service never once felt formal for the sake of it.",
    name: "Charlotte Mwesigwa",
    role: "Private celebration · May 2026",
    location: "Kololo, Kampala",
    rating: 5,
    initials: "CM",
  },
  {
    quote:
      "The tasting menu reads like a love letter to Uganda — matooke, Lake Victoria perch, Mount Elgon coffee — but it never feels like a history lesson. It just feels delicious.",
    name: "Rahul Patel",
    role: "The Kampala Table",
    location: "Naguru, Kampala",
    rating: 5,
    initials: "RP",
  },
];

export const features = [
  {
    icon: "leaf" as const,
    title: "Fresh Ingredients",
    description:
      "Produce arrives from smallholders in Wakiso, Mbale and the Lake Victoria shore. The menu follows the market, not the other way around.",
    number: "01",
  },
  {
    icon: "chef" as const,
    title: "Expert Chefs",
    description:
      "A kitchen led by Daniel Ssemakula, where East African tradition meets precise, modern technique — and a healthy respect for fire.",
    number: "02",
  },
  {
    icon: "sparkles" as const,
    title: "Premium Dining",
    description:
      "Low light, linen, a considered wine list and a view across the green hills of Kololo. Dinner should feel like an occasion.",
    number: "03",
  },
  {
    icon: "heart" as const,
    title: "Exceptional Service",
    description:
      "Warm, unhurried and quietly attentive. We want you to settle in, ask questions, and stay for one more glass.",
    number: "04",
  },
];

export const values = [
  {
    icon: "leaf" as const,
    title: "Rooted locally",
    description:
      "We buy from farmers we know by name, cook with the seasons, and let Ugandan ingredients lead the conversation.",
  },
  {
    icon: "flame" as const,
    title: "Cooked with fire",
    description:
      "Charcoal, banana leaf and a little patience. Our grill is where flavour is built — never rushed, never hidden.",
  },
  {
    icon: "heart" as const,
    title: "Served with care",
    description:
      "Hospitality is a craft. We remember birthdays, notice the small things, and make room for the evening to unfold.",
  },
];

export const timeline = [
  {
    year: "2016",
    title: "A terrace with a view",
    description:
      "Amara Nakato and Daniel Ssemakula open a 32-seat restaurant on Acacia Avenue, with a charcoal grill in the garden and a view across Kololo.",
  },
  {
    year: "2018",
    title: "The garden kitchen",
    description:
      "The kitchen garden takes shape. Herbs, tomatoes and chillies begin arriving from the same plot that supplies the dining room today.",
  },
  {
    year: "2020",
    title: "A table for the city",
    description:
      "Through a difficult year, the team cooks for frontline workers and keeps the terrace open for small, careful gatherings.",
  },
  {
    year: "2022",
    title: "The cellar opens",
    description:
      "A dedicated wine room and a seven-course tasting menu give the kitchen a new stage — and guest chefs a reason to visit Kampala.",
  },
  {
    year: "2024",
    title: "A seat at the table",
    description:
      "Bella Vista is named Best Fine Dining at Kampala Restaurant Week, and the private Acacia room opens for celebrations.",
  },
  {
    year: "2026",
    title: "Ten years, same view",
    description:
      "A thoughtful renovation adds a garden lounge and a larger pastry kitchen. The hills, the fire and the welcome remain exactly as they were.",
  },
];

export const press = [
  "Condé Nast Traveller",
  "The EastAfrican",
  "Forbes Africa",
  "Kampala Restaurant Week",
  "Monocle",
];

export const faqs = [
  {
    question: "What should we wear?",
    answer:
      "Smart casual is perfect. There is no formal dress code, but most guests enjoy dressing for the occasion — especially on the terrace after sunset.",
  },
  {
    question: "Can you cater for dietary requirements?",
    answer:
      "Yes. Vegetarian, vegan and gluten-free options are marked on the menu, and the kitchen can adapt most dishes. Please tell us about allergies when you book, at least 24 hours ahead.",
  },
  {
    question: "Are children welcome?",
    answer:
      "Children are welcome at lunch and for early dinner service. We offer smaller portions of several dishes and can warm milk for the table.",
  },
  {
    question: "Is there parking?",
    answer:
      "Yes. Secure, complimentary parking is available on site, with attendants on duty throughout service. We are also a short ride from the Acacia Avenue taxi stage.",
  },
  {
    question: "Can we book the restaurant privately?",
    answer:
      "The Acacia room seats up to 22 guests for a private lunch or dinner, and the garden terrace can be reserved for larger celebrations. Call our reservations team on +256 414 501 260.",
  },
];

export const privateDining = {
  title: "The Acacia room",
  description:
    "An intimate private room for up to 22 guests, with its own terrace, dedicated service and a menu designed around your occasion.",
  image: "/images/private-dining.jpg",
  imageAlt: "A candlelit private dining room at Bella Vista",
};
