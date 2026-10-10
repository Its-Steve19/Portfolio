import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { profileData } from "../../data/profile";

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 border-t border-[#272730]">
      <Container>
        <SectionHeading
          title="Professional Journey & Education"
          subtitle="My academic background, technical milestones, and practical software development milestones."
        />

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="relative pl-8 border-l-2 border-emerald-500/40 space-y-2">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-[#0a0a0c]" />
            <span className="text-xs text-emerald-400 font-medium">
              Ongoing • Concluding December
            </span>
            <h3 className="text-xl font-bold text-white">
              {profileData.education.degree}
            </h3>
            <p className="text-sm text-gray-300">
              {profileData.education.institution}
            </p>
            <p className="text-sm text-gray-400 pt-2">
              Focusing on advanced systems design, software engineering
              methodologies, database management, and machine learning
              principles.
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-[#272730] space-y-2">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#272730] ring-4 ring-[#0a0a0c]" />
            <span className="text-xs text-emerald-400 font-medium">
              Practical Engineering & Open Source
            </span>
            <h3 className="text-xl font-bold text-white">
              Full-Stack & ML Projects
            </h3>
            <p className="text-sm text-gray-300">
              Kiawara OnionLink & Zion City Flats
            </p>
            <p className="text-sm text-gray-400 pt-2">
              Developing production-grade web applications integrating React,
              TypeScript, Node.js, PostgreSQL, and Python ML pipelines.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
