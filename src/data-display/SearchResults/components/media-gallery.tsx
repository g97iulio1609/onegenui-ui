import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "../../../utils/cn";
import { detectVideoEmbed } from "./video-utils";

export interface MediaItem {
  type: "image" | "video";
  url: string;
  title: string;
  source?: string;
  thumbnail?: string;
  provider?: string;
  duration?: string;
}

export const MediaGallery = memo(function MediaGallery({
  items,
}: {
  items: MediaItem[];
}) {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  const handleVideoClick = (idx: number, item: MediaItem) => {
    if (item.type === "video") {
      setActiveVideo(activeVideo === idx ? null : idx);
    }
  };

  return (
    <div className="mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {items.map((item, idx) => {
          const isVideoActive = activeVideo === idx && item.type === "video";
          const embedInfo =
            item.type === "video" ? detectVideoEmbed(item.url) : null;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={cn(
                "group cursor-pointer",
                isVideoActive &&
                  "col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5",
              )}
            >
              <div
                className={cn(
                  "relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all",
                  isVideoActive ? "aspect-video w-full" : "aspect-[4/3] w-full",
                )}
                onClick={() => handleVideoClick(idx, item)}
              >
                {isVideoActive && embedInfo ? (
                  <iframe
                    src={embedInfo.embedUrl}
                    title={item.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                  />
                ) : isVideoActive && !embedInfo ? (
                  <video
                    src={item.url}
                    controls
                    autoPlay
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                  >
                    <source src={item.url} />
                  </video>
                ) : item.type === "video" ? (
                  <div className="relative w-full h-full">
                    <img
                      src={item.thumbnail || item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all">
                        <Play size={18} className="text-white ml-0.5" />
                      </div>
                    </div>
                    {item.duration && (
                      <div className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md bg-black/70 text-white/90 font-mono">
                        {item.duration}
                      </div>
                    )}
                    {item.provider && (
                      <div className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 font-medium uppercase tracking-wide">
                        {item.provider}
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </>
                )}
              </div>
              {!isVideoActive && (
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-snug">
                  {item.title}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});
