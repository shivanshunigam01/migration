/**
 * RFC 4180-style CSV record parser (supports quoted fields with newlines).
 */
export function parseCsvRecords(text) {
  const records = []
  let row = []
  let field = ""
  let inQ = false

  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQ) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else inQ = false
      } else field += c
      continue
    }
    if (c === '"') {
      inQ = true
      continue
    }
    if (c === ",") {
      row.push(field)
      field = ""
      continue
    }
    if (c === "\r") continue
    if (c === "\n") {
      row.push(field)
      field = ""
      if (row.some((cell) => cell.length > 0)) records.push(row)
      row = []
      continue
    }
    field += c
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field)
    if (row.some((cell) => cell.length > 0)) records.push(row)
  }
  return records
}

export function loadAuditRowsSync(fs, csvPath, { includeRma = false, includeDone = false } = {}) {
  if (!fs.existsSync(csvPath)) return []
  const text = fs.readFileSync(csvPath, "utf8")
  const records = parseCsvRecords(text)
  const headerIdx = records.findIndex((r) => r.some((c) => c.includes("Current text (find)")))
  if (headerIdx === -1) return []
  const header = records[headerIdx]
  const findI = header.indexOf("Current text (find)")
  const replI = header.indexOf("Replacement text (paste)")
  const verI = header.indexOf("Verification")
  const statusI = header.indexOf("Status")
  const priI = header.indexOf("Priority")
  const slugI = header.indexOf("Page slug")
  const sectionI = header.indexOf("Section on page")
  if (findI === -1) return []

  const rows = []
  for (let i = headerIdx + 1; i < records.length; i++) {
    const cols = records[i]
    if (!cols || cols.length <= findI) continue
    const find = cols[findI]?.trim()
    const repl = cols[replI]?.trim()
    const verification = (cols[verI] || "").trim()
    const status = (cols[statusI] || "To do").trim()
    if (!find || find.length < 4) continue
    if (!includeRma && verification === "Needs RMA review") continue
    if (!includeDone && status === "Done") continue
    rows.push({
      find,
      repl: repl || "",
      priority: cols[priI] || "",
      slug: cols[slugI] || "",
      section: sectionI >= 0 ? cols[sectionI] || "" : "",
      verification,
      status,
    })
  }
  return rows
}
