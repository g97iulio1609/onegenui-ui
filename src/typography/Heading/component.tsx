import React, { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

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
      return `h${bounded}`;
    }
    if (typeof level === "string") {
      const trimmed = level.trim();
      if (/^h[1-4]$/.test(trimmed)) {
        return trimmed;
      }
      const parsed = Number.parseInt(trimmed, 10);
      if (Number.isFinite(parsed)) {
        const bounded = Math.min(Math.max(parsed, 1), 4);
        return `h${bounded}`;
      }
    }
    return "h2";
  })();

  const Tag = motion.create(
    normalizedLevel as keyof React.JSX.IntrinsicElements,
  );

  return (
    <Tag
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("font-semibold tracking-tight mb-4 text-foreground", {
        "text-3xl": normalizedLevel === "h1",
        "text-2xl": normalizedLevel === "h2",
        "text-xl": normalizedLevel === "h3",
        "text-lg": normalizedLevel === "h4",
      })}
    >
      {render(text, { inline: true })}
      {children}
    </Tag>
  );
});
