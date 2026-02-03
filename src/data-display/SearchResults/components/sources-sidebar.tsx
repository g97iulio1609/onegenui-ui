import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { sanitizeUrl } from "@onegenui/utils";
import type { SourceCitation } from "../schema";
import { cn } from "../../../utils/cn";

export const SourcesSidebar = memo(function SourcesSidebar({
  sources,
  expanded,
  onToggle,
}: {
  sources: SourceCitation[];
  expanded: boolean;
  onToggle: () => void;
}) {
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());
  const visibleSources = expanded ? sources : sources.slice(0, 4);

  return (
    <div className="flex flex-col gap-2">
      {/* Header with count */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
        <div className="flex -space-x-1">
          {sources.slice(0, 3).map((s, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full bg-white/10 border-2 border-zinc-900 flex items-center justify-center overflow-hidden"
            >
              {s.favicon && !imgErrors.has(s.favicon) ? (
                <img
                  src={s.favicon}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={() =>
                    setImgErrors((prev) => new Set(prev).add(s.favicon!))
                  }
                />
              ) : (
                <Globe size={10} className="text-white/40" />
              )}
            </div>
          ))}
        </div>
        <span className="font-medium">{sources.length} sources</span>
      </div>

      {/* Source list */}
      <div className="flex flex-col gap-1.5">
        {visibleSources.map((source, idx) => (
          <motion.a
            key={source.id || idx}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.03 }}
            href={sanitizeUrl(source.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all no-underline"
          >
            <div className="shrink-0 w-5 h-5 rounded-md bg-white/10 flex items-center justify-center overflow-hidden">
              {source.favicon && !imgErrors.has(source.favicon) ? (
                <img
                  src={source.favicon}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={() =>
                    setImgErrors((prev) => new Set(prev).add(source.favicon!))
                  }
                />
              ) : (
                <Globe size={12} className="text-white/40" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                {source.title}
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[10px] text-muted-foreground/70">
                  {source.domain}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Show all button */}
      {sources.length > 4 && (
        <button
          onClick={onToggle}
          className="flex items-center justify-center gap-1 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
        >
          {expanded ? "Show less" : "Show all"}
          <ChevronDown
            size={14}
            className={cn("transition-transform", expanded && "rotate-180")}
          />
        </button>
      )}
    </div>
  );
});
