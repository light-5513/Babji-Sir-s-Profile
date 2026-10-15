# Graph Report - Babji Sir Profile New  (2026-10-15)

## Corpus Check
- Large corpus: 225 files · ~3,906,316 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 82 nodes · 173 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Navigation, Expertise & Media
- Vite Build & Package Scripts
- Theme Provider & Entry Point
- Core Runtime Dependencies
- Development Toolchain
- Contact Section & Button UI
- Ventures Portfolio & Branding
- Testimonials & Card System
- About & Career Timeline
- Hero Section & Metric Stats

## God Nodes (most connected - your core abstractions)
1. `react` - 17 edges
2. `Card()` - 14 edges
3. `App()` - 12 edges
4. `lucide-react` - 9 edges
5. `framer-motion` - 8 edges
6. `Button()` - 8 edges
7. `Ventures()` - 6 edges
8. `scripts` - 5 edges
9. `Contact()` - 5 edges
10. `Home()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `ThemeToggle()`  [EXTRACTED]
  src/App.jsx → src/components/ThemeToggle.jsx
- `App()` --calls--> `About()`  [EXTRACTED]
  src/App.jsx → src/sections/About.jsx
- `App()` --calls--> `Contact()`  [EXTRACTED]
  src/App.jsx → src/sections/Contact.jsx
- `App()` --calls--> `Home()`  [EXTRACTED]
  src/App.jsx → src/sections/Home.jsx
- `App()` --calls--> `Testimonials()`  [EXTRACTED]
  src/App.jsx → src/sections/Testimonials.jsx

## Import Cycles
- None detected.

## Communities (12 total, 3 thin omitted)

### Community 0 - "Navigation, Expertise & Media"
Cohesion: 0.21
Nodes (12): lucide-react, react-icons, App(), AIAgentButton(), Navbar(), NavLinks, Expertise(), expertiseStages (+4 more)

### Community 1 - "Vite Build & Package Scripts"
Cohesion: 0.13
Nodes (14): name, private, scripts, build, dev, lint, preview, type (+6 more)

### Community 2 - "Theme Provider & Entry Point"
Cohesion: 0.31
Nodes (5): react-dom, ThemeContext, ThemeProvider(), useTheme(), ThemeToggle()

### Community 3 - "Core Runtime Dependencies"
Cohesion: 0.25
Nodes (8): dependencies, clsx, framer-motion, lucide-react, react, react-dom, react-icons, tailwind-merge

### Community 4 - "Development Toolchain"
Cohesion: 0.33
Nodes (6): devDependencies, autoprefixer, postcss, tailwindcss, vite, @vitejs/plugin-react

### Community 5 - "Contact Section & Button UI"
Cohesion: 0.47
Nodes (4): clsx, tailwind-merge, Button(), Contact()

### Community 6 - "Ventures Portfolio & Branding"
Cohesion: 0.70
Nodes (3): react, ToriiLogo(), Ventures()

### Community 7 - "Testimonials & Card System"
Cohesion: 0.70
Nodes (3): cn(), Card(), Testimonials()

### Community 8 - "About & Career Timeline"
Cohesion: 0.67
Nodes (3): framer-motion, About(), TimelineItem()

## Knowledge Gaps
- **28 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+23 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 32 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Ventures Portfolio & Branding` to `Navigation, Expertise & Media`, `Vite Build & Package Scripts`, `Theme Provider & Entry Point`, `Contact Section & Button UI`, `Testimonials & Card System`, `About & Career Timeline`, `Hero Section & Metric Stats`?**
  _High betweenness centrality (0.288) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Core Runtime Dependencies` to `Vite Build & Package Scripts`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Development Toolchain` to `Vite Build & Package Scripts`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Vite Build & Package Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._