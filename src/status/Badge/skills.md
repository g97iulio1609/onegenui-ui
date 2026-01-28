# Badge

## Purpose

Small inline status indicator or label.

## When to Use

- Status indicators (active, pending, completed)
- Category labels
- Count indicators
- Inline tags

## Props Reference

| Prop    | Type                                                      | Required | Description         |
| ------- | --------------------------------------------------------- | -------- | ------------------- |
| text    | string                                                    | Yes      | Badge text          |
| variant | "default" \| "success" \| "warning" \| "danger" \| "info" | No       | Badge color variant |

## AI Generation Rules

1. Use variant="success" for positive states (active, completed)
2. Use variant="danger" for negative states (error, failed)
3. Use variant="warning" for cautionary states (pending, expiring)
4. Use variant="info" for neutral highlights
5. Keep text short (1-2 words)

## Streaming Strategy

```jsonl
{
  "op": "add",
  "path": "/elements/badge1",
  "value": {
    "key": "badge1",
    "type": "Badge",
    "props": {
      "text": "Active",
      "variant": "success"
    },
    "children": []
  }
}
```

## Examples

```json
{
  "type": "Badge",
  "props": {
    "text": "New",
    "variant": "info"
  }
}
```

### Status Variants

```json
// Success state
{"type": "Badge", "props": {"text": "Completed", "variant": "success"}}

// Warning state
{"type": "Badge", "props": {"text": "Pending", "variant": "warning"}}

// Danger state
{"type": "Badge", "props": {"text": "Failed", "variant": "danger"}}

// Default state
{"type": "Badge", "props": {"text": "Draft", "variant": "default"}}
```
