# B3dHub Blender Addons Showcase - Copilot Instructions

## Project Overview

This is a Next.js 15 marketing website showcasing B3dHub's collection of Blender addons. It follows a product catalog structure where each addon has its own route with detailed feature comparisons, GIF demonstrations, and purchase links.

## Architecture & Structure

### Core Pattern: Static Product Showcase

- **Main catalog**: `/` displays all products from `components/data.tsx` using a responsive grid
- **Product pages**: `/[addon-name]/` contains detailed feature documentation with rich media
- **Layout**: All pages use a consistent dark theme with shadcn/ui components in a centered card layout

### Key Data Flow

1. **Product registry**: `components/data.tsx` defines all addons with metadata (title, price, category, routes)
2. **Route structure**: Each addon gets its own directory under `app/` with a `page.tsx`
3. **Shared components**: `components/support.tsx`, `components/other-addons.tsx`, `components/affiliate.tsx` appear on all product pages

## Development Conventions

### Page Structure Pattern

Every addon page follows this exact structure:

```tsx
export const metadata: Metadata = { title: "...", description: "..." };
export default function AddonPage() {
  return (
    <div className="dark flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>Introduction</Card>
      <Card>Feature Comparison Table</Card>
      {/* Feature demonstration cards with GIFs */}
      <Card>Limitations (if any)</Card>
      <Support />
      <OtherAddons />
      <Affiliate />
    </div>
  );
}
```

### Media & Assets

- **Images**: Store in `/public/addons/images/[addon-name]/` with standardized names (`thumb.png`, feature GIFs)
- **GIFs**: Use `unoptimized` prop on Next.js Image components for animations
- **Thumbnails**: Always named `thumb.png` and used in the main catalog

### Styling & UI

- **Design system**: shadcn/ui with New York style, dark mode default
- **Theme**: Custom CSS variables in `app/globals.css` with zinc base color
- **Layout**: Always use `max-w-[832px]` for product pages, responsive grid for catalog
- **Utility**: Use `cn()` from `lib/utils.ts` for conditional classes (clsx + tailwind-merge)

## Development Workflow

### Adding New Addons

1. **Add to registry**: Update `components/data.tsx` with product metadata
2. **Create route**: Make `app/[addon-name]/page.tsx` following the exact pattern above
3. **Add assets**: Place images in `/public/addons/images/[addon-name]/`
4. **Feature table**: Always include comparison table with ✅/⚠️ icons

### Component Usage

- **Cards**: Use shadcn Card components with CardHeader/CardContent/CardFooter
- **Tables**: Feature comparison tables use shadcn Table with centered alignment
- **Images**: Next.js Image with specific dimensions, always include alt text
- **Links**: Use Next.js Link with shadcn buttonVariants for styled links

### Key Commands

```bash
npm run dev --turbopack  # Development with Turbopack
npm run build           # Production build
npm run lint           # ESLint check
```

## Critical Integration Points

### External Dependencies

- **Discord widget**: Embedded in Support component at iframe height 500px
- **External links**: Documentation, changelogs, Blender Market links use `target="_blank"`
- **Affiliate system**: `components/affiliate.tsx` handles monetization links

### Conditional Features

- **Coupons**: Controlled by `showCoupon` boolean in `components/coupon.tsx`
- **Documentation links**: Different per addon, usually pointing to GitHub Pages or Discord

### TypeScript & Configuration

- **Strict TypeScript**: Next.js 15 with React 19, includes React overrides in package.json
- **Path aliases**: `@/` maps to root for clean imports
- **CSS Variables**: Theme system uses HSL CSS variables for consistent theming

## Common Patterns to Follow

- All product pages must include Support, OtherAddons, and Affiliate components at the bottom
- Feature demonstration cards should have descriptive titles and clear CardDescription
- Always include metadata export for SEO
- Use consistent pricing format: "$XX - $XXX" for range pricing
- GIF demonstrations should show actual addon functionality, not promotional content
