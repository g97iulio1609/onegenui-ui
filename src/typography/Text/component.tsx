import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/** Text animation variants */
const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/** Mobile-first responsive text sizes */
const VARIANT_CLASSES: Record<string, string> = {
  body: "text-xs sm:text-sm",
  caption: "text-[0.625rem] sm:text-xs",
  label: "text-[0.6875rem] sm:text-[0.8125rem]",
};

const COLOR_CLASSES: Record<string, string> = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  info: "text-muted-foreground",
  success: "text-emerald-500",
  warning: "text-amber-500",
  danger: "text-rose-500",
  error: "text-rose-500",
};

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

  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 }}
      className={cn(
        "m-0 leading-relaxed",
        VARIANT_CLASSES[resolvedVariant] || VARIANT_CLASSES.body,
        COLOR_CLASSES[resolvedColor] || COLOR_CLASSES.default,
      )}
    >
      {render(content, { inline: true })}
      {children}
    </motion.div>
  );
});
