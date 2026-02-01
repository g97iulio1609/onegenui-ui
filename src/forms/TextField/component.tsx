"use client";

import { memo, useId } from "react";
import {
  type ComponentRenderProps,
  useData,
  useFieldValidation,
} from "@onegenui/react";
import { motion } from "framer-motion";
import { resolveValueProp } from "../../utils/data-utils";
import { cn } from "../../utils/cn";

/** Animation variants with reduced-motion support */
const fieldVariants = {
  hidden: { opacity: 0, y: "0.3125rem" },
  visible: { opacity: 1, y: 0 },
};

export const TextField = memo(function TextField({
  element,
  children,
}: ComponentRenderProps) {
  const {
    label,
    bindPath,
    valuePath,
    value,
    placeholder,
    type,
    checks,
    validateOn,
    required,
    ariaLabel,
  } = element.props as {
    label?: string | null;
    bindPath?: string | null;
    valuePath?: string | null;
    value?: string | null;
    placeholder?: string | null;
    type?: string | null;
    checks?: Array<{ fn: string; message: string }> | null;
    validateOn?: string | null;
    required?: boolean | null;
    ariaLabel?: string | null;
  };

  const { data, set } = useData();
  const resolvedPath = bindPath ?? valuePath ?? null;
  const resolvedValue = resolveValueProp<string>(
    data,
    value ?? null,
    resolvedPath,
  );
  const shouldValidate = Boolean(resolvedPath);
  const { errors, validate, touch } = useFieldValidation(
    resolvedPath ?? "__unbound__",
    {
      checks: shouldValidate ? (checks ?? undefined) : undefined,
      validateOn: (validateOn as "change" | "blur" | "submit") ?? "blur",
    },
  );

  // Generate unique IDs for accessibility
  const inputId = useId();
  const errorId = useId();
  const hasErrors = errors.length > 0;

  return (
    <motion.div
      variants={fieldVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-1.5 sm:gap-2 w-full group motion-reduce:transition-none"
    >
      {label && (
        <label 
          htmlFor={inputId}
          className="text-label text-[0.5625rem] sm:text-[0.625rem] group-focus-within:text-primary transition-colors duration-300"
        >
          {label}
          {required && <span className="text-destructive ml-0.5" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          type={type || "text"}
          value={resolvedValue ?? ""}
          onChange={(e) => {
            if (!resolvedPath) return;
            set(resolvedPath, e.target.value);
            if (shouldValidate && validateOn === "change") validate();
          }}
          onBlur={() => {
            if (!resolvedPath) return;
            if (!shouldValidate) return;
            touch();
            if (validateOn === "blur" || !validateOn) validate();
          }}
          placeholder={placeholder ?? ""}
          required={required ?? undefined}
          aria-label={ariaLabel ?? undefined}
          aria-invalid={hasErrors || undefined}
          aria-describedby={hasErrors ? errorId : undefined}
          aria-required={required ?? undefined}
          className={cn(
            "glass-surface flex min-h-[2.75rem] sm:h-10 w-full rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground shadow-sm transition-all duration-300",
            "hover:border-white/20 hover:bg-white/10",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50",
            "placeholder:text-muted-foreground touch-manipulation",
            "motion-reduce:transition-none",
            hasErrors
              ? "border-destructive/50 focus-visible:ring-destructive/50 text-destructive"
              : "",
          )}
        />
        <div 
          className="absolute top-0 right-0 p-1 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 border-t border-r border-primary rounded-tr-sm" />
        </div>
      </div>

      {hasErrors && (
        <div id={errorId} role="alert" aria-live="polite">
          {errors.map((error, i) => (
            <span
              key={i}
              className="text-[0.5625rem] sm:text-[0.625rem] font-mono font-bold text-destructive flex items-center gap-1 sm:gap-1.5"
            >
              <span className="w-1 h-1 bg-destructive rounded-full flex-shrink-0" aria-hidden="true" />{" "}
              {error}
            </span>
          ))}
        </div>
      )}
      {children}
    </motion.div>
  );
});
