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
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-2 w-full group"
    >
      {label && (
        <label className="text-label group-focus-within:text-primary transition-colors duration-300">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type || "text"}
          value={resolvedValue ?? ""}
          onChange={(e) => {
            if (!resolvedPath) return; // Read-only if no path
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
            "glass-surface flex h-10 w-full rounded-lg px-3 py-1 text-sm text-foreground shadow-sm transition-all duration-300",
            "hover:border-white/20 hover:bg-white/10",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:border-primary/50",
            "placeholder:text-muted-foreground",
            errors.length > 0
              ? "border-destructive/50 focus-visible:ring-destructive/50 text-destructive"
              : "",
          )}
        />
        {/* Tech corner accent */}
        <div className="absolute top-0 right-0 p-1 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none">
          <div className="w-1.5 h-1.5 border-t border-r border-primary rounded-tr-sm" />
        </div>
      </div>

      {errors.map((error, i) => (
        <span
          key={i}
          className="text-[10px] font-mono font-bold text-destructive flex items-center gap-1.5"
        >
          <span className="w-1 h-1 bg-destructive rounded-full" /> {error}
        </span>
      ))}
      {children}
    </motion.div>
  );
});
