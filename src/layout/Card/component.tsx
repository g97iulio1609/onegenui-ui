"use client";

import { memo, useId } from "react";
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
  const { title, description, padding, role, ariaLabelledBy } = element.props as {
    title?: string | null;
    description?: string | null;
    padding?: "none" | "sm" | "md" | "lg" | null;
    role?: string | null;
    ariaLabelledBy?: string | null;
  };

  const titleId = useId();
  const descriptionId = useId();

  // Build aria-labelledby from title/description if present
  const accessibleLabelledBy = ariaLabelledBy ?? 
    (title ? `${titleId}${description ? ` ${descriptionId}` : ""}` : undefined);

  return (
    <motion.section
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, ease: "easeOut" }}
      role={role ?? undefined}
      aria-labelledby={accessibleLabelledBy}
      className="card-glass w-full min-w-0 flex flex-col motion-reduce:transition-none"
    >
      <div className="gradient-bar-thin opacity-20" aria-hidden="true" />

      {(title || description) && (
        <div className="flex flex-col gap-1 p-4 sm:p-5 lg:p-6 pb-3 sm:pb-4 border-b border-white/5 bg-white/[0.02]">
          {title && (
            <h3 
              id={titleId}
              className="text-base sm:text-lg font-bold leading-tight tracking-tight text-foreground"
            >
              {title}
            </h3>
          )}
          {description && (
            <p 
              id={descriptionId}
              className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed"
            >
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
    </motion.section>
  );
});
