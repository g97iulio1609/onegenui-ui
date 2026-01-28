"use client";

import { memo } from "react";
import { type ComponentRenderProps, useData } from "@onegenui/react";
import { motion } from "framer-motion";
import { resolveArrayProp } from "../../utils/data-utils";
import { cn } from "../../utils/cn";
import { Table as TableIcon } from "lucide-react";

type TableRow = Record<string, unknown> & {
  id?: string | null;
  subRows?: TableRow[] | null;
};

export const Table = memo(function Table({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    rows,
    dataPath,
    columns: rawColumns,
  } = element.props as {
    title?: string | null;
    rows?: TableRow[] | null;
    dataPath?: string | null;
    columns: Array<{
      key?: string;
      label?: string;
      accessor?: string;
      header?: string;
      format?: string | null;
    }>;
  };

  // Normalize columns to support both key/label and accessor/header naming
  const columns = rawColumns.map((col) => ({
    key: col.key ?? col.accessor ?? "",
    label: col.label ?? col.header ?? "",
    format: col.format,
  }));

  const { data } = useData();
  const tableRows = resolveArrayProp<TableRow>(data, rows, dataPath);

  if (!tableRows || tableRows.length === 0) {
    return (
      <div className="w-full">
        {title && (
          <h4 className="mb-4 text-sm font-semibold leading-none tracking-tight">
            {title}
          </h4>
        )}
        <div className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground">
          <TableIcon className="w-10 h-10 opacity-20 mb-3" />
          <p className="font-mono text-xs uppercase tracking-widest opacity-50">
            No data available
          </p>
        </div>
        {children}
      </div>
    );
  }

  const formatCell = (value: unknown, format?: string | null) => {
    if (value === null || value === undefined) return "-";
    if (format === "currency" && typeof value === "number") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    }
    if (format === "date" && typeof value === "string") {
      return new Date(value).toLocaleDateString();
    }
    if (format === "badge") {
      return (
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
          {String(value)}
        </span>
      );
    }
    return String(value);
  };

  const renderRows = (rowsToRender: TableRow[], depth = 0): React.ReactNode[] =>
    rowsToRender.flatMap((row, index) => {
      const rowKey = typeof row.id === "string" ? row.id : `${depth}-${index}`;
      const subRows = Array.isArray(row.subRows) ? row.subRows : [];

      const renderedRow = (
        <motion.tr
          key={rowKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.02 }}
          data-selectable-item
          data-element-key={element.key}
          data-item-id={rowKey}
          className="border-b border-white/5 transition-colors hover:bg-white/5 data-[state=selected]:bg-white/10"
        >
          {columns.map((col, colIndex) => (
            <td
              key={col.key}
              className={cn(
                "p-4 align-middle [&:has([role=checkbox])]:pr-0 text-foreground",
              )}
              style={
                colIndex === 0 && depth > 0
                  ? { paddingLeft: `${12 + depth * 16}px` }
                  : undefined
              }
            >
              {formatCell(row[col.key], col.format)}
            </td>
          ))}
        </motion.tr>
      );
      // Recursion for sub-rows (if supported in design)
      return [renderedRow, ...renderRows(subRows, depth + 1)];
    });

  return (
    <div className="w-full">
      {title && (
        <h4 className="mb-4 text-sm font-semibold leading-none tracking-tight text-foreground">
          {title}
        </h4>
      )}
      <div className="relative w-full overflow-auto rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
        <table className="w-full caption-bottom text-sm border-collapse">
          <thead className="[&_tr]:border-b border-white/10">
            <tr className="border-b border-white/10 transition-colors hover:bg-white/5 data-[state=selected]:bg-white/10">
              {columns.map((col, index) => (
                <th
                  key={col.key ?? `col-${index}`}
                  className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {renderRows(tableRows)}
          </tbody>
        </table>
      </div>
      {children}
    </div>
  );
});
