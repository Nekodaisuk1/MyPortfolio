@AGENTS.md

## Notion CMS

このポートフォリオはNotionをCMSとして使える。環境変数を設定すればNotionのデータが優先され、未設定の場合は `app/data/` の静的データが使われる。

### セットアップ手順

#### 1. Notionインテグレーション作成
1. https://www.notion.so/my-integrations にアクセス
2. 「新しいインテグレーション」を作成
3. 表示された **Internal Integration Secret** をメモ

#### 2. プロフィールページの作成
Notionでページを作り、以下のプロパティを追加（名前と型を正確に）:

| プロパティ名 | 型 |
|---|---|
| Name | タイトル |
| Tagline | テキスト |
| Intro | テキスト |
| About | テキスト |
| GitHub | URL |
| Email | メール |
| Skills | マルチセレクト |

作成後、ページをインテグレーションと共有する（ページ右上「…」→「コネクト」）。

ページIDはURLの末尾32文字: `notion.so/My-Page-{PAGE_ID}`

#### 3. Worksデータベースの作成
Notionでデータベースを作り、以下のプロパティを追加:

| プロパティ名 | 型 |
|---|---|
| Title | タイトル |
| Description | テキスト |
| Tags | マルチセレクト |
| URL | URL |
| Featured | チェックボックス |
| Published | チェックボックス ← 表示/非表示の切替 |
| Thumbnail | URL（サムネイル画像のURL） |
| MainImage | URL（詳細モーダルのメイン画像URL） |
| Summary | テキスト |
| Challenge | テキスト |
| Solution | テキスト |
| Role | テキスト |
| Screenshots | テキスト（URLをカンマ区切りで複数入力可） |
| DemoUrl | URL |

データベースもインテグレーションと共有する。

データベースIDはURLの末尾32文字: `notion.so/{DATABASE_ID}?v=...`

#### 4. 環境変数を設定
`.env.local.example` を `.env.local` にコピーして値を入力:

```
NOTION_API_KEY=secret_xxx...
NOTION_PROFILE_PAGE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_WORKS_DB_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### 5. 動作確認
`npm run dev` で起動し、Notionのデータが表示されれば成功。

### キャッシュ更新
本番環境ではNotionの変更は最大60秒後に反映（ISR）。
即時反映したい場合は `NOTION_REVALIDATE_SECONDS=0` を設定（開発時のみ推奨）。

### コード構造
- `app/lib/notion.ts` — Notionからデータを取得するロジック
- `app/page.tsx` — Notionデータを取得してコンポーネントに渡すServer Component
- `app/data/profile.ts` / `app/data/works.json` — フォールバック用の静的データ
