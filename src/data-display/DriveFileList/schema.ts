import { z } from "zod";

export const DriveFileListSchema = z.object({
  title: z.string().optional().nullable().describe("Title for the file list"),
  description: z
    .string()
    .optional()
    .nullable()
    .describe("Description or subtitle"),
  viewMode: z
    .enum(["grid", "list"])
    .optional()
    .default("list")
    .describe("View mode: grid or list"),
  files: z
    .array(
      z.object({
        id: z.string().describe("Unique file identifier"),
        name: z.string().describe("File name"),
        mimeType: z.string().describe("MIME type of the file"),
        size: z.number().optional().nullable().describe("File size in bytes"),
        modifiedTime: z
          .string()
          .optional()
          .nullable()
          .describe("Last modified time (ISO 8601)"),
        webViewLink: z
          .string()
          .optional()
          .nullable()
          .describe("URL to open the file in Drive"),
        iconLink: z
          .string()
          .optional()
          .nullable()
          .describe("URL to the file type icon"),
        thumbnailLink: z
          .string()
          .optional()
          .nullable()
          .describe("URL to a thumbnail preview"),
        owners: z
          .array(
            z.object({
              displayName: z.string().optional(),
              photoLink: z.string().optional(),
            }),
          )
          .optional()
          .nullable()
          .describe("File owners"),
        shared: z.boolean().optional().describe("Whether the file is shared"),
        starred: z.boolean().optional().describe("Whether the file is starred"),
      }),
    )
    .optional()
    .nullable()
    .describe("List of Drive files to display"),
});

export type DriveFileListProps = z.infer<typeof DriveFileListSchema>;

/**
 * DriveFileList component definition for catalog registration
 */
export const DriveFileListDefinition = {
  name: "DriveFileList" as const,
  props: DriveFileListSchema,
  description:
    "Displays a list of Google Drive files with grid and list view options.",
  hasChildren: false,
};
