# Champion Dentists — Community Coordinator

Marketing site for the **Community Coordinator (Business Liaison Manager)** program by Champion Dentists. It explains the program, introduces Emmie Saavedra, and turns visitors into leads through a sign-up form and a booking calendar.

## Contents

- [Pages](#pages)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Styling (SCSS)](#styling-scss)
- [Common edits](#common-edits)
- [Third-party embeds](#third-party-embeds)
- [Notes](#notes)

## Pages

| Route      | Description                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `/`        | Landing page: hero, marquee, "The Approach" stepper, how the work is done, what's included, Meet Emmie, package, and a call to action. |
| `/booking` | Booking page with the LeadConnector calendar embed, plus a sidebar covering who you'll meet, what the call covers, and how booking works. |

Every page shares the top strip, sticky header, footer, and the "Connect With Us" sign-up popup. These live in the root layout.

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack) with **React 19** and **TypeScript**
- **SCSS** via [`sass`](https://sass-lang.com). There's no Tailwind or CSS-in-JS.
- **`next/font`**: Sora (headings) and Manrope (body)
- **`next/image`**: images are imported statically from `src/assets`
- **pnpm** as the package manager

> **Heads up:** this Next.js version has breaking changes from older releases. Check `node_modules/next/dist/docs/` before relying on APIs from memory (see `AGENTS.md`).

## Getting started

Requirements: Node.js 20+ and pnpm.

```bash
pnpm install
```

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Pages hot-reload as you edit.

## Scripts

| Command      | What it does                         |
| ------------ | ------------------------------------ |
| `pnpm dev`   | Start the dev server                 |
| `pnpm build` | Create a production build            |
| `pnpm start` | Serve the production build           |
| `pnpm lint`  | Run ESLint (`eslint-config-next`)    |

## Project structure

All source code lives in `src/`. The `@/` import alias points to `src/`, so `@/components/ui/Icons` resolves to `src/components/ui/Icons.tsx`.

```
src/
├── app/                      # Routes (App Router)
│   ├── layout.tsx            # Fonts, metadata, header/footer shell, sign-up popup
│   ├── page.tsx              # "/" landing page
│   ├── booking/page.tsx      # "/booking" page
│   └── icon.png              # Favicon (Next.js serves it automatically)
│
├── assets/images/            # logo.webp, emmie.webp (imported by components)
│
├── components/
│   ├── layout/               # TopStrip, Header (incl. mobile menu), Footer
│   ├── sections/             # Landing page sections, one file each
│   ├── booking/              # BookingHero, BookingCalendar, BookingAside
│   ├── providers/            # SignupModalProvider (open/close popup from anywhere)
│   └── ui/                   # Shared pieces: Icons, SignupButton, SignupModal, CheckBadge
│
├── data/                     # All page copy and settings (no JSX)
│   ├── site.ts               # Site name, phone, nav links, embed IDs
│   ├── home.ts               # Landing page text, lists, stats, Emmie's bio
│   └── booking.ts            # Booking page text
│
└── styles/                   # SCSS (see below)
```

### Server vs. client components

Components are server components by default. Only the ones that need interactivity are marked `"use client"`:

- `Header` (mobile menu toggle)
- `Stepper` (auto-advancing "The Approach" tabs)
- `SignupModalProvider`, `SignupModal`, `SignupButton` (sign-up popup)

## Styling (SCSS)

Styles follow a 7-1-style layout. `src/styles/main.scss` is the single entry point, imported once in `src/app/layout.tsx`.

```
src/styles/
├── main.scss                 # Imports every partial, in order
├── abstracts/                # No CSS output (except keyframes)
│   ├── _variables.scss       # Colors, fonts, radii, easing, breakpoints, z-index
│   ├── _functions.scss       # ink($a), glass($a) translucent colors
│   ├── _mixins.scss          # mobile, container, flex-center, circle, label-caps…
│   ├── _keyframes.scss       # Every @keyframes animation
│   └── _index.scss           # Forwards variables, functions, mixins
├── base/                     # Reset, typography, global page styles
├── utilities/                # .rise / .d1–.d5 / .reveal / .float animation helpers
├── components/               # Reusable UI: buttons, cards, eyebrow, modal…
├── layout/                   # Top strip, header, footer
├── sections/                 # One partial per landing page section
└── pages/                    # Page-specific styles (booking)
```

**Conventions**

- Class names follow **BEM**: `.block`, `.block__element`, `.block--modifier`. State classes use `is-active`.
- Every partial starts with `@use "../abstracts" as *;` to get variables, functions and mixins.
- Keep values in `_variables.scss`. For example, the brand orange used by buttons is `$orange`.
- Responsive rules go inside the component using `@include mobile { … }`. The breakpoint is 960px.
- Motion is disabled automatically for users who prefer reduced motion (`base/_reset.scss`).

**Adding a new style file**

1. Create the partial, e.g. `src/styles/sections/_testimonials.scss`.
2. Add `@use "../abstracts" as *;` at the top.
3. Register it in `src/styles/main.scss` under the matching group.

## Common edits

| I want to change…                     | Edit                                                   |
| ------------------------------------- | ------------------------------------------------------ |
| Phone number, nav links, site title   | `src/data/site.ts`                                     |
| Landing page text, lists, Emmie's bio | `src/data/home.ts`                                     |
| Booking page text                     | `src/data/booking.ts`                                  |
| Brand colors, fonts, spacing          | `src/styles/abstracts/_variables.scss`                 |
| Logo or headshot                      | Replace `src/assets/images/logo.webp` / `emmie.webp`   |
| Favicon                               | Replace `src/app/icon.png`                             |
| Page `<title>` / description          | `metadata` in `src/app/layout.tsx` or the page file    |

**Adding a page:** create `src/app/<route>/page.tsx`. It automatically gets the header, footer and sign-up popup from the root layout. Put its styles in `src/styles/pages/_<route>.scss` and register that file in `main.scss`.

**Linking to landing page sections:** use `/#section-id` (for example `/#team`) so the link works from any page.

## Third-party embeds

Both embeds come from **LeadConnector (GoHighLevel)**. Their IDs are in `src/data/site.ts`.

| Embed          | Where it's used                                   | Config key         |
| -------------- | ------------------------------------------------- | ------------------ |
| Sign-up form   | "Connect With Us" / "Sign Up Now" popup           | `SIGNUP_FORM`      |
| Booking widget | `/booking` calendar                               | `BOOKING_CALENDAR` |

Both use `https://link.msgsndr.com/js/form_embed.js`, loaded with `next/script`. It auto-resizes the iframes.

## Notes

- The embed script logs `'#8Nlc9Ia77Z8bzFVeZxir_…-div' is not a valid selector` in the console. The booking iframe ID starts with a digit, and that ID comes from LeadConnector's embed code. The calendar still works and resizes.
- `pnpm-workspace.yaml` still has a placeholder value for `@parcel/watcher` under `allowBuilds`. Set it to `true` or `false`.
- The SVGs in `public/` (`next.svg`, `vercel.svg`, etc.) are leftovers from the Next.js starter and aren't used.
