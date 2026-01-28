import { z } from "zod";

/**
 * Button component schema definition
 */
export const ButtonPropsSchema = z.object({
  label: z.string().nullable(),
  variant: z.enum(["primary", "secondary", "danger", "ghost"]).nullable(),
  size: z.enum(["sm", "md", "lg"]).nullable(),
  action: z.string().nullable(),
  actionParams: z.record(z.string(), z.unknown()).nullable(),
  disabled: z.boolean().nullable(),
});

/** Type inference for Button props */
export type ButtonProps = z.infer<typeof ButtonPropsSchema>;

/**
 * Button component definition for catalog registration
 */
export const ButtonDefinition = {
  name: "Button" as const,
  props: ButtonPropsSchema,
  description: "Clickable button with action",
  hasChildren: true,
};
