"use client";

import { memo, useState } from "react";
import { type ComponentRenderProps, useData } from "@onegenui/react";
import { motion, AnimatePresence } from "framer-motion";
import { resolveValueProp } from "../../utils/data-utils";
import { cn } from "../../utils/cn";
import {
  X,
  Info,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";

export const Alert = memo(function Alert({
  element,
  children,
}: ComponentRenderProps) {
  const { type, variant, title, message, dismissible } = element.props as {
    type?: string | null;
    variant?: string | null;
    title?: string | null;
    message?: string | { path: string } | null;
    dismissible?: boolean | null;
  };
  const { data } = useData();
  const resolvedMessage = resolveValueProp<string>(data, message ?? null);
  const [dismissed, setDismissed] = useState(false);

  const tone = (type ?? variant ?? "info") as
    | "info"
    | "success"
    | "warning"
    | "error";

  const hasMessage = resolvedMessage !== undefined && resolvedMessage !== null;

  const Icon =
    {
      info: Info,
      success: CheckCircle2,
      warning: AlertTriangle,
      error: AlertCircle,
    }[tone] || Info;

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
          animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "relative w-full rounded-xl border p-4 text-sm shadow-lg backdrop-blur-md overflow-hidden",
            {
              "bg-blue-500/10 border-blue-500/20 text-blue-500":
                tone === "info",
              "bg-emerald-500/10 border-emerald-500/20 text-emerald-500":
                tone === "success",
              "bg-amber-500/10 border-amber-500/20 text-amber-500":
                tone === "warning",
              "bg-rose-500/10 border-rose-500/20 text-rose-500":
                tone === "error",
            },
          )}
        >
          <div className="flex gap-3">
            <Icon size={20} className="shrink-0 mt-0.5" />

            <div className="flex-1 space-y-1">
              {title && (
                <h5 className="font-semibold leading-none tracking-tight">
                  {title}
                </h5>
              )}
              {hasMessage && (
                <div className="text-sm opacity-90 leading-relaxed">
                  {String(resolvedMessage)}
                </div>
              )}
              {children}
            </div>

            {dismissible && (
              <button
                onClick={() => setDismissed(true)}
                className={cn(
                  "absolute top-3 right-3 p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity",
                  "hover:bg-black/5 dark:hover:bg-white/10",
                )}
                title="Dismiss"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
