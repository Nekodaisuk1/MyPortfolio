"use client";

type Props = { skills: string[] };

export function Ticker({ skills }: Props) {
  const items = skills.length > 0 ? skills : [
    "TypeScript", "Next.js", "React", "Go", "Python",
    "PostgreSQL", "Docker", "Supabase", "TailwindCSS", "Node.js",
  ];

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-t border-b border-[#D4D0C8] py-2.5">
      <div className="ticker-track flex gap-12 whitespace-nowrap w-max">
        {doubled.map((skill, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            <span className="text-[11px] text-[#9A9790] tracking-[0.1em]">
              {skill}
            </span>
            <span className="text-[7px] text-[#CD622C]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
