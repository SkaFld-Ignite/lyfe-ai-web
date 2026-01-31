# Project Overview: lyfe-ai-web

## Purpose
Next.js 15 subscription SaaS starter built with Supabase (auth/database) and Polar (payments). Based on the "Cult Polar Starter" template.

## Tech Stack
- **Framework**: Next.js 15.3 with App Router and Turbopack
- **Language**: TypeScript 5 (strict mode)
- **Auth/Database**: Supabase (SSR client, service role for webhooks)
- **Payments**: Polar (subscription management)
- **Styling**: Tailwind CSS 4 with tw-animate-css
- **UI Components**: shadcn/ui (new-york style) with Radix primitives
- **State/Validation**: Zod for schema validation
- **Animation**: Motion (Framer Motion successor)
- **Blog**: MDX via next-mdx-remote
- **Package Manager**: pnpm

## Key Dependencies
- `@polar-sh/nextjs` + `@polar-sh/sdk` - Payment integration
- `@supabase/ssr` + `@supabase/supabase-js` - Auth and database
- `lucide-react` - Icon library
- `date-fns` - Date utilities
- `sonner` - Toast notifications

## Environment Variables Required
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
POLAR_ACCESS_TOKEN
POLAR_WEBHOOK_SECRET
POLAR_ORG_ID (optional, for seeding)
```

## Database Schema
Two main tables with RLS enabled:
- `users` - Mirrors auth.users, auto-populated via trigger
- `subscriptions` - Polar subscription data with status enum (active, trialing, canceled, etc.)
