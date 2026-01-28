# Text

## Purpose

Display body text with optional styling variants and colors.

## When to Use

- Paragraphs and descriptions
- Captions and labels
- Helper text
- Status messages

## Props Reference

| Prop    | Type                                                                  | Required | Description                |
| ------- | --------------------------------------------------------------------- | -------- | -------------------------- |
| content | string                                                                | Yes      | Text content               |
| variant | "body" \| "caption" \| "label"                                        | No       | Text style (default: body) |
| color   | "default" \| "muted" \| "success" \| "warning" \| "danger" \| "error" | No       | Text color                 |

## AI Generation Rules

1. Use variant="body" for normal paragraphs
2. Use variant="caption" for small supplementary text
3. Use variant="label" for form labels or small headers
4. Use color to indicate status or emphasis

## Streaming Strategy

```jsonl
{
  "op": "add",
  "path": "/elements/text1",
  "value": {
    "key": "text1",
    "type": "Text",
    "props": {
      "content": "This is a description paragraph.",
      "variant": "body"
    },
    "children": []
  }
}
```

## Examples

### Body Text

```json
{
  "type": "Text",
  "props": {
    "content": "Welcome to your dashboard. Here you can track your metrics and manage your projects.",
    "variant": "body"
  }
}
```

### Caption

```json
{
  "type": "Text",
  "props": {
    "content": "Last updated: 5 minutes ago",
    "variant": "caption",
    "color": "muted"
  }
}
```

### Status Message

```json
{
  "type": "Text",
  "props": {
    "content": "Operation completed successfully",
    "color": "success"
  }
}
```
