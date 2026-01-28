import { z } from "zod";

/**
 * A node in the document index tree
 */
export const DocumentIndexNodeSchema: z.ZodType<DocumentIndexNode> = z.lazy(
  () =>
    z.object({
      id: z.string(),
      title: z.string(),
      startPage: z.number().optional().nullable(),
      endPage: z.number().optional().nullable(),
      summary: z.string().optional().nullable(),
      children: z.array(DocumentIndexNodeSchema).optional().nullable(),
    }),
);

export interface DocumentIndexNode {
  id: string;
  title: string;
  startPage?: number | null;
  endPage?: number | null;
  summary?: string | null;
  children?: DocumentIndexNode[] | null;
}

/**
 * Document index status
 */
export const DocumentIndexStatusSchema = z.enum([
  "idle",
  "parsing",
  "analyzing",
  "building",
  "complete",
  "error",
]);

export type DocumentIndexStatus = z.infer<typeof DocumentIndexStatusSchema>;

/**
 * DocumentIndex component schema
 */
export const DocumentIndexPropsSchema = z.object({
  /** Document file name */
  fileName: z.string(),
  /** Current processing status */
  status: DocumentIndexStatusSchema.optional().nullable(),
  /** Progress message */
  message: z.string().optional().nullable(),
  /** Progress percentage (0-100) */
  progress: z.number().optional().nullable(),
  /** Total pages in document */
  pageCount: z.number().optional().nullable(),
  /** Current page being processed */
  currentPage: z.number().optional().nullable(),
  /** Document description */
  description: z.string().optional().nullable(),
  /** The index tree structure */
  nodes: z.array(DocumentIndexNodeSchema).optional().nullable(),
  /** Error message if status is error */
  error: z.string().optional().nullable(),
});

export type DocumentIndexProps = z.infer<typeof DocumentIndexPropsSchema>;

/**
 * DocumentIndex component definition for catalog registration
 */
export const DocumentIndexDefinition = {
  name: "DocumentIndex" as const,
  props: DocumentIndexPropsSchema,
  description:
    "Document index viewer showing hierarchical structure and progress during PDF analysis",
  hasChildren: false,
};
