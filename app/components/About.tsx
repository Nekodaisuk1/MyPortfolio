import type { Profile } from "../types/profile";

type Props = Pick<
  Profile,
  "about" | "birthday" | "school" | "currentLocation" | "hometown"
>;

type InfoRowProps = { label: string; value?: string };

function InfoRow({ label, value }: InfoRowProps) {
  if (!value) return null;
  return (
    <div className="flex gap-4 py-3 border-b border-[#D4D0C8] last:border-0">
      <span className="text-[10px] text-[#9A9790] tracking-[0.1em] w-20 shrink-0 pt-0.5">
        {label}
      </span>
      <span className="text-[13px] text-[#4A4740] leading-relaxed">{value}</span>
    </div>
  );
}

export function About({ about, birthday, school, currentLocation, hometown }: Props) {
  const hasInfo = birthday || school || currentLocation || hometown;

  return (
    <section id="about" className="py-20 border-t border-[#D4D0C8]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2.5 text-[10px] text-[#9A9790] tracking-[0.14em] mb-10">
          <span className="inline-block w-4 h-px bg-[#CD622C]" />
          About
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
          {/* Left: structured profile */}
          <div>
            <span className="inline-block bg-[#CD622C] text-white text-[9px] tracking-[0.1em] px-2.5 py-1 mb-6">
              PROFILE
            </span>

            {hasInfo ? (
              <div className="border-t border-[#D4D0C8]">
                <InfoRow label="生年月日" value={birthday} />
                <InfoRow label="学校" value={school} />
                <InfoRow label="現在地" value={currentLocation} />
                <InfoRow label="出身" value={hometown} />
              </div>
            ) : (
              <p className="text-[11px] text-[#9A9790] tracking-[0.08em] leading-[2.6]">
                STUDENT
                <br />
                ENGINEER
                <br />
                TOKUSHIMA
              </p>
            )}
          </div>

          {/* Right: bio with orange left border */}
          <div className="border-l-2 border-[#CD622C] pl-8">
            <p className="text-[15px] text-[#4A4740] leading-[2.1] whitespace-pre-line">
              {about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
