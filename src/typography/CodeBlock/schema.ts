import { z } from "zod";

/**
 * CodeBlock component schema definition
 */
export const CodeBlockPropsSchema = z.object({});

/** Type inference for CodeBlock props */
export type CodeBlockProps = z.infer<typeof CodeBlockPropsSchema>;

/**
 * CodeBlock component definition for catalog registration
 */
export const CodeBlockDefinition = {
  name: "CodeBlock" as const,
  props: CodeBlockPropsSchema,
  description: "CodeBlock component",
  hasChildren: true,
};
