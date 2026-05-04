import type { Profile } from "../types/profile";

type Props = { profile: Profile };

export function Hero({ profile }: Props) {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="hero" className="min-h-screen flex flex-col pt-13">
      {/* Main: name left / meta right */}
      <div className="flex-1 max-w-5xl mx-auto px-6 w-full flex flex-col justify-center py-16">
        <div className="flex items-start justify-between gap-8">
          {/* Left */}
          <div>
            <p
              className="text-[11px] text-[#CD622C] tracking-[0.14em] mb-5 flex items-center gap-2"
            >
              <span className="inline-block w-4 h-px bg-[#CD622C]" />
              Software Engineer — Tokushima
            </p>
            <h1
              className="leading-[0.9] tracking-[-0.03em] font-light"
              style={{
                fontFamily: "var(--font-serif, 'Noto Serif JP', serif)",
                fontSize: "clamp(72px, 11vw, 120px)",
              }}
            >
              <span className="block text-[#0F0D09]">{firstName || profile.name}</span>
              {lastName && (
                <span
                  className="block text-[#CD622C]"
                  style={{ paddingLeft: "1.4ch" }}
                >
                  {lastName}
                </span>
              )}
            </h1>
          </div>

          {/* Right */}
          <div className="text-right pt-2 shrink-0">
            <p className="text-[11px] text-[#9A9790] tracking-[0.08em] leading-[2.4]">
              FULLSTACK
              <br />
              ENGINEER
              <br />
              <span className="text-[#CD622C]">TOKUSHIMA</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D4D0C8]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-end justify-between">
          <p className="text-[14px] text-[#4A4740] max-w-sm leading-[1.9]">
            {profile.intro}
          </p>
          <div className="flex flex-col items-end gap-2.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#9A9790] hover:text-[#CD622C] transition-colors duration-150 tracking-[0.04em] flex items-center gap-1.5"
            >
              GitHub <span className="text-[10px]">↗</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-[12px] text-[#9A9790] hover:text-[#CD622C] transition-colors duration-150 tracking-[0.04em] flex items-center gap-1.5"
            >
              {profile.email} <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
