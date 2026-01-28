import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import {
  buildStatusLabel,
  getAccentColor,
  getProgressPercent,
  getStatusTone,
} from "../../utils/media-utils";
import { Images } from "lucide-react";

type GalleryItem = {
  id?: string | null;
  title?: string | null;
  src?: string | null;
  prompt?: string | null;
  status?: "generating" | "ready" | "failed" | null;
  progress?: number | null;
  tags?: Array<{
    label: string;
    tone?: "default" | "success" | "warning" | "danger";
  }> | null;
};

export const Gallery = memo(function Gallery({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    items = [],
    accentColor,
  } = element.props as {
    title?: string | null;
    items?: GalleryItem[] | null;
    accentColor?: string | null;
  };

  const accent = getAccentColor(accentColor ?? undefined);

  if (!items || items.length === 0) {
    return (
      <div className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground">
        <Images className="w-10 h-10 opacity-20 mb-3" />
        <p className="font-mono text-xs uppercase tracking-widest opacity-50">
          No images in gallery
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {title && <h3 className="m-0 text-lg font-semibold">{title}</h3>}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
        {items.map((item, index) => {
          const status = item.status ?? "ready";
          const statusLabel = buildStatusLabel(status);
          const statusTone = getStatusTone(status);
          const progress = getProgressPercent(item.progress);

          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              key={item.id ?? `${item.title ?? "image"}-${index}`}
              data-selectable-item
              data-element-key={element.key}
              data-item-id={item.id ?? `${index}`}
              className="rounded-2xl overflow-hidden border border-[color:color-mix(in_srgb,var(--accent-color,var(--border)),transparent_86%)] card-glass relative min-h-[160px] hover:shadow-xl"
              // Using CSS variable for dynamic accent color to avoid inline style for border color directly
              style={
                {
                  "--accent-color": accent,
                } as React.CSSProperties
              }
            >
              <img
                src={
                  item.src ??
                  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                }
                alt={item.title ?? "AI image"}
                className="w-full h-[180px] object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-1.5 z-[2]">
                <span
                  className={cn(
                    "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md",
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
                {status === "generating" && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md bg-white/10 text-white border-white/10">
                    {progress}%
                  </span>
                )}
              </div>

              <div className="p-3 flex flex-col gap-1.5">
                <div className="font-semibold text-[13px] text-foreground truncate">
                  {item.title ?? "Untitled"}
                </div>
                {item.prompt && (
                  <div className="text-xs text-muted-foreground line-clamp-2">
                    {item.prompt}
                  </div>
                )}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {item.tags.map((tag) => {
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
              </div>
            </motion.div>
          );
        })}
      </div>
      {children}
    </div>
  );
});
