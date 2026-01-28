---
description: Component instructions for SearchResults
---

# SearchResults Component

Displays web search results as a list of rich, clickable cards with favicons, images, videos, snippets, metadata, and source citations.

## MANDATORY: When to Use

**ALWAYS use SearchResults when displaying web search results. DO NOT use List component for search results.**

Use SearchResults for:
- Results from `web-search` tool calls
- Any web/news search results
- Links with titles, URLs, and descriptions
- Scraped search engine results

## Schema

```jsonl
{"op":"add","path":"/elements/search-results-1","value":{"key":"search-results-1","type":"SearchResults","props":{"query":"React 19 features","results":[{"title":"React 19 – React","url":"https://react.dev/blog/react-19","snippet":"React 19 introduces Actions, new hooks, and more. Learn about the latest features and improvements.","favicon":"https://react.dev/favicon.ico","image":"https://react.dev/og-image.png","source":"react.dev","date":"Jan 2026","position":1},{"title":"What's New in React 19","url":"https://example.com/react-19","snippet":"A comprehensive guide to React 19 features including server components, actions, and use hooks.","source":"example.com","position":2}],"totalResults":100,"searchTime":450,"sources":[{"id":"[1]","title":"React Official Blog","url":"https://react.dev/blog/react-19","domain":"react.dev","favicon":"https://react.dev/favicon.ico"},{"id":"[2]","title":"Example Guide","url":"https://example.com/react-19","domain":"example.com"}]}}}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| query | string | Yes | The search query that was performed |
| results | array | Yes | List of search result objects |
| results[].title | string | Yes | Result title |
| results[].url | string | Yes | Result URL (clickable) |
| results[].snippet | string | Yes | Result description/snippet |
| results[].favicon | string | No | Favicon URL for the site |
| results[].image | string | No | Preview/thumbnail image URL |
| results[].video | object | No | Video preview data |
| results[].video.url | string | Yes | Video URL |
| results[].video.thumbnail | string | No | Video thumbnail URL |
| results[].video.provider | string | No | Video provider (youtube, vimeo, etc.) |
| results[].video.duration | string | No | Video duration |
| results[].source | string | No | Source name (e.g., "TechCrunch") |
| results[].date | string | No | Publication date |
| results[].position | number | No | Position in results |
| totalResults | number | No | Total results found |
| searchTime | number | No | Search time in milliseconds |
| **sources** | array | No | **List of source citations - ALWAYS include for credibility** |
| sources[].id | string | Yes | Citation ID (e.g., "[1]", "[2]") |
| sources[].title | string | Yes | Source title |
| sources[].url | string | Yes | Source URL |
| sources[].domain | string | No | Domain name for display |
| sources[].favicon | string | No | Source favicon URL |

## Best Practices

1. **ALWAYS include sources** - Add a `sources` array with all cited sources for credibility
2. **Include full snippets** - Use complete description text, not truncated
3. **Add images when available** - Makes results more visually rich
4. **Add videos when available** - Include video URL + thumbnail for rich media
5. **Include source and date** - Helps users assess credibility
6. **Order by relevance** - Most relevant results first
7. **Number sources sequentially** - Use "[1]", "[2]", etc. for citation IDs
