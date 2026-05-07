# Spanish Study App — 1st Year 2025–26

A Spanish study website for 1st Year Junior Cycle students, modelled on the Geography Study App. Contains all class notes, flashcards, quizzes, and a retrieval practice journal for QP1 Units 1–5.

## Run & Operate

- `pnpm --filter @workspace/spanish-study run dev` — run the Spanish Study App (frontend only)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (artifacts/spanish-study)
- API: Express 5 (artifacts/api-server)
- DB: PostgreSQL + Drizzle ORM (not yet used — app is frontend-only)
- Styling: Custom CSS (no Tailwind used in main app — pure CSS in index.css)

## Where things live

- `artifacts/spanish-study/src/App.tsx` — entire Spanish study app (data + UI)
- `artifacts/spanish-study/src/index.css` — Spanish-themed CSS
- `lib/api-spec/openapi.yaml` — API spec (health check only)

## Product

A study hub for 1st Year Spanish students with:
- **5 units** (QP1): Bienvenidos, En el Aula, Los Números, Todo sobre Mí, Mi Familia
- Each unit has: **Notes** (vocabulary tables, grammar explanations, cultural content), **Flashcards** (flip-card memory tool), **Quiz** (10 MCQ with explanations), **Retrieval Journal** (tracks revision sessions with dates, stars, checkboxes)
- Spanish flag-themed dark navy/red/gold colour scheme
- Quiz score tracker in header

## Architecture decisions

- Frontend-only app — no backend needed for a study resource site
- All content is hardcoded in App.tsx as a typed data structure (`TOPICS`)
- Retrieval journal state persisted to localStorage per unit
- Pure CSS (no Tailwind) to match the Geography Study App pattern
- Single App.tsx file keeps the content and UI co-located for easy editing

## User preferences

- Style should be similar to the Geography Study App (sidebar, tabs, cards)
- Each unit should be separated with subtopics
- Include a Retrieval Journal section matching the RJ Spanish PDF

## Gotchas

- Content lives entirely in the `TOPICS` constant in App.tsx — edit there to update notes/flashcards/quiz
- Adding a new unit: add a key to `TOPICS` and it will appear automatically in sidebar and home grid
