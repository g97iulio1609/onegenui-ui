# Alert

## Purpose

Display notification banners for important messages or status updates.

## When to Use

- Success/error messages
- Warning notices
- Information alerts
- System notifications

## Props Reference

| Prop        | Type                                        | Required | Description                   |
| ----------- | ------------------------------------------- | -------- | ----------------------------- |
| type        | "info" \| "success" \| "warning" \| "error" | No       | Alert variant (default: info) |
| title       | string                                      | No       | Alert title                   |
| message     | string                                      | Yes      | Alert message content         |
| dismissible | boolean                                     | No       | Show dismiss button           |

## AI Generation Rules

1. Use type="success" for positive confirmations
2. Use type="error" for errors and failures
3. Use type="warning" for cautions and warnings
4. Use type="info" for neutral information
5. Include title for prominent alerts

## Streaming Strategy

```jsonl
{
  "op": "add",
  "path": "/elements/alert1",
  "value": {
    "key": "alert1",
    "type": "Alert",
    "props": {
      "type": "success",
      "title": "Success",
      "message": "Your changes have been saved.",
      "dismissible": true
    },
    "children": []
  }
}
```

## Examples

### Success Alert

```json
{
  "type": "Alert",
  "props": {
    "type": "success",
    "title": "Payment Received",
    "message": "Your payment of $99.00 has been processed successfully.",
    "dismissible": true
  }
}
```

### Error Alert

```json
{
  "type": "Alert",
  "props": {
    "type": "error",
    "title": "Upload Failed",
    "message": "The file could not be uploaded. Please try again."
  }
}
```

### Warning Alert

```json
{
  "type": "Alert",
  "props": {
    "type": "warning",
    "message": "Your subscription expires in 3 days. Renew now to avoid interruption."
  }
}
```
