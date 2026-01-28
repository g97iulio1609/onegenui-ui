import { z } from "zod";

/**
 * Image location/source configuration
 */
export const ImageLocationSchema = z.object({
  /** Source type determines rendering strategy */
  sourceType: z
    .enum(["stream", "upload", "url", "embed"])
    .optional()
    .nullable(),
  /** Direct image URL */
  src: z.string().optional().nullable(),
  /** Streaming URL for progressive loading */
  streamUrl: z.string().optional().nullable(),
  /** Embed URL for iframe rendering */
  embedUrl: z.string().optional().nullable(),
  /** Original upload filename */
  uploadName: z.string().optional().nullable(),
});

export type ImageLocation = z.infer<typeof ImageLocationSchema>;

/**
 * Image generation/processing status
 */
export const ImageStatusSchema = z.object({
  status: z.enum(["generating", "ready", "failed"]).optional().nullable(),
  progress: z.number().optional().nullable(),
  errorMessage: z.string().optional().nullable(),
});

export type ImageStatus = z.infer<typeof ImageStatusSchema>;

/**
 * AI generation metadata
 */
export const ImageMetadataSchema = z.object({
  model: z.string().optional().nullable(),
  prompt: z.string().optional().nullable(),
  negativePrompt: z.string().optional().nullable(),
  seed: z.number().optional().nullable(),
  steps: z.number().optional().nullable(),
  guidance: z.number().optional().nullable(),
  sampler: z.string().optional().nullable(),
  scheduler: z.string().optional().nullable(),
  style: z.string().optional().nullable(),
  lora: z.array(z.string()).optional().nullable(),
  upscaler: z.string().optional().nullable(),
  safety: z.string().optional().nullable(),
  aspectRatio: z.string().optional().nullable(),
});

export type ImageMetadata = z.infer<typeof ImageMetadataSchema>;

/**
 * Tag for categorization/filtering
 */
export const ImageTagSchema = z.object({
  label: z.string(),
  tone: z.enum(["default", "success", "warning", "danger"]).optional(),
});

export type ImageTag = z.infer<typeof ImageTagSchema>;

/**
 * Individual image item
 */
export const ImageItemSchema = z.object({
  id: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.string().optional().nullable(),
  author: z.string().optional().nullable(),
  license: z.string().optional().nullable(),
  /** Direct source URL - REQUIRED for displaying the image */
  source: z.string().describe("REQUIRED: Direct image URL (https://...)"),
  /** Image width in pixels */
  width: z.number().optional().nullable(),
  /** Image height in pixels */
  height: z.number().optional().nullable(),
  /** Image format (png, jpg, webp, etc.) */
  format: z.string().optional().nullable(),
  /** File size in bytes */
  sizeBytes: z.number().optional().nullable(),
  /** Alt text for accessibility */
  alt: z.string().optional().nullable(),
  /** Tags for categorization */
  tags: z.array(ImageTagSchema).optional().nullable(),
  /** AI generation metadata */
  metadata: ImageMetadataSchema.optional().nullable(),
  /** Generation/processing status */
  status: ImageStatusSchema.optional().nullable(),
  /** Source location details (deprecated, use source instead) */
  location: ImageLocationSchema.optional().nullable(),
});

export type ImageItem = z.infer<typeof ImageItemSchema>;

/**
 * Image component schema definition
 */
export const ImagePropsSchema = z.object({
  /** Optional title for the image collection */
  title: z.string().optional().nullable(),
  /** Array of image items to display */
  images: z.array(ImageItemSchema).optional().nullable(),
  /** Accent color for UI elements */
  accentColor: z.string().optional().nullable(),
  /** Number of columns in grid layout (default: 2) */
  columns: z.number().optional().nullable(),
});

/** Type inference for Image props */
export type ImageProps = z.infer<typeof ImagePropsSchema>;

/**
 * Image component definition for catalog registration
 */
export const ImageDefinition = {
  name: "Image" as const,
  props: ImagePropsSchema,
  description:
    "Image gallery component with support for AI-generated images, status tracking, and rich metadata display",
  hasChildren: true,
};
