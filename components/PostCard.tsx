import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '@/types/post'
import { urlFor } from '@/lib/sanity'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-orange-100">
      {post.mainImage && (
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
            📝 日記
          </div>
          <Image
            src={urlFor(post.mainImage).width(400).height(200).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-orange-600 transition-colors">
          <Link href={`/posts/${post.slug.current}`}>
            🎨 {post.title}
          </Link>
        </h2>
        {post.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
        )}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            {post.author?.image ? (
              <div className="relative w-8 h-8">
                <Image
                  src={urlFor(post.author.image).width(32).height(32).url()}
                  alt={post.author.name}
                  fill
                  className="rounded-full object-cover border-2 border-orange-200"
                />
              </div>
            ) : (
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                🎨
              </div>
            )}
            <span className="text-orange-600 font-medium">{post.author?.name || 'らーめん太郎'}</span>
          </div>
          <time dateTime={post.publishedAt} className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {format(new Date(post.publishedAt), 'yyyy/MM/dd')}
          </time>
        </div>
      </div>
    </div>
  )
}