import { z } from "zod";

/**
 * Empty component schema definition
 */
export const EmptyPropsSchema = z.object({
  title: z.string(),
  description: z.string().nullable(),
  action: z.string().nullable(),
  actionLabel: z.string().nullable(),
});

/** Type inference for Empty props */
export type EmptyProps = z.infer<typeof EmptyPropsSchema>;

/**
 * Empty component definition for catalog registration
 */
export const EmptyDefinition = {
  name: "Empty" as const,
  props: EmptyPropsSchema,
  description: "Empty state placeholder",
  hasChildren: true,
};
