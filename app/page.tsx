import { getAllPosts } from '@/lib/sanity'
import { Post } from '@/types/post'
import PostCard from '@/components/PostCard'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const posts: Post[] = await getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-orange-600">🎨 らーめん太郎</h1>
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
                    <Link href="#gallery" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                      🖼️ 作品ギャラリー
                    </Link>
                    <Link href="#diary" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                      📝 ブログ
                    </Link>
                    <Link href="#about" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                      🎨 らーめん太郎について
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                <span className="text-orange-500 float-animation">らーめん太郎の</span>
                <br />
                <span className="text-red-500">世界へ</span>
                <br />
                <span className="text-yellow-500 gradient-text">ようこそ！</span>
              </h2>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed font-medium">
                日々を彩る、遊び心いっぱいのイラストたち
              </p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                HamCupコミュニティを中心に活動している「らーめん太郎」の公式サイトです。<br />
                これまでに制作した数々の作品をお楽しみください。 🎨✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#gallery" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all shadow-lg hover-glow">
                  作品を見る 🎨
                </a>
                <a href="#about" className="bg-white hover:bg-gray-50 text-orange-500 border-2 border-orange-500 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all shadow-lg hover-glow">
                  らーめん太郎について 🍞
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
                <Image
                  src="/hero-image.jpg"
                  alt="らーめん太郎の楽しいイラスト作品"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="gallery" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">
            🎨 らーめん太郎の創作活動 🎨
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🖼️</div>
              <h4 className="text-2xl font-bold text-orange-600 mb-4">イラスト制作</h4>
              <p className="text-gray-600">楽しくてユニークなキャラクターや世界観を描いています</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🎙️</div>
              <h4 className="text-2xl font-bold text-red-500 mb-4">音声配信</h4>
              <p className="text-gray-600">HamCupコミュニティで楽しい音声配信を行っています</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🍞</div>
              <h4 className="text-2xl font-bold text-yellow-600 mb-4">パン愛好家</h4>
              <p className="text-gray-600">名前は「らーめん太郎」ですが、実はパンが大好物です！</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="diary" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-4">
            📝 らーめん太郎のブログ
          </h3>
          <p className="text-xl text-gray-600 text-center mb-16">
            創作活動や日々の出来事をお伝えします
          </p>
          
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-xl text-gray-600 mb-6">
                まだブログを書いていません
              </p>
              <p className="text-gray-500">
                近日中に、らーめん太郎の日常や創作活動の様子をお届け予定です。<br />
                お楽しみに！ ✨
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-8">
            🎨 らーめん太郎について
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              らーめん太郎は、HamCupのコミュニティーを中心に活動している、<br />
              僕（筆者）のアーティスト名です。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-orange-600 mb-4">🎨 創作活動</h4>
                <p className="text-gray-600 leading-relaxed">
                  コミュニティーでは、楽しくイラストを描いたり、音声配信をしたりと、日々創作活動を行っています。
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-red-500 mb-4">🍞 意外な一面</h4>
                <p className="text-gray-600 leading-relaxed">
                  名前は「らーめん太郎」ですが、実はパンが大好物です。（もちろん、らーめんも大好きです！）
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              このサイトでは、僕がこれまでに描いてきたたくさんの作品をご紹介しています。<br />
              僕のユニークで楽しい世界観をぜひお楽しみください！
            </p>
          </div>
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
