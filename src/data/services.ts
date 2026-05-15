export type Accent = "amber" | "rose" | "indigo" | "emerald" | "sky" | "violet";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  categories: string[];
  metaTitle: string;
  metaDescription: string;
  hero: string;
  accent: Accent;
};

export const services: Service[] = [
  {
    slug: "scrap-buyers-hyderabad",
    title: "Scrap Buyers in Hyderabad",
    short:
      "Top prices for household, industrial, and commercial scrap. Free pickup, instant cash, transparent weighing.",
    long:
      "We buy all kinds of metal and commercial scrap across Hyderabad. From a single bag of household scrap to bulk industrial dismantling, our team arranges weighing on site and pays on the spot. We work with homes, offices, factories, hotels, hospitals, and construction sites.",
    categories: [
      "Copper scrap",
      "Aluminium scrap",
      "Brass scrap",
      "Iron / MS scrap",
      "Stainless steel scrap",
      "Electronics & e-waste",
      "Plastic scrap",
      "Cable & wire scrap",
      "Industrial scrap",
      "Dismantling scrap"
    ],
    metaTitle: "Scrap Buyers in Hyderabad | Best Price, Free Pickup",
    metaDescription:
      "Top scrap buyers in Hyderabad for copper, aluminium, brass, iron, steel, and commercial scrap. Free pickup, on-the-spot cash, transparent weighing.",
    hero: "/images/services/scrap.jpg",
    accent: "amber"
  },
  {
    slug: "old-furniture-buyers-hyderabad",
    title: "Used & Old Furniture Buyers in Hyderabad",
    short:
      "We buy old beds, sofas, dining tables, wardrobes, and antique furniture. Door pickup and instant cash payment.",
    long:
      "Selling your home? Shifting? Renovating? We purchase used and old furniture from homes and apartments across Hyderabad. Whether it is a single sofa, an entire bedroom set, or vintage Godrej and Maharaja pieces, we offer fair prices and same-day pickup.",
    categories: [
      "Beds & cots",
      "Sofas & couches",
      "Dining tables & chairs",
      "Wardrobes & almirahs",
      "Study tables",
      "TV units",
      "Antique furniture",
      "Godrej furniture",
      "Maharaja furniture",
      "Second-hand household furniture"
    ],
    metaTitle: "Used Furniture Buyers in Hyderabad | Old Furniture Pickup",
    metaDescription:
      "Old furniture buyers in Hyderabad for sofas, beds, dining tables, wardrobes, antique and Godrej furniture. Free pickup and best price guaranteed.",
    hero: "/images/services/used-furniture.jpg",
    accent: "rose"
  },
  {
    slug: "office-furniture-buyers-hyderabad",
    title: "Office Furniture Buyers in Hyderabad",
    short:
      "Bulk buyers of office chairs, workstations, partitions, MD tables, and complete office shut-down lots.",
    long:
      "Closing an office, shifting branches, or upgrading workstations? We are bulk buyers of corporate and commercial office furniture in Hyderabad. We handle dismantling, loading, and transport, and pay against signed inventory.",
    categories: [
      "Office chairs & executive chairs",
      "Workstations & cubicles",
      "Pedestal boxes & filing cabinets",
      "Office partitions",
      "MD tables",
      "Reception desks",
      "Conference tables",
      "Office sofas",
      "Storage & lockers",
      "Office scrap & e-waste"
    ],
    metaTitle: "Office Furniture Buyers in Hyderabad | Bulk Pickup",
    metaDescription:
      "Bulk buyers of office furniture in Hyderabad — workstations, chairs, partitions, MD tables, conference tables. Dismantling and transport included.",
    hero: "/images/services/office-furniture.jpg",
    accent: "indigo"
  },
  {
    slug: "restaurant-furniture-buyers",
    title: "Restaurant & Hotel Furniture Buyers",
    short:
      "We buy restaurant, cafe, bakery, and hotel furniture along with kitchen equipment and ACs.",
    long:
      "Closing a restaurant, cafe, or hotel? We purchase complete lots of restaurant and hotel furniture, kitchen equipment, refrigeration units, and ACs across Hyderabad. We work quickly so your premises can be vacated on time.",
    categories: [
      "Restaurant chairs & tables",
      "Cafe & bakery furniture",
      "Hotel room furniture",
      "Banquet chairs",
      "Bar counters",
      "Kitchen equipment",
      "Refrigerators & deep freezers",
      "Restaurant ACs",
      "Display counters",
      "Reception & lobby furniture"
    ],
    metaTitle: "Restaurant & Hotel Furniture Buyers in Hyderabad",
    metaDescription:
      "Buyers of restaurant, hotel, cafe and bakery furniture, kitchen equipment and ACs in Hyderabad. Complete shut-down lot pickup.",
    hero: "/images/services/restaurant.jpg",
    accent: "emerald"
  },
  {
    slug: "ac-buyers-hyderabad",
    title: "Used & Scrap AC Buyers in Hyderabad",
    short:
      "Working, non-working, and scrap ACs purchased — split, window, cassette, duct, tower, and central AC.",
    long:
      "We buy all types of air conditioners — used, non-working, or completely scrap. Our team handles safe removal, copper recovery, and transport. We work with homes, offices, hotels, hospitals, and commercial buildings.",
    categories: [
      "Split AC",
      "Window AC",
      "Cassette AC",
      "Duct AC",
      "Tower AC",
      "Central AC",
      "Commercial AC",
      "Used AC",
      "Scrap / non-working AC",
      "Outdoor unit & copper"
    ],
    metaTitle: "AC Buyers in Hyderabad | Used & Scrap AC Pickup",
    metaDescription:
      "AC buyers in Hyderabad for split, window, cassette, duct, tower, and central AC. Working or scrap, we offer safe removal and best price.",
    hero: "/images/services/ac.jpg",
    accent: "sky"
  },
  {
    slug: "generator-buyers-hyderabad",
    title: "Generator Buyers in Hyderabad",
    short:
      "Old, used, and scrap generator buyers. Diesel, kerosene, silent, and industrial sets across all kVA ranges.",
    long:
      "We purchase old, used, and scrap diesel generators of all kVA ratings. Whether the unit is working, partially working, or completely dead, our team inspects, weighs, and pays against a fair quote.",
    categories: [
      "Used diesel generators",
      "Old generators",
      "Silent generators",
      "Industrial generators",
      "Scrap generators",
      "DG sets",
      "Generator engines",
      "Alternator scrap",
      "Generator dismantling",
      "Backup power equipment"
    ],
    metaTitle: "Generator Buyers in Hyderabad | Old & Scrap DG Sets",
    metaDescription:
      "Generator buyers in Hyderabad for used, old and scrap diesel generators of all kVA ranges. Free inspection and on-spot payment.",
    hero: "/images/services/generator.jpg",
    accent: "violet"
  }
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

type AccentClasses = {
  bgSoft: string;
  text: string;
  border: string;
  iconGrad: string;
  chipBg: string;
  chipText: string;
  hoverBorder: string;
  hoverBgSoft: string;
  hoverText: string;
  groupHoverText: string;
};

const PALETTE: Record<Accent, "brand" | "accent"> = {
  amber: "accent",
  rose: "brand",
  indigo: "accent",
  emerald: "brand",
  sky: "accent",
  violet: "brand"
};

function build(accent: Accent): AccentClasses {
  const p = PALETTE[accent];
  return {
    bgSoft: `bg-${p}-50`,
    text: `text-${p}-700`,
    border: `border-${p}-200`,
    iconGrad: `from-${p}-400 to-${p}-600`,
    chipBg: `bg-${p}-50`,
    chipText: `text-${p}-700`,
    hoverBorder: `hover:border-${p}-300`,
    hoverBgSoft: `hover:bg-${p}-50`,
    hoverText: `hover:text-${p}-700`,
    groupHoverText: `group-hover:text-${p}-700`
  };
}

export const ACCENT_CLASSES: Record<Accent, AccentClasses> = {
  amber: build("amber"),
  rose: build("rose"),
  indigo: build("indigo"),
  emerald: build("emerald"),
  sky: build("sky"),
  violet: build("violet")
};
