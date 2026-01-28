"use client";

import { memo } from "react";
import { type ComponentRenderProps, useData } from "@onegenui/react";
import { motion } from "framer-motion";
import { resolveValueProp } from "../../utils/data-utils";
import { cn } from "../../utils/cn";

/** Animation variants */
const metricVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const Metric = memo(function Metric({
  element,
  children,
}: ComponentRenderProps) {
  const { label, value, valuePath, format, trend, trendValue } =
    element.props as {
      label: string;
      value?: string | number | null;
      valuePath?: string | null;
      format?: string | null;
      trend?: "up" | "down" | "neutral" | null;
      trendValue?: string | null;
    };

  const { data } = useData();
  const rawValue = resolveValueProp<string | number>(data, value, valuePath);

  let displayValue = String(rawValue ?? "-");
  if (format === "currency" && typeof rawValue === "number") {
    displayValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rawValue);
  } else if (format === "percent" && typeof rawValue === "number") {
    displayValue = new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 1,
    }).format(rawValue);
  } else if (format === "number" && typeof rawValue === "number") {
    displayValue = new Intl.NumberFormat("en-US").format(rawValue);
  }

  return (
    <motion.div
      variants={metricVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-0.5 sm:gap-1 w-full min-w-0"
    >
      <span className="text-label text-[0.5625rem] sm:text-[0.625rem]">
        {label}
      </span>
      <span className="text-display text-xl sm:text-2xl">{displayValue}</span>
      {(trend || trendValue) && (
        <span
          className={cn(
            "text-[0.625rem] sm:text-xs font-medium flex items-center gap-1",
            trend === "up"
              ? "text-emerald-400"
              : trend === "down"
                ? "text-rose-400"
                : "text-muted-foreground",
          )}
        >
          {trend === "up" ? "+" : trend === "down" ? "-" : ""}
          {trendValue}
        </span>
      )}
      {children}
    </motion.div>
  );
});
