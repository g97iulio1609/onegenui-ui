import { z } from "zod";

/**
 * Alert component schema definition
 */
export const AlertPropsSchema = z.object({
  type: z.enum(["info", "success", "warning", "error"]).nullable(),
  title: z.string().nullable(),
  message: z.string().nullable(),
  dismissible: z.boolean().nullable(),
});

/** Type inference for Alert props */
export type AlertProps = z.infer<typeof AlertPropsSchema>;

/**
 * Alert component definition for catalog registration
 */
export const AlertDefinition = {
  name: "Alert" as const,
  props: AlertPropsSchema,
  description: "Alert/notification banner",
  hasChildren: true,
};
