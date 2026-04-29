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
      className="group text-left w-full border border-[#e8e8e8] hover:border-[#CD622C] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD622C]"
    >
      {/* サムネイル */}
      <div className="w-full aspect-video bg-[#f5f5f5] overflow-hidden">
        {work.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={work.thumbnail}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[12px] text-[#cccccc] font-medium">
              {work.title}
            </span>
          </div>
        )}
      </div>

      {/* テキスト */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[14px] font-semibold text-[#111111] group-hover:text-[#CD622C] transition-colors duration-200">
            {work.title}
          </h3>
          {work.featured && (
            <span className="text-[10px] text-[#CD622C] font-medium ml-2 shrink-0 mt-0.5">
              Featured
            </span>
          )}
        </div>
        <p className="text-[12px] text-[#666666] leading-relaxed mb-3">
          {work.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-[#888888] border border-[#eeeeee] px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
