"use client";

import { memo, useState, useRef, useEffect, useCallback } from "react";
import { isSafeUrl, sanitizeUrl } from "@onegenui/utils";
import type { SourceCitation } from "../schema";

export const CitationLink = memo(function CitationLink({
  id,
  sources,
}: {
  id: string;
  sources: SourceCitation[];
}) {
  const source = sources.find((s) => s.id === id);
  const [showPopover, setShowPopover] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState<"top" | "bottom">(
    "bottom",
  );
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Calculate popover position based on viewport
  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    setPopoverPosition(spaceBelow < 200 ? "top" : "bottom");
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!showPopover) return;
    const handleClick = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setShowPopover(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [showPopover]);

  if (!source) return <span className="text-primary/60">[{id}]</span>;

  const isWebSource = !!source.url;
  const hasExcerpt = !!(source.excerpt || source.snippet);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWebSource && !hasExcerpt && isSafeUrl(source.url)) {
      // Web source without excerpt - open URL
      window.open(source.url!, "_blank", "noopener,noreferrer");
    } else {
      // Document source or has excerpt - show popover
      updatePosition();
      setShowPopover(!showPopover);
    }
  };

  return (
    <span className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={handleClick}
        title={source.title}
        className="inline-flex items-center justify-center min-w-4 h-4 px-1 text-[10px] font-medium bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors ml-0.5 cursor-pointer"
      >
        {id}
      </button>

      {showPopover && hasExcerpt && (
        <div
          ref={popoverRef}
          className={`absolute z-50 w-72 max-w-[90vw] p-3 rounded-lg border border-white/10 bg-zinc-900/95 backdrop-blur-sm shadow-xl ${
            popoverPosition === "top" ? "bottom-full mb-2" : "top-full mt-2"
          } left-1/2 -translate-x-1/2`}
        >
          {/* Arrow */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900/95 border-white/10 rotate-45 ${
              popoverPosition === "top"
                ? "bottom-[-5px] border-r border-b"
                : "top-[-5px] border-l border-t"
            }`}
          />

          {/* Header */}
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
            {source.pageNumber && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary shrink-0">
                p. {source.pageNumber}
              </span>
            )}
            <span className="text-xs font-medium text-foreground/80 truncate">
              {source.title}
            </span>
          </div>

          {/* Excerpt */}
          <p className="text-xs text-foreground/70 leading-relaxed italic">
            "{source.excerpt || source.snippet}"
          </p>

          {/* Footer for web sources */}
          {isWebSource && (
            <a
              href={sanitizeUrl(source.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 pt-2 border-t border-white/5 flex items-center gap-1 text-[10px] text-primary hover:underline"
            >
              {source.domain || "Open source"} →
            </a>
          )}
        </div>
      )}
    </span>
  );
});
