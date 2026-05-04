"use client";

const links = [
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

type Props = { name: string };

export function Nav({ name }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F2EFE8]">
      <div className="max-w-5xl mx-auto px-6 h-13 flex items-center justify-between">
        <a
          href="#hero"
          className="font-serif text-[15px] font-light tracking-[0.02em] text-[#0F0D09]"
          style={{ fontFamily: "var(--font-serif, 'Noto Serif JP', serif)" }}
        >
          {name}
        </a>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] text-[#9A9790] hover:text-[#CD622C] transition-colors duration-150 tracking-[0.04em]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
