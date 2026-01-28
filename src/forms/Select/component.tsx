"use client";

import { memo } from "react";
import { type ComponentRenderProps, useData } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { resolveValueProp } from "../../utils/data-utils";

/** Animation variants */
const selectVariants = {
  hidden: { opacity: 0, y: "0.3125rem" },
  visible: { opacity: 1, y: 0 },
};

export const Select = memo(function Select({
  element,
  children,
}: ComponentRenderProps) {
  const { label, bindPath, valuePath, value, options, placeholder } =
    element.props as {
      label?: string | null;
      bindPath?: string | null;
      valuePath?: string | null;
      value?: string | null;
      options: Array<{ value: string; label: string }>;
      placeholder?: string | null;
    };

  const { data, set } = useData();
  const resolvedPath = bindPath ?? valuePath ?? null;
  const resolvedValue = resolveValueProp<string>(
    data,
    value ?? null,
    resolvedPath,
  );

  return (
    <motion.div
      variants={selectVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-1 sm:gap-1.5 w-full"
    >
      {label && (
        <label className="text-label text-[0.5625rem] sm:text-[0.625rem]">
          {label}
        </label>
      )}
      <select
        value={resolvedValue ?? ""}
        onChange={(e) => resolvedPath && set(resolvedPath, e.target.value)}
        className={cn(
          "glass-surface flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground",
          "min-h-[2.75rem] sm:h-10",
          "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
          "disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 appearance-none touch-manipulation",
          !resolvedValue && "text-muted-foreground",
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="bg-card text-foreground"
          >
            {opt.label}
          </option>
        ))}
      </select>
      {children}
    </motion.div>
  );
});
