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

/** Animation variants */
const alertVariants = {
  hidden: { opacity: 0, height: 0, marginBottom: 0 },
  visible: { opacity: 1, height: "auto", marginBottom: "1rem" },
  exit: { opacity: 0, height: 0, marginBottom: 0 },
};

const ICON_MAP = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
};

const TONE_CLASSES: Record<string, string> = {
  info: "bg-blue-500/10 border-blue-500/20 text-blue-500",
  success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
  warning: "bg-amber-500/10 border-amber-500/20 text-amber-500",
  error: "bg-rose-500/10 border-rose-500/20 text-rose-500",
};

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
  const Icon = ICON_MAP[tone] || Info;

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          variants={alertVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          className={cn(
            "relative w-full rounded-lg sm:rounded-xl border p-3 sm:p-4 text-xs sm:text-sm shadow-lg backdrop-blur-md overflow-hidden",
            TONE_CLASSES[tone] || TONE_CLASSES.info,
          )}
        >
          <div className="flex gap-2 sm:gap-3">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />

            <div className="flex-1 space-y-0.5 sm:space-y-1 min-w-0">
              {title && (
                <h5 className="font-semibold leading-tight tracking-tight text-xs sm:text-sm">
                  {title}
                </h5>
              )}
              {hasMessage && (
                <div className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  {String(resolvedMessage)}
                </div>
              )}
              {children}
            </div>

            {dismissible && (
              <button
                onClick={() => setDismissed(true)}
                className={cn(
                  "absolute top-2 right-2 sm:top-3 sm:right-3 p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity",
                  "hover:bg-black/5 dark:hover:bg-white/10 min-h-[2rem] min-w-[2rem] flex items-center justify-center",
                )}
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
