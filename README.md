# Exam Prep Point

**MDCAT 2026 Practice Tests | Chapter-wise, Mock Tests & Past Papers**

A single-page, dark-themed test library built for MDCAT 2026 aspirants, aligned with the latest PM&DC curriculum. It brings together chapter-wise tests, mock exams, quarter/half/full-syllabus tests, past papers, and subject notes in one fast, static website.

🌐 **Live site:** _add your deployed URL here_

---

## ✨ Overview

Exam Prep Point is designed as a free, all-in-one revision hub for Pakistani medical college aspirants preparing for the MDCAT (Medical & Dental College Admission Test). The homepage (`Index.html`) organizes all study material into clearly labeled, color-coded sections so students can jump straight to what they need — whether that's a quick chapter quiz or a full 180-MCQ mock paper.

## 🧩 Key Features

- **Chapter-wise Tests** — Practice questions organized by unit for Biology, Chemistry, Physics, English, and Logical Reasoning, with tabbed subject switching.
- **Mock Tests** — Full-length, exam-pattern mock papers to simulate the real MDCAT experience.
- **Quarter Tests (25% Syllabus)** — Focused tests covering a quarter of the curriculum at a time.
- **Half Book Tests (50% Syllabus)** — Mid-level checkpoints across half the syllabus.
- **Full Book Tests (100% Syllabus)** — Complete syllabus assessments.
- **Full Syllabus Tests — PM&DC Pattern** — Tests modeled directly on the official PM&DC exam pattern.
- **Past Papers** — Solved past papers organized by year.
- **Notes & Study Resources** — Downloadable/linked notes for Biology, Chemistry, Physics, English, and Logical Reasoning, including one-page revision sheets.
- **Official Documents** — PM&DC curriculum PDF, MDCAT weightage chart, official date sheet, and a 40-day study plan.
- **MCQ Weightage Strip** — At-a-glance breakdown of subject-wise weightage (e.g., Biology 45% · 81 MCQs).
- **Responsive, Animated UI** — Scroll-reveal animations, a side navigation rail, sticky top navbar, and a fully responsive grid layout for mobile and desktop.
- **SEO-Optimized** — Meta descriptions, keywords, Open Graph, and Twitter Card tags for better search visibility.

## 🗂️ Site Structure

```
├── Index.html      # Homepage — full test & notes library
├── About.html      # About page
├── Contact.html    # Contact page
├── favicon.png     # Site favicon
└── (linked resource pages, e.g. vocabulary guide, study plan, curriculum, etc.)
```

## 🛠️ Tech Stack

- **HTML5** — Semantic, single-file structure
- **CSS3** — Custom properties (CSS variables) for theming, responsive grid layouts, gradient text, and scroll-based reveal animations
- **Vanilla JavaScript** — Tab switching, `IntersectionObserver` for reveal animations, and scroll-based side-rail navigation
- **Google Fonts** — [Syne](https://fonts.google.com/specimen/Syne) (headings) and [Inter](https://fonts.google.com/specimen/Inter) (body text)

No build tools, frameworks, or dependencies are required — the site runs entirely on static HTML, CSS, and JS.

## 🚀 Getting Started

### Run locally

1. Clone or download this repository.
2. Open `Index.html` directly in any modern browser, **or** serve it locally for the best experience:

   ```bash
   # Using Python
   python3 -m http.server 8000

   # Then visit
   http://localhost:8000/Index.html
   ```

### Deploy

Since this is a static site, it can be deployed directly to any static hosting provider, such as:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Simply upload the project files — no build step needed.

## 🎨 Customization

- **Colors & theme** — Adjust the CSS variables under `:root` in `Index.html` (`--bg`, `--card`, `--bio`, `--chem`, `--phy`, etc.) to change the color scheme.
- **Content** — Test/notes links currently use placeholder (`#`) or relative HTML/PDF paths. Replace these with your actual test pages or resource files.
- **SEO metadata** — Update the `<meta>` tags in the `<head>` (title, description, keywords, Open Graph, Twitter Card) to match your domain and branding.

## 📄 License

_Specify your license here (e.g., MIT, All Rights Reserved, etc.)_

## 🙌 Acknowledgements

Built for Pakistani medical college aspirants preparing for MDCAT 2026, aligned with the official PM&DC curriculum.

---

**Exam Prep Point** · Aligned with MDCAT 2026 Curriculum · Built for Pakistani medical aspirants 🇵🇰
