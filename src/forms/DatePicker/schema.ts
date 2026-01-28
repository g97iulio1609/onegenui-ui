import { z } from "zod";

/**
 * DatePicker component schema definition
 */
export const DatePickerPropsSchema = z.object({
  label: z.string().nullable(),
  bindPath: z.string().nullable(),
  valuePath: z.string().nullable(),
  value: z.string().nullable(),
  placeholder: z.string().nullable(),
});

/** Type inference for DatePicker props */
export type DatePickerProps = z.infer<typeof DatePickerPropsSchema>;

/**
 * DatePicker component definition for catalog registration
 */
export const DatePickerDefinition = {
  name: "DatePicker" as const,
  props: DatePickerPropsSchema,
  description: "Date picker input",
  hasChildren: true,
};
