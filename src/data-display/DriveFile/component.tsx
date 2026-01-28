import React, { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { File, Clock, User } from "lucide-react";
import { cn } from "../../utils/cn";

export const DriveFile = memo(function DriveFile({
  element,
  children,
}: ComponentRenderProps) {
  const { name, thumbnailLink, webViewLink, iconLink, modifiedTime, owners } =
    element.props as {
      name: string;
      mimeType?: string;
      thumbnailLink?: string;
      webViewLink?: string;
      iconLink?: string;
      modifiedTime?: string;
      owners?: Array<{ displayName?: string; photoLink?: string }>;
    };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "card-glass flex flex-col w-full max-w-[300px]",
        "overflow-hidden cursor-pointer",
        webViewLink ? "hover:shadow-2xl" : "cursor-default",
      )}
      onClick={() => webViewLink && window.open(webViewLink, "_blank")}
    >
      {thumbnailLink ? (
        <div className="h-40 w-full overflow-hidden bg-zinc-900/50 flex items-center justify-center">
          <img
            src={thumbnailLink}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="h-40 w-full bg-zinc-900/50 flex items-center justify-center">
          <File size={48} className="text-muted-foreground" />
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {iconLink ? (
            <img src={iconLink} alt="" className="w-4 h-4" />
          ) : (
            <File size={16} />
          )}
          <div
            className="font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis text-foreground"
            title={name}
          >
            {name}
          </div>
        </div>

        <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
          {modifiedTime && (
            <div className="flex items-center gap-1.5">
              <Clock size={12} />
              {new Date(modifiedTime).toLocaleDateString()}
            </div>
          )}
          {owners && owners[0] && (
            <div className="flex items-center gap-1.5">
              <User size={12} />
              {owners[0].displayName}
            </div>
          )}
        </div>
      </div>
      {children}
    </motion.div>
  );
});
