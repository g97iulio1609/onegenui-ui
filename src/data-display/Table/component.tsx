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

/** Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
};

const rowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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
          <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold leading-none tracking-tight">
            {title}
          </h4>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-8 sm:py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-lg sm:rounded-2xl bg-zinc-900/20 text-muted-foreground"
        >
          <TableIcon className="w-8 h-8 sm:w-10 sm:h-10 opacity-20 mb-2 sm:mb-3" />
          <p className="font-mono text-[0.625rem] sm:text-xs uppercase tracking-widest opacity-50">
            No data available
          </p>
        </motion.div>
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
        <span className="inline-flex items-center rounded-full border px-2 sm:px-2.5 py-0.5 text-[0.625rem] sm:text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground">
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
          variants={rowVariants}
          data-selectable-item
          data-element-key={element.key}
          data-item-id={rowKey}
          className="border-b border-white/5 transition-colors hover:bg-white/5 data-[state=selected]:bg-white/10"
        >
          {columns.map((col, colIndex) => (
            <td
              key={col.key}
              className={cn(
                "p-2.5 sm:p-4 align-middle text-xs sm:text-sm text-foreground",
                "[&:has([role=checkbox])]:pr-0",
              )}
              style={
                colIndex === 0 && depth > 0
                  ? { paddingLeft: `${0.75 + depth}rem` }
                  : undefined
              }
            >
              {formatCell(row[col.key], col.format)}
            </td>
          ))}
        </motion.tr>
      );
      return [renderedRow, ...renderRows(subRows, depth + 1)];
    });

  return (
    <div className="w-full">
      {title && (
        <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold leading-none tracking-tight text-foreground">
          {title}
        </h4>
      )}
      {/* Mobile: horizontal scroll wrapper */}
      <div className="relative w-full overflow-x-auto rounded-lg sm:rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm -mx-1 px-1 sm:mx-0 sm:px-0">
        <motion.table
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full min-w-[20rem] caption-bottom text-xs sm:text-sm border-collapse"
        >
          <thead className="[&_tr]:border-b border-white/10">
            <tr className="border-b border-white/10 transition-colors">
              {columns.map((col, index) => (
                <th
                  key={col.key ?? `col-${index}`}
                  className="h-10 sm:h-12 px-2.5 sm:px-4 text-left align-middle font-medium text-muted-foreground text-[0.625rem] sm:text-xs uppercase tracking-wider"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {renderRows(tableRows)}
          </tbody>
        </motion.table>
      </div>
      {children}
    </div>
  );
});
