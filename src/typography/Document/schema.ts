import { z } from "zod";

/**
 * Section of a document
 */
export const DocumentSectionSchema = z.object({
  id: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  highlights: z.array(z.string()).optional().nullable(),
});

export type DocumentSection = z.infer<typeof DocumentSectionSchema>;

/**
 * Individual document item
 */
export const DocumentItemSchema = z.object({
  id: z.string().optional().nullable(),
  title: z.string(),
  summary: z.string().optional().nullable(),
  author: z.string().optional().nullable(),
  createdAt: z.string().optional().nullable(),
  sections: z.array(DocumentSectionSchema).optional().nullable(),
  tags: z.array(z.string()).optional().nullable(),
});

export type DocumentItem = z.infer<typeof DocumentItemSchema>;

/**
 * Document component schema definition
 */
export const DocumentPropsSchema = z.object({
  /** Title for the document collection/viewer */
  title: z.string().optional().nullable(),
  /** Array of documents to display */
  documents: z.array(DocumentItemSchema).optional().nullable(),
  /** Accent color for UI elements */
  accentColor: z.string().optional().nullable(),
});

/** Type inference for Document props */
export type DocumentProps = z.infer<typeof DocumentPropsSchema>;

/**
 * Document component definition for catalog registration
 */
export const DocumentDefinition = {
  name: "Document" as const,
  props: DocumentPropsSchema,
  description:
    "Document viewer component for displaying rich content articles, reports, specs, and technical documentation",
  hasChildren: true,
};
