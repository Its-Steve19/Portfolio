import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { skillCategories } from "../../data/skills";
import { CheckCircle2 } from "lucide-react";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-[#272730]">
      <Container>
        <SectionHeading
          title="Technical Capabilities"
          subtitle="Core tools, frameworks, and technologies I work with to build software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-[#18181f] border border-[#272730] flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-200"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-[#272730]">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2.5 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
