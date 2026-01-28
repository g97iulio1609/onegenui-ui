---
description: Component instructions for BrowserAction
---

# BrowserAction Component

Displays real-time browser automation steps with status indicators.

## When to Use
- Show progress during web search/scraping operations
- Display browser navigation steps as they happen  
- Provide visual feedback for multi-step browser operations

## Schema
```jsonl
{"op":"add","path":"/0","value":{"type":"BrowserAction","props":{"id":"action-1","action":"navigating","url":"https://google.com","status":"loading"}}}
{"op":"replace","path":"/0/props/status","value":"complete"}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| id | string | Unique action ID |
| action | enum | navigating, searching, extracting, clicking, typing, waiting, capturing |
| target | string? | Target element or description |
| url | string? | URL being navigated to |
| status | enum | pending, loading, complete, error |
| message | string? | Optional status message |
| error | string? | Error message if status is error |
