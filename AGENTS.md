# Nanak Migration

Custom Nanak Migration Group public website — Next.js App Router, React, and Tailwind CSS.

## Development Server

```bash
pnpm install
pnpm dev
```

Dev server runs on port **5173** by default.

## Project Structure

- `app/` — Next.js App Router pages and layouts
- `src/` — Shared components, data, theme, and lib
- `public/` — Static assets
- `package.json` — Dependencies and scripts (`dev`, `build`, `start`)
- `next.config.ts` — Next.js configuration
- `tsconfig.json` — TypeScript configuration

## Dependencies

- Runtime: React 19, Next.js 15
- Motion: Framer Motion, Theatre, Anime.js
- Styling: Tailwind CSS v4
- Formatting: oxfmt

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings.
- Ensure JSX tags are closed and braces are balanced.
