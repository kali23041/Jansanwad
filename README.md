<div align="center">

# Jansanwad · जनसंवाद

**A Marathi news portal front end: "आपला आवाज, आपली बातमी" (your voice, your news).**<br/>
A responsive, Devanagari-first news homepage with a featured story, a full article view, a sidebar of trending news and category tabs, built with Next.js 15 and Tailwind CSS.

<p>
  <img src="https://img.shields.io/badge/Next.js-15-48484d?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React-19-48484d?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-48484d?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-48484d?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" alt="Tailwind CSS 3" />
  <img src="https://img.shields.io/badge/license-MIT-48484d?style=for-the-badge" alt="MIT License" />
</p>

<p>
  <a href="https://jansanwad.vercel.app"><b>Live demo</b></a> ·
  <a href="#-features">Features</a> ·
  <a href="#-tech-stack">Tech stack</a> ·
  <a href="#-getting-started">Getting started</a> ·
  <a href="#-project-structure">Structure</a>
</p>

<sub>Designed and built by <b>Kartik Sabale</b></sub>

<!-- Screenshot: add docs/screenshots/home.png and reference it here -->

</div>

---

## Why Jansanwad

Regional-language news sites need typography and layouts that work for Devanagari script first, not as an afterthought. Jansanwad is a clean, modern homepage design for a local Marathi news outlet, with readable Martel Devanagari headlines and a layout that adapts from phone to desktop.

> [!NOTE]
> This is a static front end. Articles, views, weather and contact details are sample content written into the components; there is no CMS or backend yet.

## ✨ Features

- **Header** with contact details, a *Breaking News* strip, the जनसंवाद masthead and tagline, and social follow links.
- **Featured section** (प्रमुख बातमी) with lead stories in a responsive grid, plus dates and view counts.
- **Main article view** with category, author, date, views and reading time, a pull quote, social share buttons (desktop and mobile) and related news (संबंधित बातम्या).
- **Sidebar** with recent posts, trending news, categories, a newsletter signup box, popular tags and a weather card.
- **Category tabs** for राष्ट्रीय (national), राजकारण (politics), शैक्षणिक (education) and सामाजिक (social) news.
- **Footer** with quick links, categories and contact information.
- **Devanagari typography** using the Martel Devanagari font from Google Fonts.
- **Responsive** single-column mobile layout that grows into a three-column desktop grid.
- Built on a full set of **shadcn/ui** components (Radix UI) for future pages.

## 🛠️ Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 3, tailwindcss-animate, Google Fonts (Martel Devanagari) |
| Components | shadcn/ui on Radix UI, lucide-react icons |
| Forms & extras | React Hook Form, Zod, Recharts, Embla Carousel, Sonner |

## 🚀 Getting started

**Requirements:** Node.js 18.18+ and npm (or pnpm).

```bash
git clone https://github.com/kali23041/Jansanwad.git
cd Jansanwad
npm install
npm run dev
```

Open http://localhost:3000.

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js lint |

## 📁 Project structure

```
app/
├── layout.tsx            # Root layout
└── page.tsx              # Home page → news-website.tsx
news-website.tsx          # Page composition
components/
├── Header.tsx            # Top bar, breaking news, masthead, social links
├── FeaturedSection.tsx   # Lead stories
├── MainPostSection.tsx   # Article, share buttons, related news
├── NewsSidebar.tsx       # Recent, trending, categories, newsletter, tags, weather
├── CategoryTabsSection.tsx
├── Footer.tsx
└── ui/                   # shadcn/ui components
public/                   # Placeholder images
```

## 📄 License

Released under the [MIT License](LICENSE).

## 📬 Contact

**Kartik Sabale** · [kartiksabale.com](https://kartiksabale.com) · [hello@kartiksabale.com](mailto:hello@kartiksabale.com)

---

<div align="center">

**Jansanwad** · Created by **Kartik Sabale** · © 2026

</div>
