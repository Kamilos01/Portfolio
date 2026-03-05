# Portfolio UX/UI Analysis & Implementation Plan

> Analysed on: 5 March 2026  
> Branch: `main`  
> Live URL: http://localhost:3000/Portfolio

---

## 1. Current State Summary

| Section      | Status                                                                     |
| ------------ | -------------------------------------------------------------------------- |
| Hero         | Functional but generic — borrowed React boilerplate logo animation, no CTA |
| About Me     | Good content, accordion UX broken (all panels open by default)             |
| Skills       | Long, flat, ungrouped icon grid                                            |
| Certificates | Clickable but missing logos, verification links, excess whitespace         |
| Projects     | Good structure, missing tech-stack tags and QA-specific descriptions       |
| Global / Nav | Theme toggle icon unclear, heading font overused                           |

---

## 2. Issues Found

### 2.1 Hero

- **Spinning logo signals "loading"** — the infinite `rotate(360deg)` animation is a direct copy of the React boilerplate spinner. Most users associate this pattern with a loading state, not a design choice.
- **Logo context mismatch** — in light mode the Playwright masks look out of place over the snowy landscape; in dark mode it works better but is still disconnected from a personal brand.
- **No Call-To-Action button** — the hero has social icons and a down-chevron but no primary action (e.g. "Download CV" or "Get in touch"). A CTA is the most impactful conversion element on a portfolio hero.
- **Title mismatch** — hero `<h2>` says _"Quality Assurance Tech Lead"_, About Me says _"Quality Lead & Automation Architect"_. Only one title should be used consistently throughout.
- **Wasted vertical space** — `.down-container` at `10rem` creates dead space between the social links and the scroll arrow.

### 2.2 About Me

- **All accordion panels expand by default** — this defeats the purpose of an accordion and floods the viewport. Panels should be collapsed by default.
- **No secondary CTA** — a "Download CV" link or "Get in touch" button would fit naturally at the bottom of this section.

### 2.3 Skills

- **No grouping or categorisation** — 20+ icons (QA frameworks, languages, CI/CD, databases, mobile) displayed in one flat grid. A visitor cannot quickly assess your core specialisation.
- **No hover interaction** — icons feel purely decorative. A tooltip with a short description or a scale/highlight on hover would add depth.
- **Missing skills** — LangSmith is mentioned in the About Me text but absent from the skills grid.

### 2.4 Certificates

- **Large blank gap** after the second row of cards before the Projects section begins — no content, no separator, just whitespace.
- **Text-only cards** — no issuer logo (ISTQB, Udemy, Google, DlaTesterow.pl). Logos add credibility and instant visual recognition.
- **Cards are not clickable** — if verification URLs exist they should be linked; if not, a placeholder badge ("View Certificate") prepares the section for future linking.

### 2.5 Projects

- **No tech-stack tags** — visitors cannot tell which tools were used without navigating away.
- **Generic descriptions** — lines like _"Contract lifecycle management solution."_ don't communicate QA value. Rewrite to highlight testing scope, coverage, or automation stack.
- **No visual differentiation** between project types (personal, professional, open-source).

### 2.6 Global / Navigation

- **Theme toggle icon** — the spiral/sunburst icon is not universally understood. A sun/moon or labelled "Light / Dark" toggle is clearer.
- **Heading font overuse** — the handwritten display font is used on every section title (About Me, Skills, Certificates, Projects, Projects count). This dilutes the impact it has on the `h1` name. Reserve it for the name only and use a clean sans-serif for section headings.
- **Page `<title>`** — currently `"React App"` at load before JS hydrates; the `public/index.html` should already have the correct title as a fallback (it does — `"Kamil Byrski | Portfolio"` — but worth monitoring).

---

## 3. Implementation Plan

Tasks are ordered by impact-to-effort ratio. Each task is self-contained and can be shipped independently.

---

### TASK 1 — Replace spinning logo animation (High impact, Low effort) ✅ IMPLEMENTED

**File:** `src/components/Hero.jsx`

Replace the infinite `spin` rotation with a slow, gentle **float** animation (`translateY`). This keeps the hero visually dynamic without implying a loading state. The Playwright masks icon stays but feels intentional rather than accidental.

```
spin (rotate 360deg, 20s infinite)
  →
float (translateY -12px → 0px, 4s ease-in-out infinite alternate)
```

**Acceptance criteria:**

- Logo no longer rotates
- Logo gently bobs up and down
- Animation respects `prefers-reduced-motion`

---

### TASK 2 — Add a primary CTA button to the Hero (High impact, Low effort) ✅ IMPLEMENTED

**File:** `src/components/Hero.jsx`

Add a "Download CV" button beneath the social links row (reuse the existing CV link from `config.js`). Style as `btn-outline-light` in dark / `btn-outline-dark` in light to stay consistent with the rest of the UI.

**Acceptance criteria:**

- Button visible in both light and dark mode
- Opens CV PDF in a new tab
- Button only renders when the resume URL is set in `config.js`

---

### TASK 3 — Collapse accordion panels by default in About Me (High impact, Low effort) ✅ IMPLEMENTED

**File:** `src/components/AboutMe.jsx`

Change the default `activeKey` state from showing all panels to `null` (all collapsed). Optionally open the first panel by default so visitors have a hint to click.

**Acceptance criteria:**

- Panels are collapsed on page load / section entry
- Clicking a panel header expands it
- Clicking again collapses it (toggle behaviour)

---

### TASK 4 — Group Skills into labelled categories (Medium impact, Medium effort) ✅ IMPLEMENTED

**Files:** `src/config.js`, `src/components/Skills.jsx`

Add a `category` field to each skill entry in `skillData`. Render the skills section with category headers/tabs:

| Category           | Example skills                        |
| ------------------ | ------------------------------------- |
| Testing Frameworks | Playwright, Cypress, Appium, Cucumber |
| Languages          | TypeScript, Python, JavaScript        |
| CI/CD & DevOps     | GitHub Actions, Jenkins, Docker, AWS  |
| Databases & APIs   | PostgreSQL, MySQL, Rest API           |
| Mobile & Other     | Maestro, Android Studio, xCode        |
| AI & Monitoring    | Promptfoo, Sentry, LangSmith          |

Render as a Bootstrap `Tab` or simple section dividers depending on the total count.

**Acceptance criteria:**

- Skills clearly grouped
- Each group has a visible label
- LangSmith added if data is available

---

### TASK 5 — Add hover tooltips to skill icons (Low impact, Low effort)

**File:** `src/components/Skills.jsx`

Wrap each skill `<figure>` in a Bootstrap `OverlayTrigger` + `Tooltip` showing the skill name (or a short proficiency note from config). Provides visual feedback and accessibility.

**Acceptance criteria:**

- Tooltip appears on hover (desktop) / focus (keyboard)
- Does not interfere with the icon layout

---

### TASK 6 — Add tech-stack tags to Project cards (Medium impact, Low effort) ✅ IMPLEMENTED

**Files:** `src/config.js` (project data), `src/components/ProjectCard.jsx`

Add a `tags: []` array to each project entry in `config.js`. Render them as small `Badge` components inside each card below the description.

```js
// Example
{
  id: 1,
  title: "Switch Board",
  description: "...",
  tags: ["TypeScript", "Playwright", "AWS"],
  ...
}
```

**Acceptance criteria:**

- Tags are visible on project cards in the grid
- Tags visible in the `AllProjects` page view too
- No tags renders cleanly (no empty space)

---

### TASK 7 — Fix Certificates section whitespace (Low impact, Low effort)

**File:** `src/components/Certificates.jsx` (and/or CSS)

Remove or reduce the large bottom padding/margin after the certificate cards.

**Acceptance criteria:**

- Vertical gap between last certificate card and the Projects heading is proportional to other section gaps (~`3–4rem`)

---

### TASK 8 — Make Certificate cards clickable (Low impact, Low effort)

**Files:** `src/config.js` (add `url` field), `src/components/Certificates.jsx`

Add an optional `url` field to each certificate object. When present, wrap the card in an anchor tag opening in a new tab.

**Acceptance criteria:**

- Card with URL is fully clickable (cursor: pointer)
- Card without URL remains static
- Hover state gives visual feedback

---

### TASK 9 — Align job title consistently (Low impact, Very low effort) ✅ IMPLEMENTED

**Files:** `src/components/Hero.jsx`, `src/config.js`

Change the hardcoded `<h2>Quality Assurance Tech Lead</h2>` in Hero to read from a config export so it matches the About Me copy. Suggested canonical title: **"Quality Lead & Automation Architect"**.

**Acceptance criteria:**

- Single source of truth for the job title in `config.js`
- Hero and About Me (and any meta tags) use the same string

---

## 4. Priority Order for Implementation

| Priority | Task                                         | Files touched                   |
| -------- | -------------------------------------------- | ------------------------------- |
| 1        | ~~TASK 1 — Float animation on hero logo~~ ✅ | `Hero.jsx`                      |
| 2        | ~~TASK 2 — Hero CTA button~~ ✅              | `Hero.jsx`                      |
| 3        | ~~TASK 9 — Consistent job title~~ ✅         | `Hero.jsx`, `config.js`         |
| 4        | ~~TASK 3 — Collapse About Me accordion~~ ✅  | `AboutMe.jsx`                   |
| 5        | ~~TASK 6 — Tech-stack tags on projects~~ ✅  | `config.js`, `ProjectCard.jsx`  |
| 6        | ~~TASK 4 — Group skills by category~~ ✅     | `config.js`, `Skills.jsx`       |
| 7        | TASK 7 — Certificate whitespace fix          | `Certificates.jsx`              |
| 8        | TASK 8 — Clickable certificate cards         | `config.js`, `Certificates.jsx` |
| 9        | TASK 5 — Skill icon hover tooltips           | `Skills.jsx`                    |

---

## 5. Out of Scope (noted for future consideration)

- Contact form / email link section
- Blog or writing section
- Animations with Framer Motion
- SEO meta tags / Open Graph image
- Lighthouse performance audit
