import { z } from "zod";

/**
 * Divider component schema definition
 */
export const DividerPropsSchema = z.object({
  orientation: z.enum(["horizontal", "vertical"]).nullable(),
  label: z.string().nullable(),
});

/** Type inference for Divider props */
export type DividerProps = z.infer<typeof DividerPropsSchema>;

/**
 * Divider component definition for catalog registration
 */
export const DividerDefinition = {
  name: "Divider" as const,
  props: DividerPropsSchema,
  description: "Visual divider",
  hasChildren: true,
};
