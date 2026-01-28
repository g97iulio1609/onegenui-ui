# Grid

## Purpose

CSS Grid container for arranging children in responsive columns.

## When to Use

- Display multiple cards/widgets side by side
- Dashboard layouts with equal-width columns
- Compare data in parallel (metrics, day plans, options)
- Responsive metric displays (2-4 metrics in a row)

## Props Reference

| Prop    | Type                 | Required | Description                    |
| ------- | -------------------- | -------- | ------------------------------ |
| columns | number (1-4)         | No       | Target columns (auto-fits responsively) |
| gap     | "sm" \| "md" \| "lg" | No       | Space between grid items       |

## AI Generation Rules

1. Use Grid when items should display side-by-side
2. Set columns based on content count (2-3 for comparisons, 3-4 for metrics)
3. ALWAYS set gap="md" or gap="lg" for proper spacing
4. Grid items automatically fill available width and respond to viewport
5. CRITICAL: Start with empty children:[], then append each child

## Correct Streaming Pattern

```jsonl
{"op":"set","path":"/root","value":"dashboard-stack"}
{"op":"add","path":"/elements/dashboard-stack","value":{"key":"dashboard-stack","type":"Stack","props":{"gap":"lg"},"children":[]}}
{"op":"add","path":"/elements/metrics-grid","value":{"key":"metrics-grid","type":"Grid","props":{"columns":3,"gap":"md"},"children":[]}}
{"op":"add","path":"/elements/dashboard-stack/children/-","value":"metrics-grid"}
{"op":"add","path":"/elements/revenue-metric","value":{"key":"revenue-metric","type":"Metric","props":{"label":"Revenue","value":125000,"format":"currency","trend":"up","trendValue":"+15%"}}}
{"op":"add","path":"/elements/metrics-grid/children/-","value":"revenue-metric"}
{"op":"add","path":"/elements/users-metric","value":{"key":"users-metric","type":"Metric","props":{"label":"Active Users","value":8420,"format":"number","trend":"up","trendValue":"+230"}}}
{"op":"add","path":"/elements/metrics-grid/children/-","value":"users-metric"}
{"op":"add","path":"/elements/conversion-metric","value":{"key":"conversion-metric","type":"Metric","props":{"label":"Conversion Rate","value":0.034,"format":"percent","trend":"neutral"}}}
{"op":"add","path":"/elements/metrics-grid/children/-","value":"conversion-metric"}
```

## WRONG Pattern (causes rendering failures)

```jsonl
{"op":"add","path":"/elements/grid","value":{"key":"grid","type":"Grid","children":["m1","m2","m3"]}}
```

Never pre-populate children array - elements won't render!
