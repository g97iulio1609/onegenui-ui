import { memo } from "react";
import type { SourceCitation } from "../schema";
import { CitationLink } from "./citation-link";

export const TextWithCitations = memo(function TextWithCitations({
  text,
  sources,
}: {
  text: string;
  sources: SourceCitation[];
}) {
  const parts = text.split(/(\[\d+\])/g);

  return (
    <>
      {parts.map((part, idx) => {
        const match = part.match(/\[(\d+)\]/);
        if (match) {
          return <CitationLink key={idx} id={match[1]!} sources={sources} />;
        }
        return <span key={idx}>{part}</span>;
      })}
    </>
  );
});
