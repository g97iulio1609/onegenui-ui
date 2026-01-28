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
      window.open(file.webViewLink, "_blank");
    }
  };

  return (
    <div className="card-glass w-full h-full min-h-[400px] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b border-white/10 bg-black/20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-500/20">
            <DriveIcon />
          </div>
          <div>
            <h3 className="m-0 text-base font-semibold text-foreground">
              {title || "Google Drive"}
            </h3>
            {description && (
              <div className="text-xs text-muted-foreground mt-0.5">
                {description}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground px-2.5 py-1 bg-white/5 rounded-full">
            {files.length} element{files.length !== 1 ? "i" : "o"}
          </span>

          <div className="flex gap-1 p-1 bg-black/20 rounded-xl">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "flex items-center justify-center p-2 rounded-lg border-0 cursor-pointer transition-all",
                viewMode === "grid"
                  ? "bg-white/10 text-foreground"
                  : "bg-transparent text-muted-foreground hover:bg-white/5",
              )}
              title="Vista griglia"
            >
              <GridIcon />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "flex items-center justify-center p-2 rounded-lg border-0 cursor-pointer transition-all",
                viewMode === "list"
                  ? "bg-white/10 text-foreground"
                  : "bg-transparent text-muted-foreground hover:bg-white/5",
              )}
              title="Vista lista"
            >
              <ListIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {files.length === 0 ? (
          <div className="p-16 text-center text-muted-foreground">
            <div className="text-5xl mb-4 opacity-30">📁</div>
            <div className="text-lg font-medium mb-2">Nessun file</div>
            <div className="text-sm opacity-70">Questa cartella è vuota</div>
          </div>
        ) : viewMode === "grid" ? (
          <motion.div
            layout
            className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 p-5"
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
          <div>
            <div className="flex items-center gap-3.5 px-5 py-2.5 border-b border-white/5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="w-10" />
              <div className="flex-1">Nome</div>
              <div className="min-w-20 text-right">Dimensione</div>
              <div className="min-w-24 text-right">Modificato</div>
              <div className="w-20" />
            </div>

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
        )}
      </div>
      {children}
    </div>
  );
});
