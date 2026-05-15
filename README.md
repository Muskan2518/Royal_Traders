# Hyderabad Scrap & Furniture Buyers — Website

Next.js 14 (App Router) + Tailwind CSS business website for a Hyderabad-based buyer of scrap, used furniture, office furniture, ACs, and generators.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Configure for the client

Edit **`src/lib/constants.ts`** and replace placeholders:

- `SITE.name`, `SITE.shortName`
- `SITE.url` (production domain — used for sitemap, canonical URLs, OG)
- `SITE.phone`, `SITE.phoneDisplay`, `SITE.whatsapp` (digits only, country code first)
- `SITE.email`
- `SITE.address`, `SITE.hours`
- `SITE.serviceArea` (areas to display in footer / about)

## Routes

| Page | Path |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Services overview | `/services` |
| Scrap Buyers | `/scrap-buyers-hyderabad` |
| Used Furniture Buyers | `/old-furniture-buyers-hyderabad` |
| Office Furniture Buyers | `/office-furniture-buyers-hyderabad` |
| Restaurant / Hotel Furniture Buyers | `/restaurant-furniture-buyers` |
| AC Buyers | `/ac-buyers-hyderabad` |
| Generator Buyers | `/generator-buyers-hyderabad` |
| Pickup Request | `/pickup-request` |
| Gallery | `/gallery` |
| Contact | `/contact` |

`sitemap.xml` and `robots.txt` are auto-generated.

## Forms

The `EnquiryForm` posts to `/api/pickup-request`. The route currently logs submissions to the server console. To forward to email, CRM, or a sheet, edit `src/app/api/pickup-request/route.ts`.

Suggested integrations: Resend / SendGrid for email, a Google Sheet via Apps Script webhook, or a CRM endpoint.

## Content

- **Service categories, copy, and meta**: `src/data/services.ts`
- **FAQs**: `src/data/faqs.ts`
- **Keyword clusters (reference)**: `src/data/keywords.ts`

## Theme

Tailwind tokens live in `tailwind.config.ts`. Brand orange + slate ink palette by default. Change `brand` colors to match the client's final identity.

## Folder layout

```
src/
  app/
    api/pickup-request/route.ts
    layout.tsx
    page.tsx
    about/        services/      pickup-request/
    gallery/      contact/       not-found.tsx
    sitemap.ts    robots.ts
    [service-slug]/page.tsx (x6)
  components/
    Header  Footer  Hero  ServiceCard  ServicePage  CategorySection
    EnquiryForm  WhatsAppButton  FAQ  CTASection  TrustStrip  HowItWorks
  data/  services.ts  faqs.ts  keywords.ts
  lib/   constants.ts  seo.ts
  styles/ globals.css
public/
  images/
```

## Image assets

Drop client-supplied photos into `public/images/`. See `public/images/README.txt` for the recommended naming.
