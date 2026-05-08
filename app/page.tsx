import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Works } from "./components/Works";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { fetchProfile, fetchWorks, fetchProfileItems } from "./lib/notion";
import { profile as staticProfile } from "./data/profile";
import staticWorksData from "./data/works.json";
import type { Work } from "./types/work";

export const revalidate = 60;

export default async function Home() {
  const [notionProfile, notionWorks, notionProfileItems] = await Promise.all([
    fetchProfile(),
    fetchWorks(),
    fetchProfileItems(),
  ]);

  const profile = notionProfile ?? staticProfile;
  const works: Work[] = notionWorks ?? (staticWorksData as Work[]);
  const profileItems = notionProfileItems ?? [];

  return (
    <main className="bg-[#F2EFE8] min-h-screen">
      <Nav name={profile.name} />
      <Hero profile={profile} />
      <Ticker skills={profile.skills} />
      <Works works={works} />
      <Skills skills={profile.skills} />
      <About about={profile.about} items={profileItems} />
      <Contact github={profile.github} email={profile.email} />
      <footer className="border-t border-[#D4D0C8]">
        <div className="max-w-5xl mx-auto px-6 py-7 flex items-center justify-between">
          <p className="text-[11px] text-[#9A9790]">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <p
            className="text-[12px] text-[#CD622C] font-light"
            style={{ fontFamily: "var(--font-serif, 'Noto Serif JP', serif)" }}
          >
            Tokushima, Japan
          </p>
        </div>
      </footer>
    </main>
  );
}
