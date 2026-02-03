# TextField

## Purpose

Text input field with built-in validation support, data binding, and accessible form integration. Supports various input types and configurable validation timing.

## When to Use

- Form text inputs (names, emails, addresses)
- Search inputs
- Password fields
- Numeric inputs
- Any single-line text entry with validation

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | No | Label displayed above the input |
| bindPath | string | No | JSON path for two-way data binding |
| valuePath | string | No | JSON path to read value from (alias for bindPath) |
| value | string | No | Direct value (overridden by bindPath) |
| placeholder | string | No | Placeholder text when empty |
| type | string | No | Input type (text, email, password, number, tel, url) |
| checks | Array<{fn, message}> | No | Validation checks to apply |
| validateOn | "change" \| "blur" \| "submit" | No | When to run validation (default: "blur") |

### Check Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| fn | string | Yes | Validation function name or expression |
| message | string | Yes | Error message when validation fails |

## AI Generation Rules

1. **Always include label** for accessibility
2. **Use bindPath** for form data collection
3. **Use appropriate type** for input context:
   - `email` for email addresses
   - `password` for sensitive data
   - `tel` for phone numbers
   - `url` for web addresses
4. **Include placeholder** to guide user input
5. **Add validation checks** for important fields
6. **Choose validateOn** based on UX needs:
   - `blur` for standard fields (default)
   - `change` for real-time feedback
   - `submit` for performance

## Examples

### Basic Text Input

```json
{
  "type": "TextField",
  "props": {
    "label": "Full Name",
    "bindPath": "user.name",
    "placeholder": "Enter your full name"
  }
}
```

### Email with Validation

```json
{
  "type": "TextField",
  "props": {
    "label": "Email Address",
    "bindPath": "user.email",
    "type": "email",
    "placeholder": "you@example.com",
    "checks": [
      { "fn": "required", "message": "Email is required" },
      { "fn": "email", "message": "Please enter a valid email" }
    ],
    "validateOn": "blur"
  }
}
```

### Password Field

```json
{
  "type": "TextField",
  "props": {
    "label": "Password",
    "bindPath": "user.password",
    "type": "password",
    "placeholder": "Enter password",
    "checks": [
      { "fn": "required", "message": "Password is required" },
      { "fn": "minLength:8", "message": "Password must be at least 8 characters" }
    ]
  }
}
```

### Phone Number Input

```json
{
  "type": "TextField",
  "props": {
    "label": "Phone Number",
    "bindPath": "contact.phone",
    "type": "tel",
    "placeholder": "+1 (555) 123-4567"
  }
}
```

### Real-time Validation

```json
{
  "type": "TextField",
  "props": {
    "label": "Username",
    "bindPath": "account.username",
    "placeholder": "Choose a username",
    "checks": [
      { "fn": "required", "message": "Username is required" },
      { "fn": "alphanumeric", "message": "Only letters and numbers allowed" },
      { "fn": "minLength:3", "message": "At least 3 characters required" }
    ],
    "validateOn": "change"
  }
}
```

## Streaming Strategy

1. Emit TextField with label and placeholder first
2. Validation checks can be added in initial render
3. Value updates flow through data context via bindPath

## Critical Notes

- **Use bindPath** for forms where values need to be collected
- Validation errors display below the input with visual indicators
- Supports `required` prop for required field indicators
- Touch-optimized with larger tap targets on mobile
- Focus states provide visual feedback with primary color ring
- Reduced motion support for accessibility preferences
