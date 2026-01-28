import { memo } from "react";
import { type ComponentRenderProps, useData } from "@onegenui/react";
import { motion } from "framer-motion";
import { resolveArrayProp, resolveString } from "../../utils/data-utils";
import { cn } from "../../utils/cn";
import { GitCommitVertical } from "lucide-react";

type TimelineItem = {
  id?: string | null;
  title?: string;
  date?: string;
  description?: string | null;
  status?: string | null;
  subItems?: TimelineItem[] | null;
  [key: string]: unknown;
};

export const Timeline = memo(function Timeline({
  element,
  children,
}: ComponentRenderProps) {
  const { dataPath, items, titleKey, dateKey, descriptionKey, statusKey } =
    element.props as {
      dataPath?: string | null;
      items?: TimelineItem[] | null;
      titleKey?: string | null;
      dateKey?: string | null;
      descriptionKey?: string | null;
      statusKey?: string | null;
    };

  const { data } = useData();

  const timelineData = resolveArrayProp<TimelineItem>(data, items, dataPath);

  if (!timelineData || timelineData.length === 0) {
    return (
      <div className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground">
        <GitCommitVertical className="w-10 h-10 opacity-20 mb-3" />
        <p className="font-mono text-xs uppercase tracking-widest opacity-50">
          No timeline data
        </p>
      </div>
    );
  }

  const renderItems = (itemsToRender: TimelineItem[], depth = 0) => (
    <div className={cn(depth === 0 ? "py-4" : "py-2")}>
      {itemsToRender.map((item, index) => {
        const titleValue = titleKey ? item[titleKey] : item.title;
        const dateValue = dateKey ? item[dateKey] : item.date;
        const descriptionValue = descriptionKey
          ? item[descriptionKey]
          : item.description;
        const statusValue = statusKey ? item[statusKey] : item.status;

        const titleText = resolveString(titleValue);
        const dateText = resolveString(dateValue);
        const descriptionText = resolveString(descriptionValue);
        const statusText = resolveString(statusValue);
        const isCompleted = statusText === "completed" || statusText === "done";
        const subItems = Array.isArray(item.subItems) ? item.subItems : [];

        const itemId = item.id || `item-${depth}-${index}`;

        return (
          <motion.div
            key={itemId}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            data-selectable-item
            data-element-key={element.key}
            data-item-id={itemId}
            className={cn(
              "flex gap-4 mb-6 relative p-2 rounded-lg transition-all",
              "cursor-pointer hover:bg-white/5",
            )}
            style={
              {
                marginLeft: `${depth * 16}px`,
              } as React.CSSProperties
            }
          >
            {index !== itemsToRender.length - 1 && depth === 0 && (
              <div className="absolute left-[22px] top-8 -bottom-4 w-[2px] bg-white/10" />
            )}

            <div
              className={cn(
                "w-3.5 h-3.5 rounded-full border-2 border-background ring-1 ring-white/10 mt-1.5 shrink-0 z-10",
                isCompleted ? "bg-primary" : "bg-zinc-700",
              )}
            />

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1 gap-2">
                {titleText && (
                  <div className="font-semibold text-sm text-foreground">
                    {titleText}
                  </div>
                )}
                {dateText && (
                  <div className="text-xs text-muted-foreground whitespace-nowrap">
                    {dateText}
                  </div>
                )}
              </div>

              {descriptionText && (
                <div className="text-sm text-muted-foreground">
                  {descriptionText}
                </div>
              )}

              {statusText && (
                <div className="mt-2">
                  <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/10 font-medium text-muted-foreground">
                    {statusText}
                  </span>
                </div>
              )}

              {subItems.length > 0 && renderItems(subItems, depth + 1)}
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div className="w-full min-w-0 max-w-full">
      {renderItems(timelineData)}
      {children}
    </div>
  );
});
