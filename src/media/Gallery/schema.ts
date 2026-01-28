import { z } from "zod";

/**
 * Gallery component schema definition
 */
export const GalleryPropsSchema = z.object({});

/** Type inference for Gallery props */
export type GalleryProps = z.infer<typeof GalleryPropsSchema>;

/**
 * Gallery component definition for catalog registration
 */
export const GalleryDefinition = {
  name: "Gallery" as const,
  props: GalleryPropsSchema,
  description: "Gallery component",
  hasChildren: true,
};
