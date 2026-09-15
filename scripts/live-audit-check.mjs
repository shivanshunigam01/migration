async function get(u, opt = {}) {
  const r = await fetch(u, opt)
  const body = opt.method === "HEAD" ? "" : await r.text()
  return { status: r.status, headers: Object.fromEntries(r.headers), body }
}

async function check() {
  const blog = await get("https://www.nanakmigration.com.au/blog/does-not-exist", {
    method: "HEAD",
    redirect: "manual",
  })
  console.log("01 blog", blog.status)

  for (const t of ["points-calculator", "occupation-search", "english-score-converter"]) {
    const p = await get("https://www.nanakmigration.com.au/tools/" + t)
    const m = p.body.match(/<h1[^>]*>([^<]+)/)
    console.log("02", t, m ? m[1].trim() : "NO H1", "len", p.body.length)
  }

  const rob = await get("https://admin.nanakmigration.com.au/robots.txt")
  console.log("03 robots ct", rob.headers["content-type"], "body", JSON.stringify(rob.body.slice(0, 80)))
  const ah = await get("https://admin.nanakmigration.com.au/", { method: "HEAD" })
  console.log("03 headers", {
    xr: ah.headers["x-robots-tag"],
    xf: ah.headers["x-frame-options"],
    xo: ah.headers["x-content-type-options"],
  })

  const api = await get("https://api.nanakmigration.com.au/api/public/seo")
  const pk = (api.body.match(/primaryKeyword/g) || []).length
  console.log("06 primaryKeyword", pk, "cache", api.headers["cache-control"])

  const home = await get("https://www.nanakmigration.com.au/")
  const links = [...home.body.matchAll(/<link[^>]+>/gi)].map((m) => m[0]).filter((x) => /canonical/i.test(x))
  console.log("07 canonical tags", links)
  const c =
    (home.body.match(/rel="canonical"[^>]*href="([^"]+)"/) ||
      home.body.match(/href="([^"]+)"[^>]*rel="canonical"/) ||
      [])[1]
  console.log("07 canonical href", JSON.stringify(c))

  const pre = await get("https://www.nanakmigration.com.au/pre-assessment")
  console.log(
    "05 h1 count",
    (pre.body.match(/<h1/g) || []).length,
    (pre.body.match(/<h1[^>]*>([^<]+)/) || [])[1]
  )

  const sk = await get("https://www.nanakmigration.com.au/skilled-independent-189", {
    method: "HEAD",
  })
  console.log("08 cache", sk.headers["cache-control"])

  const skc = await get("https://www.nanakmigration.com.au/skilled-independent-189")
  const pa = (skc.body.match(/<p>[^<]*<a href="\//g) || []).length
  const any = (skc.body.match(/href="\/(skilled|points|skills)/g) || []).length
  console.log("04 p-a links", pa, "related-ish", any, "Related guides", /Related guides/.test(skc.body))

  const idx = skc.body.indexOf("Quick Answer")
  if (idx >= 0) console.log("04 snippet", skc.body.slice(idx, idx + 600).replace(/\s+/g, " "))
}

check().catch((e) => {
  console.error(e)
  process.exit(1)
})
