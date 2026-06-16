# Cleaning Business Website Template

A reusable, conversion-focused Next.js website for local cleaning companies.

## Quick customization

1. Edit `lib/business.ts`. This is the single source of truth for:
   - business identity and contact details
   - colors and SEO description
   - homepage, about, and services copy
   - services and quote-form options
   - service areas, reviews, FAQs, hours, and social links
   - hero, team, before, and after image paths
2. Replace the preview images in `public/images`, or point the image fields in `lib/business.ts` to new files.
3. Replace all placeholder reviews and template photography before launch.
4. Run the verification commands below.

Detailed instructions are in `CUSTOMIZATION.md`.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Verify

```bash
npm run typecheck
npm run lint
npm run build
```
