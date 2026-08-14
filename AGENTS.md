# AGENTS.md

Guidelines for AI agents working on this codebase.

## Project Overview

Personal portfolio website for Matt Kurtti. React 19 + TypeScript, Vite 6, Tailwind CSS 4, i18next (EN/JA bilingual). Single-page app with anchor navigation, deployed on Render.com. Package manager: Yarn.

## Dev Commands

```bash
yarn dev            # Start Vite dev server
yarn build          # TypeScript check + Vite production build
yarn lint           # ESLint
yarn format         # Prettier, writes changes
yarn format:check   # Prettier, check only
yarn preview        # Preview production build locally
```

## Architecture

- State lives in `src/App.tsx` and flows down as props — no Context API or external state manager. Cross-cutting state (theme, language) lives in `src/hooks/` and is called from `App.tsx`.
- All components are functional components using hooks
- No routing library — navigation uses `<a href="#sectionId">` anchor links
- No backend — purely static site; all content is hardcoded in components and JSON locales
- Structural content (work items, timeline entries, performances, contact links) lives in typed arrays in `src/data/`, joined to translated copy in the locales by a stable `id`. Sections `.map()` over these arrays rather than repeating JSX per item — see `src/components/Work.tsx` and `src/data/work.ts` for the pattern.

## Component Conventions

- One component per file in `src/components/`, PascalCase filenames (e.g., `Navbar.tsx`)
- Icon components live in `src/components/icons/`, one SVG per file, `aria-hidden="true"` and `focusable="false"` on the `<svg>`
- Every component with props defines a `{ComponentName}Props` TypeScript interface at the top of the file, before the component
- Toggle/setter props use a callback (`onToggleTheme: () => void`, `onChangeLanguage: (language: Language) => void`), not `React.Dispatch<React.SetStateAction<...>>` — callbacks let the child request an action without being able to set arbitrary state
- Use the `Theme` / `Language` union types from `src/types.ts` instead of bare `string` wherever a value is one of a fixed set
- Component type: `React.FC<PropsInterface>`

## TypeScript Rules

- Strict mode is enabled (`"strict": true` in `tsconfig.app.json`)
- `noUnusedLocals` and `noUnusedParameters` are enforced — remove dead imports and variables
- Target: ES2020, module: ESNext, JSX: react-jsx
- `src/i18next.d.ts` types `t()` keys against `en.json`'s shape — a typo'd or removed key fails the build

## Styling Rules

- Tailwind CSS only — no CSS modules, no styled-components, no inline `style` props
- Custom colors, fonts, type roles, radii and the content-width token are defined via the `@theme static` directive in `src/index.css`; use those tokens (`bg-surface`, `font-display`, `text-section`, `rounded-card`, `max-w-shell`, etc.) rather than Tailwind's defaults or one-off arbitrary values
- Dark mode: color tokens are declared once in `@theme` with light values, then re-valued in an unlayered `[data-theme="dark"]` rule in the same file. Because Tailwind utilities compile to `var(--color-*)`, this makes `bg-surface` (no `dark:` prefix needed) theme-aware automatically. The `@custom-variant dark` is still available for the rare case a token swap can't express. `data-theme` is set on `document.documentElement` by `src/hooks/useTheme.ts`, not on a component-rendered element.
- A handful of tokens are intentionally **constant** across both themes (`brand`, `accent`, `gold`, the `deep`/`deeper` dark-scene colors) — check `src/index.css` before assuming a color should flip.
- `.prettierrc` points `tailwindStylesheet` at `src/index.css` so the class sorter can see custom tokens — keep that in sync if the stylesheet moves.
- Mobile-first responsive design with standard breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- The page shell (`mx-auto max-w-shell px-5 sm:px-8 lg:px-12 xl:px-16`) and standard vertical rhythm live in `src/components/Section.tsx` — wrap new top-level sections in it rather than repeating the classes
- Prettier with `prettier-plugin-tailwindcss` auto-sorts class names — run `yarn format` before committing

## i18n Rules

- All user-facing strings must use `t("namespace.key")` via the `useTranslation()` hook
- Namespaces: `common`, `nav`, `hero`, `work`, `path`, `music`, `contact`, `footer`
- Use kebab-case for multi-word keys (e.g., `findadoc-title`)
- Locale files are `src/locales/en.json` and `src/locales/ja.json` (ISO 639-1 `ja`, not the country code `jp`) — always update both together, never add a key to one without the other. `src/i18nconfig.ts` type-checks `ja.json` against `en.json`'s shape at build time, so a missing key is a compile error, not a silent English fallback.
- Structural, non-prose values (URLs, image paths, date years, presentation variants) belong in `src/data/*.ts`, not in the locale files — see "Architecture" above
- Language state lives in `src/hooks/useLanguage.ts`, which is also responsible for syncing `document.documentElement.lang`, `document.title`, and the meta description on every change — don't duplicate that logic elsewhere

## Image & Asset Rules

- Static assets go in `/public/`, referenced as `/filename.ext` (no import needed)
- The hero image is preloaded via a `<link rel="preload">` in `index.html` and rendered eagerly with `fetchPriority="high"` — do not reintroduce a render-blocking preloader component in front of the whole app
- Always include descriptive `alt` text on `<img>` elements (empty `alt=""` only for genuinely decorative images, e.g. the performance-card thumbnails, where an adjacent heading already carries the meaning)
- The navy "MK" brand mark is a component (`src/components/LogoMark.tsx`), not an image — it uses real Space Grotesk and scales via a `size` prop, so use it rather than adding a bitmap logo. The favicon (`public/mk-icon.svg`) and apple-touch-icon (`public/mk-icon-180.png`) are standalone copies of the same mark; if the mark's color or radius changes, update all three.
- Supported formats: `.png`, `.jpg`, `.webp`, `.svg`

## Naming Conventions

- Variables and functions: camelCase
- Boolean state variables: `isVisible`, `isLoaded`, `isMenuOpen`
- Event handlers: `handle{Action}` (e.g., `handleClickOutside`); callback props are named `on{Action}` (e.g., `onToggleTheme`)
- Array map keys: use the item's stable `id` from `src/data/*.ts`, not the array index

## Animation Patterns

- Opacity transitions: conditionally apply `opacity-0` / `opacity-100` based on state
- Menu open/close: toggle between `max-h-0` and a fixed `max-h-*` using `transition-all duration-300 ease-in-out`; a closed menu must also get `invisible pointer-events-none` (and `inert` while closed) so its links aren't keyboard-focusable when hidden
- Respect `prefers-reduced-motion` for anything non-essential (see the `@media` block in `src/index.css`)

## Content Update Locations

| Content              | Location                                                       |
| -------------------- | -------------------------------------------------------------- |
| UI strings (EN)      | `src/locales/en.json`                                          |
| UI strings (JA)      | `src/locales/ja.json`                                          |
| Selected work items  | `src/data/work.ts` (structure) + `work.*` keys (copy)          |
| Career timeline      | `src/data/timeline.ts` (structure) + `path.*` keys (copy)      |
| Performances         | `src/data/performances.ts` (structure) + `music.*` keys (copy) |
| Contact links        | `src/data/links.ts` (structure) + `contact.*` keys (copy)      |
| Nav links            | `src/data/navigation.ts` (structure) + `nav.*` keys (copy)     |
| Theme tokens / fonts | `src/index.css`                                                |
| Images               | `/public/` directory                                           |
