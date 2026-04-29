"use client";

type Work = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  featured: boolean;
};

type Props = {
  work: Work;
};

export function WorkCard({ work }: Props) {
  return (
    <a
      href={work.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-[#e8e8e8] p-6 hover:border-[#CD622C] transition-colors duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-[15px] font-semibold text-[#111111] group-hover:text-[#CD622C] transition-colors duration-200">
          {work.title}
        </h3>
        {work.featured && (
          <span className="text-[11px] text-[#CD622C] font-medium ml-2 shrink-0">
            Featured
          </span>
        )}
      </div>
      <p className="text-[13px] text-[#666666] leading-relaxed mb-4">
        {work.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] text-[#666666] border border-[#e8e8e8] px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
