"use client";

import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Children,
} from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { LayoutGrid } from "lucide-react";

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

  // Map gap prop to Tailwind classes
  const gapClass = useMemo(() => {
    switch (gap) {
      case "none":
        return "gap-0";
      case "sm":
        return "gap-2";
      case "lg":
        return "gap-6";
      case "md":
      default:
        return "gap-4";
    }
  }, [gap]);

  const minColumnWidth = 360;

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

    // Heuristic: specific "tall card" check to switch to single column layout
    // This helps preventing grid items from becoming too narrow when they are very tall
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
    const observer = new ResizeObserver(() => {
      evaluateLayout();
    });
    observer.observe(elementNode);
    // Also observe children to react to their height changes
    Array.from(elementNode.children).forEach((child) =>
      observer.observe(child),
    );

    return () => observer.disconnect();
  }, [children, columns, evaluateLayout]);

  if (Children.count(children) === 0) {
    return (
      <div className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground">
        <LayoutGrid className="w-10 h-10 opacity-20 mb-3" />
        <p className="font-mono text-xs uppercase tracking-widest opacity-50">
          Empty Grid
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      ref={containerRef}
      className={cn(
        "grid w-full min-w-0 max-w-full items-stretch justify-items-stretch",
        forceSingleColumn
          ? "grid-cols-1"
          : "grid-cols-[repeat(auto-fit,minmax(360px,1fr))]",
        gapClass,
      )}
    >
      {children}
    </motion.div>
  );
});
