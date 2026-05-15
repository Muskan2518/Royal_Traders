import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Cinzel } from "next/font/google";
import Header from "@/components/Header";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cinzel",
  display: "swap"
});
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/constants";
import { localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} — Scrap, Furniture, AC & Generator Buyers in Hyderabad`,
  description: SITE.description,
  keywords: [
    "scrap buyers Hyderabad",
    "used furniture buyers Hyderabad",
    "office furniture buyers",
    "AC buyers Hyderabad",
    "generator buyers Hyderabad",
    "old furniture pickup",
    "commercial scrap buyers"
  ],
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#0f1c36",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cinzel.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </body>
    </html>
  );
}
