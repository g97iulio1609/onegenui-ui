/**
 * @onegenui/ui
 *
 * Core UI primitives for OneGenUI.
 */

// Utilities
export { cn } from "./utils/cn";

// Layout Components
export {
  Card,
  CardPropsSchema,
  CardDefinition,
  type CardProps,
} from "./layout/Card";
export {
  Grid,
  GridPropsSchema,
  GridDefinition,
  type GridProps,
} from "./layout/Grid";
export {
  Stack,
  StackPropsSchema,
  StackDefinition,
  type StackProps,
} from "./layout/Stack";
export {
  Divider,
  DividerPropsSchema,
  DividerDefinition,
  type DividerProps,
} from "./layout/Divider";

// Typography Components
export {
  Heading,
  HeadingPropsSchema,
  HeadingDefinition,
  type HeadingProps,
} from "./typography/Heading";
export {
  Text,
  TextPropsSchema,
  TextDefinition,
  type TextProps,
} from "./typography/Text";
export {
  CodeBlock,
  CodeBlockPropsSchema,
  CodeBlockDefinition,
  type CodeBlockProps,
} from "./typography/CodeBlock";
export {
  Document,
  DocumentPropsSchema,
  DocumentDefinition,
  type DocumentProps,
} from "./typography/Document";

// Status Components
export {
  Badge,
  BadgePropsSchema,
  BadgeDefinition,
  type BadgeProps,
} from "./status/Badge";
export {
  Alert,
  AlertPropsSchema,
  AlertDefinition,
  type AlertProps,
} from "./status/Alert";
export {
  Empty,
  EmptyPropsSchema,
  EmptyDefinition,
  type EmptyProps,
} from "./status/Empty";
export {
  BrowserAction,
  BrowserActionPropsSchema,
  BrowserActionDefinition,
  type BrowserActionProps,
} from "./status/BrowserAction";

// Forms Components
export {
  Button,
  ButtonPropsSchema,
  ButtonDefinition,
  type ButtonProps,
} from "./forms/Button";
export {
  TextField,
  TextFieldPropsSchema,
  TextFieldDefinition,
  type TextFieldProps,
} from "./forms/TextField";
export {
  Select,
  SelectPropsSchema,
  SelectDefinition,
  type SelectProps,
} from "./forms/Select";
export {
  DatePicker,
  DatePickerPropsSchema,
  DatePickerDefinition,
  type DatePickerProps,
} from "./forms/DatePicker";

// Data-display Components
export {
  Metric,
  MetricPropsSchema,
  MetricDefinition,
  type MetricProps,
} from "./data-display/Metric";
export {
  Table,
  TablePropsSchema,
  TableDefinition,
  type TableProps,
} from "./data-display/Table";
export {
  List,
  ListPropsSchema,
  ListDefinition,
  type ListProps,
} from "./data-display/List";
export {
  Timeline,
  TimelinePropsSchema,
  TimelineDefinition,
  type TimelineProps,
} from "./data-display/Timeline";

export {
  SearchResults,
  SearchResultsPropsSchema,
  SearchResultItemSchema,
  SearchResultsDefinition,
  type SearchResultsProps,
  type SearchResultItem,
} from "./data-display/SearchResults";
export {
  DriveFile,
  DriveFilePropsSchema,
  DriveFileDefinition,
  type DriveFileProps,
} from "./data-display/DriveFile";
export {
  DriveFileList,
  DriveFileListSchema,
  DriveFileListDefinition,
  type DriveFileListProps,
} from "./data-display/DriveFileList";
export {
  Weather,
  WeatherPropsSchema,
  WeatherDefinition,
  type WeatherProps,
} from "./data-display/Weather";
export {
  DocumentIndex,
  DocumentIndexPropsSchema,
  DocumentIndexDefinition,
  type DocumentIndexProps,
  type DocumentIndexNode,
  type DocumentIndexStatus,
} from "./data-display/DocumentIndex";

// Media Components
export {
  Audio,
  AudioPropsSchema,
  AudioDefinition,
  type AudioProps,
} from "./media/Audio";
export {
  Video,
  VideoPropsSchema,
  VideoDefinition,
  type VideoProps,
} from "./media/Video";
export {
  Image,
  ImagePropsSchema,
  ImageDefinition,
  type ImageProps,
} from "./media/Image";
export {
  Gallery,
  GalleryPropsSchema,
  GalleryDefinition,
  type GalleryProps,
} from "./media/Gallery";
