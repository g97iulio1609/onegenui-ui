# Stack

## Purpose

Flexbox container for arranging children vertically or horizontally with consistent spacing.

## When to Use

- Arrange multiple components in a row or column
- Create vertical lists of cards/widgets
- Build horizontal toolbars or action rows
- ROOT CONTAINER for multi-component layouts

## Props Reference

| Prop      | Type                                      | Required | Description                          |
| --------- | ----------------------------------------- | -------- | ------------------------------------ |
| direction | "horizontal" \| "vertical"                | No       | Layout direction (default: vertical) |
| gap       | "sm" \| "md" \| "lg"                      | No       | Space between children               |
| align     | "start" \| "center" \| "end" \| "stretch" | No       | Cross-axis alignment                 |

## AI Generation Rules

1. ALWAYS use Stack as root when generating multiple components
2. Set gap="lg" for main layouts, gap="md" for nested content
3. Use direction="horizontal" for side-by-side layouts
4. Default direction is vertical - ideal for stacking cards
5. CRITICAL: Start with empty children:[], then append each child

## Correct Streaming Pattern

```jsonl
{"op":"message","role":"assistant","content":"Creating a comprehensive dashboard with metrics and analysis..."}
{"op":"set","path":"/root","value":"main-stack"}
{"op":"add","path":"/elements/main-stack","value":{"key":"main-stack","type":"Stack","props":{"gap":"lg"},"children":[]}}
{"op":"add","path":"/elements/overview-card","value":{"key":"overview-card","type":"Card","props":{"title":"Overview","description":"Key metrics at a glance"},"children":[]}}
{"op":"add","path":"/elements/main-stack/children/-","value":"overview-card"}
{"op":"add","path":"/elements/details-card","value":{"key":"details-card","type":"Card","props":{"title":"Details"},"children":[]}}
{"op":"add","path":"/elements/main-stack/children/-","value":"details-card"}
```

## Rich Content Example (Financial Analysis)

```jsonl
{"op":"message","role":"assistant","content":"I'm building a comprehensive financial analysis with cash flow projections and risk assessment."}
{"op":"set","path":"/root","value":"analysis-stack"}
{"op":"add","path":"/elements/analysis-stack","value":{"key":"analysis-stack","type":"Stack","props":{"gap":"lg"},"children":[]}}
{"op":"add","path":"/elements/kpi-grid","value":{"key":"kpi-grid","type":"Grid","props":{"columns":3,"gap":"md"},"children":[]}}
{"op":"add","path":"/elements/analysis-stack/children/-","value":"kpi-grid"}
{"op":"add","path":"/elements/anticipation-kpi","value":{"key":"anticipation-kpi","type":"Metric","props":{"label":"Anticipazione","value":1285286,"format":"currency","trend":"up","trendValue":"20%"}}}
{"op":"add","path":"/elements/kpi-grid/children/-","value":"anticipation-kpi"}
{"op":"add","path":"/elements/sal-kpi","value":{"key":"sal-kpi","type":"Metric","props":{"label":"Numero SAL","value":13,"trend":"neutral","trendValue":"Totali"}}}
{"op":"add","path":"/elements/kpi-grid/children/-","value":"sal-kpi"}
{"op":"add","path":"/elements/monthly-kpi","value":{"key":"monthly-kpi","type":"Metric","props":{"label":"Produzione Mensile","value":267768,"format":"currency"}}}
{"op":"add","path":"/elements/kpi-grid/children/-","value":"monthly-kpi"}
{"op":"add","path":"/elements/cash-flow-card","value":{"key":"cash-flow-card","type":"Card","props":{"title":"Proiezione Flussi di Cassa","description":"Timeline pagamenti stimata"},"children":[]}}
{"op":"add","path":"/elements/analysis-stack/children/-","value":"cash-flow-card"}
{"op":"add","path":"/elements/cash-table","value":{"key":"cash-table","type":"Table","props":{"columns":[{"key":"period","label":"Periodo"},{"key":"event","label":"Evento"},{"key":"amount","label":"Importo","format":"currency"}],"rows":[]}}}
{"op":"add","path":"/elements/cash-flow-card/children/-","value":"cash-table"}
{"op":"replace","path":"/elements/cash-table/props/rows","value":[{"period":"Mese 0","event":"Anticipazione 20%","amount":1285286},{"period":"Mese 2-3","event":"1° SAL","amount":400000},{"period":"Mese 4-5","event":"2° SAL","amount":400000}]}
```
