import { z } from "zod";

/**
 * Drive File schema
 */
export const DriveFilePropsSchema = z.object({
  id: z.string(),
  name: z.string(),
  mimeType: z.string(),
  thumbnailLink: z.string().optional(),
  webViewLink: z.string().optional(),
  iconLink: z.string().optional(),
  modifiedTime: z.string().optional(),
  owners: z
    .array(
      z.object({
        displayName: z.string().optional(),
        photoLink: z.string().optional(),
      }),
    )
    .optional(),
});

export type DriveFileProps = z.infer<typeof DriveFilePropsSchema>;

export const DriveFileDefinition = {
  name: "DriveFile" as const,
  props: DriveFilePropsSchema,
  description: "Display a Google Drive file card.",
  hasChildren: false,
};
