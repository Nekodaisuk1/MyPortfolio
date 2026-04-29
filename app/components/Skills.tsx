import { profile } from "../data/profile";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-medium text-[#CD622C] uppercase tracking-widest mb-10">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="text-[13px] text-[#111111] border border-[#e8e8e8] px-3 py-1.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
