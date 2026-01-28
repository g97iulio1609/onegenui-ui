"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import type { BrowserActionProps } from "./schema";

// Action icons and labels
const actionConfig: Record<
  string,
  { icon: string; label: string; color: string }
> = {
  navigating: { icon: "🌐", label: "Navigating", color: "#3b82f6" },
  searching: { icon: "🔍", label: "Searching", color: "#8b5cf6" },
  extracting: { icon: "📄", label: "Extracting", color: "#10b981" },
  clicking: { icon: "👆", label: "Clicking", color: "#f59e0b" },
  typing: { icon: "⌨️", label: "Typing", color: "#6366f1" },
  waiting: { icon: "⏳", label: "Waiting", color: "#6b7280" },
  capturing: { icon: "📸", label: "Capturing", color: "#ec4899" },
};

const statusConfig: Record<string, { icon: string; animation?: string }> = {
  pending: { icon: "○" },
  loading: { icon: "◌", animation: "spin 1s linear infinite" },
  complete: { icon: "✓" },
  error: { icon: "✕" },
};

export const BrowserAction = memo(function BrowserAction({
  element,
  children,
}: ComponentRenderProps) {
  const { action, target, url, status, message, error } =
    element.props as BrowserActionProps;

  const actionInfo =
    actionConfig[action ?? "navigating"] ?? actionConfig.navigating;
  const statusInfo = statusConfig[status ?? "loading"] ?? statusConfig.loading;

  const displayText = target || url || message || "";
  const isError = status === "error";
  const isComplete = status === "complete";
  const isLoading = status === "loading";

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm transition-opacity duration-300 border backdrop-blur-md",
        isError
          ? "bg-red-500/10 border-red-500/30 text-foreground"
          : "glass-surface text-foreground",
        isComplete ? "opacity-70" : "opacity-100",
      )}
    >
      {/* Action Icon */}
      <span className="text-base">{actionInfo!.icon}</span>

      {/* Action Label */}
      <span
        className="font-medium min-w-20 text-[var(--action-color)]"
        // Using CSS variable for dynamic action color to avoid inline style for color directly
        style={
          {
            "--action-color": actionInfo!.color,
          } as React.CSSProperties
        }
      >
        {actionInfo!.label}
      </span>

      {/* Target/URL */}
      <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground">
        {displayText}
      </span>

      {/* Error message */}
      {isError && error && (
        <span className="text-destructive text-xs">{error}</span>
      )}

      {/* Status Icon */}
      <span
        className={cn(
          "text-sm flex items-center justify-center",
          isError
            ? "text-destructive"
            : isComplete
              ? "text-green-500"
              : "text-muted-foreground",
          // Map the animation string roughly to classes or keep it simple
          isLoading && "animate-spin",
        )}
      >
        {statusInfo!.icon}
      </span>
      {children}
    </motion.div>
  );
});
