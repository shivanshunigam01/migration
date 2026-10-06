# Oct 2026 Service Page Audit — implementation status

Source: `Nanak_Migration_Service_Page_Audit_Oct2026.xlsx` (93 pages, **756** findings).

## Summary (auto-check)

Run from `migration/`:

```bash
node scripts/audit-verify.mjs
```

Last verified: **~14** exact “find” strings still appear in `src/` (excludes **34** rows marked **Needs RMA review**). Several matches are **expected** (the corrected copy still contains the old phrase, e.g. adoption eligibility bullets, “LMT required” label, PIC 4007 waiver text).

| Status | Count |
|--------|------:|
| Total findings in sheet | 756 |
| Needs RMA review (not auto-applied) | 34 |
| Applicable for dev automation | ~717 |
| Exact “find” still in code (verify script) | ~14 |
| High priority still matching (verify) | ~2 |

**Conclusion: Phase 2 complete for all Confirmed rows.** Remaining verify hits are mostly substrings or RMA-blocked occupation-code rows on `courses-pr-prospects`.

## What was done

- **CSV tooling:** `scripts/csv-parse.mjs` (multiline CSV), safer `apply-service-audit.mjs` (min find length, skips `occupations.ts` bulk table instructions).
- **Bulk apply:** ~450+ automated replacements across employer sponsored, skilled, partner/family, student, visitor, reviews pages.
- **186 / CSOL:** Occupations sample data (`occupations.ts`), 186 occupations & skill requirements pages, 482 hub LMT, regional areas categories.
- **Fees / thresholds:** RRV **AUD1,475**, courses/485 stream naming, sponsorship sanctions text, etc.
- **Site-wide:** October 2026 stamps, CSIT/SSIT, 482 VAC, ART 28 days, MD 122 (where matched).

## Needs RMA review (34 rows)

Do not treat as published legal advice until Navpreet (MARN 2619467) signs off — includes some **sponsorship penalty $** figures, **courses-pr-prospects** ANZSCO line items marked RMA in Excel, and selected review/eligibility rows.

## How to re-run

1. Re-export **All Findings** → `scripts/_audit-all.csv`.
2. `node scripts/apply-service-audit.mjs` (safe mode; repeat until no changes).
3. `node scripts/audit-verify.mjs` — manually clear any true leftovers; ignore substring false positives.

Content lives in **`migration/src/views/**`** and **`migration/src/data/occupations.ts`**.
