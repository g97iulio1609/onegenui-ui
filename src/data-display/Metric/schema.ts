import { z } from "zod";

/**
 * Metric component schema definition
 */
export const MetricPropsSchema = z.object({
  label: z.string(),
  value: z.union([z.string(), z.number()]).nullable(),
  valuePath: z.string().nullable(),
  format: z.enum(["number", "currency", "percent"]).nullable(),
  trend: z.enum(["up", "down", "neutral"]).nullable(),
  trendValue: z.string().nullable(),
});

/** Type inference for Metric props */
export type MetricProps = z.infer<typeof MetricPropsSchema>;

/**
 * Metric component definition for catalog registration
 */
export const MetricDefinition = {
  name: "Metric" as const,
  props: MetricPropsSchema,
  description: "Display a single metric with optional trend indicator",
  hasChildren: true,
};
