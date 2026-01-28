"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import type { Action } from "@onegenui/core";
import { cn } from "../../utils/cn";

export const Empty = memo(function Empty({
  element,
  onAction,
  children,
}: ComponentRenderProps) {
  const { title, description, action, actionLabel } = element.props as {
    title: string;
    description?: string | null;
    action?: string | Action | null;
    actionLabel?: string | null;
  };

  const resolvedAction: Action | undefined =
    typeof action === "string" ? { name: action } : (action ?? undefined);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-10 text-center"
    >
      <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      {description && (
        <p className="m-0 text-sm text-muted-foreground">{description}</p>
      )}
      {resolvedAction && actionLabel && (
        <button
          onClick={() => onAction?.(resolvedAction)}
          className={cn("mt-4 btn-secondary")}
        >
          {actionLabel}
        </button>
      )}
      {children}
    </motion.div>
  );
});
