# AGENTS.md

Static Next.js 16 marketing site for B3dHub Blender addons, exported to GitHub Pages at `https://b3dhub.github.io/addons/`.

## Commands

- `npm install` — npm + `package-lock.json`. CI uses `npm ci --legacy-peer-deps` on Node 20.
- `npm run dev` — Turbopack. The app lives under basePath: open http://localhost:3000/addons.
- `npm run lint` — ESLint flat config.
- `npm run typecheck` — `tsc --noEmit`.
- `npm run build` — static export to `out/`; this is the full verification. There is no test suite.
- `npm run start` does not work with `output: "export"`; preview `out/` with a static server mounted at `/addons`.
- CI (`.github/workflows/nextjs.yml`) builds and deploys on push to `main` or manual `workflow_dispatch`.

## Static export and `/addons`

- `next.config.mjs` sets `output: "export"`, `basePath`/`assetPrefix` `/addons`, and unoptimized images. No API routes, server actions, or request-time APIs (`headers()`, `cookies()`, server `searchParams`).
- Internal `/` paths (via `next/link` or the router) omit the prefix: use `/quick-baker`, not `/addons/quick-baker`.
- `next/image` `src` must include `/addons` manually (`/addons/images/quick-theme/thumb.png`), because unoptimized export skips basePath handling. Files live in `public/images/<slug>/`, not `public/addons/...`.
- Read query params in client components only: `app/more` reads `?ref` via `useSearchParams` inside `<Suspense>`.

## Structure

- `components/data.tsx` is the product registry. It drives both the home grid and the shared "Other Add-ons" grid. `productURL` is the internal route and the SuperHive slug (`https://superhivemarket.com/products<productURL>`); `imageURL` is `/addons/images/<slug>/thumb.png`.
- Per addon: `app/<slug>/page.tsx` (card-based marketing page, wrapper `max-w-208`, ends with `<Support>`, `<OtherAddons />`, `<Affiliate />`), `app/<slug>/docs/page.tsx` (installation/workflow docs, not linked from the site), `app/<slug>/README.md` (product copy), and `public/images/<slug>/`. The `blender-to-game-engine` bundle has no docs page.
- Adding an addon means updating `components/data.tsx` plus the page, docs, README, and image folder.
- `app/more` is a transparent-background iframe widget (`/addons/more?ref=...`) excluded from indexing; keep it client-side.

## UI and conventions

- shadcn/ui (new-york style, RSC) is vendored in `components/ui`; Tailwind v4 is config-less (tokens in `app/globals.css`), so do not add `tailwind.config.*`.
- Use `cn()` from `lib/utils.ts`. Product content uses shadcn `Card*` components and `next/image` with alt text.
- Coupons render only when `showCoupon` in `components/coupon.tsx` is `true` (currently `false`).
- The root `README.md` is default create-next-app boilerplate; this file and the configs are authoritative.
