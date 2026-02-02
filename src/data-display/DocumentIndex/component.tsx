"use client";

import { memo, useState, useCallback } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ChevronRight,
  ChevronDown,
  Loader2,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Hash,
} from "lucide-react";
import type { DocumentIndexNode, DocumentIndexStatus } from "./schema";

type DocumentIndexProps = {
  fileName: string;
  status?: DocumentIndexStatus | null;
  message?: string | null;
  progress?: number | null;
  pageCount?: number | null;
  currentPage?: number | null;
  description?: string | null;
  nodes?: DocumentIndexNode[] | null;
  error?: string | null;
};

const STATUS_CONFIG: Record<
  DocumentIndexStatus,
  { label: string; icon: typeof Loader2; color: string }
> = {
  idle: { label: "Ready", icon: FileText, color: "text-muted-foreground" },
  parsing: { label: "Parsing PDF", icon: Loader2, color: "text-blue-400" },
  analyzing: {
    label: "Analyzing structure",
    icon: Loader2,
    color: "text-purple-400",
  },
  building: {
    label: "Building index",
    icon: Loader2,
    color: "text-amber-400",
  },
  complete: { label: "Complete", icon: CheckCircle2, color: "text-green-400" },
  error: { label: "Error", icon: AlertCircle, color: "text-red-400" },
} as const;

const LOADING_STATUSES = new Set<DocumentIndexStatus>([
  "parsing",
  "analyzing",
  "building",
]);

export const DocumentIndex = memo(function DocumentIndex({
  element,
  children,
}: ComponentRenderProps) {
  const props = element.props as DocumentIndexProps;
  const {
    fileName,
    status = "idle",
    message,
    progress,
    pageCount,
    currentPage,
    description,
    nodes,
    error,
  } = props;

  const currentStatus = status || "idle";
  const config = STATUS_CONFIG[currentStatus];
  const StatusIcon = config.icon;
  const isLoading = LOADING_STATUSES.has(currentStatus);

  return (
    <section className="flex flex-col gap-4 w-full" aria-label={`Document: ${fileName}`}>
      {/* Card container */}
      <article className="flex flex-col gap-3 p-4 rounded-xl border border-white/10 card-glass">
        {/* Header */}
        <header className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
              <BookOpen size={20} className="text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground truncate m-0">
                {fileName}
              </h3>
              {description && (
                <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5 m-0">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Status badge */}
          <div
            role="status"
            aria-live="polite"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.color} bg-white/5`}
          >
            <StatusIcon size={12} className={isLoading ? "animate-spin motion-reduce:animate-none" : ""} aria-hidden="true" />
            <span>{config.label}</span>
          </div>
        </header>

        {/* Progress bar */}
        {isLoading && (
          <div className="space-y-1.5" role="status" aria-label={`Processing: ${progress != null ? `${Math.round(progress)}%` : "in progress"}`}>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{message || "Processing..."}</span>
              {progress != null && <span aria-hidden="true">{Math.round(progress)}%</span>}
              {currentPage != null && pageCount != null && (
                <span aria-hidden="true">
                  Page {currentPage} / {pageCount}
                </span>
              )}
            </div>
            <div
              className="h-1.5 bg-white/5 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress ?? undefined}
            >
              <motion.div
                className="h-full bg-primary/60 rounded-full motion-reduce:animate-none"
                initial={{ width: 0 }}
                animate={{
                  width: progress != null ? `${progress}%` : "30%",
                }}
                transition={{ duration: 0.3 }}
                style={
                  progress == null
                    ? {
                        animation: "indeterminate 1.5s infinite ease-in-out",
                      }
                    : undefined
                }
              />
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div role="alert" className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400">
            {error}
          </div>
        )}

        {/* Index tree */}
        {nodes && nodes.length > 0 && (
          <nav className="mt-2 border-t border-white/5 pt-3" aria-label="Document structure">
            <div className="flex items-center gap-2 mb-2">
              <Hash size={14} className="text-muted-foreground" aria-hidden="true" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Document Structure
              </span>
              {pageCount && (
                <span className="text-xs text-muted-foreground/60">
                  ({pageCount} pages)
                </span>
              )}
            </div>
            <ul className="space-y-0.5 list-none p-0" role="tree">
              <AnimatePresence mode="popLayout">
                {nodes.map((node, idx) => (
                  <IndexNode key={node.id || idx} node={node} depth={0} />
                ))}
              </AnimatePresence>
            </ul>
          </nav>
        )}

        {/* Empty state when complete but no nodes */}
        {currentStatus === "complete" && (!nodes || nodes.length === 0) && (
          <div role="status" className="py-8 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl">
            <FileText className="w-10 h-10 opacity-20 mb-3" aria-hidden="true" />
            <p className="text-xs uppercase tracking-widest opacity-50 m-0">
              No structure found
            </p>
          </div>
        )}
      </article>

      {/* Children rendered last */}
      {children}
    </section>
  );
});

const IndexNode = memo(function IndexNode({
  node,
  depth,
}: {
  node: DocumentIndexNode;
  depth: number;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const hasChildren = node.children && node.children.length > 0;
  const paddingLeft = depth * 16 + 8;

  const handleToggle = useCallback(() => {
    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
  }, [hasChildren]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if ((e.key === "Enter" || e.key === " ") && hasChildren) {
        e.preventDefault();
        setExpanded((prev) => !prev);
      }
    },
    [hasChildren],
  );

  return (
    <motion.li
      role="treeitem"
      aria-expanded={hasChildren ? expanded : undefined}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.2 }}
      className="motion-reduce:animate-none"
    >
      <div
        role={hasChildren ? "button" : undefined}
        tabIndex={hasChildren ? 0 : undefined}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`w-full flex items-center gap-2 py-1.5 px-2 rounded-md text-left
          ${hasChildren ? "hover:bg-white/5 cursor-pointer" : "cursor-default"}
          transition-colors motion-reduce:transition-none group`}
        style={{ paddingLeft }}
      >
        {/* Expand icon */}
        <span className="w-4 h-4 flex items-center justify-center shrink-0" aria-hidden="true">
          {hasChildren ? (
            expanded ? (
              <ChevronDown size={14} className="text-muted-foreground" />
            ) : (
              <ChevronRight size={14} className="text-muted-foreground" />
            )
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          )}
        </span>

        {/* Title */}
        <span
          className={`flex-1 text-sm truncate ${
            depth === 0 ? "font-medium text-foreground" : "text-foreground/80"
          }`}
        >
          {node.title}
        </span>

        {/* Page range */}
        {(node.startPage != null || node.endPage != null) && (
          <span className="text-xs text-muted-foreground/60 shrink-0 tabular-nums">
            {node.startPage != null && node.endPage != null
              ? node.startPage === node.endPage
                ? `p.${node.startPage}`
                : `p.${node.startPage}-${node.endPage}`
              : node.startPage != null
                ? `p.${node.startPage}+`
                : `p.${node.endPage}`}
          </span>
        )}
      </div>

      {/* Summary */}
      <AnimatePresence>
        {node.summary && expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-xs text-muted-foreground/70 leading-relaxed pb-1 motion-reduce:animate-none"
            style={{ paddingLeft: paddingLeft + 24, paddingRight: 8 }}
          >
            {node.summary}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Children */}
      <AnimatePresence>
        {expanded && hasChildren && (
          <motion.ul
            role="group"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="list-none p-0 motion-reduce:animate-none"
          >
            {node.children!.map((child, idx) => (
              <IndexNode key={child.id || idx} node={child} depth={depth + 1} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
});
