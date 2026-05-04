"use client";

import { useEffect, useRef } from "react";
import type { Work } from "../types/work";

type Props = {
  work: Work;
  onClose: () => void;
};

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-video bg-[#f5f5f5] flex items-center justify-center rounded-lg">
      <span className="text-[12px] text-[#aaaaaa]">{label}</span>
    </div>
  );
}

function WorkImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  if (!src) return <ImagePlaceholder label={alt} />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} />
  );
}

export function WorkModal({ work, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const hasScreenshots =
    work.screenshots && work.screenshots.some((s) => s !== "");
  const screenshots = work.screenshots ?? [];

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 md:p-8"
    >
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          aria-label="閉じる"
          className="sticky top-0 ml-auto flex items-center justify-center w-10 h-10 text-[#666666] hover:text-[#111111] transition-colors bg-white z-10 float-right"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <line x1="2" y1="2" x2="16" y2="16" />
            <line x1="16" y1="2" x2="2" y2="16" />
          </svg>
        </button>

        <div className="p-8 pt-2 clear-both">
          {/* ヘッダー */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-[22px] font-bold text-[#111111]">
                {work.title}
              </h2>
              {work.featured && (
                <span className="text-[11px] text-[#CD622C] font-medium border border-[#CD622C] px-2 py-0.5">
                  Featured
                </span>
              )}
            </div>
            <p className="text-[14px] text-[#666666]">{work.description}</p>
          </div>

          {/* メイン画像 */}
          <div className="mb-8">
            <WorkImage
              src={work.mainImage ?? ""}
              alt={`${work.title} メイン画像`}
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* 概要 */}
          {work.summary && (
            <section className="mb-6">
              <h3 className="text-[11px] font-medium text-[#CD622C] uppercase tracking-widest mb-2">
                Overview
              </h3>
              <p className="text-[14px] text-[#444444] leading-relaxed">
                {work.summary}
              </p>
            </section>
          )}

          {/* 課題 */}
          {work.challenge && (
            <section className="mb-6">
              <h3 className="text-[11px] font-medium text-[#CD622C] uppercase tracking-widest mb-2">
                Challenge
              </h3>
              <p className="text-[14px] text-[#444444] leading-relaxed">
                {work.challenge}
              </p>
            </section>
          )}

          {/* 解決方法 */}
          {work.solution && (
            <section className="mb-6">
              <h3 className="text-[11px] font-medium text-[#CD622C] uppercase tracking-widest mb-2">
                Solution
              </h3>
              <p className="text-[14px] text-[#444444] leading-relaxed">
                {work.solution}
              </p>
            </section>
          )}

          {/* 担当範囲 */}
          {work.role && (
            <section className="mb-6">
              <h3 className="text-[11px] font-medium text-[#CD622C] uppercase tracking-widest mb-2">
                My Role
              </h3>
              <p className="text-[14px] text-[#444444] leading-relaxed">
                {work.role}
              </p>
            </section>
          )}

          {/* 受賞歴 */}
          {work.awards && work.awards.length > 0 && (
            <section className="mb-6">
              <h3 className="text-[11px] font-medium text-[#CD622C] uppercase tracking-widest mb-3">
                Awards
              </h3>
              <ul className="flex flex-col gap-2">
                {work.awards.map((award, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#444444]">
                    <span className="mt-0.5 shrink-0">🏆</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 技術スタック */}
          <section className="mb-8">
            <h3 className="text-[11px] font-medium text-[#CD622C] uppercase tracking-widest mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] text-[#444444] border border-[#e8e8e8] px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* スクリーンショット */}
          {screenshots.length > 0 && (
            <section className="mb-8">
              <h3 className="text-[11px] font-medium text-[#CD622C] uppercase tracking-widest mb-4">
                Screenshots
              </h3>
              <div className="flex flex-col gap-3">
                {screenshots.map((src, i) =>
                  src ? (
                    <img
                      key={i}
                      src={src}
                      alt={`${work.title} スクリーンショット ${i + 1}`}
                      className="w-full rounded-lg object-cover"
                    />
                  ) : (
                    <ImagePlaceholder
                      key={i}
                      label={`Screenshot ${i + 1}`}
                    />
                  )
                )}
              </div>
            </section>
          )}

          {/* リンク */}
          <div className="flex gap-4 pt-6 border-t border-[#e8e8e8]">
            {work.url && (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#CD622C] hover:border-[#CD622C] transition-colors duration-150"
              >
                GitHub →
              </a>
            )}
            {work.demoUrl && (
              <a
                href={work.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#CD622C] hover:border-[#CD622C] transition-colors duration-150"
              >
                Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
