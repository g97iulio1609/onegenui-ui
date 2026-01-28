# Heading

## Purpose

Display section headings with semantic HTML heading levels.

## When to Use

- Section titles
- Page headers
- Content hierarchy
- Dashboard section labels

## Props Reference

| Prop  | Type                                | Required | Description                 |
| ----- | ----------------------------------- | -------- | --------------------------- |
| text  | string                              | Yes      | Heading text content        |
| level | "h1" \| "h2" \| "h3" \| "h4" \| 1-4 | No       | Heading level (default: h2) |

## AI Generation Rules

1. Use level="h1" for page titles (use sparingly)
2. Use level="h2" for main sections (default)
3. Use level="h3" for subsections
4. Use level="h4" for minor headings
5. Can pass numeric level (1, 2, 3, 4) or string ("h1", "h2", etc.)

## Streaming Strategy

```jsonl
{
  "op": "add",
  "path": "/elements/heading1",
  "value": {
    "key": "heading1",
    "type": "Heading",
    "props": {
      "text": "Dashboard Overview",
      "level": "h1"
    },
    "children": []
  }
}
```

## Examples

```json
{
  "type": "Heading",
  "props": {
    "text": "Sales Performance",
    "level": "h2"
  }
}
```

### In Layout Context

```json
{
  "type": "Stack",
  "props": { "gap": "lg" },
  "children": ["heading1", "metrics-grid", "chart1"]
}
```
