import { z } from "zod";

/**
 * Supported video providers for embed rendering
 */
export const VideoProviderSchema = z.enum([
  "youtube",
  "vimeo",
  "dailymotion",
  "twitch",
  "tiktok",
  "twitter",
  "custom",
]);

export type VideoProvider = z.infer<typeof VideoProviderSchema>;

/**
 * Video location/source configuration
 */
export const VideoLocationSchema = z.object({
  /** Source type determines rendering strategy */
  sourceType: z
    .enum(["stream", "upload", "url", "embed"])
    .optional()
    .nullable(),
  /** Direct video URL (mp4, webm, etc.) */
  src: z.string().optional().nullable(),
  /** Streaming URL (HLS, DASH) */
  streamUrl: z.string().optional().nullable(),
  /** Embed URL for iframe rendering (YouTube, Vimeo, etc.) */
  embedUrl: z.string().optional().nullable(),
  /** Original upload filename */
  uploadName: z.string().optional().nullable(),
  /** Video provider for embed handling */
  provider: VideoProviderSchema.optional().nullable(),
});

export type VideoLocation = z.infer<typeof VideoLocationSchema>;

/**
 * Video generation/processing status
 */
export const VideoStatusSchema = z.object({
  status: z.enum(["generating", "ready", "failed"]).optional().nullable(),
  progress: z.number().optional().nullable(),
  errorMessage: z.string().optional().nullable(),
});

export type VideoStatus = z.infer<typeof VideoStatusSchema>;

/**
 * AI generation metadata
 */
export const VideoMetadataSchema = z.object({
  model: z.string().optional().nullable(),
  prompt: z.string().optional().nullable(),
  negativePrompt: z.string().optional().nullable(),
  seed: z.number().optional().nullable(),
  steps: z.number().optional().nullable(),
  guidance: z.number().optional().nullable(),
  style: z.string().optional().nullable(),
  lora: z.array(z.string()).optional().nullable(),
  safety: z.string().optional().nullable(),
  aspectRatio: z.string().optional().nullable(),
  motion: z.string().optional().nullable(),
});

export type VideoMetadata = z.infer<typeof VideoMetadataSchema>;

/**
 * Tag for categorization/filtering
 */
export const VideoTagSchema = z.object({
  label: z.string(),
  tone: z.enum(["default", "success", "warning", "danger"]).optional(),
});

export type VideoTag = z.infer<typeof VideoTagSchema>;

/**
 * Individual video item
 */
export const VideoItemSchema = z.object({
  id: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.string().optional().nullable(),
  author: z.string().optional().nullable(),
  license: z.string().optional().nullable(),
  source: z.string().optional().nullable(),
  poster: z.string().optional().nullable(),
  duration: z.number().optional().nullable(),
  resolution: z.string().optional().nullable(),
  fps: z.number().optional().nullable(),
  codec: z.string().optional().nullable(),
  bitrate: z.number().optional().nullable(),
  sizeBytes: z.number().optional().nullable(),
  transcript: z.string().optional().nullable(),
  tags: z.array(VideoTagSchema).optional().nullable(),
  metadata: VideoMetadataSchema.optional().nullable(),
  status: VideoStatusSchema.optional().nullable(),
  location: VideoLocationSchema.optional().nullable(),
});

export type VideoItem = z.infer<typeof VideoItemSchema>;

/**
 * Video component schema definition
 */
export const VideoPropsSchema = z.object({
  /** Optional title for the video collection */
  title: z.string().optional().nullable(),
  /** Array of video items to display */
  videos: z.array(VideoItemSchema).optional().nullable(),
  /** Accent color for UI elements */
  accentColor: z.string().optional().nullable(),
});

/** Type inference for Video props */
export type VideoProps = z.infer<typeof VideoPropsSchema>;

/**
 * Video component definition for catalog registration
 */
export const VideoDefinition = {
  name: "Video" as const,
  props: VideoPropsSchema,
  description:
    "Video component with support for YouTube, Vimeo, Dailymotion, Twitch, TikTok, Twitter/X and direct video files",
  hasChildren: true,
};
