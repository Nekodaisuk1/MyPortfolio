import { profile } from "../data/profile";

export function About() {
  return (
    <section id="about" className="py-24 border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-medium text-[#CD622C] uppercase tracking-widest mb-10">
          About
        </h2>
        <p className="text-[15px] text-[#444444] leading-[1.9] max-w-2xl whitespace-pre-line">
          {profile.about}
        </p>
      </div>
    </section>
  );
}
