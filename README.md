# Sanity連携ブログサイト

Sanity CMSと連携したモダンなブログサイトです。

## 技術スタック

- **Next.js 15** - React フレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **Sanity** - ヘッドレスCMS
- **Portable Text** - リッチテキスト

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成し、以下の値を設定してください：

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 3. Sanity プロジェクトの作成

1. [Sanity](https://www.sanity.io/) にアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトIDをコピーして `.env.local` に設定
4. APIトークンを作成して設定

### 4. 開発サーバーの起動

```bash
# Next.js 開発サーバー
npm run dev

# Sanity Studio（別ターミナル）
npm run sanity
```

## 機能

- ✅ ブログ記事一覧ページ
- ✅ 個別記事ページ
- ✅ レスポンシブデザイン
- ✅ SEO最適化
- ✅ 記事作成・編集（Sanity Studio）
- ✅ 著者情報
- ✅ 画像サポート
- ✅ リッチテキストエディタ

## ファイル構成

```
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx           # トップページ（記事一覧）
│   └── posts/
│       └── [slug]/
│           └── page.tsx   # 個別記事ページ
├── components/
│   └── PostCard.tsx       # 記事カードコンポーネント
├── lib/
│   └── sanity.ts          # Sanity クライアント設定
├── types/
│   └── post.ts            # 型定義
├── sanity/
│   └── schemas/           # Sanity スキーマ
└── sanity.config.ts       # Sanity 設定
```

## Sanity スキーマ

### Post（記事）
- タイトル
- スラッグ
- 概要
- 公開日
- メイン画像
- 本文（Portable Text）
- 著者

### Author（著者）
- 名前
- スラッグ
- プロフィール画像
- 経歴

## デプロイ

1. Vercel にデプロイ
2. 環境変数を設定
3. Sanity でドメインを許可リストに追加

## 使用方法

1. Sanity Studio で記事と著者を作成
2. 記事を公開
3. サイトで記事が表示されることを確認
