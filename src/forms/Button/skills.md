# Button

## Purpose

Interactive button component with action support, multiple variants, and animated feedback. Designed for triggering actions, form submissions, and user interactions in dashboards and applications.

## When to Use

- Triggering actions or commands
- Form submission buttons
- Call-to-action buttons
- Navigation actions
- Destructive operations (delete, cancel)
- Secondary/ghost actions

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | No | Button text label |
| variant | "primary" \| "secondary" \| "danger" \| "ghost" | No | Visual style (default: "primary") |
| size | "sm" \| "md" \| "lg" | No | Button size (default: "md") |
| action | string | No | Action name to trigger on click |
| actionParams | Record<string, unknown> | No | Parameters to pass with the action |
| disabled | boolean | No | Whether button is disabled |

### Variant Descriptions

| Variant | Use Case |
|---------|----------|
| primary | Main call-to-action, form submissions |
| secondary | Alternative actions, less emphasis |
| danger | Destructive actions (delete, remove) |
| ghost | Subtle actions, inline with text |

### Size Descriptions

| Size | Use Case |
|------|----------|
| sm | Compact UI, inline actions, toolbars |
| md | Default, most common use cases |
| lg | Prominent CTAs, landing pages |

## AI Generation Rules

1. **Always include a label** for accessibility and clarity
2. **Use appropriate variant** for the action context:
   - `primary` for main actions
   - `danger` for destructive operations
   - `ghost` for subtle/tertiary actions
3. **Include action name** when the button should trigger behavior
4. **Use actionParams** to pass contextual data with the action
5. **Set disabled: true** when action is not available
6. **Choose size** based on UI context and visual hierarchy

## Examples

### Primary Action Button

```json
{
  "type": "Button",
  "props": {
    "label": "Submit Order",
    "variant": "primary",
    "size": "lg",
    "action": "submitOrder",
    "actionParams": { "orderId": "order-123" }
  }
}
```

### Danger Button for Destructive Action

```json
{
  "type": "Button",
  "props": {
    "label": "Delete Account",
    "variant": "danger",
    "size": "md",
    "action": "deleteAccount",
    "actionParams": { "confirmRequired": true }
  }
}
```

### Ghost Button in Toolbar

```json
{
  "type": "Button",
  "props": {
    "label": "Cancel",
    "variant": "ghost",
    "size": "sm",
    "action": "cancelEdit"
  }
}
```

### Disabled Button

```json
{
  "type": "Button",
  "props": {
    "label": "Processing...",
    "variant": "primary",
    "disabled": true
  }
}
```

### Button with Children

```json
{
  "type": "Button",
  "props": {
    "variant": "secondary",
    "action": "addItem"
  },
  "children": [
    {
      "type": "Text",
      "props": { "content": "Add to Cart" }
    }
  ]
}
```

## Streaming Strategy

1. Button is typically rendered in a single pass as it's a leaf component
2. When part of a form, emit the Button after all form fields are rendered
3. Update `disabled` state based on form validation

## Critical Notes

- **action is required** for interactive buttons - without it the button does nothing
- The component shows a loading spinner when the `loading` prop is true (passed by the renderer)
- Supports reduced motion preferences for accessibility
- Touch-optimized with larger tap targets on mobile
