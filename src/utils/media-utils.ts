type MediaSourceType = "stream" | "upload" | "url" | "embed";

type MediaStatus = "generating" | "ready" | "failed";

type MediaTag = {
  label: string;
  tone?: "default" | "success" | "warning" | "danger";
};

type MediaMetadata = {
  model?: string | null;
  prompt?: string | null;
  negativePrompt?: string | null;
  seed?: number | null;
  steps?: number | null;
  guidance?: number | null;
  sampler?: string | null;
  scheduler?: string | null;
  style?: string | null;
  lora?: string[] | null;
  upscaler?: string | null;
  safety?: string | null;
  aspectRatio?: string | null;
};

type MediaIdentity = {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  createdAt?: string | null;
  author?: string | null;
  license?: string | null;
  source?: string | null;
};

type MediaStatusInfo = {
  status?: MediaStatus | null;
  progress?: number | null;
  errorMessage?: string | null;
};

type MediaLocation = {
  sourceType?: MediaSourceType | null;
  src?: string | null;
  streamUrl?: string | null;
  embedUrl?: string | null;
  uploadName?: string | null;
  provider?: "youtube" | "vimeo" | "custom" | null;
};

type MediaSpec = {
  identity?: MediaIdentity;
  metadata?: MediaMetadata;
  status?: MediaStatusInfo;
  location?: MediaLocation;
  tags?: MediaTag[] | null;
  sizeBytes?: number | null;
};

type MediaPresentation = {
  title?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  format?: string | null;
  duration?: number | null;
  fps?: number | null;
  resolution?: string | null;
};

export type MediaCoreProps = {
  item: MediaSpec & MediaPresentation;
  accentColor?: string;
};

export function formatBytes(bytes?: number | null): string {
  if (!bytes || bytes <= 0) return "-";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(value >= 10 ? 0 : 1)} ${units[unitIndex]}`;
}

export function formatDuration(seconds?: number | null): string {
  if (!seconds || seconds <= 0) return "-";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  if (hours > 0) {
    return `${hours}:${String(remMins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

export function getStatusTone(status?: MediaStatus | null): MediaTag["tone"] {
  switch (status) {
    case "ready":
      return "success";
    case "failed":
      return "danger";
    case "generating":
    default:
      return "warning";
  }
}

export function getProgressPercent(progress?: number | null): number {
  if (!progress) return 0;
  if (progress <= 1) return Math.round(progress * 100);
  return Math.round(progress);
}

export function buildStatusLabel(status?: MediaStatus | null): string {
  switch (status) {
    case "ready":
      return "Ready";
    case "failed":
      return "Failed";
    case "generating":
    default:
      return "Generating";
  }
}

export function getAccentColor(accentColor?: string) {
  return accentColor ?? "var(--primary)";
}
