// =============================================================================
// Icons for DriveFileList
// =============================================================================

import { memo } from "react";

export const DriveIcon = memo(function DriveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 87.3 78" fill="none">
      <path
        d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5l5.4 9.35z"
        fill="#0066da"
      />
      <path
        d="M43.65 25L29.9 0H21.6c-1.35.8-2.5 1.9-3.3 3.3L1.2 29.4c-.8 1.4-1.2 2.95-1.2 4.5h27.5L43.65 25z"
        fill="#00ac47"
      />
      <path
        d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.85L73.55 76.8z"
        fill="#ea4335"
      />
      <path d="M43.65 25L57.4 0H29.9l13.75 23.8V25z" fill="#00832d" />
      <path
        d="M59.85 53h27.5L70.9 23.85c-.8-1.4-1.95-2.5-3.3-3.3l-23.95 7.5L59.85 53z"
        fill="#2684fc"
      />
      <path
        d="M27.5 53L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.4 4.5-1.2L59.85 53H27.5z"
        fill="#ffba00"
      />
    </svg>
  );
});

export const FolderIcon = memo(function FolderIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24">
      <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
    </svg>
  );
});

export const FileIcon = memo(function FileIcon({ mimeType }: { mimeType: string }) {
  const getColor = () => {
    if (mimeType.includes("document") || mimeType.includes("word"))
      return "#4285f4";
    if (mimeType.includes("spreadsheet") || mimeType.includes("excel"))
      return "#0f9d58";
    if (mimeType.includes("presentation") || mimeType.includes("powerpoint"))
      return "#f4b400";
    if (mimeType.includes("pdf")) return "#ea4335";
    if (mimeType.includes("image")) return "#9c27b0";
    if (mimeType.includes("video")) return "#673ab7";
    if (mimeType.includes("audio")) return "#ff5722";
    return "#757575";
  };

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={getColor()}>
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  );
});

export const GridIcon = memo(function GridIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
});

export const ListIcon = memo(function ListIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
});

export const ExternalLinkIcon = memo(function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
});

export const StarIcon = memo(function StarIcon({ filled }: { filled?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
});

export const ShareIcon = memo(function ShareIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
});
