# Color Tokens

Semantic and core brand color tokens for Olenna StudioX. Design tokens abstract raw values into functional design roles, enabling seamless multi-theme switching (Light and Dark) without hardcoded values.

---

## Brand Palette

The approved core color palette embodying the Olenna StudioX identity: editorial, premium, feminine, and high contrast.

<ColorPalettePreview palette="brand" />

---

## Typography & Text Tokens

Text tokens define contrast-certified hierarchy across page titles, subtitles, body copy, and inverse overlays.

<ColorPalettePreview palette="text" />

| Token | CSS Variable | Light Mode | Dark Mode | Role |
| :--- | :--- | :--- | :--- | :--- |
| `color-text-primary` | `--olenna-color-text-primary` | `#261C22` | `#261C22` | Master editorial headings & primary body copy |
| `color-text-secondary` | `--olenna-color-text-secondary` | `#5C4C56` | `#5C4C56` | Auxiliary copy & descriptions |
| `color-text-muted` | `--olenna-color-text-muted` | `#8E7A87` | `#8E7A87` | Inactive captions & timestamps |
| `color-text-inverse` | `--olenna-color-text-inverse` | `#FFFAF7` | `#FFFAF7` | Text over high-contrast fills |

---

## Surface & Canvas Tokens

Surface tokens govern layered backgrounds, containers, cards, and modal dialogs.

<ColorPalettePreview palette="surface" />

| Token | CSS Variable | Light Mode | Dark Mode | Role |
| :--- | :--- | :--- | :--- | :--- |
| `color-surface-page` | `--olenna-color-surface-page` | `#FFFAF7` | `#FFFAF7` | Global canvas backdrop |
| `color-surface-card` | `--olenna-color-surface-card` | `#FFFFFF` | `#FFFFFF` | Default card & container fill |
| `color-surface-elevated`| `--olenna-color-surface-elevated` | `#FFFFFF` | `#FFFFFF` | Modals, drawers, and menus |
| `color-surface-subtle` | `--olenna-color-surface-subtle` | `#FAF5F2` | `#FAF5F2` | Table row alternate, empty states |
| `color-surface-accent` | `--olenna-color-surface-accent` | `#F5E3EA` | `#F5E3EA` | Blush highlight surface |
| `color-surface-footer` | `--olenna-color-surface-footer` | `#FAF3F0` | `#FAF3F0` | Warm ivory footer background |
| `color-surface-tint` | `--olenna-color-surface-tint` | `#F6E6ED` | `#F6E6ED` | Delicate blush category card & promo wash |

---

## Action & Interactive Tokens

Action tokens power primary calls to action, secondary controls, hover highlights, and accessible focus outlines.

<ColorPalettePreview palette="action" />

| Token | CSS Variable | Light Mode | Dark Mode | Role |
| :--- | :--- | :--- | :--- | :--- |
| `color-action-primary-default` | `--olenna-color-action-primary-default` | `#493541` | `#493541` | Primary CTA button background |
| `color-action-primary-hover` | `--olenna-color-action-primary-hover` | `#33232D` | `#33232D` | Primary CTA hover state |
| `color-action-primary-text` | `--olenna-color-action-primary-text` | `#FFFFFF` | `#FFFFFF` | Text on primary CTA |
| `color-action-secondary-default` | `--olenna-color-action-secondary-default`| `#DCC5D8` | `#DCC5D8` | Secondary button fill matching Olenna Web |
| `color-action-secondary-hover` | `--olenna-color-action-secondary-hover`| `#C5A5BF` | `#C5A5BF` | Secondary button hover matching Olenna Web |
| `color-action-secondary-text` | `--olenna-color-action-secondary-text`| `#33232D` | `#33232D` | Secondary button text matching Olenna Web |
| `color-focus-ring` | `--olenna-color-focus-ring` | `#493541` | `#493541` | Accessible focus ring indicator |
