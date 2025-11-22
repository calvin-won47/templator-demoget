import fs from 'fs'
import path from 'path'

function getEnv(name, def = '') {
  return process.env[name] ?? def
}

function normalizeBaseUrl(url) {
  if (!url) return ''
  return String(url).replace(/\/$/, '')
}

function readLocalConfig() {
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), 'public', 'config.json'), 'utf8')
    return JSON.parse(raw)
  } catch (e) {
    return null
  }
}

async function fetchAllPosts(strapiUrl, siteSlug, token) {
  const headers = { Accept: 'application/json' }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const items = []
  let page = 1
  const pageSize = 100
  while (true) {
    const url = `${strapiUrl}/api/blog-posts?fields=slug,updatedAt,createdAt,publishedAt&filters[site][slug][$eq]={SLUG}&pagination[page]={PAGE}&pagination[pageSize]={SIZE}&sort=updatedAt:desc`
      .replace('{SLUG}', encodeURIComponent(siteSlug))
      .replace('{PAGE}', String(page))
      .replace('{SIZE}', String(pageSize))

    const res = await fetch(url, { headers })
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`)
    const json = await res.json()
    const data = json?.data ?? []
    for (const item of data) {
      const slug = item?.slug ?? item?.attributes?.slug
      const updatedAt =
        item?.updatedAt ?? item?.attributes?.updatedAt ?? item?.attributes?.publishedAt ?? item?.attributes?.createdAt
      if (slug) items.push({ slug, updatedAt })
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

function buildSitemapXml(baseUrl, staticPaths, posts) {
  const now = new Date().toISOString()
  const entry = (loc, lastmod = now, priority = '0.7') =>
    `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq><priority>${priority}</priority></url>`

  const urls = []
  for (const p of staticPaths) urls.push(entry(`${baseUrl}${p}`, now, '0.8'))
  for (const p of posts) urls.push(entry(`${baseUrl}/blog/${encodeURIComponent(p.slug)}`, p.updatedAt || now, '0.6'))
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

function buildRobotsTxt(baseUrl) {
  return `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`
}

async function main() {
  const SITE_URL = normalizeBaseUrl(getEnv('SITE_URL'))
  if (!SITE_URL) {
    console.error('SITE_URL is required')
    process.exit(1)
  }

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

  const posts = await fetchAllPosts(strapiUrl, siteSlug, token)

  const staticPaths = ['/', '/features', '/pricing', '/about', '/contact', '/blog']
  const xml = buildSitemapXml(SITE_URL, staticPaths, posts)
  const robots = buildRobotsTxt(SITE_URL)

  fs.mkdirSync(path.join(process.cwd(), 'dist'), { recursive: true })
  fs.writeFileSync(path.join(process.cwd(), 'dist', 'sitemap.xml'), xml)
  fs.writeFileSync(path.join(process.cwd(), 'dist', 'robots.txt'), robots)
  console.log(`Sitemap generated: ${posts.length} blog entries, static: ${staticPaths.length}`)
}

main().catch((e) => {
  console.error('Failed to generate sitemap:', e)
  process.exit(1)
})