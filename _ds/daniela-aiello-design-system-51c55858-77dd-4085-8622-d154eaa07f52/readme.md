# Daniela Aiello — Design System

> Brand & UI system for **Daniela Aiello · Desarrollos & Inversiones**, a real-estate
> developer building and selling residential projects in the Patagonia Argentina
> (San Martín de los Andes, Chapelco, Villa La Angostura).

This project is the machine-readable design system: brand assets, color/type/spacing
tokens, reusable React components, foundation specimen cards, a marketing-site UI kit,
and social-carousel templates. A compiler bundles the components into `_ds_bundle.js`
(namespace `window.DanielaAielloDesignSystem_51c558`) and indexes the tokens.

## Source materials
- `uploads/DA_ManualDeMarca_2026.pdf` — the 2026 brand manual (single tall page; logo
  usage, color, social-media / carousel applications). Image-based; extracted via repl.
- `uploads/DA_*.svg` — official logo files (iso, logotipo, marca principal, vertical;
  color / blanco / azul / fondo azul / fondo rojo). **The supplied SVGs shipped with empty
  `<defs>` (no fill definitions)** — corrected copies with the brand fills injected live in
  `assets/logos/`.
- Carousel mockups extracted from the manual are in `scraps/` (working files).

The company name in full is **Daniela Aiello — Desarrollos & Inversiones**; the public
handle/domain seen in the manual is `danielaaiello.ar` / `@danielaaiello.desarrollos`.

---

## CONTENT FUNDAMENTALS
How the brand writes.

- **Language:** Spanish (Argentina / rioplatense). Uses *vos* ("coordiná", "escribinos",
  "contanos", "pedí"), never *tú*.
- **Voice:** confident, warm, aspirational but grounded. Sells a lifestyle (vivir e
  invertir en la montaña) and a track record, not hype.
- **Address:** speaks **to "vos"** (the buyer/investor) and **from "nosotros"** (the
  developer). "Acompañamos cada etapa…", "Construimos lugares para habitar la montaña".
- **Casing:** headlines are **UPPERCASE** and short (2–4 words): "CALIDAD EN CADA DETALLE",
  "CERCA DE TODO", "SAN MARTÍN DE LOS ANDES". Body copy is sentence case.
- **Eyebrows:** a short tracked uppercase locator sits above headlines —
  "PATAGONIA ARGENTINA", "SAN MARTÍN DE LOS ANDES", "COMERCIALIZA".
- **Tone words:** calidad, detalle, naturaleza, bosque nativo, madera, diseño, trayectoria,
  inversión, rentabilidad, entrega.
- **Emoji:** none. The brand never uses emoji. Iconography stays minimal and linear.
- **Numbers/specs** are concrete and reassuring: "1–3 ambientes", "45–120 m²",
  "entrega 2026", "USD 145.000", "+15 años".
- **CTAs:** imperative, short, uppercase on buttons — "Ver desarrollos", "Reservar visita",
  "Consultar", "Descargar brochure", "Coordiná tu visita".

## VISUAL FOUNDATIONS
- **Palette:** two brand colors on warm paper neutrals.
  - **Petrol / deep teal `#033C4D`** — the primary, used for dark surfaces, headlines on
    light, and most UI chrome.
  - **Signal red `#E20613`** — the accent: the terminating tick after headlines, the eyebrow
    color, the single most important CTA, and "en pozo" status. Used sparingly and with intent.
  - Neutrals are **warm** (paper `#FAF8F4`, sand, stone → ink `#14201F`) to echo the wood and
    sand of the architecture. No cool greys.
- **Typography:** one geometric sans carries everything (see substitution note below).
  Display = **light weight (300), UPPERCASE, wide tracking (~0.04em)**. The wordmark itself is
  heavier/geometric. Eyebrows are 600 with very wide tracking (~0.22em). Body is regular, 1.5–1.65
  line-height, sentence case.
- **The red tick:** the brand's signature device — a small solid red square placed at the end of
  a headline line (`.da-tick`, and `tick` on `<SectionHeading>`). Use it once per heading, not on
  every line.
- **Backgrounds:** full-bleed architectural **photography** (warm wood facades, stone houses,
  natural-light interiors, aerials of developments) with a **petrol scrim** for text legibility
  (`--scrim-bottom`, or a flat `rgba(3,39,48,.78)` overlay on CTA bands). Flat color blocks in
  **red** (title carousels) or **petrol** (closings, about bands). No gradients-as-decoration, no
  textures, no patterns.
- **Imagery vibe:** warm, natural, Patagonian. Wood + stone + glass, daylight, greenery and
  mountains. Realistic architectural renders/photos — never illustration.
- **Corners:** crisp. Radii are small — buttons/badges/inputs use **2px** (`--radius-sm`), cards
  **4px** (`--radius-md`), large media **8px**. The only real curves in the system are the iso mark.
- **Shadows:** soft, low, petrol/ink-tinted (`--shadow-sm/md/lg`); media gets a deeper lift
  (`--shadow-image`). Never harsh or colored.
- **Cards:** white surface, 1px warm border (`--border-subtle`), small radius, subtle shadow;
  on hover they lift ~3px with a larger shadow.
- **Borders:** hairline warm-grey dividers separate spec rows and footer content.
- **Buttons:** uppercase, wide-tracked, 2px corners. Primary = petrol fill, accent = red,
  secondary = outline, ghost = text, on-dark = white fill (over photos). Hover darkens the fill;
  press nudges 1px down. No scale-bounce.
- **Motion:** restrained. Short fades/color transitions (`--dur-fast/med`, `--ease-out`). Header
  fades from transparent (over hero) to frosted white on scroll. No bounces, no looping decoration.
- **Transparency / blur:** used only for the sticky header (frosted white) and photo scrims.
- **Layout:** 1200px max content width, generous vertical rhythm (sections ~88–96px padding),
  centered containers, sticky frosted header.

## ICONOGRAPHY
- The brand **does not ship an icon set**; the manual is logo- and photography-led and uses **no
  emoji**. The only proprietary glyph is the **iso mark** (the interlocking "DA" infinity loop —
  red + petrol), available in `assets/logos/iso-*.svg` and as `<Logo form="mark" />`.
- For UI needs (nav, arrows, form adornments, contact, social) this system standardises on
  **Lucide** (`lucide@0.460.0`, loaded from CDN) at **stroke-width 1.75** — thin, geometric,
  rounded-join strokes that match the light geometric type. Color icons with the petrol or red
  tokens. This is a **substitution** (the brand had no defined icon library) — see caveats.
- Use icons sparingly and functionally; never decoratively, never as bullet "emoji cards".
- Logos: prefer the corrected SVGs in `assets/logos/` (color on light, blanco on petrol/photo).
  Never recolor the strokes outside the approved variants or stretch the proportions.

---

## INDEX / MANIFEST
Root:
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `layout.css` (spacing/radius/shadow/motion),
  `fonts.css` (webfont), `base.css` (resets + `.da-eyebrow/.da-display/.da-tick` helpers).
- `assets/logos/` — corrected brand SVGs (iso, logotipo, marca principal & vertical; color /
  blanco / azul / fondo azul / fondo rojo).
- `assets/images/` — clean architectural photography (facade-detail, interior-living,
  interior-bedroom, stone-house-mountain, aerial-development, town-lake, facade-warm-wood).
- `SKILL.md` — Agent-Skills wrapper for downloadable use.

Components (`window.DanielaAielloDesignSystem_51c558.*`):
- `components/core/` — **Button**, **IconButton**, **Badge**, **Logo**
- `components/forms/` — **Input**, **Select**, **Checkbox**
- `components/realestate/` — **PropertyCard**, **Stat**, **SectionHeading**

Each component dir has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and a `*.card.html`
specimen. Foundation specimens live in `guidelines/` (Colors, Type, Spacing, Brand cards).

UI kit:
- `ui_kits/sitio-web/` — the marketing website: `index.html` (click-through router) +
  `Chrome.jsx` (header/footer), `Home.jsx` (hero, featured, track-record, CTA),
  `Inner.jsx` (developments listing, development detail, about, contact), `data.js`.

Templates:
- `slides/` — social **carrusel** templates (Instagram 4:5, 1080×1350): `portada-roja`,
  `portada-imagen`, `proyecto`, `cierre`.

## CAVEATS & SUBSTITUTIONS
- **Fonts:** the DA wordmark uses a proprietary geometric sans. This system substitutes
  **Montserrat** (Google Fonts) as the nearest match for display + body. **Replace with the
  licensed brand typeface when available** — update `tokens/fonts.css` and `--da-font-*`.
- **Colors** were sampled from the rendered manual (the SVGs had no embedded fills): petrol
  `#033C4D`, red `#E20613`. Confirm against the brand's exact spec values if they differ.
- **Icons:** Lucide is a substitution (no brand icon set existed). Swap if the brand defines one.
- **Imagery** is low-resolution (extracted/cropped from the PDF manual). Replace with
  full-resolution project photography for production.
