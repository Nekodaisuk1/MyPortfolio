"use client";

import { useState, useMemo } from "react";
import { WorkCard } from "./WorkCard";
import { WorkModal } from "./WorkModal";
import worksData from "../data/works.json";
import type { Work } from "../types/work";

const works: Work[] = worksData;

export function Works() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    works.forEach((w) => w.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filtered = useMemo(() => {
    const sorted = [...works].sort((a, b) =>
      a.featured === b.featured ? 0 : a.featured ? -1 : 1
    );
    if (!activeTag) return sorted;
    return sorted.filter((w) => w.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <>
      <section id="works" className="py-24 border-t border-[#e8e8e8]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm font-medium text-[#CD622C] uppercase tracking-widest mb-10">
            Works
          </h2>

          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-[12px] px-3 py-1 border transition-colors duration-150 ${
                activeTag === null
                  ? "border-[#111111] text-[#111111]"
                  : "border-[#e8e8e8] text-[#666666] hover:border-[#111111] hover:text-[#111111]"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`text-[12px] px-3 py-1 border transition-colors duration-150 ${
                  activeTag === tag
                    ? "border-[#CD622C] text-[#CD622C]"
                    : "border-[#e8e8e8] text-[#666666] hover:border-[#111111] hover:text-[#111111]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filtered.map((work) => (
              <WorkCard
                key={work.title}
                work={work}
                onClick={() => setSelectedWork(work)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-[13px] text-[#666666] text-center py-12">
              該当する作品がありません
            </p>
          )}
        </div>
      </section>

      {selectedWork && (
        <WorkModal
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </>
  );
}
