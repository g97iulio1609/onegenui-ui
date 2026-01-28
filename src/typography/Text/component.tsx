import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Text = memo(function Text({
  element,
  children,
  renderText,
}: ComponentRenderProps) {
  const { content, variant, color } = element.props as {
    content?: string | null;
    variant?: string | null;
    color?: string | null;
  };
  const render = renderText ?? ((value: string | null | undefined) => value);

  const resolvedVariant = variant || "body";
  const resolvedColor = color || "default";

  // Use div instead of p to avoid hydration errors when content contains block elements
  // (markdown can generate <ol>, <ul>, <pre> etc. which cannot be inside <p>)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("m-0", {
        "text-sm": resolvedVariant === "body",
        "text-xs": resolvedVariant === "caption",
        "text-[13px]": resolvedVariant === "label",

        "text-foreground": resolvedColor === "default",
        "text-muted-foreground":
          resolvedColor === "muted" || resolvedColor === "info",
        "text-emerald-500": resolvedColor === "success",
        "text-amber-500": resolvedColor === "warning",
        "text-rose-500":
          resolvedColor === "danger" || resolvedColor === "error",
      })}
    >
      {render(content, { inline: true })}
      {children}
    </motion.div>
  );
});
