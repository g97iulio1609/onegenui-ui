# Document

## Purpose
Rich content viewer for articles, reports, case studies, and technical documentation. Displays structured multi-section content with professional formatting.

## When to Use
- Long-form reports and detailed analysis
- Multi-section documentation with headers
- Case studies with structured content
- Technical specifications and articles
- Research findings and executive summaries

## CRITICAL STREAMING PATTERN

Document REQUIRES two-phase streaming:

### Phase 1: Create Document Element
```jsonl
{"op":"add","path":"/elements/report-doc","value":{"key":"report-doc","type":"Document","props":{"title":"Analysis Report"},"children":[]}}
{"op":"add","path":"/elements/parent-stack/children/-","value":"report-doc"}
```

### Phase 2: Populate Full Content (IMMEDIATELY AFTER)
```jsonl
{"op":"replace","path":"/elements/report-doc/props/documents","value":[{"title":"Executive Summary","summary":"Key findings from the analysis","sections":[{"title":"Background","content":"This comprehensive analysis examines the financial projections and risk factors associated with the project. The data shows significant opportunities for optimization in several key areas."},{"title":"Key Findings","content":"Our analysis identified three critical factors:\n\n1. **Cash Flow Timing**: The 20% advance payment provides 4.8 months of operational runway\n2. **SAL Frequency**: With a 400K threshold, billing occurs every 45-60 days\n3. **Risk Mitigation**: Price revision clauses protect against material cost increases"}]}]}
```

## Complete Rich Content Example

```jsonl
{"op":"add","path":"/elements/analysis-doc","value":{"key":"analysis-doc","type":"Document","props":{"title":"Financial Risk Assessment"},"children":[]}}
{"op":"add","path":"/elements/main-stack/children/-","value":"analysis-doc"}
{"op":"replace","path":"/elements/analysis-doc/props/documents","value":[{"title":"Financial Sustainability","summary":"Analysis of project self-financing capability","sections":[{"title":"Advance Payment Impact","content":"The 20% advance (EUR 1,285,286) theoretically covers the first **4.8 months of production** at an average rate of EUR 267K/month. This allows the company to manage heavy equipment procurement for OG11 installations without critical bank exposures in the first semester."},{"title":"SAL Frequency Analysis","content":"With a SAL threshold of EUR 400,000, the expected billing frequency is approximately **once every 45-60 days**. Maintaining this rhythm is fundamental to avoid eroding liquidity from the advance payment."}]},{"title":"Risk Factors","summary":"Variables that may impact projections","sections":[{"title":"Price Revision","content":"Given the 2-year duration, the analysis must consider price revision clauses (D.Lgs 36/2023). A 5% increase in material costs would result in additional requirements of approximately EUR 320,000."},{"title":"Delay Penalties","content":"The cost of delay is significant: **EUR 6,426 per day**. A one-month delay (30 days) would incur a penalty of **EUR 192,780**, equivalent to nearly half a SAL."}]}]}
```

## CRITICAL RULES
1. NEVER create Document with only title - ALWAYS follow with documents content
2. The documents array MUST contain actual substantive content, not placeholders
3. Each document needs: title + summary (optional) + sections array
4. Each section needs: title + content (use markdown formatting in content)
5. Use bold (**text**) and lists in content for emphasis
6. Provide real analysis, not generic placeholder text
