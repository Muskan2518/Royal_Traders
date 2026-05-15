import Link from "next/link";
import Image from "next/image";
import { SITE, telLink, whatsappLink } from "@/lib/constants";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink-900 text-ink-100 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(to_right,#0f1c36,#243f6e,#c8902a,#ecc257,#243f6e,#0f1c36)]" />

      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="inline-flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-white/10">
            <Image
              src="/images/logo.png"
              alt={`${SITE.name} logo`}
              width={180}
              height={180}
              className="h-16 w-16 object-contain scale-[1.6] origin-center"
            />
          </div>
          <p className="mt-4 text-sm text-ink-300">{SITE.description}</p>
          <div className="mt-4 flex gap-2">
            <a
              href={telLink()}
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-800 shadow-sm hover:bg-brand-50 transition"
            >
              Call Now
            </a>
            <a
              href={whatsappLink()}
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-800 shadow-sm hover:bg-brand-50 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Services</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-ink-300 hover:text-white transition">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="text-ink-300 hover:text-white transition">About Us</Link></li>
            <li><Link href="/services" className="text-ink-300 hover:text-white transition">All Services</Link></li>
            <li><Link href="/pickup-request" className="text-ink-300 hover:text-white transition">Pickup Request</Link></li>
            <li><Link href="/contact" className="text-ink-300 hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-300">
            <li>Phone: <a href={telLink()} className="hover:text-white transition">{SITE.phoneDisplay}</a></li>
            <li>Email: <a href={`mailto:${SITE.email}`} className="hover:text-white transition">{SITE.email}</a></li>
            <li>{SITE.address}</li>
            <li>{SITE.hours}</li>
          </ul>
          <h4 className="mt-5 font-semibold text-white">Service Area</h4>
          <p className="mt-2 text-xs text-ink-400">
            {serviceAreas.length}+ pincodes across Hyderabad, Secunderabad &amp; Rangareddy.{" "}
            <Link href="/about#areas" className="text-accent-300 hover:text-white transition">
              View all areas →
            </Link>
          </p>
          <p className="mt-2 text-xs text-ink-400 line-clamp-2">{SITE.serviceArea.join(" • ")}</p>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container py-5 text-xs text-ink-400 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Built for buyers in {SITE.city}.</span>
        </div>
      </div>
    </footer>
  );
}
