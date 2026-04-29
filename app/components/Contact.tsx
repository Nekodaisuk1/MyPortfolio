import { profile } from "../data/profile";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-medium text-[#CD622C] uppercase tracking-widest mb-10">
          Contact
        </h2>
        <div className="flex flex-col gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 w-fit"
          >
            <span className="text-[13px] text-[#666666] w-16">GitHub</span>
            <span className="text-[14px] text-[#111111] border-b border-transparent group-hover:border-[#CD622C] group-hover:text-[#CD622C] transition-colors duration-150">
              {profile.github}
            </span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-3 w-fit"
          >
            <span className="text-[13px] text-[#666666] w-16">Email</span>
            <span className="text-[14px] text-[#111111] border-b border-transparent group-hover:border-[#CD622C] group-hover:text-[#CD622C] transition-colors duration-150">
              {profile.email}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
