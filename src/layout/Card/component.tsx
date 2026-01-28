"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/** Mobile-first responsive padding classes */
const PADDING_CLASSES: Record<string, string> = {
  none: "p-0",
  sm: "p-2 sm:p-3",
  md: "p-3 sm:p-4",
  lg: "p-4 sm:p-5 lg:p-6",
};

/** Card animation variants */
const cardVariants = {
  hidden: { opacity: 0, y: "0.625rem" },
  visible: { opacity: 1, y: 0 },
};

export const Card = memo(function Card({
  element,
  children,
}: ComponentRenderProps) {
  const { title, description, padding } = element.props as {
    title?: string | null;
    description?: string | null;
    padding?: "none" | "sm" | "md" | "lg" | null;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="card-glass w-full min-w-0 flex flex-col"
    >
      <div className="gradient-bar-thin opacity-20" />

      {(title || description) && (
        <div className="flex flex-col gap-1 p-4 sm:p-5 lg:p-6 pb-3 sm:pb-4 border-b border-white/5 bg-white/[0.02]">
          {title && (
            <h3 className="text-base sm:text-lg font-bold leading-tight tracking-tight text-foreground">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      <div
        className={cn(
          "min-w-0 flex-1",
          PADDING_CLASSES[padding || ""] || "p-4 sm:p-5 lg:p-6",
        )}
      >
        {children}
      </div>
    </motion.div>
  );
});
