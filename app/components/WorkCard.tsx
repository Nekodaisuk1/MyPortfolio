"use client";

import type { Work } from "../types/work";

type Props = {
  work: Work;
  onClick: () => void;
};

export function WorkCard({ work, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full bg-[#F2EFE8] hover:bg-[#E9E5DC] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD622C]"
    >
      {/* Thumb */}
      <div className="w-full aspect-video bg-[#E9E5DC] group-hover:bg-[#D4D0C8] transition-colors duration-200 overflow-hidden flex items-center justify-center">
        {work.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={work.thumbnail}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <span className="text-[11px] text-[#9A9790] tracking-[0.04em]">
            {work.title}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-1.5">
          <h3
            className="text-[15px] font-light text-[#0F0D09] group-hover:text-[#CD622C] transition-colors duration-150 leading-[1.3]"
            style={{ fontFamily: "var(--font-serif, 'Noto Serif JP', serif)" }}
          >
            {work.title}
          </h3>
          <div className="flex items-center gap-1.5 ml-2 shrink-0 mt-0.5">
            {work.awards && work.awards.length > 0 && (
              <span className="text-[11px]" title={work.awards.join("\n")}>🏆</span>
            )}
          </div>
        </div>
        <p className="text-[12px] text-[#9A9790] leading-[1.7] mb-3">
          {work.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-[#9A9790] border border-[#D4D0C8] px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
