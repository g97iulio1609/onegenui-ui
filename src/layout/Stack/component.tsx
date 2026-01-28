"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

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

  const gapClasses: Record<string, string> = {
    none: "gap-0",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  const alignClasses: Record<string, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  const isHorizontal = direction === "horizontal";
  // Default to wrap for horizontal stacks to prevent overflow
  const shouldWrap = wrap !== false && isHorizontal;
  const effectiveDirection = forceVertical
    ? "flex-col"
    : isHorizontal
      ? "flex-row"
      : "flex-col";

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
    const observer = new ResizeObserver(() => {
      evaluateLayout();
    });
    observer.observe(node);
    Array.from(node.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [children, evaluateLayout]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={containerRef}
      className={cn(
        "flex w-full min-w-0 max-w-full",
        effectiveDirection,
        shouldWrap && !forceVertical ? "flex-wrap" : "flex-nowrap",
        gapClasses[gap || "md"],
        alignClasses[align || "stretch"],
      )}
    >
      {children}
    </motion.div>
  );
});
