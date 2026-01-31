# Code Style and Conventions

## TypeScript
- Strict mode enabled
- Use `@/*` path alias for imports (maps to project root)
- Target ES2017 with ESNext modules

## Prettier Configuration
- No semicolons (`semi: false`)
- Double quotes (`singleQuote: false`)
- 2-space indentation
- Trailing commas (ES5 style)
- LF line endings
- Import sorting via `@ianvs/prettier-plugin-sort-imports`

## Import Order (enforced by Prettier)
1. React imports
2. Next.js imports
3. Third-party modules
4. Types (`@/types/`)
5. Config (`@/config/`)
6. Lib (`@/lib/`)
7. Hooks (`@/hooks/`)
8. UI Components (`@/components/ui/`)
9. Other Components (`@/components/`)
10. Registry, Styles, App
11. Relative imports

## ESLint
- Extends `next/core-web-vitals` and `next/typescript`
- Uses flat config format (eslint.config.mjs)

## React/Next.js Patterns
- Server Components by default (App Router)
- Client Components marked with `"use client"`
- Server Actions for mutations
- Route handlers for API endpoints

## Database Conventions (Supabase)
- Always enable RLS on new tables
- Use snake_case for tables/columns
- Use lowercase SQL keywords
- Add comments explaining policies
- Migrations in `supabase/migrations/` with format: `YYYYMMDDHHmmss_description.sql`

## Component Conventions
- UI primitives in `components/ui/`
- Feature components in `components/`
- Use Radix primitives via shadcn/ui
- CVA (class-variance-authority) for component variants
