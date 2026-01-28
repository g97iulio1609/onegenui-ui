"use client";

import React, { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import type { Action } from "@onegenui/core";
import { cn } from "../../utils/cn";

export const Button = memo(function Button({
  element,
  onAction,
  loading,
  children,
}: ComponentRenderProps) {
  const { label, variant, size, action, actionParams, disabled } =
    element.props as {
      label?: string | null;
      variant?: "primary" | "secondary" | "danger" | "ghost" | null;
      size?: "sm" | "md" | "lg" | null;
      action?: string | Action | null;
      actionParams?: Record<string, unknown> | null;
      disabled?: boolean | null;
    };

  const resolvedAction: Action | undefined =
    typeof action === "string"
      ? { name: action, params: actionParams ?? undefined }
      : (action ?? undefined);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => !disabled && resolvedAction && onAction?.(resolvedAction)}
      disabled={!!disabled || loading}
      className={cn(
        "relative inline-flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
        variant === "primary" || !variant
          ? "btn-primary"
          : variant === "secondary"
            ? "btn-secondary"
            : variant === "danger"
              ? "btn-accent bg-destructive hover:bg-destructive/90 shadow-destructive/20"
              : variant === "ghost"
                ? "btn-ghost"
                : "",
        size === "sm"
          ? "h-8 px-3 text-[0.625rem]"
          : size === "lg"
            ? "h-11 px-8 text-sm"
            : "h-9 px-4",
      )}
    >
      {/* Shine effect for primary */}
      {variant === "primary" && (
        <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
      )}

      {loading ? <span className="mr-2 animate-spin">⏳</span> : null}
      {loading ? "Loading..." : label}
      {!loading && children}
    </motion.button>
  );
});
