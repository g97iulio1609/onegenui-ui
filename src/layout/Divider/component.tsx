"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";

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
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        className="flex flex-col h-full"
      >
        <div className="w-[1px] bg-white/10 self-stretch h-full" />
        {children}
      </motion.div>
    );
  }

  if (label) {
    return (
      <motion.div
        initial={{ opacity: 0, scaleX: 0.9 }}
        animate={{ opacity: 1, scaleX: 1 }}
        className="flex items-center gap-3 my-4 w-full"
      >
        <div className="flex-1 h-[1px] bg-white/10" />
        <span className="text-[0.625rem] uppercase font-bold tracking-wider text-muted-foreground">
          {label}
        </span>
        <div className="flex-1 h-[1px] bg-white/10" />
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      className="w-full"
    >
      <div className="divider-perforated" />
      {children}
    </motion.div>
  );
});
