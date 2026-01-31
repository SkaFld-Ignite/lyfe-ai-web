# Task Completion Checklist

Run these commands before marking a task complete:

## 1. Code Quality Checks
```bash
pnpm lint             # Must pass with no errors
pnpm format:check     # Verify formatting is correct
```

## 2. Fix Any Issues
```bash
pnpm lint:fix         # Auto-fix linting issues
pnpm format:write     # Auto-format code
```

## 3. Build Verification
```bash
pnpm build            # Ensure production build succeeds
```

## 4. Type Safety
- Ensure no TypeScript errors in changed files
- Run `pnpm build` to catch type errors

## 5. Database Changes
If schema was modified:
```bash
pnpm generate-types   # Regenerate types/db.ts
```

## 6. Testing Recommendations
- Test in development: `pnpm dev`
- Verify auth flows work correctly
- Check subscription status handling
- Test webhook endpoints if modified

## Quality Gates
- [ ] No ESLint errors
- [ ] Code is properly formatted
- [ ] Production build succeeds
- [ ] Types are up to date
- [ ] RLS policies are in place for new tables
