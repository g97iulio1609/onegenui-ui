import { z } from "zod";

/**
 * Text component schema definition
 */
export const TextPropsSchema = z.object({
  content: z.string().nullable(),
  variant: z.enum(["body", "caption", "label"]).nullable(),
  color: z
    .enum(["default", "muted", "success", "warning", "danger", "error"])
    .nullable(),
});

/** Type inference for Text props */
export type TextProps = z.infer<typeof TextPropsSchema>;

/**
 * Text component definition for catalog registration
 */
export const TextDefinition = {
  name: "Text" as const,
  props: TextPropsSchema,
  description: "Text paragraph",
  hasChildren: true,
};
