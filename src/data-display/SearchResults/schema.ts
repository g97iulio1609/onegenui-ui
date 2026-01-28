import { z } from "zod";

/**
 * Source citation schema - supports both web sources and document citations
 */
export const SourceCitationSchema = z.object({
  id: z.string().describe("Unique citation ID (e.g., '1', '2')"),
  title: z.string().describe("Source title or section title"),
  // Web source fields
  url: z
    .string()
    .optional()
    .nullable()
    .describe("Source URL (for web sources)"),
  domain: z.string().optional().nullable().describe("Source domain name"),
  favicon: z.string().optional().nullable().describe("Source favicon URL"),
  // Common fields
  snippet: z
    .string()
    .optional()
    .nullable()
    .describe("Brief excerpt from the source"),
  date: z.string().optional().nullable().describe("Publication date"),
  // Document source fields
  pageNumber: z
    .number()
    .optional()
    .nullable()
    .describe("Page number (for document citations)"),
  excerpt: z
    .string()
    .optional()
    .nullable()
    .describe("Exact quoted text from document (for document citations)"),
  documentTitle: z
    .string()
    .optional()
    .nullable()
    .describe("Document title (for document citations)"),
});

export type SourceCitation = z.infer<typeof SourceCitationSchema>;

/**
 * Key point schema for structured summaries
 */
export const KeyPointSchema = z.object({
  text: z.string().describe("The key point text"),
  citations: z
    .array(z.string())
    .optional()
    .nullable()
    .describe("Citation IDs that support this point (e.g., ['1', '2'])"),
});

export type KeyPoint = z.infer<typeof KeyPointSchema>;

/**
 * Section schema for thematic organization
 */
export const SectionSchema = z.object({
  title: z.string().describe("Section title (e.g., 'Technology', 'Business')"),
  content: z
    .string()
    .describe("Section content with inline citations like [1], [2]"),
  citations: z
    .array(z.string())
    .optional()
    .nullable()
    .describe("Citation IDs used in this section"),
});

export type Section = z.infer<typeof SectionSchema>;

/**
 * AI Synthesis schema for Perplexity-style responses
 */
export const SynthesisSchema = z.object({
  summary: z
    .string()
    .describe(
      "AI-generated summary with inline citations like [1], [2]. Should be comprehensive and well-structured.",
    ),
  keyPoints: z
    .array(KeyPointSchema)
    .optional()
    .nullable()
    .describe("Bullet points highlighting the most important findings"),
  sections: z
    .array(SectionSchema)
    .optional()
    .nullable()
    .describe("Thematic sections organizing the information"),
  followUpQuestions: z
    .array(z.string())
    .optional()
    .nullable()
    .describe("Suggested follow-up questions for deeper exploration"),
});

export type Synthesis = z.infer<typeof SynthesisSchema>;

/**
 * SearchResult item schema
 */
export const SearchResultItemSchema = z.object({
  title: z.string().describe("Result title"),
  url: z.string().describe("Result URL"),
  snippet: z.string().describe("Result snippet/description"),
  favicon: z.string().optional().nullable().describe("Favicon URL"),
  image: z.string().optional().nullable().describe("Preview image URL"),
  video: z
    .object({
      url: z.string().describe("Video URL"),
      thumbnail: z
        .string()
        .optional()
        .nullable()
        .describe("Video thumbnail URL"),
      provider: z.string().optional().nullable().describe("Video provider"),
      duration: z.string().optional().nullable().describe("Video duration"),
    })
    .optional()
    .nullable()
    .describe("Video preview data"),
  date: z.string().optional().nullable().describe("Publication date"),
  source: z.string().optional().nullable().describe("Source name"),
  position: z
    .number()
    .optional()
    .nullable()
    .describe("Result position in search"),
});

export type SearchResultItem = z.infer<typeof SearchResultItemSchema>;

/**
 * SearchResults component schema - displays web search results with AI synthesis
 */
export const SearchResultsPropsSchema = z.object({
  query: z.string().describe("The search query that was performed"),
  results: z.array(SearchResultItemSchema).describe("List of search results"),
  totalResults: z.number().nullable().describe("Total number of results found"),
  searchTime: z.number().nullable().describe("Search time in milliseconds"),
  sources: z
    .array(SourceCitationSchema)
    .optional()
    .nullable()
    .describe("List of sources/citations used"),
  synthesis: SynthesisSchema.optional()
    .nullable()
    .describe(
      "AI-generated synthesis with summary, key points, and structured sections (Perplexity-style)",
    ),
});

export type SearchResultsProps = z.infer<typeof SearchResultsPropsSchema>;

export const SearchResultsDefinition = {
  name: "SearchResults" as const,
  props: SearchResultsPropsSchema,
  description: "Displays web search results with titles, URLs, and snippets",
  hasChildren: false,
};
