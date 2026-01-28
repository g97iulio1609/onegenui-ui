# AGENTS.md - @onegenui/ui

Core UI primitives for OneGenUI. Base components used across the framework.

## Purpose

This package provides foundational UI components:
- **Layout**: Grid, Flex, Container, Spacer
- **Typography**: Text, Heading, Label
- **Forms**: Input, Button, Select, Checkbox
- **Data Display**: Card, Table, List, Badge
- **Status**: Alert, Progress, Skeleton
- **Media**: Image, Video, Audio

## File Structure

```
src/
├── index.ts              # Public exports
├── definitions.ts        # Component definitions for catalog
├── layout/               # Layout components
├── typography/           # Text components
├── forms/                # Form inputs
├── data-display/         # Cards, tables, lists
├── status/               # Alerts, progress, loading states
├── media/                # Media components
└── utils/
    ├── cn.ts             # Class name utility (clsx + tailwind-merge)
    └── data-utils.ts     # Data transformation utilities
```

## Key Exports

```typescript
// All component exports
export * from './layout';
export * from './typography';
export * from './forms';
export * from './data-display';
export * from './status';
export * from './media';

// Component definitions for catalog registration
export { uiDefinitions } from './definitions';

// Utilities
export { cn } from './utils/cn';
```

## Component Pattern

Each component follows this structure:

```typescript
// ComponentName/
// ├── component.tsx   # React implementation
// ├── schema.ts       # Zod schema + definition
// └── index.ts        # Public exports

// schema.ts
export const CardPropsSchema = z.object({
  title: z.string().optional(),
  variant: z.enum(['default', 'outlined', 'elevated']).optional(),
});

export const CardDefinition = {
  name: 'Card' as const,
  props: CardPropsSchema,
  description: 'Container for grouped content',
  hasChildren: true,
};

// component.tsx
export const Card = memo(function Card({ element, children }: ComponentRenderProps) {
  const { title, variant = 'default' } = element.props as CardProps;
  return (
    <div className={cn('card', VARIANT_STYLES[variant])}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
});
```

## Development Guidelines

- Use `cn()` utility for all className composition
- Wrap all components with `memo()`
- Support `children` for container components
- Define Zod schemas with `.describe()` for AI context
- Use Tailwind CSS for styling
- Use Framer Motion for animations

## Future: Package Consolidation

From `toBeta.md`, this package will merge with `@onegenui/components` and `@onegenui/viz`:

```
@onegenui/ui (consolidated)
├── primitives/     # Current ui package
├── domain/         # From components package
└── visualization/  # From viz package
```

## Testing

```bash
pnpm --filter @onegenui/ui type-check
pnpm --filter @onegenui/ui lint
```

## Dependencies

- `@onegenui/core` (workspace)
- `@onegenui/react` (workspace)
- `framer-motion` ^12.x
- `clsx`, `tailwind-merge` for styling
- React ^19.0.0 (peer)
- `lucide-react` (peer, icons)
- `recharts`, `lightweight-charts` (peer, optional)
