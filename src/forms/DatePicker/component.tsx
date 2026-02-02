"use client";

import { memo, useId } from "react";
import { type ComponentRenderProps, useData } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { resolveValueProp } from "../../utils/data-utils";

/** Animation variants */
const dateVariants = {
  hidden: { opacity: 0, y: "0.3125rem" },
  visible: { opacity: 1, y: 0 },
};

export const DatePicker = memo(function DatePicker({
  element,
  children,
}: ComponentRenderProps) {
  const { label, bindPath, valuePath, value, placeholder, required, disabled, error } = element.props as {
    label?: string | null;
    bindPath?: string | null;
    valuePath?: string | null;
    value?: string | null;
    placeholder?: string | null;
    required?: boolean;
    disabled?: boolean;
    error?: string | null;
  };
  const { data, set } = useData();
  const inputId = useId();
  const errorId = useId();
  const resolvedPath = bindPath ?? valuePath ?? null;
  const resolvedValue = resolveValueProp<string>(
    data,
    value ?? null,
    resolvedPath,
  );

  const hasError = Boolean(error);

  return (
    <motion.div
      variants={dateVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 }}
      className={cn(
        "flex flex-col gap-1 sm:gap-1.5 w-full",
        "motion-reduce:animate-none",
      )}
    >
      {label && (
        <label
          htmlFor={inputId}
          className="text-label text-[0.5625rem] sm:text-[0.625rem]"
        >
          {label}
          {required && <span className="text-destructive ml-0.5">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type="date"
        value={resolvedValue ?? ""}
        placeholder={placeholder ?? ""}
        onChange={(e) => resolvedPath && set(resolvedPath, e.target.value)}
        required={required}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? errorId : undefined}
        aria-required={required || undefined}
        className={cn(
          "glass-surface flex min-h-[2.75rem] sm:h-10 w-full rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50",
          "disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 touch-manipulation",
          "motion-reduce:transition-none",
          hasError && "border-destructive focus:ring-destructive/50",
        )}
      />
      {error && (
        <span
          id={errorId}
          role="alert"
          className="text-destructive text-[0.5625rem] sm:text-[0.625rem]"
        >
          {error}
        </span>
      )}
      {children}
    </motion.div>
  );
});
