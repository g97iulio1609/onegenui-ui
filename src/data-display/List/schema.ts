import { z } from "zod";
import { listItemSchema } from "../../utils/shared-schemas";

/**
 * List component schema definition
 */
export const ListPropsSchema = z.object({
  items: z.array(z.union([z.string(), listItemSchema])).nullable(),
  dataPath: z.string().nullable(),
  emptyMessage: z.string().nullable(),
});

/** Type inference for List props */
export type ListProps = z.infer<typeof ListPropsSchema>;

/**
 * List component definition for catalog registration
 */
export const ListDefinition = {
  name: "List" as const,
  props: ListPropsSchema,
  description: "Render a list from array data",
  hasChildren: true,
};
