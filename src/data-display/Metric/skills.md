# Metric

## Purpose

Display a single KPI or metric with optional trend indicator. Premium data visualization component.

## When to Use

- Show key performance indicators (revenue, users, conversion rate)
- Display summary statistics with context
- Highlight important numbers with trends
- Financial dashboards and analytics

## Props Reference

| Prop       | Type                                | Required | Description                              |
| ---------- | ----------------------------------- | -------- | ---------------------------------------- |
| label      | string                              | Yes      | Metric name/label                        |
| value      | string \| number                    | Yes      | Display value                            |
| format     | "number" \| "currency" \| "percent" | No       | Value formatting                         |
| trend      | "up" \| "down" \| "neutral"         | No       | Trend direction indicator                |
| trendValue | string                              | No       | Trend delta (e.g., "+12%", "-5 units")   |

## AI Generation Rules

1. ALWAYS provide both label and value
2. Use format="currency" for monetary values (automatically adds $ symbol)
3. Use format="percent" for ratios/rates (value 0.15 displays as 15%)
4. Use format="number" for counts with thousands separators
5. Include trend + trendValue when showing change over time
6. Group 3-4 metrics in a Grid with gap="md"
7. Make labels descriptive and professional

## Correct Streaming Pattern (Grid of Metrics)

```jsonl
{"op":"add","path":"/elements/kpi-grid","value":{"key":"kpi-grid","type":"Grid","props":{"columns":4,"gap":"md"},"children":[]}}
{"op":"add","path":"/elements/parent-stack/children/-","value":"kpi-grid"}
{"op":"add","path":"/elements/revenue-metric","value":{"key":"revenue-metric","type":"Metric","props":{"label":"Monthly Revenue","value":125000,"format":"currency","trend":"up","trendValue":"+15.3%"}}}
{"op":"add","path":"/elements/kpi-grid/children/-","value":"revenue-metric"}
{"op":"add","path":"/elements/users-metric","value":{"key":"users-metric","type":"Metric","props":{"label":"Active Users","value":8420,"format":"number","trend":"up","trendValue":"+230 this week"}}}
{"op":"add","path":"/elements/kpi-grid/children/-","value":"users-metric"}
{"op":"add","path":"/elements/conversion-metric","value":{"key":"conversion-metric","type":"Metric","props":{"label":"Conversion Rate","value":0.034,"format":"percent","trend":"down","trendValue":"-0.5%"}}}
{"op":"add","path":"/elements/kpi-grid/children/-","value":"conversion-metric"}
{"op":"add","path":"/elements/orders-metric","value":{"key":"orders-metric","type":"Metric","props":{"label":"Total Orders","value":1847,"format":"number","trend":"neutral"}}}
{"op":"add","path":"/elements/kpi-grid/children/-","value":"orders-metric"}
```

## Financial Analysis Example

```jsonl
{"op":"add","path":"/elements/financial-metrics","value":{"key":"financial-metrics","type":"Grid","props":{"columns":3,"gap":"md"},"children":[]}}
{"op":"add","path":"/elements/anticipation","value":{"key":"anticipation","type":"Metric","props":{"label":"Anticipazione (20%)","value":1285286.48,"format":"currency","trend":"up","trendValue":"Liquidita Iniziale"}}}
{"op":"add","path":"/elements/financial-metrics/children/-","value":"anticipation"}
{"op":"add","path":"/elements/sal-count","value":{"key":"sal-count","type":"Metric","props":{"label":"Stima SAL","value":13,"trend":"neutral","trendValue":"24 mesi"}}}
{"op":"add","path":"/elements/financial-metrics/children/-","value":"sal-count"}
{"op":"add","path":"/elements/monthly-prod","value":{"key":"monthly-prod","type":"Metric","props":{"label":"Produzione Media/Mese","value":267768,"format":"currency"}}}
{"op":"add","path":"/elements/financial-metrics/children/-","value":"monthly-prod"}
```
