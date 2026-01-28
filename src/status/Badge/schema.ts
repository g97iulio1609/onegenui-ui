import { z } from "zod";

/**
 * Badge component schema definition
 */
export const BadgePropsSchema = z.object({
  text: z.string().nullable(),
  variant: z
    .enum(["default", "success", "warning", "danger", "info"])
    .nullable(),
});

/** Type inference for Badge props */
export type BadgeProps = z.infer<typeof BadgePropsSchema>;

/**
 * Badge component definition for catalog registration
 */
export const BadgeDefinition = {
  name: "Badge" as const,
  props: BadgePropsSchema,
  description: "Small status badge",
  hasChildren: true,
};
