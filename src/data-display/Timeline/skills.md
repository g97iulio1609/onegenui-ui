# Timeline

## Purpose

Display chronological events with dates, titles, and descriptions.

## When to Use

- Show history or changelog
- Display project milestones
- Present chronological events (company history, product roadmap)
- Activity logs or audit trails

## Props Reference

| Prop     | Type   | Required | Description                              |
| -------- | ------ | -------- | ---------------------------------------- |
| items    | array  | Yes\*    | Timeline events                          |
| dataPath | string | No       | Data binding path (alternative to items) |

### Item Structure

```typescript
{
  id?: string;          // Unique identifier
  title: string;        // Event title
  date: string;         // Event date/time
  description?: string; // Event details
  status?: string;      // Status badge (e.g., "completed", "pending")
  subItems?: Item[];    // Nested events
}
```

## AI Generation Rules

1. Always include title and date for each item
2. Use chronological order (oldest to newest or vice versa)
3. Include description for important events
4. Use status for events with state (completed, upcoming, etc.)
5. Use id when items may be edited

## Streaming Strategy

```jsonl
{"op":"add","path":"/elements/timeline1","value":{"key":"timeline1","type":"Timeline","props":{"items":[]},"children":[]}}
{"op":"add","path":"/elements/timeline1/props/items/-","value":{"id":"e1","title":"Project Started","date":"2024-01-01","description":"Initial kickoff meeting"}}
{"op":"add","path":"/elements/timeline1/props/items/-","value":{"id":"e2","title":"MVP Release","date":"2024-03-15","description":"First public beta"}}
```

## Examples

```json
{
  "type": "Timeline",
  "props": {
    "items": [
      {
        "id": "m1",
        "title": "Company Founded",
        "date": "January 2020",
        "description": "Started in a small garage with just 3 people",
        "status": "completed"
      },
      {
        "id": "m2",
        "title": "Series A Funding",
        "date": "June 2021",
        "description": "Raised $5M to scale operations",
        "status": "completed"
      },
      {
        "id": "m3",
        "title": "Global Expansion",
        "date": "Q4 2024",
        "description": "Opening offices in Europe and Asia",
        "status": "upcoming"
      }
    ]
  }
}
```
