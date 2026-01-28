# DriveFileList

## Purpose
Displays a list of Google Drive files with grid and list view options. Shows file previews, types, sizes, and provides direct links to open files in Drive.

## When to Use
Use this component when displaying files from Google Drive API. It supports folders, documents, spreadsheets, presentations, PDFs, images, and other file types.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | No | Header title (default: "Google Drive") |
| `description` | string | No | Subtitle or description |
| `viewMode` | "grid" \| "list" | No | View mode (default: "list") |
| `files` | DriveFile[] | Yes | Array of files to display |

## DriveFile Structure

```typescript
interface DriveFile {
  id: string;              // Unique file ID (from Google Drive)
  name: string;            // File name
  mimeType: string;        // MIME type
  size?: number;           // File size in bytes
  modifiedTime?: string;   // Last modified (ISO 8601)
  webViewLink?: string;    // URL to open in Drive
  iconLink?: string;       // File type icon URL
  thumbnailLink?: string;  // Preview thumbnail URL
  owners?: Array<{
    displayName?: string;
    photoLink?: string;
  }>;
  shared?: boolean;        // Is file shared
  starred?: boolean;       // Is file starred
}
```

## Data Mapping from Google Drive API

Map the `drive_list_files` tool response to this component:

```typescript
// From drive_list_files response:
{
  files: response.files.map(file => ({
    id: file.id,
    name: file.name,
    mimeType: file.mimeType,
    size: file.size,
    modifiedTime: file.modifiedTime,
    webViewLink: file.webViewLink,
    iconLink: file.iconLink
  }))
}
```

## Example AI Generation

```json
{
  "type": "DriveFileList",
  "props": {
    "title": "I tuoi file recenti",
    "viewMode": "list",
    "files": [
      {
        "id": "file-1",
        "name": "Report Q4 2025",
        "mimeType": "application/vnd.google-apps.document",
        "modifiedTime": "2026-01-15T10:30:00Z",
        "webViewLink": "https://docs.google.com/document/d/abc123",
        "shared": true
      },
      {
        "id": "file-2",
        "name": "Budget 2026",
        "mimeType": "application/vnd.google-apps.spreadsheet",
        "size": 245760,
        "modifiedTime": "2026-01-18T14:22:00Z",
        "webViewLink": "https://docs.google.com/spreadsheets/d/xyz789",
        "starred": true
      },
      {
        "id": "folder-1",
        "name": "Progetti",
        "mimeType": "application/vnd.google-apps.folder",
        "webViewLink": "https://drive.google.com/drive/folders/abc"
      }
    ]
  }
}
```

## Features
- **Grid/List views** - Toggle between visual layouts
- **File type icons** - Automatic icons based on MIME type
- **Thumbnails** - Shows previews when available
- **Folders first** - Sorts folders above files
- **Direct opening** - Click to open in Google Drive
- **Metadata display** - Size, modified date, shared status
- **Italian localization** - All labels in Italian
