# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### tracker-loc (react-vite)
- **Path**: `artifacts/tracker-loc/`
- **Preview**: `/` (root)
- **Description**: Tracker Loc ID — Indonesian phone location tracking service site (Jasa Melacak Lokasi Nomor Telepon HP). A frontend-only landing page with dark/light theme toggle, device info sections, interactive leaflet map, and floating WhatsApp button.
- **Key components**: `src/components/hlr/` — all feature components (navbar, hero, about, services, why-choose-us, features, comparison table, device info, FAQ, footer, floating WhatsApp)
- **Content**: JSON data files in `src/content/` (about.json, faq.json, footer.json, services.json)
- **Hooks**: `src/hooks/use-device-info.ts` — reads device/browser info via Web APIs

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
