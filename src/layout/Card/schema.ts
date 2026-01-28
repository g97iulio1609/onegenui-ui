import { z } from "zod";

/**
 * Card component schema definition
 */
export const CardPropsSchema = z.object({
  title: z.string().nullable(),
  description: z.string().nullable(),
  padding: z.enum(["none", "sm", "md", "lg"]).nullable(),
});

/** Type inference for Card props */
export type CardProps = z.infer<typeof CardPropsSchema>;

/**
 * Card component definition for catalog registration
 */
export const CardDefinition = {
  name: "Card" as const,
  props: CardPropsSchema,
  description: "A card container with optional title",
  hasChildren: true,
};
