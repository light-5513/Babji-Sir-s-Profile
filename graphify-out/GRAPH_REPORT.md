# Graph Report - Babji Sir Profile New  (2026-10-14)

## Corpus Check
- 32 files · ~321,715 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 94 nodes · 177 edges · 21 communities (7 shown, 14 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: unavailable for semantic-agent extraction (graphify recorded 0 input · 0 output)

## Community Hubs (Navigation)
- Application Shell and UI
- Shared Components and Sections
- Build Tooling and Scripts
- Runtime Dependencies
- Development Dependencies
- Expertise Section
- Media Section
- HTML Entry Point
- Profile Portrait Asset
- Automation Anywhere Partner Logo
- Claude Partner Logo
- Mile2 Partner Badge
- OpenAI Partner Logo
- Pega Partner Logo
- Red Hat Partner Logo
- Red Hat Training Graphic
- SN Partner Network Logo
- Technical Hub Logo
- Toriiminds Logo

## God Nodes (most connected - your core abstractions)
1. `react` - 17 edges
2. `Card()` - 16 edges
3. `App()` - 12 edges
4. `lucide-react` - 9 edges
5. `framer-motion` - 8 edges
6. `Button()` - 8 edges
7. `Ventures()` - 6 edges
8. `scripts` - 5 edges
9. `Contact()` - 5 edges
10. `Expertise()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `About()`  [EXTRACTED]
  src/App.jsx → src/sections/About.jsx
- `App()` --calls--> `Contact()`  [EXTRACTED]
  src/App.jsx → src/sections/Contact.jsx
- `App()` --calls--> `Expertise()`  [EXTRACTED]
  src/App.jsx → src/sections/Expertise.jsx
- `App()` --calls--> `Home()`  [EXTRACTED]
  src/App.jsx → src/sections/Home.jsx
- `App()` --calls--> `Media()`  [EXTRACTED]
  src/App.jsx → src/sections/Media.jsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Industry Partner Accreditation Network** — public_partners_openai_square_png, public_partners_claude_png, public_partners_redhat_png, public_partners_pega_png, public_partners_mile2_authorized_training_center_8x_enhanced_png, public_partners_automation_anywhere_logo_automation_anywhere_control_room_edureka_png, public_partners_sno_partner_network_logo_png [EXTRACTED 1.00]

## Communities (21 total, 14 thin omitted)

### Community 0 - "Application Shell and UI"
Cohesion: 0.21
Nodes (12): lucide-react, react, react-dom, App(), AIAgentButton(), Navbar(), NavLinks, ThemeContext (+4 more)

### Community 1 - "Shared Components and Sections"
Cohesion: 0.26
Nodes (12): clsx, framer-motion, Button(), cn(), Card(), ToriiLogo(), About(), TimelineItem() (+4 more)

### Community 2 - "Build Tooling and Scripts"
Cohesion: 0.12
Nodes (15): name, private, scripts, build, dev, lint, preview, type (+7 more)

### Community 3 - "Runtime Dependencies"
Cohesion: 0.25
Nodes (8): dependencies, clsx, framer-motion, lucide-react, react, react-dom, react-icons, tailwind-merge

### Community 4 - "Development Dependencies"
Cohesion: 0.33
Nodes (6): devDependencies, autoprefixer, postcss, tailwindcss, vite, @vitejs/plugin-react

### Community 5 - "Expertise Section"
Cohesion: 0.50
Nodes (4): Expertise(), LargeRadarChart(), subExpertiseItems, traits

### Community 6 - "Media Section"
Cohesion: 0.67
Nodes (3): react-icons, Media(), OracleAcademyIcon()

## Knowledge Gaps
- **39 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+34 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 43 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Application Shell and UI` to `Shared Components and Sections`, `Build Tooling and Scripts`, `Expertise Section`, `Media Section`?**
  _High betweenness centrality (0.213) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Build Tooling and Scripts`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Development Dependencies` to `Build Tooling and Scripts`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _39 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Build Tooling and Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._