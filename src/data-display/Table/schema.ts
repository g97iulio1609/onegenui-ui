import { z } from "zod";
import { tableRowSchema } from "../../utils/shared-schemas";

/**
 * Table component schema definition
 */
/**
 * Column schema that accepts both canonical (key/label) and alternative (accessor/header) naming.
 * This ensures compatibility with different AI model outputs.
 */
const tableColumnSchema = z
  .object({
    // Canonical names
    key: z.string().optional(),
    label: z.string().optional(),
    // Alternative names (used by some AI models)
    accessor: z.string().optional(),
    header: z.string().optional(),
    // Format option
    format: z.enum(["text", "currency", "date", "badge"]).nullable().optional(),
  })
  .transform((col) => ({
    key: col.key ?? col.accessor ?? "",
    label: col.label ?? col.header ?? "",
    format: col.format ?? null,
  }));

export const TablePropsSchema = z.object({
  title: z.string().nullable(),
  rows: z.array(tableRowSchema).nullable(),
  dataPath: z.string().nullable(),
  columns: z.array(tableColumnSchema),
});

/** Type inference for Table props */
export type TableProps = z.infer<typeof TablePropsSchema>;

/**
 * Table component definition for catalog registration
 */
export const TableDefinition = {
  name: "Table" as const,
  props: TablePropsSchema,
  description: "Display tabular data",
  hasChildren: true,
};
