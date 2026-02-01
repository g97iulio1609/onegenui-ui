"use client";

import React, { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import type { Action } from "@onegenui/core";
import { cn } from "../../utils/cn";

/** Animation variants with reduced-motion support */
const buttonVariants = {
  tap: { scale: 0.95 },
  hover: { scale: 1.03 },
};

/** Mobile-first responsive size classes */
const SIZE_CLASSES: Record<string, string> = {
  sm: "min-h-[2.25rem] sm:h-8 px-2.5 sm:px-3 text-[0.625rem]",
  md: "min-h-[2.75rem] sm:h-9 px-3 sm:px-4 text-xs sm:text-sm",
  lg: "min-h-[3rem] sm:h-11 px-4 sm:px-8 text-sm",
};

export const Button = memo(function Button({
  element,
  onAction,
  loading,
  children,
}: ComponentRenderProps) {
  const { 
    label, 
    variant, 
    size, 
    action, 
    actionParams, 
    disabled,
    ariaLabel,
    ariaDescribedBy,
  } = element.props as {
    label?: string | null;
    variant?: "primary" | "secondary" | "danger" | "ghost" | null;
    size?: "sm" | "md" | "lg" | null;
    action?: string | Action | null;
    actionParams?: Record<string, unknown> | null;
    disabled?: boolean | null;
    ariaLabel?: string | null;
    ariaDescribedBy?: string | null;
  };

  const resolvedAction: Action | undefined =
    typeof action === "string"
      ? { name: action, params: actionParams ?? undefined }
      : (action ?? undefined);

  // Use ariaLabel if provided, otherwise use label for accessibility
  const accessibleLabel = ariaLabel || label || undefined;

  return (
    <motion.button
      variants={buttonVariants}
      whileTap="tap"
      whileHover="hover"
      onClick={() => !disabled && resolvedAction && onAction?.(resolvedAction)}
      disabled={!!disabled || loading}
      aria-label={accessibleLabel}
      aria-describedby={ariaDescribedBy ?? undefined}
      aria-busy={loading || undefined}
      aria-disabled={!!disabled || loading || undefined}
      className={cn(
        "relative inline-flex items-center justify-center transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
        "active:scale-95 touch-manipulation",
        // Reduced motion support
        "motion-reduce:transition-none motion-reduce:transform-none",
        variant === "primary" || !variant
          ? "btn-primary"
          : variant === "secondary"
            ? "btn-secondary"
            : variant === "danger"
              ? "btn-accent bg-destructive hover:bg-destructive/90 shadow-destructive/20"
              : variant === "ghost"
                ? "btn-ghost"
                : "",
        SIZE_CLASSES[size || "md"],
      )}
    >
      {variant === "primary" && (
        <div 
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 motion-reduce:hidden" 
          aria-hidden="true"
        />
      )}

      {loading ? (
        <span 
          className="mr-1.5 sm:mr-2 animate-spin text-[0.625rem] sm:text-xs motion-reduce:animate-none"
          aria-hidden="true"
        >
          ⏳
        </span>
      ) : null}
      {loading ? "Loading..." : label}
      {!loading && children}
    </motion.button>
  );
});
