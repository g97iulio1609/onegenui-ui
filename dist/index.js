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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  AlertDefinition: () => AlertDefinition,
  AlertPropsSchema: () => AlertPropsSchema,
  Audio: () => Audio,
  AudioDefinition: () => AudioDefinition,
  AudioPropsSchema: () => AudioPropsSchema,
  Badge: () => Badge,
  BadgeDefinition: () => BadgeDefinition,
  BadgePropsSchema: () => BadgePropsSchema,
  BrowserAction: () => BrowserAction,
  BrowserActionDefinition: () => BrowserActionDefinition,
  BrowserActionPropsSchema: () => BrowserActionPropsSchema,
  Button: () => Button,
  ButtonDefinition: () => ButtonDefinition,
  ButtonPropsSchema: () => ButtonPropsSchema,
  Card: () => Card,
  CardDefinition: () => CardDefinition,
  CardPropsSchema: () => CardPropsSchema,
  CodeBlock: () => CodeBlock,
  CodeBlockDefinition: () => CodeBlockDefinition,
  CodeBlockPropsSchema: () => CodeBlockPropsSchema,
  DatePicker: () => DatePicker,
  DatePickerDefinition: () => DatePickerDefinition,
  DatePickerPropsSchema: () => DatePickerPropsSchema,
  Divider: () => Divider,
  DividerDefinition: () => DividerDefinition,
  DividerPropsSchema: () => DividerPropsSchema,
  Document: () => Document,
  DocumentDefinition: () => DocumentDefinition,
  DocumentIndex: () => DocumentIndex,
  DocumentIndexDefinition: () => DocumentIndexDefinition,
  DocumentIndexPropsSchema: () => DocumentIndexPropsSchema,
  DocumentPropsSchema: () => DocumentPropsSchema,
  DriveFile: () => DriveFile,
  DriveFileDefinition: () => DriveFileDefinition,
  DriveFileList: () => DriveFileList,
  DriveFileListDefinition: () => DriveFileListDefinition,
  DriveFileListSchema: () => DriveFileListSchema,
  DriveFilePropsSchema: () => DriveFilePropsSchema,
  Empty: () => Empty,
  EmptyDefinition: () => EmptyDefinition,
  EmptyPropsSchema: () => EmptyPropsSchema,
  Gallery: () => Gallery,
  GalleryDefinition: () => GalleryDefinition,
  GalleryPropsSchema: () => GalleryPropsSchema,
  Grid: () => Grid,
  GridDefinition: () => GridDefinition,
  GridPropsSchema: () => GridPropsSchema,
  Heading: () => Heading,
  HeadingDefinition: () => HeadingDefinition,
  HeadingPropsSchema: () => HeadingPropsSchema,
  Image: () => Image,
  ImageDefinition: () => ImageDefinition,
  ImagePropsSchema: () => ImagePropsSchema,
  List: () => List,
  ListDefinition: () => ListDefinition,
  ListPropsSchema: () => ListPropsSchema,
  Metric: () => Metric,
  MetricDefinition: () => MetricDefinition,
  MetricPropsSchema: () => MetricPropsSchema,
  SearchResultItemSchema: () => SearchResultItemSchema,
  SearchResults: () => SearchResults,
  SearchResultsDefinition: () => SearchResultsDefinition,
  SearchResultsPropsSchema: () => SearchResultsPropsSchema,
  Select: () => Select,
  SelectDefinition: () => SelectDefinition,
  SelectPropsSchema: () => SelectPropsSchema,
  Stack: () => Stack,
  StackDefinition: () => StackDefinition,
  StackPropsSchema: () => StackPropsSchema,
  Table: () => Table,
  TableDefinition: () => TableDefinition,
  TablePropsSchema: () => TablePropsSchema,
  Text: () => Text,
  TextDefinition: () => TextDefinition,
  TextField: () => TextField,
  TextFieldDefinition: () => TextFieldDefinition,
  TextFieldPropsSchema: () => TextFieldPropsSchema,
  TextPropsSchema: () => TextPropsSchema,
  Timeline: () => Timeline,
  TimelineDefinition: () => TimelineDefinition,
  TimelinePropsSchema: () => TimelinePropsSchema,
  Video: () => Video,
  VideoDefinition: () => VideoDefinition,
  VideoPropsSchema: () => VideoPropsSchema,
  Weather: () => Weather,
  WeatherDefinition: () => WeatherDefinition,
  WeatherPropsSchema: () => WeatherPropsSchema,
  cn: () => import_utils.cn
});
module.exports = __toCommonJS(index_exports);

// src/utils/cn.ts
var import_utils = require("@onegenui/utils");

// src/layout/Card/component.tsx
var import_react = require("react");
var import_framer_motion = require("framer-motion");
var import_jsx_runtime = require("react/jsx-runtime");
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
var Card = (0, import_react.memo)(function Card2({
  element,
  children
}) {
  const { title, description, padding } = element.props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_framer_motion.motion.div,
    {
      variants: cardVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.3, ease: "easeOut" },
      className: "card-glass w-full min-w-0 flex flex-col",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-bar-thin opacity-20" }),
        (title || description) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-1 p-4 sm:p-5 lg:p-6 pb-3 sm:pb-4 border-b border-white/5 bg-white/[0.02]", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-base sm:text-lg font-bold leading-tight tracking-tight text-foreground", children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
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

// src/layout/Grid/component.tsx
var import_react2 = require("react");
var import_framer_motion2 = require("framer-motion");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
var Grid = (0, import_react2.memo)(function Grid2({
  element,
  children
}) {
  const { columns, gap } = element.props;
  const containerRef = (0, import_react2.useRef)(null);
  const [forceSingleColumn, setForceSingleColumn] = (0, import_react2.useState)(false);
  const gapClass = (0, import_react2.useMemo)(
    () => GAP_CLASSES[gap || "md"] || GAP_CLASSES.md,
    [gap]
  );
  const evaluateLayout = (0, import_react2.useCallback)(() => {
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
  (0, import_react2.useEffect)(() => {
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
  if (import_react2.Children.count(children) === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      import_framer_motion2.motion.div,
      {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        className: "py-8 sm:py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl sm:rounded-2xl bg-zinc-900/20 text-muted-foreground",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.LayoutGrid, { className: "w-8 h-8 sm:w-10 sm:h-10 opacity-20 mb-2 sm:mb-3" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "font-mono text-[0.625rem] sm:text-xs uppercase tracking-widest opacity-50", children: "Empty Grid" })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_framer_motion2.motion.div,
    {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      ref: containerRef,
      className: (0, import_utils.cn)(
        "grid w-full min-w-0 max-w-full items-stretch justify-items-stretch",
        // Mobile-first: 1 column, then responsive based on content
        forceSingleColumn ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]",
        gapClass
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_framer_motion2.AnimatePresence, { mode: "popLayout", children: import_react2.Children.map(children, (child, index) => {
        const childKey = (0, import_react2.isValidElement)(child) ? child.key ?? `grid-item-${index}` : `grid-item-${index}`;
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_framer_motion2.motion.div,
          {
            variants: itemVariants,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            children: child
          },
          childKey
        );
      }) })
    }
  );
});

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

// src/layout/Stack/component.tsx
var import_react3 = require("react");
var import_framer_motion3 = require("framer-motion");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
var Stack = (0, import_react3.memo)(function Stack2({
  element,
  children
}) {
  const { direction, gap, align, wrap } = element.props;
  const containerRef = (0, import_react3.useRef)(null);
  const [forceVertical, setForceVertical] = (0, import_react3.useState)(false);
  const isHorizontal = direction === "horizontal";
  const shouldWrap = wrap !== false && isHorizontal;
  const evaluateLayout = (0, import_react3.useCallback)(() => {
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
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_framer_motion3.motion.div,
    {
      variants: stackVariants,
      initial: "hidden",
      animate: "visible",
      ref: containerRef,
      className: (0, import_utils.cn)(
        "flex w-full min-w-0 max-w-full",
        effectiveDirection,
        shouldWrap && !forceVertical ? "sm:flex-wrap" : "flex-nowrap",
        GAP_CLASSES2[gap || "md"] || GAP_CLASSES2.md,
        ALIGN_CLASSES[align || "stretch"] || ALIGN_CLASSES.stretch
      ),
      children
    }
  );
});

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

// src/layout/Divider/component.tsx
var import_react4 = require("react");
var import_framer_motion4 = require("framer-motion");
var import_jsx_runtime4 = require("react/jsx-runtime");
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
var Divider = (0, import_react4.memo)(function Divider2({
  element,
  children
}) {
  const { orientation, label } = element.props;
  if (orientation === "vertical") {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_framer_motion4.motion.div,
      {
        variants: verticalVariants,
        initial: "hidden",
        animate: "visible",
        transition: { duration: 0.3, ease: "easeOut" },
        className: "flex flex-col h-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-px bg-white/10 self-stretch h-full" }),
          children
        ]
      }
    );
  }
  if (label) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_framer_motion4.motion.div,
      {
        variants: labelledVariants,
        initial: "hidden",
        animate: "visible",
        transition: { duration: 0.3, ease: "easeOut" },
        className: "flex items-center gap-2 sm:gap-3 my-3 sm:my-4 w-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex-1 h-px bg-white/10" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-[0.5625rem] sm:text-[0.625rem] uppercase font-bold tracking-wider text-muted-foreground whitespace-nowrap", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex-1 h-px bg-white/10" }),
          children
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    import_framer_motion4.motion.div,
    {
      variants: horizontalVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.3, ease: "easeOut" },
      className: "w-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "divider-perforated" }),
        children
      ]
    }
  );
});

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

// src/typography/Heading/component.tsx
var import_react5 = require("react");
var import_framer_motion5 = require("framer-motion");
var import_jsx_runtime5 = require("react/jsx-runtime");
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
var Heading = (0, import_react5.memo)(function Heading2({
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
  const Tag = import_framer_motion5.motion.create(
    normalizedLevel
  );
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    Tag,
    {
      variants: headingVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.25, ease: "easeOut" },
      className: (0, import_utils.cn)(
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

// src/typography/Text/component.tsx
var import_react6 = require("react");
var import_framer_motion6 = require("framer-motion");
var import_jsx_runtime6 = require("react/jsx-runtime");
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
var Text = (0, import_react6.memo)(function Text2({
  element,
  children,
  renderText
}) {
  const { content, variant, color } = element.props;
  const render = renderText ?? ((value) => value);
  const resolvedVariant = variant || "body";
  const resolvedColor = color || "default";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_framer_motion6.motion.div,
    {
      variants: textVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.2 },
      className: (0, import_utils.cn)(
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

// src/typography/CodeBlock/component.tsx
var import_react7 = require("react");
var import_framer_motion7 = require("framer-motion");
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime7 = require("react/jsx-runtime");
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
var CodeBlock = (0, import_react7.memo)(function CodeBlock2({
  element,
  children
}) {
  const { title, snippets = [] } = element.props;
  const [expandedId, setExpandedId] = (0, import_react7.useState)(null);
  if (!snippets || snippets.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-muted-foreground text-xs sm:text-sm italic p-3 sm:p-4", children: "No code snippets" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    import_framer_motion7.motion.div,
    {
      variants: containerVariants2,
      initial: "hidden",
      animate: "visible",
      className: "flex flex-col gap-3 sm:gap-4",
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-base sm:text-lg font-semibold tracking-tight m-0", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex flex-col gap-2 sm:gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_framer_motion7.AnimatePresence, { mode: "popLayout", children: snippets.map((snippet, index) => {
          const snippetId = snippet.id ?? `${index}`;
          const isExpanded = expandedId === snippetId;
          return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
            import_framer_motion7.motion.div,
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
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setExpandedId(isExpanded ? null : snippetId),
                    className: (0, import_utils.cn)(
                      "w-full flex items-center justify-between p-3 sm:p-4 text-left border-0 bg-transparent cursor-pointer transition-colors hover:bg-white/5 min-h-[2.75rem]",
                      isExpanded && "bg-white/5"
                    ),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 text-foreground truncate", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Code2, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "truncate", children: snippet.title ?? "Untitled snippet" })
                        ] }),
                        snippet.summary && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-[0.625rem] sm:text-xs text-muted-foreground line-clamp-1", children: snippet.summary })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "hidden sm:inline text-[0.5625rem] sm:text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground bg-white/5 px-1.5 sm:px-2 py-0.5 rounded-full border border-white/10", children: snippet.language ?? "Code" }),
                        isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.ChevronUp, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.ChevronDown, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_framer_motion7.AnimatePresence, { children: isExpanded && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  import_framer_motion7.motion.div,
                  {
                    variants: expandVariants,
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    transition: { duration: 0.2 },
                    className: "relative border-t border-white/10 bg-black/20",
                    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("pre", { className: "m-0 p-3 sm:p-4 text-[0.625rem] sm:text-xs overflow-x-auto font-mono leading-relaxed text-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("code", { children: snippet.content }) })
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

// src/typography/CodeBlock/schema.ts
var import_zod7 = require("zod");
var CodeBlockPropsSchema = import_zod7.z.object({});
var CodeBlockDefinition = {
  name: "CodeBlock",
  props: CodeBlockPropsSchema,
  description: "CodeBlock component",
  hasChildren: true
};

// src/typography/Document/component.tsx
var import_react8 = require("react");
var import_framer_motion8 = require("framer-motion");
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var containerVariants3 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};
var itemVariants3 = {
  hidden: { opacity: 0, y: "0.625rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-0.625rem" }
};
var Document = (0, import_react8.memo)(function Document2({
  element,
  children,
  renderText
}) {
  const { title, documents = [] } = element.props;
  const render = renderText ?? ((value) => value);
  if (!documents || documents.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      import_framer_motion8.motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/10 card-glass",
        children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-base sm:text-lg font-semibold tracking-tight m-0", children: render(title, { inline: true }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col gap-2 sm:gap-3 animate-pulse", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "h-3 sm:h-4 bg-white/10 rounded w-3/4" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "h-3 sm:h-4 bg-white/5 rounded w-1/2" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "h-3 sm:h-4 bg-white/5 rounded w-2/3" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-[0.625rem] sm:text-xs text-muted-foreground italic", children: "Document content is loading or was not provided by the AI..." })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    import_framer_motion8.motion.div,
    {
      variants: containerVariants3,
      initial: "hidden",
      animate: "visible",
      className: "flex flex-col gap-3 sm:gap-4",
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-base sm:text-lg font-semibold tracking-tight m-0", children: render(title, { inline: true }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex flex-col gap-3 sm:gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_framer_motion8.AnimatePresence, { mode: "popLayout", children: documents.map((rawDoc, index) => {
          const doc = {
            ...rawDoc,
            sections: rawDoc.sections?.length ? rawDoc.sections : rawDoc.content ? [{ title: "Overview", content: rawDoc.content }] : []
          };
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            import_framer_motion8.motion.div,
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
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex-1 space-y-1 min-w-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.FileText, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem] text-primary/70 flex-shrink-0" }),
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "text-sm sm:text-base font-semibold leading-tight text-foreground truncate", children: render(doc.title, { inline: true }) })
                    ] }),
                    doc.summary && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none", children: render(doc.summary) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "text-[0.625rem] sm:text-xs text-muted-foreground flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0", children: [
                    doc.author && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.User, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3" }),
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: doc.author })
                    ] }),
                    doc.createdAt && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5 opacity-80", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.Calendar, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3" }),
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: doc.createdAt })
                    ] })
                  ] })
                ] }),
                doc.sections && doc.sections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex flex-col gap-3 sm:gap-4 mt-1 sm:mt-2 pl-2 sm:pl-1 border-l-2 border-white/10 ml-1 sm:ml-2", children: doc.sections.map((section, sectionIndex) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
                  "div",
                  {
                    className: "pl-3 sm:pl-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h5", { className: "text-xs sm:text-sm font-semibold mb-1 text-foreground", children: render(section.title, { inline: true }) }),
                      section.content && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-xs sm:text-sm text-muted-foreground leading-relaxed", children: render(section.content) }),
                      section.highlights && section.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("ul", { className: "mt-1.5 sm:mt-2 list-disc list-outside pl-3 sm:pl-4 space-y-0.5 sm:space-y-1", children: section.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
                doc.tags && doc.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex flex-wrap gap-1.5 sm:gap-2 mt-0.5 sm:mt-1", children: doc.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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

// src/status/Badge/component.tsx
var import_react9 = require("react");
var import_react10 = require("@onegenui/react");
var import_framer_motion9 = require("framer-motion");

// src/utils/data-utils.ts
var import_utils2 = require("@onegenui/utils");

// src/status/Badge/component.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
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
var Badge = (0, import_react9.memo)(function Badge2({
  element,
  children
}) {
  const { text, variant } = element.props;
  const { data } = (0, import_react10.useData)();
  const resolvedText = (0, import_utils2.resolveValueProp)(data, text ?? null);
  const tone = variant ?? "default";
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    import_framer_motion9.motion.span,
    {
      variants: badgeVariants,
      initial: "hidden",
      animate: "visible",
      whileHover: "hover",
      className: (0, import_utils.cn)(
        "inline-flex items-center gap-1 sm:gap-1.5 transition-all text-[0.5625rem] sm:text-[0.625rem]",
        STATUS_CLASSES[tone] || STATUS_CLASSES.default
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "span",
          {
            className: (0, import_utils.cn)(
              "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0",
              DOT_CLASSES[tone] || DOT_CLASSES.default
            )
          }
        ),
        resolvedText,
        children
      ]
    }
  );
});

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

// src/status/Alert/component.tsx
var import_react11 = require("react");
var import_react12 = require("@onegenui/react");
var import_framer_motion10 = require("framer-motion");
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var alertVariants = {
  hidden: { opacity: 0, height: 0, marginBottom: 0 },
  visible: { opacity: 1, height: "auto", marginBottom: "1rem" },
  exit: { opacity: 0, height: 0, marginBottom: 0 }
};
var ICON_MAP = {
  info: import_lucide_react4.Info,
  success: import_lucide_react4.CheckCircle2,
  warning: import_lucide_react4.AlertTriangle,
  error: import_lucide_react4.AlertCircle
};
var TONE_CLASSES = {
  info: "bg-blue-500/10 border-blue-500/20 text-blue-500",
  success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
  warning: "bg-amber-500/10 border-amber-500/20 text-amber-500",
  error: "bg-rose-500/10 border-rose-500/20 text-rose-500"
};
var Alert = (0, import_react11.memo)(function Alert2({
  element,
  children
}) {
  const { type, variant, title, message, dismissible } = element.props;
  const { data } = (0, import_react12.useData)();
  const resolvedMessage = (0, import_utils2.resolveValueProp)(data, message ?? null);
  const [dismissed, setDismissed] = (0, import_react11.useState)(false);
  const tone = type ?? variant ?? "info";
  const hasMessage = resolvedMessage !== void 0 && resolvedMessage !== null;
  const Icon = ICON_MAP[tone] || import_lucide_react4.Info;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_framer_motion10.AnimatePresence, { children: !dismissed && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_framer_motion10.motion.div,
    {
      variants: alertVariants,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      transition: { duration: 0.2 },
      className: (0, import_utils.cn)(
        "relative w-full rounded-lg sm:rounded-xl border p-3 sm:p-4 text-xs sm:text-sm shadow-lg backdrop-blur-md overflow-hidden",
        TONE_CLASSES[tone] || TONE_CLASSES.info
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex gap-2 sm:gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { className: "w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex-1 space-y-0.5 sm:space-y-1 min-w-0", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h5", { className: "font-semibold leading-tight tracking-tight text-xs sm:text-sm", children: title }),
          hasMessage && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "text-xs sm:text-sm opacity-90 leading-relaxed", children: String(resolvedMessage) }),
          children
        ] }),
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            onClick: () => setDismissed(true),
            className: (0, import_utils.cn)(
              "absolute top-2 right-2 sm:top-3 sm:right-3 p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity",
              "hover:bg-black/5 dark:hover:bg-white/10 min-h-[2rem] min-w-[2rem] flex items-center justify-center"
            ),
            title: "Dismiss",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react4.X, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" })
          }
        )
      ] })
    }
  ) });
});

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

// src/status/Empty/component.tsx
var import_react13 = require("react");
var import_framer_motion11 = require("framer-motion");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Empty = (0, import_react13.memo)(function Empty2({
  element,
  onAction,
  children
}) {
  const { title, description, action, actionLabel } = element.props;
  const resolvedAction = typeof action === "string" ? { name: action } : action ?? void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    import_framer_motion11.motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      className: "flex flex-col items-center justify-center p-10 text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "mb-2 text-base font-semibold tracking-tight text-foreground", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "m-0 text-sm text-muted-foreground", children: description }),
        resolvedAction && actionLabel && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "button",
          {
            onClick: () => onAction?.(resolvedAction),
            className: (0, import_utils.cn)("mt-4 btn-secondary"),
            children: actionLabel
          }
        ),
        children
      ]
    }
  );
});

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

// src/status/BrowserAction/component.tsx
var import_react14 = require("react");
var import_framer_motion12 = require("framer-motion");
var import_jsx_runtime12 = require("react/jsx-runtime");
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
var BrowserAction = (0, import_react14.memo)(function BrowserAction2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    import_framer_motion12.motion.div,
    {
      initial: { opacity: 0, y: 5 },
      animate: { opacity: 1, y: 0 },
      className: (0, import_utils.cn)(
        "flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm transition-opacity duration-300 border backdrop-blur-md",
        isError ? "bg-red-500/10 border-red-500/30 text-foreground" : "glass-surface text-foreground",
        isComplete ? "opacity-70" : "opacity-100"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-base", children: actionInfo.icon }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "span",
          {
            className: "font-medium min-w-20 text-[var(--action-color)]",
            style: {
              "--action-color": actionInfo.color
            },
            children: actionInfo.label
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground", children: displayText }),
        isError && error && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-destructive text-xs", children: error }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "span",
          {
            className: (0, import_utils.cn)(
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

// src/forms/Button/component.tsx
var import_react15 = require("react");
var import_framer_motion13 = require("framer-motion");
var import_jsx_runtime13 = require("react/jsx-runtime");
var buttonVariants = {
  tap: { scale: 0.95 },
  hover: { scale: 1.03 }
};
var SIZE_CLASSES = {
  sm: "min-h-[2.25rem] sm:h-8 px-2.5 sm:px-3 text-[0.625rem]",
  md: "min-h-[2.75rem] sm:h-9 px-3 sm:px-4 text-xs sm:text-sm",
  lg: "min-h-[3rem] sm:h-11 px-4 sm:px-8 text-sm"
};
var Button = (0, import_react15.memo)(function Button2({
  element,
  onAction,
  loading,
  children
}) {
  const { label, variant, size, action, actionParams, disabled } = element.props;
  const resolvedAction = typeof action === "string" ? { name: action, params: actionParams ?? void 0 } : action ?? void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    import_framer_motion13.motion.button,
    {
      variants: buttonVariants,
      whileTap: "tap",
      whileHover: "hover",
      onClick: () => !disabled && resolvedAction && onAction?.(resolvedAction),
      disabled: !!disabled || loading,
      className: (0, import_utils.cn)(
        "relative inline-flex items-center justify-center transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
        "active:scale-95 touch-manipulation",
        variant === "primary" || !variant ? "btn-primary" : variant === "secondary" ? "btn-secondary" : variant === "danger" ? "btn-accent bg-destructive hover:bg-destructive/90 shadow-destructive/20" : variant === "ghost" ? "btn-ghost" : "",
        SIZE_CLASSES[size || "md"]
      ),
      children: [
        variant === "primary" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" }),
        loading ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "mr-1.5 sm:mr-2 animate-spin text-[0.625rem] sm:text-xs", children: "\u23F3" }) : null,
        loading ? "Loading..." : label,
        !loading && children
      ]
    }
  );
});

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

// src/forms/TextField/component.tsx
var import_react16 = require("react");
var import_react17 = require("@onegenui/react");
var import_framer_motion14 = require("framer-motion");
var import_jsx_runtime14 = require("react/jsx-runtime");
var fieldVariants = {
  hidden: { opacity: 0, y: "0.3125rem" },
  visible: { opacity: 1, y: 0 }
};
var TextField = (0, import_react16.memo)(function TextField2({
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
    validateOn
  } = element.props;
  const { data, set } = (0, import_react17.useData)();
  const resolvedPath = bindPath ?? valuePath ?? null;
  const resolvedValue = (0, import_utils2.resolveValueProp)(
    data,
    value ?? null,
    resolvedPath
  );
  const shouldValidate = Boolean(resolvedPath);
  const { errors, validate, touch } = (0, import_react17.useFieldValidation)(
    resolvedPath ?? "__unbound__",
    {
      checks: shouldValidate ? checks ?? void 0 : void 0,
      validateOn: validateOn ?? "blur"
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_framer_motion14.motion.div,
    {
      variants: fieldVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.2 },
      className: "flex flex-col gap-1.5 sm:gap-2 w-full group",
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { className: "text-label text-[0.5625rem] sm:text-[0.625rem] group-focus-within:text-primary transition-colors duration-300", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "input",
            {
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
              className: (0, import_utils.cn)(
                "glass-surface flex min-h-[2.75rem] sm:h-10 w-full rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground shadow-sm transition-all duration-300",
                "hover:border-white/20 hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50",
                "placeholder:text-muted-foreground touch-manipulation",
                errors.length > 0 ? "border-destructive/50 focus-visible:ring-destructive/50 text-destructive" : ""
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "absolute top-0 right-0 p-1 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-1 h-1 sm:w-1.5 sm:h-1.5 border-t border-r border-primary rounded-tr-sm" }) })
        ] }),
        errors.map((error, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          "span",
          {
            className: "text-[0.5625rem] sm:text-[0.625rem] font-mono font-bold text-destructive flex items-center gap-1 sm:gap-1.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "w-1 h-1 bg-destructive rounded-full flex-shrink-0" }),
              " ",
              error
            ]
          },
          i
        )),
        children
      ]
    }
  );
});

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

// src/forms/Select/component.tsx
var import_react18 = require("react");
var import_react19 = require("@onegenui/react");
var import_framer_motion15 = require("framer-motion");
var import_jsx_runtime15 = require("react/jsx-runtime");
var selectVariants = {
  hidden: { opacity: 0, y: "0.3125rem" },
  visible: { opacity: 1, y: 0 }
};
var Select = (0, import_react18.memo)(function Select2({
  element,
  children
}) {
  const { label, bindPath, valuePath, value, options, placeholder } = element.props;
  const { data, set } = (0, import_react19.useData)();
  const resolvedPath = bindPath ?? valuePath ?? null;
  const resolvedValue = (0, import_utils2.resolveValueProp)(
    data,
    value ?? null,
    resolvedPath
  );
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    import_framer_motion15.motion.div,
    {
      variants: selectVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.2 },
      className: "flex flex-col gap-1 sm:gap-1.5 w-full",
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { className: "text-label text-[0.5625rem] sm:text-[0.625rem]", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          "select",
          {
            value: resolvedValue ?? "",
            onChange: (e) => resolvedPath && set(resolvedPath, e.target.value),
            className: (0, import_utils.cn)(
              "glass-surface flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground",
              "min-h-[2.75rem] sm:h-10",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
              "disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 appearance-none touch-manipulation",
              !resolvedValue && "text-muted-foreground"
            ),
            children: [
              placeholder && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "", disabled: true, children: placeholder }),
              options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
        children
      ]
    }
  );
});

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

// src/forms/DatePicker/component.tsx
var import_react20 = require("react");
var import_react21 = require("@onegenui/react");
var import_framer_motion16 = require("framer-motion");
var import_jsx_runtime16 = require("react/jsx-runtime");
var dateVariants = {
  hidden: { opacity: 0, y: "0.3125rem" },
  visible: { opacity: 1, y: 0 }
};
var DatePicker = (0, import_react20.memo)(function DatePicker2({
  element,
  children
}) {
  const { label, bindPath, valuePath, value, placeholder } = element.props;
  const { data, set } = (0, import_react21.useData)();
  const resolvedPath = bindPath ?? valuePath ?? null;
  const resolvedValue = (0, import_utils2.resolveValueProp)(
    data,
    value ?? null,
    resolvedPath
  );
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    import_framer_motion16.motion.div,
    {
      variants: dateVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.2 },
      className: "flex flex-col gap-1 sm:gap-1.5 w-full",
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "text-label text-[0.5625rem] sm:text-[0.625rem]", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "input",
          {
            type: "date",
            value: resolvedValue ?? "",
            placeholder: placeholder ?? "",
            onChange: (e) => resolvedPath && set(resolvedPath, e.target.value),
            className: (0, import_utils.cn)(
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

// src/data-display/Metric/component.tsx
var import_react22 = require("react");
var import_react23 = require("@onegenui/react");
var import_framer_motion17 = require("framer-motion");
var import_jsx_runtime17 = require("react/jsx-runtime");
var metricVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};
var Metric = (0, import_react22.memo)(function Metric2({
  element,
  children
}) {
  const { label, value, valuePath, format, trend, trendValue } = element.props;
  const { data } = (0, import_react23.useData)();
  const rawValue = (0, import_utils2.resolveValueProp)(data, value, valuePath);
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    import_framer_motion17.motion.div,
    {
      variants: metricVariants,
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.2 },
      className: "flex flex-col gap-0.5 sm:gap-1 w-full min-w-0",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-label text-[0.5625rem] sm:text-[0.625rem]", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-display text-xl sm:text-2xl", children: displayValue }),
        (trend || trendValue) && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "span",
          {
            className: (0, import_utils.cn)(
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

// src/data-display/Table/component.tsx
var import_react24 = require("react");
var import_react25 = require("@onegenui/react");
var import_framer_motion18 = require("framer-motion");
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var containerVariants4 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.02 } }
};
var rowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
var Table = (0, import_react24.memo)(function Table2({
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
  const { data } = (0, import_react25.useData)();
  const tableRows = (0, import_utils2.resolveArrayProp)(data, rows, dataPath);
  if (!tableRows || tableRows.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "w-full", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h4", { className: "mb-3 sm:mb-4 text-xs sm:text-sm font-semibold leading-none tracking-tight", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        import_framer_motion18.motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "py-8 sm:py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-lg sm:rounded-2xl bg-zinc-900/20 text-muted-foreground",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.Table, { className: "w-8 h-8 sm:w-10 sm:h-10 opacity-20 mb-2 sm:mb-3" }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "font-mono text-[0.625rem] sm:text-xs uppercase tracking-widest opacity-50", children: "No data available" })
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
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "inline-flex items-center rounded-full border px-2 sm:px-2.5 py-0.5 text-[0.625rem] sm:text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground", children: String(value) });
    }
    return String(value);
  };
  const renderRows = (rowsToRender, depth = 0) => rowsToRender.flatMap((row, index) => {
    const rowKey = typeof row.id === "string" ? row.id : `${depth}-${index}`;
    const subRows = Array.isArray(row.subRows) ? row.subRows : [];
    const renderedRow = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      import_framer_motion18.motion.tr,
      {
        variants: rowVariants,
        "data-selectable-item": true,
        "data-element-key": element.key,
        "data-item-id": rowKey,
        className: "border-b border-white/5 transition-colors hover:bg-white/5 data-[state=selected]:bg-white/10",
        children: columns.map((col, colIndex) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "td",
          {
            className: (0, import_utils.cn)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "w-full", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h4", { className: "mb-3 sm:mb-4 text-xs sm:text-sm font-semibold leading-none tracking-tight text-foreground", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "relative w-full overflow-x-auto rounded-lg sm:rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm -mx-1 px-1 sm:mx-0 sm:px-0", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      import_framer_motion18.motion.table,
      {
        variants: containerVariants4,
        initial: "hidden",
        animate: "visible",
        className: "w-full min-w-[20rem] caption-bottom text-xs sm:text-sm border-collapse",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("thead", { className: "[&_tr]:border-b border-white/10", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tr", { className: "border-b border-white/10 transition-colors", children: columns.map((col, index) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "th",
            {
              className: "h-10 sm:h-12 px-2.5 sm:px-4 text-left align-middle font-medium text-muted-foreground text-[0.625rem] sm:text-xs uppercase tracking-wider",
              children: col.label
            },
            col.key ?? `col-${index}`
          )) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tbody", { className: "[&_tr:last-child]:border-0", children: renderRows(tableRows) })
        ]
      }
    ) }),
    children
  ] });
});

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

// src/data-display/List/component.tsx
var import_react26 = require("react");
var import_react27 = require("@onegenui/react");
var import_framer_motion19 = require("framer-motion");
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var List = (0, import_react26.memo)(function List2({
  element,
  children
}) {
  const { items, dataPath, emptyMessage } = element.props;
  const { data } = (0, import_react27.useData)();
  const listData = (0, import_utils2.resolveArrayProp)(data, items, dataPath);
  if ((!listData || listData.length === 0) && !children) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.List, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: emptyMessage ?? "No items" })
    ] });
  }
  const renderItems = (itemsToRender, depth = 0) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "flex flex-col gap-2", children: itemsToRender.map((item, index) => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      import_framer_motion19.motion.div,
      {
        className: "flex flex-col",
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: index * 0.05 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
            "div",
            {
              "data-selectable-item": true,
              "data-element-key": element.key,
              "data-item-id": itemId,
              className: (0, import_utils.cn)(
                "flex items-center gap-2 px-3 py-2 rounded-lg",
                "bg-white/5 border border-white/10",
                "transition-colors hover:border-white/20 hover:bg-white/10"
              ),
              style: {
                marginLeft: `${depth * 16}px`
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "w-2 h-2 rounded-full bg-foreground/60 shrink-0" }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-sm font-medium truncate text-foreground", children: normalized.text }),
                  normalized.description && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-xs text-muted-foreground truncate", children: normalized.description })
                ] }),
                normalized.status && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-xs text-muted-foreground shrink-0", children: normalized.status })
              ]
            }
          ),
          subItems.length > 0 && renderItems(subItems, depth + 1)
        ]
      },
      itemId
    );
  }) });
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
    listData && listData.length > 0 && renderItems(listData),
    children
  ] });
});

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

// src/data-display/Timeline/component.tsx
var import_react28 = require("react");
var import_react29 = require("@onegenui/react");
var import_framer_motion20 = require("framer-motion");
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var Timeline = (0, import_react28.memo)(function Timeline2({
  element,
  children
}) {
  const { dataPath, items, titleKey, dateKey, descriptionKey, statusKey } = element.props;
  const { data } = (0, import_react29.useData)();
  const timelineData = (0, import_utils2.resolveArrayProp)(data, items, dataPath);
  if (!timelineData || timelineData.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react7.GitCommitVertical, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No timeline data" })
    ] });
  }
  const renderItems = (itemsToRender, depth = 0) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: (0, import_utils.cn)(depth === 0 ? "py-4" : "py-2"), children: itemsToRender.map((item, index) => {
    const titleValue = titleKey ? item[titleKey] : item.title;
    const dateValue = dateKey ? item[dateKey] : item.date;
    const descriptionValue = descriptionKey ? item[descriptionKey] : item.description;
    const statusValue = statusKey ? item[statusKey] : item.status;
    const titleText = (0, import_utils2.resolveString)(titleValue);
    const dateText = (0, import_utils2.resolveString)(dateValue);
    const descriptionText = (0, import_utils2.resolveString)(descriptionValue);
    const statusText = (0, import_utils2.resolveString)(statusValue);
    const isCompleted = statusText === "completed" || statusText === "done";
    const subItems = Array.isArray(item.subItems) ? item.subItems : [];
    const itemId = item.id || `item-${depth}-${index}`;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      import_framer_motion20.motion.div,
      {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: index * 0.1 },
        "data-selectable-item": true,
        "data-element-key": element.key,
        "data-item-id": itemId,
        className: (0, import_utils.cn)(
          "flex gap-4 mb-6 relative p-2 rounded-lg transition-all",
          "cursor-pointer hover:bg-white/5"
        ),
        style: {
          marginLeft: `${depth * 16}px`
        },
        children: [
          index !== itemsToRender.length - 1 && depth === 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "absolute left-[22px] top-8 -bottom-4 w-[2px] bg-white/10" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "div",
            {
              className: (0, import_utils.cn)(
                "w-3.5 h-3.5 rounded-full border-2 border-background ring-1 ring-white/10 mt-1.5 shrink-0 z-10",
                isCompleted ? "bg-primary" : "bg-zinc-700"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-between items-start mb-1 gap-2", children: [
              titleText && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "font-semibold text-sm text-foreground", children: titleText }),
              dateText && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "text-xs text-muted-foreground whitespace-nowrap", children: dateText })
            ] }),
            descriptionText && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "text-sm text-muted-foreground", children: descriptionText }),
            statusText && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/10 font-medium text-muted-foreground", children: statusText }) }),
            subItems.length > 0 && renderItems(subItems, depth + 1)
          ] })
        ]
      },
      itemId
    );
  }) });
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "w-full min-w-0 max-w-full", children: [
    renderItems(timelineData),
    children
  ] });
});

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

// src/data-display/SearchResults/component.tsx
var import_react37 = require("react");
var import_lucide_react13 = require("lucide-react");

// src/data-display/SearchResults/components/citation-link.tsx
var import_react30 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var CitationLink = (0, import_react30.memo)(function CitationLink2({
  id,
  sources
}) {
  const source = sources.find((s) => s.id === id);
  const [showPopover, setShowPopover] = (0, import_react30.useState)(false);
  const [popoverPosition, setPopoverPosition] = (0, import_react30.useState)(
    "bottom"
  );
  const buttonRef = (0, import_react30.useRef)(null);
  const popoverRef = (0, import_react30.useRef)(null);
  const updatePosition = (0, import_react30.useCallback)(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    setPopoverPosition(spaceBelow < 200 ? "top" : "bottom");
  }, []);
  (0, import_react30.useEffect)(() => {
    if (!showPopover) return;
    const handleClick2 = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
        setShowPopover(false);
      }
    };
    document.addEventListener("click", handleClick2);
    return () => document.removeEventListener("click", handleClick2);
  }, [showPopover]);
  if (!source) return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "text-primary/60", children: [
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "relative inline-block", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "button",
      {
        ref: buttonRef,
        onClick: handleClick,
        title: source.title,
        className: "inline-flex items-center justify-center min-w-4 h-4 px-1 text-[10px] font-medium bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors ml-0.5 cursor-pointer",
        children: id
      }
    ),
    showPopover && hasExcerpt && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      "div",
      {
        ref: popoverRef,
        className: `absolute z-50 w-72 max-w-[90vw] p-3 rounded-lg border border-white/10 bg-zinc-900/95 backdrop-blur-sm shadow-xl ${popoverPosition === "top" ? "bottom-full mb-2" : "top-full mt-2"} left-1/2 -translate-x-1/2`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "div",
            {
              className: `absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900/95 border-white/10 rotate-45 ${popoverPosition === "top" ? "bottom-[-5px] border-r border-b" : "top-[-5px] border-l border-t"}`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex items-center gap-2 mb-2 pb-2 border-b border-white/5", children: [
            source.pageNumber && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary shrink-0", children: [
              "p. ",
              source.pageNumber
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "text-xs font-medium text-foreground/80 truncate", children: source.title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { className: "text-xs text-foreground/70 leading-relaxed italic", children: [
            '"',
            source.excerpt || source.snippet,
            '"'
          ] }),
          isWebSource && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
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
var import_react31 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var TextWithCitations = (0, import_react31.memo)(function TextWithCitations2({
  text,
  sources
}) {
  const parts = text.split(/(\[\d+\])/g);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: parts.map((part, idx) => {
    const match = part.match(/\[(\d+)\]/);
    if (match) {
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CitationLink, { id: match[1], sources }, idx);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: part }, idx);
  }) });
});

// src/data-display/SearchResults/components/synthesis-section.tsx
var import_react32 = require("react");
var import_framer_motion21 = require("framer-motion");
var import_lucide_react8 = require("lucide-react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var SynthesisSection = (0, import_react32.memo)(function SynthesisSection2({
  synthesis,
  sources
}) {
  const [showAllKeyPoints, setShowAllKeyPoints] = (0, import_react32.useState)(false);
  const [expandedSections, setExpandedSections] = (0, import_react32.useState)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "mb-6 space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      import_framer_motion21.motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-violet-500/5 to-transparent border border-primary/10",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react8.BookOpen, { size: 14, className: "text-primary" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-sm font-semibold text-foreground", children: "AI Summary" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-sm text-foreground/90 leading-relaxed", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TextWithCitations, { text: synthesis.summary, sources }) })
        ]
      }
    ),
    synthesis.keyPoints && synthesis.keyPoints.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      import_framer_motion21.motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "p-4 rounded-xl bg-white/[0.02] border border-white/5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react8.Lightbulb, { size: 14, className: "text-amber-400" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-xs font-semibold text-foreground/80 uppercase tracking-wide", children: "Key Points" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("ul", { className: "space-y-2", children: visibleKeyPoints?.map((point, idx) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
            import_framer_motion21.motion.li,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: idx * 0.05 },
              className: "flex items-start gap-2 text-sm text-foreground/80",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "leading-relaxed", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TextWithCitations, { text: point.text, sources }) })
              ]
            },
            idx
          )) }),
          synthesis.keyPoints.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
            "button",
            {
              onClick: () => setShowAllKeyPoints(!showAllKeyPoints),
              className: "mt-3 text-xs text-primary/70 hover:text-primary transition-colors flex items-center gap-1",
              children: [
                showAllKeyPoints ? "Show less" : `Show all ${synthesis.keyPoints.length} points`,
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                  import_lucide_react8.ChevronDown,
                  {
                    size: 12,
                    className: (0, import_utils.cn)(
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
    synthesis.sections && synthesis.sections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "space-y-2", children: synthesis.sections.map((section, idx) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      import_framer_motion21.motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.15 + idx * 0.05 },
        className: "rounded-xl border border-white/5 overflow-hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
            "button",
            {
              onClick: () => toggleSection(idx),
              className: "w-full p-3 flex items-center justify-between text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-sm font-medium text-foreground/90", children: section.title }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                  import_lucide_react8.ChevronDown,
                  {
                    size: 14,
                    className: (0, import_utils.cn)(
                      "text-muted-foreground transition-transform",
                      expandedSections.has(idx) && "rotate-180"
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_framer_motion21.AnimatePresence, { children: expandedSections.has(idx) && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            import_framer_motion21.motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.2 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "p-4 pt-2 text-sm text-foreground/80 leading-relaxed", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
    synthesis.followUpQuestions && synthesis.followUpQuestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      import_framer_motion21.motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.25 },
        className: "p-4 rounded-xl bg-white/[0.02] border border-white/5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react8.MessageSquare, { size: 14, className: "text-blue-400" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-xs font-semibold text-foreground/80 uppercase tracking-wide", children: "Related Questions" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex flex-wrap gap-2", children: synthesis.followUpQuestions.map((question, idx) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
var import_react33 = require("react");
var import_framer_motion22 = require("framer-motion");
var import_lucide_react9 = require("lucide-react");

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
var import_jsx_runtime24 = require("react/jsx-runtime");
var MediaGallery = (0, import_react33.memo)(function MediaGallery2({
  items
}) {
  const [activeVideo, setActiveVideo] = (0, import_react33.useState)(null);
  if (!items || items.length === 0) return null;
  const handleVideoClick = (idx, item) => {
    if (item.type === "video") {
      setActiveVideo(activeVideo === idx ? null : idx);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3", children: items.map((item, idx) => {
    const isVideoActive = activeVideo === idx && item.type === "video";
    const embedInfo = item.type === "video" ? detectVideoEmbed(item.url) : null;
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      import_framer_motion22.motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: idx * 0.05 },
        className: (0, import_utils.cn)(
          "group cursor-pointer",
          isVideoActive && "col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "div",
            {
              className: (0, import_utils.cn)(
                "relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all",
                isVideoActive ? "aspect-video w-full" : "aspect-[4/3] w-full"
              ),
              onClick: () => handleVideoClick(idx, item),
              children: isVideoActive && embedInfo ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                "iframe",
                {
                  src: embedInfo.embedUrl,
                  title: item.title,
                  className: "absolute inset-0 w-full h-full border-0",
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
                  allowFullScreen: true
                }
              ) : isVideoActive && !embedInfo ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                "video",
                {
                  src: item.url,
                  controls: true,
                  autoPlay: true,
                  className: "absolute inset-0 w-full h-full object-contain bg-black",
                  children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("source", { src: item.url })
                }
              ) : item.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "relative w-full h-full", children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react9.Play, { size: 18, className: "text-white ml-0.5" }) }) }),
                item.duration && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md bg-black/70 text-white/90 font-mono", children: item.duration }),
                item.provider && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 font-medium uppercase tracking-wide", children: item.provider })
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })
              ] })
            }
          ),
          !isVideoActive && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-snug", children: item.title })
        ]
      },
      idx
    );
  }) }) });
});

// src/data-display/SearchResults/components/sources-sidebar.tsx
var import_react34 = require("react");
var import_framer_motion23 = require("framer-motion");
var import_lucide_react10 = require("lucide-react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var SourcesSidebar = (0, import_react34.memo)(function SourcesSidebar2({
  sources,
  expanded,
  onToggle
}) {
  const [imgErrors, setImgErrors] = (0, import_react34.useState)(/* @__PURE__ */ new Set());
  const visibleSources = expanded ? sources : sources.slice(0, 4);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex -space-x-1", children: sources.slice(0, 3).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "div",
        {
          className: "w-5 h-5 rounded-full bg-white/10 border-2 border-zinc-900 flex items-center justify-center overflow-hidden",
          children: s.favicon && !imgErrors.has(s.favicon) ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            "img",
            {
              src: s.favicon,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => setImgErrors((prev) => new Set(prev).add(s.favicon))
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react10.Globe, { size: 10, className: "text-white/40" })
        },
        i
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "font-medium", children: [
        sources.length,
        " sources"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex flex-col gap-1.5", children: visibleSources.map((source, idx) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      import_framer_motion23.motion.a,
      {
        initial: { opacity: 0, x: 10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: idx * 0.03 },
        href: source.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all no-underline",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "shrink-0 w-5 h-5 rounded-md bg-white/10 flex items-center justify-center overflow-hidden", children: source.favicon && !imgErrors.has(source.favicon) ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            "img",
            {
              src: source.favicon,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => setImgErrors((prev) => new Set(prev).add(source.favicon))
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react10.Globe, { size: 12, className: "text-white/40" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "text-xs font-medium text-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors", children: source.title }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex items-center gap-1 mt-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-[10px] text-muted-foreground/70", children: source.domain }) })
          ] })
        ]
      },
      source.id || idx
    )) }),
    sources.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "button",
      {
        onClick: onToggle,
        className: "flex items-center justify-center gap-1 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5",
        children: [
          expanded ? "Show less" : "Show all",
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            import_lucide_react10.ChevronDown,
            {
              size: 14,
              className: (0, import_utils.cn)("transition-transform", expanded && "rotate-180")
            }
          )
        ]
      }
    )
  ] });
});

// src/data-display/SearchResults/components/rich-result-card.tsx
var import_react35 = require("react");
var import_framer_motion24 = require("framer-motion");
var import_lucide_react11 = require("lucide-react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var RichResultCard = (0, import_react35.memo)(function RichResultCard2({
  result,
  index
}) {
  const [imgError, setImgError] = (0, import_react35.useState)(false);
  const [faviconError, setFaviconError] = (0, import_react35.useState)(false);
  const [videoThumbError, setVideoThumbError] = (0, import_react35.useState)(false);
  const hostname = (() => {
    try {
      return new URL(result.url).hostname.replace("www.", "");
    } catch {
      return result.url;
    }
  })();
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    import_framer_motion24.motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.04, duration: 0.3 },
      className: "group",
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "a",
        {
          href: result.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "block no-underline",
          children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/10", children: [
                  result.favicon && !faviconError ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                    "img",
                    {
                      src: result.favicon,
                      alt: "",
                      className: "w-3.5 h-3.5 rounded-sm",
                      onError: () => setFaviconError(true)
                    }
                  ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react11.Globe, { size: 12, className: "text-white/40" }),
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-[11px] text-muted-foreground font-medium", children: result.source || hostname })
                ] }),
                result.date && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-[11px] text-muted-foreground/60", children: result.date })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h3", { className: "text-[15px] font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors", children: result.title }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-2", children: result.snippet })
            ] }),
            (result.video || result.image) && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "shrink-0 w-[120px] h-[90px] sm:w-[160px] sm:h-[110px] md:w-[180px] md:h-[120px] rounded-xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-all relative", children: result.video && !videoThumbError ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "img",
                {
                  src: result.video.thumbnail || result.video.url,
                  alt: "",
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                  loading: "lazy",
                  onError: () => setVideoThumbError(true)
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react11.Play, { size: 14, className: "text-white ml-0.5" }) }) }),
              result.video.duration && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "absolute bottom-1.5 right-1.5 text-[10px] sm:text-xs px-1.5 py-0.5 rounded-md bg-black/70 text-white/90 font-mono", children: result.video.duration })
            ] }) : result.image && !imgError ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
var import_react36 = require("react");
var import_framer_motion25 = require("framer-motion");
var import_lucide_react12 = require("lucide-react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var InlineResult = (0, import_react36.memo)(function InlineResult2({
  result,
  index
}) {
  const [faviconError, setFaviconError] = (0, import_react36.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    import_framer_motion25.motion.a,
    {
      initial: { opacity: 0, y: 4 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.02 },
      href: result.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-all no-underline",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center", children: result.favicon && !faviconError ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "img",
          {
            src: result.favicon,
            alt: "",
            className: "w-4 h-4 rounded-sm",
            onError: () => setFaviconError(true)
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react12.Globe, { size: 14, className: "text-white/40" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate", children: result.title }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "text-xs text-muted-foreground/70 truncate", children: result.source || result.url })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          import_lucide_react12.ChevronRight,
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
var import_jsx_runtime28 = require("react/jsx-runtime");
var SearchResults = (0, import_react37.memo)(function SearchResults2({
  element,
  children
}) {
  const { query, results, totalResults, searchTime, sources, synthesis } = element.props;
  const [sourcesExpanded, setSourcesExpanded] = (0, import_react37.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react13.Sparkles, { size: 14, className: "text-primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "text-xs font-medium text-primary", children: "Web Search" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "text-sm text-muted-foreground", children: query })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex flex-col lg:flex-row gap-4 lg:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex-1 min-w-0 order-1", children: [
        hasSynthesis && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(SynthesisSection, { synthesis, sources: sources || [] }),
        carouselMedia.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(MediaGallery, { items: carouselMedia }),
        resultCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "flex flex-col divide-y divide-white/5", children: results.map((result, index) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "div",
          {
            className: "py-4 first:pt-0 last:pb-0",
            children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(RichResultCard, { result, index })
          },
          result.url || index
        )) }) : !hasSynthesis ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "p-8 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "w-12 h-12 mx-auto mb-3 rounded-full bg-white/5 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react13.Globe, { size: 20, className: "text-white/30" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("p", { className: "text-muted-foreground", children: [
            'No results found for "',
            query,
            '"'
          ] })
        ] }) : null,
        resultCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mt-4 pt-4 border-t border-white/5", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex items-center gap-4 text-xs text-muted-foreground/60", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { children: [
            totalResults ?? resultCount,
            " results"
          ] }),
          searchTime && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { children: [
            (searchTime / 1e3).toFixed(2),
            "s"
          ] })
        ] }) })
      ] }),
      hasSources && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "hidden lg:block w-[240px] xl:w-[280px] shrink-0 order-2", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        SourcesSidebar,
        {
          sources,
          expanded: sourcesExpanded,
          onToggle: () => setSourcesExpanded(!sourcesExpanded)
        }
      ) })
    ] }),
    hasSources && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "lg:hidden mt-6 pt-4 border-t border-white/10", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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

// src/data-display/DriveFile/component.tsx
var import_react38 = require("react");
var import_framer_motion26 = require("framer-motion");
var import_lucide_react14 = require("lucide-react");
var import_jsx_runtime29 = require("react/jsx-runtime");
var DriveFile = (0, import_react38.memo)(function DriveFile2({
  element,
  children
}) {
  const { name, thumbnailLink, webViewLink, iconLink, modifiedTime, owners } = element.props;
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    import_framer_motion26.motion.div,
    {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      className: (0, import_utils.cn)(
        "card-glass flex flex-col w-full max-w-[300px]",
        "overflow-hidden cursor-pointer",
        webViewLink ? "hover:shadow-2xl" : "cursor-default"
      ),
      onClick: () => webViewLink && window.open(webViewLink, "_blank"),
      children: [
        thumbnailLink ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "h-40 w-full overflow-hidden bg-zinc-900/50 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "img",
          {
            src: thumbnailLink,
            alt: name,
            className: "w-full h-full object-cover"
          }
        ) }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "h-40 w-full bg-zinc-900/50 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react14.File, { size: 48, className: "text-muted-foreground" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "p-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center gap-2 mb-2", children: [
            iconLink ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: iconLink, alt: "", className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react14.File, { size: 16 }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              "div",
              {
                className: "font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis text-foreground",
                title: name,
                children: name
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-col gap-1.5 text-xs text-muted-foreground", children: [
            modifiedTime && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react14.Clock, { size: 12 }),
              new Date(modifiedTime).toLocaleDateString()
            ] }),
            owners && owners[0] && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react14.User, { size: 12 }),
              owners[0].displayName
            ] })
          ] })
        ] }),
        children
      ]
    }
  );
});

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

// src/data-display/DriveFileList/component.tsx
var import_react40 = require("react");
var import_framer_motion28 = require("framer-motion");

// src/data-display/DriveFileList/components/file-views.tsx
var import_react39 = require("react");
var import_framer_motion27 = require("framer-motion");

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
var import_jsx_runtime30 = require("react/jsx-runtime");
var DriveIcon = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("svg", { width: "18", height: "18", viewBox: "0 0 87.3 78", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "path",
    {
      d: "M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5l5.4 9.35z",
      fill: "#0066da"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "path",
    {
      d: "M43.65 25L29.9 0H21.6c-1.35.8-2.5 1.9-3.3 3.3L1.2 29.4c-.8 1.4-1.2 2.95-1.2 4.5h27.5L43.65 25z",
      fill: "#00ac47"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "path",
    {
      d: "M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.85L73.55 76.8z",
      fill: "#ea4335"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("path", { d: "M43.65 25L57.4 0H29.9l13.75 23.8V25z", fill: "#00832d" }),
  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "path",
    {
      d: "M59.85 53h27.5L70.9 23.85c-.8-1.4-1.95-2.5-3.3-3.3l-23.95 7.5L59.85 53z",
      fill: "#2684fc"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "path",
    {
      d: "M27.5 53L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.4 4.5-1.2L59.85 53H27.5z",
      fill: "#ffba00"
    }
  )
] });
var FolderIcon = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "#fbbf24", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("path", { d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" }) });
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: getColor(), children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" }) });
};
var GridIcon = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("rect", { x: "3", y: "3", width: "7", height: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("rect", { x: "14", y: "3", width: "7", height: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("rect", { x: "14", y: "14", width: "7", height: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("rect", { x: "3", y: "14", width: "7", height: "7" })
    ]
  }
);
var ListIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
    ]
  }
);
var ExternalLinkIcon = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("polyline", { points: "15 3 21 3 21 9" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
    ]
  }
);
var StarIcon = ({ filled }) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
  }
);
var ShareIcon = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("circle", { cx: "18", cy: "5", r: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("circle", { cx: "6", cy: "12", r: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("circle", { cx: "18", cy: "19", r: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" })
    ]
  }
);

// src/data-display/DriveFileList/components/file-views.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var FileGridCard = (0, import_react39.memo)(function FileGridCard2({
  file,
  onOpen
}) {
  const folder = isFolder(file.mimeType);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    import_framer_motion27.motion.div,
    {
      layout: true,
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      whileHover: { scale: 1.05, y: -2 },
      onClick: () => onOpen(file),
      className: (0, import_utils.cn)(
        "group flex flex-col items-center gap-3 p-4 min-w-[140px]",
        "card-glass border-white/5",
        "cursor-pointer"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "w-16 h-16 flex items-center justify-center rounded-xl",
              folder ? "bg-amber-500/10" : "bg-white/5"
            ),
            children: file.thumbnailLink ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
              "img",
              {
                src: file.thumbnailLink,
                alt: file.name,
                className: "w-12 h-12 object-cover rounded-lg"
              }
            ) : folder ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FolderIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FileIcon, { mimeType: file.mimeType })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "div",
          {
            className: "text-[13px] font-medium text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-full text-foreground",
            title: file.name,
            children: file.name
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "text-[11px] text-muted-foreground px-2 py-1 bg-white/5 rounded-md", children: getFileTypeName(file.mimeType) })
      ]
    }
  );
});
var FileListRow = (0, import_react39.memo)(function FileListRow2({
  file,
  onOpen
}) {
  const folder = isFolder(file.mimeType);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    import_framer_motion27.motion.div,
    {
      layout: true,
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
      onClick: () => onOpen(file),
      className: (0, import_utils.cn)(
        "group flex items-center gap-3.5 px-5 py-3.5",
        "border-b border-white/5",
        "cursor-pointer transition-colors duration-200",
        "hover:bg-white/5"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "w-10 h-10 flex items-center justify-center rounded-xl shrink-0",
              folder ? "bg-amber-500/10" : "bg-white/5"
            ),
            children: file.iconLink ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("img", { src: file.iconLink, alt: "", className: "w-5 h-5" }) : folder ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FolderIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FileIcon, { mimeType: file.mimeType })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis text-foreground", children: file.name }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "text-xs text-muted-foreground", children: getFileTypeName(file.mimeType) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "text-xs text-muted-foreground min-w-20 text-right", children: formatFileSize(file.size) }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "text-xs text-muted-foreground min-w-24 text-right", children: formatDate(file.modifiedTime) }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200", children: [
          file.starred && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "text-[#fbbf24]", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(StarIcon, { filled: true }) }),
          file.shared && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ShareIcon, {}) }),
          file.webViewLink && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                window.open(file.webViewLink, "_blank");
              },
              className: (0, import_utils.cn)(
                "flex items-center justify-center p-2 rounded-lg",
                "text-muted-foreground hover:bg-white/10 hover:text-foreground",
                "bg-transparent border-0 cursor-pointer transition-colors"
              ),
              title: "Apri in Drive",
              children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ExternalLinkIcon, {})
            }
          )
        ] })
      ]
    }
  );
});

// src/data-display/DriveFileList/component.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var DriveFileList = (0, import_react40.memo)(function DriveFileList2({
  element,
  children
}) {
  const {
    title,
    description,
    files: initialFiles,
    viewMode: initialViewMode = "list"
  } = element.props;
  const [viewMode, setViewMode] = (0, import_react40.useState)(initialViewMode);
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "card-glass w-full h-full min-h-[400px] flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex justify-between items-center p-5 border-b border-white/10 bg-black/20", children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-500/20", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(DriveIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h3", { className: "m-0 text-base font-semibold text-foreground", children: title || "Google Drive" }),
          description && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "text-xs text-muted-foreground mt-0.5", children: description })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("span", { className: "text-xs text-muted-foreground px-2.5 py-1 bg-white/5 rounded-full", children: [
          files.length,
          " element",
          files.length !== 1 ? "i" : "o"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex gap-1 p-1 bg-black/20 rounded-xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            "button",
            {
              onClick: () => setViewMode("grid"),
              className: (0, import_utils.cn)(
                "flex items-center justify-center p-2 rounded-lg border-0 cursor-pointer transition-all",
                viewMode === "grid" ? "bg-white/10 text-foreground" : "bg-transparent text-muted-foreground hover:bg-white/5"
              ),
              title: "Vista griglia",
              children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(GridIcon, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            "button",
            {
              onClick: () => setViewMode("list"),
              className: (0, import_utils.cn)(
                "flex items-center justify-center p-2 rounded-lg border-0 cursor-pointer transition-all",
                viewMode === "list" ? "bg-white/10 text-foreground" : "bg-transparent text-muted-foreground hover:bg-white/5"
              ),
              title: "Vista lista",
              children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ListIcon2, {})
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "flex-1 overflow-auto", children: files.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "p-16 text-center text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "text-5xl mb-4 opacity-30", children: "\u{1F4C1}" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "text-lg font-medium mb-2", children: "Nessun file" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "text-sm opacity-70", children: "Questa cartella \xE8 vuota" })
    ] }) : viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      import_framer_motion28.motion.div,
      {
        layout: true,
        className: "grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 p-5",
        children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_framer_motion28.AnimatePresence, { children: sortedFiles.map((file) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          FileGridCard,
          {
            file,
            onOpen: handleOpenFile
          },
          file.id
        )) })
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-center gap-3.5 px-5 py-2.5 border-b border-white/5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "w-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "flex-1", children: "Nome" }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "min-w-20 text-right", children: "Dimensione" }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "min-w-24 text-right", children: "Modificato" }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "w-20" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_framer_motion28.AnimatePresence, { children: sortedFiles.map((file) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
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

// src/data-display/Weather/component.tsx
var import_react41 = require("react");
var import_framer_motion29 = require("framer-motion");

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
var import_lucide_react15 = require("lucide-react");
var import_jsx_runtime33 = (
  // eslint-disable-next-line @next/next/no-img-element
  require("react/jsx-runtime")
);
var getIcon = (condition, icon) => {
  if (icon && (icon.startsWith("http") || icon.startsWith("data:"))) {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("img", { src: icon, alt: condition, className: "w-8 h-8 object-contain" });
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
var Weather = (0, import_react41.memo)(function Weather2({
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
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react15.CloudSun, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No weather data" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    import_framer_motion29.motion.div,
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
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "text-2xl font-semibold mb-1", children: location }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "text-sm text-muted-foreground capitalize", children: current.condition }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "text-6xl font-bold leading-none mt-3", children: [
              Math.round(current.temp),
              "\xB0"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "text-5xl", children: getIcon(current.condition) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "grid grid-cols-3 gap-3", children: [
          current.windSpeed != null && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-xl", children: "\u{1F4A8}" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "text-sm font-medium", children: [
              current.windSpeed,
              " km/h"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-[10px] text-muted-foreground", children: "Wind" })
          ] }),
          current.humidity != null && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-xl", children: "\u{1F4A7}" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "text-sm font-medium", children: [
              current.humidity,
              "%"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-[10px] text-muted-foreground", children: "Humidity" })
          ] }),
          current.feelsLike != null && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-xl", children: "\u{1F321}\uFE0F" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "text-sm font-medium", children: [
              Math.round(current.feelsLike),
              "\xB0"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-[10px] text-muted-foreground", children: "Feels Like" })
          ] })
        ] }),
        forecastHourly && forecastHourly.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider", children: "Hourly Forecast" }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "flex gap-4 overflow-x-auto pb-4 -mb-4 scrollbar-hide", children: forecastHourly.map((hour, i) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
            "div",
            {
              className: "flex flex-col items-center gap-2 min-w-[50px] p-2 rounded-lg hover:bg-white/5 transition-colors",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: new Date(hour.time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                }) }),
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-2xl", children: getIcon(hour.condition, hour.icon) }),
                /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "text-sm font-semibold", children: [
                  Math.round(hour.temp),
                  "\xB0"
                ] })
              ]
            },
            i
          )) })
        ] }),
        forecastDaily && forecastDaily.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider", children: "5-Day Forecast" }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "flex flex-col gap-2", children: forecastDaily.map((day, i) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
            "div",
            {
              className: "flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "w-16 font-medium", children: new Date(day.date).toLocaleDateString([], {
                  weekday: "short"
                }) }),
                /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex items-center gap-3 flex-1 justify-center", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-xl", children: getIcon(day.condition, day.icon) }),
                  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-xs text-muted-foreground capitalize hidden sm:block", children: day.condition })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex gap-4 w-24 justify-end", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "font-semibold", children: [
                    Math.round(day.tempMax),
                    "\xB0"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "text-muted-foreground", children: [
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

// src/data-display/DocumentIndex/component.tsx
var import_react42 = require("react");
var import_framer_motion30 = require("framer-motion");
var import_lucide_react16 = require("lucide-react");
var import_jsx_runtime34 = require("react/jsx-runtime");
var STATUS_CONFIG = {
  idle: { label: "Ready", icon: import_lucide_react16.FileText, color: "text-muted-foreground" },
  parsing: { label: "Parsing PDF", icon: import_lucide_react16.Loader2, color: "text-blue-400" },
  analyzing: {
    label: "Analyzing structure",
    icon: import_lucide_react16.Loader2,
    color: "text-purple-400"
  },
  building: {
    label: "Building index",
    icon: import_lucide_react16.Loader2,
    color: "text-amber-400"
  },
  complete: { label: "Complete", icon: import_lucide_react16.CheckCircle2, color: "text-green-400" },
  error: { label: "Error", icon: import_lucide_react16.AlertCircle, color: "text-red-400" }
};
var LOADING_STATUSES = /* @__PURE__ */ new Set([
  "parsing",
  "analyzing",
  "building"
]);
var DocumentIndex = (0, import_react42.memo)(function DocumentIndex2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-col gap-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-col gap-3 p-4 rounded-xl border border-white/10 card-glass", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react16.BookOpen, { size: 20, className: "text-primary" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h4", { className: "text-sm font-semibold text-foreground truncate m-0", children: fileName }),
            description && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-xs text-muted-foreground line-clamp-1 mt-0.5 m-0", children: description })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
          "div",
          {
            className: `flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.color} bg-white/5`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(StatusIcon, { size: 12, className: isLoading ? "animate-spin" : "" }),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { children: config.label })
            ]
          }
        )
      ] }),
      isLoading && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { children: message || "Processing..." }),
          progress != null && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("span", { children: [
            Math.round(progress),
            "%"
          ] }),
          currentPage != null && pageCount != null && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("span", { children: [
            "Page ",
            currentPage,
            " / ",
            pageCount
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-1.5 bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          import_framer_motion30.motion.div,
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
      error && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400", children: error }),
      nodes && nodes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "mt-2 border-t border-white/5 pt-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react16.Hash, { size: 14, className: "text-muted-foreground" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Document Structure" }),
          pageCount && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("span", { className: "text-xs text-muted-foreground/60", children: [
            "(",
            pageCount,
            " pages)"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "space-y-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_framer_motion30.AnimatePresence, { mode: "popLayout", children: nodes.map((node, idx) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(IndexNode, { node, depth: 0 }, node.id || idx)) }) })
      ] }),
      currentStatus === "complete" && (!nodes || nodes.length === 0) && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "py-8 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react16.FileText, { className: "w-10 h-10 opacity-20 mb-3" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-xs uppercase tracking-widest opacity-50 m-0", children: "No structure found" })
      ] })
    ] }),
    children
  ] });
});
var IndexNode = (0, import_react42.memo)(function IndexNode2({
  node,
  depth
}) {
  const [expanded, setExpanded] = (0, import_react42.useState)(depth < 2);
  const hasChildren = node.children && node.children.length > 0;
  const paddingLeft = depth * 16 + 8;
  const handleToggle = (0, import_react42.useCallback)(() => {
    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
  }, [hasChildren]);
  const handleKeyDown = (0, import_react42.useCallback)(
    (e) => {
      if ((e.key === "Enter" || e.key === " ") && hasChildren) {
        e.preventDefault();
        setExpanded((prev) => !prev);
      }
    },
    [hasChildren]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    import_framer_motion30.motion.div,
    {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
      transition: { duration: 0.2 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "w-4 h-4 flex items-center justify-center shrink-0", children: hasChildren ? expanded ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react16.ChevronDown, { size: 14, className: "text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react16.ChevronRight, { size: 14, className: "text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-white/20" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                "span",
                {
                  className: `flex-1 text-sm truncate ${depth === 0 ? "font-medium text-foreground" : "text-foreground/80"}`,
                  children: node.title
                }
              ),
              (node.startPage != null || node.endPage != null) && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "text-xs text-muted-foreground/60 shrink-0 tabular-nums", children: node.startPage != null && node.endPage != null ? node.startPage === node.endPage ? `p.${node.startPage}` : `p.${node.startPage}-${node.endPage}` : node.startPage != null ? `p.${node.startPage}+` : `p.${node.endPage}` })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_framer_motion30.AnimatePresence, { children: node.summary && expanded && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          import_framer_motion30.motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "text-xs text-muted-foreground/70 leading-relaxed pb-1",
            style: { paddingLeft: paddingLeft + 24, paddingRight: 8 },
            children: node.summary
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_framer_motion30.AnimatePresence, { children: expanded && hasChildren && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          import_framer_motion30.motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.2 },
            children: node.children.map((child, idx) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(IndexNode2, { node: child, depth: depth + 1 }, child.id || idx))
          }
        ) })
      ]
    }
  );
});

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

// src/media/Audio/component.tsx
var import_react43 = require("react");
var import_framer_motion31 = require("framer-motion");
var import_lucide_react17 = require("lucide-react");
var import_jsx_runtime35 = require("react/jsx-runtime");
var Audio = (0, import_react43.memo)(function Audio2({
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
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_lucide_react17.Music, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No audio tracks" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex flex-col gap-4", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h3", { className: "m-0 text-lg font-semibold", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "flex flex-col gap-3", children: tracks.map((track, index) => {
      const status = track.status ?? "ready";
      const progress = getProgressPercent(track.progress);
      const tone = getStatusTone(status);
      const statusLabel = buildStatusLabel(status);
      return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
        import_framer_motion31.motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          "data-selectable-item": true,
          "data-element-key": element.key,
          "data-item-id": track.id ?? `${index}`,
          className: "card-glass p-4 flex flex-col gap-2.5 hover:shadow-2xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "text-[15px] font-semibold text-foreground", children: track.title ?? "Untitled" }),
              /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
                  "span",
                  {
                    className: (0, import_utils.cn)(
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
                track.duration && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border border-white/10 bg-white/10 text-foreground", children: formatDuration(track.duration) })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
            status === "generating" && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex flex-col gap-1.5 mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "text-xs text-muted-foreground", children: [
                "Rendering ",
                progress,
                "%"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "h-1.5 w-full rounded-full bg-muted/20 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
                import_framer_motion31.motion.div,
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
            track.prompt && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "text-xs text-muted-foreground/80 mt-1", children: track.prompt }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground font-medium mt-1", children: [
              track.speaker && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { children: [
                "Voice:",
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-foreground", children: track.speaker })
              ] }),
              track.style && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { children: [
                "Style:",
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-foreground", children: track.style })
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

// src/media/Audio/schema.ts
var import_zod26 = require("zod");
var AudioPropsSchema = import_zod26.z.object({});
var AudioDefinition = {
  name: "Audio",
  props: AudioPropsSchema,
  description: "Audio component",
  hasChildren: true
};

// src/media/Video/component.tsx
var import_react45 = require("react");
var import_framer_motion33 = require("framer-motion");
var import_lucide_react18 = require("lucide-react");

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
var import_react44 = require("react");
var import_framer_motion32 = require("framer-motion");
var import_jsx_runtime36 = require("react/jsx-runtime");
var VideoPlayer = (0, import_react44.memo)(function VideoPlayer2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "relative bg-black min-h-[280px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "absolute top-4 left-4 flex gap-2 z-[2] pointer-events-none", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "span",
        {
          className: (0, import_utils.cn)(
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
      videoSource.provider && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "span",
        {
          className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md bg-[color-mix(in_srgb,var(--provider-color),transparent_86%)] text-[var(--provider-color)] border-[color-mix(in_srgb,var(--provider-color),transparent_73%)]",
          style: { "--provider-color": providerInfo.color },
          children: providerInfo.name
        }
      )
    ] }),
    isEmbed && videoSource.embedUrl ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "iframe",
      {
        title: video.title ?? "Embedded video",
        src: videoSource.embedUrl,
        className: "w-full h-full min-h-[280px] border-0 block",
        allow: getIframeAttributes(videoSource.provider),
        allowFullScreen: true,
        loading: "lazy"
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "video",
      {
        controls: true,
        muted: status === "generating",
        poster: placeholder,
        className: "w-full h-full min-h-[280px] object-cover bg-black",
        preload: "metadata",
        children: videoSource.url && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("source", { src: videoSource.url })
      }
    ),
    isStreaming && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "absolute inset-0 flex items-center justify-center bg-black/40 text-white font-semibold text-sm backdrop-blur-sm", children: "Streaming video..." })
  ] });
});
var VideoMetadataPanel = (0, import_react44.memo)(function VideoMetadataPanel2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "div",
    {
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": video.id ?? `${index}`,
      className: "p-[18px] flex flex-col gap-3 h-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "text-base font-semibold text-foreground", children: video.title ?? "Untitled video" }),
          video.caption && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "text-[13px] text-muted-foreground mt-1 leading-snug", children: video.caption })
        ] }),
        status === "generating" && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "text-xs text-muted-foreground", children: [
            "Rendering ",
            progress,
            "%"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "h-1.5 w-full rounded-full bg-muted/20 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            import_framer_motion32.motion.div,
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
        video.metadata?.prompt && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "bg-white/5 border border-white/5 rounded-xl px-3 py-2.5 text-xs text-muted-foreground/90 leading-relaxed", children: video.metadata.prompt }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "grid grid-cols-2 gap-3 mt-auto", children: metaItems.map((meta) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "text-[11px] text-muted-foreground uppercase tracking-wider font-semibold opacity-70", children: meta.label }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "text-[13px] text-foreground font-semibold", children: meta.value })
        ] }, meta.label)) }),
        (video.tags?.length ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex flex-wrap gap-1.5 mt-2", children: video.tags?.map((tag) => {
          const tone = tag.tone ?? "default";
          return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "span",
            {
              className: (0, import_utils.cn)(
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
        video.transcript && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "div",
          {
            className: "text-xs text-muted-foreground pl-2.5 border-l-2 py-1 italic leading-relaxed border-l-[color:var(--accent-color,var(--primary))]",
            style: { "--accent-color": accent },
            children: video.transcript
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground mt-2 pt-2 border-t border-white/5", children: [
          video.author && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("span", { children: [
            "Author: ",
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "text-foreground/80", children: video.author })
          ] }),
          video.license && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("span", { children: [
            "License: ",
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "text-foreground/80", children: video.license })
          ] }),
          video.createdAt && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { children: video.createdAt })
        ] })
      ]
    }
  );
});

// src/media/Video/component.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
var Video = (0, import_react45.memo)(function Video2({
  element,
  children
}) {
  const { title, videos = [], accentColor } = element.props;
  const accent = getAccentColor(accentColor ?? void 0);
  if (!videos || videos.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_react18.Video, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No videos available" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex flex-col gap-4", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h3", { className: "m-0 text-lg font-semibold", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "flex flex-col gap-4", children: videos.map((video, index) => {
      const status = video.status?.status ?? "ready";
      const progress = getProgressPercent(video.status?.progress);
      const statusTone = getStatusTone(status);
      const statusLabel = buildStatusLabel(status);
      const videoSource = getVideoSource(video);
      return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
        import_framer_motion33.motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          className: "grid grid-cols-1 md:grid-cols-[2fr_1.3fr] gap-0 overflow-hidden rounded-[18px] border border-white/10 bg-zinc-900 shadow-2xl bg-[linear-gradient(135deg,rgba(24,24,27,0.9)_0%,rgba(9,9,11,0.95)_100%)]",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
              VideoPlayer,
              {
                video,
                status,
                statusTone,
                statusLabel,
                videoSource
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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

// src/media/Image/component.tsx
var import_react46 = require("react");
var import_framer_motion34 = require("framer-motion");
var import_lucide_react19 = require("lucide-react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var Image = (0, import_react46.memo)(function Image2({
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
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_lucide_react19.Image, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No images available" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-col gap-4", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h3", { className: "m-0 text-lg font-semibold", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4", children: images.map((image, index) => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
        import_framer_motion34.motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          "data-selectable-item": true,
          "data-element-key": element.key,
          "data-item-id": image.id ?? `${index}`,
          className: "flex flex-col min-w-0 overflow-hidden rounded-[18px] border border-white/10 bg-zinc-900 shadow-2xl transition-all bg-[linear-gradient(135deg,rgba(24,24,27,0.9)_0%,rgba(9,9,11,0.95)_100%)]",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "relative", children: [
              status !== "ready" && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "absolute top-4 left-4 flex gap-2 items-center z-[2]", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                "span",
                {
                  className: (0, import_utils.cn)(
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
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                "img",
                {
                  src: imageSrc,
                  alt: image.alt ?? image.title ?? "AI generated image",
                  className: (0, import_utils.cn)("w-full h-[220px] object-cover block", {
                    "opacity-40": status === "failed"
                  })
                }
              ),
              isStreaming && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "absolute inset-0 flex items-center justify-center bg-black/45 text-white text-sm font-semibold backdrop-blur-sm", children: "Streaming preview..." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "p-4 flex flex-col gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "text-[15px] font-semibold text-foreground", children: image.title || image.caption || image.alt || "" }),
                image.caption && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "text-[13px] text-muted-foreground line-clamp-2", children: image.caption })
              ] }),
              status === "generating" && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "text-xs text-muted-foreground", children: [
                  "Rendering ",
                  progress,
                  "%"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "h-1.5 w-full rounded-full bg-muted/20 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  import_framer_motion34.motion.div,
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
              image.status?.errorMessage && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "text-xs text-destructive", children: image.status.errorMessage }),
              image.metadata?.prompt && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "bg-white/5 border border-white/5 rounded-xl px-3 py-2.5 text-xs text-muted-foreground/90 font-medium leading-relaxed line-clamp-3", children: image.metadata.prompt }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grid grid-cols-2 gap-3 mt-auto", children: metaItems.map((meta) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-col gap-0.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "text-[11px] text-muted-foreground uppercase tracking-wider font-semibold opacity-70", children: meta.label }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "text-[13px] text-foreground font-semibold truncate", children: meta.value })
              ] }, meta.label)) }),
              (image.tags?.length ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex flex-wrap gap-1.5 mt-1", children: image.tags?.map((tag) => {
                const tone = tag.tone ?? "default";
                return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  "span",
                  {
                    className: (0, import_utils.cn)(
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
              /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground mt-2 pt-2 border-t border-white/5", children: [
                image.author && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("span", { children: [
                  "Author: ",
                  image.author
                ] }),
                image.license && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("span", { children: [
                  "License: ",
                  image.license
                ] }),
                image.createdAt && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { children: image.createdAt })
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

// src/media/Gallery/component.tsx
var import_react47 = require("react");
var import_framer_motion35 = require("framer-motion");
var import_lucide_react20 = require("lucide-react");
var import_jsx_runtime39 = require("react/jsx-runtime");
var Gallery = (0, import_react47.memo)(function Gallery2({
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
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react20.Images, { className: "w-10 h-10 opacity-20 mb-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: "No images in gallery" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex flex-col gap-4", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h3", { className: "m-0 text-lg font-semibold", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3", children: items.map((item, index) => {
      const status = item.status ?? "ready";
      const statusLabel = buildStatusLabel(status);
      const statusTone = getStatusTone(status);
      const progress = getProgressPercent(item.progress);
      return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
        import_framer_motion35.motion.div,
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
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              "img",
              {
                src: item.src ?? "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
                alt: item.title ?? "AI image",
                className: "w-full h-[180px] object-cover"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "absolute top-3 left-3 flex gap-1.5 z-[2]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                "span",
                {
                  className: (0, import_utils.cn)(
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
              status === "generating" && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border shadow-sm backdrop-blur-md bg-white/10 text-white border-white/10", children: [
                progress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "p-3 flex flex-col gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "font-semibold text-[13px] text-foreground truncate", children: item.title ?? "Untitled" }),
              item.prompt && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "text-xs text-muted-foreground line-clamp-2", children: item.prompt }),
              item.tags && item.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "flex flex-wrap gap-1.5 mt-1", children: item.tags.map((tag) => {
                const tone = tag.tone ?? "default";
                return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                  "span",
                  {
                    className: (0, import_utils.cn)(
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
});
//# sourceMappingURL=index.js.map