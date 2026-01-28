"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/definitions.ts
var definitions_exports = {};
__export(definitions_exports, {
  AlertDefinition: () => AlertDefinition,
  AlertPropsSchema: () => AlertPropsSchema,
  AudioDefinition: () => AudioDefinition,
  AudioPropsSchema: () => AudioPropsSchema,
  BadgeDefinition: () => BadgeDefinition,
  BadgePropsSchema: () => BadgePropsSchema,
  BrowserActionDefinition: () => BrowserActionDefinition,
  BrowserActionPropsSchema: () => BrowserActionPropsSchema,
  ButtonDefinition: () => ButtonDefinition,
  ButtonPropsSchema: () => ButtonPropsSchema,
  CardDefinition: () => CardDefinition,
  CardPropsSchema: () => CardPropsSchema,
  CodeBlockDefinition: () => CodeBlockDefinition,
  CodeBlockPropsSchema: () => CodeBlockPropsSchema,
  DatePickerDefinition: () => DatePickerDefinition,
  DatePickerPropsSchema: () => DatePickerPropsSchema,
  DividerDefinition: () => DividerDefinition,
  DividerPropsSchema: () => DividerPropsSchema,
  DocumentDefinition: () => DocumentDefinition,
  DocumentIndexDefinition: () => DocumentIndexDefinition,
  DocumentIndexPropsSchema: () => DocumentIndexPropsSchema,
  DocumentPropsSchema: () => DocumentPropsSchema,
  DriveFileDefinition: () => DriveFileDefinition,
  DriveFileListDefinition: () => DriveFileListDefinition,
  DriveFileListSchema: () => DriveFileListSchema,
  DriveFilePropsSchema: () => DriveFilePropsSchema,
  EmptyDefinition: () => EmptyDefinition,
  EmptyPropsSchema: () => EmptyPropsSchema,
  GalleryDefinition: () => GalleryDefinition,
  GalleryPropsSchema: () => GalleryPropsSchema,
  GridDefinition: () => GridDefinition,
  GridPropsSchema: () => GridPropsSchema,
  HeadingDefinition: () => HeadingDefinition,
  HeadingPropsSchema: () => HeadingPropsSchema,
  ImageDefinition: () => ImageDefinition,
  ImagePropsSchema: () => ImagePropsSchema,
  ListDefinition: () => ListDefinition,
  ListPropsSchema: () => ListPropsSchema,
  MetricDefinition: () => MetricDefinition,
  MetricPropsSchema: () => MetricPropsSchema,
  SearchResultItemSchema: () => SearchResultItemSchema,
  SearchResultsDefinition: () => SearchResultsDefinition,
  SearchResultsPropsSchema: () => SearchResultsPropsSchema,
  SelectDefinition: () => SelectDefinition,
  SelectPropsSchema: () => SelectPropsSchema,
  StackDefinition: () => StackDefinition,
  StackPropsSchema: () => StackPropsSchema,
  TableDefinition: () => TableDefinition,
  TablePropsSchema: () => TablePropsSchema,
  TextDefinition: () => TextDefinition,
  TextFieldDefinition: () => TextFieldDefinition,
  TextFieldPropsSchema: () => TextFieldPropsSchema,
  TextPropsSchema: () => TextPropsSchema,
  TimelineDefinition: () => TimelineDefinition,
  TimelinePropsSchema: () => TimelinePropsSchema,
  VideoDefinition: () => VideoDefinition,
  VideoPropsSchema: () => VideoPropsSchema,
  WeatherDefinition: () => WeatherDefinition,
  WeatherPropsSchema: () => WeatherPropsSchema
});
module.exports = __toCommonJS(definitions_exports);

// src/layout/Card/schema.ts
var import_zod = require("zod");
var CardPropsSchema = import_zod.z.object({
  title: import_zod.z.string().nullable(),
  description: import_zod.z.string().nullable(),
  padding: import_zod.z.enum(["none", "sm", "md", "lg"]).nullable()
});
var CardDefinition = {
  name: "Card",
  props: CardPropsSchema,
  description: "A card container with optional title",
  hasChildren: true
};

// src/layout/Grid/schema.ts
var import_zod2 = require("zod");
var GridPropsSchema = import_zod2.z.object({
  columns: import_zod2.z.number().min(1).max(4).nullable(),
  gap: import_zod2.z.enum(["sm", "md", "lg"]).nullable()
});
var GridDefinition = {
  name: "Grid",
  props: GridPropsSchema,
  description: "Grid layout with configurable columns",
  hasChildren: true
};

// src/layout/Stack/schema.ts
var import_zod3 = require("zod");
var StackPropsSchema = import_zod3.z.object({
  direction: import_zod3.z.enum(["horizontal", "vertical"]).nullable(),
  gap: import_zod3.z.enum(["sm", "md", "lg"]).nullable(),
  align: import_zod3.z.enum(["start", "center", "end", "stretch"]).nullable()
});
var StackDefinition = {
  name: "Stack",
  props: StackPropsSchema,
  description: "Flex stack for horizontal or vertical layouts",
  hasChildren: true
};

// src/layout/Divider/schema.ts
var import_zod4 = require("zod");
var DividerPropsSchema = import_zod4.z.object({
  orientation: import_zod4.z.enum(["horizontal", "vertical"]).nullable(),
  label: import_zod4.z.string().nullable()
});
var DividerDefinition = {
  name: "Divider",
  props: DividerPropsSchema,
  description: "Visual divider",
  hasChildren: true
};

// src/typography/Heading/schema.ts
var import_zod5 = require("zod");
var HeadingPropsSchema = import_zod5.z.object({
  text: import_zod5.z.string().nullable(),
  level: import_zod5.z.union([
    import_zod5.z.enum(["h1", "h2", "h3", "h4"]),
    import_zod5.z.number().int().min(1).max(4),
    import_zod5.z.string().regex(/^(h[1-4]|[1-4])$/)
  ]).nullable()
});
var HeadingDefinition = {
  name: "Heading",
  props: HeadingPropsSchema,
  description: "Section heading",
  hasChildren: true
};

// src/typography/Text/schema.ts
var import_zod6 = require("zod");
var TextPropsSchema = import_zod6.z.object({
  content: import_zod6.z.string().nullable(),
  variant: import_zod6.z.enum(["body", "caption", "label"]).nullable(),
  color: import_zod6.z.enum(["default", "muted", "success", "warning", "danger", "error"]).nullable()
});
var TextDefinition = {
  name: "Text",
  props: TextPropsSchema,
  description: "Text paragraph",
  hasChildren: true
};

// src/typography/CodeBlock/schema.ts
var import_zod7 = require("zod");
var CodeBlockPropsSchema = import_zod7.z.object({});
var CodeBlockDefinition = {
  name: "CodeBlock",
  props: CodeBlockPropsSchema,
  description: "CodeBlock component",
  hasChildren: true
};

// src/typography/Document/schema.ts
var import_zod8 = require("zod");
var DocumentSectionSchema = import_zod8.z.object({
  id: import_zod8.z.string().optional().nullable(),
  title: import_zod8.z.string().optional().nullable(),
  content: import_zod8.z.string().optional().nullable(),
  highlights: import_zod8.z.array(import_zod8.z.string()).optional().nullable()
});
var DocumentItemSchema = import_zod8.z.object({
  id: import_zod8.z.string().optional().nullable(),
  title: import_zod8.z.string(),
  summary: import_zod8.z.string().optional().nullable(),
  author: import_zod8.z.string().optional().nullable(),
  createdAt: import_zod8.z.string().optional().nullable(),
  sections: import_zod8.z.array(DocumentSectionSchema).optional().nullable(),
  tags: import_zod8.z.array(import_zod8.z.string()).optional().nullable()
});
var DocumentPropsSchema = import_zod8.z.object({
  /** Title for the document collection/viewer */
  title: import_zod8.z.string().optional().nullable(),
  /** Array of documents to display */
  documents: import_zod8.z.array(DocumentItemSchema).optional().nullable(),
  /** Accent color for UI elements */
  accentColor: import_zod8.z.string().optional().nullable()
});
var DocumentDefinition = {
  name: "Document",
  props: DocumentPropsSchema,
  description: "Document viewer component for displaying rich content articles, reports, specs, and technical documentation",
  hasChildren: true
};

// src/status/Badge/schema.ts
var import_zod9 = require("zod");
var BadgePropsSchema = import_zod9.z.object({
  text: import_zod9.z.string().nullable(),
  variant: import_zod9.z.enum(["default", "success", "warning", "danger", "info"]).nullable()
});
var BadgeDefinition = {
  name: "Badge",
  props: BadgePropsSchema,
  description: "Small status badge",
  hasChildren: true
};

// src/status/Alert/schema.ts
var import_zod10 = require("zod");
var AlertPropsSchema = import_zod10.z.object({
  type: import_zod10.z.enum(["info", "success", "warning", "error"]).nullable(),
  title: import_zod10.z.string().nullable(),
  message: import_zod10.z.string().nullable(),
  dismissible: import_zod10.z.boolean().nullable()
});
var AlertDefinition = {
  name: "Alert",
  props: AlertPropsSchema,
  description: "Alert/notification banner",
  hasChildren: true
};

// src/status/Empty/schema.ts
var import_zod11 = require("zod");
var EmptyPropsSchema = import_zod11.z.object({
  title: import_zod11.z.string(),
  description: import_zod11.z.string().nullable(),
  action: import_zod11.z.string().nullable(),
  actionLabel: import_zod11.z.string().nullable()
});
var EmptyDefinition = {
  name: "Empty",
  props: EmptyPropsSchema,
  description: "Empty state placeholder",
  hasChildren: true
};

// src/status/BrowserAction/schema.ts
var import_zod12 = require("zod");
var BrowserActionPropsSchema = import_zod12.z.object({
  id: import_zod12.z.string().describe("Unique action ID"),
  action: import_zod12.z.enum([
    "navigating",
    "searching",
    "extracting",
    "clicking",
    "typing",
    "waiting",
    "capturing"
  ]).describe("Type of browser action being performed"),
  target: import_zod12.z.string().nullable().describe("Target element or description"),
  url: import_zod12.z.string().nullable().describe("URL being navigated to"),
  status: import_zod12.z.enum(["pending", "loading", "complete", "error"]).describe("Current status of the action"),
  message: import_zod12.z.string().nullable().describe("Optional status message"),
  error: import_zod12.z.string().nullable().describe("Error message if status is error")
});
var BrowserActionDefinition = {
  name: "BrowserAction",
  props: BrowserActionPropsSchema,
  description: "Displays real-time browser automation steps with status",
  hasChildren: false
};

// src/forms/Button/schema.ts
var import_zod13 = require("zod");
var ButtonPropsSchema = import_zod13.z.object({
  label: import_zod13.z.string().nullable(),
  variant: import_zod13.z.enum(["primary", "secondary", "danger", "ghost"]).nullable(),
  size: import_zod13.z.enum(["sm", "md", "lg"]).nullable(),
  action: import_zod13.z.string().nullable(),
  actionParams: import_zod13.z.record(import_zod13.z.string(), import_zod13.z.unknown()).nullable(),
  disabled: import_zod13.z.boolean().nullable()
});
var ButtonDefinition = {
  name: "Button",
  props: ButtonPropsSchema,
  description: "Clickable button with action",
  hasChildren: true
};

// src/forms/TextField/schema.ts
var import_zod14 = require("zod");
var TextFieldPropsSchema = import_zod14.z.object({
  label: import_zod14.z.string().nullable(),
  bindPath: import_zod14.z.string().nullable(),
  valuePath: import_zod14.z.string().nullable(),
  value: import_zod14.z.string().nullable(),
  placeholder: import_zod14.z.string().nullable(),
  type: import_zod14.z.string().nullable(),
  checks: import_zod14.z.array(
    import_zod14.z.object({
      fn: import_zod14.z.string(),
      message: import_zod14.z.string()
    })
  ).nullable(),
  validateOn: import_zod14.z.enum(["change", "blur", "submit"]).nullable()
});
var TextFieldDefinition = {
  name: "TextField",
  props: TextFieldPropsSchema,
  description: "Text input field with validation",
  hasChildren: true
};

// src/forms/Select/schema.ts
var import_zod15 = require("zod");
var SelectPropsSchema = import_zod15.z.object({
  label: import_zod15.z.string().nullable(),
  bindPath: import_zod15.z.string().nullable(),
  valuePath: import_zod15.z.string().nullable(),
  value: import_zod15.z.string().nullable(),
  options: import_zod15.z.array(
    import_zod15.z.object({
      value: import_zod15.z.string(),
      label: import_zod15.z.string()
    })
  ),
  placeholder: import_zod15.z.string().nullable()
});
var SelectDefinition = {
  name: "Select",
  props: SelectPropsSchema,
  description: "Dropdown select input",
  hasChildren: true
};

// src/forms/DatePicker/schema.ts
var import_zod16 = require("zod");
var DatePickerPropsSchema = import_zod16.z.object({
  label: import_zod16.z.string().nullable(),
  bindPath: import_zod16.z.string().nullable(),
  valuePath: import_zod16.z.string().nullable(),
  value: import_zod16.z.string().nullable(),
  placeholder: import_zod16.z.string().nullable()
});
var DatePickerDefinition = {
  name: "DatePicker",
  props: DatePickerPropsSchema,
  description: "Date picker input",
  hasChildren: true
};

// src/data-display/Metric/schema.ts
var import_zod17 = require("zod");
var MetricPropsSchema = import_zod17.z.object({
  label: import_zod17.z.string(),
  value: import_zod17.z.union([import_zod17.z.string(), import_zod17.z.number()]).nullable(),
  valuePath: import_zod17.z.string().nullable(),
  format: import_zod17.z.enum(["number", "currency", "percent"]).nullable(),
  trend: import_zod17.z.enum(["up", "down", "neutral"]).nullable(),
  trendValue: import_zod17.z.string().nullable()
});
var MetricDefinition = {
  name: "Metric",
  props: MetricPropsSchema,
  description: "Display a single metric with optional trend indicator",
  hasChildren: true
};

// src/data-display/Table/schema.ts
var import_zod18 = require("zod");

// src/utils/shared-schemas.ts
var import_schemas = require("@onegenui/schemas");

// src/data-display/Table/schema.ts
var tableColumnSchema = import_zod18.z.object({
  // Canonical names
  key: import_zod18.z.string().optional(),
  label: import_zod18.z.string().optional(),
  // Alternative names (used by some AI models)
  accessor: import_zod18.z.string().optional(),
  header: import_zod18.z.string().optional(),
  // Format option
  format: import_zod18.z.enum(["text", "currency", "date", "badge"]).nullable().optional()
}).transform((col) => ({
  key: col.key ?? col.accessor ?? "",
  label: col.label ?? col.header ?? "",
  format: col.format ?? null
}));
var TablePropsSchema = import_zod18.z.object({
  title: import_zod18.z.string().nullable(),
  rows: import_zod18.z.array(import_schemas.tableRowSchema).nullable(),
  dataPath: import_zod18.z.string().nullable(),
  columns: import_zod18.z.array(tableColumnSchema)
});
var TableDefinition = {
  name: "Table",
  props: TablePropsSchema,
  description: "Display tabular data",
  hasChildren: true
};

// src/data-display/List/schema.ts
var import_zod19 = require("zod");
var ListPropsSchema = import_zod19.z.object({
  items: import_zod19.z.array(import_zod19.z.union([import_zod19.z.string(), import_schemas.listItemSchema])).nullable(),
  dataPath: import_zod19.z.string().nullable(),
  emptyMessage: import_zod19.z.string().nullable()
});
var ListDefinition = {
  name: "List",
  props: ListPropsSchema,
  description: "Render a list from array data",
  hasChildren: true
};

// src/data-display/Timeline/schema.ts
var import_zod20 = require("zod");
var TimelinePropsSchema = import_zod20.z.object({
  dataPath: import_zod20.z.string().nullable(),
  items: import_zod20.z.array(import_schemas.timelineItemSchema).nullable(),
  titleKey: import_zod20.z.string().nullable(),
  dateKey: import_zod20.z.string().nullable(),
  descriptionKey: import_zod20.z.string().nullable(),
  statusKey: import_zod20.z.string().nullable()
});
var TimelineDefinition = {
  name: "Timeline",
  props: TimelinePropsSchema,
  description: "Display a vertical timeline of events",
  hasChildren: true
};

// src/data-display/SearchResults/schema.ts
var import_zod21 = require("zod");
var SourceCitationSchema = import_zod21.z.object({
  id: import_zod21.z.string().describe("Unique citation ID (e.g., '1', '2')"),
  title: import_zod21.z.string().describe("Source title or section title"),
  // Web source fields
  url: import_zod21.z.string().optional().nullable().describe("Source URL (for web sources)"),
  domain: import_zod21.z.string().optional().nullable().describe("Source domain name"),
  favicon: import_zod21.z.string().optional().nullable().describe("Source favicon URL"),
  // Common fields
  snippet: import_zod21.z.string().optional().nullable().describe("Brief excerpt from the source"),
  date: import_zod21.z.string().optional().nullable().describe("Publication date"),
  // Document source fields
  pageNumber: import_zod21.z.number().optional().nullable().describe("Page number (for document citations)"),
  excerpt: import_zod21.z.string().optional().nullable().describe("Exact quoted text from document (for document citations)"),
  documentTitle: import_zod21.z.string().optional().nullable().describe("Document title (for document citations)")
});
var KeyPointSchema = import_zod21.z.object({
  text: import_zod21.z.string().describe("The key point text"),
  citations: import_zod21.z.array(import_zod21.z.string()).optional().nullable().describe("Citation IDs that support this point (e.g., ['1', '2'])")
});
var SectionSchema = import_zod21.z.object({
  title: import_zod21.z.string().describe("Section title (e.g., 'Technology', 'Business')"),
  content: import_zod21.z.string().describe("Section content with inline citations like [1], [2]"),
  citations: import_zod21.z.array(import_zod21.z.string()).optional().nullable().describe("Citation IDs used in this section")
});
var SynthesisSchema = import_zod21.z.object({
  summary: import_zod21.z.string().describe(
    "AI-generated summary with inline citations like [1], [2]. Should be comprehensive and well-structured."
  ),
  keyPoints: import_zod21.z.array(KeyPointSchema).optional().nullable().describe("Bullet points highlighting the most important findings"),
  sections: import_zod21.z.array(SectionSchema).optional().nullable().describe("Thematic sections organizing the information"),
  followUpQuestions: import_zod21.z.array(import_zod21.z.string()).optional().nullable().describe("Suggested follow-up questions for deeper exploration")
});
var SearchResultItemSchema = import_zod21.z.object({
  title: import_zod21.z.string().describe("Result title"),
  url: import_zod21.z.string().describe("Result URL"),
  snippet: import_zod21.z.string().describe("Result snippet/description"),
  favicon: import_zod21.z.string().optional().nullable().describe("Favicon URL"),
  image: import_zod21.z.string().optional().nullable().describe("Preview image URL"),
  video: import_zod21.z.object({
    url: import_zod21.z.string().describe("Video URL"),
    thumbnail: import_zod21.z.string().optional().nullable().describe("Video thumbnail URL"),
    provider: import_zod21.z.string().optional().nullable().describe("Video provider"),
    duration: import_zod21.z.string().optional().nullable().describe("Video duration")
  }).optional().nullable().describe("Video preview data"),
  date: import_zod21.z.string().optional().nullable().describe("Publication date"),
  source: import_zod21.z.string().optional().nullable().describe("Source name"),
  position: import_zod21.z.number().optional().nullable().describe("Result position in search")
});
var SearchResultsPropsSchema = import_zod21.z.object({
  query: import_zod21.z.string().describe("The search query that was performed"),
  results: import_zod21.z.array(SearchResultItemSchema).describe("List of search results"),
  totalResults: import_zod21.z.number().nullable().describe("Total number of results found"),
  searchTime: import_zod21.z.number().nullable().describe("Search time in milliseconds"),
  sources: import_zod21.z.array(SourceCitationSchema).optional().nullable().describe("List of sources/citations used"),
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
var import_zod22 = require("zod");
var DriveFilePropsSchema = import_zod22.z.object({
  id: import_zod22.z.string(),
  name: import_zod22.z.string(),
  mimeType: import_zod22.z.string(),
  thumbnailLink: import_zod22.z.string().optional(),
  webViewLink: import_zod22.z.string().optional(),
  iconLink: import_zod22.z.string().optional(),
  modifiedTime: import_zod22.z.string().optional(),
  owners: import_zod22.z.array(
    import_zod22.z.object({
      displayName: import_zod22.z.string().optional(),
      photoLink: import_zod22.z.string().optional()
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
var import_zod23 = require("zod");
var DriveFileListSchema = import_zod23.z.object({
  title: import_zod23.z.string().optional().nullable().describe("Title for the file list"),
  description: import_zod23.z.string().optional().nullable().describe("Description or subtitle"),
  viewMode: import_zod23.z.enum(["grid", "list"]).optional().default("list").describe("View mode: grid or list"),
  files: import_zod23.z.array(
    import_zod23.z.object({
      id: import_zod23.z.string().describe("Unique file identifier"),
      name: import_zod23.z.string().describe("File name"),
      mimeType: import_zod23.z.string().describe("MIME type of the file"),
      size: import_zod23.z.number().optional().nullable().describe("File size in bytes"),
      modifiedTime: import_zod23.z.string().optional().nullable().describe("Last modified time (ISO 8601)"),
      webViewLink: import_zod23.z.string().optional().nullable().describe("URL to open the file in Drive"),
      iconLink: import_zod23.z.string().optional().nullable().describe("URL to the file type icon"),
      thumbnailLink: import_zod23.z.string().optional().nullable().describe("URL to a thumbnail preview"),
      owners: import_zod23.z.array(
        import_zod23.z.object({
          displayName: import_zod23.z.string().optional(),
          photoLink: import_zod23.z.string().optional()
        })
      ).optional().nullable().describe("File owners"),
      shared: import_zod23.z.boolean().optional().describe("Whether the file is shared"),
      starred: import_zod23.z.boolean().optional().describe("Whether the file is starred")
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
var import_zod24 = require("zod");
var DailyForecastSchema = import_zod24.z.object({
  date: import_zod24.z.string().describe("Date (e.g. 'Mon', '2024-01-01')"),
  tempMin: import_zod24.z.number().describe("Minimum temperature"),
  tempMax: import_zod24.z.number().describe("Maximum temperature"),
  condition: import_zod24.z.string().describe("Weather condition (Sunny, Cloudy, etc.)"),
  icon: import_zod24.z.string().optional().nullable().describe("Icon name or URL"),
  precipChance: import_zod24.z.number().optional().nullable().describe("Precipitation chance %")
});
var HourlyForecastSchema = import_zod24.z.object({
  time: import_zod24.z.string().describe("Time (e.g. '10:00', '10 AM')"),
  temp: import_zod24.z.number().describe("Temperature"),
  condition: import_zod24.z.string().describe("Weather condition"),
  icon: import_zod24.z.string().optional().nullable().describe("Icon name or URL")
});
var CurrentWeatherSchema = import_zod24.z.object({
  temp: import_zod24.z.number().describe("Current temperature"),
  condition: import_zod24.z.string().describe("Current condition"),
  humidity: import_zod24.z.number().optional().nullable().describe("Humidity %"),
  windSpeed: import_zod24.z.number().optional().nullable().describe("Wind speed"),
  windUnit: import_zod24.z.string().optional().nullable().describe("Wind speed unit (km/h, mph)"),
  feelsLike: import_zod24.z.number().optional().nullable().describe("Feels like temperature"),
  uvIndex: import_zod24.z.number().optional().nullable().describe("UV Index"),
  visibility: import_zod24.z.number().optional().nullable().describe("Visibility distance"),
  pressure: import_zod24.z.number().optional().nullable().describe("Pressure (hPa)")
});
var WeatherPropsSchema = import_zod24.z.object({
  location: import_zod24.z.string().describe("Location name (City, Region)"),
  current: CurrentWeatherSchema.describe("Current weather data"),
  forecastDaily: import_zod24.z.array(DailyForecastSchema).optional().nullable().describe("Daily forecast"),
  forecastHourly: import_zod24.z.array(HourlyForecastSchema).optional().nullable().describe("Hourly forecast"),
  unit: import_zod24.z.enum(["C", "F"]).optional().nullable().describe("Temperature unit (C/F)"),
  accentColor: import_zod24.z.string().optional().nullable().describe("Accent color")
});
var WeatherDefinition = {
  name: "Weather",
  props: WeatherPropsSchema,
  description: "Weather dashboard with current conditions and forecast",
  hasChildren: false
};

// src/data-display/DocumentIndex/schema.ts
var import_zod25 = require("zod");
var DocumentIndexNodeSchema = import_zod25.z.lazy(
  () => import_zod25.z.object({
    id: import_zod25.z.string(),
    title: import_zod25.z.string(),
    startPage: import_zod25.z.number().optional().nullable(),
    endPage: import_zod25.z.number().optional().nullable(),
    summary: import_zod25.z.string().optional().nullable(),
    children: import_zod25.z.array(DocumentIndexNodeSchema).optional().nullable()
  })
);
var DocumentIndexStatusSchema = import_zod25.z.enum([
  "idle",
  "parsing",
  "analyzing",
  "building",
  "complete",
  "error"
]);
var DocumentIndexPropsSchema = import_zod25.z.object({
  /** Document file name */
  fileName: import_zod25.z.string(),
  /** Current processing status */
  status: DocumentIndexStatusSchema.optional().nullable(),
  /** Progress message */
  message: import_zod25.z.string().optional().nullable(),
  /** Progress percentage (0-100) */
  progress: import_zod25.z.number().optional().nullable(),
  /** Total pages in document */
  pageCount: import_zod25.z.number().optional().nullable(),
  /** Current page being processed */
  currentPage: import_zod25.z.number().optional().nullable(),
  /** Document description */
  description: import_zod25.z.string().optional().nullable(),
  /** The index tree structure */
  nodes: import_zod25.z.array(DocumentIndexNodeSchema).optional().nullable(),
  /** Error message if status is error */
  error: import_zod25.z.string().optional().nullable()
});
var DocumentIndexDefinition = {
  name: "DocumentIndex",
  props: DocumentIndexPropsSchema,
  description: "Document index viewer showing hierarchical structure and progress during PDF analysis",
  hasChildren: false
};

// src/media/Audio/schema.ts
var import_zod26 = require("zod");
var AudioPropsSchema = import_zod26.z.object({});
var AudioDefinition = {
  name: "Audio",
  props: AudioPropsSchema,
  description: "Audio component",
  hasChildren: true
};

// src/media/Video/schema.ts
var import_zod27 = require("zod");
var VideoProviderSchema = import_zod27.z.enum([
  "youtube",
  "vimeo",
  "dailymotion",
  "twitch",
  "tiktok",
  "twitter",
  "custom"
]);
var VideoLocationSchema = import_zod27.z.object({
  /** Source type determines rendering strategy */
  sourceType: import_zod27.z.enum(["stream", "upload", "url", "embed"]).optional().nullable(),
  /** Direct video URL (mp4, webm, etc.) */
  src: import_zod27.z.string().optional().nullable(),
  /** Streaming URL (HLS, DASH) */
  streamUrl: import_zod27.z.string().optional().nullable(),
  /** Embed URL for iframe rendering (YouTube, Vimeo, etc.) */
  embedUrl: import_zod27.z.string().optional().nullable(),
  /** Original upload filename */
  uploadName: import_zod27.z.string().optional().nullable(),
  /** Video provider for embed handling */
  provider: VideoProviderSchema.optional().nullable()
});
var VideoStatusSchema = import_zod27.z.object({
  status: import_zod27.z.enum(["generating", "ready", "failed"]).optional().nullable(),
  progress: import_zod27.z.number().optional().nullable(),
  errorMessage: import_zod27.z.string().optional().nullable()
});
var VideoMetadataSchema = import_zod27.z.object({
  model: import_zod27.z.string().optional().nullable(),
  prompt: import_zod27.z.string().optional().nullable(),
  negativePrompt: import_zod27.z.string().optional().nullable(),
  seed: import_zod27.z.number().optional().nullable(),
  steps: import_zod27.z.number().optional().nullable(),
  guidance: import_zod27.z.number().optional().nullable(),
  style: import_zod27.z.string().optional().nullable(),
  lora: import_zod27.z.array(import_zod27.z.string()).optional().nullable(),
  safety: import_zod27.z.string().optional().nullable(),
  aspectRatio: import_zod27.z.string().optional().nullable(),
  motion: import_zod27.z.string().optional().nullable()
});
var VideoTagSchema = import_zod27.z.object({
  label: import_zod27.z.string(),
  tone: import_zod27.z.enum(["default", "success", "warning", "danger"]).optional()
});
var VideoItemSchema = import_zod27.z.object({
  id: import_zod27.z.string().optional().nullable(),
  title: import_zod27.z.string().optional().nullable(),
  caption: import_zod27.z.string().optional().nullable(),
  description: import_zod27.z.string().optional().nullable(),
  createdAt: import_zod27.z.string().optional().nullable(),
  author: import_zod27.z.string().optional().nullable(),
  license: import_zod27.z.string().optional().nullable(),
  source: import_zod27.z.string().optional().nullable(),
  poster: import_zod27.z.string().optional().nullable(),
  duration: import_zod27.z.number().optional().nullable(),
  resolution: import_zod27.z.string().optional().nullable(),
  fps: import_zod27.z.number().optional().nullable(),
  codec: import_zod27.z.string().optional().nullable(),
  bitrate: import_zod27.z.number().optional().nullable(),
  sizeBytes: import_zod27.z.number().optional().nullable(),
  transcript: import_zod27.z.string().optional().nullable(),
  tags: import_zod27.z.array(VideoTagSchema).optional().nullable(),
  metadata: VideoMetadataSchema.optional().nullable(),
  status: VideoStatusSchema.optional().nullable(),
  location: VideoLocationSchema.optional().nullable()
});
var VideoPropsSchema = import_zod27.z.object({
  /** Optional title for the video collection */
  title: import_zod27.z.string().optional().nullable(),
  /** Array of video items to display */
  videos: import_zod27.z.array(VideoItemSchema).optional().nullable(),
  /** Accent color for UI elements */
  accentColor: import_zod27.z.string().optional().nullable()
});
var VideoDefinition = {
  name: "Video",
  props: VideoPropsSchema,
  description: "Video component with support for YouTube, Vimeo, Dailymotion, Twitch, TikTok, Twitter/X and direct video files",
  hasChildren: true
};

// src/media/Image/schema.ts
var import_zod28 = require("zod");
var ImageLocationSchema = import_zod28.z.object({
  /** Source type determines rendering strategy */
  sourceType: import_zod28.z.enum(["stream", "upload", "url", "embed"]).optional().nullable(),
  /** Direct image URL */
  src: import_zod28.z.string().optional().nullable(),
  /** Streaming URL for progressive loading */
  streamUrl: import_zod28.z.string().optional().nullable(),
  /** Embed URL for iframe rendering */
  embedUrl: import_zod28.z.string().optional().nullable(),
  /** Original upload filename */
  uploadName: import_zod28.z.string().optional().nullable()
});
var ImageStatusSchema = import_zod28.z.object({
  status: import_zod28.z.enum(["generating", "ready", "failed"]).optional().nullable(),
  progress: import_zod28.z.number().optional().nullable(),
  errorMessage: import_zod28.z.string().optional().nullable()
});
var ImageMetadataSchema = import_zod28.z.object({
  model: import_zod28.z.string().optional().nullable(),
  prompt: import_zod28.z.string().optional().nullable(),
  negativePrompt: import_zod28.z.string().optional().nullable(),
  seed: import_zod28.z.number().optional().nullable(),
  steps: import_zod28.z.number().optional().nullable(),
  guidance: import_zod28.z.number().optional().nullable(),
  sampler: import_zod28.z.string().optional().nullable(),
  scheduler: import_zod28.z.string().optional().nullable(),
  style: import_zod28.z.string().optional().nullable(),
  lora: import_zod28.z.array(import_zod28.z.string()).optional().nullable(),
  upscaler: import_zod28.z.string().optional().nullable(),
  safety: import_zod28.z.string().optional().nullable(),
  aspectRatio: import_zod28.z.string().optional().nullable()
});
var ImageTagSchema = import_zod28.z.object({
  label: import_zod28.z.string(),
  tone: import_zod28.z.enum(["default", "success", "warning", "danger"]).optional()
});
var ImageItemSchema = import_zod28.z.object({
  id: import_zod28.z.string().optional().nullable(),
  title: import_zod28.z.string().optional().nullable(),
  caption: import_zod28.z.string().optional().nullable(),
  description: import_zod28.z.string().optional().nullable(),
  createdAt: import_zod28.z.string().optional().nullable(),
  author: import_zod28.z.string().optional().nullable(),
  license: import_zod28.z.string().optional().nullable(),
  /** Direct source URL - REQUIRED for displaying the image */
  source: import_zod28.z.string().describe("REQUIRED: Direct image URL (https://...)"),
  /** Image width in pixels */
  width: import_zod28.z.number().optional().nullable(),
  /** Image height in pixels */
  height: import_zod28.z.number().optional().nullable(),
  /** Image format (png, jpg, webp, etc.) */
  format: import_zod28.z.string().optional().nullable(),
  /** File size in bytes */
  sizeBytes: import_zod28.z.number().optional().nullable(),
  /** Alt text for accessibility */
  alt: import_zod28.z.string().optional().nullable(),
  /** Tags for categorization */
  tags: import_zod28.z.array(ImageTagSchema).optional().nullable(),
  /** AI generation metadata */
  metadata: ImageMetadataSchema.optional().nullable(),
  /** Generation/processing status */
  status: ImageStatusSchema.optional().nullable(),
  /** Source location details (deprecated, use source instead) */
  location: ImageLocationSchema.optional().nullable()
});
var ImagePropsSchema = import_zod28.z.object({
  /** Optional title for the image collection */
  title: import_zod28.z.string().optional().nullable(),
  /** Array of image items to display */
  images: import_zod28.z.array(ImageItemSchema).optional().nullable(),
  /** Accent color for UI elements */
  accentColor: import_zod28.z.string().optional().nullable(),
  /** Number of columns in grid layout (default: 2) */
  columns: import_zod28.z.number().optional().nullable()
});
var ImageDefinition = {
  name: "Image",
  props: ImagePropsSchema,
  description: "Image gallery component with support for AI-generated images, status tracking, and rich metadata display",
  hasChildren: true
};

// src/media/Gallery/schema.ts
var import_zod29 = require("zod");
var GalleryPropsSchema = import_zod29.z.object({});
var GalleryDefinition = {
  name: "Gallery",
  props: GalleryPropsSchema,
  description: "Gallery component",
  hasChildren: true
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlertDefinition,
  AlertPropsSchema,
  AudioDefinition,
  AudioPropsSchema,
  BadgeDefinition,
  BadgePropsSchema,
  BrowserActionDefinition,
  BrowserActionPropsSchema,
  ButtonDefinition,
  ButtonPropsSchema,
  CardDefinition,
  CardPropsSchema,
  CodeBlockDefinition,
  CodeBlockPropsSchema,
  DatePickerDefinition,
  DatePickerPropsSchema,
  DividerDefinition,
  DividerPropsSchema,
  DocumentDefinition,
  DocumentIndexDefinition,
  DocumentIndexPropsSchema,
  DocumentPropsSchema,
  DriveFileDefinition,
  DriveFileListDefinition,
  DriveFileListSchema,
  DriveFilePropsSchema,
  EmptyDefinition,
  EmptyPropsSchema,
  GalleryDefinition,
  GalleryPropsSchema,
  GridDefinition,
  GridPropsSchema,
  HeadingDefinition,
  HeadingPropsSchema,
  ImageDefinition,
  ImagePropsSchema,
  ListDefinition,
  ListPropsSchema,
  MetricDefinition,
  MetricPropsSchema,
  SearchResultItemSchema,
  SearchResultsDefinition,
  SearchResultsPropsSchema,
  SelectDefinition,
  SelectPropsSchema,
  StackDefinition,
  StackPropsSchema,
  TableDefinition,
  TablePropsSchema,
  TextDefinition,
  TextFieldDefinition,
  TextFieldPropsSchema,
  TextPropsSchema,
  TimelineDefinition,
  TimelinePropsSchema,
  VideoDefinition,
  VideoPropsSchema,
  WeatherDefinition,
  WeatherPropsSchema
});
//# sourceMappingURL=definitions.js.map