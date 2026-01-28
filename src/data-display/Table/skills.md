# Table

## Purpose

Display tabular data with column formatting, professional styling, and optional badges for status fields.

## When to Use

- Show structured data with multiple columns
- Display lists with consistent properties (transactions, schedules, projections)
- Data that benefits from column alignment and formatting
- Financial projections, payment schedules, timelines

## Props Reference

| Prop     | Type   | Required | Description                             |
| -------- | ------ | -------- | --------------------------------------- |
| title    | string | No       | Table title                             |
| columns  | array  | Yes      | Column definitions                      |
| rows     | array  | Yes      | Row data                                |

### Column Structure

```typescript
{
  key: string;      // Property key in row data
  label: string;    // Column header text
  format?: "text" | "currency" | "date" | "badge";
}
```

### Row Structure

```typescript
{
  id?: string;      // Unique row identifier
  [key]: any;       // Properties matching column keys
}
```

## AI Generation Rules

1. Define columns first with clear labels
2. Use format="currency" for monetary values
3. Use format="badge" for status/category fields
4. Use format="date" for date fields
5. Include meaningful data - never empty tables
6. DO NOT use Table for workouts or nutrition - use specialized components

## Correct Streaming Pattern

```jsonl
{"op":"add","path":"/elements/projection-table","value":{"key":"projection-table","type":"Table","props":{"title":"Cash Flow Projection","columns":[{"key":"period","label":"Period"},{"key":"event","label":"Financial Event"},{"key":"amount","label":"Amount","format":"currency"},{"key":"status","label":"Status","format":"badge"}],"rows":[]},"children":[]}}
{"op":"add","path":"/elements/parent-card/children/-","value":"projection-table"}
{"op":"replace","path":"/elements/projection-table/props/rows","value":[{"id":"r1","period":"Month 0","event":"Advance Payment (20%)","amount":1285286.48,"status":"Initial Liquidity"},{"id":"r2","period":"Month 2-3","event":"1st SAL Milestone","amount":400000,"status":"Billing"},{"id":"r3","period":"Month 4-5","event":"2nd SAL Milestone","amount":400000,"status":"Billing"},{"id":"r4","period":"Month 24","event":"Final Balance + Retention Release","amount":341145.91,"status":"Project Closure"}]}
```

## Financial Table Example

```jsonl
{"op":"add","path":"/elements/sal-schedule","value":{"key":"sal-schedule","type":"Table","props":{"title":"SAL Payment Schedule","columns":[{"key":"milestone","label":"Milestone"},{"key":"period","label":"Timeline"},{"key":"amount","label":"Invoice Amount","format":"currency"},{"key":"cumulative","label":"Cumulative","format":"currency"}],"rows":[]}}}
{"op":"replace","path":"/elements/sal-schedule/props/rows","value":[{"milestone":"Advance","period":"Contract signing","amount":1285286,"cumulative":1285286},{"milestone":"SAL 1","period":"Month 2","amount":400000,"cumulative":1685286},{"milestone":"SAL 2","period":"Month 4","amount":400000,"cumulative":2085286},{"milestone":"SAL 3","period":"Month 6","amount":400000,"cumulative":2485286}]}
```

## IMPORTANT
- Create table with empty rows:[], then use replace to add all rows at once
- Always provide complete, meaningful data
- Use descriptive column labels
