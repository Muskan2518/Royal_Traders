import { featuredAreaNames } from "@/data/serviceAreas";

export const SITE = {
  name: "Royal Traders",
  shortName: "Royal Traders",
  tagline: "Scrap • Furniture • AC • Generator Buyers",
  url: "https://theroyaltraders.com",
  city: "Hyderabad",
  description:
    "Trusted buyers of scrap, used furniture, office furniture, ACs and generators across Hyderabad. Free pickup, on-the-spot cash payment, transparent weighing.",
  phone: "+91-7013825051",
  phoneDisplay: "+91 70138 25051",
  whatsapp: "917013825051",
  email: "info@theroyaltraders.com",
  address: "Hyderabad, Telangana, India",
  hours: "Mon - Sun, 8:00 AM - 8:00 PM",
  serviceArea: featuredAreaNames
};

const DEFAULT_WHATSAPP_MESSAGE = `Hi ${SITE.name}, I'm interested in your services in ${SITE.city}. I'd like to know more about pickup and pricing for my items. Please share the details.`;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? DEFAULT_WHATSAPP_MESSAGE);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:${SITE.phone}`;
}
