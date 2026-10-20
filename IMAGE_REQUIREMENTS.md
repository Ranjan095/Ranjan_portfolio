# Image Requirements

Audit of every image referenced by the marriage portfolio, with the exact
specifications needed to replace the current files with real photographs.

- Audited: `src/data/profile.ts`, `src/components/sections/*`,
  `src/components/gallery/*`, `src/app/globals.css`, `public/`, `next.config.ts`
- Method: static search of all references + file metadata inspection (`file`,
  `stat`) + rendered-size measurement in a real browser at 375 / 768 / 1024 /
  1440 px (English build, `next start`)
- No application code, data or styling was changed by this audit.

---

## 1. Summary

| Metric | Value |
|---|---|
| Images referenced by the site | **7** (`photos[]` in `src/data/profile.ts`) |
| Files actually present in `public/images/` | **2 of 7** — 5 return HTTP 404 |
| Other image assets | 1 favicon (`.ico`), 5 unused `.svg` files, 0 CSS background images, 0 remote images |
| Real photographs currently in place | 2 (`portrait.png`, `gallery-01.png`) |
| Decorative placeholders still present | 5 files (`placeholder-02…06.png`) |
| Total size of `public/images/` | **23 MB** — dominated by 2 PNG photos (12.40 MB + 9.77 MB) |
| Image components | `next/image` in 4 places (hero, family, gallery, lightbox) |

---

## 2. Inventory

### IMG-01 — Hero portrait (also gallery tile 1)

| Field | Value |
|---|---|
| Image ID | IMG-01 |
| Section | Hero (top of page) **and** first gallery tile |
| Current source | `/images/portrait.png` (configured at `src/data/profile.ts` → `photos[0]`) |
| Purpose | Main profile photograph |
| Actual format | PNG |
| Actual file size | **12.40 MB** (13,011,377 bytes) |
| Actual dimensions | **2080 × 4608 px** |
| Actual aspect ratio | **1 : 2.22** (tall portrait) |
| Displayed size (measured) | 375 px → 302×669 · 768 px → 382×846 · 1024 px → 446×988 · 1440 px → 424×939 |
| CSS fitting | `object-cover`, container `h-auto w-full` → image is **not cropped**, full height shown |
| Crop behaviour | None — the whole image is displayed, so its aspect ratio directly controls hero height |
| Recommended format | **JPEG** (or WebP) |
| Recommended dimensions | **1200 × 2000 px** (3:5 portrait). Max long edge 2000 px |
| Recommended file size | ≤ **300 KB** |
| Orientation | Portrait, upright |
| Transparent background | Not needed |
| Focal point | Subject centred; keep the head in the upper third (it is never cropped, but it decides how tall the hero looks) |
| Where to put your file | `public/images/portrait.png` — or rename, then update `src/data/profile.ts` line ~283 |

### IMG-02 — Gallery photo 1

| Field | Value |
|---|---|
| Image ID | IMG-02 |
| Section | Gallery (`photos[1]`) |
| Current source | `/images/gallery-01.png` (configured at `src/data/profile.ts`, ~line 293) |
| Purpose | Gallery photograph |
| Actual format | PNG |
| Actual file size | **9.77 MB** (10,250,731 bytes) |
| Actual dimensions | **2080 × 4608 px** |
| Actual aspect ratio | 1 : 2.22 |
| Displayed size (measured) | tile 160×199 (375 px) · 221×277 (768 px) · 307×383 (1024 and 1440 px) |
| CSS fitting | `size-full object-cover` inside a fixed **`aspect-4/5`** tile |
| Crop behaviour | **Cropped** — a 1:2.22 image loses roughly 78 % of its height in the tile; the visible band is the vertical centre of the photo |
| Recommended format | **JPEG** or WebP |
| Recommended dimensions | **1200 × 1500 px** (4:5) |
| Recommended file size | ≤ **300 KB** |
| Orientation | Portrait 4:5 (square or landscape also works — they are cropped to 4:5) |
| Transparent background | Not needed |
| Focal point | Keep faces in the **vertical centre** of the frame; `object-position` is centre |
| Where to put your file | `public/images/gallery-01.png`, or rename and update the same config line |

### IMG-03 … IMG-07 — Configured gallery slots (files missing)

| Field | Value |
|---|---|
| Image ID | IMG-03 … IMG-07 |
| Section | Gallery (`photos[2]` … `photos[6]`) |
| Current source | `/images/gallery-02.png` … `/images/gallery-06.png` |
| Purpose | Gallery photographs (currently decorative placeholders) |
| Actual format / size / dimensions | **Unknown at the configured path — HTTP 404.** The files on disk are still named `placeholder-02.png` … `placeholder-06.png` (PNG, 1200×1500 / 1200×1200 / 1200×900 / 1200×1500 / 1200×900, 14–21 KB each) |
| CSS fitting | Same as IMG-02 — `aspect-4/5` tile, `object-cover` |
| Recommended format | JPEG / WebP |
| Recommended dimensions | 1200 × 1500 px (4:5) |
| Recommended file size | ≤ 300 KB each |
| Where to put your file | `public/images/gallery-02.png` … `gallery-06.png` (or your own names, then update `src/data/profile.ts` lines ~306–342) |

> **Broken-reference warning (found during this audit, not fixed here):** the
> configuration was renamed to `gallery-02…06.png` but the files on disk were
> not. Those five slots return **404**. The gallery component silently hides
> failed images, so the grid currently shows only 2 tiles instead of 7 — no
> broken icons, but 5 photographs are missing. Either rename the five files on
> disk, or delete those config entries.

### IMG-F1 — Favicon

| Field | Value |
|---|---|
| Image ID | IMG-F1 |
| Section | Browser tab |
| Current source | `src/app/[lang]/favicon.ico` |
| Purpose | Site icon |
| Actual format | ICO (3 icons, 32×32, 48×48) |
| Actual file size | 15 KB |
| Actual dimensions | 48×48 and 32×32 |
| Recommendation | Optional. Keep `.ico` (or add `icon.png`) at **512×512 px**, PNG, ≤ 60 KB |

### IMG-U1 … IMG-U5 — Unused SVGs

| Field | Value |
|---|---|
| Image ID | IMG-U1…U5 |
| Current source | `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` |
| Purpose | **None** — leftover create-next-app assets, referenced nowhere |
| Format / size | SVG, 128 B – 1.4 KB |
| Dimensions / ratio | Vector; intrinsic size varies per file |
| Recommendation | Safe to delete; they are not part of the profile |

### Not images (checked, none found)

- No CSS `background-image` or `url()` in `src/app/globals.css` — decorative
  backgrounds are pure CSS gradients (`paper-grain`, `gold-rule`).
- No remote image URLs, no icon fonts, no `next/image` remote patterns.
- No `<img>` tags outside `next/image`.
- `next.config.ts` has no `images` block, so Next.js defaults apply:
  device widths 640/750/828/1080/1200/1920/3840 and default output formats
  (WebP/AVIF negotiated by `Accept`).

---

## 3. Why the sizes matter (measured)

- Gallery tiles are **307 × 383 px** at desktop and **160 × 199 px** on mobile →
  a 1200 × 1500 source is already 4× larger than the largest rendered tile.
- `next/image` generates a **10-entry srcset** per image (640 → 3840 px wide), so
  visitors download a right-sized derivative, but the server must still decode
  the original file. A 12.4 MB / 4608 px-tall PNG is slow to process: during
  this audit the family-sized image took ~1.5 s to appear on a cold cache.
- Recommended 1200 × 2000 (hero) and 1200 × 1500 (gallery) sources are 4–6×
  smaller in pixels and ~40× smaller in bytes than the current files.

---

## 4. Final checklist

### Hero

- [ ] **Hero portrait** — `public/images/portrait.jpg` (or keep `portrait.png`)
      · portrait/upright · **1200 × 2000 px** · JPEG quality 85 · **≤ 300 KB**
      · subject upright, head in the upper third
      · if you rename the file, update `src/data/profile.ts` → `photos[0].src`

### Gallery

- [ ] **Gallery photo 1** — `public/images/gallery-01.jpg`
      · **1200 × 1500 px (4:5)** · JPEG 85 · ≤ 300 KB · faces centred vertically
- [ ] **Gallery photos 2–7** — `gallery-02.jpg` … `gallery-07.jpg`
      · same spec as photo 1 · add one more `{ … }` block in `photos[]` per photo
- [ ] **Fix the 5 missing files** — either rename `placeholder-02…06.png` to
      `gallery-02…06.png`, or remove those entries from `photos[]`

### Optional

- [ ] **Favicon** — `src/app/[lang]/favicon.ico` · 512×512 PNG/ICO · ≤ 60 KB
- [ ] **Delete unused SVGs** — `public/file.svg`, `globe.svg`, `next.svg`,
      `vercel.svg`, `window.svg`

### How the gallery data works

Edit **only** `src/data/profile.ts` → the `photos: [ … ]` array (starts at line
277). Filenames are free-form: whatever you name the file, put that exact path in
`src` and update `width`/`height` to the image's real pixel size. The **first**
entry is always used as the hero portrait, so keep it as your best portrait.

```ts
{
  src: "/images/gallery-07.jpg",
  alt: { en: "Short description for screen readers", hi: "हिन्दी में संक्षिप्त विवरण" },
  caption: { en: "Visible caption under the photo", hi: "तस्वीर के नीचे दिखने वाला कैप्शन" },
  width: 1200,   // real pixel width
  height: 1500,  // real pixel height
}
```

After replacing files: delete `.next/cache/images` and restart the dev server,
otherwise the old optimised copies keep being served.

---

## 5. Unknowns and assumptions

| Item | Status |
|---|---|
| Original dimensions of `gallery-02…06.png` | **Unknown** — those paths 404. Only the renamed-on-disk `placeholder-02…06.png` (1200×1500, 1200×1200, 1200×900, 1200×1500, 1200×900) were measurable |
| EXIF / camera data | Not inspected (not required by the site) |
| Whether the two current PNGs were exported from a phone at full resolution | Unknown; 2080 × 4608 suggests a 9:20 phone capture |
| `object-position` for gallery tiles | Tailwind default `50% 50%` (centre); no custom focal point is configured |
| Favicon 512 px variant | Not present — file is `file` type with three 16–64 px icons |
| Device pixel ratio | Assumed standard `deviceSizes` (Next.js default); no `deviceSizes` override configured |
