# DatePicker

## Purpose

Native date picker input with data binding support, accessible labels, and error state handling. Uses the browser's native date input for cross-platform compatibility.

## When to Use

- Selecting single dates
- Booking date selection (check-in, check-out)
- Event scheduling
- Date of birth inputs
- Deadline or due date selection

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | No | Label displayed above the input |
| bindPath | string | No | JSON path for two-way data binding |
| valuePath | string | No | JSON path to read value from (alias for bindPath) |
| value | string | No | Direct date value in ISO format (YYYY-MM-DD) |
| placeholder | string | No | Placeholder text (browser support varies) |

## AI Generation Rules

1. **Always include label** for accessibility and clarity
2. **Use bindPath** for form data collection
3. **Use ISO date format** (YYYY-MM-DD) for values
4. **Provide meaningful labels** that describe the date purpose
5. **Group related date pickers** (e.g., start/end dates) together
6. **Consider date ranges** - use two DatePickers for start/end

## Examples

### Basic Date Picker

```json
{
  "type": "DatePicker",
  "props": {
    "label": "Date of Birth",
    "bindPath": "user.dateOfBirth",
    "placeholder": "Select date"
  }
}
```

### Check-in Date for Booking

```json
{
  "type": "DatePicker",
  "props": {
    "label": "Check-in Date",
    "bindPath": "booking.checkIn",
    "value": "2024-06-15"
  }
}
```

### Date Range (Two Pickers)

```json
{
  "type": "Grid",
  "props": { "cols": 2 },
  "children": [
    {
      "type": "DatePicker",
      "props": {
        "label": "Start Date",
        "bindPath": "project.startDate"
      }
    },
    {
      "type": "DatePicker",
      "props": {
        "label": "End Date",
        "bindPath": "project.endDate"
      }
    }
  ]
}
```

### Event Scheduling

```json
{
  "type": "DatePicker",
  "props": {
    "label": "Event Date",
    "bindPath": "event.date",
    "placeholder": "Choose event date"
  }
}
```

### Due Date Input

```json
{
  "type": "DatePicker",
  "props": {
    "label": "Due Date",
    "bindPath": "task.dueDate",
    "value": "2024-12-31"
  }
}
```

## Streaming Strategy

1. Emit DatePicker with label first
2. Value can be pre-populated or bound to data context
3. Updates flow through data context via bindPath

## Critical Notes

- **Uses native HTML date input** - appearance varies by browser/OS
- **Date format is always YYYY-MM-DD** (ISO 8601)
- Supports `required`, `disabled`, and `error` props via the renderer
- Touch-optimized for mobile date selection
- Focus states provide visual feedback with primary color ring
- Reduced motion support for accessibility preferences
