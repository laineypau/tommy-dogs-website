# Tommy Dogs Website

Multi-page marketing site for Tommy Dogs — Miami's only authentic Chicago Style hot dog
restaurant. Built with React, React Router, Vite, and Tailwind CSS v4, based on the brand's
Canva mockup and context document.

## Pages

- `/` — Home (hero, product spotlight, commitment strip, menu preview, "What Sets Us Apart", attitude section)
- `/menu` — Full menu with pricing
- `/catering` — Catering inquiry form, special event pricing, veterans discount
- `/locations` — Embedded map, address, phone, hours
- `/shop` — Merchandise (placeholder — SHOP is marked TBD in the brand doc)
- `/explore` — Brand story / Chicago dog culture content (placeholder — EXPLORE is marked TBD)

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes for launch

Several items are placeholders pending real content (see inline `TODO`/italic notes in the
pages themselves):

- Stock photography (`src/data/images.js`) — swap for licensed/branded product & location photos.
- Locations page address, phone, and hours.
- Shop merchandise, pricing, and an online store/checkout integration.
- Explore articles/brand-story content.
- MLB.com partnership details.
- Catering inquiry form currently just confirms in-page — wire it up to a real inbox/CRM.
