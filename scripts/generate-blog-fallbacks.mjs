import fs from 'fs'
import path from 'path'

function getEnv(name, def = '') {
  return process.env[name] ?? def
}

function readLocalConfig() {
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), 'public', 'config.json'), 'utf8')
    return JSON.parse(raw)
  } catch (e) {
    return null
  }
}

async function fetchAllSlugs(strapiUrl, siteSlug, token) {
  const headers = { Accept: 'application/json' }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const items = []
  let page = 1
  const pageSize = 100
  while (true) {
    const url = `${strapiUrl}/api/blog-posts?fields=slug&filters[site][slug][$eq]={SLUG}&pagination[page]={PAGE}&pagination[pageSize]={SIZE}&sort=updatedAt:desc`
      .replace('{SLUG}', encodeURIComponent(siteSlug))
      .replace('{PAGE}', String(page))
      .replace('{SIZE}', String(pageSize))

    const res = await fetch(url, { headers })
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`)
    const json = await res.json()
    const data = json?.data ?? []
    for (const item of data) {
      const slug = item?.slug ?? item?.attributes?.slug
      if (slug) items.push(slug)
    }
    const pagination = json?.meta?.pagination
    const pageCount = pagination?.pageCount
    if (pageCount) {
      if (page >= pageCount) break
    } else {
      if (data.length < pageSize) break
    }
    page++
  }
  return items
}

async function main() {
  let strapiUrl = getEnv('strapi_url')
  let siteSlug = getEnv('strapi_site_slug')
  const token = getEnv('STRAPI_API_TOKEN')

  if (!strapiUrl || !siteSlug) {
    const conf = readLocalConfig()
    const basic = conf?.basic || {}
    strapiUrl = strapiUrl || basic?.strapi_url || ''
    siteSlug = siteSlug || basic?.strapi_site_slug || ''
  }

  if (!strapiUrl || !siteSlug) {
    console.error('strapi_url and strapi_site_slug are required (via env or public/config.json)')
    process.exit(1)
  }

  const slugs = await fetchAllSlugs(strapiUrl, siteSlug, token)

  const distDir = path.join(process.cwd(), 'dist')
  const indexPath = path.join(distDir, 'index.html')
  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html not found; run build before generating fallbacks')
    process.exit(1)
  }
  const indexHtml = fs.readFileSync(indexPath, 'utf8')

  const blogDir = path.join(distDir, 'blog')
  fs.mkdirSync(blogDir, { recursive: true })
  fs.writeFileSync(path.join(blogDir, 'index.html'), indexHtml)

  let count = 0
  for (const slug of slugs) {
    const dir = path.join(blogDir, String(slug))
    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(path.join(dir, 'index.html'), indexHtml)
    count++
  }
  console.log(`Blog fallbacks generated: ${count} entries`)
}

main().catch((e) => {
  console.error('Failed to generate blog fallbacks:', e)
  process.exit(1)
})

