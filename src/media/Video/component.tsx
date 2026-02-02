import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import type { VideoProps } from "./schema";
import {
  buildStatusLabel,
  getAccentColor,
  getProgressPercent,
  getStatusTone,
} from "../../utils/media-utils";
import { Video as VideoIcon } from "lucide-react";
import { getVideoSource, VideoPlayer, VideoMetadataPanel } from "./components";

export const Video = memo(function Video({
  element,
  children,
}: ComponentRenderProps) {
  const { title, videos = [], accentColor } = element.props as VideoProps;
  const accent = getAccentColor(accentColor ?? undefined);

  if (!videos || videos.length === 0) {
    return (
      <div
        role="status"
        className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground motion-reduce:animate-none"
      >
        <VideoIcon className="w-10 h-10 opacity-20 mb-3" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-widest opacity-50">
          No videos available
        </p>
      </div>
    );
  }

  return (
    <figure className="flex flex-col gap-4" role="group" aria-label={title ?? "Video gallery"}>
      {title && <figcaption className="m-0 text-lg font-semibold">{title}</figcaption>}
      <div className="flex flex-col gap-4" role="list">
        {videos.map((video, index) => {
          const status = video.status?.status ?? "ready";
          const progress = getProgressPercent(video.status?.progress);
          const statusTone = getStatusTone(status);
          const statusLabel = buildStatusLabel(status);
          const videoSource = getVideoSource(video);

          return (
            <motion.article
              role="listitem"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={video.id ?? `${video.title ?? "video"}-${index}`}
              className="grid grid-cols-1 md:grid-cols-[2fr_1.3fr] gap-0 overflow-hidden rounded-[18px] border border-white/10 bg-zinc-900 shadow-2xl bg-[linear-gradient(135deg,rgba(24,24,27,0.9)_0%,rgba(9,9,11,0.95)_100%)] motion-reduce:animate-none"
              aria-label={video.title ?? `Video ${index + 1}`}
            >
              <VideoPlayer
                video={video}
                status={status}
                statusTone={statusTone}
                statusLabel={statusLabel}
                videoSource={videoSource}
              />
              <VideoMetadataPanel
                video={video}
                elementKey={element.key}
                index={index}
                status={status}
                progress={progress}
                accent={accent}
              />
            </motion.article>
          );
        })}
      </div>
      {children}
    </figure>
  );
});
