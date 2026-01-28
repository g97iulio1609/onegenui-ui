import { z } from 'zod';

/**
 * Card component schema definition
 */
declare const CardPropsSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    padding: z.ZodNullable<z.ZodEnum<{
        none: "none";
        sm: "sm";
        md: "md";
        lg: "lg";
    }>>;
}, z.core.$strip>;
/** Type inference for Card props */
type CardProps = z.infer<typeof CardPropsSchema>;
/**
 * Card component definition for catalog registration
 */
declare const CardDefinition: {
    name: "Card";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        padding: z.ZodNullable<z.ZodEnum<{
            none: "none";
            sm: "sm";
            md: "md";
            lg: "lg";
        }>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Grid component schema definition
 */
declare const GridPropsSchema: z.ZodObject<{
    columns: z.ZodNullable<z.ZodNumber>;
    gap: z.ZodNullable<z.ZodEnum<{
        sm: "sm";
        md: "md";
        lg: "lg";
    }>>;
}, z.core.$strip>;
/** Type inference for Grid props */
type GridProps = z.infer<typeof GridPropsSchema>;
/**
 * Grid component definition for catalog registration
 */
declare const GridDefinition: {
    name: "Grid";
    props: z.ZodObject<{
        columns: z.ZodNullable<z.ZodNumber>;
        gap: z.ZodNullable<z.ZodEnum<{
            sm: "sm";
            md: "md";
            lg: "lg";
        }>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Stack component schema definition
 */
declare const StackPropsSchema: z.ZodObject<{
    direction: z.ZodNullable<z.ZodEnum<{
        horizontal: "horizontal";
        vertical: "vertical";
    }>>;
    gap: z.ZodNullable<z.ZodEnum<{
        sm: "sm";
        md: "md";
        lg: "lg";
    }>>;
    align: z.ZodNullable<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        stretch: "stretch";
    }>>;
}, z.core.$strip>;
/** Type inference for Stack props */
type StackProps = z.infer<typeof StackPropsSchema>;
/**
 * Stack component definition for catalog registration
 */
declare const StackDefinition: {
    name: "Stack";
    props: z.ZodObject<{
        direction: z.ZodNullable<z.ZodEnum<{
            horizontal: "horizontal";
            vertical: "vertical";
        }>>;
        gap: z.ZodNullable<z.ZodEnum<{
            sm: "sm";
            md: "md";
            lg: "lg";
        }>>;
        align: z.ZodNullable<z.ZodEnum<{
            start: "start";
            center: "center";
            end: "end";
            stretch: "stretch";
        }>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Divider component schema definition
 */
declare const DividerPropsSchema: z.ZodObject<{
    orientation: z.ZodNullable<z.ZodEnum<{
        horizontal: "horizontal";
        vertical: "vertical";
    }>>;
    label: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/** Type inference for Divider props */
type DividerProps = z.infer<typeof DividerPropsSchema>;
/**
 * Divider component definition for catalog registration
 */
declare const DividerDefinition: {
    name: "Divider";
    props: z.ZodObject<{
        orientation: z.ZodNullable<z.ZodEnum<{
            horizontal: "horizontal";
            vertical: "vertical";
        }>>;
        label: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Heading component schema definition
 */
declare const HeadingPropsSchema: z.ZodObject<{
    text: z.ZodNullable<z.ZodString>;
    level: z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        h1: "h1";
        h2: "h2";
        h3: "h3";
        h4: "h4";
    }>, z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
/** Type inference for Heading props */
type HeadingProps = z.infer<typeof HeadingPropsSchema>;
/**
 * Heading component definition for catalog registration
 */
declare const HeadingDefinition: {
    name: "Heading";
    props: z.ZodObject<{
        text: z.ZodNullable<z.ZodString>;
        level: z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
            h1: "h1";
            h2: "h2";
            h3: "h3";
            h4: "h4";
        }>, z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Text component schema definition
 */
declare const TextPropsSchema: z.ZodObject<{
    content: z.ZodNullable<z.ZodString>;
    variant: z.ZodNullable<z.ZodEnum<{
        label: "label";
        body: "body";
        caption: "caption";
    }>>;
    color: z.ZodNullable<z.ZodEnum<{
        error: "error";
        success: "success";
        default: "default";
        muted: "muted";
        warning: "warning";
        danger: "danger";
    }>>;
}, z.core.$strip>;
/** Type inference for Text props */
type TextProps = z.infer<typeof TextPropsSchema>;
/**
 * Text component definition for catalog registration
 */
declare const TextDefinition: {
    name: "Text";
    props: z.ZodObject<{
        content: z.ZodNullable<z.ZodString>;
        variant: z.ZodNullable<z.ZodEnum<{
            label: "label";
            body: "body";
            caption: "caption";
        }>>;
        color: z.ZodNullable<z.ZodEnum<{
            error: "error";
            success: "success";
            default: "default";
            muted: "muted";
            warning: "warning";
            danger: "danger";
        }>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * CodeBlock component schema definition
 */
declare const CodeBlockPropsSchema: z.ZodObject<{}, z.core.$strip>;
/** Type inference for CodeBlock props */
type CodeBlockProps = z.infer<typeof CodeBlockPropsSchema>;
/**
 * CodeBlock component definition for catalog registration
 */
declare const CodeBlockDefinition: {
    name: "CodeBlock";
    props: z.ZodObject<{}, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Document component schema definition
 */
declare const DocumentPropsSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    documents: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        title: z.ZodString;
        summary: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        author: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        createdAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        sections: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            highlights: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
        }, z.core.$strip>>>>;
        tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>>>;
    accentColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
/** Type inference for Document props */
type DocumentProps = z.infer<typeof DocumentPropsSchema>;
/**
 * Document component definition for catalog registration
 */
declare const DocumentDefinition: {
    name: "Document";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        documents: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            title: z.ZodString;
            summary: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            author: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            createdAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            sections: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                highlights: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
            }, z.core.$strip>>>>;
            tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
        }, z.core.$strip>>>>;
        accentColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Badge component schema definition
 */
declare const BadgePropsSchema: z.ZodObject<{
    text: z.ZodNullable<z.ZodString>;
    variant: z.ZodNullable<z.ZodEnum<{
        success: "success";
        default: "default";
        warning: "warning";
        danger: "danger";
        info: "info";
    }>>;
}, z.core.$strip>;
/** Type inference for Badge props */
type BadgeProps = z.infer<typeof BadgePropsSchema>;
/**
 * Badge component definition for catalog registration
 */
declare const BadgeDefinition: {
    name: "Badge";
    props: z.ZodObject<{
        text: z.ZodNullable<z.ZodString>;
        variant: z.ZodNullable<z.ZodEnum<{
            success: "success";
            default: "default";
            warning: "warning";
            danger: "danger";
            info: "info";
        }>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Alert component schema definition
 */
declare const AlertPropsSchema: z.ZodObject<{
    type: z.ZodNullable<z.ZodEnum<{
        error: "error";
        success: "success";
        warning: "warning";
        info: "info";
    }>>;
    title: z.ZodNullable<z.ZodString>;
    message: z.ZodNullable<z.ZodString>;
    dismissible: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>;
/** Type inference for Alert props */
type AlertProps = z.infer<typeof AlertPropsSchema>;
/**
 * Alert component definition for catalog registration
 */
declare const AlertDefinition: {
    name: "Alert";
    props: z.ZodObject<{
        type: z.ZodNullable<z.ZodEnum<{
            error: "error";
            success: "success";
            warning: "warning";
            info: "info";
        }>>;
        title: z.ZodNullable<z.ZodString>;
        message: z.ZodNullable<z.ZodString>;
        dismissible: z.ZodNullable<z.ZodBoolean>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Empty component schema definition
 */
declare const EmptyPropsSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    action: z.ZodNullable<z.ZodString>;
    actionLabel: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/** Type inference for Empty props */
type EmptyProps = z.infer<typeof EmptyPropsSchema>;
/**
 * Empty component definition for catalog registration
 */
declare const EmptyDefinition: {
    name: "Empty";
    props: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        action: z.ZodNullable<z.ZodString>;
        actionLabel: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * BrowserAction component schema - displays real-time browser operation steps
 */
declare const BrowserActionPropsSchema: z.ZodObject<{
    id: z.ZodString;
    action: z.ZodEnum<{
        navigating: "navigating";
        searching: "searching";
        extracting: "extracting";
        clicking: "clicking";
        typing: "typing";
        waiting: "waiting";
        capturing: "capturing";
    }>;
    target: z.ZodNullable<z.ZodString>;
    url: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        error: "error";
        pending: "pending";
        loading: "loading";
        complete: "complete";
    }>;
    message: z.ZodNullable<z.ZodString>;
    error: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
type BrowserActionProps = z.infer<typeof BrowserActionPropsSchema>;
declare const BrowserActionDefinition: {
    name: "BrowserAction";
    props: z.ZodObject<{
        id: z.ZodString;
        action: z.ZodEnum<{
            navigating: "navigating";
            searching: "searching";
            extracting: "extracting";
            clicking: "clicking";
            typing: "typing";
            waiting: "waiting";
            capturing: "capturing";
        }>;
        target: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            error: "error";
            pending: "pending";
            loading: "loading";
            complete: "complete";
        }>;
        message: z.ZodNullable<z.ZodString>;
        error: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Button component schema definition
 */
declare const ButtonPropsSchema: z.ZodObject<{
    label: z.ZodNullable<z.ZodString>;
    variant: z.ZodNullable<z.ZodEnum<{
        danger: "danger";
        primary: "primary";
        secondary: "secondary";
        ghost: "ghost";
    }>>;
    size: z.ZodNullable<z.ZodEnum<{
        sm: "sm";
        md: "md";
        lg: "lg";
    }>>;
    action: z.ZodNullable<z.ZodString>;
    actionParams: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    disabled: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>;
/** Type inference for Button props */
type ButtonProps = z.infer<typeof ButtonPropsSchema>;
/**
 * Button component definition for catalog registration
 */
declare const ButtonDefinition: {
    name: "Button";
    props: z.ZodObject<{
        label: z.ZodNullable<z.ZodString>;
        variant: z.ZodNullable<z.ZodEnum<{
            danger: "danger";
            primary: "primary";
            secondary: "secondary";
            ghost: "ghost";
        }>>;
        size: z.ZodNullable<z.ZodEnum<{
            sm: "sm";
            md: "md";
            lg: "lg";
        }>>;
        action: z.ZodNullable<z.ZodString>;
        actionParams: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        disabled: z.ZodNullable<z.ZodBoolean>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * TextField component schema definition
 */
declare const TextFieldPropsSchema: z.ZodObject<{
    label: z.ZodNullable<z.ZodString>;
    bindPath: z.ZodNullable<z.ZodString>;
    valuePath: z.ZodNullable<z.ZodString>;
    value: z.ZodNullable<z.ZodString>;
    placeholder: z.ZodNullable<z.ZodString>;
    type: z.ZodNullable<z.ZodString>;
    checks: z.ZodNullable<z.ZodArray<z.ZodObject<{
        fn: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>>>;
    validateOn: z.ZodNullable<z.ZodEnum<{
        change: "change";
        blur: "blur";
        submit: "submit";
    }>>;
}, z.core.$strip>;
/** Type inference for TextField props */
type TextFieldProps = z.infer<typeof TextFieldPropsSchema>;
/**
 * TextField component definition for catalog registration
 */
declare const TextFieldDefinition: {
    name: "TextField";
    props: z.ZodObject<{
        label: z.ZodNullable<z.ZodString>;
        bindPath: z.ZodNullable<z.ZodString>;
        valuePath: z.ZodNullable<z.ZodString>;
        value: z.ZodNullable<z.ZodString>;
        placeholder: z.ZodNullable<z.ZodString>;
        type: z.ZodNullable<z.ZodString>;
        checks: z.ZodNullable<z.ZodArray<z.ZodObject<{
            fn: z.ZodString;
            message: z.ZodString;
        }, z.core.$strip>>>;
        validateOn: z.ZodNullable<z.ZodEnum<{
            change: "change";
            blur: "blur";
            submit: "submit";
        }>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Select component schema definition
 */
declare const SelectPropsSchema: z.ZodObject<{
    label: z.ZodNullable<z.ZodString>;
    bindPath: z.ZodNullable<z.ZodString>;
    valuePath: z.ZodNullable<z.ZodString>;
    value: z.ZodNullable<z.ZodString>;
    options: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
    }, z.core.$strip>>;
    placeholder: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/** Type inference for Select props */
type SelectProps = z.infer<typeof SelectPropsSchema>;
/**
 * Select component definition for catalog registration
 */
declare const SelectDefinition: {
    name: "Select";
    props: z.ZodObject<{
        label: z.ZodNullable<z.ZodString>;
        bindPath: z.ZodNullable<z.ZodString>;
        valuePath: z.ZodNullable<z.ZodString>;
        value: z.ZodNullable<z.ZodString>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
        }, z.core.$strip>>;
        placeholder: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * DatePicker component schema definition
 */
declare const DatePickerPropsSchema: z.ZodObject<{
    label: z.ZodNullable<z.ZodString>;
    bindPath: z.ZodNullable<z.ZodString>;
    valuePath: z.ZodNullable<z.ZodString>;
    value: z.ZodNullable<z.ZodString>;
    placeholder: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/** Type inference for DatePicker props */
type DatePickerProps = z.infer<typeof DatePickerPropsSchema>;
/**
 * DatePicker component definition for catalog registration
 */
declare const DatePickerDefinition: {
    name: "DatePicker";
    props: z.ZodObject<{
        label: z.ZodNullable<z.ZodString>;
        bindPath: z.ZodNullable<z.ZodString>;
        valuePath: z.ZodNullable<z.ZodString>;
        value: z.ZodNullable<z.ZodString>;
        placeholder: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Metric component schema definition
 */
declare const MetricPropsSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    valuePath: z.ZodNullable<z.ZodString>;
    format: z.ZodNullable<z.ZodEnum<{
        number: "number";
        currency: "currency";
        percent: "percent";
    }>>;
    trend: z.ZodNullable<z.ZodEnum<{
        up: "up";
        down: "down";
        neutral: "neutral";
    }>>;
    trendValue: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/** Type inference for Metric props */
type MetricProps = z.infer<typeof MetricPropsSchema>;
/**
 * Metric component definition for catalog registration
 */
declare const MetricDefinition: {
    name: "Metric";
    props: z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        valuePath: z.ZodNullable<z.ZodString>;
        format: z.ZodNullable<z.ZodEnum<{
            number: "number";
            currency: "currency";
            percent: "percent";
        }>>;
        trend: z.ZodNullable<z.ZodEnum<{
            up: "up";
            down: "down";
            neutral: "neutral";
        }>>;
        trendValue: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

declare const TablePropsSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodString>;
    rows: z.ZodNullable<z.ZodArray<z.ZodType<Record<string, unknown>, unknown, z.core.$ZodTypeInternals<Record<string, unknown>, unknown>>>>;
    dataPath: z.ZodNullable<z.ZodString>;
    columns: z.ZodArray<z.ZodPipe<z.ZodObject<{
        key: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodString>;
        accessor: z.ZodOptional<z.ZodString>;
        header: z.ZodOptional<z.ZodString>;
        format: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            text: "text";
            date: "date";
            currency: "currency";
            badge: "badge";
        }>>>;
    }, z.core.$strip>, z.ZodTransform<{
        key: string;
        label: string;
        format: "text" | "date" | "currency" | "badge" | null;
    }, {
        key?: string | undefined;
        label?: string | undefined;
        accessor?: string | undefined;
        header?: string | undefined;
        format?: "text" | "date" | "currency" | "badge" | null | undefined;
    }>>>;
}, z.core.$strip>;
/** Type inference for Table props */
type TableProps = z.infer<typeof TablePropsSchema>;
/**
 * Table component definition for catalog registration
 */
declare const TableDefinition: {
    name: "Table";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodString>;
        rows: z.ZodNullable<z.ZodArray<z.ZodType<Record<string, unknown>, unknown, z.core.$ZodTypeInternals<Record<string, unknown>, unknown>>>>;
        dataPath: z.ZodNullable<z.ZodString>;
        columns: z.ZodArray<z.ZodPipe<z.ZodObject<{
            key: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            accessor: z.ZodOptional<z.ZodString>;
            header: z.ZodOptional<z.ZodString>;
            format: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                text: "text";
                date: "date";
                currency: "currency";
                badge: "badge";
            }>>>;
        }, z.core.$strip>, z.ZodTransform<{
            key: string;
            label: string;
            format: "text" | "date" | "currency" | "badge" | null;
        }, {
            key?: string | undefined;
            label?: string | undefined;
            accessor?: string | undefined;
            header?: string | undefined;
            format?: "text" | "date" | "currency" | "badge" | null | undefined;
        }>>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * List component schema definition
 */
declare const ListPropsSchema: z.ZodObject<{
    items: z.ZodNullable<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodType<Record<string, unknown>, unknown, z.core.$ZodTypeInternals<Record<string, unknown>, unknown>>]>>>;
    dataPath: z.ZodNullable<z.ZodString>;
    emptyMessage: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/** Type inference for List props */
type ListProps = z.infer<typeof ListPropsSchema>;
/**
 * List component definition for catalog registration
 */
declare const ListDefinition: {
    name: "List";
    props: z.ZodObject<{
        items: z.ZodNullable<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodType<Record<string, unknown>, unknown, z.core.$ZodTypeInternals<Record<string, unknown>, unknown>>]>>>;
        dataPath: z.ZodNullable<z.ZodString>;
        emptyMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Timeline component schema definition
 */
declare const TimelinePropsSchema: z.ZodObject<{
    dataPath: z.ZodNullable<z.ZodString>;
    items: z.ZodNullable<z.ZodArray<z.ZodType<Record<string, unknown>, unknown, z.core.$ZodTypeInternals<Record<string, unknown>, unknown>>>>;
    titleKey: z.ZodNullable<z.ZodString>;
    dateKey: z.ZodNullable<z.ZodString>;
    descriptionKey: z.ZodNullable<z.ZodString>;
    statusKey: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/** Type inference for Timeline props */
type TimelineProps = z.infer<typeof TimelinePropsSchema>;
/**
 * Timeline component definition for catalog registration
 */
declare const TimelineDefinition: {
    name: "Timeline";
    props: z.ZodObject<{
        dataPath: z.ZodNullable<z.ZodString>;
        items: z.ZodNullable<z.ZodArray<z.ZodType<Record<string, unknown>, unknown, z.core.$ZodTypeInternals<Record<string, unknown>, unknown>>>>;
        titleKey: z.ZodNullable<z.ZodString>;
        dateKey: z.ZodNullable<z.ZodString>;
        descriptionKey: z.ZodNullable<z.ZodString>;
        statusKey: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * SearchResult item schema
 */
declare const SearchResultItemSchema: z.ZodObject<{
    title: z.ZodString;
    url: z.ZodString;
    snippet: z.ZodString;
    favicon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    video: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        url: z.ZodString;
        thumbnail: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        provider: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        duration: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>>>;
    date: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    source: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    position: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
type SearchResultItem = z.infer<typeof SearchResultItemSchema>;
/**
 * SearchResults component schema - displays web search results with AI synthesis
 */
declare const SearchResultsPropsSchema: z.ZodObject<{
    query: z.ZodString;
    results: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        url: z.ZodString;
        snippet: z.ZodString;
        favicon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        video: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            url: z.ZodString;
            thumbnail: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            provider: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            duration: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>>>;
        date: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        source: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        position: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, z.core.$strip>>;
    totalResults: z.ZodNullable<z.ZodNumber>;
    searchTime: z.ZodNullable<z.ZodNumber>;
    sources: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        domain: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        favicon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        snippet: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        date: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        pageNumber: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        excerpt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        documentTitle: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>>>>;
    synthesis: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        summary: z.ZodString;
        keyPoints: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            text: z.ZodString;
            citations: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
        }, z.core.$strip>>>>;
        sections: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            content: z.ZodString;
            citations: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
        }, z.core.$strip>>>>;
        followUpQuestions: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type SearchResultsProps = z.infer<typeof SearchResultsPropsSchema>;
declare const SearchResultsDefinition: {
    name: "SearchResults";
    props: z.ZodObject<{
        query: z.ZodString;
        results: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            url: z.ZodString;
            snippet: z.ZodString;
            favicon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            video: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                thumbnail: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                provider: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                duration: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.core.$strip>>>;
            date: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            source: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            position: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, z.core.$strip>>;
        totalResults: z.ZodNullable<z.ZodNumber>;
        searchTime: z.ZodNullable<z.ZodNumber>;
        sources: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            domain: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            favicon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            snippet: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            date: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            pageNumber: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            excerpt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            documentTitle: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>>>>;
        synthesis: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            summary: z.ZodString;
            keyPoints: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                text: z.ZodString;
                citations: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
            }, z.core.$strip>>>>;
            sections: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                content: z.ZodString;
                citations: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
            }, z.core.$strip>>>>;
            followUpQuestions: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Drive File schema
 */
declare const DriveFilePropsSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    mimeType: z.ZodString;
    thumbnailLink: z.ZodOptional<z.ZodString>;
    webViewLink: z.ZodOptional<z.ZodString>;
    iconLink: z.ZodOptional<z.ZodString>;
    modifiedTime: z.ZodOptional<z.ZodString>;
    owners: z.ZodOptional<z.ZodArray<z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        photoLink: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type DriveFileProps = z.infer<typeof DriveFilePropsSchema>;
declare const DriveFileDefinition: {
    name: "DriveFile";
    props: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        mimeType: z.ZodString;
        thumbnailLink: z.ZodOptional<z.ZodString>;
        webViewLink: z.ZodOptional<z.ZodString>;
        iconLink: z.ZodOptional<z.ZodString>;
        modifiedTime: z.ZodOptional<z.ZodString>;
        owners: z.ZodOptional<z.ZodArray<z.ZodObject<{
            displayName: z.ZodOptional<z.ZodString>;
            photoLink: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

declare const DriveFileListSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    viewMode: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        grid: "grid";
        list: "list";
    }>>>;
    files: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        mimeType: z.ZodString;
        size: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        modifiedTime: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        webViewLink: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        iconLink: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        thumbnailLink: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        owners: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            displayName: z.ZodOptional<z.ZodString>;
            photoLink: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>>;
        shared: z.ZodOptional<z.ZodBoolean>;
        starred: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
type DriveFileListProps = z.infer<typeof DriveFileListSchema>;
/**
 * DriveFileList component definition for catalog registration
 */
declare const DriveFileListDefinition: {
    name: "DriveFileList";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        viewMode: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
            grid: "grid";
            list: "list";
        }>>>;
        files: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            mimeType: z.ZodString;
            size: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            modifiedTime: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            webViewLink: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            iconLink: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            thumbnailLink: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            owners: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                displayName: z.ZodOptional<z.ZodString>;
                photoLink: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>>;
            shared: z.ZodOptional<z.ZodBoolean>;
            starred: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Weather component props
 */
declare const WeatherPropsSchema: z.ZodObject<{
    location: z.ZodString;
    current: z.ZodObject<{
        temp: z.ZodNumber;
        condition: z.ZodString;
        humidity: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        windSpeed: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        windUnit: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        feelsLike: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        uvIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        visibility: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        pressure: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, z.core.$strip>;
    forecastDaily: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        tempMin: z.ZodNumber;
        tempMax: z.ZodNumber;
        condition: z.ZodString;
        icon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        precipChance: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    forecastHourly: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        time: z.ZodString;
        temp: z.ZodNumber;
        condition: z.ZodString;
        icon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>>>>;
    unit: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
        C: "C";
        F: "F";
    }>>>;
    accentColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
type WeatherProps = z.infer<typeof WeatherPropsSchema>;
/**
 * Weather component definition
 */
declare const WeatherDefinition: {
    name: "Weather";
    props: z.ZodObject<{
        location: z.ZodString;
        current: z.ZodObject<{
            temp: z.ZodNumber;
            condition: z.ZodString;
            humidity: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            windSpeed: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            windUnit: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            feelsLike: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            uvIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            visibility: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            pressure: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, z.core.$strip>;
        forecastDaily: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            tempMin: z.ZodNumber;
            tempMax: z.ZodNumber;
            condition: z.ZodString;
            icon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            precipChance: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, z.core.$strip>>>>;
        forecastHourly: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            time: z.ZodString;
            temp: z.ZodNumber;
            condition: z.ZodString;
            icon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>>>>;
        unit: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
            C: "C";
            F: "F";
        }>>>;
        accentColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

interface DocumentIndexNode {
    id: string;
    title: string;
    startPage?: number | null;
    endPage?: number | null;
    summary?: string | null;
    children?: DocumentIndexNode[] | null;
}
/**
 * Document index status
 */
declare const DocumentIndexStatusSchema: z.ZodEnum<{
    error: "error";
    complete: "complete";
    idle: "idle";
    parsing: "parsing";
    analyzing: "analyzing";
    building: "building";
}>;
type DocumentIndexStatus = z.infer<typeof DocumentIndexStatusSchema>;
/**
 * DocumentIndex component schema
 */
declare const DocumentIndexPropsSchema: z.ZodObject<{
    fileName: z.ZodString;
    status: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
        error: "error";
        complete: "complete";
        idle: "idle";
        parsing: "parsing";
        analyzing: "analyzing";
        building: "building";
    }>>>;
    message: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    progress: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    pageCount: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    currentPage: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    nodes: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodType<DocumentIndexNode, unknown, z.core.$ZodTypeInternals<DocumentIndexNode, unknown>>>>>;
    error: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
type DocumentIndexProps = z.infer<typeof DocumentIndexPropsSchema>;
/**
 * DocumentIndex component definition for catalog registration
 */
declare const DocumentIndexDefinition: {
    name: "DocumentIndex";
    props: z.ZodObject<{
        fileName: z.ZodString;
        status: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
            error: "error";
            complete: "complete";
            idle: "idle";
            parsing: "parsing";
            analyzing: "analyzing";
            building: "building";
        }>>>;
        message: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        progress: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        pageCount: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        currentPage: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        nodes: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodType<DocumentIndexNode, unknown, z.core.$ZodTypeInternals<DocumentIndexNode, unknown>>>>>;
        error: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Audio component schema definition
 */
declare const AudioPropsSchema: z.ZodObject<{}, z.core.$strip>;
/** Type inference for Audio props */
type AudioProps = z.infer<typeof AudioPropsSchema>;
/**
 * Audio component definition for catalog registration
 */
declare const AudioDefinition: {
    name: "Audio";
    props: z.ZodObject<{}, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Video component schema definition
 */
declare const VideoPropsSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    videos: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        caption: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        createdAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        author: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        license: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        source: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        poster: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        duration: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        resolution: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        fps: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        codec: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        bitrate: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        sizeBytes: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        transcript: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                success: "success";
                default: "default";
                warning: "warning";
                danger: "danger";
            }>>;
        }, z.core.$strip>>>>;
        metadata: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            model: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            prompt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            negativePrompt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            seed: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            steps: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            guidance: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            style: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            lora: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
            safety: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            aspectRatio: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            motion: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>>>;
        status: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            status: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                generating: "generating";
                ready: "ready";
                failed: "failed";
            }>>>;
            progress: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            errorMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>>>;
        location: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            sourceType: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                url: "url";
                stream: "stream";
                upload: "upload";
                embed: "embed";
            }>>>;
            src: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            streamUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            embedUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            uploadName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            provider: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                custom: "custom";
                youtube: "youtube";
                vimeo: "vimeo";
                dailymotion: "dailymotion";
                twitch: "twitch";
                tiktok: "tiktok";
                twitter: "twitter";
            }>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>>;
    accentColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
/** Type inference for Video props */
type VideoProps = z.infer<typeof VideoPropsSchema>;
/**
 * Video component definition for catalog registration
 */
declare const VideoDefinition: {
    name: "Video";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        videos: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            caption: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            createdAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            author: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            license: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            source: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            poster: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            duration: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            resolution: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            fps: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            codec: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            bitrate: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            sizeBytes: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            transcript: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                tone: z.ZodOptional<z.ZodEnum<{
                    success: "success";
                    default: "default";
                    warning: "warning";
                    danger: "danger";
                }>>;
            }, z.core.$strip>>>>;
            metadata: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                model: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                prompt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                negativePrompt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                seed: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                steps: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                guidance: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                style: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                lora: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
                safety: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                aspectRatio: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                motion: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.core.$strip>>>;
            status: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                status: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                    generating: "generating";
                    ready: "ready";
                    failed: "failed";
                }>>>;
                progress: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                errorMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.core.$strip>>>;
            location: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                sourceType: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                    url: "url";
                    stream: "stream";
                    upload: "upload";
                    embed: "embed";
                }>>>;
                src: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                streamUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                embedUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                uploadName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                provider: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                    custom: "custom";
                    youtube: "youtube";
                    vimeo: "vimeo";
                    dailymotion: "dailymotion";
                    twitch: "twitch";
                    tiktok: "tiktok";
                    twitter: "twitter";
                }>>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>>;
        accentColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Image component schema definition
 */
declare const ImagePropsSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    images: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        caption: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        createdAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        author: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        license: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        source: z.ZodString;
        width: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        height: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        format: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        sizeBytes: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        alt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                success: "success";
                default: "default";
                warning: "warning";
                danger: "danger";
            }>>;
        }, z.core.$strip>>>>;
        metadata: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            model: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            prompt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            negativePrompt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            seed: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            steps: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            guidance: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            sampler: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            scheduler: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            style: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            lora: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
            upscaler: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            safety: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            aspectRatio: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>>>;
        status: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            status: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                generating: "generating";
                ready: "ready";
                failed: "failed";
            }>>>;
            progress: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            errorMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>>>;
        location: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            sourceType: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                url: "url";
                stream: "stream";
                upload: "upload";
                embed: "embed";
            }>>>;
            src: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            streamUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            embedUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            uploadName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>>;
    accentColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    columns: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
/** Type inference for Image props */
type ImageProps = z.infer<typeof ImagePropsSchema>;
/**
 * Image component definition for catalog registration
 */
declare const ImageDefinition: {
    name: "Image";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        images: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            caption: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            createdAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            author: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            license: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            source: z.ZodString;
            width: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            height: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            format: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            sizeBytes: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            alt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                tone: z.ZodOptional<z.ZodEnum<{
                    success: "success";
                    default: "default";
                    warning: "warning";
                    danger: "danger";
                }>>;
            }, z.core.$strip>>>>;
            metadata: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                model: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                prompt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                negativePrompt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                seed: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                steps: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                guidance: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                sampler: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                scheduler: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                style: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                lora: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
                upscaler: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                safety: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                aspectRatio: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.core.$strip>>>;
            status: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                status: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                    generating: "generating";
                    ready: "ready";
                    failed: "failed";
                }>>>;
                progress: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                errorMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.core.$strip>>>;
            location: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                sourceType: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                    url: "url";
                    stream: "stream";
                    upload: "upload";
                    embed: "embed";
                }>>>;
                src: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                streamUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                embedUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                uploadName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>>;
        accentColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        columns: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Gallery component schema definition
 */
declare const GalleryPropsSchema: z.ZodObject<{}, z.core.$strip>;
/** Type inference for Gallery props */
type GalleryProps = z.infer<typeof GalleryPropsSchema>;
/**
 * Gallery component definition for catalog registration
 */
declare const GalleryDefinition: {
    name: "Gallery";
    props: z.ZodObject<{}, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

export { AlertDefinition, type AlertProps, AlertPropsSchema, AudioDefinition, type AudioProps, AudioPropsSchema, BadgeDefinition, type BadgeProps, BadgePropsSchema, BrowserActionDefinition, type BrowserActionProps, BrowserActionPropsSchema, ButtonDefinition, type ButtonProps, ButtonPropsSchema, CardDefinition, type CardProps, CardPropsSchema, CodeBlockDefinition, type CodeBlockProps, CodeBlockPropsSchema, DatePickerDefinition, type DatePickerProps, DatePickerPropsSchema, DividerDefinition, type DividerProps, DividerPropsSchema, DocumentDefinition, DocumentIndexDefinition, type DocumentIndexNode, type DocumentIndexProps, DocumentIndexPropsSchema, type DocumentIndexStatus, type DocumentProps, DocumentPropsSchema, DriveFileDefinition, DriveFileListDefinition, type DriveFileListProps, DriveFileListSchema, type DriveFileProps, DriveFilePropsSchema, EmptyDefinition, type EmptyProps, EmptyPropsSchema, GalleryDefinition, type GalleryProps, GalleryPropsSchema, GridDefinition, type GridProps, GridPropsSchema, HeadingDefinition, type HeadingProps, HeadingPropsSchema, ImageDefinition, type ImageProps, ImagePropsSchema, ListDefinition, type ListProps, ListPropsSchema, MetricDefinition, type MetricProps, MetricPropsSchema, type SearchResultItem, SearchResultItemSchema, SearchResultsDefinition, type SearchResultsProps, SearchResultsPropsSchema, SelectDefinition, type SelectProps, SelectPropsSchema, StackDefinition, type StackProps, StackPropsSchema, TableDefinition, type TableProps, TablePropsSchema, TextDefinition, TextFieldDefinition, type TextFieldProps, TextFieldPropsSchema, type TextProps, TextPropsSchema, TimelineDefinition, type TimelineProps, TimelinePropsSchema, VideoDefinition, type VideoProps, VideoPropsSchema, WeatherDefinition, type WeatherProps, WeatherPropsSchema };
