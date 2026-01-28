"use client";

import { memo } from "react";
import {
  type ComponentRenderProps,
  useData,
  useFieldValidation,
} from "@onegenui/react";
import { motion } from "framer-motion";
import { resolveValueProp } from "../../utils/data-utils";
import { cn } from "../../utils/cn";

/** Animation variants */
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
  } = element.props as {
    label?: string | null;
    bindPath?: string | null;
    valuePath?: string | null;
    value?: string | null;
    placeholder?: string | null;
    type?: string | null;
    checks?: Array<{ fn: string; message: string }> | null;
    validateOn?: string | null;
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

  return (
    <motion.div
      variants={fieldVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-1.5 sm:gap-2 w-full group"
    >
      {label && (
        <label className="text-label text-[0.5625rem] sm:text-[0.625rem] group-focus-within:text-primary transition-colors duration-300">
          {label}
        </label>
      )}
      <div className="relative">
        <input
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
          className={cn(
            "glass-surface flex min-h-[2.75rem] sm:h-10 w-full rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground shadow-sm transition-all duration-300",
            "hover:border-white/20 hover:bg-white/10",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50",
            "placeholder:text-muted-foreground touch-manipulation",
            errors.length > 0
              ? "border-destructive/50 focus-visible:ring-destructive/50 text-destructive"
              : "",
          )}
        />
        <div className="absolute top-0 right-0 p-1 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 border-t border-r border-primary rounded-tr-sm" />
        </div>
      </div>

      {errors.map((error, i) => (
        <span
          key={i}
          className="text-[0.5625rem] sm:text-[0.625rem] font-mono font-bold text-destructive flex items-center gap-1 sm:gap-1.5"
        >
          <span className="w-1 h-1 bg-destructive rounded-full flex-shrink-0" />{" "}
          {error}
        </span>
      ))}
      {children}
    </motion.div>
  );
});
