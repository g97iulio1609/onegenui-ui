"use client";

import { memo } from "react";
import { type ComponentRenderProps, useData } from "@onegenui/react";
import { motion } from "framer-motion";
import { resolveValueProp } from "../../utils/data-utils";
import { cn } from "../../utils/cn";

export const Badge = memo(function Badge({
  element,
  children,
}: ComponentRenderProps) {
  const { text, variant } = element.props as {
    text?: string | { path: string } | null;
    variant?: string | null;
    size?: "sm" | "md" | "lg" | null;
  };
  const { data } = useData();
  const resolvedText = resolveValueProp<string>(data, text ?? null);

  const tone = (variant ?? "default") as
    | "default"
    | "success"
    | "warning"
    | "error"
    | "info";

  return (
    <motion.span
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      className={cn("inline-flex items-center gap-1.5 transition-all", {
        "status-neutral": tone === "default",
        "status-success": tone === "success",
        "status-warning": tone === "warning",
        "status-error": tone === "error",
        "status-info": tone === "info",
      })}
    >
      {/* Tiny Status Dot */}
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          tone === "default" && "bg-zinc-500",
          tone === "success" && "bg-emerald-400",
          tone === "warning" && "bg-amber-400",
          tone === "error" && "bg-rose-400",
          tone === "info" && "bg-sky-400",
        )}
      />

      {resolvedText}
      {children}
    </motion.span>
  );
});
