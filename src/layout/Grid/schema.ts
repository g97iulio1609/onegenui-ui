import { z } from "zod";

/**
 * Grid component schema definition
 */
export const GridPropsSchema = z.object({
  columns: z.number().min(1).max(4).nullable(),
  gap: z.enum(["sm", "md", "lg"]).nullable(),
});

/** Type inference for Grid props */
export type GridProps = z.infer<typeof GridPropsSchema>;

/**
 * Grid component definition for catalog registration
 */
export const GridDefinition = {
  name: "Grid" as const,
  props: GridPropsSchema,
  description: "Grid layout with configurable columns",
  hasChildren: true,
};
