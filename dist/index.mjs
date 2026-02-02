import {
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
} from "./chunk-42KZEVSX.mjs";

// src/utils/cn.ts
import { cn } from "@onegenui/utils";

// src/layout/Card/component.tsx
import { memo, useId } from "react";
import { motion } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
var PADDING_CLASSES = {
  none: "p-0",
  sm: "p-2 sm:p-3",
  md: "p-3 sm:p-4",
  lg: "p-4 sm:p-5 lg:p-6"
};
var cardVariants = {
  hidden: { opacity: 0, y: "0.625rem" },
  visible: { opacity: 1, y: 0 }
};
var Card = memo(function Card2({
  element,
  children
}) {
  const { title, description, padding, role, ariaLabelledBy } = element.props;
  const titleId = useId();
  const descriptionId = useId();
  const accessibleLabelledBy = ariaLabelledBy ?? (title ? `${titleId}${description ? ` ${descriptionId}` : ""}` : void 0);
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      variants: cardVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.3, ease: "easeOut" },
      role: role ?? void 0,
      "aria-labelledby": accessibleLabelledBy,
      className: "card-glass w-full min-w-0 flex flex-col motion-reduce:transition-none",
      children: [
        /* @__PURE__ */ jsx("div", { className: "gradient-bar-thin opacity-20", "aria-hidden": "true" }),
        (title || description) && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 p-4 sm:p-5 lg:p-6 pb-3 sm:pb-4 border-b border-white/5 bg-white/[0.02]", children: [
          title && /* @__PURE__ */ jsx(
            "h3",
            {
              id: titleId,
              className: "text-base sm:text-lg font-bold leading-tight tracking-tight text-foreground",
              children: title
            }
          ),
          description && /* @__PURE__ */ jsx(
            "p",
            {
              id: descriptionId,
              className: "text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed",
              children: description
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "min-w-0 flex-1",
              PADDING_CLASSES[padding || ""] || "p-4 sm:p-5 lg:p-6"
            ),
            children
          }
        )
      ]
    }
  );
});

// src/layout/Grid/component.tsx
import {
  memo as memo2,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Children,
  isValidElement
} from "react";
import { motion as motion2, AnimatePresence } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var GAP_CLASSES = {
  none: "gap-0",
  sm: "gap-2 sm:gap-3",
  md: "gap-3 sm:gap-4 lg:gap-5",
  lg: "gap-4 sm:gap-5 lg:gap-6"
};
var containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};
var itemVariants = {
  hidden: { opacity: 0, y: "0.5rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-0.5rem" }
};
var Grid = memo2(function Grid2({
  element,
  children
}) {
  const { columns, gap } = element.props;
  const containerRef = useRef(null);
  const [forceSingleColumn, setForceSingleColumn] = useState(false);
  const gapClass = useMemo(
    () => GAP_CLASSES[gap || "md"] || GAP_CLASSES.md,
    [gap]
  );
  const evaluateLayout = useCallback(() => {
    if (typeof window === "undefined") return;
    const elementNode = containerRef.current;
    if (!elementNode) return;
    const childElements = Array.from(elementNode.children);
    const childCount = childElements.length;
    if (childCount <= 1) {
      setForceSingleColumn(false);
      return;
    }
    const maxHeight = childElements.reduce((acc, child) => {
      const height = child.getBoundingClientRect().height;
      return Math.max(acc, height);
    }, 0);
    const viewportHeight = window.innerHeight || 0;
    const isTall = maxHeight >= Math.max(520, viewportHeight * 0.6);
    const isWide = elementNode.clientWidth >= 1400;
    const shouldStack = isWide && isTall && childCount <= 3;
    setForceSingleColumn(shouldStack);
  }, []);
  useEffect(() => {
    const elementNode = containerRef.current;
    if (!elementNode) return;
    evaluateLayout();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(evaluateLayout);
    observer.observe(elementNode);
    Array.from(elementNode.children).forEach(
      (child) => observer.observe(child)
    );
    return () => observer.disconnect();
  }, [children, columns, evaluateLayout]);
  if (Children.count(children) === 0) {
    return /* @__PURE__ */ jsxs2(
      motion2.div,
      {
        role: "status",
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        className: cn(
          "py-8 sm:py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl sm:rounded-2xl bg-zinc-900/20 text-muted-foreground",
          "motion-reduce:animate-none"
        ),
        children: [
          /* @__PURE__ */ jsx2(LayoutGrid, { className: "w-8 h-8 sm:w-10 sm:h-10 opacity-20 mb-2 sm:mb-3", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx2("p", { className: "font-mono text-[0.625rem] sm:text-xs uppercase tracking-widest opacity-50", children: "Empty Grid" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    motion2.div,
    {
      role: "grid",
      "aria-label": "Grid layout",
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      ref: containerRef,
      className: cn(
        "grid w-full min-w-0 max-w-full items-stretch justify-items-stretch",
        // Mobile-first: 1 column, then responsive based on content
        forceSingleColumn ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]",
        gapClass,
        "motion-reduce:animate-none"
      ),
      children: /* @__PURE__ */ jsx2(AnimatePresence, { mode: "popLayout", children: Children.map(children, (child, index) => {
        const childKey = isValidElement(child) ? child.key ?? `grid-item-${index}` : `grid-item-${index}`;
        return /* @__PURE__ */ jsx2(
          motion2.div,
          {
            role: "gridcell",
            variants: itemVariants,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            className: "motion-reduce:animate-none",
            children: child
          },
          childKey
        );
      }) })
    }
  );
});

// src/layout/Stack/component.tsx
import { memo as memo3, useCallback as useCallback2, useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
import { motion as motion3 } from "framer-motion";
import { jsx as jsx3 } from "react/jsx-runtime";
var GAP_CLASSES2 = {
  none: "gap-0",
  sm: "gap-2 sm:gap-3",
  md: "gap-3 sm:gap-4 lg:gap-5",
  lg: "gap-4 sm:gap-5 lg:gap-6"
};
var ALIGN_CLASSES = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
};
var stackVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } }
};
var Stack = memo3(function Stack2({
  element,
  children
}) {
  const { direction, gap, align, wrap } = element.props;
  const containerRef = useRef2(null);
  const [forceVertical, setForceVertical] = useState2(false);
  const isHorizontal = direction === "horizontal";
  const shouldWrap = wrap !== false && isHorizontal;
  const evaluateLayout = useCallback2(() => {
    if (typeof window === "undefined") return;
    const node = containerRef.current;
    if (!node) return;
    if (!isHorizontal) {
      setForceVertical(false);
      return;
    }
    const childElements = Array.from(node.children);
    if (childElements.length <= 1) {
      setForceVertical(false);
      return;
    }
    const maxHeight = childElements.reduce((acc, child) => {
      const height = child.getBoundingClientRect().height;
      return Math.max(acc, height);
    }, 0);
    const viewportHeight = window.innerHeight || 0;
    const isTall = maxHeight >= Math.max(520, viewportHeight * 0.6);
    const isWide = node.clientWidth >= 1400;
    const shouldStack = isWide && isTall;
    setForceVertical(shouldStack);
  }, [isHorizontal]);
  useEffect2(() => {
    const node = containerRef.current;
    if (!node) return;
    evaluateLayout();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(evaluateLayout);
    observer.observe(node);
    Array.from(node.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [children, evaluateLayout]);
  const effectiveDirection = forceVertical ? "flex-col" : isHorizontal ? "flex-col sm:flex-row" : "flex-col";
  return /* @__PURE__ */ jsx3(
    motion3.div,
    {
      role: "group",
      "aria-label": "Stack layout",
      variants: stackVariants,
      initial: "hidden",
      animate: "visible",
      ref: containerRef,
      className: cn(
        "flex w-full min-w-0 max-w-full",
        effectiveDirection,
        shouldWrap && !forceVertical ? "sm:flex-wrap" : "flex-nowrap",
        GAP_CLASSES2[gap || "md"] || GAP_CLASSES2.md,
        ALIGN_CLASSES[align || "stretch"] || ALIGN_CLASSES.stretch,
        "motion-reduce:animate-none"
      ),
      children
    }
  );
});

// src/layout/Divider/component.tsx
import { memo as memo4 } from "react";
import { motion as motion4 } from "framer-motion";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var horizontalVariants = {
  hidden: { opacity: 0, scaleX: 0.8 },
  visible: { opacity: 1, scaleX: 1 }
};
var verticalVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1 }
};
var labelledVariants = {
  hidden: { opacity: 0, scaleX: 0.9 },
  visible: { opacity: 1, scaleX: 1 }
};
var Divider = memo4(function Divider2({
  element,
  children
}) {
  const { orientation, label } = element.props;
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsxs3(
      motion4.div,
      {
        role: "separator",
        "aria-orientation": "vertical",
        variants: verticalVariants,
        initial: "hidden",
        animate: "visible",
        transition: { duration: 0.3, ease: "easeOut" },
        className: cn("flex flex-col h-full", "motion-reduce:animate-none"),
        children: [
          /* @__PURE__ */ jsx4("div", { className: "w-px bg-white/10 self-stretch h-full", "aria-hidden": "true" }),
          children
        ]
      }
    );
  }
  if (label) {
    return /* @__PURE__ */ jsxs3(
      motion4.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        variants: labelledVariants,
        initial: "hidden",
        animate: "visible",
        transition: { duration: 0.3, ease: "easeOut" },
        className: cn(
          "flex items-center gap-2 sm:gap-3 my-3 sm:my-4 w-full",
          "motion-reduce:animate-none"
        ),
        children: [
          /* @__PURE__ */ jsx4("div", { className: "flex-1 h-px bg-white/10", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx4("span", { className: "text-[0.5625rem] sm:text-[0.625rem] uppercase font-bold tracking-wider text-muted-foreground whitespace-nowrap", children: label }),
          /* @__PURE__ */ jsx4("div", { className: "flex-1 h-px bg-white/10", "aria-hidden": "true" }),
          children
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs3(
    motion4.div,
    {
      role: "separator",
      "aria-orientation": "horizontal",
      variants: horizontalVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.3, ease: "easeOut" },
      className: cn("w-full", "motion-reduce:animate-none"),
      children: [
        /* @__PURE__ */ jsx4("div", { className: "divider-perforated", "aria-hidden": "true" }),
        children
      ]
    }
  );
});

// src/typography/Heading/component.tsx
import { memo as memo5 } from "react";
import { motion as motion5 } from "framer-motion";
import { jsxs as jsxs4 } from "react/jsx-runtime";
var headingVariants = {
  hidden: { opacity: 0, y: "-0.3125rem" },
  visible: { opacity: 1, y: 0 }
};
var HEADING_SIZES = {
  h1: "text-2xl sm:text-3xl lg:text-4xl",
  h2: "text-xl sm:text-2xl lg:text-3xl",
  h3: "text-lg sm:text-xl lg:text-2xl",
  h4: "text-base sm:text-lg lg:text-xl"
};
var Heading = memo5(function Heading2({
  element,
  children,
  renderText
}) {
  const { text, level } = element.props;
  const render = renderText ?? ((value) => value);
  const normalizedLevel = (() => {
    if (typeof level === "number" && Number.isFinite(level)) {
      const bounded = Math.min(Math.max(Math.round(level), 1), 4);
      return `h${bounded}`;
    }
    if (typeof level === "string") {
      const trimmed = level.trim();
      if (/^h[1-4]$/.test(trimmed)) {
        return trimmed;
      }
      const parsed = Number.parseInt(trimmed, 10);
      if (Number.isFinite(parsed)) {
        const bounded = Math.min(Math.max(parsed, 1), 4);
        return `h${bounded}`;
      }
    }
    return "h2";
  })();
  const Tag = motion5.create(
    normalizedLevel
  );
  return /* @__PURE__ */ jsxs4(
    Tag,
    {
      variants: headingVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.25, ease: "easeOut" },
      className: cn(
        "font-semibold tracking-tight mb-3 sm:mb-4 text-foreground",
        HEADING_SIZES[normalizedLevel]
      ),
      children: [
        render(text, { inline: true }),
        children
      ]
    }
  );
});

// src/typography/Text/component.tsx
import { memo as memo6 } from "react";
import { motion as motion6 } from "framer-motion";
import { jsxs as jsxs5 } from "react/jsx-runtime";
var textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
var VARIANT_CLASSES = {
  body: "text-xs sm:text-sm",
  caption: "text-[0.625rem] sm:text-xs",
  label: "text-[0.6875rem] sm:text-[0.8125rem]"
};
var COLOR_CLASSES = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  info: "text-muted-foreground",
  success: "text-emerald-500",
  warning: "text-amber-500",
  danger: "text-rose-500",
  error: "text-rose-500"
};
var Text = memo6(function Text2({
  element,
  children,
  renderText
}) {
  const { content, variant, color } = element.props;
  const render = renderText ?? ((value) => value);
  const resolvedVariant = variant || "body";
  const resolvedColor = color || "default";
  return /* @__PURE__ */ jsxs5(
    motion6.div,
    {
      variants: textVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.2 },
      className: cn(
        "m-0 leading-relaxed",
        VARIANT_CLASSES[resolvedVariant] || VARIANT_CLASSES.body,
        COLOR_CLASSES[resolvedColor] || COLOR_CLASSES.default
      ),
      children: [
        render(content, { inline: true }),
        children
      ]
    }
  );
});

// src/typography/CodeBlock/component.tsx
import { memo as memo7, useState as useState3 } from "react";
import { motion as motion7, AnimatePresence as AnimatePresence2 } from "framer-motion";
import { ChevronDown, ChevronUp, Code2 } from "lucide-react";
import { jsx as jsx5, jsxs as jsxs6 } from "react/jsx-runtime";
var containerVariants2 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};
var itemVariants2 = {
  hidden: { opacity: 0, y: "0.625rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-0.625rem" }
};
var expandVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 }
};
var CodeBlock = memo7(function CodeBlock2({
  element,
  children
}) {
  const { title, snippets = [] } = element.props;
  const [expandedId, setExpandedId] = useState3(null);
  if (!snippets || snippets.length === 0) {
    return /* @__PURE__ */ jsx5("div", { className: "text-muted-foreground text-xs sm:text-sm italic p-3 sm:p-4", children: "No code snippets" });
  }
  return /* @__PURE__ */ jsxs6(
    motion7.div,
    {
      variants: containerVariants2,
      initial: "hidden",
      animate: "visible",
      className: "flex flex-col gap-3 sm:gap-4",
      children: [
        title && /* @__PURE__ */ jsx5("h3", { className: "text-base sm:text-lg font-semibold tracking-tight m-0", children: title }),
        /* @__PURE__ */ jsx5("div", { className: "flex flex-col gap-2 sm:gap-3", children: /* @__PURE__ */ jsx5(AnimatePresence2, { mode: "popLayout", children: snippets.map((snippet, index) => {
          const snippetId = snippet.id ?? `${index}`;
          const isExpanded = expandedId === snippetId;
          return /* @__PURE__ */ jsxs6(
            motion7.div,
            {
              variants: itemVariants2,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              "data-selectable-item": true,
              "data-element-key": element.key,
              "data-item-id": snippetId,
              className: "rounded-lg sm:rounded-xl border border-white/10 card-glass overflow-hidden shadow-lg",
              children: [
                /* @__PURE__ */ jsxs6(
                  "button",
                  {
                    type: "button",
                    onClick: () => setExpandedId(isExpanded ? null : snippetId),
                    className: cn(
                      "w-full flex items-center justify-between p-3 sm:p-4 text-left border-0 bg-transparent cursor-pointer transition-colors hover:bg-white/5 min-h-[2.75rem]",
                      isExpanded && "bg-white/5"
                    ),
                    children: [
                      /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxs6("span", { className: "text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 text-foreground truncate", children: [
                          /* @__PURE__ */ jsx5(Code2, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" }),
                          /* @__PURE__ */ jsx5("span", { className: "truncate", children: snippet.title ?? "Untitled snippet" })
                        ] }),
                        snippet.summary && /* @__PURE__ */ jsx5("span", { className: "text-[0.625rem] sm:text-xs text-muted-foreground line-clamp-1", children: snippet.summary })
                      ] }),
                      /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2", children: [
                        /* @__PURE__ */ jsx5("span", { className: "hidden sm:inline text-[0.5625rem] sm:text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground bg-white/5 px-1.5 sm:px-2 py-0.5 rounded-full border border-white/10", children: snippet.language ?? "Code" }),
                        isExpanded ? /* @__PURE__ */ jsx5(ChevronUp, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" }) : /* @__PURE__ */ jsx5(ChevronDown, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx5(AnimatePresence2, { children: isExpanded && /* @__PURE__ */ jsx5(
                  motion7.div,
                  {
                    variants: expandVariants,
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    transition: { duration: 0.2 },
                    className: "relative border-t border-white/10 bg-black/20",
                    children: /* @__PURE__ */ jsx5("pre", { className: "m-0 p-3 sm:p-4 text-[0.625rem] sm:text-xs overflow-x-auto font-mono leading-relaxed text-foreground", children: /* @__PURE__ */ jsx5("code", { children: snippet.content }) })
                  }
                ) })
              ]
            },
            snippetId
          );
        }) }) }),
        children
      ]
    }
  );
});

// src/typography/Document/component.tsx
import { memo as memo8 } from "react";
import { motion as motion8, AnimatePresence as AnimatePresence3 } from "framer-motion";
import { FileText, Calendar, User } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs7 } from "react/jsx-runtime";
var containerVariants3 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};
var itemVariants3 = {
  hidden: { opacity: 0, y: "0.625rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-0.625rem" }
};
var Document = memo8(function Document2({
  element,
  children,
  renderText
}) {
  const { title, documents = [] } = element.props;
  const render = renderText ?? ((value) => value);
  if (!documents || documents.length === 0) {
    return /* @__PURE__ */ jsxs7(
      motion8.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/10 card-glass",
        children: [
          title && /* @__PURE__ */ jsx6("h3", { className: "text-base sm:text-lg font-semibold tracking-tight m-0", children: render(title, { inline: true }) }),
          /* @__PURE__ */ jsxs7("div", { className: "flex flex-col gap-2 sm:gap-3 animate-pulse", children: [
            /* @__PURE__ */ jsx6("div", { className: "h-3 sm:h-4 bg-white/10 rounded w-3/4" }),
            /* @__PURE__ */ jsx6("div", { className: "h-3 sm:h-4 bg-white/5 rounded w-1/2" }),
            /* @__PURE__ */ jsx6("div", { className: "h-3 sm:h-4 bg-white/5 rounded w-2/3" })
          ] }),
          /* @__PURE__ */ jsx6("p", { className: "text-[0.625rem] sm:text-xs text-muted-foreground italic", children: "Document content is loading or was not provided by the AI..." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs7(
    motion8.div,
    {
      variants: containerVariants3,
      initial: "hidden",
      animate: "visible",
      className: "flex flex-col gap-3 sm:gap-4",
      children: [
        title && /* @__PURE__ */ jsx6("h3", { className: "text-base sm:text-lg font-semibold tracking-tight m-0", children: render(title, { inline: true }) }),
        /* @__PURE__ */ jsx6("div", { className: "flex flex-col gap-3 sm:gap-4", children: /* @__PURE__ */ jsx6(AnimatePresence3, { mode: "popLayout", children: documents.map((rawDoc, index) => {
          const doc = {
            ...rawDoc,
            sections: rawDoc.sections?.length ? rawDoc.sections : rawDoc.content ? [{ title: "Overview", content: rawDoc.content }] : []
          };
          return /* @__PURE__ */ jsxs7(
            motion8.div,
            {
              variants: itemVariants3,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              "data-selectable-item": true,
              "data-element-key": element.key,
              "data-item-id": doc.id ?? `${index}`,
              className: "flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/10 card-glass shadow-lg hover:shadow-xl transition-shadow",
              children: [
                /* @__PURE__ */ jsxs7("div", { className: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4", children: [
                  /* @__PURE__ */ jsxs7("div", { className: "flex-1 space-y-1 min-w-0", children: [
                    /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
                      /* @__PURE__ */ jsx6(FileText, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem] text-primary/70 flex-shrink-0" }),
                      /* @__PURE__ */ jsx6("h4", { className: "text-sm sm:text-base font-semibold leading-tight text-foreground truncate", children: render(doc.title, { inline: true }) })
                    ] }),
                    doc.summary && /* @__PURE__ */ jsx6("div", { className: "text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none", children: render(doc.summary) })
                  ] }),
                  /* @__PURE__ */ jsxs7("div", { className: "text-[0.625rem] sm:text-xs text-muted-foreground flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0", children: [
                    doc.author && /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
                      /* @__PURE__ */ jsx6(User, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3" }),
                      /* @__PURE__ */ jsx6("span", { children: doc.author })
                    ] }),
                    doc.createdAt && /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-1 sm:gap-1.5 opacity-80", children: [
                      /* @__PURE__ */ jsx6(Calendar, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3" }),
                      /* @__PURE__ */ jsx6("span", { children: doc.createdAt })
                    ] })
                  ] })
                ] }),
                doc.sections && doc.sections.length > 0 && /* @__PURE__ */ jsx6("div", { className: "flex flex-col gap-3 sm:gap-4 mt-1 sm:mt-2 pl-2 sm:pl-1 border-l-2 border-white/10 ml-1 sm:ml-2", children: doc.sections.map((section, sectionIndex) => /* @__PURE__ */ jsxs7(
                  "div",
                  {
                    className: "pl-3 sm:pl-4",
                    children: [
                      /* @__PURE__ */ jsx6("h5", { className: "text-xs sm:text-sm font-semibold mb-1 text-foreground", children: render(section.title, { inline: true }) }),
                      section.content && /* @__PURE__ */ jsx6("div", { className: "text-xs sm:text-sm text-muted-foreground leading-relaxed", children: render(section.content) }),
                      section.highlights && section.highlights.length > 0 && /* @__PURE__ */ jsx6("ul", { className: "mt-1.5 sm:mt-2 list-disc list-outside pl-3 sm:pl-4 space-y-0.5 sm:space-y-1", children: section.highlights.map((item) => /* @__PURE__ */ jsx6(
                        "li",
                        {
                          className: "text-[0.625rem] sm:text-xs text-muted-foreground/90",
                          children: render(item, { inline: true })
                        },
                        item
                      )) })
                    ]
                  },
                  section.id ?? `${sectionIndex}`
                )) }),
                doc.tags && doc.tags.length > 0 && /* @__PURE__ */ jsx6("div", { className: "flex flex-wrap gap-1.5 sm:gap-2 mt-0.5 sm:mt-1", children: doc.tags.map((tag) => /* @__PURE__ */ jsx6(
                  "span",
                  {
                    className: "px-2 sm:px-2.5 py-0.5 rounded-full bg-white/5 text-muted-foreground text-[0.5625rem] sm:text-[0.625rem] font-medium uppercase tracking-wide border border-white/10",
                    children: tag
                  },
                  tag
                )) })
              ]
            },
            doc.id ?? `${doc.title}-${index}`
          );
        }) }) }),
        children
      ]
    }
  );
});

// src/status/Badge/component.tsx
import { memo as memo9 } from "react";
import { useData } from "@onegenui/react";
import { motion as motion9 } from "framer-motion";

// src/utils/data-utils.ts
import {
  resolveArrayProp,
  resolveValueProp,
  resolveString
} from "@onegenui/utils";

// src/status/Badge/component.tsx
import { jsx as jsx7, jsxs as jsxs8 } from "react/jsx-runtime";
var badgeVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  hover: { scale: 1.05 }
};
var DOT_CLASSES = {
  default: "bg-zinc-500",
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  error: "bg-rose-400",
  info: "bg-sky-400"
};
var STATUS_CLASSES = {
  default: "status-neutral",
  success: "status-success",
  warning: "status-warning",
  error: "status-error",
  info: "status-info"
};
var Badge = memo9(function Badge2({
  element,
  children
}) {
  const { text, variant } = element.props;
  const { data } = useData();
  const resolvedText = resolveValueProp(data, text ?? null);
  const tone = variant ?? "default";
  return /* @__PURE__ */ jsxs8(
    motion9.span,
    {
      role: "status",
      variants: badgeVariants,
      initial: "hidden",
      animate: "visible",
      whileHover: "hover",
      className: cn(
        "inline-flex items-center gap-1 sm:gap-1.5 transition-all text-[0.5625rem] sm:text-[0.625rem]",
        "motion-reduce:transition-none motion-reduce:animate-none",
        STATUS_CLASSES[tone] || STATUS_CLASSES.default
      ),
      children: [
        /* @__PURE__ */ jsx7(
          "span",
          {
            className: cn(
              "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0",
              DOT_CLASSES[tone] || DOT_CLASSES.default
            ),
            "aria-hidden": "true"
          }
        ),
        resolvedText,
        children
      ]
    }
  );
});

// src/status/Alert/component.tsx
import { memo as memo10, useState as useState4, useId as useId2 } from "react";
import { useData as useData2 } from "@onegenui/react";
import { motion as motion10, AnimatePresence as AnimatePresence4 } from "framer-motion";
import {
  X,
  Info,
  CheckCircle2,
  AlertTriangle,
  AlertCircle
} from "lucide-react";
import { jsx as jsx8, jsxs as jsxs9 } from "react/jsx-runtime";
var alertVariants = {
  hidden: { opacity: 0, height: 0, marginBottom: 0 },
  visible: { opacity: 1, height: "auto", marginBottom: "1rem" },
  exit: { opacity: 0, height: 0, marginBottom: 0 }
};
var ICON_MAP = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle
};
var TONE_CLASSES = {
  info: "bg-blue-500/10 border-blue-500/20 text-blue-500",
  success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
  warning: "bg-amber-500/10 border-amber-500/20 text-amber-500",
  error: "bg-rose-500/10 border-rose-500/20 text-rose-500"
};
var ARIA_ROLES = {
  info: "status",
  success: "status",
  warning: "alert",
  error: "alert"
};
var Alert = memo10(function Alert2({
  element,
  children
}) {
  const { type, variant, title, message, dismissible } = element.props;
  const { data } = useData2();
  const resolvedMessage = resolveValueProp(data, message ?? null);
  const [dismissed, setDismissed] = useState4(false);
  const titleId = useId2();
  const tone = type ?? variant ?? "info";
  const hasMessage = resolvedMessage !== void 0 && resolvedMessage !== null;
  const Icon = ICON_MAP[tone] || Info;
  const ariaRole = ARIA_ROLES[tone] ?? "status";
  return /* @__PURE__ */ jsx8(AnimatePresence4, { children: !dismissed && /* @__PURE__ */ jsx8(
    motion10.div,
    {
      role: ariaRole,
      "aria-live": ariaRole === "alert" ? "assertive" : "polite",
      "aria-labelledby": title ? titleId : void 0,
      variants: alertVariants,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      transition: { duration: 0.2 },
      className: cn(
        "relative w-full rounded-lg sm:rounded-xl border p-3 sm:p-4 text-xs sm:text-sm shadow-lg backdrop-blur-md overflow-hidden",
        "motion-reduce:transition-none motion-reduce:animate-none",
        TONE_CLASSES[tone] || TONE_CLASSES.info
      ),
      children: /* @__PURE__ */ jsxs9("div", { className: "flex gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsx8(
          Icon,
          {
            className: "w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxs9("div", { className: "flex-1 space-y-0.5 sm:space-y-1 min-w-0", children: [
          title && /* @__PURE__ */ jsx8(
            "h5",
            {
              id: titleId,
              className: "font-semibold leading-tight tracking-tight text-xs sm:text-sm",
              children: title
            }
          ),
          hasMessage && /* @__PURE__ */ jsx8("div", { className: "text-xs sm:text-sm opacity-90 leading-relaxed", children: String(resolvedMessage) }),
          children
        ] }),
        dismissible && /* @__PURE__ */ jsx8(
          "button",
          {
            type: "button",
            onClick: () => setDismissed(true),
            "aria-label": "Dismiss alert",
            className: cn(
              "absolute top-2 right-2 sm:top-3 sm:right-3 p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity",
              "hover:bg-black/5 dark:hover:bg-white/10 min-h-[2rem] min-w-[2rem] flex items-center justify-center",
              "motion-reduce:transition-none"
            ),
            children: /* @__PURE__ */ jsx8(X, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4", "aria-hidden": "true" })
          }
        )
      ] })
    }
  ) });
});

// src/status/Empty/component.tsx
import { memo as memo11 } from "react";
import { motion as motion11 } from "framer-motion";
import { jsx as jsx9, jsxs as jsxs10 } from "react/jsx-runtime";
var Empty = memo11(function Empty2({
  element,
  onAction,
  children
}) {
  const { title, description, action, actionLabel } = element.props;
  const resolvedAction = typeof action === "string" ? { name: action } : action ?? void 0;
  return /* @__PURE__ */ jsxs10(
    motion11.div,
    {
      role: "status",
      "aria-label": title,
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      className: cn(
        "flex flex-col items-center justify-center p-10 text-center",
        "motion-reduce:animate-none"
      ),
      children: [
        /* @__PURE__ */ jsx9("h3", { className: "mb-2 text-base font-semibold tracking-tight text-foreground", children: title }),
        description && /* @__PURE__ */ jsx9("p", { className: "m-0 text-sm text-muted-foreground", children: description }),
        resolvedAction && actionLabel && /* @__PURE__ */ jsx9(
          "button",
          {
            type: "button",
            onClick: () => onAction?.(resolvedAction),
            className: cn("mt-4 btn-secondary", "motion-reduce:transition-none"),
            children: actionLabel
          }
        ),
        children
      ]
    }
  );
});

// src/status/BrowserAction/component.tsx
import { memo as memo12 } from "react";
import { motion as motion12 } from "framer-motion";
import { jsx as jsx10, jsxs as jsxs11 } from "react/jsx-runtime";
var actionConfig = {
  navigating: { icon: "\u{1F310}", label: "Navigating", color: "#3b82f6" },
  searching: { icon: "\u{1F50D}", label: "Searching", color: "#8b5cf6" },
  extracting: { icon: "\u{1F4C4}", label: "Extracting", color: "#10b981" },
  clicking: { icon: "\u{1F446}", label: "Clicking", color: "#f59e0b" },
  typing: { icon: "\u2328\uFE0F", label: "Typing", color: "#6366f1" },
  waiting: { icon: "\u23F3", label: "Waiting", color: "#6b7280" },
  capturing: { icon: "\u{1F4F8}", label: "Capturing", color: "#ec4899" }
};
var statusConfig = {
  pending: { icon: "\u25CB" },
  loading: { icon: "\u25CC", animation: "spin 1s linear infinite" },
  complete: { icon: "\u2713" },
  error: { icon: "\u2715" }
};
var BrowserAction = memo12(function BrowserAction2({
  element,
  children
}) {
  const { action, target, url, status, message, error } = element.props;
  const actionInfo = actionConfig[action ?? "navigating"] ?? actionConfig.navigating;
  const statusInfo = statusConfig[status ?? "loading"] ?? statusConfig.loading;
  const displayText = target || url || message || "";
  const isError = status === "error";
  const isComplete = status === "complete";
  const isLoading = status === "loading";
  return /* @__PURE__ */ jsxs11(
    motion12.div,
    {
      initial: { opacity: 0, y: 5 },
      animate: { opacity: 1, y: 0 },
      className: cn(
        "flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm transition-opacity duration-300 border backdrop-blur-md",
        isError ? "bg-red-500/10 border-red-500/30 text-foreground" : "glass-surface text-foreground",
        isComplete ? "opacity-70" : "opacity-100"
      ),
      children: [
        /* @__PURE__ */ jsx10("span", { className: "text-base", children: actionInfo.icon }),
        /* @__PURE__ */ jsx10(
          "span",
          {
            className: "font-medium min-w-20 text-[var(--action-color)]",
            style: {
              "--action-color": actionInfo.color
            },
            children: actionInfo.label
          }
        ),
        /* @__PURE__ */ jsx10("span", { className: "flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground", children: displayText }),
        isError && error && /* @__PURE__ */ jsx10("span", { className: "text-destructive text-xs", children: error }),
        /* @__PURE__ */ jsx10(
          "span",
          {
            className: cn(
              "text-sm flex items-center justify-center",
              isError ? "text-destructive" : isComplete ? "text-green-500" : "text-muted-foreground",
              // Map the animation string roughly to classes or keep it simple
              isLoading && "animate-spin"
            ),
            children: statusInfo.icon
          }
        ),
        children
      ]
    }
  );
});

// src/forms/Button/component.tsx
import { memo as memo13 } from "react";
import { motion as motion13 } from "framer-motion";
import { jsx as jsx11, jsxs as jsxs12 } from "react/jsx-runtime";
var buttonVariants = {
  tap: { scale: 0.95 },
  hover: { scale: 1.03 }
};
var SIZE_CLASSES = {
  sm: "min-h-[2.25rem] sm:h-8 px-2.5 sm:px-3 text-[0.625rem]",
  md: "min-h-[2.75rem] sm:h-9 px-3 sm:px-4 text-xs sm:text-sm",
  lg: "min-h-[3rem] sm:h-11 px-4 sm:px-8 text-sm"
};
var Button = memo13(function Button2({
  element,
  onAction,
  loading,
  children
}) {
  const {
    label,
    variant,
    size,
    action,
    actionParams,
    disabled,
    ariaLabel,
    ariaDescribedBy
  } = element.props;
  const resolvedAction = typeof action === "string" ? { name: action, params: actionParams ?? void 0 } : action ?? void 0;
  const accessibleLabel = ariaLabel || label || void 0;
  return /* @__PURE__ */ jsxs12(
    motion13.button,
    {
      variants: buttonVariants,
      whileTap: "tap",
      whileHover: "hover",
      onClick: () => !disabled && resolvedAction && onAction?.(resolvedAction),
      disabled: !!disabled || loading,
      "aria-label": accessibleLabel,
      "aria-describedby": ariaDescribedBy ?? void 0,
      "aria-busy": loading || void 0,
      "aria-disabled": !!disabled || loading || void 0,
      className: cn(
        "relative inline-flex items-center justify-center transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
        "active:scale-95 touch-manipulation",
        // Reduced motion support
        "motion-reduce:transition-none motion-reduce:transform-none",
        variant === "primary" || !variant ? "btn-primary" : variant === "secondary" ? "btn-secondary" : variant === "danger" ? "btn-accent bg-destructive hover:bg-destructive/90 shadow-destructive/20" : variant === "ghost" ? "btn-ghost" : "",
        SIZE_CLASSES[size || "md"]
      ),
      children: [
        variant === "primary" && /* @__PURE__ */ jsx11(
          "div",
          {
            className: "absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 motion-reduce:hidden",
            "aria-hidden": "true"
          }
        ),
        loading ? /* @__PURE__ */ jsx11(
          "span",
          {
            className: "mr-1.5 sm:mr-2 animate-spin text-[0.625rem] sm:text-xs motion-reduce:animate-none",
            "aria-hidden": "true",
            children: "\u23F3"
          }
        ) : null,
        loading ? "Loading..." : label,
        !loading && children
      ]
    }
  );
});

// src/forms/TextField/component.tsx
import { memo as memo14, useId as useId3 } from "react";
import {
  useData as useData3,
  useFieldValidation
} from "@onegenui/react";
import { motion as motion14 } from "framer-motion";
import { jsx as jsx12, jsxs as jsxs13 } from "react/jsx-runtime";
var fieldVariants = {
  hidden: { opacity: 0, y: "0.3125rem" },
  visible: { opacity: 1, y: 0 }
};
var TextField = memo14(function TextField2({
  element,
  children
}) {
  const {
    label,
    bindPath,
    valuePath,
    value,
    placeholder,
    type,
    checks,
    validateOn,
    required,
    ariaLabel
  } = element.props;
  const { data, set } = useData3();
  const resolvedPath = bindPath ?? valuePath ?? null;
  const resolvedValue = resolveValueProp(
    data,
    value ?? null,
    resolvedPath
  );
  const shouldValidate = Boolean(resolvedPath);
  const { errors, validate, touch } = useFieldValidation(
    resolvedPath ?? "__unbound__",
    {
      checks: shouldValidate ? checks ?? void 0 : void 0,
      validateOn: validateOn ?? "blur"
    }
  );
  const inputId = useId3();
  const errorId = useId3();
  const hasErrors = errors.length > 0;
  return /* @__PURE__ */ jsxs13(
    motion14.div,
    {
      variants: fieldVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.2 },
      className: "flex flex-col gap-1.5 sm:gap-2 w-full group motion-reduce:transition-none",
      children: [
        label && /* @__PURE__ */ jsxs13(
          "label",
          {
            htmlFor: inputId,
            className: "text-label text-[0.5625rem] sm:text-[0.625rem] group-focus-within:text-primary transition-colors duration-300",
            children: [
              label,
              required && /* @__PURE__ */ jsx12("span", { className: "text-destructive ml-0.5", "aria-hidden": "true", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs13("div", { className: "relative", children: [
          /* @__PURE__ */ jsx12(
            "input",
            {
              id: inputId,
              type: type || "text",
              value: resolvedValue ?? "",
              onChange: (e) => {
                if (!resolvedPath) return;
                set(resolvedPath, e.target.value);
                if (shouldValidate && validateOn === "change") validate();
              },
              onBlur: () => {
                if (!resolvedPath) return;
                if (!shouldValidate) return;
                touch();
                if (validateOn === "blur" || !validateOn) validate();
              },
              placeholder: placeholder ?? "",
              required: required ?? void 0,
              "aria-label": ariaLabel ?? void 0,
              "aria-invalid": hasErrors || void 0,
              "aria-describedby": hasErrors ? errorId : void 0,
              "aria-required": required ?? void 0,
              className: cn(
                "glass-surface flex min-h-[2.75rem] sm:h-10 w-full rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground shadow-sm transition-all duration-300",
                "hover:border-white/20 hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50",
                "placeholder:text-muted-foreground touch-manipulation",
                "motion-reduce:transition-none",
                hasErrors ? "border-destructive/50 focus-visible:ring-destructive/50 text-destructive" : ""
              )
            }
          ),
          /* @__PURE__ */ jsx12(
            "div",
            {
              className: "absolute top-0 right-0 p-1 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx12("div", { className: "w-1 h-1 sm:w-1.5 sm:h-1.5 border-t border-r border-primary rounded-tr-sm" })
            }
          )
        ] }),
        hasErrors && /* @__PURE__ */ jsx12("div", { id: errorId, role: "alert", "aria-live": "polite", children: errors.map((error, i) => /* @__PURE__ */ jsxs13(
          "span",
          {
            className: "text-[0.5625rem] sm:text-[0.625rem] font-mono font-bold text-destructive flex items-center gap-1 sm:gap-1.5",
            children: [
              /* @__PURE__ */ jsx12("span", { className: "w-1 h-1 bg-destructive rounded-full flex-shrink-0", "aria-hidden": "true" }),
              " ",
              error
            ]
          },
          i
        )) }),
        children
      ]
    }
  );
});

// src/forms/Select/component.tsx
import { memo as memo15, useId as useId4 } from "react";
import { useData as useData4 } from "@onegenui/react";
import { motion as motion15 } from "framer-motion";
import { jsx as jsx13, jsxs as jsxs14 } from "react/jsx-runtime";
var selectVariants = {
  hidden: { opacity: 0, y: "0.3125rem" },
  visible: { opacity: 1, y: 0 }
};
var Select = memo15(function Select2({
  element,
  children
}) {
  const { label, bindPath, valuePath, value, options, placeholder, required, disabled, error } = element.props;
  const { data, set } = useData4();
  const selectId = useId4();
  const errorId = useId4();
  const resolvedPath = bindPath ?? valuePath ?? null;
  const resolvedValue = resolveValueProp(
    data,
    value ?? null,
    resolvedPath
  );
  const hasError = Boolean(error);
  return /* @__PURE__ */ jsxs14(
    motion15.div,
    {
      variants: selectVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.2 },
      className: cn(
        "flex flex-col gap-1 sm:gap-1.5 w-full",
        "motion-reduce:transition-none motion-reduce:animate-none"
      ),
      children: [
        label && /* @__PURE__ */ jsxs14(
          "label",
          {
            htmlFor: selectId,
            className: "text-label text-[0.5625rem] sm:text-[0.625rem]",
            children: [
              label,
              required && /* @__PURE__ */ jsx13("span", { className: "text-destructive ml-0.5", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs14(
          "select",
          {
            id: selectId,
            value: resolvedValue ?? "",
            onChange: (e) => resolvedPath && set(resolvedPath, e.target.value),
            required,
            disabled,
            "aria-invalid": hasError || void 0,
            "aria-describedby": hasError ? errorId : void 0,
            "aria-required": required || void 0,
            className: cn(
              "glass-surface flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground",
              "min-h-[2.75rem] sm:h-10",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
              "disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 appearance-none touch-manipulation",
              "motion-reduce:transition-none",
              !resolvedValue && "text-muted-foreground",
              hasError && "border-destructive focus:ring-destructive/50"
            ),
            children: [
              placeholder && /* @__PURE__ */ jsx13("option", { value: "", disabled: true, children: placeholder }),
              options.map((opt) => /* @__PURE__ */ jsx13(
                "option",
                {
                  value: opt.value,
                  className: "bg-card text-foreground",
                  children: opt.label
                },
                opt.value
              ))
            ]
          }
        ),
        error && /* @__PURE__ */ jsx13(
          "span",
          {
            id: errorId,
            role: "alert",
            className: "text-destructive text-[0.5625rem] sm:text-[0.625rem]",
            children: error
          }
        ),
        children
      ]
    }
  );
});

// src/forms/DatePicker/component.tsx
import { memo as memo16 } from "react";
import { useData as useData5 } from "@onegenui/react";
import { motion as motion16 } from "framer-motion";
import { jsx as jsx14, jsxs as jsxs15 } from "react/jsx-runtime";
var dateVariants = {
  hidden: { opacity: 0, y: "0.3125rem" },
  visible: { opacity: 1, y: 0 }
};
var DatePicker = memo16(function DatePicker2({
  element,
  children
}) {
  const { label, bindPath, valuePath, value, placeholder } = element.props;
  const { data, set } = useData5();
  const resolvedPath = bindPath ?? valuePath ?? null;
  const resolvedValue = resolveValueProp(
    data,
    value ?? null,
    resolvedPath
  );
  return /* @__PURE__ */ jsxs15(
    motion16.div,
    {
      variants: dateVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.2 },
      className: "flex flex-col gap-1 sm:gap-1.5 w-full",
      children: [
        label && /* @__PURE__ */ jsx14("label", { className: "text-label text-[0.5625rem] sm:text-[0.625rem]", children: label }),
        /* @__PURE__ */ jsx14(
          "input",
          {
            type: "date",
            value: resolvedValue ?? "",
            placeholder: placeholder ?? "",
            onChange: (e) => resolvedPath && set(resolvedPath, e.target.value),
            className: cn(
              "glass-surface flex min-h-[2.75rem] sm:h-10 w-full rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50",
              "disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 touch-manipulation"
            )
          }
        ),
        children
      ]
    }
  );
});

// src/data-display/Metric/component.tsx
import { memo as memo17 } from "react";
import { useData as useData6 } from "@onegenui/react";
import { motion as motion17 } from "framer-motion";
import { jsx as jsx15, jsxs as jsxs16 } from "react/jsx-runtime";
var metricVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};
var Metric = memo17(function Metric2({
  element,
  children
}) {
  const { label, value, valuePath, format, trend, trendValue } = element.props;
  const { data } = useData6();
  const rawValue = resolveValueProp(data, value, valuePath);
  let displayValue = String(rawValue ?? "-");
  if (format === "currency" && typeof rawValue === "number") {
    displayValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(rawValue);
  } else if (format === "percent" && typeof rawValue === "number") {
    displayValue = new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 1
    }).format(rawValue);
  } else if (format === "number" && typeof rawValue === "number") {
    displayValue = new Intl.NumberFormat("en-US").format(rawValue);
  }
  return /* @__PURE__ */ jsxs16(
    motion17.div,
    {
      variants: metricVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.2 },
      className: "flex flex-col gap-0.5 sm:gap-1 w-full min-w-0",
      children: [
        /* @__PURE__ */ jsx15("span", { className: "text-label text-[0.5625rem] sm:text-[0.625rem]", children: label }),
        /* @__PURE__ */ jsx15("span", { className: "text-display text-xl sm:text-2xl", children: displayValue }),
        (trend || trendValue) && /* @__PURE__ */ jsxs16(
          "span",
          {
            className: cn(
              "text-[0.625rem] sm:text-xs font-medium flex items-center gap-1",
              trend === "up" ? "text-emerald-400" : trend === "down" ? "text-rose-400" : "text-muted-foreground"
            ),
            children: [
              trend === "up" ? "+" : trend === "down" ? "-" : "",
              trendValue
            ]
          }
        ),
        children
      ]
    }
  );
});

// src/data-display/Table/component.tsx
import { memo as memo18, useId as useId5 } from "react";
import { useData as useData7 } from "@onegenui/react";
import { motion as motion18, AnimatePresence as AnimatePresence5 } from "framer-motion";
import { Table as TableIcon } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs17 } from "react/jsx-runtime";
var containerVariants4 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.02 } }
};
var rowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};
var Table = memo18(function Table2({
  element,
  children
}) {
  const {
    title,
    rows,
    dataPath,
    columns: rawColumns
  } = element.props;
  const columns = rawColumns.map((col) => ({
    key: col.key ?? col.accessor ?? "",
    label: col.label ?? col.header ?? "",
    format: col.format
  }));
  const { data } = useData7();
  const tableRows = resolveArrayProp(data, rows, dataPath);
  const titleId = useId5();
  const tableId = useId5();
  if (!tableRows || tableRows.length === 0) {
    return /* @__PURE__ */ jsxs17("div", { className: "w-full", role: "region", "aria-labelledby": title ? titleId : void 0, children: [
      title && /* @__PURE__ */ jsx16("h4", { id: titleId, className: "mb-3 sm:mb-4 text-xs sm:text-sm font-semibold leading-none tracking-tight", children: title }),
      /* @__PURE__ */ jsxs17(
        motion18.div,
        {
          role: "status",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: cn(
            "py-8 sm:py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-lg sm:rounded-2xl bg-zinc-900/20 text-muted-foreground",
            "motion-reduce:animate-none"
          ),
          children: [
            /* @__PURE__ */ jsx16(TableIcon, { className: "w-8 h-8 sm:w-10 sm:h-10 opacity-20 mb-2 sm:mb-3", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx16("p", { className: "font-mono text-[0.625rem] sm:text-xs uppercase tracking-widest opacity-50", children: "No data available" })
          ]
        }
      ),
      children
    ] });
  }
  const formatCell = (value, format) => {
    if (value === null || value === void 0) return "-";
    if (format === "currency" && typeof value === "number") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value);
    }
    if (format === "date" && typeof value === "string") {
      return new Date(value).toLocaleDateString();
    }
    if (format === "badge") {
      return /* @__PURE__ */ jsx16("span", { className: "inline-flex items-center rounded-full border px-2 sm:px-2.5 py-0.5 text-[0.625rem] sm:text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground", children: String(value) });
    }
    return String(value);
  };
  const renderRows = (rowsToRender, depth = 0) => rowsToRender.flatMap((row, index) => {
    const rowKey = typeof row.id === "string" ? row.id : `${depth}-${index}`;
    const subRows = Array.isArray(row.subRows) ? row.subRows : [];
    const renderedRow = /* @__PURE__ */ jsx16(
      motion18.tr,
      {
        variants: rowVariants,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        "data-selectable-item": true,
        "data-element-key": element.key,
        "data-item-id": rowKey,
        className: cn(
          "border-b border-white/5 transition-colors hover:bg-white/5 data-[state=selected]:bg-white/10",
          "motion-reduce:transition-none"
        ),
        children: columns.map((col, colIndex) => /* @__PURE__ */ jsx16(
          "td",
          {
            className: cn(
              "p-2.5 sm:p-4 align-middle text-xs sm:text-sm text-foreground",
              "[&:has([role=checkbox])]:pr-0"
            ),
            style: colIndex === 0 && depth > 0 ? { paddingLeft: `${0.75 + depth}rem` } : void 0,
            children: formatCell(row[col.key], col.format)
          },
          col.key
        ))
      },
      rowKey
    );
    return [renderedRow, ...renderRows(subRows, depth + 1)];
  });
  return /* @__PURE__ */ jsxs17("div", { className: "w-full", role: "region", "aria-labelledby": title ? titleId : void 0, children: [
    title && /* @__PURE__ */ jsx16("h4", { id: titleId, className: "mb-3 sm:mb-4 text-xs sm:text-sm font-semibold leading-none tracking-tight text-foreground", children: title }),
    /* @__PURE__ */ jsx16("div", { className: "relative w-full overflow-x-auto rounded-lg sm:rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm -mx-1 px-1 sm:mx-0 sm:px-0", children: /* @__PURE__ */ jsxs17(
      motion18.table,
      {
        id: tableId,
        "aria-label": title ?? "Data table",
        variants: containerVariants4,
        initial: "hidden",
        animate: "visible",
        className: cn(
          "w-full min-w-[20rem] caption-bottom text-xs sm:text-sm border-collapse",
          "motion-reduce:animate-none"
        ),
        children: [
          /* @__PURE__ */ jsx16("thead", { className: "[&_tr]:border-b border-white/10", children: /* @__PURE__ */ jsx16("tr", { className: "border-b border-white/10 transition-colors", children: columns.map((col, index) => /* @__PURE__ */ jsx16(
            "th",
            {
              scope: "col",
              className: "h-10 sm:h-12 px-2.5 sm:px-4 text-left align-middle font-medium text-muted-foreground text-[0.625rem] sm:text-xs uppercase tracking-wider",
              children: col.label
            },
            col.key ?? `col-${index}`
          )) }) }),
          /* @__PURE__ */ jsx16("tbody", { className: "[&_tr:last-child]:border-0", children: /* @__PURE__ */ jsx16(AnimatePresence5, { mode: "popLayout", children: renderRows(tableRows) }) })
        ]
      }
    ) }),
    children
  ] });
});

// src/data-display/List/component.tsx
import { memo as memo19 } from "react";
import { useData as useData8 } from "@onegenui/react";
import { motion as motion19 } from "framer-motion";
import { List as ListIcon } from "lucide-react";
import { jsx as jsx17, jsxs as jsxs18 } from "react/jsx-runtime";
var List = memo19(function List2({
  element,
  children
}) {
  const { items, dataPath, emptyMessage } = element.props;
  const { data } = useData8();
  const listData = resolveArrayProp(data, items, dataPath);
  if ((!listData || listData.length === 0) && !children) {
    return /* @__PURE__ */ jsxs18(
      "div",
      {
        role: "status",
        className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground",
        children: [
          /* @__PURE__ */ jsx17(ListIcon, { className: "w-10 h-10 opacity-20 mb-3", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx17("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: emptyMessage ?? "No items" })
        ]
      }
    );
  }
  const renderItems = (itemsToRender, depth = 0) => /* @__PURE__ */ jsx17(
    "ul",
    {
      role: "list",
      className: "flex flex-col gap-2",
      "aria-label": depth === 0 ? "List items" : void 0,
      children: itemsToRender.map((item, index) => {
        const raw = typeof item === "string" ? { text: item } : item;
        const normalized = {
          id: raw.id,
          text: raw.text ?? raw.primary ?? "",
          description: raw.description ?? raw.secondary ?? null,
          status: raw.status,
          subItems: raw.subItems
        };
        const itemId = normalized.id ?? `item-${depth}-${index}`;
        const subItems = Array.isArray(normalized.subItems) ? normalized.subItems : [];
        return /* @__PURE__ */ jsxs18(
          motion19.li,
          {
            className: "flex flex-col",
            initial: { opacity: 0, x: -10 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: index * 0.05 },
            children: [
              /* @__PURE__ */ jsxs18(
                "div",
                {
                  "data-selectable-item": true,
                  "data-element-key": element.key,
                  "data-item-id": itemId,
                  className: cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg",
                    "bg-white/5 border border-white/10",
                    "transition-colors hover:border-white/20 hover:bg-white/10",
                    "motion-reduce:transition-none motion-reduce:animate-none"
                  ),
                  style: {
                    marginLeft: `${depth * 16}px`
                  },
                  children: [
                    /* @__PURE__ */ jsx17(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full bg-foreground/60 shrink-0",
                        "aria-hidden": "true"
                      }
                    ),
                    /* @__PURE__ */ jsxs18("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsx17("div", { className: "text-sm font-medium truncate text-foreground", children: normalized.text }),
                      normalized.description && /* @__PURE__ */ jsx17("div", { className: "text-xs text-muted-foreground truncate", children: normalized.description })
                    ] }),
                    normalized.status && /* @__PURE__ */ jsx17("span", { className: "text-xs text-muted-foreground shrink-0", children: normalized.status })
                  ]
                }
              ),
              subItems.length > 0 && renderItems(subItems, depth + 1)
            ]
          },
          itemId
        );
      })
    }
  );
  return /* @__PURE__ */ jsxs18("nav", { "aria-label": "List navigation", children: [
    listData && listData.length > 0 && renderItems(listData),
    children
  ] });
});

// src/data-display/Timeline/component.tsx
import { memo as memo20 } from "react";
import { useData as useData9 } from "@onegenui/react";
import { motion as motion20 } from "framer-motion";
import { GitCommitVertical } from "lucide-react";
import { jsx as jsx18, jsxs as jsxs19 } from "react/jsx-runtime";
var Timeline = memo20(function Timeline2({
  element,
  children
}) {
  const { dataPath, items, titleKey, dateKey, descriptionKey, statusKey } = element.props;
  const { data } = useData9();
  const timelineData = resolveArrayProp(data, items, dataPath);
  if (!timelineData || timelineData.length === 0) {
    return /* @__PURE__ */ jsxs19("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ jsx18(GitCommitVertical, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ jsx18("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No timeline data" })
    ] });
  }
  const renderItems = (itemsToRender, depth = 0) => /* @__PURE__ */ jsx18("div", { className: cn(depth === 0 ? "py-4" : "py-2"), children: itemsToRender.map((item, index) => {
    const titleValue = titleKey ? item[titleKey] : item.title;
    const dateValue = dateKey ? item[dateKey] : item.date;
    const descriptionValue = descriptionKey ? item[descriptionKey] : item.description;
    const statusValue = statusKey ? item[statusKey] : item.status;
    const titleText = resolveString(titleValue);
    const dateText = resolveString(dateValue);
    const descriptionText = resolveString(descriptionValue);
    const statusText = resolveString(statusValue);
    const isCompleted = statusText === "completed" || statusText === "done";
    const subItems = Array.isArray(item.subItems) ? item.subItems : [];
    const itemId = item.id || `item-${depth}-${index}`;
    return /* @__PURE__ */ jsxs19(
      motion20.div,
      {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: index * 0.1 },
        "data-selectable-item": true,
        "data-element-key": element.key,
        "data-item-id": itemId,
        className: cn(
          "flex gap-4 mb-6 relative p-2 rounded-lg transition-all",
          "cursor-pointer hover:bg-white/5"
        ),
        style: {
          marginLeft: `${depth * 16}px`
        },
        children: [
          index !== itemsToRender.length - 1 && depth === 0 && /* @__PURE__ */ jsx18("div", { className: "absolute left-[22px] top-8 -bottom-4 w-[2px] bg-white/10" }),
          /* @__PURE__ */ jsx18(
            "div",
            {
              className: cn(
                "w-3.5 h-3.5 rounded-full border-2 border-background ring-1 ring-white/10 mt-1.5 shrink-0 z-10",
                isCompleted ? "bg-primary" : "bg-zinc-700"
              )
            }
          ),
          /* @__PURE__ */ jsxs19("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxs19("div", { className: "flex justify-between items-start mb-1 gap-2", children: [
              titleText && /* @__PURE__ */ jsx18("div", { className: "font-semibold text-sm text-foreground", children: titleText }),
              dateText && /* @__PURE__ */ jsx18("div", { className: "text-xs text-muted-foreground whitespace-nowrap", children: dateText })
            ] }),
            descriptionText && /* @__PURE__ */ jsx18("div", { className: "text-sm text-muted-foreground", children: descriptionText }),
            statusText && /* @__PURE__ */ jsx18("div", { className: "mt-2", children: /* @__PURE__ */ jsx18("span", { className: "text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/10 font-medium text-muted-foreground", children: statusText }) }),
            subItems.length > 0 && renderItems(subItems, depth + 1)
          ] })
        ]
      },
      itemId
    );
  }) });
  return /* @__PURE__ */ jsxs19("div", { className: "w-full min-w-0 max-w-full", children: [
    renderItems(timelineData),
    children
  ] });
});

// src/data-display/SearchResults/component.tsx
import { memo as memo28, useState as useState11 } from "react";
import { Globe as Globe4, Sparkles } from "lucide-react";

// src/data-display/SearchResults/components/citation-link.tsx
import { memo as memo21, useState as useState5, useRef as useRef3, useEffect as useEffect3, useCallback as useCallback3 } from "react";
import { jsx as jsx19, jsxs as jsxs20 } from "react/jsx-runtime";
var CitationLink = memo21(function CitationLink2({
  id,
  sources
}) {
  const source = sources.find((s) => s.id === id);
  const [showPopover, setShowPopover] = useState5(false);
  const [popoverPosition, setPopoverPosition] = useState5(
    "bottom"
  );
  const buttonRef = useRef3(null);
  const popoverRef = useRef3(null);
  const updatePosition = useCallback3(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    setPopoverPosition(spaceBelow < 200 ? "top" : "bottom");
  }, []);
  useEffect3(() => {
    if (!showPopover) return;
    const handleClick2 = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
        setShowPopover(false);
      }
    };
    document.addEventListener("click", handleClick2);
    return () => document.removeEventListener("click", handleClick2);
  }, [showPopover]);
  if (!source) return /* @__PURE__ */ jsxs20("span", { className: "text-primary/60", children: [
    "[",
    id,
    "]"
  ] });
  const isWebSource = !!source.url;
  const hasExcerpt = !!(source.excerpt || source.snippet);
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWebSource && !hasExcerpt) {
      window.open(source.url, "_blank", "noopener,noreferrer");
    } else {
      updatePosition();
      setShowPopover(!showPopover);
    }
  };
  return /* @__PURE__ */ jsxs20("span", { className: "relative inline-block", children: [
    /* @__PURE__ */ jsx19(
      "button",
      {
        ref: buttonRef,
        onClick: handleClick,
        title: source.title,
        className: "inline-flex items-center justify-center min-w-4 h-4 px-1 text-[10px] font-medium bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors ml-0.5 cursor-pointer",
        children: id
      }
    ),
    showPopover && hasExcerpt && /* @__PURE__ */ jsxs20(
      "div",
      {
        ref: popoverRef,
        className: `absolute z-50 w-72 max-w-[90vw] p-3 rounded-lg border border-white/10 bg-zinc-900/95 backdrop-blur-sm shadow-xl ${popoverPosition === "top" ? "bottom-full mb-2" : "top-full mt-2"} left-1/2 -translate-x-1/2`,
        children: [
          /* @__PURE__ */ jsx19(
            "div",
            {
              className: `absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900/95 border-white/10 rotate-45 ${popoverPosition === "top" ? "bottom-[-5px] border-r border-b" : "top-[-5px] border-l border-t"}`
            }
          ),
          /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-2 mb-2 pb-2 border-b border-white/5", children: [
            source.pageNumber && /* @__PURE__ */ jsxs20("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary shrink-0", children: [
              "p. ",
              source.pageNumber
            ] }),
            /* @__PURE__ */ jsx19("span", { className: "text-xs font-medium text-foreground/80 truncate", children: source.title })
          ] }),
          /* @__PURE__ */ jsxs20("p", { className: "text-xs text-foreground/70 leading-relaxed italic", children: [
            '"',
            source.excerpt || source.snippet,
            '"'
          ] }),
          isWebSource && /* @__PURE__ */ jsxs20(
            "a",
            {
              href: source.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-2 pt-2 border-t border-white/5 flex items-center gap-1 text-[10px] text-primary hover:underline",
              children: [
                source.domain || "Open source",
                " \u2192"
              ]
            }
          )
        ]
      }
    )
  ] });
});

// src/data-display/SearchResults/components/text-with-citations.tsx
import { memo as memo22 } from "react";
import { Fragment, jsx as jsx20 } from "react/jsx-runtime";
var TextWithCitations = memo22(function TextWithCitations2({
  text,
  sources
}) {
  const parts = text.split(/(\[\d+\])/g);
  return /* @__PURE__ */ jsx20(Fragment, { children: parts.map((part, idx) => {
    const match = part.match(/\[(\d+)\]/);
    if (match) {
      return /* @__PURE__ */ jsx20(CitationLink, { id: match[1], sources }, idx);
    }
    return /* @__PURE__ */ jsx20("span", { children: part }, idx);
  }) });
});

// src/data-display/SearchResults/components/synthesis-section.tsx
import { memo as memo23, useState as useState6 } from "react";
import { motion as motion21, AnimatePresence as AnimatePresence6 } from "framer-motion";
import { ChevronDown as ChevronDown2, BookOpen, Lightbulb, MessageSquare } from "lucide-react";
import { jsx as jsx21, jsxs as jsxs21 } from "react/jsx-runtime";
var SynthesisSection = memo23(function SynthesisSection2({
  synthesis,
  sources
}) {
  const [showAllKeyPoints, setShowAllKeyPoints] = useState6(false);
  const [expandedSections, setExpandedSections] = useState6(
    /* @__PURE__ */ new Set([0])
  );
  const toggleSection = (idx) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };
  const visibleKeyPoints = showAllKeyPoints ? synthesis.keyPoints : synthesis.keyPoints?.slice(0, 4);
  return /* @__PURE__ */ jsxs21("div", { className: "mb-6 space-y-4", children: [
    /* @__PURE__ */ jsxs21(
      motion21.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-violet-500/5 to-transparent border border-primary/10",
        children: [
          /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsx21("div", { className: "w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsx21(BookOpen, { size: 14, className: "text-primary" }) }),
            /* @__PURE__ */ jsx21("span", { className: "text-sm font-semibold text-foreground", children: "AI Summary" })
          ] }),
          /* @__PURE__ */ jsx21("p", { className: "text-sm text-foreground/90 leading-relaxed", children: /* @__PURE__ */ jsx21(TextWithCitations, { text: synthesis.summary, sources }) })
        ]
      }
    ),
    synthesis.keyPoints && synthesis.keyPoints.length > 0 && /* @__PURE__ */ jsxs21(
      motion21.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "p-4 rounded-xl bg-white/[0.02] border border-white/5",
        children: [
          /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsx21(Lightbulb, { size: 14, className: "text-amber-400" }),
            /* @__PURE__ */ jsx21("span", { className: "text-xs font-semibold text-foreground/80 uppercase tracking-wide", children: "Key Points" })
          ] }),
          /* @__PURE__ */ jsx21("ul", { className: "space-y-2", children: visibleKeyPoints?.map((point, idx) => /* @__PURE__ */ jsxs21(
            motion21.li,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: idx * 0.05 },
              className: "flex items-start gap-2 text-sm text-foreground/80",
              children: [
                /* @__PURE__ */ jsx21("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" }),
                /* @__PURE__ */ jsx21("span", { className: "leading-relaxed", children: /* @__PURE__ */ jsx21(TextWithCitations, { text: point.text, sources }) })
              ]
            },
            idx
          )) }),
          synthesis.keyPoints.length > 4 && /* @__PURE__ */ jsxs21(
            "button",
            {
              onClick: () => setShowAllKeyPoints(!showAllKeyPoints),
              className: "mt-3 text-xs text-primary/70 hover:text-primary transition-colors flex items-center gap-1",
              children: [
                showAllKeyPoints ? "Show less" : `Show all ${synthesis.keyPoints.length} points`,
                /* @__PURE__ */ jsx21(
                  ChevronDown2,
                  {
                    size: 12,
                    className: cn(
                      "transition-transform",
                      showAllKeyPoints && "rotate-180"
                    )
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    synthesis.sections && synthesis.sections.length > 0 && /* @__PURE__ */ jsx21("div", { className: "space-y-2", children: synthesis.sections.map((section, idx) => /* @__PURE__ */ jsxs21(
      motion21.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.15 + idx * 0.05 },
        className: "rounded-xl border border-white/5 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs21(
            "button",
            {
              onClick: () => toggleSection(idx),
              className: "w-full p-3 flex items-center justify-between text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors",
              children: [
                /* @__PURE__ */ jsx21("span", { className: "text-sm font-medium text-foreground/90", children: section.title }),
                /* @__PURE__ */ jsx21(
                  ChevronDown2,
                  {
                    size: 14,
                    className: cn(
                      "text-muted-foreground transition-transform",
                      expandedSections.has(idx) && "rotate-180"
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx21(AnimatePresence6, { children: expandedSections.has(idx) && /* @__PURE__ */ jsx21(
            motion21.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.2 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsx21("div", { className: "p-4 pt-2 text-sm text-foreground/80 leading-relaxed", children: /* @__PURE__ */ jsx21(
                TextWithCitations,
                {
                  text: section.content,
                  sources
                }
              ) })
            }
          ) })
        ]
      },
      idx
    )) }),
    synthesis.followUpQuestions && synthesis.followUpQuestions.length > 0 && /* @__PURE__ */ jsxs21(
      motion21.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.25 },
        className: "p-4 rounded-xl bg-white/[0.02] border border-white/5",
        children: [
          /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsx21(MessageSquare, { size: 14, className: "text-blue-400" }),
            /* @__PURE__ */ jsx21("span", { className: "text-xs font-semibold text-foreground/80 uppercase tracking-wide", children: "Related Questions" })
          ] }),
          /* @__PURE__ */ jsx21("div", { className: "flex flex-wrap gap-2", children: synthesis.followUpQuestions.map((question, idx) => /* @__PURE__ */ jsx21(
            "button",
            {
              className: "px-3 py-1.5 text-xs text-foreground/70 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all",
              children: question
            },
            idx
          )) })
        ]
      }
    )
  ] });
});

// src/data-display/SearchResults/components/media-gallery.tsx
import { memo as memo24, useState as useState7 } from "react";
import { motion as motion22 } from "framer-motion";
import { Play } from "lucide-react";

// src/data-display/SearchResults/components/video-utils.ts
function detectVideoEmbed(url) {
  if (!url) return null;
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtubeMatch?.[1]) {
    return {
      provider: "youtube",
      embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}?rel=0&modestbranding=1`
    };
  }
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch?.[1]) {
    return {
      provider: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?byline=0&portrait=0`
    };
  }
  const dailymotionMatch = url.match(
    /(?:dailymotion\.com\/video\/|dai\.ly\/)([a-zA-Z0-9]+)/
  );
  if (dailymotionMatch?.[1]) {
    return {
      provider: "dailymotion",
      embedUrl: `https://www.dailymotion.com/embed/video/${dailymotionMatch[1]}`
    };
  }
  return null;
}

// src/data-display/SearchResults/components/media-gallery.tsx
import { Fragment as Fragment2, jsx as jsx22, jsxs as jsxs22 } from "react/jsx-runtime";
var MediaGallery = memo24(function MediaGallery2({
  items
}) {
  const [activeVideo, setActiveVideo] = useState7(null);
  if (!items || items.length === 0) return null;
  const handleVideoClick = (idx, item) => {
    if (item.type === "video") {
      setActiveVideo(activeVideo === idx ? null : idx);
    }
  };
  return /* @__PURE__ */ jsx22("div", { className: "mb-6", children: /* @__PURE__ */ jsx22("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3", children: items.map((item, idx) => {
    const isVideoActive = activeVideo === idx && item.type === "video";
    const embedInfo = item.type === "video" ? detectVideoEmbed(item.url) : null;
    return /* @__PURE__ */ jsxs22(
      motion22.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: idx * 0.05 },
        className: cn(
          "group cursor-pointer",
          isVideoActive && "col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5"
        ),
        children: [
          /* @__PURE__ */ jsx22(
            "div",
            {
              className: cn(
                "relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all",
                isVideoActive ? "aspect-video w-full" : "aspect-[4/3] w-full"
              ),
              onClick: () => handleVideoClick(idx, item),
              children: isVideoActive && embedInfo ? /* @__PURE__ */ jsx22(
                "iframe",
                {
                  src: embedInfo.embedUrl,
                  title: item.title,
                  className: "absolute inset-0 w-full h-full border-0",
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                  allowFullScreen: true
                }
              ) : isVideoActive && !embedInfo ? /* @__PURE__ */ jsx22(
                "video",
                {
                  src: item.url,
                  controls: true,
                  autoPlay: true,
                  className: "absolute inset-0 w-full h-full object-contain bg-black",
                  children: /* @__PURE__ */ jsx22("source", { src: item.url })
                }
              ) : item.type === "video" ? /* @__PURE__ */ jsxs22("div", { className: "relative w-full h-full", children: [
                /* @__PURE__ */ jsx22(
                  "img",
                  {
                    src: item.thumbnail || item.url,
                    alt: item.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                    loading: "lazy",
                    onError: (e) => {
                      e.target.style.display = "none";
                    }
                  }
                ),
                /* @__PURE__ */ jsx22("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
                /* @__PURE__ */ jsx22("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx22("div", { className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all", children: /* @__PURE__ */ jsx22(Play, { size: 18, className: "text-white ml-0.5" }) }) }),
                item.duration && /* @__PURE__ */ jsx22("div", { className: "absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md bg-black/70 text-white/90 font-mono", children: item.duration }),
                item.provider && /* @__PURE__ */ jsx22("div", { className: "absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 font-medium uppercase tracking-wide", children: item.provider })
              ] }) : /* @__PURE__ */ jsxs22(Fragment2, { children: [
                /* @__PURE__ */ jsx22(
                  "img",
                  {
                    src: item.url,
                    alt: item.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                    loading: "lazy",
                    onError: (e) => {
                      e.target.style.display = "none";
                    }
                  }
                ),
                /* @__PURE__ */ jsx22("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })
              ] })
            }
          ),
          !isVideoActive && /* @__PURE__ */ jsx22("p", { className: "mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-snug", children: item.title })
        ]
      },
      idx
    );
  }) }) });
});

// src/data-display/SearchResults/components/sources-sidebar.tsx
import { memo as memo25, useState as useState8 } from "react";
import { motion as motion23 } from "framer-motion";
import { Globe, ChevronDown as ChevronDown3 } from "lucide-react";
import { jsx as jsx23, jsxs as jsxs23 } from "react/jsx-runtime";
var SourcesSidebar = memo25(function SourcesSidebar2({
  sources,
  expanded,
  onToggle
}) {
  const [imgErrors, setImgErrors] = useState8(/* @__PURE__ */ new Set());
  const visibleSources = expanded ? sources : sources.slice(0, 4);
  return /* @__PURE__ */ jsxs23("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-1", children: [
      /* @__PURE__ */ jsx23("div", { className: "flex -space-x-1", children: sources.slice(0, 3).map((s, i) => /* @__PURE__ */ jsx23(
        "div",
        {
          className: "w-5 h-5 rounded-full bg-white/10 border-2 border-zinc-900 flex items-center justify-center overflow-hidden",
          children: s.favicon && !imgErrors.has(s.favicon) ? /* @__PURE__ */ jsx23(
            "img",
            {
              src: s.favicon,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => setImgErrors((prev) => new Set(prev).add(s.favicon))
            }
          ) : /* @__PURE__ */ jsx23(Globe, { size: 10, className: "text-white/40" })
        },
        i
      )) }),
      /* @__PURE__ */ jsxs23("span", { className: "font-medium", children: [
        sources.length,
        " sources"
      ] })
    ] }),
    /* @__PURE__ */ jsx23("div", { className: "flex flex-col gap-1.5", children: visibleSources.map((source, idx) => /* @__PURE__ */ jsxs23(
      motion23.a,
      {
        initial: { opacity: 0, x: 10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: idx * 0.03 },
        href: source.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all no-underline",
        children: [
          /* @__PURE__ */ jsx23("div", { className: "shrink-0 w-5 h-5 rounded-md bg-white/10 flex items-center justify-center overflow-hidden", children: source.favicon && !imgErrors.has(source.favicon) ? /* @__PURE__ */ jsx23(
            "img",
            {
              src: source.favicon,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => setImgErrors((prev) => new Set(prev).add(source.favicon))
            }
          ) : /* @__PURE__ */ jsx23(Globe, { size: 12, className: "text-white/40" }) }),
          /* @__PURE__ */ jsxs23("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx23("div", { className: "text-xs font-medium text-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors", children: source.title }),
            /* @__PURE__ */ jsx23("div", { className: "flex items-center gap-1 mt-0.5", children: /* @__PURE__ */ jsx23("span", { className: "text-[10px] text-muted-foreground/70", children: source.domain }) })
          ] })
        ]
      },
      source.id || idx
    )) }),
    sources.length > 4 && /* @__PURE__ */ jsxs23(
      "button",
      {
        onClick: onToggle,
        className: "flex items-center justify-center gap-1 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5",
        children: [
          expanded ? "Show less" : "Show all",
          /* @__PURE__ */ jsx23(
            ChevronDown3,
            {
              size: 14,
              className: cn("transition-transform", expanded && "rotate-180")
            }
          )
        ]
      }
    )
  ] });
});

// src/data-display/SearchResults/components/rich-result-card.tsx
import { memo as memo26, useState as useState9 } from "react";
import { motion as motion24 } from "framer-motion";
import { Globe as Globe2, Play as Play2 } from "lucide-react";
import { Fragment as Fragment3, jsx as jsx24, jsxs as jsxs24 } from "react/jsx-runtime";
var RichResultCard = memo26(function RichResultCard2({
  result,
  index
}) {
  const [imgError, setImgError] = useState9(false);
  const [faviconError, setFaviconError] = useState9(false);
  const [videoThumbError, setVideoThumbError] = useState9(false);
  const hostname = (() => {
    try {
      return new URL(result.url).hostname.replace("www.", "");
    } catch {
      return result.url;
    }
  })();
  return /* @__PURE__ */ jsx24(
    motion24.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.04, duration: 0.3 },
      className: "group",
      children: /* @__PURE__ */ jsx24(
        "a",
        {
          href: result.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "block no-underline",
          children: /* @__PURE__ */ jsxs24("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxs24("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/10", children: [
                  result.favicon && !faviconError ? /* @__PURE__ */ jsx24(
                    "img",
                    {
                      src: result.favicon,
                      alt: "",
                      className: "w-3.5 h-3.5 rounded-sm",
                      onError: () => setFaviconError(true)
                    }
                  ) : /* @__PURE__ */ jsx24(Globe2, { size: 12, className: "text-white/40" }),
                  /* @__PURE__ */ jsx24("span", { className: "text-[11px] text-muted-foreground font-medium", children: result.source || hostname })
                ] }),
                result.date && /* @__PURE__ */ jsx24("span", { className: "text-[11px] text-muted-foreground/60", children: result.date })
              ] }),
              /* @__PURE__ */ jsx24("h3", { className: "text-[15px] font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors", children: result.title }),
              /* @__PURE__ */ jsx24("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-2", children: result.snippet })
            ] }),
            (result.video || result.image) && /* @__PURE__ */ jsx24("div", { className: "shrink-0 w-[120px] h-[90px] sm:w-[160px] sm:h-[110px] md:w-[180px] md:h-[120px] rounded-xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-all relative", children: result.video && !videoThumbError ? /* @__PURE__ */ jsxs24(Fragment3, { children: [
              /* @__PURE__ */ jsx24(
                "img",
                {
                  src: result.video.thumbnail || result.video.url,
                  alt: "",
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                  loading: "lazy",
                  onError: () => setVideoThumbError(true)
                }
              ),
              /* @__PURE__ */ jsx24("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" }),
              /* @__PURE__ */ jsx24("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx24("div", { className: "w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all", children: /* @__PURE__ */ jsx24(Play2, { size: 14, className: "text-white ml-0.5" }) }) }),
              result.video.duration && /* @__PURE__ */ jsx24("div", { className: "absolute bottom-1.5 right-1.5 text-[10px] sm:text-xs px-1.5 py-0.5 rounded-md bg-black/70 text-white/90 font-mono", children: result.video.duration })
            ] }) : result.image && !imgError ? /* @__PURE__ */ jsx24(
              "img",
              {
                src: result.image,
                alt: "",
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                loading: "lazy",
                onError: () => setImgError(true)
              }
            ) : null })
          ] })
        }
      )
    }
  );
});

// src/data-display/SearchResults/components/inline-result.tsx
import { memo as memo27, useState as useState10 } from "react";
import { motion as motion25 } from "framer-motion";
import { Globe as Globe3, ChevronRight } from "lucide-react";
import { jsx as jsx25, jsxs as jsxs25 } from "react/jsx-runtime";
var InlineResult = memo27(function InlineResult2({
  result,
  index
}) {
  const [faviconError, setFaviconError] = useState10(false);
  return /* @__PURE__ */ jsxs25(
    motion25.a,
    {
      initial: { opacity: 0, y: 4 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.02 },
      href: result.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-all no-underline",
      children: [
        /* @__PURE__ */ jsx25("div", { className: "shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center", children: result.favicon && !faviconError ? /* @__PURE__ */ jsx25(
          "img",
          {
            src: result.favicon,
            alt: "",
            className: "w-4 h-4 rounded-sm",
            onError: () => setFaviconError(true)
          }
        ) : /* @__PURE__ */ jsx25(Globe3, { size: 14, className: "text-white/40" }) }),
        /* @__PURE__ */ jsxs25("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx25("div", { className: "text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate", children: result.title }),
          /* @__PURE__ */ jsx25("div", { className: "text-xs text-muted-foreground/70 truncate", children: result.source || result.url })
        ] }),
        /* @__PURE__ */ jsx25(
          ChevronRight,
          {
            size: 16,
            className: "text-white/20 group-hover:text-white/40 transition-colors"
          }
        )
      ]
    }
  );
});

// src/data-display/SearchResults/component.tsx
import { jsx as jsx26, jsxs as jsxs26 } from "react/jsx-runtime";
var SearchResults = memo28(function SearchResults2({
  element,
  children
}) {
  const { query, results, totalResults, searchTime, sources, synthesis } = element.props;
  const [sourcesExpanded, setSourcesExpanded] = useState11(false);
  const resultCount = results?.length ?? 0;
  const hasSources = sources && sources.length > 0;
  const hasSynthesis = synthesis && synthesis.summary;
  const carouselMedia = results?.filter((r) => r.image || r.video).slice(0, 10).map((r) => {
    if (r.video) {
      return {
        type: "video",
        url: r.video.url,
        thumbnail: r.video.thumbnail || void 0,
        title: r.title,
        source: r.source || void 0,
        provider: r.video.provider || void 0,
        duration: r.video.duration || void 0
      };
    }
    return {
      type: "image",
      url: r.image,
      title: r.title,
      source: r.source || void 0
    };
  }) || [];
  return /* @__PURE__ */ jsxs26("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ jsxs26("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxs26("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30", children: [
        /* @__PURE__ */ jsx26(Sparkles, { size: 14, className: "text-primary" }),
        /* @__PURE__ */ jsx26("span", { className: "text-xs font-medium text-primary", children: "Web Search" })
      ] }),
      /* @__PURE__ */ jsx26("span", { className: "text-sm text-muted-foreground", children: query })
    ] }),
    /* @__PURE__ */ jsxs26("div", { className: "flex flex-col lg:flex-row gap-4 lg:gap-6", children: [
      /* @__PURE__ */ jsxs26("div", { className: "flex-1 min-w-0 order-1", children: [
        hasSynthesis && /* @__PURE__ */ jsx26(SynthesisSection, { synthesis, sources: sources || [] }),
        carouselMedia.length > 0 && /* @__PURE__ */ jsx26(MediaGallery, { items: carouselMedia }),
        resultCount > 0 ? /* @__PURE__ */ jsx26("div", { className: "flex flex-col divide-y divide-white/5", children: results.map((result, index) => /* @__PURE__ */ jsx26(
          "div",
          {
            className: "py-4 first:pt-0 last:pb-0",
            children: /* @__PURE__ */ jsx26(RichResultCard, { result, index })
          },
          result.url || index
        )) }) : !hasSynthesis ? /* @__PURE__ */ jsxs26("div", { className: "p-8 text-center", children: [
          /* @__PURE__ */ jsx26("div", { className: "w-12 h-12 mx-auto mb-3 rounded-full bg-white/5 flex items-center justify-center", children: /* @__PURE__ */ jsx26(Globe4, { size: 20, className: "text-white/30" }) }),
          /* @__PURE__ */ jsxs26("p", { className: "text-muted-foreground", children: [
            'No results found for "',
            query,
            '"'
          ] })
        ] }) : null,
        resultCount > 0 && /* @__PURE__ */ jsx26("div", { className: "mt-4 pt-4 border-t border-white/5", children: /* @__PURE__ */ jsxs26("div", { className: "flex items-center gap-4 text-xs text-muted-foreground/60", children: [
          /* @__PURE__ */ jsxs26("span", { children: [
            totalResults ?? resultCount,
            " results"
          ] }),
          searchTime && /* @__PURE__ */ jsxs26("span", { children: [
            (searchTime / 1e3).toFixed(2),
            "s"
          ] })
        ] }) })
      ] }),
      hasSources && /* @__PURE__ */ jsx26("div", { className: "hidden lg:block w-[240px] xl:w-[280px] shrink-0 order-2", children: /* @__PURE__ */ jsx26(
        SourcesSidebar,
        {
          sources,
          expanded: sourcesExpanded,
          onToggle: () => setSourcesExpanded(!sourcesExpanded)
        }
      ) })
    ] }),
    hasSources && /* @__PURE__ */ jsx26("div", { className: "lg:hidden mt-6 pt-4 border-t border-white/10", children: /* @__PURE__ */ jsx26(
      SourcesSidebar,
      {
        sources,
        expanded: sourcesExpanded,
        onToggle: () => setSourcesExpanded(!sourcesExpanded)
      }
    ) }),
    children
  ] });
});

// src/data-display/DriveFile/component.tsx
import { memo as memo29 } from "react";
import { motion as motion26 } from "framer-motion";
import { File, Clock, User as User2 } from "lucide-react";
import { jsx as jsx27, jsxs as jsxs27 } from "react/jsx-runtime";
var DriveFile = memo29(function DriveFile2({
  element,
  children
}) {
  const { name, thumbnailLink, webViewLink, iconLink, modifiedTime, owners } = element.props;
  return /* @__PURE__ */ jsxs27(
    motion26.div,
    {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      className: cn(
        "card-glass flex flex-col w-full max-w-[300px]",
        "overflow-hidden cursor-pointer",
        webViewLink ? "hover:shadow-2xl" : "cursor-default"
      ),
      onClick: () => webViewLink && window.open(webViewLink, "_blank"),
      children: [
        thumbnailLink ? /* @__PURE__ */ jsx27("div", { className: "h-40 w-full overflow-hidden bg-zinc-900/50 flex items-center justify-center", children: /* @__PURE__ */ jsx27(
          "img",
          {
            src: thumbnailLink,
            alt: name,
            className: "w-full h-full object-cover"
          }
        ) }) : /* @__PURE__ */ jsx27("div", { className: "h-40 w-full bg-zinc-900/50 flex items-center justify-center", children: /* @__PURE__ */ jsx27(File, { size: 48, className: "text-muted-foreground" }) }),
        /* @__PURE__ */ jsxs27("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxs27("div", { className: "flex items-center gap-2 mb-2", children: [
            iconLink ? /* @__PURE__ */ jsx27("img", { src: iconLink, alt: "", className: "w-4 h-4" }) : /* @__PURE__ */ jsx27(File, { size: 16 }),
            /* @__PURE__ */ jsx27(
              "div",
              {
                className: "font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis text-foreground",
                title: name,
                children: name
              }
            )
          ] }),
          /* @__PURE__ */ jsxs27("div", { className: "flex flex-col gap-1.5 text-xs text-muted-foreground", children: [
            modifiedTime && /* @__PURE__ */ jsxs27("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx27(Clock, { size: 12 }),
              new Date(modifiedTime).toLocaleDateString()
            ] }),
            owners && owners[0] && /* @__PURE__ */ jsxs27("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx27(User2, { size: 12 }),
              owners[0].displayName
            ] })
          ] })
        ] }),
        children
      ]
    }
  );
});

// src/data-display/DriveFileList/component.tsx
import { memo as memo31, useState as useState12 } from "react";
import { AnimatePresence as AnimatePresence7, motion as motion28 } from "framer-motion";

// src/data-display/DriveFileList/components/file-views.tsx
import { memo as memo30 } from "react";
import { motion as motion27 } from "framer-motion";

// src/data-display/DriveFileList/components/types.ts
function formatFileSize(bytes) {
  if (!bytes) return "";
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(1)} ${units[unitIndex]}`;
}
function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  } catch {
    return dateStr;
  }
}
function getFileTypeName(mimeType) {
  if (mimeType.includes("folder")) return "Cartella";
  if (mimeType.includes("document") || mimeType.includes("word"))
    return "Documento";
  if (mimeType.includes("spreadsheet") || mimeType.includes("excel"))
    return "Foglio di calcolo";
  if (mimeType.includes("presentation") || mimeType.includes("powerpoint"))
    return "Presentazione";
  if (mimeType.includes("pdf")) return "PDF";
  if (mimeType.includes("image")) return "Immagine";
  if (mimeType.includes("video")) return "Video";
  if (mimeType.includes("audio")) return "Audio";
  return "File";
}
function isFolder(mimeType) {
  return mimeType === "application/vnd.google-apps.folder";
}

// src/data-display/DriveFileList/components/icons.tsx
import { jsx as jsx28, jsxs as jsxs28 } from "react/jsx-runtime";
var DriveIcon = () => /* @__PURE__ */ jsxs28("svg", { width: "18", height: "18", viewBox: "0 0 87.3 78", fill: "none", children: [
  /* @__PURE__ */ jsx28(
    "path",
    {
      d: "M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5l5.4 9.35z",
      fill: "#0066da"
    }
  ),
  /* @__PURE__ */ jsx28(
    "path",
    {
      d: "M43.65 25L29.9 0H21.6c-1.35.8-2.5 1.9-3.3 3.3L1.2 29.4c-.8 1.4-1.2 2.95-1.2 4.5h27.5L43.65 25z",
      fill: "#00ac47"
    }
  ),
  /* @__PURE__ */ jsx28(
    "path",
    {
      d: "M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.85L73.55 76.8z",
      fill: "#ea4335"
    }
  ),
  /* @__PURE__ */ jsx28("path", { d: "M43.65 25L57.4 0H29.9l13.75 23.8V25z", fill: "#00832d" }),
  /* @__PURE__ */ jsx28(
    "path",
    {
      d: "M59.85 53h27.5L70.9 23.85c-.8-1.4-1.95-2.5-3.3-3.3l-23.95 7.5L59.85 53z",
      fill: "#2684fc"
    }
  ),
  /* @__PURE__ */ jsx28(
    "path",
    {
      d: "M27.5 53L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.4 4.5-1.2L59.85 53H27.5z",
      fill: "#ffba00"
    }
  )
] });
var FolderIcon = () => /* @__PURE__ */ jsx28("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "#fbbf24", children: /* @__PURE__ */ jsx28("path", { d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" }) });
var FileIcon = ({ mimeType }) => {
  const getColor = () => {
    if (mimeType.includes("document") || mimeType.includes("word"))
      return "#4285f4";
    if (mimeType.includes("spreadsheet") || mimeType.includes("excel"))
      return "#0f9d58";
    if (mimeType.includes("presentation") || mimeType.includes("powerpoint"))
      return "#f4b400";
    if (mimeType.includes("pdf")) return "#ea4335";
    if (mimeType.includes("image")) return "#9c27b0";
    if (mimeType.includes("video")) return "#673ab7";
    if (mimeType.includes("audio")) return "#ff5722";
    return "#757575";
  };
  return /* @__PURE__ */ jsx28("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: getColor(), children: /* @__PURE__ */ jsx28("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" }) });
};
var GridIcon = () => /* @__PURE__ */ jsxs28(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ jsx28("rect", { x: "3", y: "3", width: "7", height: "7" }),
      /* @__PURE__ */ jsx28("rect", { x: "14", y: "3", width: "7", height: "7" }),
      /* @__PURE__ */ jsx28("rect", { x: "14", y: "14", width: "7", height: "7" }),
      /* @__PURE__ */ jsx28("rect", { x: "3", y: "14", width: "7", height: "7" })
    ]
  }
);
var ListIcon2 = () => /* @__PURE__ */ jsxs28(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ jsx28("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
      /* @__PURE__ */ jsx28("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
      /* @__PURE__ */ jsx28("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
      /* @__PURE__ */ jsx28("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
      /* @__PURE__ */ jsx28("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
      /* @__PURE__ */ jsx28("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
    ]
  }
);
var ExternalLinkIcon = () => /* @__PURE__ */ jsxs28(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ jsx28("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
      /* @__PURE__ */ jsx28("polyline", { points: "15 3 21 3 21 9" }),
      /* @__PURE__ */ jsx28("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
    ]
  }
);
var StarIcon = ({ filled }) => /* @__PURE__ */ jsx28(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: /* @__PURE__ */ jsx28("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
  }
);
var ShareIcon = () => /* @__PURE__ */ jsxs28(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ jsx28("circle", { cx: "18", cy: "5", r: "3" }),
      /* @__PURE__ */ jsx28("circle", { cx: "6", cy: "12", r: "3" }),
      /* @__PURE__ */ jsx28("circle", { cx: "18", cy: "19", r: "3" }),
      /* @__PURE__ */ jsx28("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }),
      /* @__PURE__ */ jsx28("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" })
    ]
  }
);

// src/data-display/DriveFileList/components/file-views.tsx
import { jsx as jsx29, jsxs as jsxs29 } from "react/jsx-runtime";
var FileGridCard = memo30(function FileGridCard2({
  file,
  onOpen
}) {
  const folder = isFolder(file.mimeType);
  return /* @__PURE__ */ jsxs29(
    motion27.div,
    {
      layout: true,
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      whileHover: { scale: 1.05, y: -2 },
      onClick: () => onOpen(file),
      className: cn(
        "group flex flex-col items-center gap-3 p-4 min-w-[140px]",
        "card-glass border-white/5",
        "cursor-pointer"
      ),
      children: [
        /* @__PURE__ */ jsx29(
          "div",
          {
            className: cn(
              "w-16 h-16 flex items-center justify-center rounded-xl",
              folder ? "bg-amber-500/10" : "bg-white/5"
            ),
            children: file.thumbnailLink ? /* @__PURE__ */ jsx29(
              "img",
              {
                src: file.thumbnailLink,
                alt: file.name,
                className: "w-12 h-12 object-cover rounded-lg"
              }
            ) : folder ? /* @__PURE__ */ jsx29(FolderIcon, {}) : /* @__PURE__ */ jsx29(FileIcon, { mimeType: file.mimeType })
          }
        ),
        /* @__PURE__ */ jsx29(
          "div",
          {
            className: "text-[13px] font-medium text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-full text-foreground",
            title: file.name,
            children: file.name
          }
        ),
        /* @__PURE__ */ jsx29("div", { className: "text-[11px] text-muted-foreground px-2 py-1 bg-white/5 rounded-md", children: getFileTypeName(file.mimeType) })
      ]
    }
  );
});
var FileListRow = memo30(function FileListRow2({
  file,
  onOpen
}) {
  const folder = isFolder(file.mimeType);
  return /* @__PURE__ */ jsxs29(
    motion27.div,
    {
      layout: true,
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
      onClick: () => onOpen(file),
      className: cn(
        "group flex items-center gap-3.5 px-5 py-3.5",
        "border-b border-white/5",
        "cursor-pointer transition-colors duration-200",
        "hover:bg-white/5"
      ),
      children: [
        /* @__PURE__ */ jsx29(
          "div",
          {
            className: cn(
              "w-10 h-10 flex items-center justify-center rounded-xl shrink-0",
              folder ? "bg-amber-500/10" : "bg-white/5"
            ),
            children: file.iconLink ? /* @__PURE__ */ jsx29("img", { src: file.iconLink, alt: "", className: "w-5 h-5" }) : folder ? /* @__PURE__ */ jsx29(FolderIcon, {}) : /* @__PURE__ */ jsx29(FileIcon, { mimeType: file.mimeType })
          }
        ),
        /* @__PURE__ */ jsxs29("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx29("div", { className: "text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis text-foreground", children: file.name }),
          /* @__PURE__ */ jsx29("div", { className: "text-xs text-muted-foreground", children: getFileTypeName(file.mimeType) })
        ] }),
        /* @__PURE__ */ jsx29("div", { className: "text-xs text-muted-foreground min-w-20 text-right", children: formatFileSize(file.size) }),
        /* @__PURE__ */ jsx29("div", { className: "text-xs text-muted-foreground min-w-24 text-right", children: formatDate(file.modifiedTime) }),
        /* @__PURE__ */ jsxs29("div", { className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200", children: [
          file.starred && /* @__PURE__ */ jsx29("span", { className: "text-[#fbbf24]", children: /* @__PURE__ */ jsx29(StarIcon, { filled: true }) }),
          file.shared && /* @__PURE__ */ jsx29("span", { className: "text-muted-foreground", children: /* @__PURE__ */ jsx29(ShareIcon, {}) }),
          file.webViewLink && /* @__PURE__ */ jsx29(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                window.open(file.webViewLink, "_blank");
              },
              className: cn(
                "flex items-center justify-center p-2 rounded-lg",
                "text-muted-foreground hover:bg-white/10 hover:text-foreground",
                "bg-transparent border-0 cursor-pointer transition-colors"
              ),
              title: "Apri in Drive",
              children: /* @__PURE__ */ jsx29(ExternalLinkIcon, {})
            }
          )
        ] })
      ]
    }
  );
});

// src/data-display/DriveFileList/component.tsx
import { jsx as jsx30, jsxs as jsxs30 } from "react/jsx-runtime";
var DriveFileList = memo31(function DriveFileList2({
  element,
  children
}) {
  const {
    title,
    description,
    files: initialFiles,
    viewMode: initialViewMode = "list"
  } = element.props;
  const [viewMode, setViewMode] = useState12(initialViewMode);
  const files = initialFiles || [];
  const sortedFiles = [...files].sort((a, b) => {
    const aFolder = isFolder(a.mimeType);
    const bFolder = isFolder(b.mimeType);
    if (aFolder && !bFolder) return -1;
    if (!aFolder && bFolder) return 1;
    return a.name.localeCompare(b.name);
  });
  const handleOpenFile = (file) => {
    if (file.webViewLink) {
      window.open(file.webViewLink, "_blank");
    }
  };
  return /* @__PURE__ */ jsxs30("div", { className: "card-glass w-full h-full min-h-[400px] flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxs30("div", { className: "flex justify-between items-center p-5 border-b border-white/10 bg-black/20", children: [
      /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx30("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-500/20", children: /* @__PURE__ */ jsx30(DriveIcon, {}) }),
        /* @__PURE__ */ jsxs30("div", { children: [
          /* @__PURE__ */ jsx30("h3", { className: "m-0 text-base font-semibold text-foreground", children: title || "Google Drive" }),
          description && /* @__PURE__ */ jsx30("div", { className: "text-xs text-muted-foreground mt-0.5", children: description })
        ] })
      ] }),
      /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs30("span", { className: "text-xs text-muted-foreground px-2.5 py-1 bg-white/5 rounded-full", children: [
          files.length,
          " element",
          files.length !== 1 ? "i" : "o"
        ] }),
        /* @__PURE__ */ jsxs30("div", { className: "flex gap-1 p-1 bg-black/20 rounded-xl", children: [
          /* @__PURE__ */ jsx30(
            "button",
            {
              onClick: () => setViewMode("grid"),
              className: cn(
                "flex items-center justify-center p-2 rounded-lg border-0 cursor-pointer transition-all",
                viewMode === "grid" ? "bg-white/10 text-foreground" : "bg-transparent text-muted-foreground hover:bg-white/5"
              ),
              title: "Vista griglia",
              children: /* @__PURE__ */ jsx30(GridIcon, {})
            }
          ),
          /* @__PURE__ */ jsx30(
            "button",
            {
              onClick: () => setViewMode("list"),
              className: cn(
                "flex items-center justify-center p-2 rounded-lg border-0 cursor-pointer transition-all",
                viewMode === "list" ? "bg-white/10 text-foreground" : "bg-transparent text-muted-foreground hover:bg-white/5"
              ),
              title: "Vista lista",
              children: /* @__PURE__ */ jsx30(ListIcon2, {})
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx30("div", { className: "flex-1 overflow-auto", children: files.length === 0 ? /* @__PURE__ */ jsxs30("div", { className: "p-16 text-center text-muted-foreground", children: [
      /* @__PURE__ */ jsx30("div", { className: "text-5xl mb-4 opacity-30", children: "\u{1F4C1}" }),
      /* @__PURE__ */ jsx30("div", { className: "text-lg font-medium mb-2", children: "Nessun file" }),
      /* @__PURE__ */ jsx30("div", { className: "text-sm opacity-70", children: "Questa cartella \xE8 vuota" })
    ] }) : viewMode === "grid" ? /* @__PURE__ */ jsx30(
      motion28.div,
      {
        layout: true,
        className: "grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 p-5",
        children: /* @__PURE__ */ jsx30(AnimatePresence7, { children: sortedFiles.map((file) => /* @__PURE__ */ jsx30(
          FileGridCard,
          {
            file,
            onOpen: handleOpenFile
          },
          file.id
        )) })
      }
    ) : /* @__PURE__ */ jsxs30("div", { children: [
      /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-3.5 px-5 py-2.5 border-b border-white/5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: [
        /* @__PURE__ */ jsx30("div", { className: "w-10" }),
        /* @__PURE__ */ jsx30("div", { className: "flex-1", children: "Nome" }),
        /* @__PURE__ */ jsx30("div", { className: "min-w-20 text-right", children: "Dimensione" }),
        /* @__PURE__ */ jsx30("div", { className: "min-w-24 text-right", children: "Modificato" }),
        /* @__PURE__ */ jsx30("div", { className: "w-20" })
      ] }),
      /* @__PURE__ */ jsx30(AnimatePresence7, { children: sortedFiles.map((file) => /* @__PURE__ */ jsx30(
        FileListRow,
        {
          file,
          onOpen: handleOpenFile
        },
        file.id
      )) })
    ] }) }),
    children
  ] });
});

// src/data-display/Weather/component.tsx
import { memo as memo32 } from "react";
import { motion as motion29 } from "framer-motion";

// src/utils/media-utils.ts
function formatBytes(bytes) {
  if (!bytes || bytes <= 0) return "-";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(value >= 10 ? 0 : 1)} ${units[unitIndex]}`;
}
function formatDuration(seconds) {
  if (!seconds || seconds <= 0) return "-";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  if (hours > 0) {
    return `${hours}:${String(remMins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${mins}:${String(secs).padStart(2, "0")}`;
}
function getStatusTone(status) {
  switch (status) {
    case "ready":
      return "success";
    case "failed":
      return "danger";
    case "generating":
    default:
      return "warning";
  }
}
function getProgressPercent(progress) {
  if (!progress) return 0;
  if (progress <= 1) return Math.round(progress * 100);
  return Math.round(progress);
}
function buildStatusLabel(status) {
  switch (status) {
    case "ready":
      return "Ready";
    case "failed":
      return "Failed";
    case "generating":
    default:
      return "Generating";
  }
}
function getAccentColor(accentColor) {
  return accentColor ?? "var(--primary)";
}

// src/data-display/Weather/component.tsx
import { CloudSun } from "lucide-react";
import { jsx as jsx31, jsxs as jsxs31 } from "react/jsx-runtime";
var getIcon = (condition, icon) => {
  if (icon && (icon.startsWith("http") || icon.startsWith("data:"))) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      /* @__PURE__ */ jsx31("img", { src: icon, alt: condition, className: "w-8 h-8 object-contain" })
    );
  }
  const lower = condition.toLowerCase();
  if (lower.includes("sun") || lower.includes("clear")) return "\u2600\uFE0F";
  if (lower.includes("partly") || lower.includes("cloud")) return "\u26C5";
  if (lower.includes("overcast") || lower.includes("cloud")) return "\u2601\uFE0F";
  if (lower.includes("rain") || lower.includes("drizzle")) return "\u{1F327}\uFE0F";
  if (lower.includes("storm") || lower.includes("thunder")) return "\u26A1";
  if (lower.includes("snow")) return "\u2744\uFE0F";
  if (lower.includes("fog") || lower.includes("mist")) return "\u{1F32B}\uFE0F";
  return "\u{1F321}\uFE0F";
};
var Weather = memo32(function Weather2({
  element,
  children
}) {
  const {
    location,
    current,
    forecastDaily = [],
    forecastHourly = [],
    accentColor
  } = element.props;
  const accent = getAccentColor(accentColor ?? void 0);
  if (!current) {
    return /* @__PURE__ */ jsxs31("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ jsx31(CloudSun, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ jsx31("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No weather data" })
    ] });
  }
  return /* @__PURE__ */ jsxs31(
    motion29.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      "data-selectable-item": true,
      "data-element-key": element.key,
      className: "flex flex-col gap-6 p-6 rounded-3xl border border-white/10 text-foreground relative overflow-hidden card-glass shadow-lg",
      style: {
        background: `linear-gradient(135deg, color-mix(in srgb, ${accent || "var(--primary)"}, transparent 92%) 0%, var(--card) 100%)`
      },
      children: [
        /* @__PURE__ */ jsxs31("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs31("div", { children: [
            /* @__PURE__ */ jsx31("div", { className: "text-2xl font-semibold mb-1", children: location }),
            /* @__PURE__ */ jsx31("div", { className: "text-sm text-muted-foreground capitalize", children: current.condition }),
            /* @__PURE__ */ jsxs31("div", { className: "text-6xl font-bold leading-none mt-3", children: [
              Math.round(current.temp),
              "\xB0"
            ] })
          ] }),
          /* @__PURE__ */ jsx31("div", { className: "text-5xl", children: getIcon(current.condition) })
        ] }),
        /* @__PURE__ */ jsxs31("div", { className: "grid grid-cols-3 gap-3", children: [
          current.windSpeed != null && /* @__PURE__ */ jsxs31("div", { className: "bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1", children: [
            /* @__PURE__ */ jsx31("span", { className: "text-xl", children: "\u{1F4A8}" }),
            /* @__PURE__ */ jsxs31("span", { className: "text-sm font-medium", children: [
              current.windSpeed,
              " km/h"
            ] }),
            /* @__PURE__ */ jsx31("span", { className: "text-[10px] text-muted-foreground", children: "Wind" })
          ] }),
          current.humidity != null && /* @__PURE__ */ jsxs31("div", { className: "bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1", children: [
            /* @__PURE__ */ jsx31("span", { className: "text-xl", children: "\u{1F4A7}" }),
            /* @__PURE__ */ jsxs31("span", { className: "text-sm font-medium", children: [
              current.humidity,
              "%"
            ] }),
            /* @__PURE__ */ jsx31("span", { className: "text-[10px] text-muted-foreground", children: "Humidity" })
          ] }),
          current.feelsLike != null && /* @__PURE__ */ jsxs31("div", { className: "bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1", children: [
            /* @__PURE__ */ jsx31("span", { className: "text-xl", children: "\u{1F321}\uFE0F" }),
            /* @__PURE__ */ jsxs31("span", { className: "text-sm font-medium", children: [
              Math.round(current.feelsLike),
              "\xB0"
            ] }),
            /* @__PURE__ */ jsx31("span", { className: "text-[10px] text-muted-foreground", children: "Feels Like" })
          ] })
        ] }),
        forecastHourly && forecastHourly.length > 0 && /* @__PURE__ */ jsxs31("div", { children: [
          /* @__PURE__ */ jsx31("div", { className: "text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider", children: "Hourly Forecast" }),
          /* @__PURE__ */ jsx31("div", { className: "flex gap-4 overflow-x-auto pb-4 -mb-4 scrollbar-hide", children: forecastHourly.map((hour, i) => /* @__PURE__ */ jsxs31(
            "div",
            {
              className: "flex flex-col items-center gap-2 min-w-[50px] p-2 rounded-lg hover:bg-white/5 transition-colors",
              children: [
                /* @__PURE__ */ jsx31("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: new Date(hour.time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                }) }),
                /* @__PURE__ */ jsx31("span", { className: "text-2xl", children: getIcon(hour.condition, hour.icon) }),
                /* @__PURE__ */ jsxs31("span", { className: "text-sm font-semibold", children: [
                  Math.round(hour.temp),
                  "\xB0"
                ] })
              ]
            },
            i
          )) })
        ] }),
        forecastDaily && forecastDaily.length > 0 && /* @__PURE__ */ jsxs31("div", { children: [
          /* @__PURE__ */ jsx31("div", { className: "text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider", children: "5-Day Forecast" }),
          /* @__PURE__ */ jsx31("div", { className: "flex flex-col gap-2", children: forecastDaily.map((day, i) => /* @__PURE__ */ jsxs31(
            "div",
            {
              className: "flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors",
              children: [
                /* @__PURE__ */ jsx31("div", { className: "w-16 font-medium", children: new Date(day.date).toLocaleDateString([], {
                  weekday: "short"
                }) }),
                /* @__PURE__ */ jsxs31("div", { className: "flex items-center gap-3 flex-1 justify-center", children: [
                  /* @__PURE__ */ jsx31("span", { className: "text-xl", children: getIcon(day.condition, day.icon) }),
                  /* @__PURE__ */ jsx31("span", { className: "text-xs text-muted-foreground capitalize hidden sm:block", children: day.condition })
                ] }),
                /* @__PURE__ */ jsxs31("div", { className: "flex gap-4 w-24 justify-end", children: [
                  /* @__PURE__ */ jsxs31("span", { className: "font-semibold", children: [
                    Math.round(day.tempMax),
                    "\xB0"
                  ] }),
                  /* @__PURE__ */ jsxs31("span", { className: "text-muted-foreground", children: [
                    Math.round(day.tempMin),
                    "\xB0"
                  ] })
                ] })
              ]
            },
            i
          )) })
        ] }),
        children
      ]
    }
  );
});

// src/data-display/DocumentIndex/component.tsx
import { memo as memo33, useState as useState13, useCallback as useCallback4 } from "react";
import { motion as motion30, AnimatePresence as AnimatePresence8 } from "framer-motion";
import {
  FileText as FileText2,
  ChevronRight as ChevronRight2,
  ChevronDown as ChevronDown4,
  Loader2,
  CheckCircle2 as CheckCircle22,
  AlertCircle as AlertCircle2,
  BookOpen as BookOpen2,
  Hash
} from "lucide-react";
import { jsx as jsx32, jsxs as jsxs32 } from "react/jsx-runtime";
var STATUS_CONFIG = {
  idle: { label: "Ready", icon: FileText2, color: "text-muted-foreground" },
  parsing: { label: "Parsing PDF", icon: Loader2, color: "text-blue-400" },
  analyzing: {
    label: "Analyzing structure",
    icon: Loader2,
    color: "text-purple-400"
  },
  building: {
    label: "Building index",
    icon: Loader2,
    color: "text-amber-400"
  },
  complete: { label: "Complete", icon: CheckCircle22, color: "text-green-400" },
  error: { label: "Error", icon: AlertCircle2, color: "text-red-400" }
};
var LOADING_STATUSES = /* @__PURE__ */ new Set([
  "parsing",
  "analyzing",
  "building"
]);
var DocumentIndex = memo33(function DocumentIndex2({
  element,
  children
}) {
  const props = element.props;
  const {
    fileName,
    status = "idle",
    message,
    progress,
    pageCount,
    currentPage,
    description,
    nodes,
    error
  } = props;
  const currentStatus = status || "idle";
  const config = STATUS_CONFIG[currentStatus];
  const StatusIcon = config.icon;
  const isLoading = LOADING_STATUSES.has(currentStatus);
  return /* @__PURE__ */ jsxs32("div", { className: "flex flex-col gap-4 w-full", children: [
    /* @__PURE__ */ jsxs32("div", { className: "flex flex-col gap-3 p-4 rounded-xl border border-white/10 card-glass", children: [
      /* @__PURE__ */ jsxs32("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxs32("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ jsx32("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx32(BookOpen2, { size: 20, className: "text-primary" }) }),
          /* @__PURE__ */ jsxs32("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx32("h4", { className: "text-sm font-semibold text-foreground truncate m-0", children: fileName }),
            description && /* @__PURE__ */ jsx32("p", { className: "text-xs text-muted-foreground line-clamp-1 mt-0.5 m-0", children: description })
          ] })
        ] }),
        /* @__PURE__ */ jsxs32(
          "div",
          {
            className: `flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.color} bg-white/5`,
            children: [
              /* @__PURE__ */ jsx32(StatusIcon, { size: 12, className: isLoading ? "animate-spin" : "" }),
              /* @__PURE__ */ jsx32("span", { children: config.label })
            ]
          }
        )
      ] }),
      isLoading && /* @__PURE__ */ jsxs32("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxs32("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx32("span", { children: message || "Processing..." }),
          progress != null && /* @__PURE__ */ jsxs32("span", { children: [
            Math.round(progress),
            "%"
          ] }),
          currentPage != null && pageCount != null && /* @__PURE__ */ jsxs32("span", { children: [
            "Page ",
            currentPage,
            " / ",
            pageCount
          ] })
        ] }),
        /* @__PURE__ */ jsx32("div", { className: "h-1.5 bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx32(
          motion30.div,
          {
            className: "h-full bg-primary/60 rounded-full",
            initial: { width: 0 },
            animate: {
              width: progress != null ? `${progress}%` : "30%"
            },
            transition: { duration: 0.3 },
            style: progress == null ? {
              animation: "indeterminate 1.5s infinite ease-in-out"
            } : void 0
          }
        ) })
      ] }),
      error && /* @__PURE__ */ jsx32("div", { className: "px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400", children: error }),
      nodes && nodes.length > 0 && /* @__PURE__ */ jsxs32("div", { className: "mt-2 border-t border-white/5 pt-3", children: [
        /* @__PURE__ */ jsxs32("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsx32(Hash, { size: 14, className: "text-muted-foreground" }),
          /* @__PURE__ */ jsx32("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Document Structure" }),
          pageCount && /* @__PURE__ */ jsxs32("span", { className: "text-xs text-muted-foreground/60", children: [
            "(",
            pageCount,
            " pages)"
          ] })
        ] }),
        /* @__PURE__ */ jsx32("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsx32(AnimatePresence8, { mode: "popLayout", children: nodes.map((node, idx) => /* @__PURE__ */ jsx32(IndexNode, { node, depth: 0 }, node.id || idx)) }) })
      ] }),
      currentStatus === "complete" && (!nodes || nodes.length === 0) && /* @__PURE__ */ jsxs32("div", { className: "py-8 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl", children: [
        /* @__PURE__ */ jsx32(FileText2, { className: "w-10 h-10 opacity-20 mb-3" }),
        /* @__PURE__ */ jsx32("p", { className: "text-xs uppercase tracking-widest opacity-50 m-0", children: "No structure found" })
      ] })
    ] }),
    children
  ] });
});
var IndexNode = memo33(function IndexNode2({
  node,
  depth
}) {
  const [expanded, setExpanded] = useState13(depth < 2);
  const hasChildren = node.children && node.children.length > 0;
  const paddingLeft = depth * 16 + 8;
  const handleToggle = useCallback4(() => {
    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
  }, [hasChildren]);
  const handleKeyDown = useCallback4(
    (e) => {
      if ((e.key === "Enter" || e.key === " ") && hasChildren) {
        e.preventDefault();
        setExpanded((prev) => !prev);
      }
    },
    [hasChildren]
  );
  return /* @__PURE__ */ jsxs32(
    motion30.div,
    {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
      transition: { duration: 0.2 },
      children: [
        /* @__PURE__ */ jsxs32(
          "div",
          {
            role: hasChildren ? "button" : void 0,
            tabIndex: hasChildren ? 0 : void 0,
            onClick: handleToggle,
            onKeyDown: handleKeyDown,
            "aria-expanded": hasChildren ? expanded : void 0,
            className: `w-full flex items-center gap-2 py-1.5 px-2 rounded-md text-left
          ${hasChildren ? "hover:bg-white/5 cursor-pointer" : "cursor-default"}
          transition-colors group`,
            style: { paddingLeft },
            children: [
              /* @__PURE__ */ jsx32("span", { className: "w-4 h-4 flex items-center justify-center shrink-0", children: hasChildren ? expanded ? /* @__PURE__ */ jsx32(ChevronDown4, { size: 14, className: "text-muted-foreground" }) : /* @__PURE__ */ jsx32(ChevronRight2, { size: 14, className: "text-muted-foreground" }) : /* @__PURE__ */ jsx32("span", { className: "w-1.5 h-1.5 rounded-full bg-white/20" }) }),
              /* @__PURE__ */ jsx32(
                "span",
                {
                  className: `flex-1 text-sm truncate ${depth === 0 ? "font-medium text-foreground" : "text-foreground/80"}`,
                  children: node.title
                }
              ),
              (node.startPage != null || node.endPage != null) && /* @__PURE__ */ jsx32("span", { className: "text-xs text-muted-foreground/60 shrink-0 tabular-nums", children: node.startPage != null && node.endPage != null ? node.startPage === node.endPage ? `p.${node.startPage}` : `p.${node.startPage}-${node.endPage}` : node.startPage != null ? `p.${node.startPage}+` : `p.${node.endPage}` })
            ]
          }
        ),
        /* @__PURE__ */ jsx32(AnimatePresence8, { children: node.summary && expanded && /* @__PURE__ */ jsx32(
          motion30.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "text-xs text-muted-foreground/70 leading-relaxed pb-1",
            style: { paddingLeft: paddingLeft + 24, paddingRight: 8 },
            children: node.summary
          }
        ) }),
        /* @__PURE__ */ jsx32(AnimatePresence8, { children: expanded && hasChildren && /* @__PURE__ */ jsx32(
          motion30.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.2 },
            children: node.children.map((child, idx) => /* @__PURE__ */ jsx32(IndexNode2, { node: child, depth: depth + 1 }, child.id || idx))
          }
        ) })
      ]
    }
  );
});

// src/media/Audio/component.tsx
import { memo as memo34 } from "react";
import { motion as motion31 } from "framer-motion";
import { Music } from "lucide-react";
import { jsx as jsx33, jsxs as jsxs33 } from "react/jsx-runtime";
var Audio = memo34(function Audio2({
  element,
  children
}) {
  const {
    title,
    tracks = [],
    accentColor
  } = element.props;
  const accent = getAccentColor(accentColor ?? void 0);
  if (!tracks || tracks.length === 0) {
    return /* @__PURE__ */ jsxs33("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ jsx33(Music, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ jsx33("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No audio tracks" })
    ] });
  }
  return /* @__PURE__ */ jsxs33("div", { className: "flex flex-col gap-4", children: [
    title && /* @__PURE__ */ jsx33("h3", { className: "m-0 text-lg font-semibold", children: title }),
    /* @__PURE__ */ jsx33("div", { className: "flex flex-col gap-3", children: tracks.map((track, index) => {
      const status = track.status ?? "ready";
      const progress = getProgressPercent(track.progress);
      const tone = getStatusTone(status);
      const statusLabel = buildStatusLabel(status);
      return /* @__PURE__ */ jsxs33(
        motion31.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          "data-selectable-item": true,
          "data-element-key": element.key,
          "data-item-id": track.id ?? `${index}`,
          className: "card-glass p-4 flex flex-col gap-2.5 hover:shadow-2xl",
          children: [
            /* @__PURE__ */ jsxs33("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx33("div", { className: "text-[15px] font-semibold text-foreground", children: track.title ?? "Untitled" }),
              /* @__PURE__ */ jsxs33("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsx33(
                  "span",
                  {
                    className: cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border",
                      {
                        "bg-white/10 text-foreground border-white/10": tone === "default",
                        "bg-emerald-500/15 text-emerald-500 border-emerald-500/20": tone === "success",
                        "bg-amber-500/15 text-amber-500 border-amber-500/20": tone === "warning",
                        "bg-rose-500/15 text-rose-500 border-rose-500/20": tone === "danger"
                      }
                    ),
                    children: statusLabel
                  }
                ),
                track.duration && /* @__PURE__ */ jsx33("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border border-white/10 bg-white/10 text-foreground", children: formatDuration(track.duration) })
              ] })
            ] }),
            /* @__PURE__ */ jsx33(
              "audio",
              {
                controls: true,
                src: track.src ?? void 0,
                className: "w-full mt-1 accent-[var(--accent-color,var(--primary))]",
                style: {
                  "--accent-color": accent !== "var(--primary)" ? accent : void 0
                }
              }
            ),
            status === "generating" && /* @__PURE__ */ jsxs33("div", { className: "flex flex-col gap-1.5 mt-1", children: [
              /* @__PURE__ */ jsxs33("div", { className: "text-xs text-muted-foreground", children: [
                "Rendering ",
                progress,
                "%"
              ] }),
              /* @__PURE__ */ jsx33("div", { className: "h-1.5 w-full rounded-full bg-muted/20 overflow-hidden", children: /* @__PURE__ */ jsx33(
                motion31.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${progress}%` },
                  className: "h-full rounded-full bg-[var(--progress-color,var(--primary))]",
                  style: {
                    "--progress-color": accent !== "var(--primary)" ? accent : void 0
                  }
                }
              ) })
            ] }),
            track.prompt && /* @__PURE__ */ jsx33("div", { className: "text-xs text-muted-foreground/80 mt-1", children: track.prompt }),
            /* @__PURE__ */ jsxs33("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground font-medium mt-1", children: [
              track.speaker && /* @__PURE__ */ jsxs33("span", { children: [
                "Voice:",
                " ",
                /* @__PURE__ */ jsx33("span", { className: "text-foreground", children: track.speaker })
              ] }),
              track.style && /* @__PURE__ */ jsxs33("span", { children: [
                "Style:",
                " ",
                /* @__PURE__ */ jsx33("span", { className: "text-foreground", children: track.style })
              ] })
            ] })
          ]
        },
        track.id ?? `${track.title ?? "track"}-${index}`
      );
    }) }),
    children
  ] });
});

// src/media/Video/component.tsx
import { memo as memo36 } from "react";
import { motion as motion33 } from "framer-motion";
import { Video as VideoIcon } from "lucide-react";

// src/media/Video/components/video-utils.ts
function detectVideoEmbed2(url) {
  if (!url) return null;
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/
  ];
  for (const pattern of youtubePatterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return {
        provider: "youtube",
        videoId: match[1],
        embedUrl: `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`
      };
    }
  }
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch?.[1]) {
    return {
      provider: "vimeo",
      videoId: vimeoMatch[1],
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?byline=0&portrait=0`
    };
  }
  const dailymotionPatterns = [
    /dailymotion\.com\/video\/([a-zA-Z0-9]+)/,
    /dai\.ly\/([a-zA-Z0-9]+)/
  ];
  for (const pattern of dailymotionPatterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return {
        provider: "dailymotion",
        videoId: match[1],
        embedUrl: `https://www.dailymotion.com/embed/video/${match[1]}`
      };
    }
  }
  const twitchClipMatch = url.match(/twitch\.tv\/\w+\/clip\/([a-zA-Z0-9_-]+)/);
  if (twitchClipMatch?.[1]) {
    return {
      provider: "twitch",
      videoId: twitchClipMatch[1],
      embedUrl: `https://clips.twitch.tv/embed?clip=${twitchClipMatch[1]}&parent=${typeof window !== "undefined" ? window.location.hostname : "localhost"}`
    };
  }
  const twitchVideoMatch = url.match(/twitch\.tv\/videos\/(\d+)/);
  if (twitchVideoMatch?.[1]) {
    return {
      provider: "twitch",
      videoId: twitchVideoMatch[1],
      embedUrl: `https://player.twitch.tv/?video=${twitchVideoMatch[1]}&parent=${typeof window !== "undefined" ? window.location.hostname : "localhost"}`
    };
  }
  const tiktokMatch = url.match(
    /tiktok\.com\/@[\w.-]+\/video\/(\d+)|tiktok\.com\/t\/([a-zA-Z0-9]+)/
  );
  if (tiktokMatch?.[1] || tiktokMatch?.[2]) {
    const videoId = tiktokMatch[1] || tiktokMatch[2];
    return {
      provider: "tiktok",
      videoId,
      embedUrl: `https://www.tiktok.com/embed/v2/${videoId}`
    };
  }
  const twitterMatch = url.match(/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)/);
  if (twitterMatch?.[1]) {
    return {
      provider: "twitter",
      videoId: twitterMatch[1],
      embedUrl: `https://platform.twitter.com/embed/Tweet.html?id=${twitterMatch[1]}`
    };
  }
  return null;
}
function getVideoSource(video) {
  if (video.location?.embedUrl) {
    return {
      type: "embed",
      url: video.location.embedUrl,
      embedUrl: video.location.embedUrl,
      provider: video.location.provider ?? "custom"
    };
  }
  const videoAny = video;
  const src = video.location?.src || video.location?.streamUrl || video.source || videoAny.url || videoAny.link || videoAny.videoUrl || videoAny.embedUrl || "";
  const embedInfo = detectVideoEmbed2(src);
  if (embedInfo) {
    return {
      type: "embed",
      url: src,
      embedUrl: embedInfo.embedUrl,
      provider: embedInfo.provider
    };
  }
  if (video.location?.streamUrl) {
    return {
      type: "stream",
      url: video.location.streamUrl
    };
  }
  return {
    type: "direct",
    url: src
  };
}
function getIframeAttributes(provider) {
  const base = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  switch (provider) {
    case "youtube":
    case "vimeo":
    case "twitch":
      return `${base}; fullscreen`;
    case "tiktok":
    case "twitter":
      return base;
    default:
      return `${base}; fullscreen`;
  }
}
function getProviderInfo(provider) {
  switch (provider) {
    case "youtube":
      return { name: "YouTube", color: "#FF0000" };
    case "vimeo":
      return { name: "Vimeo", color: "#1AB7EA" };
    case "dailymotion":
      return { name: "Dailymotion", color: "#00AAFF" };
    case "twitch":
      return { name: "Twitch", color: "#9146FF" };
    case "tiktok":
      return { name: "TikTok", color: "#000000" };
    case "twitter":
      return { name: "X", color: "#1DA1F2" };
    default:
      return { name: "Video", color: "#666666" };
  }
}

// src/media/Video/components/video-card.tsx
import { memo as memo35 } from "react";
import { motion as motion32 } from "framer-motion";
import { jsx as jsx34, jsxs as jsxs34 } from "react/jsx-runtime";
var VideoPlayer = memo35(function VideoPlayer2({
  video,
  status,
  statusTone,
  statusLabel,
  videoSource
}) {
  const isEmbed = videoSource.type === "embed";
  const isStreaming = status === "generating" && videoSource.type === "stream";
  const providerInfo = getProviderInfo(videoSource.provider);
  const placeholder = video.poster || "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80";
  return /* @__PURE__ */ jsxs34("div", { className: "relative bg-black min-h-[280px]", children: [
    /* @__PURE__ */ jsxs34("div", { className: "absolute top-4 left-4 flex gap-2 z-[2] pointer-events-none", children: [
      /* @__PURE__ */ jsx34(
        "span",
        {
          className: cn(
            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md",
            {
              "bg-white/10 text-white border-white/10": statusTone === "default",
              "bg-green-500/20 text-green-400 border-green-500/30": statusTone === "success",
              "bg-yellow-500/20 text-yellow-400 border-yellow-500/30": statusTone === "warning",
              "bg-red-500/20 text-red-400 border-red-500/30": statusTone === "danger"
            }
          ),
          children: statusLabel
        }
      ),
      videoSource.provider && /* @__PURE__ */ jsx34(
        "span",
        {
          className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md bg-[color-mix(in_srgb,var(--provider-color),transparent_86%)] text-[var(--provider-color)] border-[color-mix(in_srgb,var(--provider-color),transparent_73%)]",
          style: { "--provider-color": providerInfo.color },
          children: providerInfo.name
        }
      )
    ] }),
    isEmbed && videoSource.embedUrl ? /* @__PURE__ */ jsx34(
      "iframe",
      {
        title: video.title ?? "Embedded video",
        src: videoSource.embedUrl,
        className: "w-full h-full min-h-[280px] border-0 block",
        allow: getIframeAttributes(videoSource.provider),
        allowFullScreen: true,
        loading: "lazy"
      }
    ) : /* @__PURE__ */ jsx34(
      "video",
      {
        controls: true,
        muted: status === "generating",
        poster: placeholder,
        className: "w-full h-full min-h-[280px] object-cover bg-black",
        preload: "metadata",
        children: videoSource.url && /* @__PURE__ */ jsx34("source", { src: videoSource.url })
      }
    ),
    isStreaming && /* @__PURE__ */ jsx34("div", { className: "absolute inset-0 flex items-center justify-center bg-black/40 text-white font-semibold text-sm backdrop-blur-sm", children: "Streaming video..." })
  ] });
});
var VideoMetadataPanel = memo35(function VideoMetadataPanel2({
  video,
  elementKey,
  index,
  status,
  progress,
  accent
}) {
  const metaItems = [];
  if (video.resolution)
    metaItems.push({ label: "Resolution", value: video.resolution });
  if (video.fps) metaItems.push({ label: "FPS", value: `${video.fps}` });
  if (video.codec) metaItems.push({ label: "Codec", value: video.codec });
  if (video.duration)
    metaItems.push({
      label: "Duration",
      value: formatDuration(video.duration)
    });
  if (video.sizeBytes)
    metaItems.push({
      label: "File",
      value: formatBytes(video.sizeBytes)
    });
  return /* @__PURE__ */ jsxs34(
    "div",
    {
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": video.id ?? `${index}`,
      className: "p-[18px] flex flex-col gap-3 h-full",
      children: [
        /* @__PURE__ */ jsxs34("div", { children: [
          /* @__PURE__ */ jsx34("div", { className: "text-base font-semibold text-foreground", children: video.title ?? "Untitled video" }),
          video.caption && /* @__PURE__ */ jsx34("div", { className: "text-[13px] text-muted-foreground mt-1 leading-snug", children: video.caption })
        ] }),
        status === "generating" && /* @__PURE__ */ jsxs34("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsxs34("div", { className: "text-xs text-muted-foreground", children: [
            "Rendering ",
            progress,
            "%"
          ] }),
          /* @__PURE__ */ jsx34("div", { className: "h-1.5 w-full rounded-full bg-muted/20 overflow-hidden", children: /* @__PURE__ */ jsx34(
            motion32.div,
            {
              initial: { width: 0 },
              animate: { width: `${progress}%` },
              className: "h-full rounded-full transition-all duration-200 ease-out bg-[var(--progress-color,var(--primary))]",
              style: {
                "--progress-color": accent !== "var(--primary)" ? accent : void 0
              }
            }
          ) })
        ] }),
        video.metadata?.prompt && /* @__PURE__ */ jsx34("div", { className: "bg-white/5 border border-white/5 rounded-xl px-3 py-2.5 text-xs text-muted-foreground/90 leading-relaxed", children: video.metadata.prompt }),
        /* @__PURE__ */ jsx34("div", { className: "grid grid-cols-2 gap-3 mt-auto", children: metaItems.map((meta) => /* @__PURE__ */ jsxs34("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ jsx34("span", { className: "text-[11px] text-muted-foreground uppercase tracking-wider font-semibold opacity-70", children: meta.label }),
          /* @__PURE__ */ jsx34("span", { className: "text-[13px] text-foreground font-semibold", children: meta.value })
        ] }, meta.label)) }),
        (video.tags?.length ?? 0) > 0 && /* @__PURE__ */ jsx34("div", { className: "flex flex-wrap gap-1.5 mt-2", children: video.tags?.map((tag) => {
          const tone = tag.tone ?? "default";
          return /* @__PURE__ */ jsx34(
            "span",
            {
              className: cn(
                "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border",
                {
                  "bg-white/5 text-muted-foreground border-white/10": tone === "default",
                  "bg-green-500/10 text-green-500 border-green-500/20": tone === "success",
                  "bg-yellow-500/10 text-yellow-500 border-yellow-500/20": tone === "warning",
                  "bg-red-500/10 text-red-500 border-red-500/20": tone === "danger"
                }
              ),
              children: tag.label
            },
            tag.label
          );
        }) }),
        video.transcript && /* @__PURE__ */ jsx34(
          "div",
          {
            className: "text-xs text-muted-foreground pl-2.5 border-l-2 py-1 italic leading-relaxed border-l-[color:var(--accent-color,var(--primary))]",
            style: { "--accent-color": accent },
            children: video.transcript
          }
        ),
        /* @__PURE__ */ jsxs34("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground mt-2 pt-2 border-t border-white/5", children: [
          video.author && /* @__PURE__ */ jsxs34("span", { children: [
            "Author: ",
            /* @__PURE__ */ jsx34("span", { className: "text-foreground/80", children: video.author })
          ] }),
          video.license && /* @__PURE__ */ jsxs34("span", { children: [
            "License: ",
            /* @__PURE__ */ jsx34("span", { className: "text-foreground/80", children: video.license })
          ] }),
          video.createdAt && /* @__PURE__ */ jsx34("span", { children: video.createdAt })
        ] })
      ]
    }
  );
});

// src/media/Video/component.tsx
import { jsx as jsx35, jsxs as jsxs35 } from "react/jsx-runtime";
var Video = memo36(function Video2({
  element,
  children
}) {
  const { title, videos = [], accentColor } = element.props;
  const accent = getAccentColor(accentColor ?? void 0);
  if (!videos || videos.length === 0) {
    return /* @__PURE__ */ jsxs35("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ jsx35(VideoIcon, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ jsx35("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No videos available" })
    ] });
  }
  return /* @__PURE__ */ jsxs35("div", { className: "flex flex-col gap-4", children: [
    title && /* @__PURE__ */ jsx35("h3", { className: "m-0 text-lg font-semibold", children: title }),
    /* @__PURE__ */ jsx35("div", { className: "flex flex-col gap-4", children: videos.map((video, index) => {
      const status = video.status?.status ?? "ready";
      const progress = getProgressPercent(video.status?.progress);
      const statusTone = getStatusTone(status);
      const statusLabel = buildStatusLabel(status);
      const videoSource = getVideoSource(video);
      return /* @__PURE__ */ jsxs35(
        motion33.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          className: "grid grid-cols-1 md:grid-cols-[2fr_1.3fr] gap-0 overflow-hidden rounded-[18px] border border-white/10 bg-zinc-900 shadow-2xl bg-[linear-gradient(135deg,rgba(24,24,27,0.9)_0%,rgba(9,9,11,0.95)_100%)]",
          children: [
            /* @__PURE__ */ jsx35(
              VideoPlayer,
              {
                video,
                status,
                statusTone,
                statusLabel,
                videoSource
              }
            ),
            /* @__PURE__ */ jsx35(
              VideoMetadataPanel,
              {
                video,
                elementKey: element.key,
                index,
                status,
                progress,
                accent
              }
            )
          ]
        },
        video.id ?? `${video.title ?? "video"}-${index}`
      );
    }) }),
    children
  ] });
});

// src/media/Image/component.tsx
import { memo as memo37 } from "react";
import { motion as motion34 } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { jsx as jsx36, jsxs as jsxs36 } from "react/jsx-runtime";
var Image = memo37(function Image2({
  element,
  children
}) {
  const {
    title,
    images = [],
    accentColor
  } = element.props;
  const accent = getAccentColor(accentColor ?? void 0);
  if (!images || images.length === 0) {
    return /* @__PURE__ */ jsxs36("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ jsx36(ImageIcon, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ jsx36("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No images available" })
    ] });
  }
  return /* @__PURE__ */ jsxs36("div", { className: "flex flex-col gap-4", children: [
    title && /* @__PURE__ */ jsx36("h3", { className: "m-0 text-lg font-semibold", children: title }),
    /* @__PURE__ */ jsx36("div", { className: "grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4", children: images.map((image, index) => {
      const status = image.status?.status ?? "ready";
      const progress = getProgressPercent(image.status?.progress);
      const statusTone = getStatusTone(status);
      const statusLabel = buildStatusLabel(status);
      const isStreaming = status === "generating" && !!image.location?.streamUrl;
      const imageSrc = image.source;
      if (!imageSrc) {
        return null;
      }
      const metaItems = [];
      if (image.format)
        metaItems.push({ label: "Format", value: image.format });
      if (image.width && image.height) {
        metaItems.push({
          label: "Size",
          value: `${image.width}\xD7${image.height}`
        });
      }
      if (image.sizeBytes) {
        metaItems.push({
          label: "File",
          value: formatBytes(image.sizeBytes)
        });
      }
      if (image.metadata?.model) {
        metaItems.push({ label: "Model", value: image.metadata.model });
      }
      if (image.metadata?.style) {
        metaItems.push({ label: "Style", value: image.metadata.style });
      }
      return /* @__PURE__ */ jsxs36(
        motion34.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          "data-selectable-item": true,
          "data-element-key": element.key,
          "data-item-id": image.id ?? `${index}`,
          className: "flex flex-col min-w-0 overflow-hidden rounded-[18px] border border-white/10 bg-zinc-900 shadow-2xl transition-all bg-[linear-gradient(135deg,rgba(24,24,27,0.9)_0%,rgba(9,9,11,0.95)_100%)]",
          children: [
            /* @__PURE__ */ jsxs36("div", { className: "relative", children: [
              status !== "ready" && /* @__PURE__ */ jsx36("div", { className: "absolute top-4 left-4 flex gap-2 items-center z-[2]", children: /* @__PURE__ */ jsx36(
                "span",
                {
                  className: cn(
                    "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md",
                    {
                      "bg-white/10 text-white border-white/10": statusTone === "default",
                      "bg-emerald-500/20 text-emerald-400 border-emerald-500/30": statusTone === "success",
                      "bg-amber-500/20 text-amber-400 border-amber-500/30": statusTone === "warning",
                      "bg-rose-500/20 text-rose-400 border-rose-500/30": statusTone === "danger"
                    }
                  ),
                  children: statusLabel
                }
              ) }),
              /* @__PURE__ */ jsx36(
                "img",
                {
                  src: imageSrc,
                  alt: image.alt ?? image.title ?? "AI generated image",
                  className: cn("w-full h-[220px] object-cover block", {
                    "opacity-40": status === "failed"
                  })
                }
              ),
              isStreaming && /* @__PURE__ */ jsx36("div", { className: "absolute inset-0 flex items-center justify-center bg-black/45 text-white text-sm font-semibold backdrop-blur-sm", children: "Streaming preview..." })
            ] }),
            /* @__PURE__ */ jsxs36("div", { className: "p-4 flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxs36("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsx36("div", { className: "text-[15px] font-semibold text-foreground", children: image.title || image.caption || image.alt || "" }),
                image.caption && /* @__PURE__ */ jsx36("div", { className: "text-[13px] text-muted-foreground line-clamp-2", children: image.caption })
              ] }),
              status === "generating" && /* @__PURE__ */ jsxs36("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxs36("div", { className: "text-xs text-muted-foreground", children: [
                  "Rendering ",
                  progress,
                  "%"
                ] }),
                /* @__PURE__ */ jsx36("div", { className: "h-1.5 w-full rounded-full bg-muted/20 overflow-hidden", children: /* @__PURE__ */ jsx36(
                  motion34.div,
                  {
                    initial: { width: 0 },
                    animate: { width: `${progress}%` },
                    className: "h-full rounded-full bg-[var(--progress-color,var(--primary))]",
                    style: {
                      "--progress-color": accent !== "var(--primary)" ? accent : void 0
                    }
                  }
                ) })
              ] }),
              image.status?.errorMessage && /* @__PURE__ */ jsx36("div", { className: "text-xs text-destructive", children: image.status.errorMessage }),
              image.metadata?.prompt && /* @__PURE__ */ jsx36("div", { className: "bg-white/5 border border-white/5 rounded-xl px-3 py-2.5 text-xs text-muted-foreground/90 font-medium leading-relaxed line-clamp-3", children: image.metadata.prompt }),
              /* @__PURE__ */ jsx36("div", { className: "grid grid-cols-2 gap-3 mt-auto", children: metaItems.map((meta) => /* @__PURE__ */ jsxs36("div", { className: "flex flex-col gap-0.5", children: [
                /* @__PURE__ */ jsx36("span", { className: "text-[11px] text-muted-foreground uppercase tracking-wider font-semibold opacity-70", children: meta.label }),
                /* @__PURE__ */ jsx36("span", { className: "text-[13px] text-foreground font-semibold truncate", children: meta.value })
              ] }, meta.label)) }),
              (image.tags?.length ?? 0) > 0 && /* @__PURE__ */ jsx36("div", { className: "flex flex-wrap gap-1.5 mt-1", children: image.tags?.map((tag) => {
                const tone = tag.tone ?? "default";
                return /* @__PURE__ */ jsx36(
                  "span",
                  {
                    className: cn(
                      "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border",
                      {
                        "bg-white/5 text-muted-foreground border-white/10": tone === "default",
                        "bg-emerald-500/10 text-emerald-500 border-emerald-500/20": tone === "success",
                        "bg-amber-500/10 text-amber-500 border-amber-500/20": tone === "warning",
                        "bg-rose-500/10 text-rose-500 border-rose-500/20": tone === "danger"
                      }
                    ),
                    children: tag.label
                  },
                  tag.label
                );
              }) }),
              /* @__PURE__ */ jsxs36("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground mt-2 pt-2 border-t border-white/5", children: [
                image.author && /* @__PURE__ */ jsxs36("span", { children: [
                  "Author: ",
                  image.author
                ] }),
                image.license && /* @__PURE__ */ jsxs36("span", { children: [
                  "License: ",
                  image.license
                ] }),
                image.createdAt && /* @__PURE__ */ jsx36("span", { children: image.createdAt })
              ] })
            ] })
          ]
        },
        image.id ?? `${image.title ?? "image"}-${index}`
      );
    }) }),
    children
  ] });
});

// src/media/Gallery/component.tsx
import { memo as memo38 } from "react";
import { motion as motion35 } from "framer-motion";
import { Images } from "lucide-react";
import { jsx as jsx37, jsxs as jsxs37 } from "react/jsx-runtime";
var Gallery = memo38(function Gallery2({
  element,
  children
}) {
  const {
    title,
    items = [],
    accentColor
  } = element.props;
  const accent = getAccentColor(accentColor ?? void 0);
  if (!items || items.length === 0) {
    return /* @__PURE__ */ jsxs37("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ jsx37(Images, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ jsx37("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No images in gallery" })
    ] });
  }
  return /* @__PURE__ */ jsxs37("div", { className: "flex flex-col gap-4", children: [
    title && /* @__PURE__ */ jsx37("h3", { className: "m-0 text-lg font-semibold", children: title }),
    /* @__PURE__ */ jsx37("div", { className: "grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3", children: items.map((item, index) => {
      const status = item.status ?? "ready";
      const statusLabel = buildStatusLabel(status);
      const statusTone = getStatusTone(status);
      const progress = getProgressPercent(item.progress);
      return /* @__PURE__ */ jsxs37(
        motion35.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: index * 0.05 },
          "data-selectable-item": true,
          "data-element-key": element.key,
          "data-item-id": item.id ?? `${index}`,
          className: "rounded-2xl overflow-hidden border border-[color:color-mix(in_srgb,var(--accent-color,var(--border)),transparent_86%)] card-glass relative min-h-[160px] hover:shadow-xl",
          style: {
            "--accent-color": accent
          },
          children: [
            /* @__PURE__ */ jsx37(
              "img",
              {
                src: item.src ?? "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
                alt: item.title ?? "AI image",
                className: "w-full h-[180px] object-cover"
              }
            ),
            /* @__PURE__ */ jsxs37("div", { className: "absolute top-3 left-3 flex gap-1.5 z-[2]", children: [
              /* @__PURE__ */ jsx37(
                "span",
                {
                  className: cn(
                    "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md",
                    {
                      "bg-white/10 text-white border-white/10": statusTone === "default",
                      "bg-emerald-500/20 text-emerald-400 border-emerald-500/30": statusTone === "success",
                      "bg-amber-500/20 text-amber-400 border-amber-500/30": statusTone === "warning",
                      "bg-rose-500/20 text-rose-400 border-rose-500/30": statusTone === "danger"
                    }
                  ),
                  children: statusLabel
                }
              ),
              status === "generating" && /* @__PURE__ */ jsxs37("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md bg-white/10 text-white border-white/10", children: [
                progress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxs37("div", { className: "p-3 flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsx37("div", { className: "font-semibold text-[13px] text-foreground truncate", children: item.title ?? "Untitled" }),
              item.prompt && /* @__PURE__ */ jsx37("div", { className: "text-xs text-muted-foreground line-clamp-2", children: item.prompt }),
              item.tags && item.tags.length > 0 && /* @__PURE__ */ jsx37("div", { className: "flex flex-wrap gap-1.5 mt-1", children: item.tags.map((tag) => {
                const tone = tag.tone ?? "default";
                return /* @__PURE__ */ jsx37(
                  "span",
                  {
                    className: cn(
                      "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border",
                      {
                        "bg-white/5 text-muted-foreground border-white/10": tone === "default",
                        "bg-emerald-500/10 text-emerald-500 border-emerald-500/20": tone === "success",
                        "bg-amber-500/10 text-amber-500 border-amber-500/20": tone === "warning",
                        "bg-rose-500/10 text-rose-500 border-rose-500/20": tone === "danger"
                      }
                    ),
                    children: tag.label
                  },
                  tag.label
                );
              }) })
            ] })
          ]
        },
        item.id ?? `${item.title ?? "image"}-${index}`
      );
    }) }),
    children
  ] });
});
export {
  Alert,
  AlertDefinition,
  AlertPropsSchema,
  Audio,
  AudioDefinition,
  AudioPropsSchema,
  Badge,
  BadgeDefinition,
  BadgePropsSchema,
  BrowserAction,
  BrowserActionDefinition,
  BrowserActionPropsSchema,
  Button,
  ButtonDefinition,
  ButtonPropsSchema,
  Card,
  CardDefinition,
  CardPropsSchema,
  CodeBlock,
  CodeBlockDefinition,
  CodeBlockPropsSchema,
  DatePicker,
  DatePickerDefinition,
  DatePickerPropsSchema,
  Divider,
  DividerDefinition,
  DividerPropsSchema,
  Document,
  DocumentDefinition,
  DocumentIndex,
  DocumentIndexDefinition,
  DocumentIndexPropsSchema,
  DocumentPropsSchema,
  DriveFile,
  DriveFileDefinition,
  DriveFileList,
  DriveFileListDefinition,
  DriveFileListSchema,
  DriveFilePropsSchema,
  Empty,
  EmptyDefinition,
  EmptyPropsSchema,
  Gallery,
  GalleryDefinition,
  GalleryPropsSchema,
  Grid,
  GridDefinition,
  GridPropsSchema,
  Heading,
  HeadingDefinition,
  HeadingPropsSchema,
  Image,
  ImageDefinition,
  ImagePropsSchema,
  List,
  ListDefinition,
  ListPropsSchema,
  Metric,
  MetricDefinition,
  MetricPropsSchema,
  SearchResultItemSchema,
  SearchResults,
  SearchResultsDefinition,
  SearchResultsPropsSchema,
  Select,
  SelectDefinition,
  SelectPropsSchema,
  Stack,
  StackDefinition,
  StackPropsSchema,
  Table,
  TableDefinition,
  TablePropsSchema,
  Text,
  TextDefinition,
  TextField,
  TextFieldDefinition,
  TextFieldPropsSchema,
  TextPropsSchema,
  Timeline,
  TimelineDefinition,
  TimelinePropsSchema,
  Video,
  VideoDefinition,
  VideoPropsSchema,
  Weather,
  WeatherDefinition,
  WeatherPropsSchema,
  cn
};
//# sourceMappingURL=index.mjs.map