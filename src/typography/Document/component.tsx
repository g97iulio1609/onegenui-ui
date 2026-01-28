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
  content?: string | null;
  author?: string | null;
  createdAt?: string | null;
  sections?: DocumentSection[] | null;
  tags?: string[] | null;
};

/** Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: "0.625rem" },
  visible: { opacity: 1, y: 0 },
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/10 card-glass"
      >
        {title && (
          <h3 className="text-base sm:text-lg font-semibold tracking-tight m-0">
            {render(title, { inline: true })}
          </h3>
        )}
        <div className="flex flex-col gap-2 sm:gap-3 animate-pulse">
          <div className="h-3 sm:h-4 bg-white/10 rounded w-3/4" />
          <div className="h-3 sm:h-4 bg-white/5 rounded w-1/2" />
          <div className="h-3 sm:h-4 bg-white/5 rounded w-2/3" />
        </div>
        <p className="text-[0.625rem] sm:text-xs text-muted-foreground italic">
          Document content is loading or was not provided by the AI...
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-3 sm:gap-4"
    >
      {title && (
        <h3 className="text-base sm:text-lg font-semibold tracking-tight m-0">
          {render(title, { inline: true })}
        </h3>
      )}
      <div className="flex flex-col gap-3 sm:gap-4">
        {documents.map((rawDoc, index) => {
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
              variants={itemVariants}
              key={doc.id ?? `${doc.title}-${index}`}
              data-selectable-item
              data-element-key={element.key}
              data-item-id={doc.id ?? `${index}`}
              className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/10 card-glass shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Header - stacks on mobile */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="flex-1 space-y-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <FileText className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem] text-primary/70 flex-shrink-0" />
                    <h4 className="text-sm sm:text-base font-semibold leading-tight text-foreground truncate">
                      {render(doc.title, { inline: true })}
                    </h4>
                  </div>
                  {doc.summary && (
                    <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {render(doc.summary)}
                    </div>
                  )}
                </div>
                {/* Metadata - inline on mobile */}
                <div className="text-[0.625rem] sm:text-xs text-muted-foreground flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0">
                  {doc.author && (
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <User className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span>{doc.author}</span>
                    </div>
                  )}
                  {doc.createdAt && (
                    <div className="flex items-center gap-1 sm:gap-1.5 opacity-80">
                      <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span>{doc.createdAt}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Sections */}
              {doc.sections && doc.sections.length > 0 && (
                <div className="flex flex-col gap-3 sm:gap-4 mt-1 sm:mt-2 pl-2 sm:pl-1 border-l-2 border-white/10 ml-1 sm:ml-2">
                  {doc.sections.map((section, sectionIndex) => (
                    <div
                      key={section.id ?? `${sectionIndex}`}
                      className="pl-3 sm:pl-4"
                    >
                      <h5 className="text-xs sm:text-sm font-semibold mb-1 text-foreground">
                        {render(section.title, { inline: true })}
                      </h5>
                      {section.content && (
                        <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {render(section.content)}
                        </div>
                      )}
                      {section.highlights && section.highlights.length > 0 && (
                        <ul className="mt-1.5 sm:mt-2 list-disc list-outside pl-3 sm:pl-4 space-y-0.5 sm:space-y-1">
                          {section.highlights.map((item) => (
                            <li
                              key={item}
                              className="text-[0.625rem] sm:text-xs text-muted-foreground/90"
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

              {/* Tags */}
              {doc.tags && doc.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-2.5 py-0.5 rounded-full bg-white/5 text-muted-foreground text-[0.5625rem] sm:text-[0.625rem] font-medium uppercase tracking-wide border border-white/10"
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
    </motion.div>
  );
});
