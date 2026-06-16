# Customization Guide

The site is designed so a new cleaning business can be configured primarily in `lib/business.ts`.

## Versioning and new businesses

`cleaning-template-final-v2` is the immutable starting point for new cleaning businesses. Do not move or replace this tag.

Create a separate branch for every business before changing its details:

```bash
git switch --create codex/business-name cleaning-template-final-v2
```

Use a unique, lowercase branch name for each business. Commit that business's completed site to its branch. Starting the next business from the final tag keeps the template and every previous business version available in Git.

## Information to collect

- Business name and short logo text
- City, country, service areas, phone, email, and hours
- Primary and secondary brand colors
- Short tagline and SEO description
- Residential and commercial services offered
- What is included in each service
- Best-fit customer and planning note for each service
- Confirmed trust claims
- The company's clearest operational differentiator
- Starting prices or approved pricing explanation
- Recurring service policy and any verified discounts
- Available add-ons and their prices, if published
- Confirmed re-clean or satisfaction policy
- Verified reviews, reviewer area, and service used
- Verified public rating, review count, platform, and review-page link
- FAQs and policies
- Founder or team story
- Facebook, Instagram, or other social links

## Images

Add replacement files to `public/images` and update `business.images`.

- `hero`: horizontal room or cleaner-at-work photo, ideally 1600 x 1200 or larger
- `team`: horizontal candid team photo, ideally 1800 x 1200 or larger
- `before` and `after`: matching dimensions and camera position, ideally 1600 x 900

Use real business photography whenever possible. Do not present generated people as actual employees. Update image alt text in the relevant component if the subject changes significantly.

## Services and quote links

The quote form options are generated from `business.services`. Service-page links pass the selected service to `/contact`, so titles must be unique. Changing a service title in the config updates both the service listing and quote dropdown.

Available service icons:

- `home`
- `sparkles`
- `truck`
- `building`
- `key`
- `hardHat`

## Claims and placeholders

Before launch:

- Add only a real public rating and review count to `reviewProof`; otherwise leave the optional fields unset.
- Remove or replace the template-photo notice after adding a real team image.
- Replace all placeholder reviews with verified customer feedback.
- Add only claims the business has confirmed, such as insured, bonded, eco-friendly, or background checked.
- Replace the template service promise with the company's actual written resolution or re-clean policy.
- Publish starting prices only when the business can consistently honor them.
- Connect the quote form to the business email, CRM, or form provider.
- Replace the service-area map placeholder if a map is required.
- Replace generic social links.

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

Check the homepage, services, service areas, about, and contact pages at desktop and mobile widths. Test at least one “Ask about this service” link and confirm the cleaning type is preselected.

## Quote form delivery

Set `business.quoteForm.endpoint` to an HTTPS endpoint that accepts JSON POST requests. Until an endpoint is configured, the form clearly asks visitors to call or email instead of reporting a false success.

The endpoint should:

- validate and sanitize every field server-side
- apply rate limiting and spam protection
- return a `2xx` response only after safely accepting the request
- avoid logging sensitive customer details

## Production monitoring

Configure the hosting provider or uptime monitor to check `/api/health`. A healthy deployment returns HTTP 200 with `{ "status": "ok" }`.

Use the hosting provider’s error monitoring and request logs, but do not store quote-form contents in logs.

Run `npm audit --omit=dev` during maintenance. At the time this template was hardened, npm reported a moderate advisory in the PostCSS version bundled privately by Next.js. Current stable Next.js releases still pin that version, and the template does not process user-supplied CSS. Recheck after framework upgrades and remove this note when Next.js ships a patched dependency.
