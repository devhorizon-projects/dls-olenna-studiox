# Release Notes & Changelog

## v2.2.0 (Current Stable Release)

*Enhanced Brand Logo Vector Rendering, Master Color Extensions, and Pure Light Theme Semantics.*

### Packages Published
- `@olenna/brand-assets@2.2.0`: Updated SVG manifests, brand palette color definitions, and SVG vector lockups.
- `@olenna/tokens@2.2.0`: Added master web tokens `color.brand.plum.announcement` (`#6B4B5E`), `surface.footer` (`#FAF3F0`), and `surface.tint` (`#F6E6ED`). Light mode enforced across all selectors.
- `@olenna/styles@2.2.0`: Tailwind preset extensions for new surface washes (`surface.footer`, `surface.tint`) and announcement plum.
- `@olenna/react@2.2.0`: `<Logo />` enhanced with native inline SVG rendering (`as="svg"` or `as="image"`), light/dark background theme switching (`theme="light" | "dark"`), and accessible styling.
- `@olenna/patterns@2.2.0`: Retail pattern updates and compatibility with DLS v2.2.0 tokens.

### Key Highlights
- **Direct SVG Vector Rendering**: `<Logo as="svg" />` renders self-contained vector SVGs directly into the DOM without external image path dependencies.
- **Theme Support for High-Contrast Overlays**: `<Logo theme="dark" />` renders champagne and ivory strokes for dark plum navigation headers, while `theme="light"` provides plum strokes for Warm Ivory and white surfaces.
- **Color Scale Extensions**: Master colors synced with Olenna Web storefront, including `#6B4B5E` (announcement bar), `#FAF3F0` (warm ivory footer), and `#F6E6ED` (category wash).
- **Disabled Dark Mode**: Permanent light luxury theme enforcement; `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]` output light tokens.

---

## v2.1.0

*Light Theme Enforcement & DLS Consumer Integration.*

### Packages Published
- `@olenna/tokens@2.1.0`, `@olenna/react@2.1.0`, `@olenna/styles@2.1.0`, `@olenna/patterns@2.1.0`, `@olenna/brand-assets@2.1.0`.

### Key Highlights
- Disabled dark mode across all theme providers and compiled CSS tokens.
- Synchronized local package references across Customer PWA, Store Admin, and Super Admin.

---

## v1.0.0

*Initial Production Release of the Olenna StudioX Design Language System.*

### Packages Published
- `@olenna/brand-assets@1.0.0`: Approved SVG vectors, master PNGs, and brand metadata.
- `@olenna/tokens@1.0.0`: Framework-neutral design token source, CSS custom properties, and typed constants.
- `@olenna/styles@1.0.0`: Compiled stylesheets, accessible resets, and Tailwind preset.
- `@olenna/react@1.0.0`: Full suite of accessible, theme-aware React components (WCAG 2.2 AA).
- `@olenna/patterns@1.0.0`: Luxury retail presentation patterns, boutique directories, and PWA banners.
