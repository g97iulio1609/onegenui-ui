import { z } from "zod";

/**
 * Stack component schema definition
 */
export const StackPropsSchema = z.object({
  direction: z.enum(["horizontal", "vertical"]).nullable(),
  gap: z.enum(["sm", "md", "lg"]).nullable(),
  align: z.enum(["start", "center", "end", "stretch"]).nullable(),
});

/** Type inference for Stack props */
export type StackProps = z.infer<typeof StackPropsSchema>;

/**
 * Stack component definition for catalog registration
 */
export const StackDefinition = {
  name: "Stack" as const,
  props: StackPropsSchema,
  description: "Flex stack for horizontal or vertical layouts",
  hasChildren: true,
};
