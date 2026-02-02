import React, { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/** Heading animation variants */
const headingVariants = {
  hidden: { opacity: 0, y: "-0.3125rem" },
  visible: { opacity: 1, y: 0 },
};

/** Mobile-first responsive typography sizes */
const HEADING_SIZES = {
  h1: "text-2xl sm:text-3xl lg:text-4xl",
  h2: "text-xl sm:text-2xl lg:text-3xl",
  h3: "text-lg sm:text-xl lg:text-2xl",
  h4: "text-base sm:text-lg lg:text-xl",
} as const;

export const Heading = memo(function Heading({
  element,
  children,
  renderText,
}: ComponentRenderProps) {
  const { text, level } = element.props as {
    text?: string | null;
    level?: string | number | null;
  };
  const render = renderText ?? ((value: string | null | undefined) => value);

  const normalizedLevel = (() => {
    if (typeof level === "number" && Number.isFinite(level)) {
      const bounded = Math.min(Math.max(Math.round(level), 1), 4);
      return `h${bounded}` as keyof typeof HEADING_SIZES;
    }
    if (typeof level === "string") {
      const trimmed = level.trim();
      if (/^h[1-4]$/.test(trimmed)) {
        return trimmed as keyof typeof HEADING_SIZES;
      }
      const parsed = Number.parseInt(trimmed, 10);
      if (Number.isFinite(parsed)) {
        const bounded = Math.min(Math.max(parsed, 1), 4);
        return `h${bounded}` as keyof typeof HEADING_SIZES;
      }
    }
    return "h2" as keyof typeof HEADING_SIZES;
  })();

  const Tag = motion.create(
    normalizedLevel as keyof React.JSX.IntrinsicElements,
  );

  return (
    <Tag
      variants={headingVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "font-semibold tracking-tight mb-3 sm:mb-4 text-foreground",
        HEADING_SIZES[normalizedLevel],
        "motion-reduce:animate-none",
      )}
    >
      {render(text, { inline: true })}
      {children}
    </Tag>
  );
});
