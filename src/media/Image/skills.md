# Image

## Purpose

Display images in a gallery grid with titles, captions, and metadata. Supports both web URLs and AI-generated images with status tracking.

## When to Use

- Displaying image search results from `web-search` tool with `type: "image"`
- Photo galleries for travel, products, locations
- AI-generated image collections with generation metadata
- Any visual content that needs to be displayed in a grid

## Props Reference

| Prop        | Type        | Required | Description                  |
| ----------- | ----------- | -------- | ---------------------------- |
| title       | string      | No       | Gallery section title        |
| images      | ImageItem[] | Yes      | Array of image items         |
| columns     | number      | No       | Grid columns (default: 2)    |
| accentColor | string      | No       | Accent color for UI elements |

### ImageItem Structure

```typescript
{
  source: string;       // REQUIRED: Direct image URL (https://...) - NO FALLBACK
  title?: string;       // Image title
  caption?: string;     // Short description below title
  alt?: string;         // Accessibility text
  width?: number;       // Image width in pixels
  height?: number;      // Image height in pixels
}
```

## AI Generation Rules

1. **source is REQUIRED** - Images without valid source URL will NOT be displayed
2. **ALWAYS use web-search first** with `type: "image"` to find real image URLs
3. Extract the image URL from search results and use it in `source`
4. NEVER use placeholder text like "https://example.com" - it will fail
5. If you cannot find real images, DO NOT create the Image component

## Examples

### Display Rome landmarks from image search

```json
{
  "op": "add",
  "path": "/elements/rome-gallery",
  "value": {
    "key": "rome-gallery",
    "type": "Image",
    "props": {
      "title": "Luoghi Iconici di Roma",
      "images": [
        {
          "title": "Colosseo",
          "caption": "L'anfiteatro piu famoso del mondo",
          "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/1200px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg"
        },
        {
          "title": "Fontana di Trevi",
          "caption": "La fontana barocca piu celebre",
          "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/1200px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg"
        }
      ]
    },
    "children": []
  }
}
```

### Using image search results

When user asks for images, FIRST use `web-search` with `type: "image"`:

1. Call `web-search` with query and `type: "image"`
2. Extract `url` or `media.thumbnail` from results
3. Create Image component with those real URLs in `source` prop

## Common Mistakes to Avoid

- DO NOT use placeholder URLs like "https://example.com/image.jpg"
- DO NOT leave `source` empty - component will show placeholder
- DO NOT use `location.src` when `source` shorthand is simpler
- ALWAYS fetch real images with web-search before creating gallery
