import { z } from "zod";
import { timelineItemSchema } from "../../utils/shared-schemas";

/**
 * Timeline component schema definition
 */
export const TimelinePropsSchema = z.object({
  dataPath: z.string().nullable(),
  items: z.array(timelineItemSchema).nullable(),
  titleKey: z.string().nullable(),
  dateKey: z.string().nullable(),
  descriptionKey: z.string().nullable(),
  statusKey: z.string().nullable(),
});

/** Type inference for Timeline props */
export type TimelineProps = z.infer<typeof TimelinePropsSchema>;

/**
 * Timeline component definition for catalog registration
 */
export const TimelineDefinition = {
  name: "Timeline" as const,
  props: TimelinePropsSchema,
  description: "Display a vertical timeline of events",
  hasChildren: true,
};
