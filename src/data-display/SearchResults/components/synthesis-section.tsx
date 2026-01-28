import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, Lightbulb, MessageSquare } from "lucide-react";
import type { Synthesis, SourceCitation } from "../schema";
import { cn } from "../../../utils/cn";
import { TextWithCitations } from "./text-with-citations";

export const SynthesisSection = memo(function SynthesisSection({
  synthesis,
  sources,
}: {
  synthesis: Synthesis;
  sources: SourceCitation[];
}) {
  const [showAllKeyPoints, setShowAllKeyPoints] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set([0]),
  );

  const toggleSection = (idx: number) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const visibleKeyPoints = showAllKeyPoints
    ? synthesis.keyPoints
    : synthesis.keyPoints?.slice(0, 4);

  return (
    <div className="mb-6 space-y-4">
      {/* Summary with citations */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-violet-500/5 to-transparent border border-primary/10"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
            <BookOpen size={14} className="text-primary" />
          </div>
          <span className="text-sm font-semibold text-foreground">
            AI Summary
          </span>
        </div>
        <p className="text-sm text-foreground/90 leading-relaxed">
          <TextWithCitations text={synthesis.summary} sources={sources} />
        </p>
      </motion.div>

      {/* Key Points */}
      {synthesis.keyPoints && synthesis.keyPoints.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={14} className="text-amber-400" />
            <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
              Key Points
            </span>
          </div>
          <ul className="space-y-2">
            {visibleKeyPoints?.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2 text-sm text-foreground/80"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                <span className="leading-relaxed">
                  <TextWithCitations text={point.text} sources={sources} />
                </span>
              </motion.li>
            ))}
          </ul>
          {synthesis.keyPoints.length > 4 && (
            <button
              onClick={() => setShowAllKeyPoints(!showAllKeyPoints)}
              className="mt-3 text-xs text-primary/70 hover:text-primary transition-colors flex items-center gap-1"
            >
              {showAllKeyPoints
                ? "Show less"
                : `Show all ${synthesis.keyPoints.length} points`}
              <ChevronDown
                size={12}
                className={cn(
                  "transition-transform",
                  showAllKeyPoints && "rotate-180",
                )}
              />
            </button>
          )}
        </motion.div>
      )}

      {/* Thematic Sections */}
      {synthesis.sections && synthesis.sections.length > 0 && (
        <div className="space-y-2">
          {synthesis.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.05 }}
              className="rounded-xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(idx)}
                className="w-full p-3 flex items-center justify-between text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-sm font-medium text-foreground/90">
                  {section.title}
                </span>
                <ChevronDown
                  size={14}
                  className={cn(
                    "text-muted-foreground transition-transform",
                    expandedSections.has(idx) && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {expandedSections.has(idx) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-2 text-sm text-foreground/80 leading-relaxed">
                      <TextWithCitations
                        text={section.content}
                        sources={sources}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )}

      {/* Follow-up Questions */}
      {synthesis.followUpQuestions &&
        synthesis.followUpQuestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
          >
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare size={14} className="text-blue-400" />
              <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                Related Questions
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {synthesis.followUpQuestions.map((question, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1.5 text-xs text-foreground/70 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all"
                >
                  {question}
                </button>
              ))}
            </div>
          </motion.div>
        )}
    </div>
  );
});
