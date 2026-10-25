export const site = {
  name: "Bella Vista",
  legalName: "Bella Vista Restaurant",
  tagline: "A table with a view.",
  description:
    "Fine dining in Kololo, Kampala. Seasonal East African produce, a charcoal grill, and a dining room made for long evenings.",
  shortDescription:
    "Seasonal East African produce, charcoal-fired plates and a wine list worth lingering over — high above the green hills of Kololo.",
  address: {
    line1: "Plot 8, Acacia Avenue",
    line2: "Kololo, Kampala",
    country: "Uganda",
  },
  phone: "+256 772 481 260",
  phoneHref: "+256772481260",
  reservationsPhone: "+256 414 501 260",
  reservationsPhoneHref: "+256414501260",
  email: "hello@bellavista.ug",
  reservationsEmail: "reservations@bellavista.ug",
  mapUrl:
    "https://www.google.com/maps/?q=Acacia+Avenue,+Kololo,+Kampala,+Uganda",
  mapEmbed:
    "https://www.google.com/maps?q=Acacia+Avenue,+Kololo,+Kampala,+Uganda&z=15&output=embed",
  priceRange: "UGX 150,000 – 250,000",
  founded: "2016",
  hours: [
    { day: "Monday", time: "Closed", closed: true },
    { day: "Tuesday – Thursday", time: "5:00pm – 10:30pm", closed: false },
    { day: "Friday – Saturday", time: "5:00pm – 11:30pm", closed: false },
    { day: "Sunday", time: "12:30pm – 9:30pm", closed: false },
  ],
  socials: {
    instagram: "https://www.instagram.com/bellavistakampala",
    facebook: "https://www.facebook.com/bellavistakampala",
    x: "https://www.x.com/bellavista_ug",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reservations", label: "Reservations" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.country}`;
