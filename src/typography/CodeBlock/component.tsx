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

/** Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: "0.625rem" },
  visible: { opacity: 1, y: 0 },
};

const expandVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
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
      <div className="text-muted-foreground text-xs sm:text-sm italic p-3 sm:p-4">
        No code snippets
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-3 sm:gap-4"
    >
      {title && (
        <h3 className="text-base sm:text-lg font-semibold tracking-tight m-0">
          {title}
        </h3>
      )}
      <div className="flex flex-col gap-2 sm:gap-3">
        {snippets.map((snippet, index) => {
          const snippetId = snippet.id ?? `${index}`;
          const isExpanded = expandedId === snippetId;
          return (
            <motion.div
              variants={itemVariants}
              key={snippetId}
              data-selectable-item
              data-element-key={element.key}
              data-item-id={snippetId}
              className="rounded-lg sm:rounded-xl border border-white/10 card-glass overflow-hidden shadow-lg"
            >
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : snippetId)}
                className={cn(
                  "w-full flex items-center justify-between p-3 sm:p-4 text-left border-0 bg-transparent cursor-pointer transition-colors hover:bg-white/5 min-h-[2.75rem]",
                  isExpanded && "bg-white/5",
                )}
              >
                <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1">
                  <span className="text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 text-foreground truncate">
                    <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                    <span className="truncate">
                      {snippet.title ?? "Untitled snippet"}
                    </span>
                  </span>
                  {snippet.summary && (
                    <span className="text-[0.625rem] sm:text-xs text-muted-foreground line-clamp-1">
                      {snippet.summary}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
                  <span className="hidden sm:inline text-[0.5625rem] sm:text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground bg-white/5 px-1.5 sm:px-2 py-0.5 rounded-full border border-white/10">
                    {snippet.language ?? "Code"}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    variants={expandVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="relative border-t border-white/10 bg-black/20"
                  >
                    <pre className="m-0 p-3 sm:p-4 text-[0.625rem] sm:text-xs overflow-x-auto font-mono leading-relaxed text-foreground">
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
    </motion.div>
  );
});
