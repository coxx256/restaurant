export type DietaryTag = "V" | "VG" | "GF" | "DF";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  tags?: DietaryTag[];
  signature?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  shortLabel: string;
  note: string;
  description: string;
  image: string;
  imageAlt: string;
  items: MenuItem[];
};

export const dietaryKey: Record<DietaryTag, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten free",
  DF: "Dairy free",
};

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    shortLabel: "Starters",
    note: "Small plates, made for the middle of the table",
    description:
      "Bright, generous openings built around the markets of Nakasero and the shores of Lake Victoria.",
    image: "/images/skewers.jpg",
    imageAlt: "Charred beef skewers with a glossy glaze",
    items: [
      {
        name: "Lake Victoria Tilapia Ceviche",
        description:
          "Line-caught tilapia, lime, bird's eye chilli, avocado and crisp cassava.",
        price: "UGX 48,000",
        image: "/images/tilapia.jpg",
        tags: ["GF"],
        signature: true,
      },
      {
        name: "Charred Beef Skewers",
        description:
          "Grass-fed beef, groundnut satay, pickled red onion and coriander.",
        price: "UGX 52,000",
        image: "/images/skewers.jpg",
        tags: ["DF"],
      },
      {
        name: "Avocado & Mango Tartare",
        description:
          "Hass avocado, ripe mango, chilli-lime dressing and a sesame crisp.",
        price: "UGX 38,000",
        image: "/images/avocado.jpg",
        tags: ["VG", "GF", "DF"],
      },
      {
        name: "Groundnut Arancini",
        description:
          "Crisp risotto, roasted groundnut, matooke purée and herb oil.",
        price: "UGX 36,000",
        image: "/images/arancini.jpg",
        tags: ["V"],
      },
    ],
  },
  {
    id: "soups-salads",
    label: "Soups & Salads",
    shortLabel: "Soups & Salads",
    note: "From the garden, with a little smoke",
    description:
      "Our kitchen garden supplies the herbs, leaves and tomatoes; the fire does the rest.",
    image: "/images/pumpkin.jpg",
    imageAlt: "Roasted pumpkin soup with toasted seeds",
    items: [
      {
        name: "Roasted Pumpkin Velvet",
        description:
          "Kampala pumpkin, ginger, coconut cream and toasted pumpkin seeds.",
        price: "UGX 32,000",
        image: "/images/pumpkin.jpg",
        tags: ["VG", "GF", "DF"],
      },
      {
        name: "Heirloom Tomato & Burrata",
        description:
          "Garden tomatoes, creamy burrata, basil oil and aged balsamic.",
        price: "UGX 44,000",
        image: "/images/tomato.jpg",
        tags: ["V", "GF"],
      },
      {
        name: "Matooke & Coconut Soup",
        description:
          "Green matooke, coconut, lemongrass and a whisper of chilli oil.",
        price: "UGX 34,000",
        image: "/images/soup.jpg",
        tags: ["VG", "GF", "DF"],
      },
      {
        name: "Kachumbari Garden Salad",
        description:
          "Tomato, cucumber, red onion, avocado, lime and plenty of coriander.",
        price: "UGX 30,000",
        image: "/images/kachumbari.jpg",
        tags: ["VG", "GF", "DF"],
      },
    ],
  },
  {
    id: "main-courses",
    label: "Main Courses",
    shortLabel: "Mains",
    note: "Comfort, considered",
    description:
      "Familiar flavours from across East Africa, cooked slowly and finished over charcoal.",
    image: "/images/lamb.jpg",
    imageAlt: "Slow-braised lamb served with a rich sauce",
    items: [
      {
        name: "Coconut Braised Chicken",
        description:
          "Free-range chicken, coconut, ginger, garden greens and steamed rice.",
        price: "UGX 68,000",
        image: "/images/chicken.jpg",
        tags: ["GF"],
      },
      {
        name: "Wild Mushroom Risotto",
        description:
          "Arborio rice, forest mushrooms, aged parmesan and truffle oil.",
        price: "UGX 62,000",
        image: "/images/mushroom.jpg",
        tags: ["V", "GF"],
      },
      {
        name: "Luwombo Lamb Shank",
        description:
          "Slow-braised lamb, banana leaf, groundnut and steamed matooke.",
        price: "UGX 86,000",
        image: "/images/lamb.jpg",
        tags: ["GF"],
        signature: true,
      },
      {
        name: "West Nile Groundnut Stew",
        description:
          "Chicken, groundnut, tomato, leafy greens and warm millet bread.",
        price: "UGX 58,000",
        image: "/images/african-bowl.jpg",
        tags: ["GF"],
      },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    shortLabel: "Seafood",
    note: "From Lake Victoria and beyond",
    description:
      "Fish landed at dawn, cooked simply and served with the confidence of good ingredients.",
    image: "/images/scallops.jpg",
    imageAlt: "Seared scallops with a golden crust",
    items: [
      {
        name: "Grilled Lake Victoria Perch",
        description:
          "Whole grilled perch, charred lemon, herb butter and cassava chips.",
        price: "UGX 78,000",
        image: "/images/fish.jpg",
        tags: ["GF"],
        signature: true,
      },
      {
        name: "Tiger Prawn Linguine",
        description:
          "Hand-rolled linguine, tiger prawns, chilli, tomato and sweet basil.",
        price: "UGX 72,000",
        image: "/images/linguine.jpg",
        signature: true,
      },
      {
        name: "Seared Scallops",
        description:
          "Scallops, cauliflower purée, brown butter and crisp capers.",
        price: "UGX 82,000",
        image: "/images/scallops.jpg",
        tags: ["GF"],
      },
      {
        name: "Cedar-Smoked Salmon",
        description:
          "Cured salmon, dill crème fraîche, rye crisp and citrus.",
        price: "UGX 64,000",
        image: "/images/salmon.jpg",
      },
    ],
  },
  {
    id: "grilled-specialties",
    label: "Grilled Specialties",
    shortLabel: "From the Grill",
    note: "Charcoal, patience and a little theatre",
    description:
      "Our open grill is the heart of Bella Vista. Everything here meets flame before it meets your table.",
    image: "/images/ribeye.jpg",
    imageAlt: "Sliced dry-aged ribeye on a dark plate",
    items: [
      {
        name: "45-Day Dry-Aged Ribeye",
        description:
          "Charcoal-grilled ribeye, bone marrow butter and charred watercress.",
        price: "UGX 145,000",
        image: "/images/ribeye.jpg",
        tags: ["GF"],
        signature: true,
      },
      {
        name: "Wood-Fired Chicken",
        description:
          "Half free-range chicken, chilli-lime glaze and charred garden greens.",
        price: "UGX 74,000",
        image: "/images/grilled-chicken.jpg",
        tags: ["GF"],
      },
      {
        name: "Rwandan Beef Fillet",
        description:
          "Beef fillet, red wine jus, truffled mash and seasonal greens.",
        price: "UGX 118,000",
        image: "/images/fillet.jpg",
        tags: ["GF"],
      },
      {
        name: "Charred Pork Ribs",
        description:
          "Slow-smoked ribs, tamarind glaze and a bright pickled slaw.",
        price: "UGX 88,000",
        image: "/images/ribs.jpg",
        tags: ["DF"],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    shortLabel: "Desserts",
    note: "Something sweet, something grown-up",
    description:
      "Pastry chef Naome's desserts lean on Ugandan honey, coffee and fruit — never too much, always enough.",
    image: "/images/pavlova.jpg",
    imageAlt: "Passion fruit pavlova with vanilla cream",
    items: [
      {
        name: "Burnt Honey Cheesecake",
        description:
          "Ugandan honey, mascarpone, wild berries and flaked sea salt.",
        price: "UGX 38,000",
        image: "/images/cheesecake.jpg",
        tags: ["V"],
        signature: true,
      },
      {
        name: "Chocolate & Coffee Torte",
        description:
          "Single-origin Ugandan coffee, dark chocolate and crème fraîche.",
        price: "UGX 36,000",
        image: "/images/chocolate.jpg",
        tags: ["V", "GF"],
      },
      {
        name: "Passion Fruit Pavlova",
        description:
          "Crisp meringue, passion fruit curd and softly whipped vanilla cream.",
        price: "UGX 34,000",
        image: "/images/pavlova.jpg",
        tags: ["V", "GF"],
      },
      {
        name: "Vanilla Bean Ice Cream",
        description:
          "Madagascar vanilla, roasted groundnut brittle and coffee caramel.",
        price: "UGX 28,000",
        image: "/images/icecream.jpg",
        tags: ["V", "GF"],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    shortLabel: "Drinks",
    note: "Cocktails, growers' wine and very good coffee",
    description:
      "A short, considered list: low-intervention wine, Kampala-made spirits and coffee from the slopes of Mount Elgon.",
    image: "/images/cocktail.jpg",
    imageAlt: "A garnished cocktail in warm evening light",
    items: [
      {
        name: "Bella Vista Sunset",
        description:
          "Kampala gin, passion fruit, hibiscus, lime and a soft egg-white crown.",
        price: "UGX 36,000",
        image: "/images/cocktail.jpg",
      },
      {
        name: "Nile Negroni",
        description:
          "Ugandan gin, bitter orange, vermouth and smoked rosemary.",
        price: "UGX 38,000",
        image: "/images/gin.jpg",
      },
      {
        name: "Mount Elgon Coffee",
        description:
          "Single-origin arabica, brewed or espresso, served with petit fours.",
        price: "UGX 22,000",
        image: "/images/espresso.jpg",
        tags: ["VG", "GF"],
      },
      {
        name: "Lake Victoria Spritz",
        description:
          "Prosecco, grapefruit, rosemary and sparkling water over ice.",
        price: "UGX 32,000",
        image: "/images/spritz.jpg",
        tags: ["VG", "GF"],
      },
    ],
  },
];

export function getMenuCategory(id: string): MenuCategory {
  const category = menuCategories.find((item) => item.id === id);
  if (!category) throw new Error(`Unknown menu category: ${id}`);
  return category;
}

export type SignatureDish = {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  href: string;
  tags?: DietaryTag[];
};

function signature(
  categoryId: string,
  itemName: string,
): SignatureDish {
  const category = getMenuCategory(categoryId);
  const item = category.items.find((entry) => entry.name === itemName);
  if (!item) throw new Error(`Unknown signature dish: ${itemName}`);
  return {
    name: item.name,
    description: item.description,
    price: item.price,
    image: item.image,
    category: category.label,
    href: `/menu#${category.id}`,
    tags: item.tags,
  };
}

export const signatureDishes: SignatureDish[] = [
  signature("grilled-specialties", "45-Day Dry-Aged Ribeye"),
  signature("seafood", "Grilled Lake Victoria Perch"),
  signature("main-courses", "Luwombo Lamb Shank"),
  signature("seafood", "Tiger Prawn Linguine"),
  signature("desserts", "Burnt Honey Cheesecake"),
  signature("starters", "Lake Victoria Tilapia Ceviche"),
];

export const menuPreview = ["starters", "main-courses", "desserts", "drinks"].map(
  (id) => {
    const category = getMenuCategory(id);
    return {
      ...category,
      items: category.items.slice(0, 4),
    };
  },
);

export const tastingMenu = {
  price: "UGX 185,000",
  pairing: "UGX 95,000",
  description:
    "Seven courses chosen by the kitchen, shaped by the morning's market and served at a relaxed pace. Available for the whole table, Tuesday to Sunday.",
};
