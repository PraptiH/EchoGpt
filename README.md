# EchoGPT Landing Page

A marketing landing page for **EchoGPT**, an AI sidebar that brings GPT, Claude, Gemini and other leading models into one workspace that works on any website and on the desktop. The page tells visitors what the product does, and every call to action leads to installing it or signing up.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

**Live site:** [strong-croissant-77d1be.netlify.app](https://strong-croissant-77d1be.netlify.app/)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint
```

Optional environment variables (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the landing page, used for canonical URLs, Open Graph, `sitemap.xml` and `robots.txt`. Falls back to the Vercel production domain, then `https://echogpt.ai` in production builds |
| `NEXT_PUBLIC_APP_URL` | Base URL of the EchoGPT app, used for downloads, docs and status links |
| `WAITLIST_WEBHOOK_URL` | Endpoint that receives each sign-up as JSON (for example a CRM, Zapier or Make webhook). When unset, sign-ups are saved to `.data/waitlist.jsonl` |

## Page structure

| Section | Component | Notes |
| --- | --- | --- |
| Navbar | `components/layout/Navbar.tsx` | Sticky, anchor links, theme toggle, accessible mobile menu (Escape, outside click and resize close it) |
| Hero | `components/sections/HeroSection.tsx` | Theme-aware product screenshot, primary CTAs |
| Features | `components/sections/CapabilitiesSection.tsx` | Six capability cards |
| AI Models | `components/sections/Models.tsx` | Model list and an animated routing orbit (`ModelOrbit`) |
| Product Preview | `components/sections/PreviewSection.tsx` | CSS 3D rotating carousel of real screenshots, pauses on hover |
| Why EchoGPT | `components/sections/WhyEchoGPT.tsx` | Highlights and stats that count up once when scrolled into view |
| Pricing | `components/sections/PricingSection.tsx` | Three plans, each with a working CTA |
| FAQ | `components/sections/FaqSection.tsx` | Accessible accordion (Base UI) |
| Testimonials | `components/sections/TestimonialSection.tsx` | Continuous-glide Swiper slider with single-card arrow steps |
| Call to Action | `components/sections/CTASection.tsx` | Email sign-up (Server Action) and install links for Chrome, Edge, Windows and macOS |
| Footer | `components/layout/Footer.tsx` | Link columns, socials, legal pages |

`/privacy` and `/terms` share `components/layout/LegalPage.tsx`.

## Architecture

```
app/
  layout.tsx        Root layout: fonts, metadata, theme script, skip link, navbar and footer
  page.tsx          Composes the landing page sections inside <main>
  actions.ts        Server Action for the CTA sign-up form (validates, then saves via lib/waitlist.ts)
  privacy/, terms/  Legal pages
  robots.ts, sitemap.ts, icon.png
components/
  layout/           Navbar, Footer, LegalPage
  sections/         One component per landing page section
  ui/               Reusable pieces: buttonVariants, Reveal, CountUp, ModelOrbit,
                    TestimonialSlider, SignupForm, ThemeToggle, accordion
data/               All copy and content (models, pricing, FAQ, testimonials, links)
lib/utils.ts        cn() class-name merging helper
lib/waitlist.ts     Saves sign-ups to a webhook or a local JSONL file
```

Key decisions:

- **Content is separate from presentation.** Every piece of copy lives in typed modules under `data/`. Changing a price, a model or a testimonial never touches a component. All external URLs come from one place, `data/site.ts`.
- **Server Components by default.** Sections render on the server. Only interactive parts are Client Components: the navbar menu, theme toggle, slider, orbit, count-up, reveal and sign-up form. This keeps the JavaScript sent to the browser small.
- **One button system.** `components/ui/button.ts` defines variants with `class-variance-authority`, so `<button>` and `<Link>` look the same and are easy to override with `cn()`.
- **Progressive enhancement.** The sign-up form posts to a Server Action with `useActionState`. It validates on the server, shows pending, error and success states, and still works before JavaScript loads.
- **Dark mode without a flash.** A tiny inline script applies the saved or system theme before first paint. Icons and images switch with the `dark:` variant rather than React state, so server and client markup always match.

## Performance

- `next/image` for every raster image, with responsive `sizes`, blur placeholders and eager, high-priority loading for the hero image (the LCP element).
- Scroll animations use a ~1 KB `IntersectionObserver` component (`Reveal`) and CSS transitions instead of an animation library.
- Decorative animations (orbit, 3D carousel, pulses) are pure CSS keyframes defined in `app/globals.css`.
- Fonts are self-hosted through `next/font`, and the page is statically prerendered at build time.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, headings in order and a skip-to-content link.
- Every interactive element is a real link or button with a visible focus ring. Icon-only controls have labels.
- `prefers-reduced-motion` turns off the orbit, carousel, reveal and slider animations.
- Form errors are announced through `aria-live` and linked with `aria-describedby`.

## Responsive design

Mobile-first layouts tested from 360px up to 1440px wide. Grids collapse from three columns to one, the navbar becomes a hamburger menu, and the orbit and carousel scale with the viewport through CSS variables.

## Credits

Model logos are from [LobeHub Icons](https://github.com/lobehub/lobe-icons) (MIT).
