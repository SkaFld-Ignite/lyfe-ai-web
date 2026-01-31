# Codebase Structure

## Route Groups (Next.js App Router)
```
app/
├── (marketing)/           # Public pages (landing, pricing, blog, auth)
│   ├── auth/             # Authentication flows
│   │   ├── login/
│   │   ├── sign-up/
│   │   ├── forgot-password/
│   │   └── update-password/
│   ├── blog/             # MDX blog system
│   │   └── posts/        # MDX blog posts
│   ├── pricing/
│   ├── about/
│   └── terms/
├── (authenticated)/       # Protected dashboard (requires active subscription)
│   ├── dashboard/
│   │   ├── billing-details/
│   │   └── example-nested-page/
│   ├── checkout/         # Polar checkout route handler
│   └── portal/           # Polar customer portal route
├── api/
│   └── webhook/
│       └── polar/        # Polar webhook handler
└── og/                   # Open Graph image generation
```

## Library Layer (`lib/`)
```
lib/
├── db/
│   ├── server.ts         # Server-side Supabase client (cookies)
│   ├── client.ts         # Browser-side Supabase client
│   ├── middleware.ts     # Session refresh middleware helper
│   ├── service-role.ts   # Admin client for webhook handlers (bypasses RLS)
│   └── actions.ts        # Server actions for user/subscription data
├── polar.ts              # Polar SDK client configuration
├── blog.ts               # Blog utilities (MDX processing)
└── utils.ts              # General utilities (cn function, etc.)
```

## Components
```
components/
├── ui/                   # shadcn/ui primitives
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── sidebar.tsx
│   └── ... (more Radix-based components)
├── checkout-button.tsx   # Polar checkout integration
├── pricing-card.tsx      # Subscription pricing display
├── logo.tsx
└── ... (feature components)
```

## Other Important Directories
```
types/
└── db.ts                 # Generated Supabase types

supabase/
└── migrations/           # SQL migrations

hooks/                    # React hooks

scripts/
└── seed.ts               # Polar product seeding script

public/                   # Static assets
```

## Key Files
- `middleware.ts` - Session refresh on every request
- `app/(authenticated)/layout.tsx` - Auth + subscription enforcement
- `app/api/webhook/polar/route.ts` - Subscription lifecycle events
- `app/(authenticated)/checkout/route.ts` - Polar checkout sessions
