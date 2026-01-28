"use client";

import { memo } from "react";
import { type ComponentRenderProps, useData } from "@onegenui/react";
import { motion } from "framer-motion";
import { resolveValueProp } from "../../utils/data-utils";
import { cn } from "../../utils/cn";

/** Animation variants */
const badgeVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  hover: { scale: 1.05 },
};

const DOT_CLASSES: Record<string, string> = {
  default: "bg-zinc-500",
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  error: "bg-rose-400",
  info: "bg-sky-400",
};

const STATUS_CLASSES: Record<string, string> = {
  default: "status-neutral",
  success: "status-success",
  warning: "status-warning",
  error: "status-error",
  info: "status-info",
};

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
      variants={badgeVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={cn(
        "inline-flex items-center gap-1 sm:gap-1.5 transition-all text-[0.5625rem] sm:text-[0.625rem]",
        STATUS_CLASSES[tone] || STATUS_CLASSES.default,
      )}
    >
      <span
        className={cn(
          "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0",
          DOT_CLASSES[tone] || DOT_CLASSES.default,
        )}
      />
      {resolvedText}
      {children}
    </motion.span>
  );
});
