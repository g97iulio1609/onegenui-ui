import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Play } from "lucide-react";
import type { SearchResultItem } from "../schema";

export const RichResultCard = memo(function RichResultCard({
  result,
  index,
}: {
  result: SearchResultItem;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const [faviconError, setFaviconError] = useState(false);
  const [videoThumbError, setVideoThumbError] = useState(false);

  const hostname = (() => {
    try {
      return new URL(result.url).hostname.replace("www.", "");
    } catch {
      return result.url;
    }
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="group"
    >
      <a
        href={result.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        <div className="flex gap-4">
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Source badge */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                {result.favicon && !faviconError ? (
                  <img
                    src={result.favicon}
                    alt=""
                    className="w-3.5 h-3.5 rounded-sm"
                    onError={() => setFaviconError(true)}
                  />
                ) : (
                  <Globe size={12} className="text-white/40" />
                )}
                <span className="text-[11px] text-muted-foreground font-medium">
                  {result.source || hostname}
                </span>
              </div>
              {result.date && (
                <span className="text-[11px] text-muted-foreground/60">
                  {result.date}
                </span>
              )}
            </div>

            {/* Title with hover effect */}
            <h3 className="text-[15px] font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
              {result.title}
            </h3>

            {/* Snippet */}
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {result.snippet}
            </p>
          </div>

          {/* Image or Video thumbnail - responsive sizes */}
          {(result.video || result.image) && (
            <div className="shrink-0 w-[120px] h-[90px] sm:w-[160px] sm:h-[110px] md:w-[180px] md:h-[120px] rounded-xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-all relative">
              {result.video && !videoThumbError ? (
                <>
                  <img
                    src={result.video.thumbnail || result.video.url}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={() => setVideoThumbError(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all">
                      <Play size={14} className="text-white ml-0.5" />
                    </div>
                  </div>
                  {result.video.duration && (
                    <div className="absolute bottom-1.5 right-1.5 text-[10px] sm:text-xs px-1.5 py-0.5 rounded-md bg-black/70 text-white/90 font-mono">
                      {result.video.duration}
                    </div>
                  )}
                </>
              ) : result.image && !imgError ? (
                <img
                  src={result.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              ) : null}
            </div>
          )}
        </div>
      </a>
    </motion.div>
  );
});
