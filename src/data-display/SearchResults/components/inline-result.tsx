import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Globe, ChevronRight } from "lucide-react";
import type { SearchResultItem } from "../schema";

export const InlineResult = memo(function InlineResult({
  result,
  index,
}: {
  result: SearchResultItem;
  index: number;
}) {
  const [faviconError, setFaviconError] = useState(false);

  return (
    <motion.a
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02 }}
      href={result.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-all no-underline"
    >
      {/* Favicon */}
      <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
        {result.favicon && !faviconError ? (
          <img
            src={result.favicon}
            alt=""
            className="w-4 h-4 rounded-sm"
            onError={() => setFaviconError(true)}
          />
        ) : (
          <Globe size={14} className="text-white/40" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
          {result.title}
        </div>
        <div className="text-xs text-muted-foreground/70 truncate">
          {result.source || result.url}
        </div>
      </div>

      {/* Arrow */}
      <ChevronRight
        size={16}
        className="text-white/20 group-hover:text-white/40 transition-colors"
      />
    </motion.a>
  );
});
