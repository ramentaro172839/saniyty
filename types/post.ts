export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt: string
  body?: any
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  author?: {
    name: string
    bio?: string
    image?: {
      asset: {
        _id: string
        url: string
      }
    }
  }
}