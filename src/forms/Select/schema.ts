import { z } from "zod";

/**
 * Select component schema definition
 */
export const SelectPropsSchema = z.object({
  label: z.string().nullable(),
  bindPath: z.string().nullable(),
  valuePath: z.string().nullable(),
  value: z.string().nullable(),
  options: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    }),
  ),
  placeholder: z.string().nullable(),
});

/** Type inference for Select props */
export type SelectProps = z.infer<typeof SelectPropsSchema>;

/**
 * Select component definition for catalog registration
 */
export const SelectDefinition = {
  name: "Select" as const,
  props: SelectPropsSchema,
  description: "Dropdown select input",
  hasChildren: true,
};
