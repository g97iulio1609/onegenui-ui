"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/** Mobile-first responsive gap classes */
const GAP_CLASSES: Record<string, string> = {
  none: "gap-0",
  sm: "gap-2 sm:gap-3",
  md: "gap-3 sm:gap-4 lg:gap-5",
  lg: "gap-4 sm:gap-5 lg:gap-6",
};

/** Alignment classes */
const ALIGN_CLASSES: Record<string, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

/** Stack animation variants */
const stackVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export const Stack = memo(function Stack({
  element,
  children,
}: ComponentRenderProps) {
  const { direction, gap, align, wrap } = element.props as {
    direction?: string | null;
    gap?: string | null;
    align?: string | null;
    wrap?: boolean | null;
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const [forceVertical, setForceVertical] = useState(false);

  const isHorizontal = direction === "horizontal";
  const shouldWrap = wrap !== false && isHorizontal;

  const evaluateLayout = useCallback(() => {
    if (typeof window === "undefined") return;
    const node = containerRef.current;
    if (!node) return;
    if (!isHorizontal) {
      setForceVertical(false);
      return;
    }

    const childElements = Array.from(node.children) as HTMLElement[];
    if (childElements.length <= 1) {
      setForceVertical(false);
      return;
    }

    const maxHeight = childElements.reduce((acc, child) => {
      const height = child.getBoundingClientRect().height;
      return Math.max(acc, height);
    }, 0);
    const viewportHeight = window.innerHeight || 0;
    const isTall = maxHeight >= Math.max(520, viewportHeight * 0.6);
    const isWide = node.clientWidth >= 1400;
    const shouldStack = isWide && isTall;

    setForceVertical(shouldStack);
  }, [isHorizontal]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    evaluateLayout();

    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(evaluateLayout);
    observer.observe(node);
    Array.from(node.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [children, evaluateLayout]);

  // Mobile-first: vertical by default on mobile for horizontal stacks
  const effectiveDirection = forceVertical
    ? "flex-col"
    : isHorizontal
      ? "flex-col sm:flex-row"
      : "flex-col";

  return (
    <motion.div
      variants={stackVariants}
      initial="hidden"
      animate="visible"
      ref={containerRef}
      className={cn(
        "flex w-full min-w-0 max-w-full",
        effectiveDirection,
        shouldWrap && !forceVertical ? "sm:flex-wrap" : "flex-nowrap",
        GAP_CLASSES[gap || "md"] || GAP_CLASSES.md,
        ALIGN_CLASSES[align || "stretch"] || ALIGN_CLASSES.stretch,
      )}
    >
      {children}
    </motion.div>
  );
});
