# Select

## Purpose

Dropdown select input for choosing from a list of predefined options. Supports data binding, validation, and accessible form integration with labels and error states.

## When to Use

- Selecting from a fixed list of options
- Form inputs requiring single selection
- Filtering and sorting controls
- Settings and preference selection
- Category or type selection

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | No | Label displayed above the select |
| bindPath | string | No | JSON path for two-way data binding |
| valuePath | string | No | JSON path to read value from (alias for bindPath) |
| value | string | No | Direct value (overridden by bindPath) |
| options | Array<{value, label}> | Yes | Array of selectable options |
| placeholder | string | No | Placeholder text when no value selected |

### Option Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| value | string | Yes | The value stored when option is selected |
| label | string | Yes | Display text shown to the user |

## AI Generation Rules

1. **Always provide options array** - the select is useless without options
2. **Use meaningful labels** for accessibility and UX
3. **Include placeholder** to guide user selection
4. **Use bindPath** for form data binding
5. **Keep options concise** - long lists (>10 items) may need search or filtering
6. **Value should match expected data type** - typically strings

## Examples

### Basic Select with Options

```json
{
  "type": "Select",
  "props": {
    "label": "Country",
    "placeholder": "Select a country",
    "options": [
      { "value": "us", "label": "United States" },
      { "value": "uk", "label": "United Kingdom" },
      { "value": "de", "label": "Germany" },
      { "value": "fr", "label": "France" }
    ]
  }
}
```

### Select with Data Binding

```json
{
  "type": "Select",
  "props": {
    "label": "Payment Method",
    "bindPath": "order.paymentMethod",
    "placeholder": "Choose payment method",
    "options": [
      { "value": "credit", "label": "Credit Card" },
      { "value": "debit", "label": "Debit Card" },
      { "value": "paypal", "label": "PayPal" },
      { "value": "bank", "label": "Bank Transfer" }
    ]
  }
}
```

### Select with Pre-selected Value

```json
{
  "type": "Select",
  "props": {
    "label": "Sort By",
    "value": "price_asc",
    "options": [
      { "value": "relevance", "label": "Relevance" },
      { "value": "price_asc", "label": "Price: Low to High" },
      { "value": "price_desc", "label": "Price: High to Low" },
      { "value": "rating", "label": "Customer Rating" }
    ]
  }
}
```

### Category Filter Select

```json
{
  "type": "Select",
  "props": {
    "label": "Category",
    "bindPath": "filters.category",
    "placeholder": "All Categories",
    "options": [
      { "value": "electronics", "label": "Electronics" },
      { "value": "clothing", "label": "Clothing" },
      { "value": "home", "label": "Home & Garden" },
      { "value": "sports", "label": "Sports & Outdoors" }
    ]
  }
}
```

## Streaming Strategy

1. Emit the Select with label and placeholder first
2. Options array should be complete in initial render
3. Use bindPath for dynamic value updates from data context

## Critical Notes

- **options array is required** - component won't render without options
- Use `bindPath` for forms where the value needs to be collected
- The component supports `required`, `disabled`, and `error` props via the renderer
- Placeholder option is disabled by default (cannot be re-selected)
- Touch-optimized with larger tap targets on mobile
