"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import type { DriveFileItem } from "./types";
import { isFolder, getFileTypeName, formatFileSize, formatDate } from "./types";
import {
  FolderIcon,
  FileIcon,
  StarIcon,
  ShareIcon,
  ExternalLinkIcon,
} from "./icons";

export const FileGridCard = memo(function FileGridCard({
  file,
  onOpen,
}: {
  file: DriveFileItem;
  onOpen: (file: DriveFileItem) => void;
}) {
  const folder = isFolder(file.mimeType);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.05, y: -2 }}
      onClick={() => onOpen(file)}
      className={cn(
        "group flex flex-col items-center gap-3 p-4 min-w-[140px]",
        "card-glass border-white/5",
        "cursor-pointer",
      )}
    >
      <div
        className={cn(
          "w-16 h-16 flex items-center justify-center rounded-xl",
          folder ? "bg-amber-500/10" : "bg-white/5",
        )}
      >
        {file.thumbnailLink ? (
          <img
            src={file.thumbnailLink}
            alt={file.name}
            className="w-12 h-12 object-cover rounded-lg"
          />
        ) : folder ? (
          <FolderIcon />
        ) : (
          <FileIcon mimeType={file.mimeType} />
        )}
      </div>

      <div
        className="text-[13px] font-medium text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-full text-foreground"
        title={file.name}
      >
        {file.name}
      </div>

      <div className="text-[11px] text-muted-foreground px-2 py-1 bg-white/5 rounded-md">
        {getFileTypeName(file.mimeType)}
      </div>
    </motion.div>
  );
});

export const FileListRow = memo(function FileListRow({
  file,
  onOpen,
}: {
  file: DriveFileItem;
  onOpen: (file: DriveFileItem) => void;
}) {
  const folder = isFolder(file.mimeType);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      onClick={() => onOpen(file)}
      className={cn(
        "group flex items-center gap-3.5 px-5 py-3.5",
        "border-b border-white/5",
        "cursor-pointer transition-colors duration-200",
        "hover:bg-white/5",
      )}
    >
      <div
        className={cn(
          "w-10 h-10 flex items-center justify-center rounded-xl shrink-0",
          folder ? "bg-amber-500/10" : "bg-white/5",
        )}
      >
        {file.iconLink ? (
          <img src={file.iconLink} alt="" className="w-5 h-5" />
        ) : folder ? (
          <FolderIcon />
        ) : (
          <FileIcon mimeType={file.mimeType} />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis text-foreground">
          {file.name}
        </div>
        <div className="text-xs text-muted-foreground">
          {getFileTypeName(file.mimeType)}
        </div>
      </div>

      <div className="text-xs text-muted-foreground min-w-20 text-right">
        {formatFileSize(file.size)}
      </div>

      <div className="text-xs text-muted-foreground min-w-24 text-right">
        {formatDate(file.modifiedTime)}
      </div>

      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {file.starred && (
          <span className="text-[#fbbf24]">
            <StarIcon filled />
          </span>
        )}
        {file.shared && (
          <span className="text-muted-foreground">
            <ShareIcon />
          </span>
        )}
        {file.webViewLink && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(file.webViewLink!, "_blank");
            }}
            className={cn(
              "flex items-center justify-center p-2 rounded-lg",
              "text-muted-foreground hover:bg-white/10 hover:text-foreground",
              "bg-transparent border-0 cursor-pointer transition-colors",
            )}
            title="Apri in Drive"
          >
            <ExternalLinkIcon />
          </button>
        )}
      </div>
    </motion.div>
  );
});
