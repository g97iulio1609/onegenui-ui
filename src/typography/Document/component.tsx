import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import { FileText, Calendar, User } from "lucide-react";

type DocumentSection = {
  id?: string | null;
  title: string;
  content?: string | null;
  highlights?: string[] | null;
};

type DocumentItem = {
  id?: string | null;
  title: string;
  summary?: string | null;
  content?: string | null; // Added to support AI generated flat structure
  author?: string | null;
  createdAt?: string | null;
  sections?: DocumentSection[] | null;
  tags?: string[] | null;
};

export const Document = memo(function Document({
  element,
  children,
  renderText,
}: ComponentRenderProps) {
  const { title, documents = [] } = element.props as {
    title?: string | null;
    documents?: DocumentItem[] | null;
  };
  const render = renderText ?? ((value: string | null | undefined) => value);

  if (!documents || documents.length === 0) {
    return (
      <div className="flex flex-col gap-4 p-5 rounded-xl border border-white/10 card-glass">
        {title && (
          <h3 className="text-lg font-semibold tracking-tight m-0">
            {render(title, { inline: true })}
          </h3>
        )}
        <div className="flex flex-col gap-3 animate-pulse">
          <div className="h-4 bg-white/10 rounded w-3/4"></div>
          <div className="h-4 bg-white/5 rounded w-1/2"></div>
          <div className="h-4 bg-white/5 rounded w-2/3"></div>
        </div>
        <p className="text-xs text-muted-foreground italic">
          Document content is loading or was not provided by the AI...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {title && (
        <h3 className="text-lg font-semibold tracking-tight m-0">
          {render(title, { inline: true })}
        </h3>
      )}
      <div className="flex flex-col gap-4">
        {documents.map((rawDoc, index) => {
          // Normalize doc structure to handle AI schema variations
          const doc = {
            ...rawDoc,
            sections: rawDoc.sections?.length
              ? rawDoc.sections
              : rawDoc.content
                ? [{ title: "Overview", content: rawDoc.content }]
                : [],
          };

          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={doc.id ?? `${doc.title}-${index}`}
              data-selectable-item
              data-element-key={element.key}
              data-item-id={doc.id ?? `${index}`}
              className="flex flex-col gap-4 p-5 rounded-xl border border-white/10 card-glass shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <FileText size={18} className="text-primary/70" />
                    <h4 className="text-base font-semibold leading-none text-foreground">
                      {render(doc.title, { inline: true })}
                    </h4>
                  </div>
                  {doc.summary && (
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {render(doc.summary)}
                    </div>
                  )}
                </div>
                <div className="text-xs text-muted-foreground flex flex-col items-end gap-1 shrink-0">
                  {doc.author && (
                    <div className="flex items-center gap-1.5">
                      <User size={12} />
                      <span>{doc.author}</span>
                    </div>
                  )}
                  {doc.createdAt && (
                    <div className="flex items-center gap-1.5 opacity-80">
                      <Calendar size={12} />
                      <span>{doc.createdAt}</span>
                    </div>
                  )}
                </div>
              </div>

              {doc.sections && doc.sections.length > 0 && (
                <div className="flex flex-col gap-4 mt-2 pl-1 border-l-2 border-white/10 ml-2">
                  {doc.sections.map((section, sectionIndex) => (
                    <div key={section.id ?? `${sectionIndex}`} className="pl-4">
                      <h5 className="text-sm font-semibold mb-1 text-foreground">
                        {render(section.title, { inline: true })}
                      </h5>
                      {section.content && (
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          {render(section.content)}
                        </div>
                      )}
                      {section.highlights && section.highlights.length > 0 && (
                        <ul className="mt-2 list-disc list-outside pl-4 space-y-1">
                          {section.highlights.map((item) => (
                            <li
                              key={item}
                              className="text-xs text-muted-foreground/90"
                            >
                              {render(item, { inline: true })}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {doc.tags && doc.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 text-muted-foreground text-[10px] font-medium uppercase tracking-wide border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      {children}
    </div>
  );
});
