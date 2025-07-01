# Sanity Studio アクセス問題の解決ドキュメント

## ✅ 問題解決完了

**確認済み動作環境**:
- Next.jsサーバー: `http://localhost:3001` - ✅ 動作中
- Sanity Studio: `http://localhost:3001/studio` - ✅ 動作中

## 解決した問題

### 1. オンラインStudio URLが404エラー
- URL: `https://8kaj5ug4.sanity.studio/`
- エラー: 404 Not Found
- 原因: Sanity Studioがデプロイされていない

### 2. ローカルCLIの権限エラー
```
Error: EACCES: permission denied, open '/Users/apple/.config/sanity/config.json'
```
- 原因: macOSの権限設定でSanity CLIが設定ファイルにアクセスできない
- 影響: `sanity dev`、`sanity deploy`コマンドが実行できない

## 採用した解決策

### Next.js内蔵Studio (成功)

1. **必要パッケージをインストール**
   ```bash
   npm install next-sanity styled-components
   ```

2. **内蔵Studioページを作成**
   ```typescript
   // app/studio/[[...index]]/page.tsx
   'use client'
   
   import { NextStudio } from 'next-sanity/studio'
   import config from '@/sanity.config'
   
   export default function StudioPage() {
     return <NextStudio config={config} />
   }
   ```

3. **Hydrationエラーを防止**
   ```typescript
   // app/layout.tsx
   <body suppressHydrationWarning={true}>
   ```

## 動作確認済みアクセス方法

### ✅ 確実に動作するURL
- **ブログサイト**: `http://localhost:3001/`
- **Sanity Studio**: `http://localhost:3001/studio`

### ❌ 動作しないURL
- `https://8kaj5ug4.sanity.studio/` (デプロイされていない)

## 設定情報

### 環境変数 (.env.local)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=8kaj5ug4
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk5zycGXTa7uIx1lSyDfa2mNbPcJxxD3oKkgavVwBJJ4as0CdDwJidlFiGwRJW7xUir2FscC06IWxEcoEEorVytfozZCjAVu9X0DwBTp8E4awEqASMpjJlhi4iUx154TXbf5cCg0QGsPGWy89x0GwOpxTpxmR90mEJ4grklRjUXNaA66QsIK
```

## 動作テスト結果

### cURLテスト結果
```bash
# メインページ - ✅ 正常
curl http://localhost:3001/ -> 200 OK (Blog site loaded)

# Studioページ - ✅ 正常  
curl http://localhost:3001/studio -> 200 OK (Sanity Studio loaded)
```

### ロードされる要素
- Next.js Framework: ✅
- Sanity UI Components: ✅  
- Sanity Client: ✅
- Typography Support: ✅

## 今後の使用手順

1. **サーバー起動**
   ```bash
   npm run dev
   ```

2. **ブログサイト確認**
   - URL: `http://localhost:3001/`
   - 記事一覧が表示（現在は「まだ記事が投稿されていません」）

3. **Sanity Studio利用**
   - URL: `http://localhost:3001/studio`
   - 著者作成 → 記事作成の順番で進める

## 技術的知見

### 成功要因
- Next.js内蔵Studioは権限問題を回避
- SSR/CSRの両方に対応
- 開発環境での安定性が高い

### 回避した問題
- Sanity CLIの環境依存問題
- macOSの権限制約
- オンラインStudioのデプロイ要件

## 最終確認

**2025年7月1日 20:11 JST時点**:
- ✅ Next.jsサーバー稼働中 (ポート3001)
- ✅ Sanity Studio UIロード確認済み
- ✅ 全スクリプトとスタイル正常読み込み
- ✅ 設定ファイル正常動作