# Marriage Portfolio

A private, share-by-link matrimonial profile — an alternative to a biodata PDF.
Next.js App Router, TypeScript, Tailwind CSS v4, English + Hindi, no database,
no backend, no authentication, no CMS.

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000 → redirects to /en
pnpm lint
pnpm typecheck
pnpm build
```

`/` redirects to the visitor's language (`/en` or `/hi`), then remembers that
choice in `localStorage` and a cookie.

## Editing the profile

Everything a visitor reads lives in configuration, never in components:

| File                        | Contents                                                        |
| --------------------------- | --------------------------------------------------------------- |
| `src/data/profile.ts`       | All personal content (English + Hindi)                            |
| `src/data/sectionCopy.ts`   | Section headings and field labels                                |
| `src/data/uiCopy.ts`        | Static UI text and accessibility labels                          |
| `src/data/navigation.ts`    | Header navigation and section ids                                |
| `src/lib/locales.ts`        | Supported languages and URL helpers                              |

Photos live in `public/images/`; the optional biodata PDF would live in
`public/biodata/`. Replace every `⚠️ placeholder` value and have the family
verify it before sharing the link.

### Contact options

`profile.contact` is opt-in per channel:

```ts
contact: {
  email: "you@example.com",          // omitted from the page if removed
  whatsapp: { phone: "+91 …", showOnPage: true },  // false ⇒ no button
  familyContact: { relation: …, phone: …, showOnPage: true },
  biodata: { path: "/biodata/biodata.pdf" },        // shown only if the file exists
}
```

Phone numbers are normalised to international form and validated before a link
is produced; WhatsApp links use the official `https://wa.me/<number>?text=…`
format and only pre-fill a message — nothing is ever sent automatically. The
biodata link is rendered only when the file is really present in `public/`, so
a missing file never turns into a broken button.

## Privacy

This site is **publicly reachable by anyone who has the link**. Please read this
before sharing it.

- **Noindex is a request, not a lock.** Every page sends
  `noindex, nofollow, nocache`, and `/robots.txt` disallows all crawlers. That
  only asks search engines politely to stay away: it does not stop anyone from
  opening the URL, from a shared chat, a forwarded message or a search result
  someone else already saved. Do not treat it as access control.
- **There is no password or client-side protection.** Password prompts,
  "unlock" buttons or JavaScript gates would be cosmetic only — anyone could
  read the page source or the API response. This project deliberately does not
  pretend to offer them.
- **Public images can be copied.** Anything in `public/` is served over plain
  HTTP and can be downloaded, screenshotted or forwarded. Publish only
  photographs you are genuinely comfortable having copied.
- **No tracking.** There is no analytics, no advertising pixel, no cookies
  beyond the single language-preference cookie, and no third-party embeds.
- **No secrets in the client bundle.** The app reads no environment variables
  and exposes no credentials. Do not add any: anything imported into a client
  component ships to the browser.
- **What is deliberately not published here.** No home address, no Aadhaar or
  any identity document, no date of birth of family members, no bank details.
  Location is shared at city level only. Compensation stays hidden unless
  `career.compensation.showOnPage` is explicitly turned on.
- **Privacy by omission is real.** Any field left out of `src/data/profile.ts`
  simply does not appear — sections render around it instead of showing empty
  labels.

If a field should never be online, leave it out of the configuration entirely.

## Project structure

```
src/
  app/[lang]/        locale-aware routes, metadata, robots rules
  components/
    layout/          document shell, header, mobile nav, language switcher
    sections/        hero, about, education, career, family, preferences,
                     gallery, contact
    gallery/         responsive grid and accessible lightbox
    ui/              shared, reusable presentational components
    portfolio/       the single page composition reused by every locale
  data/              all content configuration (English + Hindi)
  lib/               i18n, formatting, contact links, locale helpers
  proxy.ts           sends `/` to the visitor's language
  types/profile.ts   the content model
```