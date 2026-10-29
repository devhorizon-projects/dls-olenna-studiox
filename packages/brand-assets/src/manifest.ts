import { BrandAssetMetadata, BrandClearanceGuidelines, BrandColorDefinition } from './types';

export const OLENNA_BRAND_PALETTE: Record<string, BrandColorDefinition> = {
  // Master Typography & Semantic Roles (from Olenna Web)
  charcoalPrimary: {
    name: 'Brand Charcoal Primary',
    hex: '#261C22',
    role: 'Master Primary Typography & Highest Contrast Text',
    usageNotes: 'Master brand text color across Olenna Web storefront, PWA, and boutique portals (#261C22).'
  },
  plumSecondary: {
    name: 'Plum Secondary Text',
    hex: '#5C4C56',
    role: 'Secondary Copy & Subtitles',
    usageNotes: 'Subtle plum for descriptions, auxiliary product details, and subtitles (#5C4C56).'
  },
  mutedPlum: {
    name: 'Muted Plum Text',
    hex: '#8E7A87',
    role: 'Muted Brand Text & Captions',
    usageNotes: 'Timestamps, disclaimers, and subtle auxiliary details (#8E7A87).'
  },
  warmIvory: {
    name: 'Warm Ivory',
    hex: '#FFFAF7',
    role: 'Primary Canvas Background & Subtle Surface',
    usageNotes: 'Dominant page background across customer web & PWA for airy luxury feel.'
  },
  blushPink: {
    name: 'Blush Pink',
    hex: '#F5E3EA',
    role: 'Secondary Surface & Highlight Accent',
    usageNotes: 'Used for delicate highlight cards, category tags, and pill backgrounds.'
  },
  softMauve: {
    name: 'Soft Mauve',
    hex: '#DCC5D8',
    role: 'Subtle Accent & Secondary Action Fill',
    usageNotes: 'Secondary button fill, framing dividers, decorative badges, and active state indicators.'
  },
  champagne: {
    name: 'Champagne',
    hex: '#C4A181',
    role: 'Metallic Trim & Premium Accent',
    usageNotes: 'Fine line dividers, VIP badges, star ratings, and button secondary borders.'
  },
  deepPlum: {
    name: 'Deep Plum',
    hex: '#493541',
    role: 'Primary Action Fill & Dominant Plum Mark',
    usageNotes: 'Primary action buttons, high-contrast badges, and principal plum brand mark.'
  },
  midnightPlum: {
    name: 'Midnight Plum',
    hex: '#33232D',
    role: 'Action Hover State & Deep Accent',
    usageNotes: 'Primary button hover state and deep contrast borders.'
  },
  roseMauve: {
    name: 'Rose Mauve',
    hex: '#A66B83',
    role: 'Secondary Interactive & Link Color',
    usageNotes: 'Hover states, accent icons, and promotional callouts.'
  },

  // Complete Olenna Web Storefront Scales (@theme in globals.css)
  blush50: {
    name: 'Brand Blush 50',
    hex: '#FAF1F4',
    role: 'Ultra-light blush wash & hero accent',
    usageNotes: 'Used for delicate section highlights and hero backdrops.'
  },
  blush100: {
    name: 'Brand Blush 100',
    hex: '#F5E3EA',
    role: 'Signature blush pink accent',
    usageNotes: 'Category tags, active pill badges, and highlight cards.'
  },
  blush200: {
    name: 'Brand Blush 200',
    hex: '#EED5E0',
    role: 'Medium blush pink tint',
    usageNotes: 'Subtle container borders and card accents.'
  },
  mauve100: {
    name: 'Brand Mauve 100',
    hex: '#EFE4EC',
    role: 'Soft mauve background wash',
    usageNotes: 'Delicate boutique card backgrounds.'
  },
  mauve200: {
    name: 'Brand Mauve 200',
    hex: '#DCC5D8',
    role: 'Signature soft mauve button fill',
    usageNotes: 'Secondary button background matching Olenna Web.'
  },
  mauve400: {
    name: 'Brand Mauve 400',
    hex: '#C5A5BF',
    role: 'Accent soft mauve hover',
    usageNotes: 'Secondary button hover state.'
  },
  ivory50: {
    name: 'Brand Ivory 50',
    hex: '#FFFAF7',
    role: 'Master light page canvas',
    usageNotes: 'Global background across web storefront and PWA.'
  },
  ivory100: {
    name: 'Brand Ivory 100',
    hex: '#FAF5F2',
    role: 'Subtle warm ivory container surface',
    usageNotes: 'Card container background and drawer surfaces.'
  },
  ivory200: {
    name: 'Brand Ivory 200',
    hex: '#F5EFEA',
    role: 'Bespoke ivory border and panel wash',
    usageNotes: 'Dividers and toast container borders.'
  },
  champagne100: {
    name: 'Brand Champagne 100',
    hex: '#F2E8DE',
    role: 'Soft champagne metallic tint',
    usageNotes: 'VIP tags and delicate badges.'
  },
  champagne200: {
    name: 'Brand Champagne 200',
    hex: '#DFC7B0',
    role: 'Champagne highlight & accent border',
    usageNotes: 'Framing lines and metallic accents.'
  },
  champagne400: {
    name: 'Brand Champagne 400',
    hex: '#C4A181',
    role: 'Signature champagne metallic gold',
    usageNotes: 'Botanical emblem gold trim and star ratings.'
  },
  champagne600: {
    name: 'Brand Champagne 600',
    hex: '#9E7958',
    role: 'Deep antique champagne bronze',
    usageNotes: 'High-contrast champagne text on light badges.'
  },
  plum700: {
    name: 'Brand Plum 700',
    hex: '#6D4C5E',
    role: 'Secondary deep plum',
    usageNotes: 'Auxiliary icons and header hover accents.'
  },
  plum800: {
    name: 'Brand Plum 800',
    hex: '#593D4E',
    role: 'Subdued deep plum tone',
    usageNotes: 'Dark accents and border treatments.'
  },
  plum900: {
    name: 'Brand Plum 900',
    hex: '#493541',
    role: 'Signature deep plum brand color',
    usageNotes: 'Primary button fill, focus rings, and dark logo typography.'
  },
  plum950: {
    name: 'Brand Plum 950',
    hex: '#33232D',
    role: 'Deepest midnight plum',
    usageNotes: 'Primary button hover state.'
  },
  plumAnnouncement: {
    name: 'Brand Announcement Bar Plum',
    hex: '#6B4B5E',
    role: 'Storefront announcement banner fill',
    usageNotes: 'Top marquee banner fill from Olenna Web storefront.'
  },
  footerIvory: {
    name: 'Brand Footer Ivory',
    hex: '#FAF3F0',
    role: 'Storefront footer background',
    usageNotes: 'Warm ivory footer surface from Olenna Web.'
  },
  cardTint: {
    name: 'Brand Card Subtle Tint',
    hex: '#F6E6ED',
    role: 'Category and gift card wash',
    usageNotes: 'Delicate blush wash from CategoryCard and CustomerPwaBanner.'
  }
};

export const BRAND_ASSETS_MANIFEST: BrandAssetMetadata[] = [
  // Vector SVGs
  {
    id: 'olenna-logo-full-light-svg',
    name: 'Olenna Full Stacked Logo (Light)',
    variant: 'full',
    theme: 'light',
    format: 'svg',
    filePath: 'svg/olenna-logo-full-light.svg',
    dimensions: { width: 240, height: 240 },
    recommendedMinSizePx: { width: 110, height: 110 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Master stacked luxury lockup for splash screens, editorial banners, and documentation headers.'
  },
  {
    id: 'olenna-logo-full-dark-svg',
    name: 'Olenna Full Stacked Logo (Dark)',
    variant: 'full',
    theme: 'dark',
    format: 'svg',
    filePath: 'svg/olenna-logo-full-dark.svg',
    dimensions: { width: 240, height: 240 },
    recommendedMinSizePx: { width: 110, height: 110 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Inverted stacked luxury lockup for dark surfaces and night mode.'
  },
  {
    id: 'olenna-horizontal-light-svg',
    name: 'Olenna Horizontal Logo (Light)',
    variant: 'horizontal',
    theme: 'light',
    format: 'svg',
    filePath: 'svg/olenna-horizontal-light.svg',
    dimensions: { width: 420, height: 90 },
    recommendedMinSizePx: { width: 140, height: 30 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Horizontal logo suitable for app headers, navigation bars, and footers.'
  },
  {
    id: 'olenna-horizontal-dark-svg',
    name: 'Olenna Horizontal Logo (Dark)',
    variant: 'horizontal',
    theme: 'dark',
    format: 'svg',
    filePath: 'svg/olenna-horizontal-dark.svg',
    dimensions: { width: 420, height: 90 },
    recommendedMinSizePx: { width: 140, height: 30 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Inverted horizontal logo for dark headers and high contrast footers.'
  },
  {
    id: 'olenna-wordmark-light-svg',
    name: 'Olenna Wordmark (Light)',
    variant: 'wordmark',
    theme: 'light',
    format: 'svg',
    filePath: 'svg/olenna-wordmark-light.svg',
    dimensions: { width: 320, height: 80 },
    recommendedMinSizePx: { width: 120, height: 30 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Serif typographic wordmark for clean, compact layouts.'
  },
  {
    id: 'olenna-wordmark-dark-svg',
    name: 'Olenna Wordmark (Dark)',
    variant: 'wordmark',
    theme: 'dark',
    format: 'svg',
    filePath: 'svg/olenna-wordmark-dark.svg',
    dimensions: { width: 320, height: 80 },
    recommendedMinSizePx: { width: 120, height: 30 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Inverted typographic wordmark for dark overlays.'
  },
  {
    id: 'olenna-emblem-light-svg',
    name: 'Olenna Emblem Monogram (Light)',
    variant: 'emblem',
    theme: 'light',
    format: 'svg',
    filePath: 'svg/olenna-emblem-light.svg',
    dimensions: { width: 160, height: 160 },
    recommendedMinSizePx: { width: 32, height: 32 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Botanical monogram for favicons, mobile app icons, and avatar stamps.'
  },
  {
    id: 'olenna-emblem-dark-svg',
    name: 'Olenna Emblem Monogram (Dark)',
    variant: 'emblem',
    theme: 'dark',
    format: 'svg',
    filePath: 'svg/olenna-emblem-dark.svg',
    dimensions: { width: 160, height: 160 },
    recommendedMinSizePx: { width: 32, height: 32 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Dark-background botanical monogram.'
  },
  // Authentic WebP Masters from Olenna Web
  {
    id: 'olenna-logo-full-webp',
    name: 'Olenna Full Logo (Authentic WebP)',
    variant: 'full',
    theme: 'light',
    format: 'webp',
    filePath: 'olenna-logo-full.webp',
    dimensions: { width: 1024, height: 825 },
    recommendedMinSizePx: { width: 110, height: 89 },
    recommendedClearanceMultiplier: 0.5,
    description: 'High-performance WebP raster master of the full stacked logo.'
  },
  {
    id: 'olenna-horizontal-webp',
    name: 'Olenna Horizontal (Authentic WebP)',
    variant: 'horizontal',
    theme: 'light',
    format: 'webp',
    filePath: 'olenna-horizontal.webp',
    dimensions: { width: 1200, height: 266 },
    recommendedMinSizePx: { width: 140, height: 31 },
    recommendedClearanceMultiplier: 0.5,
    description: 'High-performance WebP raster master of the horizontal header lockup.'
  },
  {
    id: 'olenna-emblem-webp',
    name: 'Olenna Emblem (Authentic WebP)',
    variant: 'emblem',
    theme: 'light',
    format: 'webp',
    filePath: 'olenna-emblem.webp',
    dimensions: { width: 512, height: 465 },
    recommendedMinSizePx: { width: 32, height: 29 },
    recommendedClearanceMultiplier: 0.5,
    description: 'High-performance WebP raster master of the botanical emblem.'
  },
  {
    id: 'olenna-wordmark-webp',
    name: 'Olenna Wordmark (Authentic WebP)',
    variant: 'wordmark',
    theme: 'light',
    format: 'webp',
    filePath: 'olenna-wordmark.webp',
    dimensions: { width: 800, height: 242 },
    recommendedMinSizePx: { width: 120, height: 36 },
    recommendedClearanceMultiplier: 0.5,
    description: 'High-performance WebP raster master of the standalone wordmark.'
  },
  // Authentic Raster Sources from Creative Direction
  {
    id: 'olenna-logo-full-png',
    name: 'Olenna Full Logo (Authentic PNG)',
    variant: 'full',
    theme: 'light',
    format: 'png',
    filePath: 'olenna-logo-full.png',
    dimensions: { width: 1024, height: 825 },
    recommendedMinSizePx: { width: 150, height: 121 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Authentic high-resolution raster master of the full stacked logo.'
  },
  {
    id: 'olenna-horizontal-png',
    name: 'Olenna Horizontal (Authentic PNG)',
    variant: 'horizontal',
    theme: 'light',
    format: 'png',
    filePath: 'olenna-horizontal.png',
    dimensions: { width: 1200, height: 266 },
    recommendedMinSizePx: { width: 180, height: 40 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Authentic high-resolution raster master of the horizontal header lockup.'
  },
  {
    id: 'olenna-emblem-png',
    name: 'Olenna Emblem (Authentic PNG)',
    variant: 'emblem',
    theme: 'light',
    format: 'png',
    filePath: 'olenna-emblem.png',
    dimensions: { width: 512, height: 465 },
    recommendedMinSizePx: { width: 44, height: 39 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Authentic high-resolution raster master of the floral emblem.'
  },
  {
    id: 'olenna-wordmark-png',
    name: 'Olenna Wordmark (Authentic PNG)',
    variant: 'wordmark',
    theme: 'light',
    format: 'png',
    filePath: 'olenna-wordmark.png',
    dimensions: { width: 800, height: 242 },
    recommendedMinSizePx: { width: 155, height: 47 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Authentic high-resolution raster master of the standalone wordmark.'
  },
  {
    id: 'olenna-logo-raw-png',
    name: 'Olenna Logo Raw Master',
    variant: 'full',
    theme: 'raw',
    format: 'png',
    filePath: 'logo-raw.png',
    dimensions: { width: 1024, height: 1024 },
    recommendedMinSizePx: { width: 150, height: 150 },
    recommendedClearanceMultiplier: 0.5,
    description: 'Original raw artwork asset from creative direction.'
  }
];

export const BRAND_USAGE_GUIDELINES: BrandClearanceGuidelines = {
  minimumClearSpaceFormula: 'Clear space equals at least 50% of the emblem width "X" around all four sides.',
  minimumSizeDigital: {
    full: { width: 110, height: 89 },
    horizontal: { width: 140, height: 31 },
    wordmark: { width: 120, height: 36 },
    emblem: { width: 32, height: 29 }
  },
  rules: {
    do: [
      'Maintain adequate contrast (minimum 4.5:1 for typography on backgrounds).',
      'Use light variants on Warm Ivory (#FFFAF7) or Blush Pink (#F5E3EA).',
      'Use dark variants on Deep Plum (#493541) or dark image scrims.',
      'Always preserve the original aspect ratio when scaling.',
      'Respect the 0.5X clearance boundary around all logomarks.'
    ],
    dont: [
      'Do not stretch, distort, rotate, or apply perspective skews to the logo.',
      'Do not alter the approved brand color palette or substitute arbitrary neon colors.',
      'Do not add drop shadows, outer glows, or heavy decorative strokes.',
      'Do not place the light logo over low-contrast or busy photograph backgrounds without a backdrop scrim.',
      'Do not separate the botanical emblem petals from the oval ring.'
    ]
  }
};
