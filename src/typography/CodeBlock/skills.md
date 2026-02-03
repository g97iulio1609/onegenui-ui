# CodeBlock

## Purpose

Collapsible code snippet display component with syntax highlighting indicators, language labels, and expandable content. Designed for displaying multiple code snippets in a compact, organized manner.

## When to Use

- Displaying code examples
- Showing API responses or payloads
- Code generation results
- Configuration file previews
- Technical documentation with code samples

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | No | Section title for the code snippets |
| snippets | CodeSnippet[] | No | Array of code snippets to display |

### CodeSnippet Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | No | Unique snippet identifier |
| title | string | No | Snippet title (default: "Untitled snippet") |
| language | string | No | Programming language (default: "Code") |
| content | string | Yes | The actual code content |
| summary | string | No | Brief description of the snippet |
| status | "generating" \| "ready" \| "failed" | No | Snippet status |
| progress | number | No | Generation progress (0-100) |

## AI Generation Rules

1. **Always include content** - the code itself is required
2. **Specify language** for proper identification (e.g., "JavaScript", "Python", "JSON")
3. **Add title** to describe what the code does
4. **Use summary** for additional context or explanation
5. **Keep snippets focused** - one concept per snippet
6. **Escape special characters** properly in JSON

## Examples

### Single Code Snippet

```json
{
  "type": "CodeBlock",
  "props": {
    "title": "API Example",
    "snippets": [
      {
        "id": "example-1",
        "title": "Fetch User Data",
        "language": "JavaScript",
        "content": "const response = await fetch('/api/users');\nconst users = await response.json();\nconsole.log(users);",
        "summary": "Basic API call to retrieve user data"
      }
    ]
  }
}
```

### Multiple Snippets

```json
{
  "type": "CodeBlock",
  "props": {
    "title": "Installation Guide",
    "snippets": [
      {
        "id": "npm",
        "title": "NPM Installation",
        "language": "Bash",
        "content": "npm install @onegenui/react",
        "summary": "Install using NPM"
      },
      {
        "id": "yarn",
        "title": "Yarn Installation",
        "language": "Bash",
        "content": "yarn add @onegenui/react",
        "summary": "Install using Yarn"
      },
      {
        "id": "pnpm",
        "title": "PNPM Installation",
        "language": "Bash",
        "content": "pnpm add @onegenui/react",
        "summary": "Install using PNPM"
      }
    ]
  }
}
```

### Configuration Example

```json
{
  "type": "CodeBlock",
  "props": {
    "title": "Configuration Files",
    "snippets": [
      {
        "id": "config-1",
        "title": "tsconfig.json",
        "language": "JSON",
        "content": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2020\",\n    \"module\": \"ESNext\",\n    \"strict\": true\n  }\n}",
        "summary": "TypeScript configuration"
      }
    ]
  }
}
```

### React Component Example

```json
{
  "type": "CodeBlock",
  "props": {
    "snippets": [
      {
        "id": "component",
        "title": "Button Component",
        "language": "TypeScript",
        "content": "export function Button({ label }: { label: string }) {\n  return <button className=\"btn\">{label}</button>;\n}",
        "summary": "A simple button component"
      }
    ]
  }
}
```

## Streaming Strategy

1. Emit CodeBlock with title first
2. Add snippets progressively
3. Update snippet status from "generating" to "ready" as code completes
4. Content can be streamed line by line

## Critical Notes

- **Snippets are collapsible** - only one can be expanded at a time
- Empty state shows "No code snippets" message
- Language badge appears in collapsed header
- Each snippet is selectable for item-level interactions
- Code displays in monospace font with proper formatting
- Horizontal scroll enabled for long lines
- Animated expand/collapse with reduced motion support
