import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import type { VideoItem, VideoTag } from "../schema";
import {
  formatBytes,
  formatDuration,
  getProgressPercent,
} from "../../../utils/media-utils";
import {
  getVideoSource,
  getProviderInfo,
  getIframeAttributes,
  type VideoSourceInfo,
} from "./video-utils";

interface VideoPlayerProps {
  video: VideoItem;
  status: string;
  statusTone?: string;
  statusLabel: string;
  videoSource: VideoSourceInfo;
}

export const VideoPlayer = memo(function VideoPlayer({
  video,
  status,
  statusTone,
  statusLabel,
  videoSource,
}: VideoPlayerProps) {
  const isEmbed = videoSource.type === "embed";
  const isStreaming = status === "generating" && videoSource.type === "stream";
  const providerInfo = getProviderInfo(videoSource.provider);
  const placeholder =
    video.poster ||
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="relative bg-black min-h-[280px]">
      <div className="absolute top-4 left-4 flex gap-2 z-[2] pointer-events-none">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md",
            {
              "bg-white/10 text-white border-white/10":
                statusTone === "default",
              "bg-green-500/20 text-green-400 border-green-500/30":
                statusTone === "success",
              "bg-yellow-500/20 text-yellow-400 border-yellow-500/30":
                statusTone === "warning",
              "bg-red-500/20 text-red-400 border-red-500/30":
                statusTone === "danger",
            },
          )}
        >
          {statusLabel}
        </span>
        {videoSource.provider && (
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md bg-[color-mix(in_srgb,var(--provider-color),transparent_86%)] text-[var(--provider-color)] border-[color-mix(in_srgb,var(--provider-color),transparent_73%)]"
            style={
              { "--provider-color": providerInfo.color } as React.CSSProperties
            }
          >
            {providerInfo.name}
          </span>
        )}
      </div>

      {isEmbed && videoSource.embedUrl ? (
        <iframe
          title={video.title ?? "Embedded video"}
          src={videoSource.embedUrl}
          className="w-full h-full min-h-[280px] border-0 block"
          allow={getIframeAttributes(videoSource.provider)}
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <video
          controls
          muted={status === "generating"}
          poster={placeholder}
          className="w-full h-full min-h-[280px] object-cover bg-black"
          preload="metadata"
        >
          {videoSource.url && <source src={videoSource.url} />}
        </video>
      )}

      {isStreaming && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-semibold text-sm backdrop-blur-sm">
          Streaming video...
        </div>
      )}
    </div>
  );
});

interface VideoMetadataPanelProps {
  video: VideoItem;
  elementKey: string;
  index: number;
  status: string;
  progress: number;
  accent: string;
}

export const VideoMetadataPanel = memo(function VideoMetadataPanel({
  video,
  elementKey,
  index,
  status,
  progress,
  accent,
}: VideoMetadataPanelProps) {
  const metaItems: Array<{ label: string; value: string }> = [];
  if (video.resolution)
    metaItems.push({ label: "Resolution", value: video.resolution });
  if (video.fps) metaItems.push({ label: "FPS", value: `${video.fps}` });
  if (video.codec) metaItems.push({ label: "Codec", value: video.codec });
  if (video.duration)
    metaItems.push({
      label: "Duration",
      value: formatDuration(video.duration),
    });
  if (video.sizeBytes)
    metaItems.push({
      label: "File",
      value: formatBytes(video.sizeBytes),
    });

  return (
    <div
      data-selectable-item
      data-element-key={elementKey}
      data-item-id={video.id ?? `${index}`}
      className="p-[18px] flex flex-col gap-3 h-full"
    >
      <div>
        <div className="text-base font-semibold text-foreground">
          {video.title ?? "Untitled video"}
        </div>
        {video.caption && (
          <div className="text-[13px] text-muted-foreground mt-1 leading-snug">
            {video.caption}
          </div>
        )}
      </div>

      {status === "generating" && (
        <div className="flex flex-col gap-1.5">
          <div className="text-xs text-muted-foreground">
            Rendering {progress}%
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full rounded-full transition-all duration-200 ease-out bg-[var(--progress-color,var(--primary))]"
              style={
                {
                  "--progress-color":
                    accent !== "var(--primary)" ? accent : undefined,
                } as React.CSSProperties
              }
            />
          </div>
        </div>
      )}

      {video.metadata?.prompt && (
        <div className="bg-white/5 border border-white/5 rounded-xl px-3 py-2.5 text-xs text-muted-foreground/90 leading-relaxed">
          {video.metadata.prompt}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 mt-auto">
        {metaItems.map((meta) => (
          <div key={meta.label} className="flex flex-col gap-0.5">
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold opacity-70">
              {meta.label}
            </span>
            <span className="text-[13px] text-foreground font-semibold">
              {meta.value}
            </span>
          </div>
        ))}
      </div>

      {(video.tags?.length ?? 0) > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {video.tags?.map((tag) => {
            const tone = tag.tone ?? "default";
            return (
              <span
                key={tag.label}
                className={cn(
                  "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border",
                  {
                    "bg-white/5 text-muted-foreground border-white/10":
                      tone === "default",
                    "bg-green-500/10 text-green-500 border-green-500/20":
                      tone === "success",
                    "bg-yellow-500/10 text-yellow-500 border-yellow-500/20":
                      tone === "warning",
                    "bg-red-500/10 text-red-500 border-red-500/20":
                      tone === "danger",
                  },
                )}
              >
                {tag.label}
              </span>
            );
          })}
        </div>
      )}

      {video.transcript && (
        <div
          className="text-xs text-muted-foreground pl-2.5 border-l-2 py-1 italic leading-relaxed border-l-[color:var(--accent-color,var(--primary))]"
          style={{ "--accent-color": accent } as React.CSSProperties}
        >
          {video.transcript}
        </div>
      )}

      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-2 pt-2 border-t border-white/5">
        {video.author && (
          <span>
            Author: <span className="text-foreground/80">{video.author}</span>
          </span>
        )}
        {video.license && (
          <span>
            License: <span className="text-foreground/80">{video.license}</span>
          </span>
        )}
        {video.createdAt && <span>{video.createdAt}</span>}
      </div>
    </div>
  );
});
