import { getPostBySlug, getAllPosts } from '@/lib/sanity'
import { Post } from '@/types/post'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { format } from 'date-fns'
import { urlFor } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts: Post[] = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post: Post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-orange-600">🎨 らーめん太郎</Link>
            <Link 
              href="/" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              ← ホームに戻る
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="text-center mb-8">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                📝 らーめん太郎の日記
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 text-center leading-tight">
              🎨 {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-4 text-gray-600 mb-8">
              {post.author?.image ? (
                <div className="relative w-12 h-12">
                  <Image
                    src={urlFor(post.author.image).width(48).height(48).url()}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover border-3 border-orange-200"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-xl">
                  🎨
                </div>
              )}
              <div className="text-center">
                <p className="font-bold text-orange-600 text-lg">{post.author?.name || 'らーめん太郎'}</p>
                <time dateTime={post.publishedAt} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {format(new Date(post.publishedAt), 'yyyy年MM月dd日')}
                </time>
              </div>
            </div>

            {post.mainImage && (
              <div className="relative w-full h-96 mb-12 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 rounded-3xl blur-lg opacity-30"></div>
                <Image
                  src={urlFor(post.mainImage).width(800).height(400).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="relative object-cover"
                />
              </div>
            )}
          </header>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none prose-headings:text-orange-600 prose-links:text-orange-500 prose-strong:text-orange-700">
              {post.body && <PortableText value={post.body} />}
            </div>
          </div>

          {/* Back to home section */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all shadow-lg"
            >
              🏠 らーめん太郎のホームに戻る
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}