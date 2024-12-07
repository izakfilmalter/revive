import { unstable_cache } from 'next/cache'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import type { Config } from 'payload-types'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayloadHMR({ config: configPromise })

  return await payload.findGlobal({
    slug,
    depth,
  })
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  })