# Gallery

## Purpose

Image gallery component for displaying collections of images with status indicators, generation progress, and metadata tags. Supports AI-generated images with real-time progress visualization.

## When to Use

- Displaying image collections
- AI image generation results
- Photo galleries
- Product image displays
- Visual content portfolios
- Image search results

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | No | Gallery section title |
| items | GalleryItem[] | No | Array of images to display |
| accentColor | string | No | Custom accent color for borders |

### GalleryItem Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | No | Unique item identifier |
| title | string | No | Image title (default: "Untitled") |
| src | string | No | Image source URL |
| prompt | string | No | Generation prompt (for AI images) |
| status | "generating" \| "ready" \| "failed" | No | Image status (default: "ready") |
| progress | number | No | Generation progress (0-100) |
| tags | Array<{label, tone?}> | No | Metadata tags |

### Tag Tones

| Tone | Use Case |
|------|----------|
| default | Neutral information |
| success | Completed, approved |
| warning | Processing, attention needed |
| danger | Failed, rejected |

## AI Generation Rules

1. **Always include image src** when available
2. **Use title** for image identification
3. **Include prompt** for AI-generated images
4. **Set status** to show generation state
5. **Use progress** only when status is "generating"
6. **Add tags** for categorization and metadata
7. **Use meaningful titles** - avoid generic names

## Examples

### Image Collection

```json
{
  "type": "Gallery",
  "props": {
    "title": "Product Photos",
    "items": [
      {
        "id": "img-1",
        "title": "Front View",
        "src": "https://example.com/images/product-front.jpg",
        "status": "ready"
      },
      {
        "id": "img-2",
        "title": "Side View",
        "src": "https://example.com/images/product-side.jpg",
        "status": "ready"
      }
    ]
  }
}
```

### AI Image Generation

```json
{
  "type": "Gallery",
  "props": {
    "title": "Generated Artwork",
    "items": [
      {
        "id": "gen-1",
        "title": "Mountain Landscape",
        "prompt": "Majestic mountain range at sunset with golden light",
        "src": "https://example.com/generated/mountain.jpg",
        "status": "ready",
        "tags": [
          { "label": "Nature", "tone": "success" },
          { "label": "4K", "tone": "default" }
        ]
      },
      {
        "id": "gen-2",
        "title": "Ocean Waves",
        "prompt": "Dramatic ocean waves crashing on rocky shore",
        "status": "generating",
        "progress": 45
      }
    ]
  }
}
```

### Gallery with Tags

```json
{
  "type": "Gallery",
  "props": {
    "title": "Design Assets",
    "accentColor": "#8B5CF6",
    "items": [
      {
        "id": "asset-1",
        "title": "Hero Banner",
        "src": "https://example.com/assets/hero.png",
        "status": "ready",
        "tags": [
          { "label": "Approved", "tone": "success" },
          { "label": "Marketing" }
        ]
      },
      {
        "id": "asset-2",
        "title": "Icon Set",
        "src": "https://example.com/assets/icons.png",
        "status": "ready",
        "tags": [
          { "label": "Review", "tone": "warning" },
          { "label": "UI Kit" }
        ]
      }
    ]
  }
}
```

### Mixed Status Gallery

```json
{
  "type": "Gallery",
  "props": {
    "title": "Batch Generation",
    "items": [
      {
        "id": "batch-1",
        "title": "Image 1",
        "status": "ready",
        "src": "https://example.com/batch/1.jpg"
      },
      {
        "id": "batch-2",
        "title": "Image 2",
        "status": "generating",
        "progress": 78
      },
      {
        "id": "batch-3",
        "title": "Image 3",
        "status": "failed"
      }
    ]
  }
}
```

## Streaming Strategy

1. Emit Gallery with title first
2. Add items progressively as images are generated
3. Update item status from "generating" to "ready" as each completes
4. Update progress field during generation phase
5. Add src URL once generation completes

## Critical Notes

- **Empty state** is displayed when no items are provided
- Uses responsive auto-fit grid layout (min 180px per item)
- Images are lazy-loaded for performance
- Status badge overlays on images in top-left corner
- Progress percentage shown alongside status when generating
- Each item is selectable for item-level interactions
- Supports custom accent colors for branding
