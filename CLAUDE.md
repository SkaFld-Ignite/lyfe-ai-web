# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 subscription SaaS starter built with Supabase (auth/database) and Polar (payments). Based on the "Cult Polar Starter" template.

## Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack (http://localhost:3000)
pnpm build            # Production build
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Auto-fix lint issues
pnpm format:check     # Check formatting with Prettier
pnpm format:write     # Auto-format code

# Database
pnpx supabase db link                    # Link to Supabase project
pnpx supabase db push                    # Push migrations to database
pnpm generate-types                      # Regenerate types/db.ts from schema

# Polar
pnpm polar:seed       # Create subscription products in Polar (sandbox mode)
```

## Architecture

### Route Groups
- `app/(marketing)/` - Public pages: landing, pricing, blog, auth flows
- `app/(authenticated)/` - Protected dashboard requiring active subscription

### Authentication & Authorization Flow
1. Supabase handles auth (email/password)
2. Middleware (`middleware.ts`) refreshes sessions on every request
3. `(authenticated)/layout.tsx` enforces:
   - User must be logged in → redirects to `/auth/login`
   - User must have `active` or `trialing` subscription → redirects to `/pricing`

### Payment Integration (Polar)
- **Checkout**: `app/(authenticated)/checkout/route.ts` creates Polar checkout sessions
- **Webhooks**: `app/api/webhook/polar/route.ts` handles subscription lifecycle events
- **Service Role**: `lib/db/service-role.ts` updates subscriptions table via webhooks (bypasses RLS)

### Database Layer (`lib/db/`)
| File | Purpose |
|------|---------|
| `server.ts` | Server-side Supabase client (cookies) |
| `client.ts` | Browser-side Supabase client |
| `middleware.ts` | Session refresh middleware helper |
| `service-role.ts` | Admin client for webhook handlers |
| `actions.ts` | Server actions for user/subscription data |

### Polar Environment
Set `NEXT_PUBLIC_POLAR_ENV=production` for live payments, otherwise defaults to sandbox.

## Environment Variables

Required:
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
POLAR_ACCESS_TOKEN
POLAR_WEBHOOK_SECRET
```

Optional (for seeding):
```
POLAR_ORG_ID
```

## Database Schema

Two tables with RLS enabled:
- `users` - Mirrors `auth.users`, auto-populated via trigger on signup
- `subscriptions` - Polar subscription data linked to users

Types are generated to `types/db.ts`. Regenerate after schema changes.

## UI Components

Uses shadcn/ui (new-york style) with Radix primitives. Components in `components/ui/`. Add new components via:
```bash
pnpx shadcn@latest add <component-name>
```

## Blog

MDX-based blog system. Posts live in `app/(marketing)/blog/posts/` with frontmatter:
```yaml
---
title: Post Title
publishedAt: YYYY-MM-DD
summary: Short description
category: optional
---
```

## Supabase Migrations

Create migrations in `supabase/migrations/` with format: `YYYYMMDDHHmmss_description.sql`

Key conventions (from .cursor/rules):
- Always enable RLS on new tables
- Use snake_case for tables/columns
- Use lowercase SQL keywords
- Add comments explaining policies
