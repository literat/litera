# CLAUDE.md

Guidance for AI agents working in this repository.

## Project

Litera.me — a **Next.js App Router** application (React, TypeScript strict mode).

- **Auth:** NextAuth
- **Database:** Prisma ORM (schema at `src/database/schema.prisma`)
- **Styling:** SCSS Modules via `sass-embedded`
- **Images:** Cloudinary (`next-cloudinary`)
- **Hosting:** Vercel

## Package Manager: Yarn

Always use **`yarn`** to run scripts and manage dependencies — never `npm` or `npx`.

```bash
yarn dev                  # start dev server (Turbopack)
yarn build                # production build
yarn types                # TypeScript type-check (tsc, no emit)
yarn lint                 # eslint + textlint
yarn test                 # runs lint, format check, and type-check
yarn format:fix           # prettier --write
yarn prisma generate      # regenerate Prisma client
yarn prisma migrate dev   # run migrations
yarn prisma db seed       # seed the database
```

Note: `.yarnrc.yml` sets `enableScripts: false` and a 7-day minimum-age gate on new packages.

## Before Finishing a Change

Run `yarn test` and make sure it passes — it runs linting, format checking, and type-checking:

```bash
yarn test
```

If you touch the Prisma schema, run `yarn prisma generate` and commit the result.

## Conventions

- **Imports:** use the `@local/*` path alias for `src/*` (for example, `import { Inner } from '@local/ui/Inner'`).
- **Components:** one folder per component with `Component.tsx`, `Component.module.scss`, and an `index.ts` barrel that re-exports it.
- **App Router:** routes live in `src/app` and use route groups (`(home)`, `(homepage)`). Server Components by default; add `'use client'` only when needed. Typed routes (`typedRoutes`) are enabled.
- **Server Actions:** feature-level mutations are `'use server'` files under a feature’s `actions/` folder (see below).
- **Commits:** Conventional Commits (enforced by commitlint on a Husky hook).

## Layout

```
src/
  app/         App Router routes (route groups, layouts, pages)
  ui/          Reusable UI primitives (barrel-exported)
  components/  Shared composite components (for example, Form)
  features/    Feature modules (auth, fits, homepage) incl. server actions
  database/    Prisma schema, client, seed & migrations
```

### Features (`src/features/`)

Each feature is a self-contained module organized into layers. Not every feature uses every layer — add one only when needed.

| Layer           | Responsibility                                                               |
| --------------- | ---------------------------------------------------------------------------- |
| `actions/`      | Server Actions (`'use server'`) — the mutation/entry boundary called from UI |
| `services/`     | Configuration and framework wiring (for example, NextAuth setup)             |
| `repositories/` | Data access — the only layer that touches the Prisma `db` client             |
| `ui/`           | Feature-specific React components (barrel-exported via `index.ts`)           |
| `utils/`        | Pure helpers scoped to the feature                                           |

Rule of thumb: UI calls Actions, Actions orchestrate + call Repositories, Repositories own all DB access. Keep Prisma out of `ui/` and `actions/`.
