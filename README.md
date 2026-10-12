# Kenchic — Kenchic-inspired Next.js homepage

A responsive single-page poultry website built with Next.js, React, TypeScript and Lucide icons. The navigation follows the requested Kenchic-style hierarchy (without Careers), the hero carousel uses dots only, and the homepage includes the shared-prosperity about section, Farm to Family / Farm to Farm, company banner, product features, a YouTube video background, and a three-column contact/social footer.

The design is inspired by the reference layout, but uses a Kenchic-inspired visual system and original layout code rather than copying Kenchic's source files. Confirm the contact numbers and links before publishing, and use approved logo and photography assets.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

To test a production build:
```bash
npm run build
npm start
```

## Configure your business details
Copy `.env.example` to `.env.local` and update the values:

- `NEXT_PUBLIC_BRAND_NAME` — business name shown in the logo and page
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp number with country code and digits only, e.g. `254712345678`
- `NEXT_PUBLIC_CALL_NUMBER` — phone number shown on the page
- `NEXT_PUBLIC_EMAIL` — customer-support email

The default call/WhatsApp number is set to the Foods support line; confirm that it accepts WhatsApp orders before publishing. WhatsApp buttons open a pre-filled enquiry; call buttons use `tel:`. There is no checkout, payment gateway, order database, or inventory backend.

## Main product range
- Mayai (eggs)
- Day-old chicks
- Feeds
- Drinkers

## Notes
- The carousel rotates automatically every six seconds and has dots only (no arrows).
- The story button opens `https://youtu.be/8Um_zHRFIFA`.
- The lower video section embeds the same YouTube video as a muted, looping background; autoplay can be restricted by some browsers or by YouTube embed settings.
- Photos are hosted on Unsplash for quick preview. Use licensed/local images for production.
- Navigation menu entries scroll to homepage sections or provide product enquiry entry points; connect them to real pages if you later build out the full site.


Brand styling uses Kenchic-inspired blue (#154D98 / #5181B8), white, and yellow action buttons. The Next.js development badge is disabled in `next.config.ts`.
