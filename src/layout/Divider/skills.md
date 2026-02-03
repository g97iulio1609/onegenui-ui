# Divider

## Purpose

Visual separator for dividing content sections. Supports horizontal and vertical orientations with optional centered labels for section headings.

## When to Use

- Separating content sections
- Breaking up long forms into logical groups
- Creating visual hierarchy in layouts
- Adding section labels between content areas
- Dividing sidebar or column content vertically

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| orientation | "horizontal" \| "vertical" | No | Divider direction (default: "horizontal") |
| label | string | No | Centered label text for horizontal dividers |

## AI Generation Rules

1. **Use sparingly** - dividers should enhance, not clutter the UI
2. **Add labels** for meaningful section breaks
3. **Use vertical orientation** only within horizontal layouts (rows, sidebars)
4. **Keep labels short** - 1-3 words maximum
5. **Avoid consecutive dividers** - consolidate content instead

## Examples

### Simple Horizontal Divider

```json
{
  "type": "Divider",
  "props": {}
}
```

### Labeled Section Divider

```json
{
  "type": "Divider",
  "props": {
    "label": "PAYMENT DETAILS"
  }
}
```

### Vertical Divider in Row Layout

```json
{
  "type": "Row",
  "props": { "gap": "md" },
  "children": [
    {
      "type": "Text",
      "props": { "content": "Left section" }
    },
    {
      "type": "Divider",
      "props": { "orientation": "vertical" }
    },
    {
      "type": "Text",
      "props": { "content": "Right section" }
    }
  ]
}
```

### Form Section Dividers

```json
{
  "type": "Column",
  "props": {},
  "children": [
    {
      "type": "TextField",
      "props": { "label": "Name", "bindPath": "user.name" }
    },
    {
      "type": "Divider",
      "props": { "label": "CONTACT INFO" }
    },
    {
      "type": "TextField",
      "props": { "label": "Email", "bindPath": "user.email" }
    },
    {
      "type": "TextField",
      "props": { "label": "Phone", "bindPath": "user.phone" }
    }
  ]
}
```

### Content Separator

```json
{
  "type": "Divider",
  "props": {
    "label": "OR"
  }
}
```

## Streaming Strategy

Dividers are typically rendered in a single pass as they are lightweight components with no dynamic content.

## Critical Notes

- Horizontal dividers with labels display the label centered between two lines
- Vertical dividers require a parent container with defined height
- Uses perforated style for plain horizontal dividers
- Includes proper ARIA `role="separator"` and `aria-orientation` for accessibility
- Animated entrance with reduced motion support
