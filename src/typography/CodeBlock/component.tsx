import { memo, useState } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import { ChevronDown, ChevronUp, Code2 } from "lucide-react";

type CodeSnippet = {
  id?: string | null;
  title?: string | null;
  language?: string | null;
  content: string;
  summary?: string | null;
  status?: "generating" | "ready" | "failed" | null;
  progress?: number | null;
};

export const CodeBlock = memo(function CodeBlock({
  element,
  children,
}: ComponentRenderProps) {
  const { title, snippets = [] } = element.props as {
    title?: string | null;
    snippets?: CodeSnippet[] | null;
  };
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!snippets || snippets.length === 0) {
    return (
      <div className="text-muted-foreground text-sm italic">
        No code snippets
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {title && (
        <h3 className="text-lg font-semibold tracking-tight m-0">{title}</h3>
      )}
      <div className="flex flex-col gap-3">
        {snippets.map((snippet, index) => {
          const snippetId = snippet.id ?? `${index}`;
          const isExpanded = expandedId === snippetId;
          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={snippetId}
              data-selectable-item
              data-element-key={element.key}
              data-item-id={snippetId}
              className="rounded-xl border border-white/10 card-glass overflow-hidden shadow-lg"
            >
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : snippetId)}
                className={cn(
                  "w-full flex items-center justify-between p-4 text-left border-0 bg-transparent cursor-pointer transition-colors hover:bg-white/5",
                  isExpanded && "bg-white/5",
                )}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold flex items-center gap-2 text-foreground">
                    <Code2 size={16} className="text-muted-foreground" />
                    {snippet.title ?? "Untitled snippet"}
                  </span>
                  {snippet.summary && (
                    <span className="text-xs text-muted-foreground">
                      {snippet.summary}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                    {snippet.language ?? "Code"}
                  </span>
                  {isExpanded ? (
                    <ChevronUp size={16} className="text-muted-foreground" />
                  ) : (
                    <ChevronDown size={16} className="text-muted-foreground" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="relative border-t border-white/10 bg-black/20"
                  >
                    <pre className="m-0 p-4 text-xs overflow-x-auto font-mono leading-relaxed text-foreground">
                      <code>{snippet.content}</code>
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      {children}
    </div>
  );
});
