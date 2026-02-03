# Audio

## Purpose

Audio player component for displaying and playing audio tracks with status indicators, progress tracking, and metadata display. Supports AI-generated audio with generation progress visualization.

## When to Use

- Playing audio files or streams
- Displaying AI-generated audio tracks
- Music or podcast player interfaces
- Voice message playback
- Audio generation progress tracking

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | No | Section title for the audio player |
| tracks | AudioTrack[] | No | Array of audio tracks to display |
| accentColor | string | No | Custom accent color for controls |

### AudioTrack Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | No | Unique track identifier |
| title | string | No | Track title (default: "Untitled") |
| src | string | No | Audio source URL |
| prompt | string | No | Generation prompt (for AI audio) |
| duration | number | No | Duration in seconds |
| speaker | string | No | Voice/speaker name |
| style | string | No | Audio style description |
| status | "generating" \| "ready" \| "failed" | No | Track status (default: "ready") |
| progress | number | No | Generation progress (0-100) |
| tags | Array<{label, tone?}> | No | Metadata tags |

### Tag Tones

| Tone | Use Case |
|------|----------|
| default | Neutral information |
| success | Completed, ready |
| warning | In progress, attention needed |
| danger | Failed, error state |

## AI Generation Rules

1. **Always include track title** for identification
2. **Include src** for playable audio files
3. **Use status** to show generation state for AI audio
4. **Include duration** when available for user context
5. **Add speaker and style** for voice/music generation context
6. **Use progress** only when status is "generating"

## Examples

### Single Audio Track

```json
{
  "type": "Audio",
  "props": {
    "title": "Generated Audio",
    "tracks": [
      {
        "id": "audio-1",
        "title": "Welcome Message",
        "src": "https://example.com/audio/welcome.mp3",
        "duration": 45,
        "speaker": "Sarah",
        "style": "Professional",
        "status": "ready"
      }
    ]
  }
}
```

### Audio Generation in Progress

```json
{
  "type": "Audio",
  "props": {
    "title": "AI Voice Generation",
    "tracks": [
      {
        "id": "gen-1",
        "title": "Product Introduction",
        "prompt": "Generate a friendly introduction for our new product launch",
        "speaker": "Alex",
        "style": "Conversational",
        "status": "generating",
        "progress": 65
      }
    ]
  }
}
```

### Multiple Tracks Playlist

```json
{
  "type": "Audio",
  "props": {
    "title": "Podcast Episodes",
    "tracks": [
      {
        "id": "ep-1",
        "title": "Episode 1: Getting Started",
        "src": "https://example.com/podcast/ep1.mp3",
        "duration": 1800,
        "status": "ready"
      },
      {
        "id": "ep-2",
        "title": "Episode 2: Advanced Topics",
        "src": "https://example.com/podcast/ep2.mp3",
        "duration": 2100,
        "status": "ready"
      }
    ]
  }
}
```

### Music Generation with Custom Accent

```json
{
  "type": "Audio",
  "props": {
    "title": "Generated Music",
    "accentColor": "#8B5CF6",
    "tracks": [
      {
        "id": "music-1",
        "title": "Ambient Background",
        "prompt": "Calm ambient music for meditation",
        "style": "Ambient",
        "status": "ready",
        "duration": 180,
        "src": "https://example.com/music/ambient.mp3"
      }
    ]
  }
}
```

## Streaming Strategy

1. Emit Audio component with title first
2. Add tracks progressively as they are generated
3. Update track status from "generating" to "ready" as audio completes
4. Update progress field during generation phase

## Critical Notes

- **Empty state** is displayed when no tracks are provided
- Native HTML5 audio controls are used for playback
- Progress bar only shows when status is "generating"
- Supports custom accent colors for branding
- Duration is formatted automatically (mm:ss format)
- Each track card is selectable for item-level interactions
