"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Card = memo(function Card({
  element,
  children,
}: ComponentRenderProps) {
  const { title, description, padding } = element.props as {
    title?: string | null;
    description?: string | null;
    padding?: "none" | "sm" | "md" | "lg" | null;
  };

  const paddingClasses: Record<string, string> = {
    none: "p-0",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card-glass w-full min-w-0 flex flex-col"
    >
      {/* Flight Accent Bar - Optional based on context, kept subtle for generic card */}
      <div className="gradient-bar-thin opacity-20" />

      {(title || description) && (
        <div className="flex flex-col space-y-1.5 p-6 pb-4 border-b border-white/5 bg-white/[0.02]">
          {title && (
            <h3 className="text-lg font-bold leading-none tracking-tight text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-zinc-400 font-medium">{description}</p>
          )}
        </div>
      )}
      <div
        className={cn("min-w-0 flex-1", paddingClasses[padding || ""] || "p-6")}
      >
        {children}
      </div>
    </motion.div>
  );
});
