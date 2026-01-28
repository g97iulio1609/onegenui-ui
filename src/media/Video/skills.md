# Video

## Purpose

Video component for displaying videos from YouTube, Vimeo, Dailymotion, Twitch, or direct video files.

## When to Use

- Displaying YouTube/Vimeo embeds in the UI
- Showing video tutorials or content
- Embedding social media videos
- Displaying direct video files (mp4, webm)

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | no | Optional title for the video collection |
| videos | VideoItem[] | yes | Array of video items to display |
| accentColor | string | no | Accent color for UI elements |

### VideoItem Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | no | Unique identifier |
| title | string | no | Video title |
| source | string | **YES for embeds** | **The YouTube/Vimeo URL - this is auto-detected** |
| poster | string | no | Thumbnail image URL |
| duration | number | no | Duration in seconds |

## AI Generation Rules

1. **CRITICAL**: For YouTube/Vimeo videos, put the URL in the `source` field. The component auto-detects embed URLs.
2. Supported URL formats that are auto-detected:
   - `https://www.youtube.com/watch?v=VIDEO_ID`
   - `https://youtu.be/VIDEO_ID`
   - `https://www.youtube.com/embed/VIDEO_ID`
   - `https://www.youtube.com/shorts/VIDEO_ID`
   - `https://vimeo.com/VIDEO_ID`
   - `https://player.vimeo.com/video/VIDEO_ID`
3. Always provide a meaningful `title` for each video

## Examples

### YouTube Video
```json
{
  "type": "Video",
  "props": {
    "title": "Tutorial Videos",
    "videos": [
      {
        "id": "vid1",
        "title": "Getting Started Guide",
        "source": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ]
  }
}
```

### Multiple YouTube Videos
```json
{
  "type": "Video",
  "props": {
    "title": "Kubernetes Tutorials",
    "videos": [
      {
        "id": "k8s-1",
        "title": "Kubernetes Tutorial for Beginners",
        "source": "https://www.youtube.com/watch?v=X48VuDVv0do"
      },
      {
        "id": "k8s-2", 
        "title": "Complete Kubernetes Course",
        "source": "https://youtu.be/s_o8dwzRlu4"
      }
    ]
  }
}
```

### Vimeo Video
```json
{
  "type": "Video",
  "props": {
    "videos": [
      {
        "title": "Creative Showcase",
        "source": "https://vimeo.com/123456789"
      }
    ]
  }
}
```

## Streaming Strategy

Add component first with empty videos array, then populate videos progressively.
