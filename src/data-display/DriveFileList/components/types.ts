// =============================================================================
// Types
// =============================================================================

export interface DriveFileItem {
  id: string;
  name: string;
  mimeType: string;
  size?: number | null;
  modifiedTime?: string | null;
  webViewLink?: string | null;
  iconLink?: string | null;
  thumbnailLink?: string | null;
  owners?: Array<{ displayName?: string; photoLink?: string }> | null;
  shared?: boolean;
  starred?: boolean;
}

export type ViewMode = "grid" | "list";

// =============================================================================
// Helpers
// =============================================================================

export function formatFileSize(bytes?: number | null): string {
  if (!bytes) return "";
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

export function formatDate(dateStr?: string | null): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function getFileTypeName(mimeType: string): string {
  if (mimeType.includes("folder")) return "Cartella";
  if (mimeType.includes("document") || mimeType.includes("word"))
    return "Documento";
  if (mimeType.includes("spreadsheet") || mimeType.includes("excel"))
    return "Foglio di calcolo";
  if (mimeType.includes("presentation") || mimeType.includes("powerpoint"))
    return "Presentazione";
  if (mimeType.includes("pdf")) return "PDF";
  if (mimeType.includes("image")) return "Immagine";
  if (mimeType.includes("video")) return "Video";
  if (mimeType.includes("audio")) return "Audio";
  return "File";
}

export function isFolder(mimeType: string): boolean {
  return mimeType === "application/vnd.google-apps.folder";
}
