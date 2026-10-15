# Graph Report - Babji Sir Profile New  (2026-10-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 83 nodes · 180 edges · 9 communities (7 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c22498ef`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Card
- App.jsx
- package.json
- dependencies
- Expertise.jsx
- devDependencies
- Media.jsx

## God Nodes (most connected - your core abstractions)
1. `react` - 18 edges
2. `Card()` - 14 edges
3. `App()` - 12 edges
4. `lucide-react` - 9 edges
5. `framer-motion` - 9 edges
6. `Button()` - 8 edges
7. `Ventures()` - 6 edges
8. `Contact()` - 5 edges
9. `Home()` - 5 edges
10. `useTheme()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Ventures()` --indirect_call--> `ToriiLogo()`  [INFERRED]
  src/sections/Ventures.jsx → src/components/ToriiLogo.jsx
- `Media()` --calls--> `Card()`  [EXTRACTED]
  src/sections/Media.jsx → src/components/Card.jsx
- `Testimonials()` --calls--> `Card()`  [EXTRACTED]
  src/sections/Testimonials.jsx → src/components/Card.jsx
- `App()` --calls--> `About()`  [EXTRACTED]
  src/App.jsx → src/sections/About.jsx
- `App()` --calls--> `Contact()`  [EXTRACTED]
  src/App.jsx → src/sections/Contact.jsx

## Import Cycles
- None detected.

## Communities (9 total, 2 thin omitted)

### Community 0 - "Card"
Cohesion: 0.23
Nodes (13): clsx, lucide-react, tailwind-merge, Button(), cn(), Card(), ToriiLogo(), About() (+5 more)

### Community 1 - "App.jsx"
Cohesion: 0.24
Nodes (11): framer-motion, react, App(), AIAgentButton(), Navbar(), NavLinks, ThemeContext, ThemeProvider() (+3 more)

### Community 2 - "package.json"
Cohesion: 0.12
Nodes (15): name, private, scripts, build, dev, lint, preview, type (+7 more)

### Community 3 - "dependencies"
Cohesion: 0.25
Nodes (8): dependencies, clsx, framer-motion, lucide-react, react, react-dom, react-icons, tailwind-merge

### Community 4 - "Expertise.jsx"
Cohesion: 0.38
Nodes (5): useExpertiseScroll(), Expertise(), expertiseStages, traitData, traits

### Community 5 - "devDependencies"
Cohesion: 0.33
Nodes (6): devDependencies, autoprefixer, postcss, tailwindcss, vite, @vitejs/plugin-react

### Community 6 - "Media.jsx"
Cohesion: 0.67
Nodes (3): react-icons, Media(), OracleAcademyIcon()

## Knowledge Gaps
- **28 isolated node(s):** `ThemeContext`, `NavLinks`, `build`, `dev`, `lint` (+23 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 31 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.jsx` to `Card`, `package.json`, `Expertise.jsx`, `Media.jsx`?**
  _High betweenness centrality (0.304) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **What connects `ThemeContext`, `NavLinks`, `build` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._