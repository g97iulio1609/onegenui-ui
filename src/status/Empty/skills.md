# Empty

## Purpose

Empty state placeholder component for displaying when no content is available. Provides clear messaging with optional call-to-action to guide users on next steps.

## When to Use

- No search results found
- Empty lists or tables
- Initial state before data is loaded
- No items match filter criteria
- First-time user experiences
- Zero-data dashboards

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | Yes | Main heading for the empty state |
| description | string | No | Additional explanatory text |
| action | string | No | Action name to trigger on button click |
| actionLabel | string | No | Label for the action button |

## AI Generation Rules

1. **Always include title** - required for the component
2. **Add description** to explain why it's empty or what to do
3. **Include action with actionLabel** to provide next steps
4. **Keep messages concise** and user-friendly
5. **Be positive** - avoid negative language
6. **Match context** - tailor message to the specific empty state

## Examples

### No Search Results

```json
{
  "type": "Empty",
  "props": {
    "title": "No results found",
    "description": "Try adjusting your search terms or filters",
    "action": "clearSearch",
    "actionLabel": "Clear Search"
  }
}
```

### Empty List

```json
{
  "type": "Empty",
  "props": {
    "title": "No items yet",
    "description": "Add your first item to get started",
    "action": "addItem",
    "actionLabel": "Add Item"
  }
}
```

### Empty Inbox

```json
{
  "type": "Empty",
  "props": {
    "title": "Inbox Zero",
    "description": "You're all caught up! No new messages."
  }
}
```

### No Data Available

```json
{
  "type": "Empty",
  "props": {
    "title": "No data available",
    "description": "Data will appear here once it's collected",
    "action": "refreshData",
    "actionLabel": "Refresh"
  }
}
```

### First-Time Experience

```json
{
  "type": "Empty",
  "props": {
    "title": "Welcome to your dashboard",
    "description": "Create your first project to get started",
    "action": "createProject",
    "actionLabel": "Create Project"
  }
}
```

### Filtered Results Empty

```json
{
  "type": "Empty",
  "props": {
    "title": "No matching items",
    "description": "No items match your current filters",
    "action": "resetFilters",
    "actionLabel": "Reset Filters"
  }
}
```

## Streaming Strategy

Empty states are typically rendered in a single pass as they contain static content without progressive loading requirements.

## Critical Notes

- **title is required** - component needs at least a title
- Button only appears when both `action` and `actionLabel` are provided
- Uses secondary button style for the action
- Centered layout with generous padding
- Includes proper ARIA `role="status"` for accessibility
- Animated entrance with reduced motion support
