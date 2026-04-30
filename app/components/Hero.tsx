import type { Profile } from "../types/profile";

type Props = { profile: Profile };

export function Hero({ profile }: Props) {
  return (
    <section id="hero" className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[12px] font-medium text-[#CD622C] uppercase tracking-widest mb-6">
          {profile.tagline}
        </p>
        <h1 className="text-[48px] md:text-[64px] font-bold text-[#111111] leading-none tracking-tight mb-6">
          {profile.name}
        </h1>
        <p className="text-[16px] text-[#666666] max-w-md leading-relaxed mb-10">
          {profile.intro}
        </p>
        <div className="flex gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#CD622C] hover:border-[#CD622C] transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-[13px] text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#CD622C] hover:border-[#CD622C] transition-colors duration-150"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
