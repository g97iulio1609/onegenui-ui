import { memo } from "react";
import { type ComponentRenderProps, useData } from "@onegenui/react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { List as ListIcon } from "lucide-react";
import { resolveArrayProp } from "../../utils/data-utils";

type ListItem = {
  id?: string | null;
  text?: string;
  description?: string | null;
  status?: string | null;
  subItems?: ListItem[] | null;
  // Alternative naming convention from AI
  primary?: string;
  secondary?: string | null;
};

export const List = memo(function List({
  element,
  children,
}: ComponentRenderProps) {
  const { items, dataPath, emptyMessage } = element.props as {
    items?: Array<ListItem | string> | null;
    dataPath?: string | null;
    emptyMessage?: string | null;
  };
  const { data } = useData();
  const listData = resolveArrayProp<ListItem | string>(data, items, dataPath);

  if ((!listData || listData.length === 0) && !children) {
    return (
      <div
        role="status"
        className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground"
      >
        <ListIcon className="w-10 h-10 opacity-20 mb-3" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-widest opacity-50">
          {emptyMessage ?? "No items"}
        </p>
      </div>
    );
  }

  const renderItems = (itemsToRender: Array<ListItem | string>, depth = 0) => (
    <ul
      role="list"
      className="flex flex-col gap-2"
      aria-label={depth === 0 ? "List items" : undefined}
    >
      {itemsToRender.map((item, index) => {
        const raw =
          typeof item === "string" ? { text: item } : (item as ListItem);
        // Normalize: support both text/description and primary/secondary
        const normalized = {
          id: raw.id,
          text: raw.text ?? raw.primary ?? "",
          description: raw.description ?? raw.secondary ?? null,
          status: raw.status,
          subItems: raw.subItems,
        };
        const itemId = normalized.id ?? `item-${depth}-${index}`;
        const subItems = Array.isArray(normalized.subItems)
          ? normalized.subItems
          : [];

        return (
          <motion.li
            key={itemId}
            className="flex flex-col"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div
              data-selectable-item
              data-element-key={element.key}
              data-item-id={itemId}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg",
                "bg-white/5 border border-white/10",
                "transition-colors hover:border-white/20 hover:bg-white/10",
                "motion-reduce:transition-none motion-reduce:animate-none",
              )}
              style={
                {
                  marginLeft: `${depth * 16}px`,
                } as React.CSSProperties
              }
            >
              <div
                className="w-2 h-2 rounded-full bg-foreground/60 shrink-0"
                aria-hidden="true"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate text-foreground">
                  {normalized.text}
                </div>
                {normalized.description && (
                  <div className="text-xs text-muted-foreground truncate">
                    {normalized.description}
                  </div>
                )}
              </div>
              {normalized.status && (
                <span className="text-xs text-muted-foreground shrink-0">
                  {normalized.status}
                </span>
              )}
            </div>
            {subItems.length > 0 && renderItems(subItems, depth + 1)}
          </motion.li>
        );
      })}
    </ul>
  );

  return (
    <nav aria-label="List navigation">
      {listData && listData.length > 0 && renderItems(listData)}
      {children}
    </nav>
  );
});
