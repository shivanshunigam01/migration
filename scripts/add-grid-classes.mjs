import fs from 'fs'
import path from 'path'

const SRC = path.join(process.cwd(), 'src')

const mappings = [
  [/gridTemplateColumns:\s*['"]1fr 380px['"]/, 'hero-grid'],
  [/gridTemplateColumns:\s*['"]1fr 420px['"]/, 'hero-grid'],
  [/gridTemplateColumns:\s*['"]1fr 400px['"]/, 'hero-grid'],
  [/gridTemplateColumns:\s*['"]360px 1fr['"]/, 'grid-sidebar'],
  [/gridTemplateColumns:\s*['"]380px 1fr['"]/, 'grid-sidebar'],
  [/gridTemplateColumns:\s*['"]320px 1fr['"]/, 'grid-sidebar'],
  [/gridTemplateColumns:\s*['"]280px 1fr['"]/, 'grid-sidebar'],
  [/gridTemplateColumns:\s*['"]repeat\(5,\s*1fr\)['"]/, 'grid-5'],
  [/gridTemplateColumns:\s*['"]repeat\(4,\s*1fr\)['"]/, 'grid-4'],
  [/gridTemplateColumns:\s*['"]repeat\(4,1fr\)['"]/, 'grid-4'],
  [/gridTemplateColumns:\s*['"]repeat\(3,\s*1fr\)['"]/, 'grid-3'],
  [/gridTemplateColumns:\s*['"]repeat\(3,1fr\)['"]/, 'grid-3'],
  [/gridTemplateColumns:\s*['"]repeat\(2,\s*1fr\)['"]/, 'grid-2'],
  [/gridTemplateColumns:\s*['"]1fr 1fr['"]/, 'grid-2'],
  [/gridTemplateColumns:\s*"1fr 1fr"/, 'grid-2'],
  [/gridTemplateColumns:\s*"repeat\(3,\s*1fr\)"/, 'grid-3'],
]

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.tsx')) processFile(full)
  }
}

function addClass(before, cls) {
  if (new RegExp(`\\b${cls}\\b`).test(before)) return before
  const cn = before.match(/className="([^"]*)"/)
  if (cn) {
    return before.replace(/className="([^"]*)"/, (_, existing) => {
      if (existing.split(/\s+/).includes(cls)) return `className="${existing}"`
      return `className="${existing} ${cls}"`
    })
  }
  return `${before} className="${cls}"`
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  let changed = false

  content = content.replace(
    /(<[\w.]+[^>]*?)style=\{\{([\s\S]*?)\}\}/g,
    (match, before, styleBody) => {
      for (const [pattern, cls] of mappings) {
        if (pattern.test(styleBody)) {
          const newBefore = addClass(before, cls)
          if (newBefore !== before) {
            changed = true
            return `${newBefore}style={{${styleBody}}}`
          }
        }
      }
      return match
    },
  )

  if (changed) {
    fs.writeFileSync(filePath, content)
    console.log(filePath)
  }
}

walk(SRC)
