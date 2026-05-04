import { Client } from "@notionhq/client";
import type {
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDataSourceObjectResponse,
  DataSourceObjectResponse,
} from "@notionhq/client";
import type { Profile } from "../types/profile";
import type { Work } from "../types/work";

const notion =
  process.env.NOTION_API_KEY
    ? new Client({ auth: process.env.NOTION_API_KEY })
    : null;

// ---- Notion property helpers ----

type NotionProperty = PageObjectResponse["properties"][string];

function getRichText(prop: NotionProperty | undefined): string {
  if (prop?.type === "rich_text") {
    return prop.rich_text.map((t) => t.plain_text).join("");
  }
  return "";
}

function getTitle(prop: NotionProperty | undefined): string {
  if (prop?.type === "title") {
    return prop.title.map((t) => t.plain_text).join("");
  }
  return "";
}

function getUrl(prop: NotionProperty | undefined): string {
  if (prop?.type === "url") return prop.url ?? "";
  return "";
}

function getEmail(prop: NotionProperty | undefined): string {
  if (prop?.type === "email") return prop.email ?? "";
  return "";
}

function getMultiSelect(prop: NotionProperty | undefined): string[] {
  if (prop?.type === "multi_select") {
    return prop.multi_select.map((s) => s.name);
  }
  return [];
}

function getCheckbox(prop: NotionProperty | undefined): boolean {
  if (prop?.type === "checkbox") return prop.checkbox;
  return false;
}

type AnyNotionPage =
  | PageObjectResponse
  | PartialPageObjectResponse
  | PartialDataSourceObjectResponse
  | DataSourceObjectResponse;

function isFullPageObject(page: AnyNotionPage): page is PageObjectResponse {
  return page.object === "page" && "properties" in page;
}

// ---- Public fetch functions ----

/**
 * Profile DB（1行のみ）からプロフィール情報を取得する。
 * NOTION_PROFILE_DB_ID が未設定の場合は null を返す（静的データにフォールバック）。
 *
 * Notionデータベースのプロパティ名:
 *   Name (title), Tagline (rich_text), Intro (rich_text), About (rich_text),
 *   GitHub (url), Email (email), Skills (multi_select)
 */
export async function fetchProfile(): Promise<Profile | null> {
  if (!notion || !process.env.NOTION_PROFILE_DB_ID) return null;
  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_PROFILE_DB_ID,
      page_size: 1,
    });
    const page = response.results.find(isFullPageObject);
    if (!page) return null;
    const p = page.properties;
    return {
      name: getTitle(p["Name"]),
      tagline: getRichText(p["Tagline"]),
      intro: getRichText(p["Intro"]),
      about: getRichText(p["About"]),
      github: getUrl(p["GitHub"]),
      email: getEmail(p["Email"]),
      skills: getMultiSelect(p["Skills"]),
    };
  } catch (err) {
    console.error("[Notion] fetchProfile failed:", err);
    return null;
  }
}

/**
 * Works DBからWork一覧を取得する。
 * NOTION_WORKS_DB_ID が未設定の場合は null を返す（静的データにフォールバック）。
 *
 * Notionデータベースのプロパティ名:
 *   Title (title), Description (rich_text), Tags (multi_select),
 *   URL (url), Featured (checkbox), Published (checkbox),
 *   Thumbnail (url), MainImage (url), Summary (rich_text),
 *   Challenge (rich_text), Solution (rich_text), Role (rich_text),
 *   Screenshots (rich_text — カンマ区切りURLリスト), DemoUrl (url),
 *   Awards (rich_text — 改行区切りで複数入力可)
 */
export async function fetchWorks(): Promise<Work[] | null> {
  if (!notion || !process.env.NOTION_WORKS_DB_ID) return null;
  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_WORKS_DB_ID,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
      sorts: [
        { property: "Featured", direction: "descending" },
        { timestamp: "created_time", direction: "ascending" },
      ],
    });

    return response.results
      .filter(isFullPageObject)
      .map((page) => {
        const p = page.properties;
        const screenshotsRaw = getRichText(p["Screenshots"]);
        const screenshots = screenshotsRaw
          ? screenshotsRaw
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
          : [];
        const awardsRaw = getRichText(p["Awards"]);
        const awards = awardsRaw
          ? awardsRaw
              .split("\n")
              .map((s) => s.trim())
              .filter(Boolean)
          : [];
        return {
          title: getTitle(p["Title"]),
          description: getRichText(p["Description"]),
          tags: getMultiSelect(p["Tags"]),
          url: getUrl(p["URL"]),
          featured: getCheckbox(p["Featured"]),
          thumbnail: getUrl(p["Thumbnail"]),
          mainImage: getUrl(p["MainImage"]),
          summary: getRichText(p["Summary"]),
          challenge: getRichText(p["Challenge"]),
          solution: getRichText(p["Solution"]),
          role: getRichText(p["Role"]),
          screenshots,
          demoUrl: getUrl(p["DemoUrl"]),
          awards,
        };
      });
  } catch (err) {
    console.error("[Notion] fetchWorks failed:", err);
    return null;
  }
}
