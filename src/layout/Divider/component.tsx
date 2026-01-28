"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";

/** Divider animation variants */
const horizontalVariants = {
  hidden: { opacity: 0, scaleX: 0.8 },
  visible: { opacity: 1, scaleX: 1 },
};

const verticalVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1 },
};

const labelledVariants = {
  hidden: { opacity: 0, scaleX: 0.9 },
  visible: { opacity: 1, scaleX: 1 },
};

export const Divider = memo(function Divider({
  element,
  children,
}: ComponentRenderProps) {
  const { orientation, label } = element.props as {
    orientation?: string | null;
    label?: string | null;
  };

  if (orientation === "vertical") {
    return (
      <motion.div
        variants={verticalVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col h-full"
      >
        <div className="w-px bg-white/10 self-stretch h-full" />
        {children}
      </motion.div>
    );
  }

  if (label) {
    return (
      <motion.div
        variants={labelledVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center gap-2 sm:gap-3 my-3 sm:my-4 w-full"
      >
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-[0.5625rem] sm:text-[0.625rem] uppercase font-bold tracking-wider text-muted-foreground whitespace-nowrap">
          {label}
        </span>
        <div className="flex-1 h-px bg-white/10" />
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={horizontalVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      <div className="divider-perforated" />
      {children}
    </motion.div>
  );
});
