import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import {
  buildStatusLabel,
  formatBytes,
  getAccentColor,
  getProgressPercent,
  getStatusTone,
} from "../../utils/media-utils";
import { Image as ImageIcon } from "lucide-react";

type ImageItem = {
  id?: string | null;
  title?: string | null;
  caption?: string | null;
  description?: string | null;
  createdAt?: string | null;
  author?: string | null;
  license?: string | null;
  /** Direct source URL - REQUIRED */
  source: string;
  width?: number | null;
  height?: number | null;
  format?: string | null;
  sizeBytes?: number | null;
  alt?: string | null;
  tags?: Array<{
    label: string;
    tone?: "default" | "success" | "warning" | "danger";
  }> | null;
  metadata?: {
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
  } | null;
  status?: {
    status?: "generating" | "ready" | "failed" | null;
    progress?: number | null;
    errorMessage?: string | null;
  } | null;
  location?: {
    sourceType?: "stream" | "upload" | "url" | "embed" | null;
    src?: string | null;
    streamUrl?: string | null;
    embedUrl?: string | null;
    uploadName?: string | null;
  } | null;
};

export const Image = memo(function Image({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    images = [],
    accentColor,
  } = element.props as {
    title?: string | null;
    images?: ImageItem[] | null;
    accentColor?: string | null;
    columns?: number | null;
  };

  const accent = getAccentColor(accentColor ?? undefined);

  if (!images || images.length === 0) {
    return (
      <div className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground">
        <ImageIcon className="w-10 h-10 opacity-20 mb-3" />
        <p className="font-mono text-xs uppercase tracking-widest opacity-50">
          No images available
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {title && <h3 className="m-0 text-lg font-semibold">{title}</h3>}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {images.map((image, index) => {
          const status = image.status?.status ?? "ready";
          const progress = getProgressPercent(image.status?.progress);
          const statusTone = getStatusTone(status);
          const statusLabel = buildStatusLabel(status);
          const isStreaming =
            status === "generating" && !!image.location?.streamUrl;

          // source is REQUIRED - no fallback placeholder
          const imageSrc = image.source;

          // Skip images without valid source
          if (!imageSrc) {
            return null;
          }

          const metaItems: Array<{ label: string; value: string }> = [];
          if (image.format)
            metaItems.push({ label: "Format", value: image.format });
          if (image.width && image.height) {
            metaItems.push({
              label: "Size",
              value: `${image.width}×${image.height}`,
            });
          }
          if (image.sizeBytes) {
            metaItems.push({
              label: "File",
              value: formatBytes(image.sizeBytes),
            });
          }
          if (image.metadata?.model) {
            metaItems.push({ label: "Model", value: image.metadata.model });
          }
          if (image.metadata?.style) {
            metaItems.push({ label: "Style", value: image.metadata.style });
          }

          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={image.id ?? `${image.title ?? "image"}-${index}`}
              data-selectable-item
              data-element-key={element.key}
              data-item-id={image.id ?? `${index}`}
              className="flex flex-col min-w-0 overflow-hidden rounded-[18px] border border-white/10 bg-zinc-900 shadow-2xl transition-all bg-[linear-gradient(135deg,rgba(24,24,27,0.9)_0%,rgba(9,9,11,0.95)_100%)]"
            >
              <div className="relative">
                {/* Only show status badge if not ready */}
                {status !== "ready" && (
                  <div className="absolute top-4 left-4 flex gap-2 items-center z-[2]">
                    <span
                      className={cn(
                        "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md",
                        {
                          "bg-white/10 text-white border-white/10":
                            statusTone === "default",
                          "bg-emerald-500/20 text-emerald-400 border-emerald-500/30":
                            statusTone === "success",
                          "bg-amber-500/20 text-amber-400 border-amber-500/30":
                            statusTone === "warning",
                          "bg-rose-500/20 text-rose-400 border-rose-500/30":
                            statusTone === "danger",
                        },
                      )}
                    >
                      {statusLabel}
                    </span>
                  </div>
                )}

                <img
                  src={imageSrc}
                  alt={image.alt ?? image.title ?? "AI generated image"}
                  className={cn("w-full h-[220px] object-cover block", {
                    "opacity-40": status === "failed",
                  })}
                />

                {isStreaming && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/45 text-white text-sm font-semibold backdrop-blur-sm">
                    Streaming preview...
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <div className="text-[15px] font-semibold text-foreground">
                    {image.title || image.caption || image.alt || ""}
                  </div>
                  {image.caption && (
                    <div className="text-[13px] text-muted-foreground line-clamp-2">
                      {image.caption}
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
                        className="h-full rounded-full bg-[var(--progress-color,var(--primary))]"
                        // Using inline style for dynamic progress width and color
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

                {image.status?.errorMessage && (
                  <div className="text-xs text-destructive">
                    {image.status.errorMessage}
                  </div>
                )}

                {image.metadata?.prompt && (
                  <div className="bg-white/5 border border-white/5 rounded-xl px-3 py-2.5 text-xs text-muted-foreground/90 font-medium leading-relaxed line-clamp-3">
                    {image.metadata.prompt}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {metaItems.map((meta) => (
                    <div key={meta.label} className="flex flex-col gap-0.5">
                      <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold opacity-70">
                        {meta.label}
                      </span>
                      <span className="text-[13px] text-foreground font-semibold truncate">
                        {meta.value}
                      </span>
                    </div>
                  ))}
                </div>

                {(image.tags?.length ?? 0) > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {image.tags?.map((tag) => {
                      const tone = tag.tone ?? "default";
                      return (
                        <span
                          key={tag.label}
                          className={cn(
                            "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border",
                            {
                              "bg-white/5 text-muted-foreground border-white/10":
                                tone === "default",
                              "bg-emerald-500/10 text-emerald-500 border-emerald-500/20":
                                tone === "success",
                              "bg-amber-500/10 text-amber-500 border-amber-500/20":
                                tone === "warning",
                              "bg-rose-500/10 text-rose-500 border-rose-500/20":
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

                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-2 pt-2 border-t border-white/5">
                  {image.author && <span>Author: {image.author}</span>}
                  {image.license && <span>License: {image.license}</span>}
                  {image.createdAt && <span>{image.createdAt}</span>}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {children}
    </div>
  );
});
