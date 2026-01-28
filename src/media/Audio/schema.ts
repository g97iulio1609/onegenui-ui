import { z } from "zod";

/**
 * Audio component schema definition
 */
export const AudioPropsSchema = z.object({});

/** Type inference for Audio props */
export type AudioProps = z.infer<typeof AudioPropsSchema>;

/**
 * Audio component definition for catalog registration
 */
export const AudioDefinition = {
  name: "Audio" as const,
  props: AudioPropsSchema,
  description: "Audio component",
  hasChildren: true,
};
