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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="text-[14px] font-semibold text-[#111111] tracking-tight"
        >
          {name}
        </a>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#666666] hover:text-[#111111] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
