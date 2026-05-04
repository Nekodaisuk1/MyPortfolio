type Props = { github: string; email: string };

export function Contact({ github, email }: Props) {
  return (
    <section id="contact" className="py-20 border-t border-[#D4D0C8]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2.5 text-[10px] text-[#9A9790] tracking-[0.14em] mb-10">
          <span className="inline-block w-4 h-px bg-[#CD622C]" />
          Contact
        </div>

        <div className="border-t border-[#D4D0C8]">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-5 border-b border-[#D4D0C8] hover:pl-3 transition-all duration-200"
          >
            <span className="text-[10px] text-[#9A9790] tracking-[0.12em] w-20 group-hover:text-[#CD622C] transition-colors duration-200">
              GITHUB
            </span>
            <span className="flex-1 text-[14px] text-[#4A4740]">{github}</span>
            <span className="text-[13px] text-[#D4D0C8] group-hover:text-[#CD622C] transition-colors duration-200">
              ↗
            </span>
          </a>
          <a
            href={`mailto:${email}`}
            className="group flex items-center justify-between py-5 border-b border-[#D4D0C8] hover:pl-3 transition-all duration-200"
          >
            <span className="text-[10px] text-[#9A9790] tracking-[0.12em] w-20 group-hover:text-[#CD622C] transition-colors duration-200">
              EMAIL
            </span>
            <span className="flex-1 text-[14px] text-[#4A4740]">{email}</span>
            <span className="text-[13px] text-[#D4D0C8] group-hover:text-[#CD622C] transition-colors duration-200">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
