# AGENTS.md

Guidelines for AI agents working on this codebase.

## Project Overview

Personal portfolio website for Matt Kurtti. React 19 + TypeScript, Vite 6, Tailwind CSS 4, i18next (EN/JP bilingual). Single-page app with anchor navigation, deployed on Render.com. Package manager: Yarn.

## Dev Commands

```bash
yarn dev       # Start Vite dev server
yarn build     # TypeScript check + Vite production build
yarn lint      # ESLint
yarn preview   # Preview production build locally
```

## Architecture

- State lives in `src/App.tsx` and flows down as props — no Context API or external state manager
- All components are functional components using hooks
- No routing library — navigation uses `<a href="#sectionId">` anchor links
- No backend — purely static site; all content is hardcoded in components and JSON locales

## Component Conventions

- One component per file in `src/components/`, PascalCase filenames (e.g., `Navbar.tsx`)
- Every component with props defines a `{ComponentName}Props` TypeScript interface at the top of the file, before the component
- Setter prop type: `React.Dispatch<React.SetStateAction<string>>`
- Component type: `React.FC<PropsInterface>`

## TypeScript Rules

- Strict mode is enabled (`"strict": true` in `tsconfig.app.json`)
- `noUnusedLocals` and `noUnusedParameters` are enforced — remove dead imports and variables
- Target: ES2020, module: ESNext, JSX: react-jsx

## Styling Rules

- Tailwind CSS only — no CSS modules, no styled-components, no inline `style` props
- Custom color theme is defined in `src/index.css` using the `@theme` directive; use those variables
- Dark mode is toggled via a `data-theme=dark` attribute on the root container and accessed via the `dark:` Tailwind prefix
- Mobile-first responsive design with standard breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Prettier with `prettier-plugin-tailwindcss` auto-sorts class names — run Prettier before committing

## i18n Rules

- All user-facing strings must use `t("namespace.key")` via the `useTranslation()` hook
- Namespaces: `navbar`, `hero`, `about`, `skills`, `projects`
- Use kebab-case for multi-word keys (e.g., `findadoc-title`)
- Always update both `src/locales/en.json` and `src/locales/jp.json` together — never add a key to one without the other

## Image & Asset Rules

- Static assets go in `/public/`, referenced as `/filename.ext` (no import needed)
- Critical images (e.g., hero) should be preloaded via the `ImagePreloader` component to avoid flash
- Always include descriptive `alt` text on `<img>` elements
- Supported formats: `.png`, `.jpg`, `.JPG`, `.webp`, `.svg`

## Naming Conventions

- Variables and functions: camelCase
- Boolean state variables: `isVisible`, `isLoaded`, `hamburgerOpen`
- Event handlers: `handle{Action}` (e.g., `handleChangeLanguage`, `handleClickOutside`)
- Array map keys: `key={index}` when no unique identifier is available

## Animation Patterns

- Opacity transitions: conditionally apply `opacity-0` / `opacity-100` based on state
- Transition class: `transition-opacity duration-1400 ease-in-out`
- Menu open/close: toggle between `max-h-0` and `max-h-60` using `transition-all duration-300 ease-in-out`

## Content Update Locations

| Content | Location |
|---------|----------|
| UI strings (EN) | `src/locales/en.json` |
| UI strings (JP) | `src/locales/jp.json` |
| Skills icons | Arrays in `src/components/Skills.tsx` |
| Projects | JSX in `src/components/Projects.tsx` |
| Images | `/public/` directory |
