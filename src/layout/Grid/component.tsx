"use client";

import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Children,
  isValidElement,
} from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import { LayoutGrid } from "lucide-react";

/** Mobile-first responsive gap classes */
const GAP_CLASSES: Record<string, string> = {
  none: "gap-0",
  sm: "gap-2 sm:gap-3",
  md: "gap-3 sm:gap-4 lg:gap-5",
  lg: "gap-4 sm:gap-5 lg:gap-6",
};

/** Grid animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: "0.5rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-0.5rem" },
};

export const Grid = memo(function Grid({
  element,
  children,
}: ComponentRenderProps) {
  const { columns, gap } = element.props as {
    columns?: number | null;
    gap?: "none" | "sm" | "md" | "lg" | null;
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const [forceSingleColumn, setForceSingleColumn] = useState(false);

  const gapClass = useMemo(
    () => GAP_CLASSES[gap || "md"] || GAP_CLASSES.md,
    [gap],
  );

  const evaluateLayout = useCallback(() => {
    if (typeof window === "undefined") return;
    const elementNode = containerRef.current;
    if (!elementNode) return;

    const childElements = Array.from(elementNode.children) as HTMLElement[];
    const childCount = childElements.length;
    if (childCount <= 1) {
      setForceSingleColumn(false);
      return;
    }

    const maxHeight = childElements.reduce((acc, child) => {
      const height = child.getBoundingClientRect().height;
      return Math.max(acc, height);
    }, 0);
    const viewportHeight = window.innerHeight || 0;
    const isTall = maxHeight >= Math.max(520, viewportHeight * 0.6);
    const isWide = elementNode.clientWidth >= 1400;
    const shouldStack = isWide && isTall && childCount <= 3;

    setForceSingleColumn(shouldStack);
  }, []);

  useEffect(() => {
    const elementNode = containerRef.current;
    if (!elementNode) return;

    evaluateLayout();

    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(evaluateLayout);
    observer.observe(elementNode);
    Array.from(elementNode.children).forEach((child) =>
      observer.observe(child),
    );

    return () => observer.disconnect();
  }, [children, columns, evaluateLayout]);

  if (Children.count(children) === 0) {
    return (
      <motion.div
        role="status"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "py-8 sm:py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl sm:rounded-2xl bg-zinc-900/20 text-muted-foreground",
          "motion-reduce:animate-none",
        )}
      >
        <LayoutGrid className="w-8 h-8 sm:w-10 sm:h-10 opacity-20 mb-2 sm:mb-3" aria-hidden="true" />
        <p className="font-mono text-[0.625rem] sm:text-xs uppercase tracking-widest opacity-50">
          Empty Grid
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      role="grid"
      aria-label="Grid layout"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={containerRef}
      className={cn(
        "grid w-full min-w-0 max-w-full items-stretch justify-items-stretch",
        // Mobile-first: 1 column, then responsive based on content
        forceSingleColumn
          ? "grid-cols-1"
          : "grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]",
        gapClass,
        "motion-reduce:animate-none",
      )}
    >
      <AnimatePresence mode="popLayout">
        {Children.map(children, (child, index) => {
          // Extract key from child element if available
          const childKey = isValidElement(child) 
            ? (child.key ?? `grid-item-${index}`)
            : `grid-item-${index}`;
          return (
            <motion.div 
              key={childKey}
              role="gridcell"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="motion-reduce:animate-none"
            >
              {child}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
});
