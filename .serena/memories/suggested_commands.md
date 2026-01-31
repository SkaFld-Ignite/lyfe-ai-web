# Suggested Commands

## Development
```bash
pnpm dev              # Start dev server with Turbopack (http://localhost:3000)
pnpm build            # Production build
pnpm start            # Start production server
```

## Code Quality
```bash
pnpm lint             # Run ESLint
pnpm lint:fix         # Auto-fix lint issues
pnpm format:check     # Check formatting with Prettier
pnpm format:write     # Auto-format code
```

## Database (Supabase)
```bash
pnpx supabase db link                    # Link to Supabase project
pnpx supabase db push                    # Push migrations to database
pnpm generate-types                      # Regenerate types/db.ts from schema
```

## Payments (Polar)
```bash
pnpm polar:seed       # Create subscription products in Polar (sandbox mode)
```

## UI Components (shadcn/ui)
```bash
pnpx shadcn@latest add <component-name>  # Add new shadcn component
```

## System Commands (macOS/Darwin)
```bash
# Standard Unix commands work on Darwin
ls -la               # List files with details
grep -r "pattern" .  # Search recursively
find . -name "*.ts"  # Find files by pattern
```
