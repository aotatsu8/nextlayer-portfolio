# NextLayer Portfolio

フリーランスWebエンジニア・青木達哉のポートフォリオサイトです。
自己紹介・使用技術・開発実績・コンタクトをまとめた1ページ構成のサイトで、Next.js (App Router) + TypeScript + Tailwind CSS で構築しています。

🔗 公開URL: https://nextlayer-portfolio.vercel.app/

## セクション構成

| セクション | 内容 |
| --- | --- |
| Hero | トップのファーストビュー |
| About（自己紹介） | プロフィール・実績サマリー |
| Skills（使用技術） | 言語・ライブラリ・使用ツール一覧 |
| Projects（開発実績） | 制作したプロジェクトの紹介 |
| Contact（コンタクト） | Googleフォームへのお問い合わせリンク・SNS |

サイドメニュー（PC）/トップメニュー（モバイル）からアンカーで各セクションへ遷移します。

## 技術スタック

- **フレームワーク**: [Next.js 15](https://nextjs.org/)（App Router）
- **言語**: TypeScript / React 19
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **状態管理**: Zustand（サイドメニューの開閉など）
- **URL状態**: nuqs
- **アイコン**: react-icons / [devicon](https://devicon.dev/)
- **デプロイ**: Vercel

## ディレクトリ構成

```
src/
├── app/                # App Router（layout, page, アイコン）
├── components/         # UIコンポーネント（Hero, About, Skills, Projects, Contact など）
├── constants/          # プロジェクト一覧・サイドメニューリンクなどの定数
├── store/              # Zustand ストア（メニュー開閉状態）
└── styles/             # グローバルCSS・アニメーション
```

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いて確認できます。

## スクリプト

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ビルド |
| `npm run start` | ビルド済みアプリを起動 |
| `npm run lint` | ESLint を実行 |

## デプロイ

[Vercel](https://vercel.com/) にデプロイしています。`main` ブランチへのプッシュで自動デプロイされます。
