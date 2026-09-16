import React from "react"
import { NAVY } from "@/theme"

export type PolicySection = {
  h: string
  p?: string | string[]
  bullets?: string[]
  table?: { head: string[]; rows: string[][] }
}

export type PolicyDoc = {
  title: string
  eyebrow: string
  description: string
  meta: string[]
  sections: PolicySection[]
}

function paragraphs(p: PolicySection["p"]): string[] {
  if (!p) return []
  return Array.isArray(p) ? p : [p]
}

export function PolicyArticle({ doc, maxWidth = 820 }: { doc: PolicyDoc; maxWidth?: number }) {
  return (
    <article style={{ maxWidth, margin: "0 auto", padding: "48px 24px 72px" }}>
      <div
        style={{
          marginBottom: 36,
          padding: "18px 22px",
          background: "#f8fafc",
          border: "1px solid rgba(21,36,72,0.08)",
          borderRadius: 12,
        }}
      >
        {doc.meta.map((line) => (
          <div key={line} style={{ fontSize: 14, lineHeight: 1.7, color: "#4b5563" }}>
            {line}
          </div>
        ))}
      </div>

      {doc.sections.map((s) => (
        <section key={s.h} style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: NAVY, margin: "0 0 10px" }}>{s.h}</h2>
          {paragraphs(s.p).map((para) => (
            <p
              key={para.slice(0, 48)}
              style={{ fontSize: 16, lineHeight: 1.75, color: "#374151", margin: "0 0 12px" }}
            >
              {para}
            </p>
          ))}
          {s.bullets && (
            <ul style={{ margin: "0 0 12px", paddingLeft: 22 }}>
              {s.bullets.map((b) => (
                <li
                  key={b.slice(0, 48)}
                  style={{ fontSize: 16, lineHeight: 1.75, color: "#374151", marginBottom: 8 }}
                >
                  {b}
                </li>
              ))}
            </ul>
          )}
          {s.table && (
            <div style={{ overflowX: "auto", marginTop: 8 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
                <thead>
                  <tr>
                    {s.table.head.map((th) => (
                      <th
                        key={th}
                        style={{
                          textAlign: "left",
                          padding: "10px 12px",
                          background: "#f1f5f9",
                          color: NAVY,
                          fontWeight: 700,
                          border: "1px solid rgba(21,36,72,0.10)",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.table.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          style={{
                            padding: "10px 12px",
                            border: "1px solid rgba(21,36,72,0.10)",
                            color: "#374151",
                            lineHeight: 1.6,
                            verticalAlign: "top",
                            fontWeight: j === 0 ? 600 : 400,
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </article>
  )
}
