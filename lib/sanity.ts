import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getAllPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      author-> {
        name,
        image {
          asset-> {
            _id,
            url
          }
        }
      }
    }
  `)
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      body,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      author-> {
        name,
        bio,
        image {
          asset-> {
            _id,
            url
          }
        }
      }
    }
  `, { slug })
}