# List

## Purpose

Render simple or nested lists with optional item descriptions and status.

## When to Use

- Display bullet-point lists
- Show feature lists or requirements
- Present hierarchical information (nested lists)
- Simple item collections without tabular structure

## Props Reference

| Prop         | Type   | Required | Description                              |
| ------------ | ------ | -------- | ---------------------------------------- |
| items        | array  | Yes\*    | List items (strings or objects)          |
| dataPath     | string | No       | Data binding path (alternative to items) |
| emptyMessage | string | No       | Message when list is empty               |

### Item Structure (Object Form)

```typescript
{
  id?: string;          // Unique identifier
  text: string;         // Main text content
  description?: string; // Secondary text
  status?: string;      // Status badge
  subItems?: Item[];    // Nested items
}
```

## AI Generation Rules

1. Use string array for simple lists: `["Item 1", "Item 2"]`
2. Use object array when items need descriptions or status
3. Use subItems for hierarchical/nested lists
4. Include id when items may be edited
5. DO NOT use List for workouts/meals - use specialized components

## Streaming Strategy

```jsonl
{"op":"add","path":"/elements/list1","value":{"key":"list1","type":"List","props":{"items":[]},"children":[]}}
{"op":"add","path":"/elements/list1/props/items/-","value":"First item"}
{"op":"add","path":"/elements/list1/props/items/-","value":"Second item"}
```

## Examples

### Simple String List

```json
{
  "type": "List",
  "props": {
    "items": [
      "Dashboard access",
      "Real-time analytics",
      "Export to PDF",
      "Team collaboration"
    ]
  }
}
```

### Object List with Details

```json
{
  "type": "List",
  "props": {
    "items": [
      {
        "id": "f1",
        "text": "User Authentication",
        "description": "OAuth2 and JWT support",
        "status": "completed"
      },
      {
        "id": "f2",
        "text": "API Integration",
        "description": "REST and GraphQL endpoints",
        "status": "in-progress"
      }
    ]
  }
}
```
