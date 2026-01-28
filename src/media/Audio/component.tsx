import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import {
  buildStatusLabel,
  formatDuration,
  getAccentColor,
  getProgressPercent,
  getStatusTone,
} from "../../utils/media-utils";
import { Music } from "lucide-react";

type AudioTrack = {
  id?: string | null;
  title?: string | null;
  src?: string | null;
  prompt?: string | null;
  duration?: number | null;
  speaker?: string | null;
  style?: string | null;
  status?: "generating" | "ready" | "failed" | null;
  progress?: number | null;
  tags?: Array<{
    label: string;
    tone?: "default" | "success" | "warning" | "danger";
  }> | null;
};

export const Audio = memo(function Audio({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    tracks = [],
    accentColor,
  } = element.props as {
    title?: string | null;
    tracks?: AudioTrack[] | null;
    accentColor?: string | null;
  };

  const accent = getAccentColor(accentColor ?? undefined);

  if (!tracks || tracks.length === 0) {
    return (
      <div className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground">
        <Music className="w-10 h-10 opacity-20 mb-3" />
        <p className="font-mono text-xs uppercase tracking-widest opacity-50">
          No audio tracks
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {title && <h3 className="m-0 text-lg font-semibold">{title}</h3>}
      <div className="flex flex-col gap-3">
        {tracks.map((track, index) => {
          const status = track.status ?? "ready";
          const progress = getProgressPercent(track.progress);
          const tone = getStatusTone(status);
          const statusLabel = buildStatusLabel(status);

          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={track.id ?? `${track.title ?? "track"}-${index}`}
              data-selectable-item
              data-element-key={element.key}
              data-item-id={track.id ?? `${index}`}
              className="card-glass p-4 flex flex-col gap-2.5 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="text-[15px] font-semibold text-foreground">
                  {track.title ?? "Untitled"}
                </div>
                <div className="flex gap-1.5">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border",
                      {
                        "bg-white/10 text-foreground border-white/10":
                          tone === "default",
                        "bg-emerald-500/15 text-emerald-500 border-emerald-500/20":
                          tone === "success",
                        "bg-amber-500/15 text-amber-500 border-amber-500/20":
                          tone === "warning",
                        "bg-rose-500/15 text-rose-500 border-rose-500/20":
                          tone === "danger",
                      },
                    )}
                  >
                    {statusLabel}
                  </span>
                  {track.duration && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border border-white/10 bg-white/10 text-foreground">
                      {formatDuration(track.duration)}
                    </span>
                  )}
                </div>
              </div>

              <audio
                controls
                src={track.src ?? undefined}
                className="w-full mt-1 accent-[var(--accent-color,var(--primary))]"
                // Using CSS variable for dynamic accent color to avoid inline style for accent-color directly
                style={
                  {
                    "--accent-color":
                      accent !== "var(--primary)" ? accent : undefined,
                  } as React.CSSProperties
                }
              />

              {status === "generating" && (
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="text-xs text-muted-foreground">
                    Rendering {progress}%
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted/20 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full rounded-full bg-[var(--progress-color,var(--primary))]"
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

              {track.prompt && (
                <div className="text-xs text-muted-foreground/80 mt-1">
                  {track.prompt}
                </div>
              )}

              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground font-medium mt-1">
                {track.speaker && (
                  <span>
                    Voice:{" "}
                    <span className="text-foreground">{track.speaker}</span>
                  </span>
                )}
                {track.style && (
                  <span>
                    Style:{" "}
                    <span className="text-foreground">{track.style}</span>
                  </span>
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
