import { memo, useState } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import type { SearchResultsProps } from "./schema";
import { Globe, Sparkles } from "lucide-react";
import {
  SynthesisSection,
  MediaGallery,
  SourcesSidebar,
  RichResultCard,
  type MediaItem,
} from "./components";

export const SearchResults = memo(function SearchResults({
  element,
  children,
}: ComponentRenderProps) {
  const { query, results, totalResults, searchTime, sources, synthesis } =
    element.props as SearchResultsProps;
  const [sourcesExpanded, setSourcesExpanded] = useState(false);

  const resultCount = results?.length ?? 0;
  const hasSources = sources && sources.length > 0;
  const hasSynthesis = synthesis && synthesis.summary;
  // Extract images/videos for gallery - show more media
  const carouselMedia: MediaItem[] =
    results
      ?.filter((r) => r.image || r.video)
      .slice(0, 10)
      .map((r) => {
        if (r.video) {
          return {
            type: "video" as const,
            url: r.video.url,
            thumbnail: r.video.thumbnail || undefined,
            title: r.title,
            source: r.source || undefined,
            provider: r.video.provider || undefined,
            duration: r.video.duration || undefined,
          };
        }
        return {
          type: "image" as const,
          url: r.image!,
          title: r.title,
          source: r.source || undefined,
        };
      }) || [];

  return (
    <section className="flex flex-col w-full" aria-label={`Search results for "${query}"`}>
      {/* AI-style header */}
      <header className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30">
          <Sparkles size={14} className="text-primary" aria-hidden="true" />
          <span className="text-xs font-medium text-primary">Web Search</span>
        </div>
        <span className="text-sm text-muted-foreground" aria-label={`Query: ${query}`}>{query}</span>
      </header>

      {/* Responsive two-column layout */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Main content */}
        <main className="flex-1 min-w-0 order-1">
          {/* AI Synthesis (Perplexity-style) */}
          {hasSynthesis && (
            <SynthesisSection synthesis={synthesis} sources={sources || []} />
          )}

          {/* Media gallery */}
          {carouselMedia.length > 0 && <MediaGallery items={carouselMedia} />}

          {/* Results */}
          {resultCount > 0 ? (
            <div className="flex flex-col divide-y divide-white/5" role="list" aria-label="Search results">
              {results.map((result, index) => (
                <div
                  key={result.url || index}
                  role="listitem"
                  className="py-4 first:pt-0 last:pb-0"
                >
                  <RichResultCard result={result} index={index} />
                </div>
              ))}
            </div>
          ) : !hasSynthesis ? (
            <div className="p-8 text-center" role="status">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/5 flex items-center justify-center" aria-hidden="true">
                <Globe size={20} className="text-white/30" />
              </div>
              <p className="text-muted-foreground">
                No results found for &quot;{query}&quot;
              </p>
            </div>
          ) : null}

          {/* Footer stats */}
          {resultCount > 0 && (
            <footer className="mt-4 pt-4 border-t border-white/5" aria-label="Search statistics">
              <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
                <span>{totalResults ?? resultCount} results</span>
                {searchTime && <span>{(searchTime / 1000).toFixed(2)}s</span>}
              </div>
            </footer>
          )}
        </main>

        {/* Sources sidebar - responsive width */}
        {hasSources && (
          <aside className="hidden lg:block w-[240px] xl:w-[280px] shrink-0 order-2" aria-label="Sources">
            <SourcesSidebar
              sources={sources}
              expanded={sourcesExpanded}
              onToggle={() => setSourcesExpanded(!sourcesExpanded)}
            />
          </aside>
        )}
      </div>

      {/* Mobile sources */}
      {hasSources && (
        <aside className="lg:hidden mt-6 pt-4 border-t border-white/10" aria-label="Sources">
          <SourcesSidebar
            sources={sources}
            expanded={sourcesExpanded}
            onToggle={() => setSourcesExpanded(!sourcesExpanded)}
          />
        </aside>
      )}

      {children}
    </section>
  );
});
