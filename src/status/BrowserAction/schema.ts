import { z } from "zod";

/**
 * BrowserAction component schema - displays real-time browser operation steps
 */
export const BrowserActionPropsSchema = z.object({
  id: z.string().describe("Unique action ID"),
  action: z
    .enum([
      "navigating",
      "searching",
      "extracting",
      "clicking",
      "typing",
      "waiting",
      "capturing",
    ])
    .describe("Type of browser action being performed"),
  target: z.string().nullable().describe("Target element or description"),
  url: z.string().nullable().describe("URL being navigated to"),
  status: z
    .enum(["pending", "loading", "complete", "error"])
    .describe("Current status of the action"),
  message: z.string().nullable().describe("Optional status message"),
  error: z.string().nullable().describe("Error message if status is error"),
});

export type BrowserActionProps = z.infer<typeof BrowserActionPropsSchema>;

export const BrowserActionDefinition = {
  name: "BrowserAction" as const,
  props: BrowserActionPropsSchema,
  description: "Displays real-time browser automation steps with status",
  hasChildren: false,
};
