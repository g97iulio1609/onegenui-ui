"use client";

import { memo, useState } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";
import {
  FileGridCard,
  FileListRow,
  DriveIcon,
  GridIcon,
  ListIcon,
  isFolder,
  type DriveFileItem,
  type ViewMode,
} from "./components";

export const DriveFileList = memo(function DriveFileList({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    description,
    files: initialFiles,
    viewMode: initialViewMode = "list",
  } = element.props as {
    title?: string | null;
    description?: string | null;
    files?: DriveFileItem[] | null;
    viewMode?: ViewMode;
  };

  const [viewMode, setViewMode] = useState<ViewMode>(initialViewMode);
  const files = initialFiles || [];

  const sortedFiles = [...files].sort((a, b) => {
    const aFolder = isFolder(a.mimeType);
    const bFolder = isFolder(b.mimeType);
    if (aFolder && !bFolder) return -1;
    if (!aFolder && bFolder) return 1;
    return a.name.localeCompare(b.name);
  });

  const handleOpenFile = (file: DriveFileItem) => {
    if (file.webViewLink) {
      window.open(file.webViewLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      className="card-glass w-full h-full min-h-[400px] flex flex-col overflow-hidden"
      aria-label={title || "Google Drive Files"}
    >
      {/* Header */}
      <header className="flex justify-between items-center p-5 border-b border-white/10 bg-black/20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-500/20" aria-hidden="true">
            <DriveIcon />
          </div>
          <div>
            <h2 className="m-0 text-base font-semibold text-foreground">
              {title || "Google Drive"}
            </h2>
            {description && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground px-2.5 py-1 bg-white/5 rounded-full" role="status">
            {files.length} element{files.length !== 1 ? "i" : "o"}
          </span>

          <div className="flex gap-1 p-1 bg-black/20 rounded-xl" role="group" aria-label="View mode">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              aria-pressed={viewMode === "grid"}
              className={cn(
                "flex items-center justify-center p-2 rounded-lg border-0 cursor-pointer transition-all motion-reduce:transition-none",
                viewMode === "grid"
                  ? "bg-white/10 text-foreground"
                  : "bg-transparent text-muted-foreground hover:bg-white/5",
              )}
              aria-label="Grid view"
            >
              <GridIcon />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              aria-pressed={viewMode === "list"}
              className={cn(
                "flex items-center justify-center p-2 rounded-lg border-0 cursor-pointer transition-all motion-reduce:transition-none",
                viewMode === "list"
                  ? "bg-white/10 text-foreground"
                  : "bg-transparent text-muted-foreground hover:bg-white/5",
              )}
              aria-label="List view"
            >
              <ListIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {files.length === 0 ? (
          <div className="p-16 text-center text-muted-foreground" role="status">
            <div className="text-5xl mb-4 opacity-30" aria-hidden="true">📁</div>
            <p className="text-lg font-medium mb-2">Nessun file</p>
            <p className="text-sm opacity-70">Questa cartella è vuota</p>
          </div>
        ) : viewMode === "grid" ? (
          <motion.div
            layout
            role="list"
            aria-label="Files grid"
            className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 p-5 motion-reduce:animate-none"
          >
            <AnimatePresence>
              {sortedFiles.map((file) => (
                <FileGridCard
                  key={file.id}
                  file={file}
                  onOpen={handleOpenFile}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div role="table" aria-label="Files list">
            <div role="rowgroup">
              <div role="row" className="flex items-center gap-3.5 px-5 py-2.5 border-b border-white/5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                <div role="columnheader" className="w-10" aria-label="Icon" />
                <div role="columnheader" className="flex-1">Nome</div>
                <div role="columnheader" className="min-w-20 text-right">Dimensione</div>
                <div role="columnheader" className="min-w-24 text-right">Modificato</div>
                <div role="columnheader" className="w-20" aria-label="Actions" />
              </div>
            </div>

            <div role="rowgroup">
              <AnimatePresence>
                {sortedFiles.map((file) => (
                  <FileListRow
                    key={file.id}
                    file={file}
                    onOpen={handleOpenFile}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
      {children}
    </section>
  );
});
