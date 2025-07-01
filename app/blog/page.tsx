import { getAllPosts } from '@/lib/sanity'
import { Post } from '@/types/post'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export const metadata = {
  title: '📝 らーめん太郎のブログ | 創作活動と日々の記録',
  description: 'HamCupコミュニティで活動するアーティスト「らーめん太郎」のブログ。創作活動や日々の出来事をお伝えします。',
}

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-orange-600">🎨 らーめん太郎</Link>
            <div className="flex items-center space-x-6">
              {/* ハンバーガーメニュー */}
              <div className="relative group">
                <button className="flex flex-col space-y-1 p-2 hover:bg-orange-50 rounded-md transition-colors">
                  <div className="w-6 h-0.5 bg-gray-700 group-hover:bg-orange-600 transition-colors"></div>
                  <div className="w-6 h-0.5 bg-gray-700 group-hover:bg-orange-600 transition-colors"></div>
                  <div className="w-6 h-0.5 bg-gray-700 group-hover:bg-orange-600 transition-colors"></div>
                </button>
                
                {/* ドロップダウンメニュー */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-orange-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-2">
                    <Link href="/" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                      🏠 ホーム
                    </Link>
                    <Link href="/#gallery" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                      🖼️ 作品ギャラリー
                    </Link>
                    <Link href="/blog" className="block px-4 py-3 text-orange-600 bg-orange-50 transition-colors">
                      📝 ブログ
                    </Link>
                    <Link href="/#about" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                      🎨 らーめん太郎について
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              📝 らーめん太郎の<span className="text-orange-500">ブログ</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              HamCupコミュニティでの活動や日々の創作活動、<br />
              パン愛好家としての日常をお届けします 🍞✨
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🎨</div>
                  <h3 className="font-bold text-orange-600 mb-1">創作記録</h3>
                  <p className="text-sm text-gray-600">イラスト制作の過程や想い</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎙️</div>
                  <h3 className="font-bold text-red-500 mb-1">配信レポート</h3>
                  <p className="text-sm text-gray-600">音声配信での出来事</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center bg-white rounded-2xl p-12 shadow-lg max-w-2xl mx-auto">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ブログ記事を準備中です
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold mb-4">🎨 らーめん太郎</h4>
          <p className="text-gray-400 mb-6">
            ユニークで楽しい世界観をお届けするアーティスト
          </p>
          <div className="flex justify-center space-x-8 text-sm mb-8">
            <span>🏠 HamCupコミュニティ</span>
            <span>🎙️ 音声配信中</span>
            <span>🍞 パン愛好家</span>
          </div>
          {/* 管理者専用隠しリンク */}
          <div className="text-xs text-gray-600">
            <Link 
              href="/studio" 
              className="hover:text-gray-400 transition-colors"
              title="管理者専用"
            >
              ・
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}