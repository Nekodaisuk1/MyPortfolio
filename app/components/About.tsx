type Props = { about: string };

export function About({ about }: Props) {
  return (
    <section id="about" className="py-20 border-t border-[#D4D0C8]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2.5 text-[10px] text-[#9A9790] tracking-[0.14em] mb-10">
          <span className="inline-block w-4 h-px bg-[#CD622C]" />
          About
        </div>

        <div className="grid grid-cols-[200px_1fr] gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block bg-[#CD622C] text-white text-[9px] tracking-[0.1em] px-2.5 py-1 mb-6">
              PROFILE
            </span>
            <p className="text-[11px] text-[#9A9790] tracking-[0.08em] leading-[2.6]">
              STUDENT
              <br />
              ENGINEER
              <br />
              TOKUSHIMA
              <br />
              <span className="text-[#CD622C]">2025</span>
            </p>
          </div>

          {/* Right: orange left border */}
          <p
            className="text-[15px] text-[#4A4740] leading-[2.1] border-l-2 border-[#CD622C] pl-8"
          >
            {about}
          </p>
        </div>
      </div>
    </section>
  );
}
