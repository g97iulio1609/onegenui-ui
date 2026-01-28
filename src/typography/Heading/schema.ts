import { z } from "zod";

/**
 * Heading component schema definition
 */
export const HeadingPropsSchema = z.object({
  text: z.string().nullable(),
  level: z
    .union([
      z.enum(["h1", "h2", "h3", "h4"]),
      z.number().int().min(1).max(4),
      z.string().regex(/^(h[1-4]|[1-4])$/),
    ])
    .nullable(),
});

/** Type inference for Heading props */
export type HeadingProps = z.infer<typeof HeadingPropsSchema>;

/**
 * Heading component definition for catalog registration
 */
export const HeadingDefinition = {
  name: "Heading" as const,
  props: HeadingPropsSchema,
  description: "Section heading",
  hasChildren: true,
};
