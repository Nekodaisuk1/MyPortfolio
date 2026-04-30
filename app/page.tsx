import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { fetchProfile, fetchWorks } from "./lib/notion";
import { profile as staticProfile } from "./data/profile";
import staticWorksData from "./data/works.json";
import type { Work } from "./types/work";

// Notionの変更を最大60秒でサイトに反映（ISR）
export const revalidate = 60;

export default async function Home() {
  const [notionProfile, notionWorks] = await Promise.all([
    fetchProfile(),
    fetchWorks(),
  ]);

  // NotionのデータがあればNotionを優先、なければ静的ファイルを使用
  const profile = notionProfile ?? staticProfile;
  const works: Work[] = notionWorks ?? (staticWorksData as Work[]);

  return (
    <main className="bg-white min-h-screen">
      <Nav name={profile.name} />
      <Hero profile={profile} />
      <Works works={works} />
      <Skills skills={profile.skills} />
      <About about={profile.about} />
      <Contact github={profile.github} email={profile.email} />
      <footer className="border-t border-[#e8e8e8] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[12px] text-[#999999]">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </main>
  );
}
