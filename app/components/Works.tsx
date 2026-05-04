"use client";

import { useState, useMemo } from "react";
import { WorkCard } from "./WorkCard";
import { WorkModal } from "./WorkModal";
import type { Work } from "../types/work";

type Props = { works: Work[] };

function FeaturedCard({ work, onClick }: { work: Work; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="grid grid-cols-2 border border-[#D4D0C8] mb-0.5 cursor-pointer group transition-colors duration-200 hover:border-[#CD622C]"
    >
      {/* Thumb */}
      <div className="bg-[#E9E5DC] flex items-center justify-center overflow-hidden"
        style={{ aspectRatio: "4/3" }}>
        {work.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={work.thumbnail}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <span className="text-[12px] text-[#9A9790]">{work.title}</span>
        )}
      </div>

      {/* Info */}
      <div className="p-10 flex flex-col justify-between">
        <div>
          <span className="inline-block text-[9px] tracking-[0.1em] text-[#CD622C] border border-[#CD622C] px-2 py-1 mb-5">
            FEATURED
          </span>
          <h3
            className="font-light leading-[1.15] tracking-[-0.01em] text-[#0F0D09] mb-4"
            style={{
              fontFamily: "var(--font-serif, 'Noto Serif JP', serif)",
              fontSize: "clamp(28px, 3vw, 40px)",
            }}
          >
            {work.title}
          </h3>
          <p className="text-[13px] text-[#4A4740] leading-[1.8] max-w-[280px]">
            {work.description}
          </p>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-wrap gap-1.5">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-[#9A9790] border border-[#D4D0C8] px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[18px] text-[#D4D0C8] group-hover:text-[#CD622C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
            ↗
          </span>
        </div>
      </div>
    </div>
  );
}

export function Works({ works }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    works.forEach((w) => w.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, [works]);

  const sorted = useMemo(
    () => [...works].sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1)),
    [works]
  );

  const filtered = useMemo(() => {
    if (!activeTag) return sorted;
    return sorted.filter((w) => w.tags.includes(activeTag));
  }, [activeTag, sorted]);

  const featured = filtered.find((w) => w.featured);
  const rest = filtered.filter((w) => !w.featured || filtered.indexOf(w) !== filtered.indexOf(featured!));

  return (
    <>
      <section id="works" className="py-20 border-t border-[#D4D0C8]">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-2.5 text-[10px] text-[#9A9790] tracking-[0.14em]">
              <span className="inline-block w-4 h-px bg-[#CD622C]" />
              Works
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTag(null)}
                className={`text-[11px] px-3 py-1 border transition-all duration-150 ${
                  activeTag === null
                    ? "bg-[#CD622C] text-white border-[#CD622C]"
                    : "border-[#D4D0C8] text-[#9A9790] hover:border-[#CD622C] hover:text-[#CD622C]"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`text-[11px] px-3 py-1 border transition-all duration-150 ${
                    activeTag === tag
                      ? "bg-[#CD622C] text-white border-[#CD622C]"
                      : "border-[#D4D0C8] text-[#9A9790] hover:border-[#CD622C] hover:text-[#CD622C]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <span className="text-[11px] text-[#D4D0C8] tracking-[0.06em]">
              ( {String(filtered.length).padStart(2, "0")} )
            </span>
          </div>

          {/* Featured */}
          {featured && (
            <FeaturedCard work={featured} onClick={() => setSelectedWork(featured)} />
          )}

          {/* Rest: 3-col grid */}
          {rest.length > 0 && (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[#D4D0C8] mt-0.5"
            >
              {rest.map((work) => (
                <WorkCard
                  key={work.title}
                  work={work}
                  onClick={() => setSelectedWork(work)}
                />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-[13px] text-[#9A9790] text-center py-16">
              該当する作品がありません
            </p>
          )}
        </div>
      </section>

      {selectedWork && (
        <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </>
  );
}
