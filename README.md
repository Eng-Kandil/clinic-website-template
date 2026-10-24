# Clinic Website Template — قالب موقع عيادة

A reusable Arabic (RTL) one-page website for clinics, built with **Next.js 16**, **React 19** and **TypeScript**. Plain CSS, no UI libraries, so it builds anywhere.

Sections: header, hero with stats, services with prices, why-us, doctors, WhatsApp booking form, reviews, location map + working hours, FAQ, footer, floating WhatsApp button. Includes SEO metadata and `Dentist` structured data for Google.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## New client in ~1 hour

1. Copy this repo for the client.
2. Edit **`config/clinic.ts`** — the only file you need to change:
   - name, tagline, description, SEO text
   - phone, **WhatsApp number** (digits only, e.g. `9665XXXXXXXX`), address, map search text
   - `theme` colors
   - services and prices, doctors, reviews, FAQ, working hours
3. Optional: put doctor photos in `public/images/` and set `image: "/images/dr-name.jpg"`.
4. Deploy to Vercel (free): import the repo at vercel.com → Deploy. Then add the client's domain.

## Demo sites for prospects

One deployment can host many demos at `/demo/<slug>`. Each demo shows a small "sample site" bar on top and is hidden from search engines.

1. Copy a file in `config/demos/` (e.g. `alrafie.ts`) to `config/demos/<slug>.ts` and edit it.
2. Register it in `config/demos/index.ts`.
3. Push to `main`. Vercel redeploys, and the demo is live at `https://<your-domain>/demo/<slug>`.

Empty `doctors` or `testimonials` lists hide those sections. An empty service `price` shows "حسب الحالة".

## Booking: WhatsApp or ClinicOS

By default the booking form builds a ready message and opens WhatsApp to the clinic's number.

To use an online booking system instead (e.g. ClinicOS), set:

```ts
booking: { externalUrl: "https://your-booking-link", ... }
```

All "Book" buttons then point to that system.

## Structure

```
config/clinic.ts      ← all clinic content and colors (the client's real site)
config/demos/         ← one config per prospect demo
app/layout.tsx        ← <html dir="rtl">, fonts, SEO metadata
app/page.tsx          ← home page (renders config/clinic.ts)
app/demo/[slug]/      ← demo pages (render config/demos/*)
components/ClinicPage ← section order, theme colors, structured data
app/globals.css       ← all styles (colors come from config)
components/           ← one file per section
```

## Turning it into another niche

Salons, physiotherapy, vets: change the text and icons in `config/clinic.ts`, and `schemaType` in the same file (e.g. `BeautySalon`, `Physiotherapy`, `VeterinaryCare`).
