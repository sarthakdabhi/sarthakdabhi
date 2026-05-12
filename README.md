# Sarthak Dabhi — Portfolio

Personal portfolio for **Sarthak Dabhi**, Staff Software Engineer at Tebra.
Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Quick preview (no install required)

Open `preview.html` in your browser — it's a self‑contained static version
with the exact same design, using Tailwind via CDN. Great for sharing or
for a quick look before you run the real build.

## Run the Next.js site locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run lint
npm run type-check
```

## Project structure

```
app/
  layout.tsx         # Root layout, fonts, metadata
  page.tsx           # Single‑page composition
  globals.css        # Tailwind + custom styles
components/
  Nav.tsx            # Sticky nav with active section
  Hero.tsx           # Name, tagline, CTAs
  About.tsx          # Bio + stats
  Experience.tsx     # Timeline of roles
  Projects.tsx       # GitHub project cards
  Skills.tsx         # Grouped skill chips, certs, languages
  Contact.tsx        # Email + social channels
  Footer.tsx
  SectionHeading.tsx # Numbered "01 — About" style heading
data/
  profile.ts         # Name, bio, links
  experience.ts      # Jobs + education
  projects.ts        # Featured GitHub repos
  skills.ts          # Skill groups, certifications, languages
public/
  favicon.svg
tailwind.config.ts
next.config.js
tsconfig.json
preview.html         # Static preview, no build required
```

## Editing content

All content lives in `data/`. Update the typed objects there and the site
re‑renders automatically. No CMS, no API calls — it's intentionally simple.

To change accent color, edit `tailwind.config.ts` (`accent.DEFAULT`) and
`app/globals.css` (gradients).

## Deploying

**Vercel (recommended).** Push this repo to GitHub and import it at
<https://vercel.com/new>. Next.js works out of the box with zero config.

**Netlify.** Connect the repo and use the Next.js runtime plugin (auto‑detected).

**Static export.** Add `output: 'export'` to `next.config.js` and run
`npm run build` for a fully static `out/` directory you can drop on any
CDN / GitHub Pages.

## Connect your domain

In Vercel: *Project → Settings → Domains → Add* `sarthakdabhi.com`.
Update DNS at your registrar to point to Vercel's nameservers (or set the
recommended `A`/`CNAME` records Vercel shows you). Same flow works for
Netlify and Cloudflare Pages.

## License

Code: MIT. Content (bio, work history): © Sarthak Dabhi.
