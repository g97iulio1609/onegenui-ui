# Card

## Purpose

Container component that provides visual grouping with optional header. Primary wrapper for content sections in dashboards.

## When to Use

- Wrap related content in a visual container
- Group dashboard widgets or sections
- Display standalone content blocks with title/description
- Create clear visual hierarchy

## Props Reference

| Prop        | Type                           | Required | Description              |
| ----------- | ------------------------------ | -------- | ------------------------ |
| title       | string                         | No       | Card header title        |
| description | string                         | No       | Subtitle under the title |
| padding     | "none" \| "sm" \| "md" \| "lg" | No       | Internal padding         |

## AI Generation Rules

1. Use Card to wrap complex content that needs visual separation
2. Set title when the content needs a label/header
3. Add description for additional context
4. Card supports children - nest other components inside
5. CRITICAL: Start with empty children:[], then append each child

## Correct Streaming Pattern

```jsonl
{"op":"add","path":"/elements/analysis-card","value":{"key":"analysis-card","type":"Card","props":{"title":"Cash Flow Analysis","description":"Projected payment timeline for 24-month project"},"children":[]}}
{"op":"add","path":"/elements/main-stack/children/-","value":"analysis-card"}
{"op":"add","path":"/elements/cash-table","value":{"key":"cash-table","type":"Table","props":{"columns":[{"key":"period","label":"Period"},{"key":"amount","label":"Amount","format":"currency"}],"rows":[]}}}
{"op":"add","path":"/elements/analysis-card/children/-","value":"cash-table"}
{"op":"replace","path":"/elements/cash-table/props/rows","value":[{"period":"Month 0","amount":1285286},{"period":"Month 2","amount":400000}]}
```

## Rich Dashboard Example

```jsonl
{"op":"message","role":"assistant","content":"Building a comprehensive financial dashboard with KPIs and detailed projections."}
{"op":"set","path":"/root","value":"dashboard-stack"}
{"op":"add","path":"/elements/dashboard-stack","value":{"key":"dashboard-stack","type":"Stack","props":{"gap":"lg"},"children":[]}}
{"op":"add","path":"/elements/summary-card","value":{"key":"summary-card","type":"Card","props":{"title":"Project Summary","description":"Key financial indicators"},"children":[]}}
{"op":"add","path":"/elements/dashboard-stack/children/-","value":"summary-card"}
{"op":"add","path":"/elements/kpi-grid","value":{"key":"kpi-grid","type":"Grid","props":{"columns":3,"gap":"md"},"children":[]}}
{"op":"add","path":"/elements/summary-card/children/-","value":"kpi-grid"}
{"op":"add","path":"/elements/total-metric","value":{"key":"total-metric","type":"Metric","props":{"label":"Total Contract","value":6426432,"format":"currency"}}}
{"op":"add","path":"/elements/kpi-grid/children/-","value":"total-metric"}
{"op":"add","path":"/elements/duration-metric","value":{"key":"duration-metric","type":"Metric","props":{"label":"Duration","value":"730 days"}}}
{"op":"add","path":"/elements/kpi-grid/children/-","value":"duration-metric"}
{"op":"add","path":"/elements/threshold-metric","value":{"key":"threshold-metric","type":"Metric","props":{"label":"SAL Threshold","value":400000,"format":"currency"}}}
{"op":"add","path":"/elements/kpi-grid/children/-","value":"threshold-metric"}
```
