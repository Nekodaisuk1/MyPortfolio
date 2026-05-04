type Props = { skills: string[] };

export function Skills({ skills }: Props) {
  return (
    <section id="skills" className="py-20 border-t border-[#D4D0C8]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2.5 text-[10px] text-[#9A9790] tracking-[0.14em] mb-10">
          <span className="inline-block w-4 h-px bg-[#CD622C]" />
          Skills
        </div>

        <div className="flex gap-12 items-start">
          {/* Vertical aside text */}
          <div
            className="text-[52px] font-light text-[#D4D0C8] leading-none select-none shrink-0"
            style={{
              fontFamily: "var(--font-serif, 'Noto Serif JP', serif)",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Skills
          </div>

          {/* Grid */}
          <div className="flex-1 flex flex-wrap border-t border-l border-[#D4D0C8]">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[13px] text-[#4A4740] px-5 py-3 border-r border-b border-[#D4D0C8] hover:bg-[#CD622C] hover:text-white hover:border-[#CD622C] transition-all duration-150 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
