import fs from 'fs'
import path from 'path'

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.tsx')) fixFile(full)
  }
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  const orig = content

  content = content.replace(
    /(<[\w.]+[^>]*?\sclassName="([^"]*)")(\sstyle=\{\{[\s\S]*?\}\})(\sclassName="([^"]*)")/g,
    (_, before, c1, style, _dup, c2) => {
      const merged = [...new Set(`${c1} ${c2}`.trim().split(/\s+/))].join(' ')
      return `${before.replace(/className="[^"]*"/, `className="${merged}"`)}${style}`
    },
  )

  content = content.replace(/\s{2,}className=/g, ' className=')

  if (content !== orig) {
    fs.writeFileSync(filePath, content)
    console.log(filePath)
  }
}

walk(path.join(process.cwd(), 'src'))
