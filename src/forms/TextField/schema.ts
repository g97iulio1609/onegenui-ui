import { z } from "zod";

/**
 * TextField component schema definition
 */
export const TextFieldPropsSchema = z.object({
  label: z.string().nullable(),
  bindPath: z.string().nullable(),
  valuePath: z.string().nullable(),
  value: z.string().nullable(),
  placeholder: z.string().nullable(),
  type: z.string().nullable(),
  checks: z
    .array(
      z.object({
        fn: z.string(),
        message: z.string(),
      }),
    )
    .nullable(),
  validateOn: z.enum(["change", "blur", "submit"]).nullable(),
});

/** Type inference for TextField props */
export type TextFieldProps = z.infer<typeof TextFieldPropsSchema>;

/**
 * TextField component definition for catalog registration
 */
export const TextFieldDefinition = {
  name: "TextField" as const,
  props: TextFieldPropsSchema,
  description: "Text input field with validation",
  hasChildren: true,
};
