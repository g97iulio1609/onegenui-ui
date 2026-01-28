// src/layout/Card/schema.ts
import { z } from "zod";
var CardPropsSchema = z.object({
  title: z.string().nullable(),
  description: z.string().nullable(),
  padding: z.enum(["none", "sm", "md", "lg"]).nullable()
});
var CardDefinition = {
  name: "Card",
  props: CardPropsSchema,
  description: "A card container with optional title",
  hasChildren: true
};

// src/layout/Grid/schema.ts
import { z as z2 } from "zod";
var GridPropsSchema = z2.object({
  columns: z2.number().min(1).max(4).nullable(),
  gap: z2.enum(["sm", "md", "lg"]).nullable()
});
var GridDefinition = {
  name: "Grid",
  props: GridPropsSchema,
  description: "Grid layout with configurable columns",
  hasChildren: true
};

// src/layout/Stack/schema.ts
import { z as z3 } from "zod";
var StackPropsSchema = z3.object({
  direction: z3.enum(["horizontal", "vertical"]).nullable(),
  gap: z3.enum(["sm", "md", "lg"]).nullable(),
  align: z3.enum(["start", "center", "end", "stretch"]).nullable()
});
var StackDefinition = {
  name: "Stack",
  props: StackPropsSchema,
  description: "Flex stack for horizontal or vertical layouts",
  hasChildren: true
};

// src/layout/Divider/schema.ts
import { z as z4 } from "zod";
var DividerPropsSchema = z4.object({
  orientation: z4.enum(["horizontal", "vertical"]).nullable(),
  label: z4.string().nullable()
});
var DividerDefinition = {
  name: "Divider",
  props: DividerPropsSchema,
  description: "Visual divider",
  hasChildren: true
};

// src/typography/Heading/schema.ts
import { z as z5 } from "zod";
var HeadingPropsSchema = z5.object({
  text: z5.string().nullable(),
  level: z5.union([
    z5.enum(["h1", "h2", "h3", "h4"]),
    z5.number().int().min(1).max(4),
    z5.string().regex(/^(h[1-4]|[1-4])$/)
  ]).nullable()
});
var HeadingDefinition = {
  name: "Heading",
  props: HeadingPropsSchema,
  description: "Section heading",
  hasChildren: true
};

// src/typography/Text/schema.ts
import { z as z6 } from "zod";
var TextPropsSchema = z6.object({
  content: z6.string().nullable(),
  variant: z6.enum(["body", "caption", "label"]).nullable(),
  color: z6.enum(["default", "muted", "success", "warning", "danger", "error"]).nullable()
});
var TextDefinition = {
  name: "Text",
  props: TextPropsSchema,
  description: "Text paragraph",
  hasChildren: true
};

// src/typography/CodeBlock/schema.ts
import { z as z7 } from "zod";
var CodeBlockPropsSchema = z7.object({});
var CodeBlockDefinition = {
  name: "CodeBlock",
  props: CodeBlockPropsSchema,
  description: "CodeBlock component",
  hasChildren: true
};

// src/typography/Document/schema.ts
import { z as z8 } from "zod";
var DocumentSectionSchema = z8.object({
  id: z8.string().optional().nullable(),
  title: z8.string().optional().nullable(),
  content: z8.string().optional().nullable(),
  highlights: z8.array(z8.string()).optional().nullable()
});
var DocumentItemSchema = z8.object({
  id: z8.string().optional().nullable(),
  title: z8.string(),
  summary: z8.string().optional().nullable(),
  author: z8.string().optional().nullable(),
  createdAt: z8.string().optional().nullable(),
  sections: z8.array(DocumentSectionSchema).optional().nullable(),
  tags: z8.array(z8.string()).optional().nullable()
});
var DocumentPropsSchema = z8.object({
  /** Title for the document collection/viewer */
  title: z8.string().optional().nullable(),
  /** Array of documents to display */
  documents: z8.array(DocumentItemSchema).optional().nullable(),
  /** Accent color for UI elements */
  accentColor: z8.string().optional().nullable()
});
var DocumentDefinition = {
  name: "Document",
  props: DocumentPropsSchema,
  description: "Document viewer component for displaying rich content articles, reports, specs, and technical documentation",
  hasChildren: true
};

// src/status/Badge/schema.ts
import { z as z9 } from "zod";
var BadgePropsSchema = z9.object({
  text: z9.string().nullable(),
  variant: z9.enum(["default", "success", "warning", "danger", "info"]).nullable()
});
var BadgeDefinition = {
  name: "Badge",
  props: BadgePropsSchema,
  description: "Small status badge",
  hasChildren: true
};

// src/status/Alert/schema.ts
import { z as z10 } from "zod";
var AlertPropsSchema = z10.object({
  type: z10.enum(["info", "success", "warning", "error"]).nullable(),
  title: z10.string().nullable(),
  message: z10.string().nullable(),
  dismissible: z10.boolean().nullable()
});
var AlertDefinition = {
  name: "Alert",
  props: AlertPropsSchema,
  description: "Alert/notification banner",
  hasChildren: true
};

// src/status/Empty/schema.ts
import { z as z11 } from "zod";
var EmptyPropsSchema = z11.object({
  title: z11.string(),
  description: z11.string().nullable(),
  action: z11.string().nullable(),
  actionLabel: z11.string().nullable()
});
var EmptyDefinition = {
  name: "Empty",
  props: EmptyPropsSchema,
  description: "Empty state placeholder",
  hasChildren: true
};

// src/status/BrowserAction/schema.ts
import { z as z12 } from "zod";
var BrowserActionPropsSchema = z12.object({
  id: z12.string().describe("Unique action ID"),
  action: z12.enum([
    "navigating",
    "searching",
    "extracting",
    "clicking",
    "typing",
    "waiting",
    "capturing"
  ]).describe("Type of browser action being performed"),
  target: z12.string().nullable().describe("Target element or description"),
  url: z12.string().nullable().describe("URL being navigated to"),
  status: z12.enum(["pending", "loading", "complete", "error"]).describe("Current status of the action"),
  message: z12.string().nullable().describe("Optional status message"),
  error: z12.string().nullable().describe("Error message if status is error")
});
var BrowserActionDefinition = {
  name: "BrowserAction",
  props: BrowserActionPropsSchema,
  description: "Displays real-time browser automation steps with status",
  hasChildren: false
};

// src/forms/Button/schema.ts
import { z as z13 } from "zod";
var ButtonPropsSchema = z13.object({
  label: z13.string().nullable(),
  variant: z13.enum(["primary", "secondary", "danger", "ghost"]).nullable(),
  size: z13.enum(["sm", "md", "lg"]).nullable(),
  action: z13.string().nullable(),
  actionParams: z13.record(z13.string(), z13.unknown()).nullable(),
  disabled: z13.boolean().nullable()
});
var ButtonDefinition = {
  name: "Button",
  props: ButtonPropsSchema,
  description: "Clickable button with action",
  hasChildren: true
};

// src/forms/TextField/schema.ts
import { z as z14 } from "zod";
var TextFieldPropsSchema = z14.object({
  label: z14.string().nullable(),
  bindPath: z14.string().nullable(),
  valuePath: z14.string().nullable(),
  value: z14.string().nullable(),
  placeholder: z14.string().nullable(),
  type: z14.string().nullable(),
  checks: z14.array(
    z14.object({
      fn: z14.string(),
      message: z14.string()
    })
  ).nullable(),
  validateOn: z14.enum(["change", "blur", "submit"]).nullable()
});
var TextFieldDefinition = {
  name: "TextField",
  props: TextFieldPropsSchema,
  description: "Text input field with validation",
  hasChildren: true
};

// src/forms/Select/schema.ts
import { z as z15 } from "zod";
var SelectPropsSchema = z15.object({
  label: z15.string().nullable(),
  bindPath: z15.string().nullable(),
  valuePath: z15.string().nullable(),
  value: z15.string().nullable(),
  options: z15.array(
    z15.object({
      value: z15.string(),
      label: z15.string()
    })
  ),
  placeholder: z15.string().nullable()
});
var SelectDefinition = {
  name: "Select",
  props: SelectPropsSchema,
  description: "Dropdown select input",
  hasChildren: true
};

// src/forms/DatePicker/schema.ts
import { z as z16 } from "zod";
var DatePickerPropsSchema = z16.object({
  label: z16.string().nullable(),
  bindPath: z16.string().nullable(),
  valuePath: z16.string().nullable(),
  value: z16.string().nullable(),
  placeholder: z16.string().nullable()
});
var DatePickerDefinition = {
  name: "DatePicker",
  props: DatePickerPropsSchema,
  description: "Date picker input",
  hasChildren: true
};

// src/data-display/Metric/schema.ts
import { z as z17 } from "zod";
var MetricPropsSchema = z17.object({
  label: z17.string(),
  value: z17.union([z17.string(), z17.number()]).nullable(),
  valuePath: z17.string().nullable(),
  format: z17.enum(["number", "currency", "percent"]).nullable(),
  trend: z17.enum(["up", "down", "neutral"]).nullable(),
  trendValue: z17.string().nullable()
});
var MetricDefinition = {
  name: "Metric",
  props: MetricPropsSchema,
  description: "Display a single metric with optional trend indicator",
  hasChildren: true
};

// src/data-display/Table/schema.ts
import { z as z18 } from "zod";

// src/utils/shared-schemas.ts
import {
  chartDatumSchema,
  listItemSchema,
  timelineItemSchema,
  toDoItemSchema,
  tableRowSchema,
  mindMapNodeSchema,
  graphNodeSchema,
  graphEdgeSchema,
  kanbanItemSchema,
  kanbanColumnSchema,
  ganttTaskSchema,
  emailItemSchema,
  workoutSetSchema,
  exerciseSchema,
  mealItemSchema,
  mealSchema,
  messageItemSchema,
  participantSchema
} from "@onegenui/schemas";

// src/data-display/Table/schema.ts
var tableColumnSchema = z18.object({
  // Canonical names
  key: z18.string().optional(),
  label: z18.string().optional(),
  // Alternative names (used by some AI models)
  accessor: z18.string().optional(),
  header: z18.string().optional(),
  // Format option
  format: z18.enum(["text", "currency", "date", "badge"]).nullable().optional()
}).transform((col) => ({
  key: col.key ?? col.accessor ?? "",
  label: col.label ?? col.header ?? "",
  format: col.format ?? null
}));
var TablePropsSchema = z18.object({
  title: z18.string().nullable(),
  rows: z18.array(tableRowSchema).nullable(),
  dataPath: z18.string().nullable(),
  columns: z18.array(tableColumnSchema)
});
var TableDefinition = {
  name: "Table",
  props: TablePropsSchema,
  description: "Display tabular data",
  hasChildren: true
};

// src/data-display/List/schema.ts
import { z as z19 } from "zod";
var ListPropsSchema = z19.object({
  items: z19.array(z19.union([z19.string(), listItemSchema])).nullable(),
  dataPath: z19.string().nullable(),
  emptyMessage: z19.string().nullable()
});
var ListDefinition = {
  name: "List",
  props: ListPropsSchema,
  description: "Render a list from array data",
  hasChildren: true
};

// src/data-display/Timeline/schema.ts
import { z as z20 } from "zod";
var TimelinePropsSchema = z20.object({
  dataPath: z20.string().nullable(),
  items: z20.array(timelineItemSchema).nullable(),
  titleKey: z20.string().nullable(),
  dateKey: z20.string().nullable(),
  descriptionKey: z20.string().nullable(),
  statusKey: z20.string().nullable()
});
var TimelineDefinition = {
  name: "Timeline",
  props: TimelinePropsSchema,
  description: "Display a vertical timeline of events",
  hasChildren: true
};

// src/data-display/SearchResults/schema.ts
import { z as z21 } from "zod";
var SourceCitationSchema = z21.object({
  id: z21.string().describe("Unique citation ID (e.g., '1', '2')"),
  title: z21.string().describe("Source title or section title"),
  // Web source fields
  url: z21.string().optional().nullable().describe("Source URL (for web sources)"),
  domain: z21.string().optional().nullable().describe("Source domain name"),
  favicon: z21.string().optional().nullable().describe("Source favicon URL"),
  // Common fields
  snippet: z21.string().optional().nullable().describe("Brief excerpt from the source"),
  date: z21.string().optional().nullable().describe("Publication date"),
  // Document source fields
  pageNumber: z21.number().optional().nullable().describe("Page number (for document citations)"),
  excerpt: z21.string().optional().nullable().describe("Exact quoted text from document (for document citations)"),
  documentTitle: z21.string().optional().nullable().describe("Document title (for document citations)")
});
var KeyPointSchema = z21.object({
  text: z21.string().describe("The key point text"),
  citations: z21.array(z21.string()).optional().nullable().describe("Citation IDs that support this point (e.g., ['1', '2'])")
});
var SectionSchema = z21.object({
  title: z21.string().describe("Section title (e.g., 'Technology', 'Business')"),
  content: z21.string().describe("Section content with inline citations like [1], [2]"),
  citations: z21.array(z21.string()).optional().nullable().describe("Citation IDs used in this section")
});
var SynthesisSchema = z21.object({
  summary: z21.string().describe(
    "AI-generated summary with inline citations like [1], [2]. Should be comprehensive and well-structured."
  ),
  keyPoints: z21.array(KeyPointSchema).optional().nullable().describe("Bullet points highlighting the most important findings"),
  sections: z21.array(SectionSchema).optional().nullable().describe("Thematic sections organizing the information"),
  followUpQuestions: z21.array(z21.string()).optional().nullable().describe("Suggested follow-up questions for deeper exploration")
});
var SearchResultItemSchema = z21.object({
  title: z21.string().describe("Result title"),
  url: z21.string().describe("Result URL"),
  snippet: z21.string().describe("Result snippet/description"),
  favicon: z21.string().optional().nullable().describe("Favicon URL"),
  image: z21.string().optional().nullable().describe("Preview image URL"),
  video: z21.object({
    url: z21.string().describe("Video URL"),
    thumbnail: z21.string().optional().nullable().describe("Video thumbnail URL"),
    provider: z21.string().optional().nullable().describe("Video provider"),
    duration: z21.string().optional().nullable().describe("Video duration")
  }).optional().nullable().describe("Video preview data"),
  date: z21.string().optional().nullable().describe("Publication date"),
  source: z21.string().optional().nullable().describe("Source name"),
  position: z21.number().optional().nullable().describe("Result position in search")
});
var SearchResultsPropsSchema = z21.object({
  query: z21.string().describe("The search query that was performed"),
  results: z21.array(SearchResultItemSchema).describe("List of search results"),
  totalResults: z21.number().nullable().describe("Total number of results found"),
  searchTime: z21.number().nullable().describe("Search time in milliseconds"),
  sources: z21.array(SourceCitationSchema).optional().nullable().describe("List of sources/citations used"),
  synthesis: SynthesisSchema.optional().nullable().describe(
    "AI-generated synthesis with summary, key points, and structured sections (Perplexity-style)"
  )
});
var SearchResultsDefinition = {
  name: "SearchResults",
  props: SearchResultsPropsSchema,
  description: "Displays web search results with titles, URLs, and snippets",
  hasChildren: false
};

// src/data-display/DriveFile/schema.ts
import { z as z22 } from "zod";
var DriveFilePropsSchema = z22.object({
  id: z22.string(),
  name: z22.string(),
  mimeType: z22.string(),
  thumbnailLink: z22.string().optional(),
  webViewLink: z22.string().optional(),
  iconLink: z22.string().optional(),
  modifiedTime: z22.string().optional(),
  owners: z22.array(
    z22.object({
      displayName: z22.string().optional(),
      photoLink: z22.string().optional()
    })
  ).optional()
});
var DriveFileDefinition = {
  name: "DriveFile",
  props: DriveFilePropsSchema,
  description: "Display a Google Drive file card.",
  hasChildren: false
};

// src/data-display/DriveFileList/schema.ts
import { z as z23 } from "zod";
var DriveFileListSchema = z23.object({
  title: z23.string().optional().nullable().describe("Title for the file list"),
  description: z23.string().optional().nullable().describe("Description or subtitle"),
  viewMode: z23.enum(["grid", "list"]).optional().default("list").describe("View mode: grid or list"),
  files: z23.array(
    z23.object({
      id: z23.string().describe("Unique file identifier"),
      name: z23.string().describe("File name"),
      mimeType: z23.string().describe("MIME type of the file"),
      size: z23.number().optional().nullable().describe("File size in bytes"),
      modifiedTime: z23.string().optional().nullable().describe("Last modified time (ISO 8601)"),
      webViewLink: z23.string().optional().nullable().describe("URL to open the file in Drive"),
      iconLink: z23.string().optional().nullable().describe("URL to the file type icon"),
      thumbnailLink: z23.string().optional().nullable().describe("URL to a thumbnail preview"),
      owners: z23.array(
        z23.object({
          displayName: z23.string().optional(),
          photoLink: z23.string().optional()
        })
      ).optional().nullable().describe("File owners"),
      shared: z23.boolean().optional().describe("Whether the file is shared"),
      starred: z23.boolean().optional().describe("Whether the file is starred")
    })
  ).optional().nullable().describe("List of Drive files to display")
});
var DriveFileListDefinition = {
  name: "DriveFileList",
  props: DriveFileListSchema,
  description: "Displays a list of Google Drive files with grid and list view options.",
  hasChildren: false
};

// src/data-display/Weather/schema.ts
import { z as z24 } from "zod";
var DailyForecastSchema = z24.object({
  date: z24.string().describe("Date (e.g. 'Mon', '2024-01-01')"),
  tempMin: z24.number().describe("Minimum temperature"),
  tempMax: z24.number().describe("Maximum temperature"),
  condition: z24.string().describe("Weather condition (Sunny, Cloudy, etc.)"),
  icon: z24.string().optional().nullable().describe("Icon name or URL"),
  precipChance: z24.number().optional().nullable().describe("Precipitation chance %")
});
var HourlyForecastSchema = z24.object({
  time: z24.string().describe("Time (e.g. '10:00', '10 AM')"),
  temp: z24.number().describe("Temperature"),
  condition: z24.string().describe("Weather condition"),
  icon: z24.string().optional().nullable().describe("Icon name or URL")
});
var CurrentWeatherSchema = z24.object({
  temp: z24.number().describe("Current temperature"),
  condition: z24.string().describe("Current condition"),
  humidity: z24.number().optional().nullable().describe("Humidity %"),
  windSpeed: z24.number().optional().nullable().describe("Wind speed"),
  windUnit: z24.string().optional().nullable().describe("Wind speed unit (km/h, mph)"),
  feelsLike: z24.number().optional().nullable().describe("Feels like temperature"),
  uvIndex: z24.number().optional().nullable().describe("UV Index"),
  visibility: z24.number().optional().nullable().describe("Visibility distance"),
  pressure: z24.number().optional().nullable().describe("Pressure (hPa)")
});
var WeatherPropsSchema = z24.object({
  location: z24.string().describe("Location name (City, Region)"),
  current: CurrentWeatherSchema.describe("Current weather data"),
  forecastDaily: z24.array(DailyForecastSchema).optional().nullable().describe("Daily forecast"),
  forecastHourly: z24.array(HourlyForecastSchema).optional().nullable().describe("Hourly forecast"),
  unit: z24.enum(["C", "F"]).optional().nullable().describe("Temperature unit (C/F)"),
  accentColor: z24.string().optional().nullable().describe("Accent color")
});
var WeatherDefinition = {
  name: "Weather",
  props: WeatherPropsSchema,
  description: "Weather dashboard with current conditions and forecast",
  hasChildren: false
};

// src/data-display/DocumentIndex/schema.ts
import { z as z25 } from "zod";
var DocumentIndexNodeSchema = z25.lazy(
  () => z25.object({
    id: z25.string(),
    title: z25.string(),
    startPage: z25.number().optional().nullable(),
    endPage: z25.number().optional().nullable(),
    summary: z25.string().optional().nullable(),
    children: z25.array(DocumentIndexNodeSchema).optional().nullable()
  })
);
var DocumentIndexStatusSchema = z25.enum([
  "idle",
  "parsing",
  "analyzing",
  "building",
  "complete",
  "error"
]);
var DocumentIndexPropsSchema = z25.object({
  /** Document file name */
  fileName: z25.string(),
  /** Current processing status */
  status: DocumentIndexStatusSchema.optional().nullable(),
  /** Progress message */
  message: z25.string().optional().nullable(),
  /** Progress percentage (0-100) */
  progress: z25.number().optional().nullable(),
  /** Total pages in document */
  pageCount: z25.number().optional().nullable(),
  /** Current page being processed */
  currentPage: z25.number().optional().nullable(),
  /** Document description */
  description: z25.string().optional().nullable(),
  /** The index tree structure */
  nodes: z25.array(DocumentIndexNodeSchema).optional().nullable(),
  /** Error message if status is error */
  error: z25.string().optional().nullable()
});
var DocumentIndexDefinition = {
  name: "DocumentIndex",
  props: DocumentIndexPropsSchema,
  description: "Document index viewer showing hierarchical structure and progress during PDF analysis",
  hasChildren: false
};

// src/media/Audio/schema.ts
import { z as z26 } from "zod";
var AudioPropsSchema = z26.object({});
var AudioDefinition = {
  name: "Audio",
  props: AudioPropsSchema,
  description: "Audio component",
  hasChildren: true
};

// src/media/Video/schema.ts
import { z as z27 } from "zod";
var VideoProviderSchema = z27.enum([
  "youtube",
  "vimeo",
  "dailymotion",
  "twitch",
  "tiktok",
  "twitter",
  "custom"
]);
var VideoLocationSchema = z27.object({
  /** Source type determines rendering strategy */
  sourceType: z27.enum(["stream", "upload", "url", "embed"]).optional().nullable(),
  /** Direct video URL (mp4, webm, etc.) */
  src: z27.string().optional().nullable(),
  /** Streaming URL (HLS, DASH) */
  streamUrl: z27.string().optional().nullable(),
  /** Embed URL for iframe rendering (YouTube, Vimeo, etc.) */
  embedUrl: z27.string().optional().nullable(),
  /** Original upload filename */
  uploadName: z27.string().optional().nullable(),
  /** Video provider for embed handling */
  provider: VideoProviderSchema.optional().nullable()
});
var VideoStatusSchema = z27.object({
  status: z27.enum(["generating", "ready", "failed"]).optional().nullable(),
  progress: z27.number().optional().nullable(),
  errorMessage: z27.string().optional().nullable()
});
var VideoMetadataSchema = z27.object({
  model: z27.string().optional().nullable(),
  prompt: z27.string().optional().nullable(),
  negativePrompt: z27.string().optional().nullable(),
  seed: z27.number().optional().nullable(),
  steps: z27.number().optional().nullable(),
  guidance: z27.number().optional().nullable(),
  style: z27.string().optional().nullable(),
  lora: z27.array(z27.string()).optional().nullable(),
  safety: z27.string().optional().nullable(),
  aspectRatio: z27.string().optional().nullable(),
  motion: z27.string().optional().nullable()
});
var VideoTagSchema = z27.object({
  label: z27.string(),
  tone: z27.enum(["default", "success", "warning", "danger"]).optional()
});
var VideoItemSchema = z27.object({
  id: z27.string().optional().nullable(),
  title: z27.string().optional().nullable(),
  caption: z27.string().optional().nullable(),
  description: z27.string().optional().nullable(),
  createdAt: z27.string().optional().nullable(),
  author: z27.string().optional().nullable(),
  license: z27.string().optional().nullable(),
  source: z27.string().optional().nullable(),
  poster: z27.string().optional().nullable(),
  duration: z27.number().optional().nullable(),
  resolution: z27.string().optional().nullable(),
  fps: z27.number().optional().nullable(),
  codec: z27.string().optional().nullable(),
  bitrate: z27.number().optional().nullable(),
  sizeBytes: z27.number().optional().nullable(),
  transcript: z27.string().optional().nullable(),
  tags: z27.array(VideoTagSchema).optional().nullable(),
  metadata: VideoMetadataSchema.optional().nullable(),
  status: VideoStatusSchema.optional().nullable(),
  location: VideoLocationSchema.optional().nullable()
});
var VideoPropsSchema = z27.object({
  /** Optional title for the video collection */
  title: z27.string().optional().nullable(),
  /** Array of video items to display */
  videos: z27.array(VideoItemSchema).optional().nullable(),
  /** Accent color for UI elements */
  accentColor: z27.string().optional().nullable()
});
var VideoDefinition = {
  name: "Video",
  props: VideoPropsSchema,
  description: "Video component with support for YouTube, Vimeo, Dailymotion, Twitch, TikTok, Twitter/X and direct video files",
  hasChildren: true
};

// src/media/Image/schema.ts
import { z as z28 } from "zod";
var ImageLocationSchema = z28.object({
  /** Source type determines rendering strategy */
  sourceType: z28.enum(["stream", "upload", "url", "embed"]).optional().nullable(),
  /** Direct image URL */
  src: z28.string().optional().nullable(),
  /** Streaming URL for progressive loading */
  streamUrl: z28.string().optional().nullable(),
  /** Embed URL for iframe rendering */
  embedUrl: z28.string().optional().nullable(),
  /** Original upload filename */
  uploadName: z28.string().optional().nullable()
});
var ImageStatusSchema = z28.object({
  status: z28.enum(["generating", "ready", "failed"]).optional().nullable(),
  progress: z28.number().optional().nullable(),
  errorMessage: z28.string().optional().nullable()
});
var ImageMetadataSchema = z28.object({
  model: z28.string().optional().nullable(),
  prompt: z28.string().optional().nullable(),
  negativePrompt: z28.string().optional().nullable(),
  seed: z28.number().optional().nullable(),
  steps: z28.number().optional().nullable(),
  guidance: z28.number().optional().nullable(),
  sampler: z28.string().optional().nullable(),
  scheduler: z28.string().optional().nullable(),
  style: z28.string().optional().nullable(),
  lora: z28.array(z28.string()).optional().nullable(),
  upscaler: z28.string().optional().nullable(),
  safety: z28.string().optional().nullable(),
  aspectRatio: z28.string().optional().nullable()
});
var ImageTagSchema = z28.object({
  label: z28.string(),
  tone: z28.enum(["default", "success", "warning", "danger"]).optional()
});
var ImageItemSchema = z28.object({
  id: z28.string().optional().nullable(),
  title: z28.string().optional().nullable(),
  caption: z28.string().optional().nullable(),
  description: z28.string().optional().nullable(),
  createdAt: z28.string().optional().nullable(),
  author: z28.string().optional().nullable(),
  license: z28.string().optional().nullable(),
  /** Direct source URL - REQUIRED for displaying the image */
  source: z28.string().describe("REQUIRED: Direct image URL (https://...)"),
  /** Image width in pixels */
  width: z28.number().optional().nullable(),
  /** Image height in pixels */
  height: z28.number().optional().nullable(),
  /** Image format (png, jpg, webp, etc.) */
  format: z28.string().optional().nullable(),
  /** File size in bytes */
  sizeBytes: z28.number().optional().nullable(),
  /** Alt text for accessibility */
  alt: z28.string().optional().nullable(),
  /** Tags for categorization */
  tags: z28.array(ImageTagSchema).optional().nullable(),
  /** AI generation metadata */
  metadata: ImageMetadataSchema.optional().nullable(),
  /** Generation/processing status */
  status: ImageStatusSchema.optional().nullable(),
  /** Source location details (deprecated, use source instead) */
  location: ImageLocationSchema.optional().nullable()
});
var ImagePropsSchema = z28.object({
  /** Optional title for the image collection */
  title: z28.string().optional().nullable(),
  /** Array of image items to display */
  images: z28.array(ImageItemSchema).optional().nullable(),
  /** Accent color for UI elements */
  accentColor: z28.string().optional().nullable(),
  /** Number of columns in grid layout (default: 2) */
  columns: z28.number().optional().nullable()
});
var ImageDefinition = {
  name: "Image",
  props: ImagePropsSchema,
  description: "Image gallery component with support for AI-generated images, status tracking, and rich metadata display",
  hasChildren: true
};

// src/media/Gallery/schema.ts
import { z as z29 } from "zod";
var GalleryPropsSchema = z29.object({});
var GalleryDefinition = {
  name: "Gallery",
  props: GalleryPropsSchema,
  description: "Gallery component",
  hasChildren: true
};

export {
  CardPropsSchema,
  CardDefinition,
  GridPropsSchema,
  GridDefinition,
  StackPropsSchema,
  StackDefinition,
  DividerPropsSchema,
  DividerDefinition,
  HeadingPropsSchema,
  HeadingDefinition,
  TextPropsSchema,
  TextDefinition,
  CodeBlockPropsSchema,
  CodeBlockDefinition,
  DocumentPropsSchema,
  DocumentDefinition,
  BadgePropsSchema,
  BadgeDefinition,
  AlertPropsSchema,
  AlertDefinition,
  EmptyPropsSchema,
  EmptyDefinition,
  BrowserActionPropsSchema,
  BrowserActionDefinition,
  ButtonPropsSchema,
  ButtonDefinition,
  TextFieldPropsSchema,
  TextFieldDefinition,
  SelectPropsSchema,
  SelectDefinition,
  DatePickerPropsSchema,
  DatePickerDefinition,
  MetricPropsSchema,
  MetricDefinition,
  TablePropsSchema,
  TableDefinition,
  ListPropsSchema,
  ListDefinition,
  TimelinePropsSchema,
  TimelineDefinition,
  SearchResultItemSchema,
  SearchResultsPropsSchema,
  SearchResultsDefinition,
  DriveFilePropsSchema,
  DriveFileDefinition,
  DriveFileListSchema,
  DriveFileListDefinition,
  WeatherPropsSchema,
  WeatherDefinition,
  DocumentIndexPropsSchema,
  DocumentIndexDefinition,
  AudioPropsSchema,
  AudioDefinition,
  VideoPropsSchema,
  VideoDefinition,
  ImagePropsSchema,
  ImageDefinition,
  GalleryPropsSchema,
  GalleryDefinition
};
//# sourceMappingURL=chunk-42KZEVSX.mjs.map